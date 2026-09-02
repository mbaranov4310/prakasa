#!/usr/bin/env python3
"""Extract glyph streams from the VedaVMS PDFs.

Primary: pymupdf rawdict (bboxes).
Secondary: pypdf text visitor.
BRH fonts must match after stripping whitespace; extra overlapping U+2013 in
pypdf (rawdict collapsed a double tick) is allowed. Identity-font fights
are logged, not used as Baraha source of truth.
"""

from __future__ import annotations

import json
import sys
from collections import defaultdict
from pathlib import Path

import fitz
from pypdf import PdfReader

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import CATALOG, DECODE, FONTS_DIR, PDFS, SPANS, compact, is_baraha, norm_font  # noqa: E402


def mupdf_chars(page: fitz.Page) -> list[dict]:
    out = []
    for block in page.get_text("rawdict")["blocks"]:
        if block.get("type") != 0:
            continue
        for line in block["lines"]:
            for span in line["spans"]:
                font = span["font"]
                size = float(span["size"])
                chars = span.get("chars") or []
                if not chars and span.get("text"):
                    x0, y0, x1, y1 = span["bbox"]
                    for i, ch in enumerate(span["text"]):
                        out.append(
                            {
                                "font": font,
                                "size": size,
                                "cp": ord(ch),
                                "ch": ch,
                                "bbox": [x0, y0, x1, y1],
                            }
                        )
                    continue
                for ch in chars:
                    c = ch["c"]
                    out.append(
                        {
                            "font": font,
                            "size": size,
                            "cp": ord(c) if c else 0,
                            "ch": c,
                            "bbox": [round(x, 3) for x in ch["bbox"]],
                        }
                    )
    return out


def pypdf_by_font(reader: PdfReader, page_index: int) -> dict[str, str]:
    by: dict[str, str] = defaultdict(str)

    def visitor(text, cm, tm, font_dict, font_size):
        if not text:
            return
        name = None
        if font_dict:
            name = font_dict.get("/BaseFont") or font_dict.get("/Name")
        by[norm_font(name)] += text

    reader.pages[page_index].extract_text(visitor_text=visitor)
    return by


def raw_by_font(chars: list[dict]) -> dict[str, str]:
    by: dict[str, str] = defaultdict(str)
    for c in chars:
        by[c["font"]] += c["ch"] or ""
    return by


def agree_page(page_no: int, pypdf_fonts: dict[str, str], raw_fonts: dict[str, str]) -> list[dict]:
    notes = []
    fonts = set(pypdf_fonts) | set(raw_fonts)
    for font in sorted(fonts):
        a = compact(pypdf_fonts.get(font, ""))
        b = compact(raw_fonts.get(font, ""))
        if a == b:
            continue
        if a.replace("–", "") == b.replace("–", ""):
            notes.append(
                {
                    "page": page_no,
                    "font": font,
                    "kind": "en-dash-overlap",
                    "pypdf_dashes": a.count("–"),
                    "mupdf_dashes": b.count("–"),
                }
            )
            continue
        rec = {
            "page": page_no,
            "font": font,
            "kind": "mismatch",
            "pypdf_len": len(a),
            "mupdf_len": len(b),
        }
        if is_baraha(font):
            rec["fatal"] = True
        else:
            rec["fatal"] = False
            rec["note"] = "identity font; JSONL uses mupdf"
        notes.append(rec)
    return notes


def dump_fonts(doc: fitz.Document, dest: Path) -> list[dict]:
    dest.mkdir(parents=True, exist_ok=True)
    seen = set()
    dumped = []
    for pno in range(doc.page_count):
        for item in doc.get_page_fonts(pno):
            xref = item[0]
            if xref in seen:
                continue
            seen.add(xref)
            name, ext, ftype, data = doc.extract_font(xref)
            if not data:
                continue
            safe = name.replace("+", "_").replace("/", "_")
            path = dest / f"{safe}.{ext or 'ttf'}"
            path.write_bytes(data)
            dumped.append(
                {
                    "xref": xref,
                    "name": name,
                    "norm": norm_font(name),
                    "ext": ext,
                    "path": str(path),
                    "bytes": len(data),
                }
            )
    return dumped


def extract_pdf(key: str, pdf_path: Path) -> tuple[list[dict], list[dict], list[dict], list[dict]]:
    if not pdf_path.is_file():
        raise FileNotFoundError(pdf_path)
    doc = fitz.open(pdf_path)
    reader = PdfReader(str(pdf_path))
    records = []
    notes = []
    fatal = []
    for i in range(doc.page_count):
        chars = mupdf_chars(doc[i])
        p_fonts = pypdf_by_font(reader, i)
        r_fonts = raw_by_font(chars)
        page_notes = agree_page(i + 1, pypdf_fonts=p_fonts, raw_fonts=r_fonts)
        notes.extend({"pdf": key, **n} for n in page_notes)
        if any(n.get("fatal") for n in page_notes):
            fatal.extend(n for n in page_notes if n.get("fatal"))
        for c in chars:
            records.append(
                {
                    "pdf": key,
                    "page": i + 1,
                    "font": c["font"],
                    "size": round(c["size"], 3),
                    "cp": c["cp"],
                    "ch": c["ch"],
                    "bbox": c["bbox"],
                }
            )
    fonts = dump_fonts(doc, FONTS_DIR / key)
    doc.close()
    return records, notes, fatal, fonts


def main() -> int:
    SPANS.mkdir(parents=True, exist_ok=True)
    CATALOG.mkdir(parents=True, exist_ok=True)
    FONTS_DIR.mkdir(parents=True, exist_ok=True)

    all_notes = []
    all_fatal = []
    font_index = []
    for key, path in PDFS.items():
        print(f"extract {key}: {path.name}", flush=True)
        records, notes, fatal, fonts = extract_pdf(key, path)
        out = SPANS / f"{key}.jsonl"
        with out.open("w", encoding="utf-8") as f:
            for rec in records:
                f.write(json.dumps(rec, ensure_ascii=False) + "\n")
        print(f"  {len(records)} chars -> {out}")
        all_notes.extend(notes)
        all_fatal.extend({"pdf": key, **n} for n in fatal)
        font_index.extend({"pdf": key, **f} for f in fonts)

    report = {
        "notes": all_notes,
        "fatal": all_fatal,
        "fonts": [
            {k: v for k, v in f.items() if k != "path"} | {"path": f["path"]}
            for f in font_index
        ],
    }
    (DECODE / "extract_agreement.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    if all_fatal:
        print("FATAL: Baraha extractor disagreement:", file=sys.stderr)
        print(json.dumps(all_fatal, indent=2), file=sys.stderr)
        return 1
    print(f"agreement notes: {len(all_notes)} (non-fatal or dash-overlap)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
