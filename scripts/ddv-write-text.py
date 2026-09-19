#!/usr/bin/env python3
"""Write Phase-1 docs/ddv/text/ddv-NN.md from the Param IAST dump.

Padas tables are empty (Phase 2). Devanagari is derived from IAST.

Usage:
  python3 scripts/ddv-write-text.py
"""

from __future__ import annotations

import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VERSES = ROOT / "docs" / "ddv" / "decode" / "out" / "param-verses.json"
TEXT = ROOT / "docs" / "ddv" / "text"

spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts" / "ddv-iast.py")
iast = importlib.util.module_from_spec(spec)
spec.loader.exec_module(iast)

# Nikhilananda PDF pages (1-indexed) — same map as ddv-crop-verses.py
NIKH_PAGE = {
    1: 17, 2: 19, 3: 20, 4: 21, 5: 22, 6: 24, 7: 25, 8: 26, 9: 28, 10: 30,
    11: 31, 12: 32, 13: 34, 14: 35, 15: 37, 16: 39, 17: 40, 18: 41, 19: 42, 20: 43,
    21: 44, 22: 45, 23: 46, 24: 47, 25: 48, 26: 50, 27: 53, 28: 55, 29: 56, 30: 57,
    31: 59, 32: 61, 33: 63, 34: 65, 35: 66, 36: 67, 37: 68, 38: 70, 39: 71, 40: 72,
    41: 73, 42: 74, 43: 75, 44: 76, 45: 77, 46: 78,
}

TEMPLATE = """# ddv-{n:02d}

```meta
id: ddv-{n:02d}
verse: {n}
param_pages: {param_page}
nikh_pages: {nikh_page}
expected_padas: 0
```

```samhita
{dev}
```

```samhita_iast
{iast_block}
```

```padas
pada_dev	pada_iast	slice_dev	slice_iast	after
```
"""


def main() -> int:
    verses = json.loads(VERSES.read_text(encoding="utf-8"))
    TEXT.mkdir(parents=True, exist_ok=True)
    for row in verses:
        n = row["n"]
        iast_block = row["iast"]
        # verse 10: Param omitted the closing danda; supply || and flag later
        if n == 10 and not iast_block.rstrip().endswith("|"):
            iast_block = iast_block.rstrip() + " ||"
        dev = iast.to_dev(iast_block)
        body = TEMPLATE.format(
            n=n,
            param_page=row["param_page"],
            nikh_page=NIKH_PAGE[n],
            dev=dev,
            iast_block=iast_block,
        )
        path = TEXT / f"ddv-{n:02d}.md"
        path.write_text(body, encoding="utf-8")
        print(f"wrote {path.name}")
    # template
    (TEXT / "_TEMPLATE.md").write_text(
        TEMPLATE.format(n=0, param_page=0, nikh_page=0, dev="", iast_block=""),
        encoding="utf-8",
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
