import type { LessonBlock } from "../catalog";

export const pronominalAdjectives: LessonBlock[] = [
  {
    type: "p",
    text: "Some adjectives take the same endings as pronouns such as tad. They are called pronominal adjectives — adjectives that behave like pronouns.",
  },
  { type: "h2", text: "Common stems" },
  {
    type: "p",
    text: "A few frequent ones, with a declined form and a short phrase:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "पूर्वस्मिन् दिने",
        iast: "pūrvasmin dine",
        note: "pūrva, “previous” — on the previous day",
      },
      {
        dev: "परस्मिन् दिने",
        iast: "parasmin dine",
        note: "para, “next” — on the next day",
      },
      {
        dev: "एकस्मिन् दिने",
        iast: "ekasmin dine",
        note: "eka, “one” — on a certain day",
      },
      {
        dev: "अन्यस्मिन् दिने",
        iast: "anyasmin dine",
        note: "anya, “other” — on another day",
      },
      {
        dev: "सर्वे नराः",
        iast: "sarve narāḥ",
        note: "sarva, “all” — all men",
      },
      {
        dev: "विश्वे देवाः",
        iast: "viśve devāḥ",
        note: "viśve, “all” — all gods",
      },
    ],
  },
  { type: "h2", text: "Neuter singular -m" },
  {
    type: "p",
    text: "Apart from anya and a few rarer stems, these adjectives use -m in the neuter singular of the nominative and accusative (cases 1 and 2). anya keeps -t:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "एकम् फलम्", iast: "ekam phalam", note: "one fruit" },
      { dev: "सर्वम् उदकम्", iast: "sarvam udakam", note: "all the water" },
      { dev: "अन्यत् फलम्", iast: "anyat phalam", note: "another fruit" },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org pronominal adjectives: definition via tad-like endings; the six common examples (pūrva, para, eka, anya, sarva, viśve); and the neuter singular -m exception with anyat. No full paradigm grid on the reference.",
  },
];
