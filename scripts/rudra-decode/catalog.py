#!/usr/bin/env python3
"""Build a Baraha glyph atlas, auto-match to Unicode, write catalog/map.json.

High-confidence unique image matches are filled. The rest stay '?' until named
from the contact sheets. Identity (non-BRH) fonts are not catalogued; apply.py
passes them through.
"""

from __future__ import annotations

import json
import sys
from collections import defaultdict
from io import BytesIO
from pathlib import Path

import fitz
from PIL import Image, ImageChops, ImageOps, ImageDraw, ImageFont

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import (  # noqa: E402
    CATALOG,
    DECODE,
    FONTS_DIR,
    GLYPHS_DIR,
    MAP_PATH,
    PDFS,
    SHEETS_DIR,
    SPANS,
    is_baraha,
    norm_font,
)

UNICODE_FONT = "/System/Library/Fonts/Supplemental/DevanagariMT.ttc"
PALETTE_SIZE = 96
GLYPH_SIZE = 160
MATCH_RATIO = 0.55  # best must beat second by this relative gap
MAX_MSE = 1800.0


def load_spans() -> list[dict]:
    recs = []
    for name in ("namakam.jsonl", "camakam.jsonl"):
        path = SPANS / name
        with path.open(encoding="utf-8") as f:
            for line in f:
                recs.append(json.loads(line))
    return recs


def unique_baraha(recs: list[dict]) -> list[tuple[str, int, str]]:
    seen = {}
    for r in recs:
        if not is_baraha(r["font"]):
            continue
        key = (r["font"], r["cp"])
        if key not in seen:
            seen[key] = r["ch"]
    return [(f, cp, seen[(f, cp)]) for f, cp in sorted(seen)]


def font_file_for(font: str, cp: int) -> Path | None:
    """Pick an extracted TTF whose cmap contains cp, preferring Extra then any BRH."""
    candidates = []
    for pdf_dir in (FONTS_DIR / "namakam", FONTS_DIR / "camakam"):
        if not pdf_dir.is_dir():
            continue
        for p in sorted(pdf_dir.glob("*.ttf")):
            if norm_font(p.stem.replace("_", "+")) == font or font in p.stem:
                candidates.append(p)
            # filenames use _ not +
            if font.replace("+", "_") in p.stem or font in p.name:
                candidates.append(p)
    # Prefer files that literally contain the font name
    named = [p for p in candidates if font in p.name or font.replace("BRH", "BRH") in p.name]
    pool = named or candidates
    # Fallback: any BRH ttf whose name contains Extra/RN/Malayalam matching
    if not pool:
        for pdf_dir in (FONTS_DIR / "namakam", FONTS_DIR / "camakam"):
            for p in pdf_dir.glob("*BRH*.ttf"):
                if font in p.name or font in p.stem.replace("_", ""):
                    pool.append(p)
    # Direct match on dumped name: BCDFEE_BRHDevanagariExtra.ttf
    if not pool:
        for pdf_dir in (FONTS_DIR / "namakam", FONTS_DIR / "camakam"):
            for p in pdf_dir.glob("*.ttf"):
                if p.stem.split("_", 1)[-1] == font or p.stem.endswith(font):
                    pool.append(p)
    for p in pool:
        return p
    return None


def find_ttf(font: str) -> Path | None:
    """Resolve extracted TTF for a PDF font name like BRHDevanagariExtra."""
    for pdf_dir in (FONTS_DIR / "namakam", FONTS_DIR / "camakam"):
        if not pdf_dir.is_dir():
            continue
        for p in sorted(pdf_dir.glob("*.ttf")):
            # BCDFEE_BRHDevanagariExtra.ttf -> BRHDevanagariExtra
            rest = p.stem.split("_", 1)[-1]
            if rest == font:
                return p
            if p.stem.endswith("_" + font) or p.stem == font:
                return p
    return None


def render_char_ttf(ttf: Path, ch: str, size: int = GLYPH_SIZE) -> Image.Image:
    doc = fitz.open()
    page = doc.new_page(width=size, height=size)
    page.insert_font(fontname="f", fontfile=str(ttf))
    # Center-ish
    page.insert_text((16, size * 0.72), ch, fontname="f", fontsize=size * 0.62, color=(0, 0, 0))
    pix = page.get_pixmap(alpha=False)
    img = Image.open(BytesIO(pix.tobytes("png"))).convert("L")
    doc.close()
    return img


def ink_bbox(img: Image.Image, threshold: int = 245) -> Image.Image:
    """Crop to non-white ink; return a square padded crop."""
    bw = img.point(lambda x: 0 if x < threshold else 255)
    inv = ImageOps.invert(bw)
    box = inv.getbbox()
    if not box:
        return Image.new("L", (64, 64), 255)
    cropped = img.crop(box)
    side = max(cropped.size) + 4
    canvas = Image.new("L", (side, side), 255)
    ox = (side - cropped.size[0]) // 2
    oy = (side - cropped.size[1]) // 2
    canvas.paste(cropped, (ox, oy))
    return canvas.resize((64, 64), Image.Resampling.BILINEAR)


def mse(a: Image.Image, b: Image.Image) -> float:
    a = ink_bbox(a)
    b = ink_bbox(b)
    diff = ImageChops.difference(a, b)
    hist = diff.histogram()
    s = sum(i * i * hist[i] for i in range(256))
    return s / (64 * 64)


def unicode_palette() -> list[tuple[str, str]]:
    """(label, string) candidates to match against."""
    items: list[tuple[str, str]] = []
    # Devanagari block + a few extras
    for cp in range(0x0900, 0x0980):
        items.append((f"U+{cp:04X}", chr(cp)))
    for cp in range(0x1CD0, 0x1CFF):
        items.append((f"U+{cp:04X}", chr(cp)))
    for cp in range(0xA8E0, 0xA8FF):
        items.append((f"U+{cp:04X}", chr(cp)))
    extras = [
        "।",
        "॥",
        "ऽ",
        "ॐ",
        "–",
        "—",
        "-",
        "|",
        "||",
        "(",
        ")",
        "[",
        "]",
        ",",
        ".",
        " ",
        "×",
        "₹",
    ]
    for s in extras:
        items.append((s, s))
    # common conjuncts
    cons = "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह"
    for c in cons:
        items.append((c + "्", c + "्"))
        items.append((c + "ा", c + "ा"))
        items.append((c + "ि", c + "ि"))
        items.append((c + "ी", c + "ी"))
        items.append((c + "ु", c + "ु"))
        items.append((c + "ू", c + "ू"))
        items.append((c + "े", c + "े"))
        items.append((c + "ै", c + "ै"))
        items.append((c + "ो", c + "ो"))
        items.append((c + "ौ", c + "ौ"))
        items.append((c + "ं", c + "ं"))
        items.append((c + "ः", c + "ः"))
        items.append((c + "ँ", c + "ँ"))
    more = [
        "क्ष",
        "त्र",
        "ज्ञ",
        "श्र",
        "क्र",
        "ग्र",
        "प्र",
        "त्र",
        "द्र",
        "द्व",
        "त्त",
        "क्क",
        "च्च",
        "ज्ज",
        "ल्ल",
        "श्व",
        "ह्म",
        "ह्य",
        "ह्र",
        "क्त",
        "ष्ट",
        "ष्ठ",
        "ङ्क",
        "ङ्ग",
        "ञ्च",
        "त्न",
        "द्म",
        "द्ध",
        "db",  # skip junk
    ]
    for s in more:
        if s.isascii():
            continue
        items.append((s, s))
    # unique by string
    seen = set()
    uniq = []
    for lab, s in items:
        if s in seen or not s:
            continue
        seen.add(s)
        uniq.append((lab, s))
    return uniq


def render_unicode(s: str, font_path: str, size: int = PALETTE_SIZE) -> Image.Image | None:
    try:
        img = Image.new("L", (size, size), 255)
        draw = ImageDraw.Draw(img)
        font = ImageFont.truetype(font_path, int(size * 0.6), index=0)
        draw.text((8, 8), s, font=font, fill=0)
        return img
    except Exception:
        return None


PAGE_CACHE: dict[tuple[str, int], Image.Image] = {}


def page_image(pdf_key: str, page: int, pdfs: dict[str, Path]) -> Image.Image:
    key = (pdf_key, page)
    if key not in PAGE_CACHE:
        doc = fitz.open(pdfs[pdf_key])
        pix = doc[page - 1].get_pixmap(matrix=fitz.Matrix(2.0, 2.0), alpha=False)
        PAGE_CACHE[key] = Image.open(BytesIO(pix.tobytes("png"))).convert("RGB")
        doc.close()
    return PAGE_CACHE[key]


def contact_sheet(
    recs: list[dict], font: str, cp: int, pdfs: dict[str, Path], dest: Path, n: int = 6
) -> None:
    hits = [r for r in recs if r["font"] == font and r["cp"] == cp][:n]
    if not hits:
        return
    crops = []
    for r in hits:
        page_img = page_image(r["pdf"], r["page"], pdfs)
        x0, y0, x1, y1 = r["bbox"]
        pad = 18
        box = [
            max(0, int(x0 * 2) - pad),
            max(0, int(y0 * 2) - pad),
            min(page_img.size[0], int(x1 * 2) + pad),
            min(page_img.size[1], int(y1 * 2) + pad),
        ]
        crop = page_img.crop(box)
        draw = ImageDraw.Draw(crop)
        # inner rect for the glyph
        rx0 = int(x0 * 2) - box[0]
        ry0 = int(y0 * 2) - box[1]
        rx1 = int(x1 * 2) - box[0]
        ry1 = int(y1 * 2) - box[1]
        draw.rectangle([rx0, ry0, rx1, ry1], outline=(220, 0, 0), width=2)
        crops.append(crop)
    if not crops:
        return
    h = max(c.size[1] for c in crops)
    w = sum(c.size[0] for c in crops) + 4 * len(crops)
    sheet = Image.new("RGB", (w, h), (255, 255, 255))
    x = 0
    for c in crops:
        sheet.paste(c, (x, 0))
        x += c.size[0] + 4
    dest.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(dest)


def main() -> int:
    recs = load_spans()
    keys = unique_baraha(recs)
    print(f"unique Baraha (font, cp): {len(keys)}")
    GLYPHS_DIR.mkdir(parents=True, exist_ok=True)
    SHEETS_DIR.mkdir(parents=True, exist_ok=True)

    # Pre-render unicode palette once
    print("rendering unicode palette…")
    palette = []
    for lab, s in unicode_palette():
        img = render_unicode(s, UNICODE_FONT)
        if img is None:
            continue
        if ink_bbox(img).getbbox() is None:
            continue
        palette.append((lab, s, img))
    print(f"  {len(palette)} palette items")

    mapping = {}
    auto_ok = 0
    for font, cp, ch in keys:
        ttf = find_ttf(font)
        slot = {
            "font": font,
            "cp": cp,
            "ch": ch,
            "unicode": "?",
            "how": "unset",
            "ttf": str(ttf) if ttf else None,
        }
        gdir = GLYPHS_DIR / font
        gdir.mkdir(parents=True, exist_ok=True)
        gpath = gdir / f"U+{cp:04X}.png"
        if ttf:
            img = render_char_ttf(ttf, ch)
            img.save(gpath)
            slot["glyph"] = str(gpath)
            # auto-match
            scores = []
            for lab, s, pimg in palette:
                scores.append((mse(img, pimg), lab, s))
            scores.sort()
            best, second = scores[0], scores[1] if len(scores) > 1 else (1e9, "", "")
            slot["auto_best"] = {"mse": round(best[0], 1), "label": best[1], "s": best[2]}
            slot["auto_second"] = {
                "mse": round(second[0], 1),
                "label": second[1],
                "s": second[2],
            }
            if best[0] < MAX_MSE and (second[0] - best[0]) / max(best[0], 1) > MATCH_RATIO:
                slot["unicode"] = best[2]
                slot["how"] = "auto"
                auto_ok += 1
        else:
            slot["glyph"] = None
        mapping[f"{font}:U+{cp:04X}"] = slot
        print(
            f"  {font} U+{cp:04X} {ch!r:8} -> {slot['unicode']!r:8} "
            f"({slot['how']})"
        )

    print("contact sheets (this walks pages)…")
    for font, cp, ch in keys:
        dest = SHEETS_DIR / font / f"U+{cp:04X}.png"
        contact_sheet(recs, font, cp, PDFS, dest)

    MAP_PATH.write_text(json.dumps(mapping, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"auto-named {auto_ok}/{len(keys)} -> {MAP_PATH}")
    (CATALOG / "keys.json").write_text(
        json.dumps(
            [{"font": f, "cp": cp, "ch": ch} for f, cp, ch in keys],
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
