"""Shared paths and font-name helpers for the Rudra PDF decode."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/Users/max/Desktop/projects/prakasa")
DATA = ROOT / "data"
DECODE = ROOT / "docs" / "rudra" / "decode"
SPANS = DECODE / "spans"
CATALOG = DECODE / "catalog"
FONTS_DIR = CATALOG / "fonts"
GLYPHS_DIR = CATALOG / "glyphs"
SHEETS_DIR = CATALOG / "sheets"
OUT = DECODE / "out"
MAP_PATH = CATALOG / "map.json"
REVIEW = DECODE / "review"

PDFS = {
    "namakam": DATA / "TS 4.5 Sanskrit Pada Paatam with Vaakyam.pdf",
    "camakam": DATA / "TS 4.7 Sanskrit Pada Paatam with Vaakyam.pdf",
}

SUBSET_PREFIX = re.compile(r"^[A-Z0-9]{6}\+")


def norm_font(name: str | None) -> str:
    if not name:
        return ""
    s = str(name).lstrip("/")
    return SUBSET_PREFIX.sub("", s)


def is_baraha(font: str) -> bool:
    return norm_font(font).startswith("BRH")


def compact(s: str) -> str:
    return "".join(c for c in s if not c.isspace())
