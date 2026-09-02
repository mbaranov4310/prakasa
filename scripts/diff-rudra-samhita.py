#!/usr/bin/env python3
"""Compare Stage 1 samhita fences to a vākya dump.

Usage:
  python3 scripts/diff-rudra-samhita.py docs/rudra/text/<id>.md docs/rudra/samhita/<id>.txt
"""

from __future__ import annotations

import re
import sys
import unicodedata
from pathlib import Path

SVARA = re.compile(r"[\u0951\u0952\u1CD0-\u1CF6\uA8E0-\uA8F1]")


def nfc(s: str) -> str:
    return unicodedata.normalize("NFC", s)


def compact(s: str) -> str:
    s = nfc(s)
    s = SVARA.sub("", s)
    s = s.replace("\r\n", "\n")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def letters(s: str) -> str:
    return re.sub(r"\s+", "", compact(s))


def parse_samhita_fences(md: str) -> list[tuple[str, str]]:
    headings = re.findall(r"^##\s+(\S+)", md, flags=re.M)
    fences = re.findall(r"```([a-z_]+)\n(.*?)```", md, flags=re.S)
    bodies: list[str] = []
    for kind, body in fences:
        if kind == "samhita":
            bodies.append(body)
    out: list[tuple[str, str]] = []
    for i, body in enumerate(bodies):
        label = headings[i] if i < len(headings) else f"pañcati-{i + 1}"
        out.append((label, body))
    return out


def parse_dump(text: str) -> list[tuple[str, str]]:
    lines = text.replace("\r\n", "\n").splitlines()
    sections: list[tuple[str, list[str]]] = []
    current_label: str | None = None
    current_body: list[str] = []
    for line in lines:
        raw = line.strip()
        if raw.startswith("#") and not raw.startswith("##"):
            continue
        m = re.match(r"^##\s+(\S+)", line)
        if m:
            if current_label is not None:
                sections.append((current_label, current_body))
            current_label = m.group(1)
            current_body = []
            continue
        if current_label is not None:
            current_body.append(line)
    if current_label is not None:
        sections.append((current_label, current_body))
    return [(label, "\n".join(body)) for label, body in sections]


def first_diff(a: str, b: str) -> str:
    n = min(len(a), len(b))
    i = 0
    while i < n and a[i] == b[i]:
        i += 1
    if i == n and len(a) == len(b):
        return ""
    lo = max(0, i - 12)
    hi_a = min(len(a), i + 12)
    hi_b = min(len(b), i + 12)
    return f"  at {i}: dump=…{a[lo:hi_a]!r}  file=…{b[lo:hi_b]!r}"


def main() -> int:
    if len(sys.argv) != 3:
        print(
            "Usage: python3 scripts/diff-rudra-samhita.py docs/rudra/text/<id>.md docs/rudra/samhita/<id>.txt",
            file=sys.stderr,
        )
        return 2
    md_path = Path(sys.argv[1])
    dump_path = Path(sys.argv[2])
    file_rows = parse_samhita_fences(md_path.read_text(encoding="utf-8"))
    dump_rows = parse_dump(dump_path.read_text(encoding="utf-8"))
    print(f"stage1: {md_path}  ({len(file_rows)} samhita blocks)")
    print(f"dump:   {dump_path}  ({len(dump_rows)} sections)")
    n = max(len(file_rows), len(dump_rows))
    mismatches: list[str] = []
    for i in range(n):
        d_label, d_body = dump_rows[i] if i < len(dump_rows) else ("∅", "")
        f_label, f_body = file_rows[i] if i < len(file_rows) else ("∅", "")
        label = d_label if d_label != "∅" else f_label
        d_c, f_c = compact(d_body), compact(f_body)
        d_l, f_l = letters(d_body), letters(f_body)
        if d_label != f_label:
            mismatches.append(f"  [{label}] heading dump={d_label!r}  file={f_label!r}")
        if d_l != f_l:
            mismatches.append(f"  [{label}] letters differ")
            mismatches.append(first_diff(d_l, f_l))
            mismatches.append(f"    dump={d_c}")
            mismatches.append(f"    file={f_c}")
        elif d_c != f_c:
            mismatches.append(f"  [{label}] space-only")
            mismatches.append(first_diff(d_c, f_c))
    if not mismatches and len(file_rows) == len(dump_rows):
        print("DIFF: MATCH")
        return 0
    print(f"DIFF: MISMATCH  ({len([m for m in mismatches if m.startswith('  [')])} items)")
    print("\n".join(mismatches[:80]))
    if len(mismatches) > 80:
        print(f"  … {len(mismatches) - 80} more")
    return 1


if __name__ == "__main__":
    sys.exit(main())
