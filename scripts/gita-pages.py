#!/usr/bin/env python3
"""Render pages of the 1910 Vāṇī Vilās scan to PNG, for reading verses off the print.

The scans are not in git (data/gita/vv/, see docs/gita/ENCODE.md).

Usage:
  python3 scripts/gita-pages.py 12 67 84     # volume 12, PDF pages 67–84 (counted from 0)

Writes data/gita/vv/pages/v12_p067.png … Needs PyMuPDF (pip install pymupdf).
"""

from __future__ import annotations

import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
VV = ROOT / "data/gita/vv"
VOLUMES = {11: "vol11-gita-1-9.pdf", 12: "vol12-gita-10-18.pdf"}


def main() -> int:
    if len(sys.argv) != 4:
        print(__doc__)
        return 2
    volume, first, last = (int(arg) for arg in sys.argv[1:])
    pdf = VV / VOLUMES[volume]
    if not pdf.exists():
        print(f"missing {pdf}; download it as docs/gita/ENCODE.md says")
        return 1
    out = VV / "pages"
    out.mkdir(parents=True, exist_ok=True)
    with fitz.open(pdf) as doc:
        for index in range(first, min(last, doc.page_count - 1) + 1):
            target = out / f"v{volume}_p{index:03d}.png"
            doc[index].get_pixmap(matrix=fitz.Matrix(2, 2)).save(target)
            print(target.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
