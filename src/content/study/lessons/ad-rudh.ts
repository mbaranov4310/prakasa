import type { LessonBlock } from "../catalog";

const person3 = {
  en: "3rd",
  dev: "प्रथमः",
  iast: "prathamaḥ",
  cue: "he, she, it, they",
} as const;
const person2 = {
  en: "2nd",
  dev: "मध्यमः",
  iast: "madhyamaḥ",
  cue: "you",
} as const;
const person1 = {
  en: "1st",
  dev: "उत्तमः",
  iast: "uttamaḥ",
  cue: "I, we",
} as const;

export const adRudh: LessonBlock[] = [
  {
    type: "p",
    text: "Among the ten verb classes, ad and rudh sit with the less simple stem patterns. The guide page is mostly paradigms — present for ad, and the four special tense-moods for rudh, each in parasmaipada and ātmanepada where printed.",
  },
  { type: "h2", text: "The ad class, present" },
  {
    type: "p",
    text: "Parasmaipada present of ad (root अद् ad). Rows are person; columns are number:",
  },
  {
    type: "table",
    caption: "ad — present, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "अत्ति", iast: "atti" },
          { dev: "अत्तः", iast: "attaḥ" },
          { dev: "अदन्ति", iast: "adanti" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "अत्सि", iast: "atsi" },
          { dev: "अत्थः", iast: "atthaḥ" },
          { dev: "अत्थ", iast: "attha" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "अद्मि", iast: "admi" },
          { dev: "अद्वः", iast: "advaḥ" },
          { dev: "अद्मः", iast: "admaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Ātmanepada present of the same root:",
  },
  {
    type: "table",
    caption: "ad — present, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "अत्ते", iast: "atte" },
          { dev: "अदाते", iast: "adāte" },
          { dev: "अदते", iast: "adate" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "अत्से", iast: "atse" },
          { dev: "अदाथे", iast: "adāthe" },
          { dev: "अद्ध्वे", iast: "addhve" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "अदे", iast: "ade" },
          { dev: "अद्वहे", iast: "advahe" },
          { dev: "अद्महे", iast: "admahe" },
        ],
      },
    ],
  },
  { type: "h2", text: "The rudh class, parasmaipada" },
  {
    type: "p",
    text: "Present of rudh (root रुध् rudh):",
  },
  {
    type: "table",
    caption: "rudh — present, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "रुणद्धि", iast: "ruṇaddhi" },
          { dev: "रुन्द्धः", iast: "runddhaḥ" },
          { dev: "रुन्धन्ति", iast: "rundhanti" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "रुणत्सि", iast: "ruṇatsi" },
          { dev: "रुन्द्धः", iast: "runddhaḥ" },
          { dev: "रुन्द्ध", iast: "runddha" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "रुणध्मि", iast: "ruṇadhmi" },
          { dev: "रुन्ध्वः", iast: "rundhvaḥ" },
          { dev: "रुन्ध्मः", iast: "rundhmaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Command mood:",
  },
  {
    type: "table",
    caption: "rudh — command, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "रुणद्धु", iast: "ruṇaddhu" },
          { dev: "रुन्द्धाम्", iast: "runddhām" },
          { dev: "रुन्धन्तु", iast: "rundhantu" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "रुन्द्धि", iast: "runddhi" },
          { dev: "रुन्द्धम्", iast: "runddham" },
          { dev: "रुन्द्ध", iast: "runddha" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "रुणधानि", iast: "ruṇadhāni" },
          { dev: "रुणधाव", iast: "ruṇadhāva" },
          { dev: "रुणधाम", iast: "ruṇadhāma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Ordinary past (a- prefix). Third and second singular share one form:",
  },
  {
    type: "table",
    caption: "rudh — ordinary past, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "अरुणत्", iast: "aruṇat" },
          { dev: "अरुन्द्धाम्", iast: "arunddhām" },
          { dev: "अरुन्धन्", iast: "arundhan" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "अरुणत्", iast: "aruṇat" },
          { dev: "अरुन्द्धम्", iast: "arunddham" },
          { dev: "अरुन्द्ध", iast: "arunddha" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "अरुणधम्", iast: "aruṇadham" },
          { dev: "अरुन्ध्व", iast: "arundhva" },
          { dev: "अरुन्ध्म", iast: "arundhma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Potential mood:",
  },
  {
    type: "table",
    caption: "rudh — potential, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "रुन्ध्यात्", iast: "rundhyāt" },
          { dev: "रुन्ध्याताम्", iast: "rundhyātām" },
          { dev: "रुन्ध्युः", iast: "rundhyuḥ" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "रुन्ध्याः", iast: "rundhyāḥ" },
          { dev: "रुन्ध्यातम्", iast: "rundhyātam" },
          { dev: "रुन्ध्यात", iast: "rundhyāta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "रुन्ध्याम्", iast: "rundhyām" },
          { dev: "रुन्ध्याव", iast: "rundhyāva" },
          { dev: "रुन्ध्याम", iast: "rundhyāma" },
        ],
      },
    ],
  },
  { type: "h2", text: "The rudh class, ātmanepada" },
  {
    type: "table",
    caption: "rudh — present, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "रुन्द्धे", iast: "runddhe" },
          { dev: "रुन्धाते", iast: "rundhāte" },
          { dev: "रुन्धते", iast: "rundhate" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "रुन्त्से", iast: "runtse" },
          { dev: "रुन्धाथे", iast: "rundhāthe" },
          { dev: "रुन्द्ध्वे", iast: "runddhve" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "रुन्धे", iast: "rundhe" },
          { dev: "रुन्ध्वहे", iast: "rundhvahe" },
          { dev: "रुन्ध्महे", iast: "rundhmahe" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "rudh — command, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "रुन्द्धाम्", iast: "runddhām" },
          { dev: "रुन्धाताम्", iast: "rundhātām" },
          { dev: "रुन्धताम्", iast: "rundhatām" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "रुन्त्स्व", iast: "runtsva" },
          { dev: "रुन्धाथाम्", iast: "rundhāthām" },
          { dev: "रुन्द्ध्वम्", iast: "runddhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "रुणधै", iast: "ruṇadhai" },
          { dev: "रुणधावहै", iast: "ruṇadhāvahai" },
          { dev: "रुणधामहै", iast: "ruṇadhāmahai" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "rudh — ordinary past, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "अरुन्द्ध", iast: "arunddha" },
          { dev: "अरुन्धाताम्", iast: "arundhātām" },
          { dev: "अरुन्धत", iast: "arundhata" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "अरुन्द्धाः", iast: "arunddhāḥ" },
          { dev: "अरुन्धाथाम्", iast: "arundhāthām" },
          { dev: "अरुन्द्ध्वम्", iast: "arunddhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "अरुन्धि", iast: "arundhi" },
          { dev: "अरुन्ध्वहि", iast: "arundhvahi" },
          { dev: "अरुन्ध्महि", iast: "arundhmahi" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "rudh — potential, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "रुन्धीत", iast: "rundhīta" },
          { dev: "रुन्धीयाताम्", iast: "rundhīyātām" },
          { dev: "रुन्धीरन्", iast: "rundhīran" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "रुन्धीथाः", iast: "rundhīthāḥ" },
          { dev: "रुन्धीयाथाम्", iast: "rundhīyāthām" },
          { dev: "रुन्धीध्वम्", iast: "rundhīdhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "रुन्धीय", iast: "rundhīya" },
          { dev: "रुन्धीवहि", iast: "rundhīvahi" },
          { dev: "रुन्धीमहि", iast: "rundhīmahi" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs/the-ad-and-rudh-classes/: the printed ad present (parasmaipada and ātmanepada) and rudh four special tense-moods (parasmaipada and ātmanepada). Mood labels follow the four special tense-moods already mapped elsewhere; the page headings do not name each grid. Hu, su, tan, and krī tables that appear on the same underdeveloped page belong to other lessons and are omitted. No stem-formation prose was on the source.",
  },
];
