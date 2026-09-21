import type { LessonBlock } from "../catalog";

export const howDevanagariWorks: LessonBlock[] = [
  {
    type: "p",
    text: "Devanagari (देवनागरी) is the script this reader uses for Sanskrit. It is written left to right. Unlike English letters, its symbols usually group into syllables.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दे", iast: "de" },
      { dev: "व", iast: "va" },
      { dev: "ना", iast: "nā" },
      { dev: "ग", iast: "ga" },
      { dev: "री", iast: "rī" },
    ],
  },
  {
    type: "p",
    text: "Each syllable has at most one vowel. Where possible, a syllable does not end on a consonant.",
  },
  { type: "h2", text: "The default a" },
  {
    type: "p",
    text: "A bare consonant sign already includes the vowel a. क is ka, never a vowelless k. To write a different vowel, we add a small mark. To write no vowel at all, we add a virāma.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "क", iast: "ka", note: "default a" },
      { dev: "के", iast: "ke", note: "a mark changes the vowel" },
      { dev: "क्", iast: "k", note: "virāma blocks the default a" },
    ],
  },
  { type: "h2", text: "Clusters" },
  {
    type: "p",
    text: "Two consonants with no vowel between them share one syllable. The first consonant usually loses its vertical stroke and attaches to the next:",
  },
  {
    type: "glyphs",
    items: [{ dev: "स्", iast: "s" }, { dev: "क", iast: "ka" }, { dev: "स्क", iast: "ska" }],
  },
  {
    type: "p",
    text: "Sanskrit uses many of these clusters. A later lesson drills the common ones, including shapes you cannot guess from the parts (क्ष, ज्ञ).",
  },
  { type: "h2", text: "Words in a row" },
  {
    type: "p",
    text: "Printed Sanskrit often runs words together, especially when a word ends in a consonant. The reader here already splits mantras into clickable words, so you can study the sound changes later without losing the recitation line.",
  },
  {
    type: "note",
    text: "If you already read Hindi or another Devanagari language: in Sanskrit, क is always ka, never k. Clusters are also more common than in modern Hindi.",
  },
];
