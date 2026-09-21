import type { LessonBlock } from "../catalog";

export const blessingMood: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as the benedictive, āśīḥ (“hope, wish”), or āśīrliṅ. The blessing mood usually expresses a blessing or prayer. Like the recent past, it is rare.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "शुभं भूयात्",
        iast: "śubhaṃ bhūyāt",
        note: "May there be welfare (to all).",
      },
    ],
  },
  { type: "h2", text: "Making the stem" },
  {
    type: "p",
    text: "Parasmaipada roots generally take the same -ya stem used in karmaṇi and bhāve prayoga for the special tense-moods — yet the sense is still kartari prayoga:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "गम् → गम्य → गम्यात्",
        iast: "gam → gamya → gamyāt",
        note: "go → may (someone) go",
      },
      {
        dev: "वच् → उच्य → उच्यात्",
        iast: "vac → ucya → ucyāt",
        note: "speak → may (someone) speak",
      },
    ],
  },
  {
    type: "p",
    text: "For ātmanepada endings, strengthen the root and add no special stem suffix.",
  },
  { type: "h2", text: "Parasmaipada endings" },
  {
    type: "p",
    text: "These endings resemble the potential mood; the difference is that -yās- begins each one:",
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
          { dev: "यात्", iast: "yāt" },
          { dev: "याताम्", iast: "yātām" },
          { dev: "यासुः", iast: "yāsuḥ" },
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
          { dev: "याः", iast: "yāḥ" },
          { dev: "यास्तम्", iast: "yāstam" },
          { dev: "यास्त", iast: "yāsta" },
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
          { dev: "यासम्", iast: "yāsam" },
          { dev: "यास्व", iast: "yāsva" },
          { dev: "यास्म", iast: "yāsma" },
        ],
      },
    ],
  },
  { type: "h2", text: "nī, parasmaipada" },
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
          { dev: "नीयात्", iast: "nīyāt" },
          { dev: "नीयाताम्", iast: "nīyātām" },
          { dev: "नीयासुः", iast: "nīyāsuḥ" },
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
          { dev: "नीयाः", iast: "nīyāḥ" },
          { dev: "नीयास्तम्", iast: "nīyāstam" },
          { dev: "नीयास्त", iast: "nīyāsta" },
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
          { dev: "नीयासम्", iast: "nīyāsam" },
          { dev: "नीयास्व", iast: "nīyāsva" },
          { dev: "नीयास्म", iast: "nīyāsma" },
        ],
      },
    ],
  },
  { type: "h2", text: "Ātmanepada endings" },
  {
    type: "p",
    text: "Ātmanepada blessing forms are even rarer. The endings again track the potential mood, but with -sīs- at the front; that -sīs becomes -sī- before a voiced sound:",
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
          { dev: "सीष्ट", iast: "sīṣṭa" },
          { dev: "सीयास्ताम्", iast: "sīyāstām" },
          { dev: "सीरन्", iast: "sīran" },
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
          { dev: "सीष्ठाः", iast: "sīṣṭhāḥ" },
          { dev: "सीयास्थाम्", iast: "sīyāsthām" },
          { dev: "सीध्वम्", iast: "sīdhvam" },
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
          { dev: "सीय", iast: "sīya" },
          { dev: "सीवहि", iast: "sīvahi" },
          { dev: "सीमहि", iast: "sīmahi" },
        ],
      },
    ],
  },
  { type: "h2", text: "nī, ātmanepada" },
  {
    type: "p",
    text: "With a strengthened root, the first s of the ending may change by sandhi:",
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
          { dev: "नेषीष्ट", iast: "neṣīṣṭa" },
          { dev: "नेषीयास्ताम्", iast: "neṣīyāstām" },
          { dev: "नेषीरन्", iast: "neṣīran" },
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
          { dev: "नेषीष्ठाः", iast: "neṣīṣṭhāḥ" },
          { dev: "नेषीयास्थाम्", iast: "neṣīyāsthām" },
          { dev: "नेषीध्वम्", iast: "neṣīdhvam" },
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
          { dev: "नेषीय", iast: "neṣīya" },
          { dev: "नेषीवहि", iast: "neṣīvahi" },
          { dev: "नेषीमहि", iast: "neṣīmahi" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-2/the-blessing-mood/: benedictive / āśīḥ / āśīrliṅ; śubhaṃ bhūyāt; -ya stem (gamya → gamyāt, ucya → ucyāt) with kartari sense; ātmanepada strengthened root; parasmaipada -yās- endings and nī paradigm; rarer ātmanepada -sīs-/-sī- endings and neṣīṣṭa paradigm with sandhi on the first s. No extra roots.",
  },
];
