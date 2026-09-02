#!/usr/bin/env python3
"""Generate glyph-review HTML + verdicts.json for Extra + Malayalam tick."""

from __future__ import annotations

import html
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from baraha_map import EXTRA, MALAYALAM  # noqa: E402
from common import GLYPHS_DIR, REVIEW, SHEETS_DIR  # noqa: E402

AMBIGUOUS = {
    0x00C9: "É — stem that finishes a letter and also real ा",
    0x00FB: "û — dummy; we map empty and never re-emit",
    0x00FC: "ü — ka-class stem, same piece as É (ा)",
    0x00CB: "Ë — one of several ि glyphs (canonical encoder uses Ì)",
    0x00CC: "Ì — ि (canonical)",
    0x00CD: "Í — also ि",
    0x00C3: "Ã — mapped रू (could be confused with ू)",
    0x00EF: "ï — repha र् (not the letter र)",
    0x00C6: "Æ — mapped empty",
    0x00C5: "Å — avagraha ऽ",
    0x0059: "Y — also क् (canonical uses M)",
    0x0047: "G — also ङ् (¡ is the other)",
    0x00A1: "¡ — also ङ्",
    0x00B8: "¸ — also ष् (canonical uses w)",
    0x00B0: "° — also ध् (canonical uses k)",
    0x00A6: "¦ — त्त् (¨ is the other)",
    0x00A8: "¨ — also त्त्",
    0x00FE: "þ — udātta ॑ (Malayalam en-dash is the overlay tick)",
    0x00D3: "Ó — ू (Ô is the other)",
    0x00D4: "Ô — ू (canonical)",
    0x00D1: "Ñ — ु (Ò is the other)",
    0x00D2: "Ò — also ु",
    0x00CE: "Î — ी (Ï is canonical)",
    0x00CF: "Ï — ी (canonical)",
    0x00EB: "ë — ्र (ì is the other)",
    0x00EC: "ì — also ्र",
    0x00E7: "ç — virama (è is the other)",
    0x00E8: "è — also virama",
    0x00F3: "ó — also ं (Ç is canonical)",
    0x0053: "S — full द, not द्",
    0x0055: "U — full र, not र्",
    0x0057: "W — full ह (û often follows in the PDF)",
    0x0051: "Q — full ड",
}

HTML_HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Rudra Baraha glyph review</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 1100px; margin: 1.5rem auto; padding: 0 1rem; color: #111; }
  h1 { font-size: 1.3rem; }
  .hint { background: #f4f4f0; padding: 0.8rem 1rem; border-radius: 6px; font-size: 0.95rem; }
  .stats { margin: 1rem 0; }
  .card { border: 1px solid #ccc; border-radius: 8px; padding: 1rem; margin: 1.2rem 0; break-inside: avoid; }
  .card.ambig { border-color: #b45309; background: #fffbeb; }
  .card h2 { font-size: 1.05rem; margin: 0 0 0.4rem; font-family: ui-monospace, monospace; }
  .guess { font-size: 1.6rem; margin: 0.3rem 0; }
  .empty { color: #888; font-size: 1rem; }
  .flag { display: inline-block; background: #b45309; color: #fff; font-size: 0.75rem; padding: 0.1rem 0.4rem; border-radius: 4px; }
  .row { display: flex; flex-wrap: wrap; gap: 1rem; align-items: flex-start; }
  .row img { background: #fff; border: 1px solid #ddd; }
  .glyph { width: 140px; height: 140px; object-fit: contain; }
  .sheet { max-width: 720px; height: auto; }
  .key { color: #555; font-size: 0.85rem; }
  nav a { margin-right: 0.8rem; }
</style>
</head>
<body>
<h1>Baraha glyph review (Extra + Malayalam tick)</h1>
<p class="hint">
  You are naming <strong>marks</strong>, not reading the Rudram.
  Edit <code>verdicts.json</code>: set <code>status</code> to
  <code>ok</code>, <code>wrong</code>, or <code>unsure</code>.
  If wrong, put the Unicode piece you actually see in <code>unicode</code>.
  Then re-run <code>python3 scripts/rudra-decode/build_review.py</code> —
  <code>ok</code> and <code>wrong</code> cards leave this page (they stay in the JSON as gold).
  Only pending / unsure remain here.
</p>
"""


def cards() -> list[dict]:
    out = []
    for cp in sorted(EXTRA):
        ch = chr(cp)
        piece = EXTRA[cp]
        out.append(
            {
                "font": "BRHDevanagariExtra",
                "cp": cp,
                "ch": ch,
                "guess": piece,
                "ambiguous": AMBIGUOUS.get(cp),
            }
        )
    out.append(
        {
            "font": "BRHMalayalamExtra",
            "cp": 0x2013,
            "ch": "–",
            "guess": MALAYALAM[0x2013],
            "ambiguous": "U+2013 — overlay svara tick, mapped ॑ (same piece as Extra þ)",
        }
    )
    return out


def rel_img(font: str, cp: int, kind: str) -> str:
    sub = "glyphs" if kind == "glyph" else "sheets"
    return f"../catalog/{sub}/{font}/U+{cp:04X}.png"


def verdict_key(font: str, cp: int) -> str:
    return f"{font}:U+{cp:04X}"


def build_verdicts(items: list[dict], path: Path) -> dict:
    existing = {}
    if path.is_file():
        existing = json.loads(path.read_text(encoding="utf-8"))
    verdicts = {}
    for it in items:
        key = verdict_key(it["font"], it["cp"])
        old = existing.get(key, {})
        status = old.get("status", "pending")
        unicode = old.get("unicode", it["guess"])
        note = old.get("note", "")
        verdicts[key] = {
            "font": it["font"],
            "cp": it["cp"],
            "ch": it["ch"],
            "guess": it["guess"],
            "status": status,
            "unicode": unicode,
            "note": note,
            "ambiguous": bool(it["ambiguous"]),
        }
    path.write_text(json.dumps(verdicts, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return verdicts


DONE_STATUSES = frozenset({"ok", "wrong"})


def still_open(items: list[dict], verdicts: dict) -> list[dict]:
    """Cards still to name — pending / unsure stay on the HTML page."""
    out = []
    for it in items:
        key = verdict_key(it["font"], it["cp"])
        if verdicts.get(key, {}).get("status") not in DONE_STATUSES:
            out.append(it)
    return out


def render_html(items: list[dict], verdicts: dict) -> str:
    open_items = still_open(items, verdicts)
    n_ok = sum(1 for it in items if verdicts[verdict_key(it["font"], it["cp"])]["status"] == "ok")
    n_wrong = sum(1 for it in items if verdicts[verdict_key(it["font"], it["cp"])]["status"] == "wrong")
    n_amb = sum(1 for it in open_items if it["ambiguous"])
    parts = [HTML_HEAD]
    parts.append(
        f'<p class="stats">{len(open_items)} still open'
        f' ({n_ok} ok + {n_wrong} wrong hidden), {n_amb} flagged ambiguous. '
        f'All {len(items)} verdicts stay in '
        f'<code>docs/rudra/decode/review/verdicts.json</code>.</p>\n'
        f'<nav>'
    )
    for it in open_items:
        key = verdict_key(it["font"], it["cp"])
        parts.append(f'<a href="#{html.escape(key)}">U+{it["cp"]:04X}</a>')
    parts.append("</nav>\n")
    for it in open_items:
        key = verdict_key(it["font"], it["cp"])
        v = verdicts[key]
        amb = it["ambiguous"]
        cls = "card ambig" if amb else "card"
        piece = v.get("unicode", it["guess"])
        map_guess = it["guess"]
        piece_html = (
            '<p class="guess empty">(empty dummy)</p>'
            if piece == ""
            else f'<p class="guess">{html.escape(piece)}</p>'
        )
        if piece != map_guess:
            piece_html += (
                f'<p class="key">map still has {html.escape(map_guess) or "(empty)"}'
                f' · JSON unicode above is your correction</p>'
            )
        flag = ' <span class="flag">ambiguous</span>' if amb else ""
        note = f"<p>{html.escape(amb)}</p>" if amb else ""
        gpath = rel_img(it["font"], it["cp"], "glyph")
        spath = rel_img(it["font"], it["cp"], "sheet")
        parts.append(
            f'<article class="{cls}" id="{html.escape(key)}">\n'
            f'<h2>{html.escape(key)}{flag}</h2>\n'
            f'<p class="key">stored char {html.escape(repr(it["ch"]))} · '
            f'status in JSON: <strong>{html.escape(v["status"])}</strong></p>\n'
            f'{piece_html}\n{note}\n'
            f'<div class="row">\n'
            f'<div><div>isolated</div>'
            f'<img class="glyph" src="{html.escape(gpath)}" alt="glyph"></div>\n'
            f'<div><div>on the page</div>'
            f'<img class="sheet" src="{html.escape(spath)}" alt="sheet"></div>\n'
            f"</div>\n</article>\n"
        )
    parts.append("</body></html>\n")
    return "".join(parts)


def main() -> int:
    REVIEW.mkdir(parents=True, exist_ok=True)
    items = cards()
    vpath = REVIEW / "verdicts.json"
    verdicts = build_verdicts(items, vpath)
    (REVIEW / "index.html").write_text(render_html(items, verdicts), encoding="utf-8")
    open_n = len(still_open(items, verdicts))
    print(f"{open_n} open / {len(items)} total → {REVIEW / 'index.html'}")
    print(f"verdicts → {vpath}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
