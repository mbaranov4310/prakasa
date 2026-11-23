#!/usr/bin/env python3
"""Check the grammar notes and sentence links of Bhagavad Gītā verses.

For every verse file docs/gita/text/<NN>/gita-<NN>-<VV>.md this expects
  docs/gita/gloss/<NN>/gita-<NN>-<VV>.md   one row per word (docs/gita/GLOSS.md)
  docs/gita/links/<NN>/gita-<NN>-<VV>.md   who goes with whom

Gloss: every word of the verse has exactly one row, the heading is the word
as the verse file has it, the meaning is unchanged, and an obvious row has
every field its kind needs with a value from the allowed list.
Links: roles are known, both ends exist (the far end may sit in another verse
of the same chapter), an obvious link has both ends, an unsure one says why.

Usage:
  python3 scripts/check-gita-gloss.py docs/gita/text/12
  python3 scripts/check-gita-gloss.py docs/gita/text/12/gita-12-05.md
"""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT = ROOT / "docs/gita/text"
GLOSS = ROOT / "docs/gita/gloss"
LINKS = ROOT / "docs/gita/links"


def load(name: str, filename: str):
    spec = importlib.util.spec_from_file_location(name, ROOT / "scripts" / filename)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


iast = load("ddv_iast", "ddv-iast.py")
chk = load("check_gita_text", "check-gita-text.py")

KINDS = {"noun", "adjective", "verb", "participle", "pronoun", "indeclinable"}
CASES = {"nominative", "accusative", "instrumental", "dative", "ablative", "genitive", "locative", "vocative"}
NUMBERS = {"singular", "dual", "plural"}
GENDERS = {"masculine", "feminine", "neuter"}
PERSONS = {"1st", "2nd", "3rd"}
TENSES = {
    "present", "command", "ordinary past", "potential", "blessing", "simple future",
    "distant future", "conditional", "distant past", "recent past",
}
VOICES = {"parasmaipada", "ātmanepada", "passive", "impersonal"}
ROLES = {"subject", "object", "describes", "complement", "same"}

REQUIRED = {
    "noun": ["stem", "gender", "case", "number"],
    "adjective": ["stem", "gender", "case", "number"],
    "pronoun": ["stem", "case", "number"],
    "verb": ["root", "tense", "voice", "person", "number"],
    "participle": ["root", "participle", "gender", "case", "number"],
    "indeclinable": [],
}
ALLOWED = {
    "case": CASES, "number": NUMBERS, "gender": GENDERS, "person": PERSONS, "tense": TENSES, "voice": VOICES,
}
GRAMMAR_FIELDS = [
    "stem", "gender", "case", "number", "root", "prefix", "class", "tense", "voice", "person", "participle", "compound",
]
KNOWN = set(GRAMMAR_FIELDS) | {"ids", "kind", "judgment", "why", "note", "meaning"}
LINK_KNOWN = {"from", "to", "judgment", "why", "note"}


def sections(markdown: str) -> list[tuple[str, dict[str, str], list[str]]]:
    out = []
    for section in markdown.split("\n## ")[1:]:
        heading, *rest = section.split("\n")
        data: dict[str, str] = {}
        bad: list[str] = []
        for line in rest:
            line = line.strip()
            if not line:
                continue
            if ":" not in line:
                bad.append(line)
                continue
            key, value = line.split(":", 1)
            if key.strip() in data:
                bad.append(f"{key.strip()} given twice")
            data[key.strip()] = value.strip()
        out.append((heading.strip(), data, bad))
    return out


def verse_words(path: Path) -> dict[str, tuple[str, str]]:
    """word id -> (pada in IAST, meaning)."""
    fences = chk.parse_fences(path.read_text(encoding="utf-8"))
    rows = chk.parse_padas(fences.get("padas", ""))
    return {
        f"{path.stem}-w{index}": (iast.to_iast(chk.nfc(pada)), meaning)
        for index, (pada, _slice, _after, meaning) in enumerate(rows, start=1)
    }


def check_gloss(path: Path, words: dict[str, tuple[str, str]]) -> list[str]:
    if not path.exists():
        return [f"no gloss file {path.relative_to(ROOT)}"]
    errors: list[str] = []
    markdown = path.read_text(encoding="utf-8")
    if not markdown.startswith(f"# {path.stem}\n"):
        errors.append(f"first line is not '# {path.stem}'")
    seen: dict[str, str] = {}
    for heading, data, bad in sections(markdown):
        where = f"## {heading}"
        errors += [f"{where}: cannot read line '{line}'" for line in bad]
        errors += [f"{where}: unknown field '{key}'" for key in data if key not in KNOWN]
        ids = [item.strip() for item in data.get("ids", "").split(",") if item.strip()]
        if not ids:
            errors.append(f"{where}: no ids")
        for word_id in ids:
            if word_id not in words:
                errors.append(f"{where}: {word_id} is not a word of this verse")
                continue
            if word_id in seen:
                errors.append(f"{where}: {word_id} already has a row ({seen[word_id]})")
            seen[word_id] = where
            pada, meaning = words[word_id]
            if heading != pada:
                errors.append(f"{where}: heading is not the word of {word_id}, which is '{pada}'")
            if data.get("meaning", "") != meaning:
                errors.append(f"{where}: meaning of {word_id} changed; the verse file has '{meaning}'")
        kind = data.get("kind", "")
        if kind not in KINDS:
            errors.append(f"{where}: kind '{kind}' is not one of {sorted(KINDS)}")
            continue
        judgment = data.get("judgment", "")
        if judgment not in ("obvious", "unsure"):
            errors.append(f"{where}: judgment must be obvious or unsure")
            continue
        if judgment == "unsure":
            if not data.get("why"):
                errors.append(f"{where}: an unsure row says why")
            filled = [key for key in GRAMMAR_FIELDS if data.get(key)]
            if filled:
                errors.append(f"{where}: an unsure row leaves the grammar blank, but has {', '.join(filled)}")
            continue
        if data.get("why"):
            errors.append(f"{where}: 'why' belongs to an unsure row; use 'note'")
        for key in REQUIRED[kind]:
            if not data.get(key):
                errors.append(f"{where}: {kind} needs '{key}'")
        for key, allowed in ALLOWED.items():
            value = data.get(key)
            if value and value not in allowed:
                errors.append(f"{where}: {key} '{value}' is not one of {sorted(allowed)}")
        if kind == "verb" and data.get("gender"):
            errors.append(f"{where}: a finite verb has no gender")
        if kind == "indeclinable" and any(data.get(key) for key in ("case", "number", "gender", "person")):
            errors.append(f"{where}: an indeclinable has no case, number, gender or person")
    for word_id in words:
        if word_id not in seen:
            errors.append(f"{word_id} ({words[word_id][0]}) has no row")
    return errors


def check_links(path: Path, words: dict[str, tuple[str, str]], chapter_ids: set[str]) -> list[str]:
    if not path.exists():
        return [f"no links file {path.relative_to(ROOT)}"]
    errors: list[str] = []
    markdown = path.read_text(encoding="utf-8")
    if not markdown.startswith(f"# {path.stem}\n"):
        errors.append(f"first line is not '# {path.stem}'")
    seen: set[tuple[str, str, str]] = set()
    for number, (role, data, bad) in enumerate(sections(markdown), start=1):
        where = f"link {number} ({role})"
        errors += [f"{where}: cannot read line '{line}'" for line in bad]
        errors += [f"{where}: unknown field '{key}'" for key in data if key not in LINK_KNOWN]
        if role not in ROLES:
            errors.append(f"{where}: role is not one of {sorted(ROLES)}")
        source, target = data.get("from", ""), data.get("to", "")
        if source not in words:
            errors.append(f"{where}: from '{source}' is not a word of this verse")
        if target and target not in chapter_ids:
            errors.append(f"{where}: to '{target}' is not a word of this chapter")
        if target and target == source:
            errors.append(f"{where}: a word cannot link to itself")
        judgment = data.get("judgment", "")
        if judgment not in ("obvious", "unsure"):
            errors.append(f"{where}: judgment must be obvious or unsure")
        if judgment == "obvious" and not target:
            errors.append(f"{where}: an obvious link has a 'to'")
        if judgment == "unsure" and not data.get("why"):
            errors.append(f"{where}: an unsure link says why")
        key = (role, source, target)
        if target and key in seen:
            errors.append(f"{where}: the same link is listed twice")
        seen.add(key)
    return errors


def main() -> int:
    args = sys.argv[1:]
    if len(args) != 1:
        print(__doc__)
        return 2
    target = Path(args[0]).resolve()
    files = sorted(target.glob("gita-*.md")) if target.is_dir() else [target]
    if not files:
        print(f"no verse files in {target}")
        return 2
    folder = files[0].parent
    chapter_ids: set[str] = set()
    for path in sorted(folder.glob("gita-*.md")):
        chapter_ids |= set(verse_words(path))

    failed = 0
    rows = links = unsure_rows = unsure_links = 0
    for path in files:
        words = verse_words(path)
        gloss_path = GLOSS / folder.name / path.name
        links_path = LINKS / folder.name / path.name
        errors = check_gloss(gloss_path, words) + check_links(links_path, words, chapter_ids)
        if gloss_path.exists():
            for _heading, data, _bad in sections(gloss_path.read_text(encoding="utf-8")):
                rows += 1
                unsure_rows += data.get("judgment") == "unsure"
        if links_path.exists():
            for _role, data, _bad in sections(links_path.read_text(encoding="utf-8")):
                links += 1
                unsure_links += data.get("judgment") == "unsure"
        if errors:
            failed += 1
            print(f"FAIL {path.stem}")
            for error in errors:
                print(f"  {error}")
    print(f"gloss rows: {rows} ({unsure_rows} unsure); links: {links} ({unsure_links} unsure)")
    if failed:
        print(f"{failed} of {len(files)} verses FAIL")
        return 1
    print(f"all {len(files)} verses PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
