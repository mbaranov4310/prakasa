#!/usr/bin/env python3
"""Check a Stage 1 Rudra text file against its own saṃhitā blocks and padam count.

Usage:
  python3 scripts/check-rudra-text.py docs/rudra/text/namakam-01.md
"""

from __future__ import annotations

import re
import sys
import unicodedata
from pathlib import Path

AFTER = {
    "join": ("", ""),
    "space": (" ", " "),
    "danda": (" ।\n", " |\n"),
    "ddanda": (" ॥\n", " ||\n"),
}

SVARA = re.compile(
    r"[\u0951\u0952\u1CD0-\u1CF6\uA8E0-\uA8F1]"
)


def nfc(s: str) -> str:
    return unicodedata.normalize("NFC", s)


def strip_fence_ws(s: str) -> str:
    return nfc(s.replace("\r\n", "\n").strip("\n"))


def parse_fences(text: str) -> list[tuple[str, str]]:
    return re.findall(r"```([a-z_]+)\n(.*?)```", text, flags=re.S)


def parse_meta(body: str) -> dict[str, str]:
    meta: dict[str, str] = {}
    for line in body.splitlines():
        line = line.strip()
        if not line or ":" not in line:
            continue
        key, value = line.split(":", 1)
        meta[key.strip()] = value.strip()
    return meta


def parse_padas(body: str) -> list[tuple[str, str, str, str, str]]:
    rows: list[tuple[str, str, str, str, str]] = []
    lines = body.splitlines()
    if not lines:
        raise ValueError("empty padas block")
    header = lines[0].split("\t")
    expected = ["pada_dev", "pada_iast", "slice_dev", "slice_iast", "after"]
    if [h.strip() for h in header] != expected:
        raise ValueError(f"padas header must be tab-separated {expected}, got {header}")
    for i, line in enumerate(lines[1:], start=2):
        if not line.strip() or line.startswith("#"):
            continue
        cols = line.split("\t")
        if len(cols) != 5:
            raise ValueError(f"padas line {i}: expected 5 tab-separated fields, got {len(cols)}: {line!r}")
        pada_dev, pada_iast, slice_dev, slice_iast, after = (nfc(c) for c in cols)
        if after not in AFTER:
            raise ValueError(f"padas line {i}: after={after!r} not in {sorted(AFTER)}")
        rows.append((pada_dev, pada_iast, slice_dev, slice_iast, after))
    return rows


def join_rows(rows: list[tuple[str, str, str, str, str]]) -> tuple[str, str, list[str]]:
    dev_parts: list[str] = []
    iast_parts: list[str] = []
    padas: list[str] = []
    for pada_dev, _pada_iast, slice_dev, slice_iast, after in rows:
        suf_dev, suf_iast = AFTER[after]
        dev_parts.append(slice_dev + suf_dev)
        iast_parts.append(slice_iast + suf_iast)
        padas.append(pada_dev)
    return "".join(dev_parts), "".join(iast_parts), padas


def warn_svaras(label: str, s: str, errors: list[str]) -> None:
    if SVARA.search(s):
        errors.append(f"{label}: still has svara marks (strip ॑ ॒ and friends)")


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 scripts/check-rudra-text.py docs/rudra/text/<id>.md", file=sys.stderr)
        return 2
    path = Path(sys.argv[1])
    text = nfc(path.read_text(encoding="utf-8"))
    fences = parse_fences(text)
    kinds = [k for k, _ in fences]
    errors: list[str] = []

    if "meta" not in kinds:
        errors.append("missing ```meta fence")
        print("\n".join(errors))
        return 1

    meta = parse_meta(next(b for k, b in fences if k == "meta"))
    try:
        expected = int(meta["expected_padams"])
    except (KeyError, ValueError):
        errors.append("meta.expected_padams missing or not an integer")
        expected = -1

    headings = re.findall(r"^##\s+(\S+)", text, flags=re.M)
    # Walk fences in order, grouping samhita / samhita_iast / padas after each heading.
    sections: list[dict[str, str]] = []
    current: dict[str, str] = {}
    for kind, body in fences:
        if kind == "meta":
            continue
        if kind in {"samhita", "samhita_iast", "padas"}:
            current[kind] = body
            if {"samhita", "samhita_iast", "padas"} <= current.keys():
                sections.append(current)
                current = {}
        else:
            errors.append(f"unknown fence ```{kind}")

    if current:
        errors.append(f"incomplete last pañcati (have {sorted(current)})")

    if headings and len(headings) != len(sections):
        errors.append(
            f"{len(headings)} ## headings but {len(sections)} complete pañcati triples"
        )

    all_rows: list[tuple[str, str, str, str, str]] = []
    reconstructed_dev: list[str] = []
    reconstructed_iast: list[str] = []

    for i, section in enumerate(sections):
        label = headings[i] if i < len(headings) else f"pañcati {i + 1}"
        try:
            rows = parse_padas(section["padas"])
        except ValueError as exc:
            errors.append(f"{label}: {exc}")
            continue
        if not rows:
            errors.append(f"{label}: no padas rows")
            continue
        all_rows.extend(rows)
        got_dev, got_iast, _ = join_rows(rows)
        want_dev = strip_fence_ws(section["samhita"])
        want_iast = strip_fence_ws(section["samhita_iast"])
        # join() ends with a newline after the last danda; the fence is stripped.
        got_dev_cmp = got_dev.strip("\n")
        got_iast_cmp = got_iast.strip("\n")
        warn_svaras(f"{label} samhita", want_dev, errors)
        warn_svaras(f"{label} slices", "".join(r[2] for r in rows), errors)
        if got_dev_cmp != want_dev:
            errors.append(f"{label}: slice join ≠ samhita block")
            errors.append(f"  want: {want_dev!r}")
            errors.append(f"  got:  {got_dev_cmp!r}")
        if got_iast_cmp != want_iast:
            errors.append(f"{label}: IAST slice join ≠ samhita_iast block")
            errors.append(f"  want: {want_iast!r}")
            errors.append(f"  got:  {got_iast_cmp!r}")
        reconstructed_dev.append(got_dev_cmp)
        reconstructed_iast.append(got_iast_cmp)

    count = len(all_rows)
    if expected >= 0 and count != expected:
        errors.append(f"padam count {count} ≠ expected_padams {expected}")

    print(f"file: {path}")
    print(f"id: {meta.get('id', '?')}  ts: {meta.get('ts', '?')}")
    print(f"pañcatis: {len(sections)}  padams: {count}  expected: {expected}")
    print()
    print("=== SAṂHITĀ (reconstructed) ===")
    print("\n".join(reconstructed_dev))
    print()
    print("=== PADA LIST (pada_dev) ===")
    print(" । ".join(p[0] for p in all_rows))
    print()
    if errors:
        print("=== FAIL ===")
        print("\n".join(errors))
        return 1
    print("=== PASS ===")
    print("Join matches samhita blocks. Count matches expected_padams.")
    print("Still reconcile these two dumps against the PDF by eye.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
