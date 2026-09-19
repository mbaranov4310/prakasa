#!/usr/bin/env python3
"""Lift Dṛg-dṛśya-viveka Stage-2 markdown into Prakāśa TypeScript.

Usage:
  python3 scripts/lift-ddv.py
  python3 scripts/lift-ddv.py ddv-01
"""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT = ROOT / "docs/ddv/text"
CONTENT = ROOT / "src/content/ddv"
LIBRARY = ROOT / "src/content/library.ts"

spec = importlib.util.spec_from_file_location("check_ddv_text", ROOT / "scripts/check-ddv-text.py")
chk = importlib.util.module_from_spec(spec)
spec.loader.exec_module(chk)

iast_spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts/ddv-iast.py")
iast_mod = importlib.util.module_from_spec(iast_spec)
iast_spec.loader.exec_module(iast_mod)

CONS = set("कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह")
VOWELS = set("अआइईउऊऋॠऌएऐओऔ")
MATRAS = set("ािीुूृॄॢेैोौ")
MARKS = set("ंःँꣳ")
VIRAMA = "्"


def split_aksaras(dev: str) -> list[str]:
    s = chk.nfc(dev)
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        ch = s[i]
        if ch in " \t":
            i += 1
            continue
        if ch == "ऽ":
            if out:
                out[-1] += ch
            else:
                out.append(ch)
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
            while i < n and s[i] == VIRAMA and i + 1 < n and s[i + 1] in CONS:
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
        out.append(ch)
        i += 1
    return out or [s] if s else []


def ts_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def word_opts(after: str) -> str:
    if after == "join":
        return ", { trailing: '' }"
    if after == "danda":
        return ", { trailing: ' ।', lineBreakAfter: true }"
    if after == "ddanda":
        return ", { trailing: ' ॥', lineBreakAfter: true }"
    return ""


def parse_phrases(body: str) -> tuple[str, str]:
    parts = [p.strip() for p in body.split("---")]
    h1 = parts[0] if parts else ""
    h2 = parts[1] if len(parts) > 1 else ""
    return h1, h2


def render_word(cid: str, idx: int, slice_dev: str, after: str, meaning: str) -> str:
    aks = split_aksaras(slice_dev)
    joined = "".join(aks)
    if chk.nfc(joined) != chk.nfc(slice_dev.replace(" ", "")):
        raise SystemExit(f"{cid} w{idx}: aksara join {joined!r} ≠ slice {slice_dev!r}")
    pairs = []
    for a in aks:
        pairs.append(f"      ['{ts_escape(a)}', '{ts_escape(iast_mod.to_iast(a))}']")
    if not pairs:
        pairs.append(f"      ['{ts_escape(slice_dev)}', '{ts_escape(iast_mod.to_iast(slice_dev))}']")
    body = ",\n".join(pairs)
    return (
        f"    word('{cid}-w{idx}', '{ts_escape(meaning)}', [\n"
        f"{body},\n"
        f"    ]{word_opts(after)})"
    )


def dump_from_rows(rows: list[tuple[str, ...]]) -> str:
    parts: list[str] = []
    for row in rows:
        slice_dev, after = row[2], row[4]
        parts.append("".join(split_aksaras(slice_dev)))
        if after == "join":
            continue
        if after == "space":
            parts.append(" ")
        elif after == "danda":
            parts.append(" ।\n")
        elif after == "ddanda":
            parts.append(" ॥\n")
    return "".join(parts).strip("\n")


def lift_one(path: Path) -> str:
    text = chk.nfc(path.read_text(encoding="utf-8"))
    fences = dict(chk.parse_fences(text))
    meta = chk.parse_meta(fences["meta"])
    cid = meta["id"]
    n = int(meta["verse"])
    label = f"Verse {n}"
    title_dev = label
    title_iast = label
    title_en = label
    export = f"ddv{n:02d}"
    translation = fences.get("translation", "").replace("\n", " ").strip()
    h1, h2 = parse_phrases(fences.get("phrase", ""))
    rows = chk.parse_padas(fences["padas"])
    want = chk.nfc(fences["samhita"].replace("\r\n", "\n").strip("\n"))
    got = chk.nfc(dump_from_rows(rows))
    if got != want:
        raise SystemExit(f"{cid}: leaf dump ≠ saṃhitā\n  want: {want!r}\n  got:  {got!r}")

    glossary: list[tuple[str, str]] = []
    seen: set[str] = set()
    for pada_dev, pada_iast, _sd, _si, _after, meaning in rows:
        term = pada_iast or iast_mod.to_iast(pada_dev)
        if not term or term in seen or not meaning:
            continue
        seen.add(term)
        glossary.append((term, meaning))

    phrases: list[list[str]] = [[]]
    w = 0
    for _pd, _pi, slice_dev, _si, after, meaning in rows:
        w += 1
        phrases[-1].append(render_word(cid, w, slice_dev, after, meaning))
        if after in {"danda", "ddanda"}:
            phrases.append([])
    if phrases and not phrases[-1]:
        phrases.pop()
    headings = [h1, h2]
    phrase_blocks = []
    for pi, words in enumerate(phrases, start=1):
        inner = ",\n".join(words)
        meaning = headings[pi - 1] if pi - 1 < len(headings) else ""
        phrase_blocks.append(
            f"    group('{cid}-p{pi}', 'phrase', '{ts_escape(meaning)}', [\n{inner},\n    ])"
        )
    inner_v = ",\n".join(phrase_blocks)
    gloss_lines = ",\n".join(
        f"    {{ term: '{ts_escape(t)}', meaning: '{ts_escape(m)}' }}" for t, m in glossary
    )
    return f"""import {{ group, word }} from "../../lib/span";
import type {{ Chapter }} from "../../types";

export const {export}: Chapter = {{
  id: '{cid}',
  titleDev: '{ts_escape(title_dev)}',
  titleIast: '{ts_escape(title_iast)}',
  titleEn: '{ts_escape(title_en)}',
  status: 'ready',
  translation: '{ts_escape(translation)}',
  glossary: [
{gloss_lines},
  ],
  root: group('{cid}-verse', 'verse', '{ts_escape(translation)}', [
{inner_v},
  ]),
}};
"""


def ddv_imports() -> str:
    return "".join(
        f'import {{ ddv{n:02d} }} from "./ddv/ddv-{n:02d}";\n' for n in range(1, 47)
    )


def ddv_book() -> str:
    chapters = ",\n".join(f"      ddv{n:02d}" for n in range(1, 47))
    return (
        "  {\n"
        '    id: "drg-drsya-viveka",\n'
        '    titleDev: "दृग्दृश्यविवेकः",\n'
        '    titleIast: "dṛgdṛśyavivekaḥ",\n'
        '    titleEn: "Dṛg-dṛśya-viveka",\n'
        '    blurb: "Forty-six verses on seer and seen, word by word.",\n'
        "    chapters: [\n"
        f"{chapters},\n"
        "    ],\n"
        "  },\n"
    )


def patch_library() -> None:
    src = LIBRARY.read_text(encoding="utf-8")
    src = re.sub(r'import \{ ddv\d+ \} from "\./ddv/ddv-\d+";\n', "", src)
    marker = 'import { chamakam11 } from "./rudra/chamakam-11";\n'
    if marker not in src:
        raise SystemExit("library.ts: missing rudra import marker")
    src = src.replace(marker, marker + ddv_imports(), 1)
    src = re.sub(
        r"  \{\n    id: \"drg-drsya-viveka\",.*?\n  \},\n",
        "",
        src,
        count=1,
        flags=re.S,
    )
    tail = "      chamakam11,\n    ],\n  },\n];"
    if tail not in src:
        raise SystemExit("library.ts: missing rudra book tail")
    src = src.replace(tail, "      chamakam11,\n    ],\n  },\n" + ddv_book() + "];", 1)
    LIBRARY.write_text(src, encoding="utf-8")


def main() -> int:
    ids = sys.argv[1:]
    if not ids:
        ids = [p.stem for p in sorted(TEXT.glob("ddv-*.md")) if p.stem != "_TEMPLATE"]
    CONTENT.mkdir(parents=True, exist_ok=True)
    ok: list[str] = []
    for cid in ids:
        path = TEXT / f"{cid}.md"
        if not path.exists():
            print(f"skip missing {path}", file=sys.stderr)
            continue
        out = CONTENT / f"{cid}.ts"
        out.write_text(lift_one(path), encoding="utf-8")
        print(f"wrote {out} (leaf dump == saṃhitā)")
        ok.append(cid)
    if len(ok) == 46 or not sys.argv[1:]:
        patch_library()
        print(f"patched {LIBRARY}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
