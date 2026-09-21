import type { LessonBlock } from "../catalog";

export const commandMood: LessonBlock[] = [
  {
    type: "p",
    text: "Also called the imperative, ājñā (“command”), or loṭ. Its endings sit close to the present tense, so it is a natural next step after that paradigm.",
  },
  { type: "h2", text: "Basic meaning" },
  {
    type: "p",
    text: "The command mood gives commands. Second person is the everyday slot:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नय", iast: "naya", note: "Lead!" },
      { dev: "नयत", iast: "nayata", note: "(You all) lead!" },
    ],
  },
  {
    type: "p",
    text: "In other persons the sense widens. Third person can suggest, demand, or request:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो वनं गच्छतु।",
        iast: "rāmo vanaṃ gacchatu.",
        note: "suggestion, demand, or request",
      },
    ],
  },
  {
    type: "p",
    text: "First person is uncommon. When it appears, it often answers another’s need:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "किं करवाणि ते?",
        iast: "kiṃ karavāṇi te?",
        note: "What may I do for you?",
      },
    ],
  },
  { type: "h2", text: "Endings on naya" },
  {
    type: "p",
    text: "Command-mood forms of the stem naya:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "प्रथम", iast: "prathama" },
        cells: [
          { dev: "नयतु", iast: "nayatu" },
          { dev: "नयताम्", iast: "nayatām" },
          { dev: "नयन्तु", iast: "nayantu" },
        ],
      },
      {
        label: { en: "2nd", dev: "मध्यम", iast: "madhyama" },
        cells: [
          { dev: "नय", iast: "naya" },
          { dev: "नयतम्", iast: "nayatam" },
          { dev: "नयत", iast: "nayata" },
        ],
      },
      {
        label: { en: "1st", dev: "उत्तम", iast: "uttama" },
        cells: [
          { dev: "नयानि", iast: "nayāni" },
          { dev: "नयाव", iast: "nayāva" },
          { dev: "नयाम", iast: "nayāma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Compared with the present, first-person forms still keep long ā. Close pairs include nayati → nayatu and nayanti → nayantu.",
  },
  {
    type: "p",
    text: "Five endings stand out as different from the present; they return in the next two tense-moods:",
  },
  {
    type: "table",
    caption: "Five recurring endings",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "प्रथम", iast: "prathama" },
        cells: [
          { dev: "", iast: "" },
          { dev: "ताम्", iast: "tām" },
          { dev: "", iast: "" },
        ],
      },
      {
        label: { en: "2nd", dev: "मध्यम", iast: "madhyama" },
        cells: [
          { dev: "", iast: "" },
          { dev: "तम्", iast: "tam" },
          { dev: "त", iast: "ta" },
        ],
      },
      {
        label: { en: "1st", dev: "उत्तम", iast: "uttama" },
        cells: [
          { dev: "", iast: "" },
          { dev: "व", iast: "va" },
          { dev: "म", iast: "ma" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-1/the-command-mood/: names (imperative / ājñā / loṭ); second-, third-, and first-person senses with the printed examples; full naya command grid; present-tense comparison; the five recurring endings. No ātmanepada or other stems.",
  },
];
