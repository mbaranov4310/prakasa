#!/usr/bin/env python3
"""Fuse padam dump + saṃhitā dump into slices; check join self-consistency.

Usage:
  python3 scripts/fuse-rudra-v2.py                 # all 22
  python3 scripts/fuse-rudra-v2.py namakam-07
"""

from __future__ import annotations

import re
import sys
import unicodedata
from functools import lru_cache
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

import importlib.util


def _load(name: str, path: Path):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


pada_mod = _load("diff_rudra_pada", ROOT / "scripts" / "diff-rudra-pada.py")
sam_mod = _load("diff_rudra_samhita", ROOT / "scripts" / "diff-rudra-samhita.py")
chk_mod = _load("check_rudra_text", ROOT / "scripts" / "check-rudra-text.py")

PRE = {
    "एति",
    "अभीति",
    "अधीति",
    "अवेति",
    "प्रेति",
    "परीति",
    "परेति",
    "नीति",
}

MATRA_TO_VOWEL = {
    "ा": "आ",
    "ि": "इ",
    "ी": "ई",
    "ु": "उ",
    "ू": "ऊ",
    "े": "ए",
    "ो": "ओ",
    "ै": "ऐ",
    "ौ": "औ",
    "ृ": "ऋ",
    "ॄ": "ॠ",
    "ॢ": "ऌ",
}

VISARGA_VARIANTS = ("", "ः", "स्", "श्", "ष्", "र्")


def _split_iti(s: str) -> tuple[str, str] | None:
    for mark in ("इति", "ेत्य", "ेति", "इत्य", "ित्य", "इती"):
        if mark in s:
            pre, post = s.split(mark, 1)
            post = re.sub(r"[-\s]", "", post)
            if mark == "इती":
                post = "इ" + post
            elif mark in {"ेत्य", "इत्य", "ित्य"} and post and post[0] in MATRA_TO_VOWEL:
                post = MATRA_TO_VOWEL[post[0]] + post[1:]
            return pre.strip(), post
    return None


def collapse_padam(chunk: str) -> str:
    s = pada_mod.letters(chunk)
    s = s.replace(".", "")
    if s in PRE:
        return s
    split = _split_iti(s)
    if split is not None:
        pre, post = split
        if post:
            return post
        return pre
    return re.sub(r"[-\s]", "", s)


def prepare_samhita(body: str) -> str:
    s = sam_mod.compact(body)
    s = s.replace("-", "")
    s = s.replace(".", "")
    return s


def parse_after(s: str, pos: int) -> tuple[str, int]:
    rest = s[pos:]
    m = re.match(r" ?॥ *", rest)
    if m:
        return "ddanda", pos + len(m.group(0))
    m = re.match(r" ?। *", rest)
    if m:
        return "danda", pos + len(m.group(0))
    if rest.startswith(" "):
        return "space", pos + 1
    return "join", pos


def peel_trailing(rest: str) -> tuple[str, str]:
    t = rest
    m = re.search(r"( ?)(॥)$", t)
    if m:
        return t[: m.start()].rstrip(), "ddanda"
    m = re.search(r"( ?)(।)$", t)
    if m:
        return t[: m.start()].rstrip(), "danda"
    if t.endswith(" "):
        return t.rstrip(), "space"
    return t, "join"


def visarga_forms(p: str) -> set[str]:
    out = {p}
    if p.endswith("ः"):
        stem = p[:-1]
        for v in VISARGA_VARIANTS:
            out.add(stem + v)
        out.add(stem + "ो")
        out.add(stem + "ा")
        out.add(stem + "र्")
        out.add(stem + "र")
    else:
        out.add(p + "ः")
        if p.endswith(("स्", "श्", "ष्", "र्")):
            out.add(p[:-1] + "ः")
    if p.endswith("े"):
        out.add(p[:-1])
        out.add(p[:-1] + "ा")
    if p.endswith("ो"):
        out.add(p[:-1])
    if p.endswith("ै"):
        out.add(p[:-1] + "ा")
    if p.endswith("ा"):
        out.add(p[:-1])
    if p.endswith("म्"):
        out.add(p[:-2] + "ं")
        out.add(p[:-2] + "ꣳ")
    if p.endswith("न्"):
        out.add(p[:-2] + "ं")
        out.add(p[:-2] + "ँ")
    if "ँ" in p:
        out.add(p.replace("ँ", "ं"))
        out.add(p.replace("ँ", "ꣳ"))
    if "ं" in p:
        out.add(p.replace("ं", "ꣳ"))
        out.add(p.replace("ं", "ँ"))
    if "ꣳ" in p:
        out.add(p.replace("ꣳ", "ं"))
        out.add(p.replace("ꣳ", "ँ"))
    if p.endswith("त्"):
        out.add(p[:-2] + "न्")
        out.add(p[:-2] + "द्")
        out.add(p[:-2] + "न्न्")
    if len(p) <= 3:
        for m in "ािीुूेोैौ":
            out.add(p + m)
    # avagraha + same visarga
    if p.startswith("अ") and len(p) > 1:
        body = p[1:]
        out.add("ऽ" + body)
        if body.endswith("ः"):
            st = body[:-1]
            for v in VISARGA_VARIANTS:
                out.add("ऽ" + st + v)
            out.add("ऽ" + st + "ो")
        if body.endswith("म्"):
            out.add("ऽ" + body[:-2] + "ं")
    if p.startswith("आ") and len(p) > 1:
        out.add("ऽ" + p[1:])
    return {x for x in out if x}


def pre_forms(p: str) -> set[str]:
    extra = {
        "एति": {"एति", "आ", "रा", "ए", "र", "ा"},
        "अभीति": {"अभीति", "अभि", "भी", "भि", "भीति"},
        "अधीति": {"अधीति", "अधि", "धि", "ाधि"},
        "अवेति": {"अवेति", "अव", "व"},
        "प्रेति": {"प्रेति", "प्र"},
        "परीति": {"परीति", "परि"},
        "परेति": {"परेति", "परा", "पर"},
        "नीति": {"नीति", "नि"},
    }
    return extra.get(p, set())


def realizations(p: str) -> set[str]:
    out = visarga_forms(p) | pre_forms(p) | {p}
    for i in range(1, len(p)):
        out.add(p[i:])
    if p.startswith("अ") and len(p) > 1:
        out.add("ऽ" + p[1:])
    if p.startswith("आ"):
        out.add("ऽ" + p[1:])
    # visarga of previous word often sits on this one
    for prefix in ("स्", "श्", "ष्", "र्"):
        out.add(prefix + p)
        if p:
            out.add(prefix + p[1:])
    return {x for x in out if x}


def min_slice_len(p: str) -> int:
    return 1 if len(p) <= 2 else 2


def _is_matra_extra(extra: str) -> bool:
    return bool(extra) and all(
        unicodedata.category(c) in {"Mc", "Mn"} or c in "ंःँꣳ"
        for c in extra
    )


def compatible(p: str, sl: str) -> bool:
    if not sl:
        return False
    for r in realizations(p):
        if sl == r:
            return True
        if sl.startswith(r) and _is_matra_extra(sl[len(r) :]):
            return True
        if r.endswith(sl) and len(sl) >= min_slice_len(p):
            return True
    if p.endswith(sl) and len(sl) >= min_slice_len(p):
        return True
    if sl.startswith(p) and _is_matra_extra(sl[len(p) :]):
        return True
    return False


def bases_from_chunk(chunk: str) -> list[str]:
    s = pada_mod.letters(chunk)
    out = [collapse_padam(chunk)]
    out.extend(x for x in re.split(r"[\s\-]+", s) if x and x not in {"इति"})
    split = _split_iti(s.replace(".", ""))
    if split is not None:
        pre, post = split
        if pre:
            out.append(pre)
        if post:
            out.append(post)
    seen: set[str] = set()
    uniq: list[str] = []
    for x in out:
        if x not in seen:
            seen.add(x)
            uniq.append(x)
    return uniq


def candidates(chunk: str, remaining: str) -> list[str]:
    m = re.match(r"[^ ।॥]+", remaining)
    if not m:
        return []
    token = m.group(0)
    bases = bases_from_chunk(chunk)
    found: list[str] = []
    seen: set[str] = set()
    for L in range(len(token), 0, -1):
        sl = token[:L]
        if sl in seen:
            continue
        if any(compatible(p, sl) for p in bases):
            seen.add(sl)
            found.append(sl)
    return found


def fuse(chunks: list[str], samhita: str) -> list[tuple[str, str, str]] | None:
    n = len(chunks)
    s = samhita
    collapsed = [collapse_padam(c) for c in chunks]

    @lru_cache(maxsize=None)
    def solve(i: int, pos: int) -> tuple[tuple[tuple[str, str, str], ...], ...] | None:
        if i == n:
            return () if pos >= len(s) else None
        if pos > len(s):
            return None
        if i == n - 1:
            rest = s[pos:]
            sl, after = peel_trailing(rest)
            if not sl:
                return None
            if not any(compatible(p, sl) for p in bases_from_chunk(chunks[i])):
                return None
            return ((collapsed[i], sl, after),)
        opts = candidates(chunks[i], s[pos:])
        for sl in opts:
            after, newpos = parse_after(s, pos + len(sl))
            rec = solve(i + 1, newpos)
            if rec is not None:
                return ((collapsed[i], sl, after),) + rec
        return None

    got = solve(0, 0)
    if got is None:
        return None
    return [(a, b, c) for a, b, c in got]


def join_dev(rows: list[tuple[str, str, str]]) -> str:
    parts: list[str] = []
    for _p, sl, after in rows:
        suf, _ = chk_mod.AFTER[after]
        parts.append(sl + suf)
    return "".join(parts).strip("\n").strip()


def stage1_counts(md: str) -> list[int]:
    fences = re.findall(r"```([a-z_]+)\n(.*?)```", md, flags=re.S)
    counts: list[int] = []
    for kind, body in fences:
        if kind != "padas":
            continue
        n = 0
        for line in body.splitlines()[1:]:
            if not line.strip() or line.startswith("#") or line.startswith("pada_dev"):
                continue
            n += 1
        counts.append(n)
    return counts


def analyze_length() -> None:
    print("=== MATCH vs length (saṃhitā dump vs Stage 1) ===")
    rows = []
    for path in sorted((ROOT / "docs/rudra/samhita").glob("*.txt")):
        i = path.stem
        md = (ROOT / "docs/rudra/text" / f"{i}.md").read_text(encoding="utf-8")
        dump = path.read_text(encoding="utf-8")
        file_rows = sam_mod.parse_samhita_fences(md)
        dump_rows = sam_mod.parse_dump(dump)
        match = True
        for (dl, db), (fl, fb) in zip(dump_rows, file_rows):
            if sam_mod.letters(db) != sam_mod.letters(fb) or sam_mod.compact(db) != sam_mod.compact(fb):
                match = False
                break
        if len(dump_rows) != len(file_rows):
            match = False
        padams = len(pada_mod.parse_dump((ROOT / "docs/rudra/pada" / f"{i}.txt").read_text(encoding="utf-8")))
        letters_n = sum(len(sam_mod.letters(b)) for _, b in dump_rows)
        panc = len(dump_rows)
        rows.append((i, padams, letters_n, panc, match))
    rows.sort(key=lambda r: r[1])
    print(f"{'id':<16} {'padams':>6} {'letters':>7} {'pañc':>4}  samhita")
    print("-" * 52)
    for i, p, L, panc, m in rows:
        print(f"{i:<16} {p:6} {L:7} {panc:4}  {'MATCH' if m else 'MISMATCH'}")
    matched = [r for r in rows if r[4]]
    mism = [r for r in rows if not r[4]]
    def avg(xs, k):
        return sum(x[k] for x in xs) / len(xs) if xs else 0
    print()
    print(f"MATCH n={len(matched)}  mean padams={avg(matched,1):.0f}  mean letters={avg(matched,2):.0f}")
    print(f"MISMATCH n={len(mism)}  mean padams={avg(mism,1):.0f}  mean letters={avg(mism,2):.0f}")
    print("Longest three:", ", ".join(f"{r[0]}({r[1]})" for r in sorted(rows, key=lambda r: -r[1])[:3]))
    print("Shortest three:", ", ".join(f"{r[0]}({r[1]})" for r in sorted(rows, key=lambda r: r[1])[:3]))


def run_one(i: str) -> dict:
    pada_path = ROOT / "docs/rudra/pada" / f"{i}.txt"
    sam_path = ROOT / "docs/rudra/samhita" / f"{i}.txt"
    md_path = ROOT / "docs/rudra/text" / f"{i}.md"
    raw_padas = pada_mod.parse_dump(pada_path.read_text(encoding="utf-8"))
    collapsed = [collapse_padam(x) for x in raw_padas]
    sam_sections = sam_mod.parse_dump(sam_path.read_text(encoding="utf-8"))
    samhita = " ".join(prepare_samhita(b) for _, b in sam_sections)
    samhita = re.sub(r"\s+", " ", samhita).strip()
    md = md_path.read_text(encoding="utf-8")
    s1 = pada_mod.parse_pada_dev(md)
    collapse_mismatch = sum(a != b for a, b in zip(collapsed, s1)) if len(collapsed) == len(s1) else -1
    rows = fuse(raw_padas, samhita)
    if rows is None:
        return {
            "id": i,
            "n": len(collapsed),
            "fused": False,
            "join": False,
            "collapse_vs_s1": collapse_mismatch,
            "slice_eq_pada": None,
            "slice_eq_s1": None,
        }
    recon = join_dev(rows)
    want = samhita
    # join_dev uses AFTER which adds " ।\n" — compact both for compare
    ok = sam_mod.compact(recon) == sam_mod.compact(want)
    s1_slices: list[str] = []
    in_p = False
    for line in md.splitlines():
        if line.startswith("```padas"):
            in_p = True
            continue
        if in_p and line.startswith("```"):
            in_p = False
            continue
        if in_p and line.strip() and not line.startswith("pada_dev") and not line.startswith("#"):
            cols = line.split("\t")
            if len(cols) >= 3:
                s1_slices.append(cols[2])
    slice_eq_pada = sum(sl == p for p, sl, _ in rows)
    slice_eq_s1 = None
    if len(s1_slices) == len(rows):
        slice_eq_s1 = sum(a == b for a, (_, b, _) in zip(s1_slices, rows))
    return {
        "id": i,
        "n": len(collapsed),
        "fused": True,
        "join": ok,
        "collapse_vs_s1": collapse_mismatch,
        "slice_eq_pada": slice_eq_pada,
        "slice_eq_s1": slice_eq_s1,
        "rows": rows,
        "recon": recon,
        "want": want,
    }


def main() -> int:
    ids = sys.argv[1:]
    if not ids:
        ids = sorted(p.stem for p in (ROOT / "docs/rudra/pada").glob("*.txt"))
        analyze_length()
        print()
    print("=== v2 fusion (collapsed padam dump × saṃhitā dump) ===")
    print(f"{'id':<16} {'n':>4}  fused join  coll≠s1  sl=pada  sl=s1")
    print("-" * 64)
    n_fused = n_join = 0
    fails = []
    for i in ids:
        r = run_one(i)
        fused = "yes" if r["fused"] else "NO"
        join = "yes" if r["join"] else "NO"
        if r["fused"]:
            n_fused += 1
        if r["join"]:
            n_join += 1
        else:
            fails.append(i)
        c = r["collapse_vs_s1"]
        sp = r["slice_eq_pada"]
        ss = r["slice_eq_s1"]
        sp_s = f"{sp}/{r['n']}" if sp is not None else "—"
        ss_s = f"{ss}/{r['n']}" if ss is not None else "—"
        print(f"{r['id']:<16} {r['n']:4}  {fused:^5} {join:^4}  {c!s:>7}  {sp_s:>7}  {ss_s:>7}")
        if len(ids) == 1 and r["fused"] and not r["join"]:
            print(" recon:", sam_mod.compact(r["recon"])[:200])
            print(" want: ", sam_mod.compact(r["want"])[:200])
        if len(ids) == 1 and not r["fused"]:
            print(" fusion failed (no covering)")
    print("-" * 64)
    print(f"fused {n_fused}/{len(ids)}  join-self-consistent {n_join}/{len(ids)}")
    if fails:
        print("failed:", ", ".join(fails))
    return 0 if n_join == len(ids) else 1


if __name__ == "__main__":
    raise SystemExit(main())
