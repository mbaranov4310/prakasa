import type { LessonBlock } from "../catalog";

export const modernPronunciation: LessonBlock[] = [
  {
    type: "p",
    text: "Modern Sanskrit speech sometimes differs from the traditional sound descriptions. This page notes a few common shifts you may hear.",
  },
  { type: "h2", text: "ṛ, ṝ, and ḷ" },
  {
    type: "p",
    text: "The old descriptions treat ṛ, ṝ, and ḷ as vowels. Many modern speakers instead pronounce them with an i, u, or consonant-like glide:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृष्ण", iast: "kṛṣṇa", note: "traditional" },
      { dev: "क्रिष्ण", iast: "kriṣṇa", note: "modern" },
      { dev: "क्रुष्ण", iast: "kruṣṇa", note: "modern" },
      { dev: "क्रृष्ण", iast: "krṛṣṇa", note: "modern" },
    ],
  },
  {
    type: "glyphs",
    items: [
      { dev: "पितॄन्", iast: "pitṝn", note: "traditional" },
      { dev: "पित्रीन्", iast: "pitrīn", note: "modern" },
      { dev: "पित्रून्", iast: "pitrūn", note: "modern" },
      { dev: "पित्रॄन्", iast: "pitrṝn", note: "modern" },
    ],
  },
  {
    type: "glyphs",
    items: [
      { dev: "कॢप्त", iast: "kḷpta", note: "traditional" },
      { dev: "क्लिप्त", iast: "klipta", note: "modern" },
      { dev: "क्लुप्त", iast: "klupta", note: "modern" },
      { dev: "क्ल्रिप्त", iast: "klripta", note: "modern" },
      { dev: "क्ल्रुप्त", iast: "klrupta", note: "modern" },
    ],
  },
  {
    type: "p",
    text: "ḷ especially has many variants, perhaps because it is so rare.",
  },
  { type: "h2", text: "The visarga" },
  {
    type: "p",
    text: "At the end of a word or sentence, modern speakers often pronounce the visarga as an echo of the preceding vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मुनिः", iast: "muniḥ", note: "traditional" },
      { dev: "मुनिहि", iast: "munihi", note: "modern" },
      { dev: "तैः", iast: "taiḥ", note: "traditional" },
      { dev: "तैहि", iast: "taihi", note: "modern" },
      { dev: "नौः", iast: "nauḥ", note: "traditional" },
      { dev: "नौहु", iast: "nauhu", note: "modern" },
    ],
  },
  { type: "h2", text: "jña" },
  {
    type: "p",
    text: "The cluster jña often shifts in different regional styles:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "विज्ञानम्", iast: "vijñānam", note: "traditional" },
      { dev: "विग्यानम्", iast: "vigyānam", note: "northern" },
      { dev: "विग्ञ्यानम्", iast: "vigñyānam", note: "southern" },
    ],
  },
  { type: "h2", text: "hna and hma" },
  {
    type: "p",
    text: "The combinations hna and hma often reverse the nasal and h:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अह्न", iast: "ahna", note: "traditional" },
      { dev: "अन्ह", iast: "anha", note: "modern" },
      { dev: "ब्रह्म", iast: "brahma", note: "traditional" },
      { dev: "ब्रम्ह", iast: "bramha", note: "modern" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org modern-pronunciation page: modern variants of ṛ/ṝ/ḷ, word-final visarga echo, northern/southern jña, and hna/hma reversal. No paradigm grids.",
  },
];
