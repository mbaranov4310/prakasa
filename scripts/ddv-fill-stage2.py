#!/usr/bin/env python3
"""Fill padas + translations into docs/ddv/text/ddv-NN.md from ddv-verse-data.py.

Usage:
  python3 scripts/ddv-fill-stage2.py
  python3 scripts/ddv-fill-stage2.py 1 2 3
"""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT = ROOT / "docs" / "ddv" / "text"

spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts" / "ddv-iast.py")
iast = importlib.util.module_from_spec(spec)
spec.loader.exec_module(iast)

data_spec = importlib.util.spec_from_file_location("ddv_verse_data", ROOT / "scripts" / "ddv-verse-data.py")
data = importlib.util.module_from_spec(data_spec)
data_spec.loader.exec_module(data)

chk_spec = importlib.util.spec_from_file_location("check_ddv_text", ROOT / "scripts" / "check-ddv-text.py")
chk = importlib.util.module_from_spec(chk_spec)
chk_spec.loader.exec_module(chk)

AFTER = chk.AFTER


def join_dev(rows: list[tuple[str, str, str, str]]) -> str:
    parts = []
    for _pada, slice_dev, after, _m in rows:
        parts.append(slice_dev + AFTER[after][0])
    return "".join(parts).strip("\n")


def fill_one(n: int) -> None:
    verse = data.VERSES[n]
    path = TEXT / f"ddv-{n:02d}.md"
    text = path.read_text(encoding="utf-8")
    fences = dict(re.findall(r"```([a-z_]+)\n(.*?)```", text, flags=re.S))
    want = iast.nfc(fences["samhita"].replace("\r\n", "\n").strip("\n"))
    got = iast.nfc(join_dev(verse["rows"]))
    if got != want:
        raise SystemExit(
            f"v{n}: slice join ≠ samhita\n  want: {want!r}\n  got:  {got!r}"
        )
    lines = ["pada_dev\tpada_iast\tslice_dev\tslice_iast\tafter\tmeaning"]
    for pada, sl, after, meaning in verse["rows"]:
        lines.append(
            "\t".join(
                [
                    pada,
                    iast.to_iast(pada),
                    sl,
                    iast.to_iast(sl),
                    after,
                    meaning.replace("\t", " "),
                ]
            )
        )
    padas = "\n".join(lines) + "\n"
    meta = fences["meta"].rstrip() + "\n"
    meta = re.sub(r"expected_padas: \d+", f"expected_padas: {len(verse['rows'])}", meta)
    if "translation:" in meta:
        meta = re.sub(r"translation:.*", "", meta)
    trans = verse["tr"].replace("\n", " ").strip()
    new = (
        f"# ddv-{n:02d}\n\n"
        f"```meta\n{meta.strip()}\n```\n\n"
        f"```samhita\n{fences['samhita'].strip(chr(10))}\n```\n\n"
        f"```samhita_iast\n{fences['samhita_iast'].strip(chr(10))}\n```\n\n"
        f"```translation\n{trans}\n```\n\n"
        f"```phrase\n{verse['h1']}\n---\n{verse['h2']}\n```\n\n"
        f"```padas\n{padas}```\n"
    )
    path.write_text(new, encoding="utf-8")
    print(f"filled ddv-{n:02d} ({len(verse['rows'])} padas)")


def main() -> int:
    ids = [int(x) for x in sys.argv[1:]] if len(sys.argv) > 1 else sorted(data.VERSES)
    for n in ids:
        if n not in data.VERSES:
            print(f"no data for {n}", file=sys.stderr)
            return 1
        fill_one(n)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
