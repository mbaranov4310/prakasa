import type { LessonBlock } from "../catalog";

export const potentialMood: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as the optative, vidhiḥ (“injunction”), or vidhiliṅ. The potential mood is the last of the four special tense-moods.",
  },
  { type: "h2", text: "Basic meaning" },
  {
    type: "p",
    text: "It usually describes what might, could, or should happen:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामः वनम् गच्छेत्।",
        iast: "rāmaḥ vanam gacchet.",
        note: "Rama might go to the forest.",
      },
    ],
  },
  {
    type: "p",
    text: "Context can turn the same mood to capability, a soft command, and other subtle uses:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अहम् इदं वनं सर्वं दहेयम्।",
        iast: "aham idaṃ vanaṃ sarvaṃ daheyam.",
        note: "I could burn all of this forest.",
      },
      {
        dev: "त्वम् इदं खादेः।",
        iast: "tvam idaṃ khādeḥ.",
        note: "You should eat this.",
      },
    ],
  },
  { type: "h2", text: "Endings" },
  {
    type: "p",
    text: "The endings are almost identical to the ordinary past tense. Two differences stand out. First, an extra -ī appears before every ending:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it",
        },
        cells: [
          { dev: "ईत्", iast: "īt" },
          { dev: "ईताम्", iast: "ītām" },
          { dev: "ईयुः", iast: "īyuḥ" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "ईः", iast: "īḥ" },
          { dev: "ईतम्", iast: "ītam" },
          { dev: "ईत", iast: "īta" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I, we",
        },
        cells: [
          { dev: "ईयम्", iast: "īyam" },
          { dev: "ईव", iast: "īva" },
          { dev: "ईम", iast: "īma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Second, the third-person plural uses -uḥ instead of past-tense -an:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अनयन्।", iast: "anayan.", note: "They led. (ordinary past)" },
      { dev: "नयेयुः।", iast: "nayeyuḥ.", note: "They might lead." },
    ],
  },
  { type: "h2", text: "naya, potential" },
  {
    type: "p",
    text: "With a stem like naya, the -ī endings combine with stem-final a to give e:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it",
        },
        cells: [
          { dev: "नयेत्", iast: "nayet" },
          { dev: "नयेताम्", iast: "nayetām" },
          { dev: "नयेयुः", iast: "nayeyuḥ" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "नयेः", iast: "nayeḥ" },
          { dev: "नयेतम्", iast: "nayetam" },
          { dev: "नयेत", iast: "nayeta" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I, we",
        },
        cells: [
          { dev: "नयेयम्", iast: "nayeyam" },
          { dev: "नयेव", iast: "nayeva" },
          { dev: "नयेम", iast: "nayema" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Stem–ending sandhi: naya + īt → nayet, “(someone) might, could, or should lead.”",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नय + ईत् → नयेत्",
        iast: "naya + īt → nayet",
        note: "(someone) might, could, or should lead",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-1/the-potential-mood/: also-known-as names; might/could/should sense with gacchet, daheyam, and khādeḥ; potential endings with -ī and 3pl -uḥ vs past -an; naya paradigm and naya + īt → nayet. No ātmanepada or other stems.",
  },
];
