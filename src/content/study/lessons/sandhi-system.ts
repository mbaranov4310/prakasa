import type { LessonBlock } from "../catalog";

export const sandhiSystem: LessonBlock[] = [
  {
    type: "p",
    text: "When we speak quickly, sounds shift in small subconscious ways. In Sanskrit those changes are sandhi — “joining” or “junction.” Later lessons take each kind in turn; this page only maps the system.",
  },
  { type: "h2", text: "Three kinds, by what comes first" },
  {
    type: "p",
    text: "If a vowel comes first, it is vowel sandhi:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सीता उदकम्", iast: "sītā udakam", note: "before" },
      { dev: "सीतोदकम्", iast: "sītodakam", note: "after" },
    ],
  },
  {
    type: "p",
    text: "If a visarga comes first, it is visarga sandhi:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामः उदकम्", iast: "rāmaḥ udakam", note: "before" },
      { dev: "राम उदकम्", iast: "rāma udakam", note: "after" },
    ],
  },
  {
    type: "p",
    text: "If a consonant comes first, it is consonant sandhi:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "हनुमान् जलम्", iast: "hanumān jalam", note: "before" },
      { dev: "हनुमाञ् जलम्", iast: "hanumāñ jalam", note: "after" },
    ],
  },
  { type: "h2", text: "Where sandhi occurs" },
  {
    type: "p",
    text: "Some changes join parts inside one word:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयन्ति", iast: "nayanti", note: "ne + a + nti" },
      { dev: "गजेन", iast: "gajena", note: "gaja + ina" },
    ],
  },
  {
    type: "p",
    text: "Others join two separate words:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सीतोदकम् इच्छति", iast: "sītodakam icchati", note: "sītā udakam icchati" },
    ],
  },
  {
    type: "p",
    text: "Sandhi inside a word is always required. Sandhi between words is optional, though most Sanskrit texts use it.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org overview: the name sandhi, the three kinds by first sound, the printed before/after examples, within-word vs between-word place, and the always/optional rule. No full sandhi tables.",
  },
];
