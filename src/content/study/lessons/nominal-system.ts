import type { LessonBlock } from "../catalog";

export const nominalSystem: LessonBlock[] = [
  {
    type: "p",
    text: "Nominals are “naming” words — one of the three main Sanskrit word types, with verbs and uninflected words. They cover nouns, adjectives, pronouns, and numerals.",
  },
  {
    type: "ul",
    items: [
      "nouns: man, forest, tree, victory",
      "adjectives: happy, sad",
      "pronouns: I, you, they",
      "numerals: one, two, three",
    ],
  },
  { type: "h2", text: "Stems and endings" },
  {
    type: "p",
    text: "Every nominal has a stem and an ending. The stem carries the basic meaning; the ending marks gender, number, and case:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सिंहः", iast: "siṃhaḥ", note: "siṃha + ḥ — the lion" },
      { dev: "सिंहस्य", iast: "siṃhasya", note: "siṃha + sya — of the lion" },
      { dev: "सिंहैः", iast: "siṃhaiḥ", note: "siṃha + aiḥ — by the lions" },
    ],
  },
  { type: "h2", text: "Three genders" },
  {
    type: "p",
    text: "Sanskrit nominals use masculine, feminine, and neuter. Every noun stem has a fixed gender, even when it does not name a living being. The ending’s gender should match the stem’s.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सिंहः", iast: "siṃhaḥ", note: "masculine — the (male) lion" },
      { dev: "सिंहा", iast: "siṃhā", note: "feminine — the (female) lion" },
      { dev: "वनम्", iast: "vanam", note: "neuter — forest" },
    ],
  },
  {
    type: "ul",
    items: [
      "Stems in -a are never feminine.",
      "Stems in -ā, -ī, and -ū are almost always feminine.",
      "Nouns made with -tra and -ana are usually neuter.",
    ],
  },
  { type: "h2", text: "Three numbers" },
  {
    type: "p",
    text: "Number (vacana) is singular (one), dual (exactly two), or plural (three or more). Verbs use the same three; the verb and the case-1 noun should agree in number.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सिंहः", iast: "siṃhaḥ", note: "singular — the lion sees" },
      { dev: "सिंहौ", iast: "siṃhau", note: "dual — the two lions see" },
      { dev: "सिंहाः", iast: "siṃhāḥ", note: "plural — the many lions see" },
    ],
  },
  { type: "h2", text: "Eight cases" },
  {
    type: "p",
    text: "Case is how a nominal marks its role in the sentence. Each case has a basic meaning; uninflected words can sharpen it. Case 1 is the default — usually the subject, though prayoga can make the same form the patient instead.",
  },
  {
    type: "ul",
    items: [
      "Case 1 — subject (default); depends on prayoga",
      "Case 2 — object of the action; also destinations",
      "Case 3 — with, by means of",
      "Case 4 — for, for the sake of",
      "Case 5 — from, than, because of",
      "Case 6 — of",
      "Case 7 — in, on",
      "Case 8 — the person spoken to",
    ],
  },
  {
    type: "glyphs",
    items: [
      { dev: "ग्रामम्", iast: "grāmam", note: "case 2 — village (object / goal)" },
      { dev: "मांसाय", iast: "māṃsāya", note: "case 4 — for meat" },
      { dev: "वनाद्", iast: "vanād", note: "case 5 — from the forest" },
      { dev: "नरस्य", iast: "narasya", note: "case 6 — of the man" },
      { dev: "ग्रामे", iast: "grāme", note: "case 7 — in the village" },
    ],
  },
  {
    type: "p",
    text: "Other resources name the cases like this (case 8 has no special Sanskrit label):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "प्रथमा", iast: "prathamā", note: "case 1 — nominative" },
      { dev: "द्वितीया", iast: "dvitīyā", note: "case 2 — accusative" },
      { dev: "तृतीया", iast: "tṛtīyā", note: "case 3 — instrumental" },
      { dev: "चतुर्थी", iast: "caturthī", note: "case 4 — dative" },
      { dev: "पञ्चमी", iast: "pañcamī", note: "case 5 — ablative" },
      { dev: "षष्ठी", iast: "ṣaṣṭhī", note: "case 6 — genitive" },
      { dev: "सप्तमी", iast: "saptamī", note: "case 7 — locative" },
    ],
  },
  { type: "h2", text: "Stem families" },
  {
    type: "p",
    text: "Stems end in many sounds. We group them by the last sound because different finals tend to take different endings — for example masculine siṃha (-a) versus feminine siṃhā (-ā):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सिंह", iast: "siṃha", note: "-a stem — (male) lion" },
      { dev: "अग्नि", iast: "agni", note: "-i stem — fire" },
      { dev: "मनस्", iast: "manas", note: "consonant stem — mind" },
      { dev: "सिंहेन", iast: "siṃhena", note: "-a → by the (male) lion" },
      { dev: "सिंहया", iast: "siṃhayā", note: "-ā → by the (female) lion" },
      { dev: "सिंहस्य", iast: "siṃhasya", note: "-a → of the (male) lion" },
      { dev: "सिंहायाः", iast: "siṃhāyāḥ", note: "-ā → of the (female) lion" },
    ],
  },
  {
    type: "ul",
    items: [
      "the -a stems",
      "the -ā, -ī, and -ū stems",
      "the -i and -u stems",
      "the -ṛ stems",
      "all other stems",
    ],
  },
  {
    type: "p",
    text: "Within a family, stems mostly share endings and follow the same patterns. Later lessons take the families one by one; this page only maps the system.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/nominals/the-nominal-system/: what counts as a nominal; stem vs ending; three genders with stem-final cues; three numbers with verb agreement; eight cases with basic meanings and Sanskrit/English names; five stem families, with the siṃha / siṃhā ending contrast. No full paradigm table — that belongs to the -a stems lesson.",
  },
];
