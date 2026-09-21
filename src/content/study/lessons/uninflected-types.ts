import type { LessonBlock } from "../catalog";

export const uninflectedTypes: LessonBlock[] = [
  {
    type: "p",
    text: "Sanskrit often changes a word’s sounds to change its meaning. Verbs and nominals both do this:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गम्", iast: "gam", note: "go → गमिष्यसि gamiṣyasi “you will go”" },
      { dev: "नर", iast: "nara", note: "man → नरेषु nareṣu “among the men”" },
    ],
  },
  {
    type: "p",
    text: "Those changes are inflection. Sanskrit uses them heavily, so it is sometimes called a highly inflected language.",
  },
  {
    type: "p",
    text: "There is also a large class of uninflected words (avyayāni, “unchanging”), also called indeclinables. They are fixed in a way verbs and nominals are not. They can still take sandhi, but otherwise they stay the same:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "त्वं न गच्छसि", iast: "tvaṃ na gacchasi", note: "You do not go." },
      { dev: "अहं न गमिष्यामि", iast: "ahaṃ na gamiṣyāmi", note: "I will not go." },
      { dev: "गजा न गच्छेयुः", iast: "gajā na gaccheyuḥ", note: "The elephants might not go." },
    ],
  },
  { type: "h2", text: "Types of uninflected words" },
  {
    type: "p",
    text: "A few categories matter most.",
  },
  {
    type: "p",
    text: "First are prepositions. In English that means words like “over” or “under.” In Sanskrit it usually means words used as verb prefixes:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "आगच्छन्ति",
        iast: "āgacchanti",
        note: "ā + gacchanti — They come (“go here”).",
      },
      {
        dev: "संगच्छन्ति",
        iast: "saṃgacchanti",
        note: "saṃ + gacchanti — They meet (“go together”).",
      },
    ],
  },
  {
    type: "p",
    text: "Prepositions sit inside a larger class called nipātāḥ — miscellaneous fixed words:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामः सीता च", iast: "rāmaḥ sītā ca", note: "Rama and Sita" },
      { dev: "हे राम त्वं कुत्र", iast: "he rāma tvaṃ kutra", note: "Hey Rama! Where are you?" },
    ],
  },
  {
    type: "p",
    text: "Finally there are adverbs, which modify the verb. Many are made from adjectives:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मन्द", iast: "manda", note: "slow → मन्दम् mandam “slowly”" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org overview: inflection vs avyaya, the na examples, prepositions as verb prefixes (ā, saṃ), nipātāḥ (ca, he), and adverbs from adjectives (manda → mandam). No fuller lists of prefixes or particles.",
  },
];
