#!/usr/bin/env python3
"""Print (or write) the Unicode dump for one anuvāka.

Usage:
  python3 scripts/rudra-dump-slice.py namakam-01
  python3 scripts/rudra-dump-slice.py chamakam-03 --write
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs/rudra/decode/out"
SLICES = ROOT / "docs/rudra/decode/slices"

IDS = {
    **{f"namakam-{n:02d}": ("namakam.txt", f"4.5.{n}") for n in range(1, 12)},
    **{f"chamakam-{n:02d}": ("camakam.txt", f"4.7.{n}") for n in range(1, 12)},
}

HEAD = re.compile(r"^TS\s+(4\.[57]\.\d+(?:\.\d+)?)(?:\s*-?\s*Padam)?\s*$", re.I)


def anuvaka_of(ts: str) -> str | None:
    m = re.match(r"^(4\.[57]\.\d+)", ts)
    return m.group(1) if m else None


def slice_dump(text: str, ts_prefix: str) -> str:
    lines = text.splitlines()
    keep: list[str] = []
    in_block = False
    for line in lines:
        m = HEAD.match(line.strip())
        if m:
            prefix = anuvaka_of(m.group(1))
            if prefix == ts_prefix:
                in_block = True
                keep.append(line)
                continue
            if in_block:
                break
        if in_block:
            keep.append(line)
    return "\n".join(keep).rstrip() + "\n"


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("id")
    p.add_argument("--write", action="store_true", help="write docs/rudra/decode/slices/<id>.txt")
    args = p.parse_args()
    if args.id not in IDS:
        print(f"unknown id {args.id!r}; expected namakam-01..11 or chamakam-01..11", file=sys.stderr)
        return 2
    fname, ts_prefix = IDS[args.id]
    text = (OUT / fname).read_text(encoding="utf-8")
    body = slice_dump(text, ts_prefix)
    if args.write:
        SLICES.mkdir(parents=True, exist_ok=True)
        path = SLICES / f"{args.id}.txt"
        path.write_text(body, encoding="utf-8")
        print(f"wrote {path} ({len(body.splitlines())} lines)")
        return 0
    sys.stdout.write(body)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
