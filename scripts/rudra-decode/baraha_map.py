"""Baraha ANSI (BRHDevanagari*) codepoint → Unicode piece.

Bodies are C+virama. É/ü complete inherent *a* via a following ा; apply.py
collapses ्ा to inherent a, then leftover ा is the real ā-matra.
"""

from __future__ import annotations

# Per-codepoint pieces. Same table for Extra / Devanagari / RN.
# Malayalam Extra is separate (vertical svara tick stored as U+2013).

EXTRA: dict[int, str] = {
    0x0020: " ",
    0x0028: "(",
    0x0029: ")",
    0x002C: ",",
    0x002D: "-",
    0x002E: ".",
    0x005B: "[",
    0x005D: "]",
    0x007C: "।",
    # independent vowels
    0x0041: "अ",  # A
    0x0043: "इ",  # C
    0x0044: "ई",  # D
    0x0045: "उ",  # E
    0x0046: "ऊ",  # F
    0x004C: "ए",  # L
    # consonant bodies (halant); É supplies inherent a
    0x004D: "क्",  # M
    0x004E: "छ्",  # N
    0x0047: "ऋ",  # G
    0x004F: "ट्",  # O
    0x0050: "ठ्",  # P
    0x0051: "ड",  # Q  (full; काण्डे / मृडय)
    0x0052: "ढ्",  # R
    0x0053: "द्",  # S  (often used without É; ्ा rule still works if É present)
    0x0054: "फ्",  # T
    0x0055: "र्",  # U
    0x0057: "ह्",  # W
    0x0059: "क्",  # Y  (conjunct ka)
    0x005A: "ख्",  # Z
    0x0061: "ग्",  # a
    0x0062: "घ्",  # b
    0x0063: "च्",  # c
    0x0065: "ज्",  # e
    0x0067: "ञ्",  # g
    0x0068: "ण्",  # h
    0x0069: "त्",  # i
    0x006A: "थ्",  # j
    0x006B: "ध्",  # k
    0x006C: "न्",  # l
    0x006D: "प्",  # m
    0x006F: "ब्",  # o
    0x0070: "भ्",  # p
    0x0071: "म्",  # q
    0x0072: "य्",  # r
    0x0073: "ल्",  # s
    0x0075: "व्",  # u
    0x0077: "ष्",  # w
    0x0078: "स्",  # x
    0x007A: "श्",  # z
    # conjunct ligatures (full or with virama as stored)
    0x00A1: "",  # ¡ dummy (hair-thin; … is ङ्ग्)
    0x00A2: "क्र्",  # ¢
    0x00A3: "क्त्",  # £
    0x00A4: "क्ष्",  # ¤
    0x00A5: "ज्ञ्",  # ¥
    0x00A6: "त्त्न्",  # ¦  (त्न)
    0x00A7: "त्र्",  # §
    0x00A8: "त्त्",  # ¨  (तैत्तिरीय)
    0x00AE: "द्ध्",  # ®
    0x00B0: "द्भ्",  # °
    0x00B1: "द्य्",  # ±
    0x00B2: "द्व्",  # ²
    0x00B3: "न्न्",  # ³  (न्न ligature; l is न्)
    0x00B4: "श्र्",  # ´
    0x00B5: "श्व्",  # µ
    0x00B6: "श्च्",  # ¶
    0x00B8: "ष्ठ्",  # ¸
    0x00B9: "ष्ट्",  # ¹
    0x00BA: "ह्ण्",  # º
    0x00BD: "ह्य्",  # ½
    0x00BE: "ह्र्",  # ¾
    0x00C0: "ह्व्",  # À
    0x00C2: "रु",  # Â
    0x00C3: "रू",  # Ã  (निरूपण)
    # marks
    0x00C5: "ऽ",  # Å avagraha
    0x00C6: "ँ",  # Æ  (combining candrabindu; ò/ó are spacing ꣳ)
    0x00C7: "ं",  # Ç anusvāra
    0x00C8: "ः",  # È visarga
    0x00C9: "ा",  # É
    0x00CB: "ि",  # Ë
    0x00CC: "ि",  # Ì
    0x00CD: "ि",  # Í
    0x00CE: "ि",  # Î
    0x00CF: "ी",  # Ï
    0x00D1: "ु",  # Ñ
    0x00D2: "ु",  # Ò
    0x00D3: "ु",  # Ó  (ङ्गु; Ô is ू)
    0x00D4: "ू",  # Ô
    0x00D5: "ू",  # Õ  (दू / हू; × is ृ)
    0x00D7: "ृ",  # ×
    0x00D8: "ृ",  # Ø  (दृ; × is the connected ृ)
    0x00E5: "े",  # å
    0x00E6: "ै",  # æ
    0x00E7: "्",  # ç virama (explicit)
    0x00E8: "्",  # è
    0x00EB: "्र",  # ë repha/r-vattu on following
    0x00EC: "्र",  # ì
    0x00EF: "र्",  # ï repha
    0x00F2: "ꣳ",  # ò  (spacing Vedic ṃ)
    0x00F3: "ꣳ",  # ó  (same; often óè)
    0x00FB: "",  # û dummy
    0x00FC: "ा",  # ü ka-class stem (का = M ü É)
    0x00FE: "॑",  # þ udātta
    0x00FF: "॒",  # ÿ anudātta
    0x0160: "च्च्",  # Š
    0x0161: "ट्य्",  # š
    0x0192: "ङ्क्",  # ƒ
    0x2026: "ङ्ग्",  # …
    0x2039: "ज्ज",  # ‹  (इज्जगत्)
    0x2122: "हृ",  # ™
}

# S is used both as द (पद, without É) and as द्. Mapping to द् + optional ा
# failed for पद (mÉ S → प द्). Treat S as full द.
EXTRA[0x0053] = "द"

# U र: पर is mÉ U = प + र, no É on U. Full र.
EXTRA[0x0055] = "र"

# W ह: often Wû. Dummy û. Full ह.
EXTRA[0x0057] = "ह"

MALAYALAM: dict[int, str] = {
    0x0020: " ",
    0x2013: "॑",  # vertical tick (stored as en-dash)
}


def piece_for(font: str, cp: int) -> str | None:
    if font == "BRHMalayalamExtra":
        return MALAYALAM.get(cp)
    if font.startswith("BRHDevanagari"):
        return EXTRA.get(cp)
    return None
