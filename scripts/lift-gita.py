#!/usr/bin/env python3
"""Lift finished Bhagavad Gītā chapters into Prakāśa TypeScript.

A chapter is a folder of verse files plus `_chapter.md`:
  docs/gita/text/<NN>/_chapter.md
  docs/gita/text/<NN>/gita-<NN>-<VV>.md

Every verse must pass `check-gita-text.py --strict` or nothing is written.

Usage:
  python3 scripts/lift-gita.py        # every chapter folder that has _chapter.md
  python3 scripts/lift-gita.py 12
"""

from __future__ import annotations

import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT = ROOT / "docs/gita/text"
CONTENT = ROOT / "src/content/gita"
LIBRARY = ROOT / "src/content/library.ts"

spec = importlib.util.spec_from_file_location("check_gita_text", ROOT / "scripts/check-gita-text.py")
chk = importlib.util.module_from_spec(spec)
spec.loader.exec_module(chk)
iast = chk.iast

# Running heads of the printed edition, used until a chapter is lifted.
ORDINALS = [
    "प्रथमोऽध्यायः",
    "द्वितीयोऽध्यायः",
    "तृतीयोऽध्यायः",
    "चतुर्थोऽध्यायः",
    "पञ्चमोऽध्यायः",
    "षष्ठोऽध्यायः",
    "सप्तमोऽध्यायः",
    "अष्टमोऽध्यायः",
    "नवमोऽध्यायः",
    "दशमोऽध्यायः",
    "एकादशोऽध्यायः",
    "द्वादशोऽध्यायः",
    "त्रयोदशोऽध्यायः",
    "चतुर्दशोऽध्यायः",
    "पञ्चदशोऽध्यायः",
    "षोडशोऽध्यायः",
    "सप्तदशोऽध्यायः",
    "अष्टादशोऽध्यायः",
]

DEV_DIGITS = str.maketrans("0123456789", "०१२३४५६७८९")


def q(text: str) -> str:
    return json.dumps(text, ensure_ascii=False)


def word_options(pada: str, after: str, verse: int) -> str:
    options = [f"pada: {q(iast.to_iast(pada))}"]
    if after == "join":
        options.append('trailing: ""')
    elif after == "break":
        options.append("lineBreakAfter: true")
    elif after == "danda":
        options.append('trailing: " ।", lineBreakAfter: true')
    elif after == "ddanda":
        number = str(verse).translate(DEV_DIGITS)
        options.append(f'trailing: " ॥ {number} ॥", lineBreakAfter: true, gapAfter: true')
    return ", { " + ", ".join(options) + " }"


def render_word(word_id: str, pada: str, slice_dev: str, after: str, meaning: str, verse: int) -> str:
    pairs = ",\n".join(
        f"          [{q(aksara)}, {q(iast.to_iast(aksara))}]" for aksara in chk.split_aksaras(slice_dev)
    )
    return f"        word({q(word_id)}, {q(meaning)}, [\n{pairs},\n        ]{word_options(pada, after, verse)})"


def lift_chapter(folder: Path) -> tuple[int, str]:
    chapter_meta = chk.parse_meta(chk.parse_fences(chk.nfc((folder / "_chapter.md").read_text(encoding="utf-8")))["meta"])
    number = int(chapter_meta["chapter"])
    chapter_id = f"gita-{number:02d}"
    if chapter_meta.get("id") != chapter_id or folder.name != f"{number:02d}":
        raise SystemExit(f"{folder}: _chapter.md id or folder name does not match chapter {number}")

    verse_blocks: list[str] = []
    translations: list[str] = []
    glossary: dict[str, list[str]] = {}
    files = sorted(folder.glob("gita-*.md"))
    for expected, path in enumerate(files, start=1):
        errors, _warnings = chk.check_file(path, strict=True)
        if errors:
            raise SystemExit(f"{path.stem}: fails the strict check\n  " + "\n  ".join(errors))
        fences = chk.parse_fences(chk.nfc(path.read_text(encoding="utf-8")))
        meta = chk.parse_meta(fences["meta"])
        verse = int(meta["verse"])
        verse_id = f"{chapter_id}-{verse:02d}"
        if verse != expected or path.stem != verse_id:
            raise SystemExit(f"{path.name}: expected verse {expected} of {chapter_id}")
        translation = " ".join(fences["translation"].split())
        translations.append(f"{verse}. {translation}")
        phrase_meanings = chk.parse_phrases(fences["phrase"])

        phrases: list[list[str]] = [[]]
        for index, (pada, slice_dev, after, meaning) in enumerate(chk.parse_padas(fences["padas"]), start=1):
            phrases[-1].append(render_word(f"{verse_id}-w{index}", pada, slice_dev, after, meaning, verse))
            if after in chk.LINE_END:
                phrases.append([])
            # The glossary lists each word once, with its senses but without the
            # bracketed notes that belong to one verse.
            term = iast.to_iast(pada)
            sense = re.sub(r"\s*\([^)]*\)\s*$", "", meaning)
            seen = glossary.setdefault(term, [])
            if sense not in seen:
                seen.append(sense)
        phrases.pop()
        phrase_blocks = [
            f"      group({q(f'{verse_id}-p{index}')}, \"phrase\", {q(phrase_meanings[index - 1])}, [\n"
            + ",\n".join(words)
            + ",\n      ])"
            for index, words in enumerate(phrases, start=1)
        ]
        verse_blocks.append(
            f"    group({q(verse_id)}, \"verse\", {q(translation)}, [\n" + ",\n".join(phrase_blocks) + ",\n    ])"
        )

    if not verse_blocks:
        raise SystemExit(f"{folder}: no verse files")
    title_dev = chapter_meta["title_dev"]
    glossary_lines = ",\n".join(
        f"    {{ term: {q(term)}, meaning: {q('; '.join(meanings))} }}" for term, meanings in glossary.items()
    )
    source = f"""// Generated by scripts/lift-gita.py from docs/gita/text/{number:02d}. Edit the verse files, then lift again.
import {{ group, word }} from "../../lib/span";
import type {{ Chapter }} from "../../types";

export const gita{number:02d}: Chapter = {{
  id: {q(chapter_id)},
  titleDev: {q(title_dev)},
  titleIast: {q(iast.to_iast(title_dev))},
  titleEn: {q(chapter_meta["title_en"])},
  joinFused: true,
  status: "ready",
  translation: {q(chr(10).join(translations))},
  glossary: [
{glossary_lines},
  ],
  root: group({q(chapter_id + "-chapter")}, "chapter", "", [
{(","+chr(10)).join(verse_blocks)},
  ]),
}};
"""
    CONTENT.mkdir(parents=True, exist_ok=True)
    out = CONTENT / f"{chapter_id}.ts"
    out.write_text(source, encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)} ({len(verse_blocks)} verses)")
    return number, chapter_id


def patch_library() -> None:
    ready = sorted(int(path.stem.split("-")[1]) for path in CONTENT.glob("gita-*.ts"))
    src = LIBRARY.read_text(encoding="utf-8")
    src = re.sub(r'import \{ gita\d+ \} from "\./gita/gita-\d+";\n', "", src)
    src = re.sub(r"  \{\n    id: \"bhagavad-gita\",.*?\n  \},\n", "", src, count=1, flags=re.S)

    marker = 'import type { Book } from "../types";\n'
    if marker not in src:
        raise SystemExit("library.ts: missing the Book type import")
    imports = "".join(f'import {{ gita{n:02d} }} from "./gita/gita-{n:02d}";\n' for n in ready)
    src = src.replace(marker, imports + marker, 1)

    rows: list[str] = []
    for n in range(1, 19):
        if n in ready:
            rows.append(f"      gita{n:02d},")
        else:
            title = ORDINALS[n - 1]
            rows.append(f'      comingSoon("gita-{n:02d}", {q(title)}, {q(iast.to_iast(title))}, "Chapter {n}"),')
    book = (
        "  {\n"
        '    id: "bhagavad-gita",\n'
        '    titleDev: "श्रीमद्भगवद्गीता",\n'
        '    titleIast: "śrīmadbhagavadgītā",\n'
        '    titleEn: "Bhagavad Gītā",\n'
        '    blurb: "The seven hundred verses as Śaṅkara reads them, word by word.",\n'
        "    chapters: [\n" + "\n".join(rows) + "\n    ],\n"
        "  },\n"
    )
    closing = "\n];\n"
    if src.count(closing) != 1:
        raise SystemExit("library.ts: cannot find the end of the books list")
    src = src.replace(closing, "\n" + book + "];\n", 1)
    LIBRARY.write_text(src, encoding="utf-8")
    print(f"patched {LIBRARY.relative_to(ROOT)} (chapters ready: {ready})")


def main() -> int:
    wanted = [f"{int(arg):02d}" for arg in sys.argv[1:]]
    folders = sorted(path.parent for path in TEXT.glob("*/_chapter.md"))
    if wanted:
        folders = [folder for folder in folders if folder.name in wanted]
    if not folders:
        print("no chapter folders with _chapter.md", file=sys.stderr)
        return 1
    for folder in folders:
        lift_chapter(folder)
    patch_library()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
