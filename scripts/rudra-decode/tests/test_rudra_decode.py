#!/usr/bin/env python3
"""Canonical encoder round-trip, gold dict, mapped-JSONL smoke."""

from __future__ import annotations

import json
import re
import sys
import unicodedata
import unittest
from pathlib import Path

DECODE_SCRIPTS = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(DECODE_SCRIPTS))

from apply import decode_baraha_string  # noqa: E402
from baraha_map import piece_for  # noqa: E402
from common import OUT, REVIEW, SPANS  # noqa: E402
from encode import encode_unicode  # noqa: E402

DEVANAGARI_RUN = re.compile(r"[\u0900-\u097F]+")
PAGE_BREAK = re.compile(r"^===== page")

# Assembled dumps still contain compose slips (overlay tick wedged in, dangling र्,
# stray ्ः). The encoder emits well-formed Baraha; decode then normalizes those.
SLIP = re.compile(
    r"्ः"
    r"|ं्"
    r"|[क-ह]्ं"
    r"|^[िीुूृेैोौ्]"
    r"|ि्ट|ि्"
    r"|्[॒॑]+[ािीुूृॄेैोौ]"
    r"|[॒॑]ँ"
    r"|््"
    r"|र्[॒॑]*$"
    r"|द्ध्ार्"
    r"|ञ्ा"
    r"|ङ्त्"
)


def nfc(s: str) -> str:
    return unicodedata.normalize("NFC", s)


def roundtrip(u: str) -> str:
    raw = encode_unicode(nfc(u))
    back, _ = decode_baraha_string(raw, "BRHDevanagariExtra")
    return back


def assembled_runs():
    for name in ("namakam", "camakam"):
        path = OUT / f"{name}.txt"
        for lineno, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            if PAGE_BREAK.match(line):
                continue
            for run in DEVANAGARI_RUN.findall(line):
                yield name, lineno, run


class TestEncoderSamples(unittest.TestCase):
    SAMPLES = [
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
        "त्र्य",
        "ग्रीव",
        "भ्रुः",
    ]

    def test_well_formed_samples(self):
        for u in self.SAMPLES:
            with self.subTest(u=u):
                self.assertEqual(roundtrip(u), nfc(u))

    def test_canonical_i_and_no_dummy(self):
        b = encode_unicode("कि")
        self.assertIn("Ì", b)
        self.assertNotIn("û", b)
        self.assertNotIn("\u2013", b)

    def test_om_and_danda(self):
        self.assertEqual(encode_unicode("ॐ"), "AÉåÇ")
        self.assertEqual(encode_unicode("।"), "|")
        self.assertEqual(encode_unicode("॥"), "||")

    def test_path_visarga_does_not_roundtrip(self):
        """Encoder refuses C्ः; that is the well-formedness catch."""
        u = "पाठ्ः"
        back = roundtrip(u)
        self.assertEqual(back, "पाठः")
        self.assertNotEqual(nfc(u), back)


class TestUnicodeRoundtrip(unittest.TestCase):
    def test_assembled_devanagari_runs(self):
        n = 0
        unexpected = []
        for name, lineno, run in assembled_runs():
            n += 1
            got = roundtrip(run)
            want = nfc(run)
            if got == want:
                continue
            if SLIP.search(want):
                continue
            unexpected.append(f"{name}:{lineno} {run!r} → {got!r}")
        self.assertGreater(n, 1000)
        self.assertEqual(unexpected, [])


class TestGoldDict(unittest.TestCase):
    def test_verdicts_match_piece_for(self):
        path = REVIEW / "verdicts.json"
        self.assertTrue(path.is_file(), path)
        verdicts = json.loads(path.read_text(encoding="utf-8"))
        gold = {
            k: v
            for k, v in verdicts.items()
            if v.get("status") in ("ok", "wrong")
        }
        if not gold:
            self.skipTest("verdicts.json still pending — fill after the glyph pass")
        mismatches = []
        for key, v in gold.items():
            actual = piece_for(v["font"], v["cp"])
            expected = v.get("unicode")
            if actual != expected:
                mismatches.append(f"{key}: map {actual!r} ≠ verdict {expected!r}")
        self.assertEqual(mismatches, [])


class TestMappedSmoke(unittest.TestCase):
    def test_no_question_marks_in_mapped_jsonl(self):
        n = 0
        bad = []
        for name in ("namakam", "camakam"):
            path = SPANS / f"{name}.mapped.jsonl"
            with path.open(encoding="utf-8") as f:
                for line in f:
                    n += 1
                    rec = json.loads(line)
                    u = rec.get("unicode", "")
                    if u == "?" or "?" in u:
                        bad.append(f"{name} {rec.get('font')} U+{rec.get('cp'):04X}")
        self.assertGreater(n, 1000)
        self.assertEqual(bad, [])


if __name__ == "__main__":
    unittest.main()
