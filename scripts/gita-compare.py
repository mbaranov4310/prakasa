#!/usr/bin/env python3
"""Compare the digital witnesses of the Bhagavad Gītā verse text.

Witnesses live in data/gita/ (not in git; see docs/gita/gita-workflow.md):
  supersite/ss_<N>.txt             Gita Supersite verses (CLTK copy), Devanagari
  sringeri/sr_<N>.html             Advaita Śāradā reader pages, Devanagari
  gretil/bhg-sankara-1-17.txt      GRETIL verses with Śaṅkara's bhāṣya, IAST, chapters 1–17

Spelling conventions are folded before comparing (class nasal or anusvāra,
tattva or tatva, avagraha, spacing), so what is printed is a difference of
letters or words. Every printed place has to be looked up in the 1910 print.

Usage:
  python3 scripts/gita-compare.py            # all 18 chapters, witnesses against each other
  python3 scripts/gita-compare.py 12         # one chapter
  python3 scripts/gita-compare.py --locked 12  # docs/gita/text/12 against every witness
"""

from __future__ import annotations

import difflib
import html
import importlib.util
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data/gita"
TEXT = ROOT / "docs/gita/text"

spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts" / "ddv-iast.py")
iast = importlib.util.module_from_spec(spec)
spec.loader.exec_module(iast)

SPEAKER = re.compile(r"(श्री\s*भगवानुवाच|अर्जुन उवाच|सञ्जय उवाच|संजय उवाच|धृतराष्ट्र उवाच)\s*[—-]?")
SPEAKER_IAST = re.compile(r"(śrī-?bhagavān|arjuna|sañjaya|saṃjaya|dhṛtarāṣṭra) uvāca\s*-?")


def fold_dev(text: str) -> str:
    """Devanagari with spelling conventions and scrape glitches removed."""
    s = unicodedata.normalize("NFC", text)
    s = s.replace("\u00ad", "").replace("\u200c", "").replace("\u200d", "")
    s = SPEAKER.sub(" ", s)
    s = re.sub(r"[०-९0-9।॥|,;—\-.\s]+", "", s)
    s = s.replace("़", "").replace("ँ", "ं").replace("ऽ", "")
    s = re.sub(r"्ि([क-ह])", r"्\1ि", s)  # CLTK scrape: vowel sign before its consonant
    s = s.replace("श्रृ", "शृ")
    s = re.sub(r"[ङञणनम]्(?=[क-म])", "ं", s)
    s = re.sub(r"म्(?=[य-ह])", "ं", s)
    for old, new in (("त्त्व", "त्व"), ("त्त्र", "त्र"), ("द्ध्य", "ध्य"), ("च्छ", "छ")):
        s = s.replace(old, new)
    return s


def fold_iast(text: str) -> str:
    """IAST with spacing, hyphens and spelling conventions removed."""
    s = SPEAKER_IAST.sub(" ", unicodedata.normalize("NFC", text))
    s = s.replace("\u200c", "").replace("\u200d", "")
    s = re.sub(r"\[[^\]]*\]", " ", s)
    s = re.sub(r"[|\-\d.,;?!'’\s]+", "", s)
    s = re.sub(r"[ṅñṇnm](?=[kgcjṭḍtdpbm])", "ṃ", s)
    s = re.sub(r"m(?=[yrlvśṣsh])", "ṃ", s)
    for old, new in (("ttv", "tv"), ("ttr", "tr"), ("ddhy", "dhy"), ("cch", "ch")):
        s = s.replace(old, new)
    return s


def dev_as_iast(text: str) -> str:
    s = unicodedata.normalize("NFC", text).replace("\u00ad", "")
    s = SPEAKER.sub(" ", s)
    s = re.sub(r"[०-९0-9।॥|,;—\-.]+", " ", s)
    return fold_iast(iast.to_iast(s))


def supersite(chapter: int) -> list[str]:
    path = DATA / "supersite" / f"ss_{chapter}.txt"
    verses = [line.strip() for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]
    if chapter == 13 and len(verses) == 35:
        verses = verses[1:]  # Arjuna's question, which Śaṅkara's text does not have
    return verses


def sringeri(chapter: int) -> list[str]:
    page = (DATA / "sringeri" / f"sr_{chapter}.html").read_text(encoding="utf-8")
    verses = []
    for block in re.findall(r'<div class="unit verse" id="BG_C\d+_V\d+"[^>]*>(.*?)</div>', page, re.S):
        lines = re.findall(r'<p class="verse-text"[^>]*>(.*?)</p>', block, re.S)
        verses.append(" ".join(html.unescape(re.sub(r"<[^>]+>", " ", line)) for line in lines))
    return verses


def gretil(chapter: int) -> list[str]:
    path = DATA / "gretil" / "bhg-sankara-1-17.txt"
    if chapter > 17 or not path.exists():
        return []
    lines = path.read_text(encoding="utf-8").splitlines()
    verses: dict[int, str] = {}
    for index, line in enumerate(lines):
        match = re.search(rf"\|\|bhg_{chapter}\.(\d+)\|\|", line)
        if not match:
            continue
        parts = [line[: match.start()]]
        back = index - 1
        while back >= 0 and len(parts) < 4:
            before = lines[back].strip()
            if not before or "||" in before or "===" in before or before.endswith("-") or len(before) > 70:
                break
            parts.insert(0, before)
            back -= 1
        verses[int(match.group(1))] = " ".join(parts)
    return [verses.get(n, "") for n in range(1, max(verses, default=0) + 1)]


def locked(chapter: int) -> list[str]:
    verses = []
    for path in sorted((TEXT / f"{chapter:02d}").glob("gita-*.md")):
        body = re.search(r"```samhita\n(.*?)```", path.read_text(encoding="utf-8"), re.S)
        verses.append(body.group(1) if body else "")
    return verses


def differences(a: str, b: str) -> str:
    matcher = difflib.SequenceMatcher(None, a, b, autojunk=False)
    out = []
    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag != "equal":
            out.append(f"{a[max(0, i1 - 6):i2 + 6]} | {b[max(0, j1 - 6):j2 + 6]}")
    return "  ;;  ".join(out)


def compare(chapter: int, base_name: str, base: list[str], others: dict[str, list[str]]) -> int:
    found = 0
    for name, verses in others.items():
        if not verses:
            print(f"  ({name}: no text for chapter {chapter})")
            continue
        if len(verses) != len(base):
            print(f"  {chapter}: {base_name} has {len(base)} verses, {name} has {len(verses)}")
            found += 1
        for number, (ours, theirs) in enumerate(zip(base, verses), start=1):
            if name == "gretil":
                x, y = dev_as_iast(ours), fold_iast(theirs)
            else:
                x, y = fold_dev(ours), fold_dev(theirs)
            if x != y:
                found += 1
                print(f"  {chapter}.{number}  {base_name} | {name}:  {differences(x, y)}")
    return found


def main() -> int:
    args = sys.argv[1:]
    use_locked = "--locked" in args
    chapters = [int(a) for a in args if a != "--locked"] or list(range(1, 19))
    total = 0
    for chapter in chapters:
        if use_locked:
            base = locked(chapter)
            if not base:
                print(f"chapter {chapter}: no verse files in {TEXT / f'{chapter:02d}'}")
                continue
            others = {"sringeri": sringeri(chapter), "supersite": supersite(chapter), "gretil": gretil(chapter)}
            print(f"chapter {chapter}: locked text against the witnesses")
            total += compare(chapter, "locked", base, others)
        else:
            print(f"chapter {chapter}: sringeri against the other witnesses")
            total += compare(chapter, "sringeri", sringeri(chapter), {"supersite": supersite(chapter), "gretil": gretil(chapter)})
    print(f"\n{total} places differ beyond spelling convention")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
