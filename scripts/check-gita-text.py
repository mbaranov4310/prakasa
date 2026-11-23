#!/usr/bin/env python3
"""Check Bhagavad Gītā verse files.

One file is one verse: docs/gita/text/<NN>/gita-<NN>-<VV>.md

Always checked:
  - the saṃhitā survives Devanagari → IAST → Devanagari unchanged
  - the last line ends with ॥
  - if the padas table has rows, the slices join back to the saṃhitā,
    and every slice cuts on whole akṣaras

With --strict (a finished verse):
  - every row has a pada and a meaning
  - there is a translation, and one phrase meaning per line

A row whose pada and slice look unrelated is printed as a warning. It does
not fail the check, because sandhi can change a short word a great deal.

Usage:
  python3 scripts/check-gita-text.py docs/gita/text/12
  python3 scripts/check-gita-text.py --strict docs/gita/text/12/gita-12-05.md
"""

from __future__ import annotations

import difflib
import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts" / "ddv-iast.py")
iast = importlib.util.module_from_spec(spec)
spec.loader.exec_module(iast)

AFTER = {
    "join": "",
    "space": " ",
    "break": "\n",
    "danda": " ।\n",
    "ddanda": " ॥\n",
}
LINE_END = {"break", "danda", "ddanda"}
HEADER = ["pada", "slice", "after", "meaning"]

CONS = set("कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह")
VOWELS = set("अआइईउऊऋॠऌएऐओऔ")
MATRAS = set("ािीुूृॄॢेैोौ")
MARKS = set("ंःँ")
VIRAMA = "्"


def nfc(s: str) -> str:
    return iast.nfc(s)


def parse_fences(text: str) -> dict[str, str]:
    return dict(re.findall(r"```([a-z_]+)\n(.*?)```", text, flags=re.S))


def parse_meta(body: str) -> dict[str, str]:
    meta: dict[str, str] = {}
    for line in body.splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        meta[key.strip()] = value.strip()
    return meta


def parse_padas(body: str) -> list[tuple[str, str, str, str]]:
    lines = [ln for ln in body.splitlines() if ln.strip()]
    if not lines:
        return []
    header = [h.strip() for h in lines[0].split("\t")]
    if header != HEADER:
        raise ValueError(f"padas header must be tab-separated {HEADER}, got {header}")
    rows: list[tuple[str, str, str, str]] = []
    for number, line in enumerate(lines[1:], start=2):
        cols = [nfc(c.strip()) for c in line.split("\t")]
        if len(cols) == 3:
            cols.append("")
        if len(cols) != 4:
            raise ValueError(f"padas line {number}: expected 4 fields, got {len(cols)}: {line!r}")
        if cols[2] not in AFTER:
            raise ValueError(f"padas line {number}: after={cols[2]!r}")
        rows.append((cols[0], cols[1], cols[2], cols[3]))
    return rows


def parse_phrases(body: str) -> list[str]:
    return [part.strip() for part in body.split("---")] if body.strip() else []


def split_aksaras(dev: str) -> list[str]:
    """Cut a slice into akṣaras. A final consonant with virāma is its own akṣara."""
    s = nfc(dev)
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        ch = s[i]
        if ch == "ऽ":
            if not out:
                raise ValueError(f"slice {dev!r} starts with an avagraha")
            out[-1] += ch
            i += 1
            continue
        if ch in VOWELS:
            aks = ch
            i += 1
            while i < n and s[i] in MARKS:
                aks += s[i]
                i += 1
            out.append(aks)
            continue
        if ch in CONS:
            aks = ch
            i += 1
            while i + 1 < n and s[i] == VIRAMA and s[i + 1] in CONS:
                aks += VIRAMA + s[i + 1]
                i += 2
            if i < n and s[i] == VIRAMA:
                aks += VIRAMA
                i += 1
            elif i < n and s[i] in MATRAS:
                aks += s[i]
                i += 1
            while i < n and s[i] in MARKS:
                aks += s[i]
                i += 1
            out.append(aks)
            continue
        raise ValueError(f"slice {dev!r} has a character that is not a letter: {ch!r}")
    return out


def samhita_of(fences: dict[str, str]) -> str:
    return nfc(fences["samhita"].replace("\r\n", "\n").strip("\n"))


def join_rows(rows: list[tuple[str, str, str, str]]) -> str:
    return "".join(slice_dev + AFTER[after] for _pada, slice_dev, after, _meaning in rows).strip("\n")


def skeleton(dev: str) -> str:
    """The consonants of a word, which sandhi mostly leaves alone."""
    return re.sub(r"[aāiīuūṛṝḷeoṃḥ'\- ]", "", iast.to_iast(dev))


def related(pada: str, slice_dev: str) -> float:
    a, b = skeleton(pada), skeleton(slice_dev)
    if not a or not b:
        return 1.0
    return difflib.SequenceMatcher(None, a, b, autojunk=False).ratio()


def check_file(path: Path, strict: bool) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    fences = parse_fences(nfc(path.read_text(encoding="utf-8")))
    for name in ("meta", "samhita"):
        if name not in fences:
            return [f"missing ```{name}"], warnings
    meta = parse_meta(fences["meta"])
    if meta.get("id") != path.stem:
        errors.append(f"meta id {meta.get('id')!r} ≠ file name {path.stem!r}")
    want = samhita_of(fences)
    lines = want.split("\n")
    for line in lines:
        back = iast.to_dev(iast.to_iast(line)).strip("\n")
        if back != line:
            errors.append(f"IAST round trip changed the line\n  have: {line!r}\n  back: {back!r}")
        if line != line.strip() or "  " in line:
            errors.append(f"stray spacing in {line!r}")
    if not lines[-1].endswith(" ॥"):
        errors.append("last line does not end with ' ॥'")

    try:
        rows = parse_padas(fences.get("padas", ""))
    except ValueError as exc:
        return errors + [str(exc)], warnings

    if rows:
        got = join_rows(rows)
        if got != want:
            errors.append(f"slices do not join to the saṃhitā\n  want: {want!r}\n  got:  {got!r}")
        for number, (pada, slice_dev, _after, meaning) in enumerate(rows, start=1):
            try:
                split_aksaras(slice_dev)
            except ValueError as exc:
                errors.append(f"row {number}: {exc}")
                continue
            if not pada:
                errors.append(f"row {number}: empty pada for slice {slice_dev!r}")
            elif related(pada, slice_dev) < 0.4:
                warnings.append(f"row {number}: pada {pada!r} and slice {slice_dev!r} look unrelated")
            if strict and not meaning:
                errors.append(f"row {number}: no meaning for {pada!r}")
    elif strict:
        errors.append("padas table is empty")

    if strict:
        if not fences.get("translation", "").strip():
            errors.append("no translation")
        want_phrases = sum(1 for row in rows if row[2] in LINE_END)
        phrases = parse_phrases(fences.get("phrase", ""))
        if len(phrases) != want_phrases or not all(phrases):
            errors.append(f"phrase meanings: have {len(phrases)}, want one for each of {want_phrases} lines")
    return errors, warnings


def verse_files(path: Path) -> list[Path]:
    if path.is_dir():
        return sorted(path.glob("gita-*.md"))
    return [path]


def main() -> int:
    args = sys.argv[1:]
    strict = "--strict" in args
    targets = [Path(a) for a in args if a != "--strict"]
    if len(targets) != 1:
        print(__doc__, file=sys.stderr)
        return 2
    files = verse_files(targets[0])
    if not files:
        print(f"no gita-*.md files under {targets[0]}", file=sys.stderr)
        return 1
    failed = 0
    for path in files:
        errors, warnings = check_file(path, strict)
        for warning in warnings:
            print(f"WARN {path.stem}: {warning}")
        if errors:
            failed += 1
            print(f"FAIL {path.stem}")
            for error in errors:
                print(f"  {error}")
    mode = "strict" if strict else "text"
    if failed:
        print(f"\n{failed} of {len(files)} files FAIL ({mode})")
        return 1
    print(f"all {len(files)} files PASS ({mode})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
