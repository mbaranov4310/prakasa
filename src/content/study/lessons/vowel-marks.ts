import type { LessonBlock } from "../catalog";

export const vowelMarks: LessonBlock[] = [
  {
    type: "p",
    text: "When a vowel follows a consonant, it is usually a small mark around that consonant, not the independent letter from the last lesson. The vowel a has no mark: it is already there. The table below is the full set, shown on क.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "क", iast: "ka", note: "no mark" },
      { dev: "का", iast: "kā" },
      { dev: "कि", iast: "ki", note: "mark sits to the left" },
      { dev: "की", iast: "kī" },
      { dev: "कु", iast: "ku" },
      { dev: "कू", iast: "kū" },
      { dev: "कृ", iast: "kṛ" },
      { dev: "कॄ", iast: "kṝ" },
      { dev: "कॢ", iast: "kḷ" },
      { dev: "कॣ", iast: "kḹ", note: "almost never used" },
      { dev: "के", iast: "ke" },
      { dev: "कै", iast: "kai" },
      { dev: "को", iast: "ko" },
      { dev: "कौ", iast: "kau" },
    ],
  },
  {
    type: "p",
    text: "So क + आ is का, क + उ is कु, क + ऊ is कू. The i-mark is the easy one to miss when scanning a line, because it is drawn before the consonant: कि is ki, not ik.",
  },
  { type: "h2", text: "A few consonants attach oddly" },
  {
    type: "p",
    text: "Most letters take these marks in a regular way. र and ह squeeze the u / ū / ṛ marks:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रु", iast: "ru" },
      { dev: "रू", iast: "rū" },
      { dev: "रृ", iast: "rṛ" },
      { dev: "हृ", iast: "hṛ" },
      { dev: "हॄ", iast: "hṝ" },
    ],
  },
  { type: "h2", text: "Anusvāra, visarga, candrabindu, virāma" },
  {
    type: "glyphs",
    items: [
      { dev: "कं", iast: "kaṃ", note: "anusvāra" },
      { dev: "कः", iast: "kaḥ", note: "visarga" },
      { dev: "कँ", iast: "ka̐", note: "candrabindu, a nasal vowel" },
      { dev: "क्", iast: "k", note: "virāma, no vowel" },
    ],
  },
  {
    type: "p",
    text: "In this reader, recitation files currently store both ँ and the Vedic mark ꣳ as ṃ in IAST, same as anusvāra. Practice for this lesson still uses ka̐ for candrabindu so the two dots stay distinct while you learn the glyphs.",
  },
  { type: "h2", text: "In the mantras" },
  {
    type: "p",
    text: "The का-series above is the teaching grid (the usual textbook consonant). These syllables are copied from the library, same marks on other letters:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ना", iast: "nā", note: "many genitives" },
      { dev: "गु", iast: "gu", note: "gurubhyo" },
      { dev: "रु", iast: "ru", note: "gurubhyo" },
      { dev: "भ्यो", iast: "bhyo", note: "gurubhyo" },
      { dev: "क्रा", iast: "krā", note: "dadhikrāvṇo" },
      { dev: "री", iast: "rī", note: "devanāgarī" },
    ],
  },
  {
    type: "note",
    text: "Marks and names follow the learnsanskrit.org table and the same matra map this site uses to convert Devanagari to IAST. Mantra examples are copied from encoded syllables, not invented.",
  },
];
