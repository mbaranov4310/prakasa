#!/usr/bin/env python3
"""Compare Stage 1 pada_dev to a Padam dump (one Devanagari padam per line).

Usage:
  python3 scripts/diff-rudra-pada.py docs/rudra/text/<id>.md docs/rudra/pada/<id>.txt
"""

from __future__ import annotations

import re
import sys
import unicodedata
from pathlib import Path

SVARA = re.compile(r"[\u0951\u0952\u1CD0-\u1CF6\uA8E0-\uA8F1]")


def nfc(s: str) -> str:
    return unicodedata.normalize("NFC", s)


def letters(s: str) -> str:
    s = nfc(s)
    s = SVARA.sub("", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def parse_pada_dev(md: str) -> list[str]:
    rows: list[str] = []
    in_padas = False
    for line in md.splitlines():
        if line.startswith("```padas"):
            in_padas = True
            continue
        if in_padas and line.startswith("```"):
            in_padas = False
            continue
        if not in_padas:
            continue
        if not line.strip() or line.startswith("#"):
            continue
        if line.startswith("pada_dev"):
            continue
        cols = line.split("\t")
        if len(cols) < 1:
            continue
        rows.append(letters(cols[0]))
    return rows


def parse_dump(text: str) -> list[str]:
    out: list[str] = []
    for line in text.splitlines():
        raw = line.strip()
        if not raw or raw.startswith("#"):
            continue
        out.append(letters(raw))
    return out


def main() -> int:
    if len(sys.argv) != 3:
        print(
            "Usage: python3 scripts/diff-rudra-pada.py docs/rudra/text/<id>.md docs/rudra/pada/<id>.txt",
            file=sys.stderr,
        )
        return 2
    md_path = Path(sys.argv[1])
    dump_path = Path(sys.argv[2])
    file_rows = parse_pada_dev(md_path.read_text(encoding="utf-8"))
    dump_rows = parse_dump(dump_path.read_text(encoding="utf-8"))
    print(f"stage1: {md_path}  ({len(file_rows)} pada_dev)")
    print(f"dump:   {dump_path}  ({len(dump_rows)} lines)")
    n = max(len(file_rows), len(dump_rows))
    mismatches: list[str] = []
    for i in range(n):
        a = dump_rows[i] if i < len(dump_rows) else "∅"
        b = file_rows[i] if i < len(file_rows) else "∅"
        if a != b:
            mismatches.append(f"  [{i + 1}] dump={a!r}  file={b!r}")
    if not mismatches and len(file_rows) == len(dump_rows):
        print("DIFF: MATCH")
        return 0
    print(f"DIFF: MISMATCH  ({len(mismatches)} slots)")
    print("\n".join(mismatches[:40]))
    if len(mismatches) > 40:
        print(f"  … {len(mismatches) - 40} more")
    return 1


if __name__ == "__main__":
    sys.exit(main())
