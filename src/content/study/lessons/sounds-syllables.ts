import type { LessonBlock } from "../catalog";

export const syllablesLesson: LessonBlock[] = [
  {
    type: "p",
    text: "Syllables are groups of sounds said as one unit. Knowing them sharpens pronunciation and makes later Sanskrit rules easier to follow.",
  },
  { type: "h2", text: "How to split a phrase" },
  {
    type: "p",
    text: "Each Sanskrit syllable has exactly one vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "योग", iast: "yoga", note: "yo ga" },
      { dev: "व्याकरण", iast: "vyākaraṇa", note: "vyā ka ra ṇa" },
    ],
  },
  {
    type: "p",
    text: "Traditionally, a syllable ends in a vowel when it can:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "धर्म", iast: "dharma", note: "dha rma" },
      { dev: "क्षेत्र", iast: "kṣetra", note: "kṣe tra" },
    ],
  },
  {
    type: "p",
    text: "Anusvāra and visarga stay in the same syllable as the vowel they follow:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "संस्कृत", iast: "saṃskṛta", note: "saṃ skṛ ta" },
      { dev: "दुःख", iast: "duḥkha", note: "duḥ kha" },
    ],
  },
  {
    type: "p",
    text: "Any leftover sounds at the end of a phrase go in the last syllable:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सुखम्", iast: "sukham", note: "su kham" },
      { dev: "वृक्षात्", iast: "vṛkṣāt", note: "vṛ kṣāt" },
    ],
  },
  {
    type: "p",
    text: "The first half of the Gita’s opening line splits the same way:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "धर्मक्षेत्रे कुरुक्षेत्रे",
        iast: "dharmakṣetre kurukṣetre",
        note: "dha rma kṣe tre ku ru kṣe tre",
      },
      {
        dev: "समवेता युयुत्सवः",
        iast: "samavetā yuyutsavaḥ",
        note: "sa ma ve tā yu yu tsa vaḥ",
      },
    ],
  },
  { type: "h2", text: "Devanagari as a syllable script" },
  {
    type: "p",
    text: "Those splits line up with Devanagari units: each written cluster is one syllable under the rules above.",
  },
  { type: "h2", text: "Light and heavy" },
  {
    type: "p",
    text: "Syllables are light or heavy. Heavy ones are usually held about twice as long as light ones.",
  },
  {
    type: "p",
    text: "A syllable is heavy if it has a long vowel, if it is followed by more than one consonant, or if it is followed by an anusvāra or visarga. All other syllables are light. Read the Gita split above and check each syllable against those three tests.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org syllables page: one vowel per syllable; prefer ending on a vowel; anusvāra/visarga stay with their vowel; final leftovers join the last syllable; Devanagari units match those splits; light vs heavy (long vowel, following cluster, or following ṃ/ḥ). Examples are the page’s own, including the Gita half-verse. Review practice lines (Puruṣasūkta, Veṅkaṭasuprabhātam, Mahiṣāsuramardinī) left for the reader, not restated here.",
  },
];
