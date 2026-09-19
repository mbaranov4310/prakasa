#!/usr/bin/env python3
"""Check a Stage-1 / Stage-2 Dṛg-dṛśya-viveka text file.

Phase 1 (default if padas has only the header): IAST→Dev == samhita.
Phase 2: also slice-join == samhita and row count == expected_padas.

Usage:
  python3 scripts/check-ddv-text.py docs/ddv/text/ddv-01.md
  python3 scripts/check-ddv-text.py docs/ddv/text          # all
"""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts" / "ddv-iast.py")
iast = importlib.util.module_from_spec(spec)
spec.loader.exec_module(iast)

AFTER = {
    "join": ("", ""),
    "space": (" ", " "),
    "danda": (" ।\n", " |\n"),
    "ddanda": (" ॥\n", " ||\n"),
}


def nfc(s: str) -> str:
    return iast.nfc(s)


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


def parse_padas(body: str) -> list[tuple[str, str, str, str, str, str]]:
    rows: list[tuple[str, str, str, str, str, str]] = []
    lines = [ln for ln in body.splitlines() if ln.strip() and not ln.startswith("#")]
    if not lines:
        return rows
    header = [h.strip() for h in lines[0].split("\t")]
    expected5 = ["pada_dev", "pada_iast", "slice_dev", "slice_iast", "after"]
    expected6 = expected5 + ["meaning"]
    if header not in (expected5, expected6):
        raise ValueError(f"padas header must be tab-separated {expected5} or {expected6}, got {header}")
    for i, line in enumerate(lines[1:], start=2):
        cols = line.split("\t")
        if header == expected5 and len(cols) == 5:
            cols.append("")
        if len(cols) != 6:
            raise ValueError(f"padas line {i}: expected 5 or 6 fields, got {len(cols)}: {line!r}")
        pada_dev, pada_iast, slice_dev, slice_iast, after, meaning = (nfc(c) for c in cols)
        if after not in AFTER:
            raise ValueError(f"padas line {i}: after={after!r}")
        rows.append((pada_dev, pada_iast, slice_dev, slice_iast, after, meaning))
    return rows


def join_rows(rows: list[tuple[str, ...]]) -> tuple[str, str]:
    dev_parts: list[str] = []
    iast_parts: list[str] = []
    for row in rows:
        slice_dev, slice_iast, after = row[2], row[3], row[4]
        suf_dev, suf_iast = AFTER[after]
        dev_parts.append(slice_dev + suf_dev)
        iast_parts.append(slice_iast + suf_iast)
    return "".join(dev_parts), "".join(iast_parts)


def check_file(path: Path) -> int:
    text = nfc(path.read_text(encoding="utf-8"))
    fences = dict(parse_fences(text))
    errors: list[str] = []
    if "meta" not in fences:
        errors.append("missing ```meta")
    if "samhita" not in fences or "samhita_iast" not in fences:
        errors.append("missing samhita / samhita_iast")
        print(f"file: {path}")
        print("=== FAIL ===")
        print("\n".join(errors))
        return 1

    meta = parse_meta(fences["meta"])
    want_dev = nfc(fences["samhita"].replace("\r\n", "\n").strip("\n"))
    want_iast = nfc(fences["samhita_iast"].replace("\r\n", "\n").strip("\n"))
    derived = iast.to_dev(want_iast).strip("\n")
    if derived != want_dev:
        errors.append("to_dev(samhita_iast) ≠ samhita")
        errors.append(f"  want: {want_dev!r}")
        errors.append(f"  got:  {derived!r}")

    if not want_dev.endswith("॥") and not want_dev.endswith("।"):
        errors.append("samhita does not end with a danda")
    if "||" not in want_iast and not want_iast.rstrip().endswith("|"):
        errors.append("samhita_iast has no danda")

    rows = []
    if "padas" in fences:
        try:
            rows = parse_padas(fences["padas"])
        except ValueError as exc:
            errors.append(str(exc))

    expected = int(meta.get("expected_padas", "0") or "0")
    if rows:
        got_dev, got_iast = join_rows(rows)
        if got_dev.strip("\n") != want_dev:
            errors.append("slice join ≠ samhita")
            errors.append(f"  want: {want_dev!r}")
            errors.append(f"  got:  {got_dev.strip(chr(10))!r}")
        if got_iast.strip("\n") != want_iast:
            errors.append("IAST slice join ≠ samhita_iast")
            errors.append(f"  want: {want_iast!r}")
            errors.append(f"  got:  {got_iast.strip(chr(10))!r}")
        if expected and len(rows) != expected:
            errors.append(f"padam count {len(rows)} ≠ expected_padas {expected}")
    elif expected:
        errors.append(f"expected_padas {expected} but padas table is empty (ok in Phase 1 if expected is 0)")

    print(f"file: {path}")
    print(f"id: {meta.get('id', '?')}  verse: {meta.get('verse', '?')}  padas: {len(rows)}")
    print()
    print("=== SAṂHITĀ ===")
    print(want_dev)
    print()
    if errors:
        print("=== FAIL ===")
        print("\n".join(errors))
        return 1
    phase = "2 (join)" if rows else "1 (IAST→Dev)"
    print(f"=== PASS ===")
    print(f"Phase {phase}. Reconcile against both PDF crops before locking.")
    return 0


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 scripts/check-ddv-text.py docs/ddv/text[/ddv-01.md]", file=sys.stderr)
        return 2
    path = Path(sys.argv[1])
    if path.is_dir():
        files = sorted(p for p in path.glob("ddv-*.md") if p.name != "_TEMPLATE.md")
        rc = 0
        for f in files:
            r = check_file(f)
            if r:
                rc = r
        if not files:
            print("no ddv-*.md files", file=sys.stderr)
            return 1
        if rc == 0:
            print(f"\nall {len(files)} files PASS")
        return rc
    return check_file(path)


if __name__ == "__main__":
    raise SystemExit(main())
