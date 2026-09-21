import type { LessonBlock } from "../catalog";

export const nominalRoots: LessonBlock[] = [
  {
    type: "p",
    text: "Also called denominative verbs, or nāmadhātu (“nominal roots”). Suffixes can turn a nominal stem into a verb root. This page covers the most common ones.",
  },
  { type: "h2", text: "The suffix -i" },
  {
    type: "p",
    text: "The most common is -i, used the same way as the causal suffix -i:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मिश्र", iast: "miśra", note: "mixed" },
      { dev: "मिश्रयति", iast: "miśrayati", note: "mixes" },
      { dev: "मूत्र", iast: "mūtra", note: "urine, pee" },
      { dev: "मूत्रयति", iast: "mūtrayati", note: "urinates, pees" },
      { dev: "व्रत", iast: "vrata", note: "vow" },
      { dev: "व्रतयति", iast: "vratayati", note: "observes a vow" },
    ],
  },
  { type: "h2", text: "The suffix -ya" },
  {
    type: "p",
    text: "Next is -ya. It generally turns a stem’s final a into ī, and it usually lengthens the stem’s final vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "पुत्र", iast: "putra", note: "son" },
      { dev: "पुत्रीयति", iast: "putrīyati", note: "wants a son" },
      { dev: "कवि", iast: "kavi", note: "poet" },
      { dev: "कवीयति", iast: "kavīyati", note: "wants a poet" },
    ],
  },
  { type: "h2", text: "The suffix -kāmya" },
  {
    type: "p",
    text: "We might also consider -kāmya:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "पुत्र", iast: "putra", note: "son" },
      { dev: "पुत्रकाम्यति", iast: "putrakāmyati", note: "wants a son" },
      { dev: "यशस्", iast: "yaśas", note: "fame" },
      { dev: "यशस्काम्यति", iast: "yaśaskāmyati", note: "wants fame" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org nominal-roots page: the three common suffixes -i, -ya, and -kāmya with their printed stem → verb examples (miśra, mūtra, vrata; putra, kavi; putra, yaśas). No other denominative patterns.",
  },
];
