#!/usr/bin/env python3
"""Extract the 46 IAST couplets from Paramarthananda's Dṛg-dṛśya-viveka PDF.

Writes:
  docs/ddv/decode/out/param-iast-raw.txt
  docs/ddv/decode/out/param-iast.txt
  docs/ddv/decode/out/param-verses.json

Usage:
  python3 scripts/ddv-extract-param-iast.py
"""

from __future__ import annotations

import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "data" / "DrgDrsyaViveka.pdf"
OUT = ROOT / "docs" / "ddv" / "decode" / "out"

spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts" / "ddv-iast.py")
iast = importlib.util.module_from_spec(spec)
spec.loader.exec_module(iast)


def load_fitz():
    import fitz

    return fitz


# First PDF page (1-indexed) where that verse's IAST couplet is printed.
# Verse 20 pāda 1 is on 75 and pāda 2 on 76 — we still key it as 75 and join.
FIRST_PAGE = {
    1: 6,
    2: 10,
    3: 12,
    4: 14,
    5: 16,
    6: 20,
    7: 22,
    8: 24,
    9: 30,
    10: 36,
    11: 39,
    12: 46,
    13: 49,
    14: 59,
    15: 61,
    16: 64,
    17: 66,
    18: 69,
    19: 73,
    20: 75,
    21: 81,
    22: 83,
    23: 91,
    24: 93,
    25: 98,
    26: 101,
    27: 107,
    28: 109,
    29: 113,
    30: 121,
    31: 124,
    32: 128,
    33: 132,
    34: 135,
    35: 136,
    36: 138,
    37: 140,
    38: 141,
    39: 144,
    40: 146,
    41: 147,
    42: 150,
    43: 151,
    44: 153,
    45: 154,
    46: 155,
}


def iast_line(ln: str) -> bool:
    return bool(re.search(r"[āīūṛṃṅñṭḍṇśṣḥēō]", ln))


def couplet_from_page_text(text: str, n: int) -> str | None:
    """Find the first IAST couplet on this page for verse n."""
    lines = [ln.rstrip() for ln in text.splitlines()]
    numbered = re.compile(rf"[॥|]\s*{n}\s*[॥|]?\s*$")
    for i, ln in enumerate(lines):
        if not iast_line(ln):
            continue
        if numbered.search(ln) and i > 0 and iast_line(lines[i - 1]):
            return lines[i - 1] + "\n" + ln
        # first pāda with danda, second with number on next iast line
        if ("।" in ln or ln.rstrip().endswith("|")) and i + 1 < len(lines):
            nxt = lines[i + 1]
            if iast_line(nxt) and (numbered.search(nxt) or (n == 10 and iast_line(nxt) and "॥" not in nxt and not re.search(r"\d", nxt))):
                return ln + "\n" + nxt
    return None


def couplet_verse_20(doc) -> str:
    a = None
    b = None
    for i in (74, 75):  # pages 75–76
        for ln in doc[i].get_text("text").splitlines():
            ln = ln.rstrip()
            if "asti bhāti priyaṃ" in ln:
                a = ln
            if "ādyatrayaṃ brahmarūpaṃ" in ln:
                b = ln
    if not a or not b:
        raise SystemExit("verse 20 couplet not found")
    return a + "\n" + b


def extract(doc) -> list[dict]:
    rows = []
    for n in range(1, 47):
        if n == 20:
            raw = couplet_verse_20(doc)
            page = 75
        else:
            page = FIRST_PAGE[n]
            raw = couplet_from_page_text(doc[page - 1].get_text("text"), n)
            if raw is None:
                # verse 10 has no number on the IAST; also try next page
                for delta in (0, 1, -1):
                    pg = page + delta
                    if 1 <= pg <= doc.page_count:
                        raw = couplet_from_page_text(doc[pg - 1].get_text("text"), n)
                        if raw:
                            page = pg
                            break
            if raw is None:
                raise SystemExit(f"verse {n} not found on ~p{page}")
        raw = raw.replace("\r", "")
        # drop trailing verse number from display form
        lines = raw.split("\n")
        if len(lines) != 2:
            raise SystemExit(f"verse {n}: expected 2 lines, got {len(lines)}: {raw!r}")
        norm_lines = [iast.strip_verse_number(ln) for ln in lines]
        # strip_verse_number also normalizes ē→e etc.
        rows.append(
            {
                "n": n,
                "param_page": page,
                "raw": raw,
                "iast": "\n".join(norm_lines),
            }
        )
    return rows


def main() -> int:
    if not PDF.exists():
        print(f"missing {PDF}", file=sys.stderr)
        return 1
    fitz = load_fitz()
    doc = fitz.open(PDF)
    rows = extract(doc)
    OUT.mkdir(parents=True, exist_ok=True)

    raw_txt = []
    norm_txt = []
    for row in rows:
        raw_txt.append(f"## {row['n']}  p{row['param_page']}\n{row['raw']}\n")
        norm_txt.append(f"## {row['n']}  p{row['param_page']}\n{row['iast']}\n")
        ok, got, want = iast.roundtrip_ok(row["iast"].replace("\n", " \n "))
        # roundtrip is IAST→Dev→IAST; hyphen may drop. warn only.
        if got.replace("-", "") != want.replace("-", ""):
            print(f"note v{row['n']}: IAST reverse-map differs (hyphen/sandhi?)")
            print(f"  want {want!r}")
            print(f"  got  {got!r}")

    (OUT / "param-iast-raw.txt").write_text("\n".join(raw_txt) + "\n", encoding="utf-8")
    (OUT / "param-iast.txt").write_text("\n".join(norm_txt) + "\n", encoding="utf-8")
    (OUT / "param-verses.json").write_text(
        json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"wrote 46 verses → {OUT}")
    for row in rows:
        print(f"{row['n']:2d} p{row['param_page']:3d} {row['iast'].splitlines()[0][:60]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
