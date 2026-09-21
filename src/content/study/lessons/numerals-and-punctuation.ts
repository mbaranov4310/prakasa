import type { LessonBlock } from "../catalog";

export const numeralsAndPunctuation: LessonBlock[] = [
  {
    type: "p",
    text: "The digits used in English come from India, so the Devanagari set is the same system with different drawings:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "०", iast: "0" },
      { dev: "१", iast: "1" },
      { dev: "२", iast: "2" },
      { dev: "३", iast: "3" },
      { dev: "४", iast: "4" },
      { dev: "५", iast: "5" },
      { dev: "६", iast: "6" },
      { dev: "७", iast: "7" },
      { dev: "८", iast: "8" },
      { dev: "९", iast: "9" },
    ],
  },
  {
    type: "p",
    text: "They combine just like Western numerals: १९४७ is 1947, २०२१ is 2021. Prakāśa chapters almost never write years; you will still meet the digits in printed books.",
  },
  { type: "h2", text: "Traditional punctuation" },
  {
    type: "p",
    text: "Modern editions sometimes borrow commas and quotation marks. The mantras on this site use the older three marks:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "।", iast: "|", note: "daṇḍa, end of a sentence or mid-verse" },
      { dev: "॥", iast: "||", note: "double daṇḍa, end of a verse" },
      { dev: "ऽ", iast: "'", note: "avagraha, an elided vowel" },
    ],
  },
  {
    type: "p",
    text: "A daṇḍa is the stick at the end of a pāda. A double daṇḍa closes the verse. An avagraha marks a vowel dropped by sandhi. If the dropped vowel was long, the mark can be doubled:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "श्वेतोऽश्वः", iast: "śveto 'śvaḥ", note: "guide: white horse" },
      { dev: "तेऽ", iast: "te'", note: "Dṛg-dṛśya-viveka" },
      { dev: "याऽऽ", iast: "yā''", note: "Dṛg-dṛśya-viveka, long vowel dropped" },
    ],
  },
  {
    type: "note",
    text: "Digits are the Unicode Devanagari numbers. । and ॥ are the same marks already stored as trailing punctuation on words in this library. ऽ examples: the white-horse line is the guide’s sandhi pair; तेऽ and याऽऽ are copied from Dṛg-dṛśya-viveka.",
  },
];
