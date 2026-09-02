#!/usr/bin/env python3
"""Apply the Baraha catalog to span JSONL; emit Unicode text + filled map."""

from __future__ import annotations

import json
import re
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from baraha_map import EXTRA, MALAYALAM, piece_for  # noqa: E402
from common import DECODE, MAP_PATH, OUT, SPANS, is_baraha  # noqa: E402

# Sequences on the stored (Baraha) string, before per-cp map.
RAW_SUBS = [
    ("AÉåÇ", "ॐ"),
    ("||", "॥"),
]


MATRAS = "िीुूृॄेैोौ"  # not ा (handled as ्ा); not ं/ः (would eat repha र्)
CONS_SET = set("कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह")


def _move_i_matra(s: str) -> str:
    """ि is stored before its consonant. One left-to-right pass; do not walk."""
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        if s[i] == "ि":
            j = i + 1
            while j + 1 < n and s[j] in CONS_SET and s[j + 1] == "्":
                j += 2
            if j < n and s[j] in CONS_SET:
                out.append(s[i + 1 : j + 1] + "ि")
                i = j + 1
                continue
        out.append(s[i])
        i += 1
    return "".join(out)


def _move_candrabindu(s: str) -> str:
    """Æ ँ is stored before its host after space / start; ंँ on the same
    syllable stays (संँवृद्ध)."""
    hosts = CONS_SET | set("अआइईउऊऋॠऌएऐओऔ")
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        if s[i] == "ँ":
            prev = out[-1] if out else ""
            if prev in hosts or prev in MATRAS + "ंःाँ":
                out.append("ँ")
                i += 1
                continue
            j = i + 1
            while j + 1 < n and s[j] in CONS_SET and s[j + 1] == "्":
                j += 2
            if j < n and s[j] in CONS_SET:
                k = j + 1
                while k < n and s[k] in MATRAS + "ांः॒॑":
                    k += 1
                out.append(s[i + 1 : k] + "ँ")
                i = k
                continue
        out.append(s[i])
        i += 1
    return "".join(out)


def compose(s: str) -> str:
    if not s:
        return s
    prev = None
    while prev != s:
        prev = s
        s = s.replace("्ा", "")
        for m in MATRAS:
            if m == "ा":
                continue
            s = s.replace("्" + m, m)
        s = s.replace("ाे", "ो")
        s = s.replace("ाै", "ौ")
        s = s.replace("ृा", "ृ")
        s = s.replace("ुा", "ु")
        s = s.replace("ूा", "ू")
        s = s.replace("ं्", "ं")
        s = s.replace("ँ्", "ँ")
        s = s.replace("ꣳ्", "ꣳ")
    s = s.replace("अो", "ओ")
    s = s.replace("अौ", "औ")
    s = s.replace("अा", "आ")
    s = s.replace("एे", "ऐ")
    s = s.replace("एा", "ऐ")
    s = _move_i_matra(s)
    s = _move_candrabindu(s)
    s = re.sub(r"([क-ह])([ािीुूृेैोौंःँ॒॑]*)र्", r"र्\1\2", s)
    s = unicodedata.normalize("NFC", s)
    return s


def decode_baraha_string(raw: str, font: str) -> tuple[str, int]:
    """Return (unicode, n_unknown). raw is the stored WinAnsi string."""
    for a, b in RAW_SUBS:
        raw = raw.replace(a, b)
    out = []
    unknown = 0
    for ch in raw:
        if ch == "ॐ" or ch == "॥":
            out.append(ch)
            continue
        p = piece_for(font, ord(ch))
        if p is None:
            out.append("?")
            unknown += 1
        else:
            out.append(p)
    return compose("".join(out)), unknown


def decode_char(font: str, cp: int, ch: str) -> str:
    if not is_baraha(font):
        return ch
    p = piece_for(font, cp)
    if p is None:
        return "?"
    return p


def load_jsonl(path: Path) -> list[dict]:
    recs = []
    with path.open(encoding="utf-8") as f:
        for line in f:
            recs.append(json.loads(line))
    return recs


def emit_text(recs: list[dict], dest: Path) -> dict:
    """Readable file: page breaks, reading order, composed per visual line."""
    dest.parent.mkdir(parents=True, exist_ok=True)
    unknown = 0
    lines_out: list[str] = []
    i = 0
    n = len(recs)
    while i < n:
        page = recs[i]["page"]
        lines_out.append(f"\n===== page {page} =====\n")
        # group by roughly the same baseline
        while i < n and recs[i]["page"] == page:
            y = recs[i]["bbox"][1]
            band = []
            while i < n and recs[i]["page"] == page and abs(recs[i]["bbox"][1] - y) < 16:
                band.append(recs[i])
                i += 1
            band.sort(key=lambda r: r["bbox"][0])
            # split band by font runs so Baraha compose stays within a font
            parts = []
            j = 0
            while j < len(band):
                f = band[j]["font"]
                run = []
                while j < len(band) and band[j]["font"] == f:
                    run.append(band[j])
                    j += 1
                if is_baraha(f):
                    raw = "".join(r["ch"] for r in run)
                    uni, unk = decode_baraha_string(raw, f)
                    unknown += unk
                    parts.append(uni)
                else:
                    parts.append("".join(r["ch"] for r in run))
            lines_out.append("".join(parts).rstrip() + "\n")
    dest.write_text("".join(lines_out).lstrip(), encoding="utf-8")
    return {"unknown_chars": unknown, "path": str(dest)}


def write_mapped_jsonl(recs: list[dict], dest: Path) -> int:
    n_q = 0
    with dest.open("w", encoding="utf-8") as f:
        for r in recs:
            u = decode_char(r["font"], r["cp"], r["ch"])
            if u == "?":
                n_q += 1
            rec = dict(r)
            rec["unicode"] = u
            f.write(json.dumps(rec, ensure_ascii=False) + "\n")
    return n_q


def fill_map_json() -> dict:
    if MAP_PATH.is_file():
        mapping = json.loads(MAP_PATH.read_text(encoding="utf-8"))
    else:
        mapping = {}
    named = 0
    q = 0
    for key, slot in mapping.items():
        font = slot["font"]
        cp = slot["cp"]
        p = piece_for(font, cp)
        if p is None:
            slot["unicode"] = "?"
            slot["how"] = slot.get("how") or "unset"
            q += 1
        else:
            slot["unicode"] = p if p != "" else "(empty)"
            slot["how"] = "context"
            named += 1
        mapping[key] = slot
    MAP_PATH.write_text(json.dumps(mapping, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return {"named": named, "unknown_keys": q, "keys": len(mapping)}


def invertibility(recs: list[dict]) -> list[dict]:
    """Per-cp map injectivity: unicode piece → list of (font, cp)."""
    inv: dict[str, list[str]] = {}
    for r in recs:
        if not is_baraha(r["font"]):
            continue
        p = piece_for(r["font"], r["cp"])
        if p is None:
            continue
        inv.setdefault(p, [])
        key = f"{r['font']}:U+{r['cp']:04X}"
        if key not in inv[p]:
            inv[p].append(key)
    collisions = {k: v for k, v in inv.items() if len(v) > 1 and k not in ("", "ि", "ी", "ु", "ू", "ृ", "्", "ं", "ँ", "ꣳ", "र्", "्र")}
    return [{"unicode": k, "sources": v} for k, v in sorted(collisions.items()) if k]


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    stats = fill_map_json()
    all_recs = []
    reports = {}
    for name in ("namakam", "camakam"):
        recs = load_jsonl(SPANS / f"{name}.jsonl")
        n_q = write_mapped_jsonl(recs, SPANS / f"{name}.mapped.jsonl")
        tstats = emit_text(recs, OUT / f"{name}.txt")
        reports[name] = {
            "jsonl_unknown": n_q,
            "unknown_chars": tstats["unknown_chars"],
            "path": f"docs/rudra/decode/out/{name}.txt",
            "chars": len(recs),
        }
        all_recs.extend(recs)
        print(f"{name}: {tstats}")

    coll = invertibility(all_recs)
    missing = []
    seen = set()
    for r in all_recs:
        if not is_baraha(r["font"]):
            continue
        if piece_for(r["font"], r["cp"]) is None:
            k = (r["font"], r["cp"], r["ch"])
            if k not in seen:
                seen.add(k)
                missing.append({"font": r["font"], "cp": r["cp"], "ch": r["ch"]})

    report = {
        "catalog": stats,
        "files": reports,
        "unmapped_keys": missing,
        "invertibility_collisions": coll[:40],
        "rerun": [
            "python3 scripts/rudra-decode/extract.py",
            "python3 scripts/rudra-decode/catalog.py",
            "python3 scripts/rudra-decode/apply.py",
        ],
    }
    (DECODE / "REPORT.md").write_text(
        _report_md(report),
        encoding="utf-8",
    )
    (DECODE / "apply_stats.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print("unmapped keys", missing)
    return 0 if not missing else 0  # '?' allowed; do not fail the dump


def _report_md(report: dict) -> str:
    missing = report["unmapped_keys"]
    lines = [
        "# Rudra PDF decode",
        "",
        "Literal Unicode of both VedaVMS PDFs. Svaras kept. No Stage 1 transforms.",
        "",
        "## Re-run",
        "",
        "```",
        "python3 scripts/rudra-decode/extract.py",
        "python3 scripts/rudra-decode/catalog.py",
        "python3 scripts/rudra-decode/apply.py",
        "```",
        "",
        "## Extractors",
        "",
        "pymupdf `rawdict` is the span source. pypdf visitor must match BRH compact strings;",
        "overlapping Malayalam U+2013 ticks and a one-matra Nirmala fight on the last page",
        "are logged in `extract_agreement.json`.",
        "",
        "The catalog is a per-codepoint piece table in `scripts/rudra-decode/baraha_map.py`,",
        "checked against isolated glyphs and against known lines (ॐ नमः, नमस्ते रुद्र…).",
        "`apply.py` then composes pieces (्ा → inherent a, ि stored before its consonant, repha).",
        "Auto image-match only named punctuation; it did not name the letters.",
        "",
        "## Catalog",
        "",
        f"- keys in map.json: {report['catalog']['keys']}",
        f"- named: {report['catalog']['named']}",
        f"- unknown keys: {report['catalog']['unknown_keys']}",
        "",
        "## Output",
        "",
    ]
    for name, st in report["files"].items():
        lines.append(f"- `{name}`: {st['chars']} chars → `{st['path']}` (unknown in text compose: {st['unknown_chars']}; jsonl `?`: {st['jsonl_unknown']})")
    lines += [
        "",
        "## Unmapped Baraha keys (fail closed as `?`)",
        "",
    ]
    if not missing:
        lines.append("None.")
    else:
        for m in missing:
            lines.append(f"- `{m['font']}` U+{m['cp']:04X} `{m['ch']}`")
    lines += [
        "",
        "## Invertibility",
        "",
        "Original codepoints stay on every JSONL row. Unicode is a derived column.",
        "Several Baraha cps collapse to the same piece (two ि glyphs, dummy û/ü, etc.).",
        "Those collisions are listed in `apply_stats.json`; they are not guesses.",
        "",
        "Eye-copy in `docs/rudra/archive-eye-copy/` is not a source.",
        "",
    ]
    return "\n".join(lines) + "\n"


if __name__ == "__main__":
    raise SystemExit(main())
