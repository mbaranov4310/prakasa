import type { LessonBlock } from "../catalog";

export const consonantSandhiWithinAWord: LessonBlock[] = [
  {
    type: "p",
    text: "Consonant sandhi can join two words — तत् इच्छामि becomes तद् इच्छामि. The same kind of change also happens inside one word:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मरुद्भिः", iast: "marudbhiḥ", note: "marut + bhiḥ, by the winds" },
    ],
  },
  {
    type: "p",
    text: "Internal consonant sandhi is full of exceptions. This lesson only sketches the main patterns.",
  },
  { type: "h2", text: "When nothing changes" },
  {
    type: "p",
    text: "If the second sound is a vowel, a nasal, or a semivowel, there is usually no sandhi change:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "वचन्ति", iast: "vacanti", note: "vac + anti" },
      { dev: "वच्मि", iast: "vacmi", note: "vac + mi" },
      { dev: "वाच्य", iast: "vācya", note: "vāc + ya" },
    ],
  },
  {
    type: "p",
    text: "Otherwise the same principles as consonant sandhi between words still apply.",
  },
  { type: "h2", text: "Keep aspiration if you can" },
  {
    type: "p",
    text: "Inside a word, aspiration is preserved when there is somewhere for it to go. It may move onto the following consonant, or back onto the first:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "बुद्ध", iast: "buddha", note: "budh + ta" },
      { dev: "लब्ध", iast: "labdha", note: "labh + ta" },
      { dev: "भोत्स्य", iast: "bhotsya", note: "bodh + sya" },
      { dev: "धक्ष्य", iast: "dhakṣya", note: "dah + sya" },
      { dev: "धक्", iast: "dhak", note: "dah → dhak, burning" },
    ],
  },
  {
    type: "p",
    text: "If there is no place to put the aspiration, it is dropped:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मोक्ष्यति", iast: "mokṣyati", note: "muh → will be deluded" },
      { dev: "मुक्", iast: "muk", note: "muh → deluding" },
    ],
  },
  { type: "h2", text: "n becomes ṇ" },
  {
    type: "p",
    text: "n often shifts to ṇ after r or ṣ. The two sounds need not be next to each other:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गुरुणा", iast: "guruṇā", note: "gurunā" },
      { dev: "विषेण", iast: "viṣeṇa", note: "viṣena" },
      { dev: "रामेण", iast: "rāmeṇa", note: "rāmena" },
      { dev: "रामायण", iast: "rāmāyaṇa", note: "rāmāyana" },
      { dev: "वर्षभोग्येण", iast: "varṣabhogyeṇa", note: "varṣabhogyena" },
    ],
  },
  {
    type: "p",
    text: "Sounds that may sit between r/ṣ and n are ones you can say without moving the tongue much: all vowels; y and v; soft-palate consonants (k kh g gh ṅ h); lip consonants (p ph b bh m). Many exceptions remain — for now, remember that n often becomes ṇ after r or ṣ.",
  },
  { type: "h2", text: "s becomes ṣ" },
  {
    type: "p",
    text: "s often shifts to ṣ as well:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अग्निषु", iast: "agniṣu", note: "agni + su" },
      { dev: "धनुषा", iast: "dhanuṣā", note: "dhanus + ā" },
    ],
  },
  {
    type: "p",
    text: "Any vowel other than a or ā can trigger the change on a following s. So can k:",
  },
  {
    type: "glyphs",
    items: [{ dev: "वाक्षु", iast: "vākṣu", note: "vāk + su" }],
  },
  {
    type: "p",
    text: "English textbooks sometimes call this the ruki rule: “r” sounds (ṛ ṝ), “u” sounds (u ū o au), “k”, and “i” sounds (i ī e ai). Again there are exceptions; for now, remember that s often becomes ṣ after those sounds.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org “Consonant sandhi within a word”: within-word vs between-word framing (marut + bhiḥ); no-change before vowel/nasal/semivowel; aspiration shift or loss; n → ṇ after r/ṣ with the intervening-sound list; s → ṣ / ruki including after k. No extra rules or stems.",
  },
];
