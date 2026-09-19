#!/usr/bin/env python3
"""Crop each verse's Devanagari block from both source PDFs.

Crops are local review images (gitignored). Regenerable.

Usage:
  python3 scripts/ddv-crop-verses.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PARAM = ROOT / "data" / "DrgDrsyaViveka.pdf"
NIKH = ROOT / "data" / "drgdrisyaviveka.pdf"
OUT = ROOT / "docs" / "ddv" / "decode" / "crops"
VERSES = ROOT / "docs" / "ddv" / "decode" / "out" / "param-verses.json"

# PDF page (1-indexed) where Nikhilananda prints that verse's translation
# and usually the Devanagari above it. Previous page is also saved when
# the Sanskrit sits on the facing notes page.
NIKH_PAGE = {
    1: 17,
    2: 19,
    3: 20,
    4: 21,
    5: 22,
    6: 24,
    7: 25,
    8: 26,
    9: 28,
    10: 30,
    11: 31,
    12: 32,
    13: 34,
    14: 35,
    15: 37,
    16: 39,
    17: 40,
    18: 41,
    19: 42,
    20: 43,
    21: 44,
    22: 45,
    23: 46,
    24: 47,
    25: 48,
    26: 50,
    27: 53,
    28: 55,
    29: 56,
    30: 57,
    31: 59,
    32: 61,
    33: 63,
    34: 65,
    35: 66,
    36: 67,
    37: 68,
    38: 70,
    39: 71,
    40: 72,
    41: 73,
    42: 74,
    43: 75,
    44: 76,
    45: 77,
    46: 78,
}


def crop_param(doc, n: int, page: int, iast: str, dest: Path) -> None:
    import fitz

    pg = doc[page - 1]
    # Search the first IAST pāda (ASCII and Devanagari danda).
    first = iast.splitlines()[0]
    needles = [
        first.replace("|", "।").rstrip(" |।"),
        first.replace("|", "").strip(),
        first.split()[0] if first.split() else first,
    ]
    hits = []
    for needle in needles:
        if len(needle) < 4:
            continue
        found = pg.search_for(needle[:40])
        if found:
            hits = found
            break
    if not hits:
        # verse 20 pāda 2 is on the next page — search both
        if n == 20:
            pg2 = doc[page]  # page 76
            second = iast.splitlines()[1]
            hits = pg2.search_for(second.replace("|", "।")[:40]) or pg2.search_for("ādyatrayaṃ")
            pg = pg2
        if not hits:
            # fallback: whole page strip
            pix = pg.get_pixmap(matrix=fitz.Matrix(1.5, 1.5))
            pix.save(str(dest))
            return
    r = hits[0]
    # Devanagari sits above the IAST; take a band
    clip = fitz.Rect(
        max(40, r.x0 - 20),
        max(40, r.y0 - 90),
        min(pg.rect.x1 - 40, r.x1 + 40),
        min(pg.rect.y1 - 20, r.y1 + 50),
    )
    # include second IAST line
    clip.y1 = min(pg.rect.y1 - 20, r.y1 + 70)
    pix = pg.get_pixmap(matrix=fitz.Matrix(2, 2), clip=clip)
    pix.save(str(dest))


def crop_nikh(doc, n: int, dest: Path) -> None:
    import fitz

    page = NIKH_PAGE[n]
    pg = doc[page - 1]
    pix = pg.get_pixmap(matrix=fitz.Matrix(2.2, 2.2))
    pix.save(str(dest))
    # also previous page — Sanskrit often starts there
    prev = dest.with_name(f"nikh-{n:02d}-prev.png")
    if page > 1:
        pixp = doc[page - 2].get_pixmap(matrix=fitz.Matrix(2.2, 2.2))
        pixp.save(str(prev))


def main() -> int:
    import fitz

    if not PARAM.exists() or not NIKH.exists():
        print("missing PDFs in data/", file=sys.stderr)
        return 1
    verses = json.loads(VERSES.read_text(encoding="utf-8"))
    OUT.mkdir(parents=True, exist_ok=True)
    pdoc = fitz.open(PARAM)
    ndoc = fitz.open(NIKH)
    for row in verses:
        n = row["n"]
        crop_param(pdoc, n, row["param_page"], row["iast"], OUT / f"param-{n:02d}.png")
        crop_nikh(ndoc, n, OUT / f"nikh-{n:02d}.png")
        print(f"cropped {n:02d}")
    print(f"wrote {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
