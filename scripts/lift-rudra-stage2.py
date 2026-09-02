#!/usr/bin/env python3
"""Lift Stage 1 markdown into Prakāśa TypeScript (empty glosses).

Usage:
  python3 scripts/lift-rudra-stage2.py            # all 22 that exist
  python3 scripts/lift-rudra-stage2.py namakam-01
"""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT = ROOT / "docs/rudra/text"
CONTENT = ROOT / "src/content/rudra"
LIBRARY = ROOT / "src/content/library.ts"

spec = importlib.util.spec_from_file_location("check_rudra_text", ROOT / "scripts/check-rudra-text.py")
chk = importlib.util.module_from_spec(spec)
spec.loader.exec_module(chk)

iast_spec = importlib.util.spec_from_file_location("rudra_iast", ROOT / "scripts/rudra-iast.py")
iast_mod = importlib.util.module_from_spec(iast_spec)
iast_spec.loader.exec_module(iast_mod)

CONS = set("कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह")
VOWELS = set("अआइईउऊऋॠऌएऐओऔ")
MATRAS = set("ािीुूृॄॢेैोौ")
MARKS = set("ंःँꣳ")
VIRAMA = "्"

TITLES = {
    **{
        f"namakam-{n:02d}": (
            f"नमकम् {['१','२','३','४','५','६','७','८','९','१०','११'][n-1]}",
            f"namakam {n}",
            f"Namakam {n}",
        )
        for n in range(1, 12)
    },
    **{
        f"chamakam-{n:02d}": (
            f"चमकम् {['१','२','३','४','५','६','७','८','९','१०','११'][n-1]}",
            f"camakam {n}",
            f"Camakam {n}",
        )
        for n in range(1, 12)
    },
}

EXPORT = {
    **{f"namakam-{n:02d}": f"namakam{n:02d}" for n in range(1, 12)},
    **{f"chamakam-{n:02d}": f"chamakam{n:02d}" for n in range(1, 12)},
}


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


def render_word(cid: str, idx: int, slice_dev: str, after: str) -> str:
    aks = split_aksaras(slice_dev)
    pairs = []
    for a in aks:
        pairs.append(f"      ['{ts_escape(a)}', '{ts_escape(iast_mod.to_iast(a))}']")
    if not pairs:
        pairs.append(f"      ['{ts_escape(slice_dev)}', '{ts_escape(iast_mod.to_iast(slice_dev))}']")
    body = ",\n".join(pairs)
    return (
        f"    word('{cid}-w{idx}', '', [\n"
        f"{body},\n"
        f"    ]{word_opts(after)})"
    )


def lift_one(path: Path) -> str:
    text = chk.nfc(path.read_text(encoding="utf-8"))
    fences = chk.parse_fences(text)
    meta = chk.parse_meta(next(b for k, b in fences if k == "meta"))
    cid = meta["id"]
    title_dev, title_iast, title_en = TITLES[cid]
    export = EXPORT[cid]
    headings = re.findall(r"^##\s+(\S+)", text, flags=re.M)
    sections: list[dict[str, str]] = []
    current: dict[str, str] = {}
    for kind, body in fences:
        if kind in {"samhita", "samhita_iast", "padas"}:
            current[kind] = body
            if {"samhita", "samhita_iast", "padas"} <= current.keys():
                sections.append(current)
                current = {}
    sentences: list[str] = []
    w = 0
    for i, section in enumerate(sections):
        label = headings[i] if i < len(headings) else f"p{i+1}"
        rows = chk.parse_padas(section["padas"])
        phrases: list[list[str]] = [[]]
        for pada_dev, _pi, slice_dev, _si, after in rows:
            w += 1
            phrases[-1].append(render_word(cid, w, slice_dev, after))
            if after in {"danda", "ddanda"}:
                phrases.append([])
        if phrases and not phrases[-1]:
            phrases.pop()
        phrase_blocks = []
        for pi, words in enumerate(phrases, start=1):
            inner = ",\n".join(words)
            phrase_blocks.append(
                f"      group('{cid}-p{i+1}-{pi}', 'phrase', '', [\n{inner},\n      ])"
            )
        inner_s = ",\n".join(phrase_blocks)
        sentences.append(
            f"    group('{cid}-s{i+1}', 'sentence', '', [\n{inner_s},\n    ])"
        )
    inner_v = ",\n".join(sentences)
    return f"""import {{ group, word }} from "../../lib/span";
import type {{ Chapter }} from "../../types";

export const {export}: Chapter = {{
  id: '{cid}',
  titleDev: '{ts_escape(title_dev)}',
  titleIast: '{ts_escape(title_iast)}',
  titleEn: '{ts_escape(title_en)}',
  status: 'ready',
  translation: '',
  root: group('{cid}-verse', 'verse', '', [
{inner_v},
  ]),
}};
"""


def patch_library(ids: list[str]) -> None:
    src = LIBRARY.read_text(encoding="utf-8")
    imports = []
    uses = []
    for cid in ids:
        export = EXPORT[cid]
        rel = f"./rudra/{cid}"
        imports.append(f'import {{ {export} }} from "{rel}";')
        uses.append(f"      {export},")
    block_imports = "\n".join(imports) + "\n"
    if "from \"./rudra/" not in src:
        src = src.replace(
            'import type { Book } from "../types";',
            block_imports + 'import type { Book } from "../types";',
        )
    else:
        src = re.sub(
            r'(import \{ \w+ \} from "\./rudra/[^"]+";\n)+',
            block_imports,
            src,
            count=1,
        )
    chapter_list = "\n".join(uses)
    src = re.sub(
        r"chapters: rudraComingSoon\(\),",
        f"chapters: [\n{chapter_list}\n    ],",
        src,
        count=1,
    )
    src = re.sub(
        r"\nfunction rudraComingSoon\(\): Book\[\"chapters\"\] \{.*?\n\}\n",
        "\n",
        src,
        count=1,
        flags=re.S,
    )
    LIBRARY.write_text(src, encoding="utf-8")


def main() -> int:
    ids = sys.argv[1:]
    if not ids:
        ids = [p.stem for p in sorted(TEXT.glob("*.md")) if p.stem != "_TEMPLATE"]
    if not ids:
        print("no Stage 1 files in docs/rudra/text/", file=sys.stderr)
        return 1
    CONTENT.mkdir(parents=True, exist_ok=True)
    ok: list[str] = []
    for cid in ids:
        path = TEXT / f"{cid}.md"
        if not path.exists():
            print(f"skip missing {path}", file=sys.stderr)
            continue
        out = CONTENT / f"{cid}.ts"
        out.write_text(lift_one(path), encoding="utf-8")
        print(f"wrote {out}")
        ok.append(cid)
    all_ids = [p.stem for p in sorted(CONTENT.glob("*.ts"))]
    all_ids.sort(key=lambda x: (0 if x.startswith("namakam") else 1, x))
    if all_ids:
        patch_library(all_ids)
        print(f"patched {LIBRARY} ({len(all_ids)} chapters)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
