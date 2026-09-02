#!/usr/bin/env python3
"""Devanagari → Prakāśa IAST. Usage: python3 scripts/rudra-iast.py 'नमः' """

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
MISC = {
    "ं": "ṃ",
    "ँ": "ṃ",
    "ꣳ": "ṃ",
    "ः": "ḥ",
    "ऽ": "'",
    "।": "|",
    "॥": "||",
    "ॐ": "oṃ",
    " ": " ",
    "\n": "\n",
    "-": "-",
    "(": "(",
    ")": ")",
    ",": ",",
    ".": ".",
}


def to_iast(s: str) -> str:
    s = unicodedata.normalize("NFC", s)
    s = s.replace("ऽ", "'")
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        ch = s[i]
        if ch in MISC and ch not in CONS:
            if ch in "ंँꣳः":
                out.append(MISC[ch])
                i += 1
                continue
            out.append(MISC[ch])
            i += 1
            continue
        if ch in VOWELS:
            out.append(VOWELS[ch])
            i += 1
            continue
        if ch in CONS:
            cluster = [CONS[ch]]
            i += 1
            while i + 1 < n and s[i] == "्" and s[i + 1] in CONS:
                cluster.append(CONS[s[i + 1]])
                i += 2
            if i < n and s[i] == "्":
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
        out.append(ch)
        i += 1
    return "".join(out)


def main() -> int:
    if len(sys.argv) > 1:
        text = " ".join(sys.argv[1:])
    else:
        text = sys.stdin.read()
    sys.stdout.write(to_iast(text))
    if not text.endswith("\n") and "\n" in text:
        sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
