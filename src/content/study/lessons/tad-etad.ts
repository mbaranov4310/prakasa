import type { LessonBlock } from "../catalog";

export const tadEtad: LessonBlock[] = [
  {
    type: "p",
    text: "The four demonstrative pronouns tad, etad, idam, and adas cover similar ground. In theory they mark distance:",
  },
  {
    type: "ul",
    items: [
      "etad (“this”) — near at hand",
      "idam (“this”) — slightly further away",
      "adas (“that”) — much further away",
      "tad (“that”) — not present",
    ],
  },
  {
    type: "p",
    text: "Below are the printed forms in all three genders. Pronouns here stop at the locative; the reference does not list a vocative.",
  },
  { type: "h2", text: "tad and etad" },
  {
    type: "p",
    text: "Masculine tad:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "सः", iast: "saḥ" },
          { dev: "तौ", iast: "tau" },
          { dev: "ते", iast: "te" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "तम्", iast: "tam" },
          { dev: "तौ", iast: "tau" },
          { dev: "तान्", iast: "tān" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "तेन", iast: "tena" },
          { dev: "ताभ्याम्", iast: "tābhyām" },
          { dev: "तैः", iast: "taiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "तस्मै", iast: "tasmai" },
          { dev: "ताभ्याम्", iast: "tābhyām" },
          { dev: "तेभ्यः", iast: "tebhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "तस्मात्", iast: "tasmāt" },
          { dev: "ताभ्याम्", iast: "tābhyām" },
          { dev: "तेभ्यः", iast: "tebhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "तस्य", iast: "tasya" },
          { dev: "तयोः", iast: "tayoḥ" },
          { dev: "तेषाम्", iast: "teṣām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "तस्मिन्", iast: "tasmin" },
          { dev: "तयोः", iast: "tayoḥ" },
          { dev: "तेषु", iast: "teṣu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Some forms have transparent English cousins:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "तत्", iast: "tat", note: "that" },
      { dev: "ते", iast: "te", note: "they" },
    ],
  },
  {
    type: "p",
    text: "Feminine tad:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "सा", iast: "sā" },
          { dev: "ते", iast: "te" },
          { dev: "ताः", iast: "tāḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "ताम्", iast: "tām" },
          { dev: "ते", iast: "te" },
          { dev: "ताः", iast: "tāḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "तया", iast: "tayā" },
          { dev: "ताभ्याम्", iast: "tābhyām" },
          { dev: "ताभिः", iast: "tābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "तस्यै", iast: "tasyai" },
          { dev: "ताभ्याम्", iast: "tābhyām" },
          { dev: "ताभ्यः", iast: "tābhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "तस्याः", iast: "tasyāḥ" },
          { dev: "ताभ्याम्", iast: "tābhyām" },
          { dev: "ताभ्यः", iast: "tābhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "तस्याः", iast: "tasyāḥ" },
          { dev: "तयोः", iast: "tayoḥ" },
          { dev: "तासाम्", iast: "tāsām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "तस्याम्", iast: "tasyām" },
          { dev: "तयोः", iast: "tayoḥ" },
          { dev: "तासु", iast: "tāsu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter tad (nominative and accusative as printed):",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "तत्", iast: "tat" },
          { dev: "ते", iast: "te" },
          { dev: "तानि", iast: "tāni" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "तत्", iast: "tat" },
          { dev: "ते", iast: "te" },
          { dev: "तानि", iast: "tāni" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "For etad, prefix e- to each tad form. The only unusual changes are saḥ → eṣaḥ and sā → eṣā (ordinary sandhi):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "एषः", iast: "eṣaḥ", note: "this (near), masculine subject" },
      { dev: "एषा", iast: "eṣā", note: "this (near), feminine subject" },
      { dev: "एतत्", iast: "etat", note: "this (near), neuter" },
    ],
  },
  {
    type: "p",
    text: "So sa khādati becomes eṣa khādati, “he eats,” and sā khādati becomes eṣā khādati, “she eats.”",
  },
  { type: "h2", text: "idam" },
  {
    type: "p",
    text: "Masculine idam:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "अयम्", iast: "ayam" },
          { dev: "इमौ", iast: "imau" },
          { dev: "इमे", iast: "ime" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "इमम्", iast: "imam" },
          { dev: "इमौ", iast: "imau" },
          { dev: "इमान्", iast: "imān" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "अनेन", iast: "anena" },
          { dev: "आभ्याम्", iast: "ābhyām" },
          { dev: "एभिः", iast: "ebhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "अस्मै", iast: "asmai" },
          { dev: "आभ्याम्", iast: "ābhyām" },
          { dev: "एभ्यः", iast: "ebhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "अस्मात्", iast: "asmāt" },
          { dev: "आभ्याम्", iast: "ābhyām" },
          { dev: "एभ्यः", iast: "ebhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "अस्य", iast: "asya" },
          { dev: "अनयोः", iast: "anayoḥ" },
          { dev: "एषाम्", iast: "eṣām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "अस्मिन्", iast: "asmin" },
          { dev: "अनयोः", iast: "anayoḥ" },
          { dev: "एषु", iast: "eṣu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Feminine idam:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "इयम्", iast: "iyam" },
          { dev: "इमे", iast: "ime" },
          { dev: "इमाः", iast: "imāḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "इमाम्", iast: "imām" },
          { dev: "इमे", iast: "ime" },
          { dev: "इमाः", iast: "imāḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "अनया", iast: "anayā" },
          { dev: "आभ्याम्", iast: "ābhyām" },
          { dev: "आभिः", iast: "ābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "अस्यै", iast: "asyai" },
          { dev: "आभ्याम्", iast: "ābhyām" },
          { dev: "आभ्यः", iast: "ābhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "अस्याः", iast: "asyāḥ" },
          { dev: "आभ्याम्", iast: "ābhyām" },
          { dev: "आभ्यः", iast: "ābhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "अस्याः", iast: "asyāḥ" },
          { dev: "अनयोः", iast: "anayoḥ" },
          { dev: "आसाम्", iast: "āsām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "अस्याम्", iast: "asyām" },
          { dev: "अनयोः", iast: "anayoḥ" },
          { dev: "आसु", iast: "āsu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter idam (nominative and accusative as printed):",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "इदम्", iast: "idam" },
          { dev: "इमे", iast: "ime" },
          { dev: "इमानि", iast: "imāni" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "इदम्", iast: "idam" },
          { dev: "इमे", iast: "ime" },
          { dev: "इमानि", iast: "imāni" },
        ],
      },
    ],
  },
  { type: "h2", text: "adas" },
  {
    type: "p",
    text: "Masculine adas:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "असौ", iast: "asau" },
          { dev: "अमू", iast: "amū" },
          { dev: "अमी", iast: "amī" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "अमुम्", iast: "amum" },
          { dev: "अमू", iast: "amū" },
          { dev: "अमून्", iast: "amūn" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "अमुना", iast: "amunā" },
          { dev: "अमूभ्याम्", iast: "amūbhyām" },
          { dev: "अमीभिः", iast: "amībhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "अमुष्मै", iast: "amuṣmai" },
          { dev: "अमूभ्याम्", iast: "amūbhyām" },
          { dev: "अमीभ्यः", iast: "amībhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "अमुष्मात्", iast: "amuṣmāt" },
          { dev: "अमूभ्याम्", iast: "amūbhyām" },
          { dev: "अमीभ्यः", iast: "amībhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "अमुष्य", iast: "amuṣya" },
          { dev: "अमुयोः", iast: "amuyoḥ" },
          { dev: "अमीषाम्", iast: "amīṣām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "अमुष्मिन्", iast: "amuṣmin" },
          { dev: "अमुयोः", iast: "amuyoḥ" },
          { dev: "अमीषु", iast: "amīṣu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Feminine adas:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "असौ", iast: "asau" },
          { dev: "अमू", iast: "amū" },
          { dev: "अमूः", iast: "amūḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "अमूम्", iast: "amūm" },
          { dev: "अमू", iast: "amū" },
          { dev: "अमूः", iast: "amūḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "अमुया", iast: "amuyā" },
          { dev: "अमूभ्याम्", iast: "amūbhyām" },
          { dev: "अमूभिः", iast: "amūbhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "अमुष्यै", iast: "amuṣyai" },
          { dev: "अमूभ्याम्", iast: "amūbhyām" },
          { dev: "अमूभ्यः", iast: "amūbhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "अमुष्याः", iast: "amuṣyāḥ" },
          { dev: "अमूभ्याम्", iast: "amūbhyām" },
          { dev: "अमूभ्यः", iast: "amūbhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "अमुष्याः", iast: "amuṣyāḥ" },
          { dev: "अमुयोः", iast: "amuyoḥ" },
          { dev: "अमूषाम्", iast: "amūṣām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "अमुष्याम्", iast: "amuṣyām" },
          { dev: "अमुयोः", iast: "amuyoḥ" },
          { dev: "अमूषु", iast: "amūṣu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter adas (nominative and accusative as printed):",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "अदः", iast: "adaḥ" },
          { dev: "अमू", iast: "amū" },
          { dev: "अमूनि", iast: "amūni" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "अदः", iast: "adaḥ" },
          { dev: "अमू", iast: "amū" },
          { dev: "अमूनि", iast: "amūni" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org (CC BY 4.0; path nominals-2/tad-etad-idam-and-adas): proximity list for etad/idam/adas/tad; full masculine and feminine grids for tad, idam, and adas (cases 1–7); neuter nom./acc. abbrevs as printed; etad formed by e- plus tad with saḥ→eṣaḥ and sā→eṣā; tat/te English cousins; sa/eṣa and sā/eṣā khādati examples. No vocative invented. No full etad grid invented.",
  },
];
