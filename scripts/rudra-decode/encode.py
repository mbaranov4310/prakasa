#!/usr/bin/env python3
"""Canonical Unicode → Baraha (Extra spelling).

Does not reconstruct PDF dummies or which ि glyph. Inverse of apply.compose
for well-formed strings. Stray C्ः is encoded as Cः so
decode(encode("पाठ्ः")) == "पाठः".
"""

from __future__ import annotations

import re
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from baraha_map import EXTRA  # noqa: E402

CONS = set("कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह")
VOWEL_MATRAS = set("ािीुूृॄेैोौ")
AFTER = set("ंःँꣳ॒॑")
SIGNS = VOWEL_MATRAS | AFTER

INDEP = {
    "अ": "A",
    "आ": "AÉ",
    "इ": "C",
    "ई": "D",
    "उ": "E",
    "ऊ": "F",
    "ऋ": "G",
    "ए": "L",
    "ऐ": "Lå",
    "ओ": "AÉå",
    "औ": "AÉæ",
}

# Full letters (no inherent É). द/र/ह from Extra override; ड is full in the table.
FULL = {
    "द": 0x0053,
    "र": 0x0055,
    "ह": 0x0057,
    "ड": 0x0051,
}

# Longest first. form is the NFC Unicode (no trailing virama).
LIGATURES: list[tuple[str, int]] = [
    ("ङ्क", 0x0192),
    ("ङ्ग", 0x2026),
    ("क्त", 0x00A3),
    ("क्र", 0x00A2),
    ("क्ष", 0x00A4),
    ("ज्ञ", 0x00A5),
    ("त्त्न", 0x00A6),
    ("त्त", 0x00A8),
    ("त्र", 0x00A7),
    ("द्भ", 0x00B0),
    ("द्ध", 0x00AE),
    ("द्य", 0x00B1),
    ("द्व", 0x00B2),
    ("न्न", 0x00B3),
    ("श्र", 0x00B4),
    ("श्व", 0x00B5),
    ("श्च", 0x00B6),
    ("ष्ठ", 0x00B8),
    ("ष्ट", 0x00B9),
    ("ह्ण", 0x00BA),
    ("ह्य", 0x00BD),
    ("ह्र", 0x00BE),
    ("ह्व", 0x00C0),
    ("च्च", 0x0160),
    ("ट्य", 0x0161),
    ("ज्ज", 0x2039),
    ("रु", 0x00C2),
    ("रू", 0x00C3),
    ("हृ", 0x2122),
]

BODIES = {
    "क": 0x004D,
    "ख": 0x005A,
    "ग": 0x0061,
    "घ": 0x0062,
    "च": 0x0063,
    "छ": 0x004E,
    "ज": 0x0065,
    "ञ": 0x0067,
    "ट": 0x004F,
    "ठ": 0x0050,
    "ण": 0x0068,
    "त": 0x0069,
    "थ": 0x006A,
    "ध": 0x006B,
    "न": 0x006C,
    "प": 0x006D,
    "फ": 0x0054,
    "ब": 0x006F,
    "भ": 0x0070,
    "म": 0x0071,
    "य": 0x0072,
    "ल": 0x0073,
    "व": 0x0075,
    "श": 0x007A,
    "ष": 0x0077,
    "स": 0x0078,
    "ढ": 0x0052,
}

_SIGN = {
    "ा": "É",
    "ो": "Éå",
    "ौ": "Éæ",
    "े": "å",
    "ै": "æ",
    "ी": "Ï",
    "ु": "Ñ",
    "ू": "Ô",
    "ृ": "×",
    "ॄ": "Ø",
    "ं": "Ç",
    "ः": "È",
    "ँ": "Æ",
    "ꣳ": "ò",
    "॑": "þ",
    "॒": "ÿ",
    "ऽ": "Å",
    "ि": "Ì",
}


def _c(cp: int) -> str:
    return chr(cp)


def _signs(matras: str, *, inherent_e: bool) -> str:
    out = ["É"] if inherent_e else []
    for ch in matras:
        out.append(_SIGN.get(ch, ch))
    return "".join(out)


def _take_signs(s: str, i: int) -> tuple[str, int]:
    j = i
    n = len(s)
    buf = []
    while j < n and s[j] in SIGNS and s[j] != "ि":
        buf.append(s[j])
        j += 1
    return "".join(buf), j


def _only_after(matras: str) -> bool:
    return bool(matras) and all(ch in AFTER for ch in matras)


def _normalize(s: str) -> str:
    s = unicodedata.normalize("NFC", s)
    s = re.sub(r"([क-ह])्ः", r"\1ः", s)
    return s


def _i_before(s: str) -> str:
    return re.sub(r"((?:[क-ह]्)*[क-ह])ि", r"ि\1", s)


def _repha_after(s: str) -> str:
    """र्C → C then repha marker. Vowel matras stay on C; svara/ṃ/ḥ follow ï.

    Not when र् is inside a conjunct (C् + र् + C, e.g. त्र्य): that is ्र, not repha.
    """
    return re.sub(
        r"(?<!्)र्([क-ह])([ाीुूृॄेैोौ]*)",
        lambda m: m.group(1) + m.group(2) + "\uE001",
        s,
    )


def _emit_cons(letter: str, virama: bool, matras: str) -> str:
    if letter in FULL:
        body = _c(FULL[letter])
        if virama:
            return body + "è" + _signs(matras, inherent_e=False)
        return body + _signs(matras, inherent_e=False)
    if letter not in BODIES:
        return letter + matras
    body = _c(BODIES[letter])
    if virama and not matras:
        return body
    if virama and _only_after(matras):
        return body + _signs(matras, inherent_e=False)
    return body + _signs(matras, inherent_e=True)


def _emit_ligature(cp: int, virama: bool, matras: str) -> str:
    piece = EXTRA.get(cp, "")
    out = [_c(cp)]
    if piece.endswith("्"):
        if virama:
            if matras:
                out.append(_signs(matras, inherent_e=False))
        else:
            out.append(_signs(matras, inherent_e=True))
    elif matras:
        out.append(_signs(matras, inherent_e=False))
    return "".join(out)


def encode_unicode(s: str) -> str:
    s = _repha_after(_i_before(_normalize(s)))
    out: list[str] = []
    i = 0
    n = len(s)
    while i < n:
        if s.startswith("ॐ", i):
            out.append("AÉåÇ")
            i += 1
            continue
        if s.startswith("॥", i):
            out.append("||")
            i += 1
            continue
        if s.startswith("।", i):
            out.append("|")
            i += 1
            continue
        ch = s[i]
        if ch == "ि":
            out.append("Ì")
            i += 1
            continue
        if ch == "\uE001":
            out.append("ï")
            i += 1
            continue
        if ch == "्":
            out.append("è")
            i += 1
            continue
        if ch in INDEP:
            matras, j = _take_signs(s, i + 1)
            out.append(INDEP[ch] + _signs(matras, inherent_e=False))
            i = j
            continue
        lig = None
        for form, cp in LIGATURES:
            if s.startswith(form, i):
                lig = (len(form), cp)
                break
        if lig:
            take, cp = lig
            j = i + take
            virama = j < n and s[j] == "्"
            if virama:
                j += 1
            matras, j = _take_signs(s, j)
            out.append(_emit_ligature(cp, virama, matras))
            i = j
            continue
        if ch in CONS:
            j = i + 1
            virama = j < n and s[j] == "्"
            if virama and j + 1 < n and s[j + 1] == "र":
                cp = FULL.get(ch) or BODIES.get(ch)
                if cp:
                    matras, k = _take_signs(s, j + 2)
                    inherent = ch not in FULL
                    out.append(_c(cp) + _signs("", inherent_e=inherent) + "ì" + _signs(matras, inherent_e=False))
                    i = k
                    continue
            if virama:
                j += 1
            matras, j = _take_signs(s, j)
            out.append(_emit_cons(ch, virama, matras))
            i = j
            continue
        if ch == "ऽ":
            out.append("Å")
            i += 1
            continue
        if ch in " \t,.-[]()":
            out.append(ch)
            i += 1
            continue
        if ch in SIGNS:
            out.append(_signs(ch, inherent_e=False))
            i += 1
            continue
        out.append(ch)
        i += 1
    return "".join(out)


if __name__ == "__main__":
    from apply import decode_baraha_string

    samples = [
        "नमः",
        "नमस्ते",
        "का",
        "के",
        "को",
        "कि",
        "कृ",
        "सर्व",
        "ॐ",
        "पाठः",
        "पाठ्ः",
        "आ",
        "हो",
        "रुद्र",
        "प्र",
        "प्रश्नः",
        "सर्व॑मि",
        "सहस्र",
        "द्भ्यो",
        "अहीन्॑",
        "अच्छ्॑",
    ]
    for u in samples:
        b = encode_unicode(u)
        back, _ = decode_baraha_string(b, "BRHDevanagariExtra")
        nfc = unicodedata.normalize("NFC", u)
        ok = back == nfc or (u == "पाठ्ः" and back == "पाठः")
        print(f"{u!r:12} → {b!r:24} → {back!r:12} {'OK' if ok else 'FAIL'}")
