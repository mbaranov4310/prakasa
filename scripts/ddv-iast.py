#!/usr/bin/env python3
"""Prakāśa IAST ↔ Devanagari for Dṛg-dṛśya-viveka (and the same table as Rudra).

Usage:
  python3 scripts/ddv-iast.py to-dev 'rūpaṃ'
  python3 scripts/ddv-iast.py to-iast 'रूपं'
  python3 scripts/ddv-iast.py roundtrip 'rūpaṃ dṛśyaṃ'
"""

from __future__ import annotations

import sys
import unicodedata

VOWELS = {
    "अ": "a",
    "आ": "ā",
    "इ": "i",
    "ई": "ī",
    "उ": "u",
    "ऊ": "ū",
    "ऋ": "ṛ",
    "ॠ": "ṝ",
    "ऌ": "ḷ",
    "ए": "e",
    "ऐ": "ai",
    "ओ": "o",
    "औ": "au",
}
MATRAS = {
    "ा": "ā",
    "ि": "i",
    "ी": "ī",
    "ु": "u",
    "ू": "ū",
    "ृ": "ṛ",
    "ॄ": "ṝ",
    "ॢ": "ḷ",
    "े": "e",
    "ै": "ai",
    "ो": "o",
    "ौ": "au",
}
CONS = {
    "क": "k",
    "ख": "kh",
    "ग": "g",
    "घ": "gh",
    "ङ": "ṅ",
    "च": "c",
    "छ": "ch",
    "ज": "j",
    "झ": "jh",
    "ञ": "ñ",
    "ट": "ṭ",
    "ठ": "ṭh",
    "ड": "ḍ",
    "ढ": "ḍh",
    "ण": "ṇ",
    "त": "t",
    "थ": "th",
    "द": "d",
    "ध": "dh",
    "न": "n",
    "प": "p",
    "फ": "ph",
    "ब": "b",
    "भ": "bh",
    "म": "m",
    "य": "y",
    "र": "r",
    "ल": "l",
    "ळ": "ḷ",
    "व": "v",
    "श": "ś",
    "ष": "ṣ",
    "स": "s",
    "ह": "h",
}
MISC_TO_IAST = {
    "ं": "ṃ",
    "ँ": "ṃ",
    "ꣳ": "ṃ",
    "ः": "ḥ",
    "ऽ": "'",
    "।": "|",
    "॥": "||",
    "ॐ": "oṃ",
}

IAST_VOWEL = {v: k for k, v in VOWELS.items()}
IAST_MATRA = {v: k for k, v in MATRAS.items()}
IAST_CONS = {v: k for k, v in CONS.items()}
# vocalic l consonant ळ shares IAST ḷ with vowel ऌ — consonant cluster form is rare here.
IAST_CONS["ḷ"] = "ळ"
IAST_MATRA["a"] = ""  # inherent

# Longest-first for the tokenizer.
IAST_VOWEL_KEYS = ("ai", "au", "ṝ", "ṛ", "ḹ", "ḷ", "ā", "ī", "ū", "a", "i", "u", "e", "o")
IAST_CONS_KEYS = (
    "kh", "gh", "ch", "jh", "ṭh", "ḍh", "th", "dh", "ph", "bh",
    "ṅ", "ñ", "ṭ", "ḍ", "ṇ", "ś", "ṣ",
    "k", "g", "c", "j", "t", "d", "n", "p", "b", "m", "y", "r", "l", "v", "s", "h", "ḻ",
)

VIRAMA = "्"


def nfc(s: str) -> str:
    return unicodedata.normalize("NFC", s)


def normalize_iast(s: str) -> str:
    """Transcript cleanup → Prakāśa IAST. Does not invent letters."""
    s = nfc(s)
    s = s.replace("ē", "e").replace("Ē", "e").replace("ō", "o").replace("Ō", "o")
    s = s.replace("ṁ", "ṃ").replace("Ṁ", "ṃ")
    s = s.replace("\u2019", "'").replace("\u2018", "'").replace("`", "'")
    s = s.replace("\u2013", "-").replace("\u2014", "-")
    s = s.replace("।", "|").replace("॥", "||")
    # hyphen is a transcript break (keeps kuryād-hṛdaye from becoming dh)
    s = s.replace("\xa0", " ")
    s = "\n".join(line.rstrip() for line in s.splitlines())
    return s.strip("\n")


def strip_verse_number(s: str) -> str:
    """Drop trailing '|| 1' / '||1||' / '1' after a double danda."""
    import re

    s = normalize_iast(s)
    s = re.sub(r"\|\|\s*\d{1,2}\s*\|\|\s*$", "||", s)
    s = re.sub(r"\|\|\s*\d{1,2}\s*$", "||", s)
    s = re.sub(r"\|\s*\d{1,2}\s*$", "|", s)
    return s.strip()


def to_iast(s: str) -> str:
    s = nfc(s)
    s = s.replace("ऽ", "'")
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        ch = s[i]
        if ch in MISC_TO_IAST and ch not in CONS:
            out.append(MISC_TO_IAST[ch])
            i += 1
            continue
        if ch in VOWELS:
            out.append(VOWELS[ch])
            i += 1
            continue
        if ch in CONS:
            cluster = [CONS[ch]]
            i += 1
            while i + 1 < n and s[i] == VIRAMA and s[i + 1] in CONS:
                cluster.append(CONS[s[i + 1]])
                i += 2
            if i < n and s[i] == VIRAMA:
                out.append("".join(cluster))
                i += 1
                continue
            if i < n and s[i] in MATRAS:
                out.append("".join(cluster) + MATRAS[s[i]])
                i += 1
            else:
                out.append("".join(cluster) + "a")
            continue
        if ch in "॒॑":
            i += 1
            continue
        if ch in MATRAS:
            out.append(MATRAS[ch])
            i += 1
            continue
        if ch == " ":
            out.append(" ")
            i += 1
            continue
        if ch == "\n":
            out.append("\n")
            i += 1
            continue
        out.append(ch)
        i += 1
    return "".join(out)


def _tokenize_iast(s: str) -> list[tuple[str, str]]:
    """Return list of (kind, value) where kind is vowel/cons/mark/punct/space/avagraha."""
    s = normalize_iast(s)
    out: list[tuple[str, str]] = []
    i = 0
    n = len(s)
    while i < n:
        if s.startswith("||", i):
            out.append(("punct", "||"))
            i += 2
            continue
        if s[i] == "|":
            out.append(("punct", "|"))
            i += 1
            continue
        if s[i] in " \t":
            out.append(("space", " "))
            i += 1
            continue
        if s[i] == "\n":
            out.append(("nl", "\n"))
            i += 1
            continue
        if s[i] == "-":
            out.append(("break", "-"))
            i += 1
            continue
        if s[i] == "'":
            out.append(("avagraha", "'"))
            i += 1
            continue
        if s[i] in "ṃṁ":
            out.append(("mark", "ṃ"))
            i += 1
            continue
        if s[i] == "ḥ":
            out.append(("mark", "ḥ"))
            i += 1
            continue
        matched = False
        for key in IAST_CONS_KEYS:
            if s.startswith(key, i):
                # don't steal 'h' off a vowel; cons keys are consonants
                out.append(("cons", key if key != "ḻ" else "ḷ"))
                i += len(key)
                matched = True
                break
        if matched:
            continue
        for key in IAST_VOWEL_KEYS:
            if s.startswith(key, i):
                out.append(("vowel", key))
                i += len(key)
                matched = True
                break
        if matched:
            continue
        out.append(("other", s[i]))
        i += 1
    return out


def to_dev(s: str) -> str:
    toks = _tokenize_iast(s)
    out: list[str] = []
    i = 0
    n = len(toks)
    while i < n:
        kind, val = toks[i]
        if kind == "space":
            out.append(" ")
            i += 1
            continue
        if kind == "nl":
            out.append("\n")
            i += 1
            continue
        if kind == "punct":
            out.append("।" if val == "|" else "॥")
            i += 1
            continue
        if kind == "break":
            out.append("-")
            i += 1
            continue
        if kind == "avagraha":
            out.append("ऽ")
            i += 1
            continue
        if kind == "other":
            out.append(val)
            i += 1
            continue
        if kind == "mark":
            # stray mark (shouldn't happen mid-stream); attach as letter
            out.append("ं" if val == "ṃ" else "ः")
            i += 1
            continue
        if kind == "vowel":
            out.append(IAST_VOWEL[val])
            i += 1
            if i < n and toks[i][0] == "mark":
                out.append("ं" if toks[i][1] == "ṃ" else "ः")
                i += 1
            continue
        if kind == "cons":
            cluster = [val]
            i += 1
            while i < n and toks[i][0] == "cons":
                cluster.append(toks[i][1])
                i += 1
            vowel = "a"
            if i < n and toks[i][0] == "vowel":
                vowel = toks[i][1]
                i += 1
            elif i >= n or toks[i][0] not in {"vowel"}:
                # no explicit vowel: inherent a unless this is a dead cluster
                # (end of word / before mark we still have inherent a, then mark;
                # dead consonant is: no vowel token AND next is not mark that
                # applies after inherent a... wait: `dṛk` = d ṛ k EOS → last
                # cons has NO vowel. `rūpaṃ` = r ū p a ṃ → last cons p has vowel a.
                # So: if we did not consume a vowel token, last cons is virama
                # (no inherent a). Exception: a mark ṃ/ḥ still applies to the
                # previous *syllable*. If last cons has no vowel, there is no
                # syllable vowel — ṃ would be illegal. Treat no-vowel as virama.
                vowel = None
            for c in cluster[:-1]:
                out.append(IAST_CONS[c] + VIRAMA)
            last = IAST_CONS[cluster[-1]]
            if vowel is None:
                out.append(last + VIRAMA)
            else:
                out.append(last + IAST_MATRA[vowel])
            if i < n and toks[i][0] == "mark":
                out.append("ं" if toks[i][1] == "ṃ" else "ः")
                i += 1
            continue
        out.append(val)
        i += 1
    return nfc("".join(out))


def roundtrip_ok(iast: str) -> tuple[bool, str, str]:
    """IAST → Dev → IAST. Returns (ok, got, want)."""
    want = strip_verse_number(normalize_iast(iast))
    # collapse spaces for compare? keep exact.
    dev = to_dev(want)
    got = to_iast(dev)
    return got == want, got, want


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/ddv-iast.py to-dev|to-iast|roundtrip [text]", file=sys.stderr)
        return 2
    cmd = sys.argv[1]
    text = " ".join(sys.argv[2:]) if len(sys.argv) > 2 else sys.stdin.read()
    if cmd == "to-dev":
        sys.stdout.write(to_dev(text))
        if not text.endswith("\n") and "\n" in text:
            sys.stdout.write("\n")
        return 0
    if cmd == "to-iast":
        sys.stdout.write(to_iast(text))
        if not text.endswith("\n") and "\n" in text:
            sys.stdout.write("\n")
        return 0
    if cmd == "roundtrip":
        ok, got, want = roundtrip_ok(text)
        if ok:
            print("OK")
            return 0
        print("FAIL")
        print("want:", repr(want))
        print("got: ", repr(got))
        return 1
    print(f"unknown command {cmd}", file=sys.stderr)
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
