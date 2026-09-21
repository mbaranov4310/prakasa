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

export const suTanKri: LessonBlock[] = [
  {
    type: "p",
    text: "Among the ten verb classes, su, tan, and krī sit with the less simple stem patterns. The guide page is mostly paradigms — present, command, and potential for su and tan; those three plus ordinary past for krī — each in parasmaipada and ātmanepada where printed.",
  },
  { type: "h2", text: "The su class, parasmaipada" },
  {
    type: "p",
    text: "Present of su (root सु su). Rows are person; columns are number:",
  },
  {
    type: "table",
    caption: "su — present, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "सुनोति", iast: "sunoti" },
          { dev: "सुनुतः", iast: "sunutaḥ" },
          { dev: "सुन्वन्ति", iast: "sunvanti" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "सुनोषि", iast: "sunoṣi" },
          { dev: "सुनुतः", iast: "sunutaḥ" },
          { dev: "सुन्वन्ति", iast: "sunvanti" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "सुनोमि", iast: "sunomi" },
          { dev: "सुनुवः, सुन्वः", iast: "sunuvaḥ, sunvaḥ" },
          { dev: "सुनुमः, सुन्मः", iast: "sunumaḥ, sunmaḥ" },
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
    caption: "su — command, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "सुनोतु", iast: "sunotu" },
          { dev: "सुनुताम्", iast: "sunutām" },
          { dev: "सुन्वन्तु", iast: "sunvantu" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "सुनु", iast: "sunu" },
          { dev: "सुनुतम्", iast: "sunutam" },
          { dev: "सुनुत", iast: "sunuta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "सुनवानि", iast: "sunavāni" },
          { dev: "सुनवाव", iast: "sunavāva" },
          { dev: "सुनवाम", iast: "sunavāma" },
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
    caption: "su — potential, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "सुनुयात्", iast: "sunuyāt" },
          { dev: "सुनुयाताम्", iast: "sunuyātām" },
          { dev: "सुनुयुः", iast: "sunuyuḥ" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "सुनुयाः", iast: "sunuyāḥ" },
          { dev: "सुनुयातम्", iast: "sunuyātam" },
          { dev: "सुनुयात", iast: "sunuyāta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "सुनुयाम्", iast: "sunuyām" },
          { dev: "सुनुयाव", iast: "sunuyāva" },
          { dev: "सुनुयाम", iast: "sunuyāma" },
        ],
      },
    ],
  },
  { type: "h2", text: "The su class, ātmanepada" },
  {
    type: "table",
    caption: "su — present, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "सुनुते", iast: "sunute" },
          { dev: "सुन्वाते", iast: "sunvāte" },
          { dev: "सुन्वते", iast: "sunvate" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "सुनुषे", iast: "sunuṣe" },
          { dev: "सुन्वाथे", iast: "sunvāthe" },
          { dev: "सुनुध्वे", iast: "sunudhve" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "सुन्वे", iast: "sunve" },
          { dev: "सुनुवहे, सुन्वहे", iast: "sunuvahe, sunvahe" },
          { dev: "सुनुमहे, सुन्महे", iast: "sunumahe, sunmahe" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "su — command, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "सुनुताम्", iast: "sunutām" },
          { dev: "सुन्वाताम्", iast: "sunvātām" },
          { dev: "सुन्वताम्", iast: "sunvatām" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "सुनुष्व", iast: "sunuṣva" },
          { dev: "सुन्वाथाम्", iast: "sunvāthām" },
          { dev: "सुनुध्वम्", iast: "sunudhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "सुनवै", iast: "sunavai" },
          { dev: "सुनवावहै", iast: "sunavāvahai" },
          { dev: "सुनवामहै", iast: "sunavāmahai" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "su — potential, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "सुन्वीत", iast: "sunvīta" },
          { dev: "सुन्वीयाताम्", iast: "sunvīyātām" },
          { dev: "सुन्वीरन्", iast: "sunvīran" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "सुन्वीथाः", iast: "sunvīthāḥ" },
          { dev: "सुन्वीयाथाम्", iast: "sunvīyāthām" },
          { dev: "सुन्वीध्वम्", iast: "sunvīdhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "सुन्वीय", iast: "sunvīya" },
          { dev: "सुन्वीवहि", iast: "sunvīvahi" },
          { dev: "सुन्वीमहि", iast: "sunvīmahi" },
        ],
      },
    ],
  },
  { type: "h2", text: "The tan class, parasmaipada" },
  {
    type: "p",
    text: "Present of tan (root तन् tan):",
  },
  {
    type: "table",
    caption: "tan — present, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "तनोति", iast: "tanoti" },
          { dev: "तनुतः", iast: "tanutaḥ" },
          { dev: "तन्वन्ति", iast: "tanvanti" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "तनोषि", iast: "tanoṣi" },
          { dev: "तनुतः", iast: "tanutaḥ" },
          { dev: "तन्वन्ति", iast: "tanvanti" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "तनोमि", iast: "tanomi" },
          { dev: "तनुवः, तन्वः", iast: "tanuvaḥ, tanvaḥ" },
          { dev: "तनुमः, तन्मः", iast: "tanumaḥ, tanmaḥ" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "tan — command, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "तनोतु", iast: "tanotu" },
          { dev: "तनुताम्", iast: "tanutām" },
          { dev: "तन्वन्तु", iast: "tanvantu" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "तनु", iast: "tanu" },
          { dev: "तनुतम्", iast: "tanutam" },
          { dev: "तनुत", iast: "tanuta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "तनवानि", iast: "tanavāni" },
          { dev: "तनवाव", iast: "tanavāva" },
          { dev: "तनवाम", iast: "tanavāma" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "tan — potential, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "तनुयात्", iast: "tanuyāt" },
          { dev: "तनुयाताम्", iast: "tanuyātām" },
          { dev: "तनुयुः", iast: "tanuyuḥ" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "तनुयाः", iast: "tanuyāḥ" },
          { dev: "तनुयातम्", iast: "tanuyātam" },
          { dev: "तनुयात", iast: "tanuyāta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "तनुयाम्", iast: "tanuyām" },
          { dev: "तनुयाव", iast: "tanuyāva" },
          { dev: "तनुयाम", iast: "tanuyāma" },
        ],
      },
    ],
  },
  { type: "h2", text: "The tan class, ātmanepada" },
  {
    type: "table",
    caption: "tan — present, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "तनुते", iast: "tanute" },
          { dev: "तन्वाते", iast: "tanvāte" },
          { dev: "तन्वते", iast: "tanvate" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "तनुषे", iast: "tanuṣe" },
          { dev: "तन्वाथे", iast: "tanvāthe" },
          { dev: "तनुध्वे", iast: "tanudhve" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "तन्वे", iast: "tanve" },
          { dev: "तनुवहे, तन्वहे", iast: "tanuvahe, tanvahe" },
          { dev: "तनुमहे, तन्महे", iast: "tanumahe, tanmahe" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "tan — command, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "तनुताम्", iast: "tanutām" },
          { dev: "तन्वाताम्", iast: "tanvātām" },
          { dev: "तन्वताम्", iast: "tanvatām" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "तनुष्व", iast: "tanuṣva" },
          { dev: "तन्वाथाम्", iast: "tanvāthām" },
          { dev: "तनुध्वम्", iast: "tanudhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "तनवै", iast: "tanavai" },
          { dev: "तनवावहै", iast: "tanavāvahai" },
          { dev: "तनवामहै", iast: "tanavāmahai" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "tan — potential, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "तन्वीत", iast: "tanvīta" },
          { dev: "तन्वीयाताम्", iast: "tanvīyātām" },
          { dev: "तन्वीरन्", iast: "tanvīran" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "तन्वीथाः", iast: "tanvīthāḥ" },
          { dev: "तन्वीयाथाम्", iast: "tanvīyāthām" },
          { dev: "तन्वीध्वम्", iast: "tanvīdhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "तन्वीय", iast: "tanvīya" },
          { dev: "तन्वीवहि", iast: "tanvīvahi" },
          { dev: "तन्वीमहि", iast: "tanvīmahi" },
        ],
      },
    ],
  },
  { type: "h2", text: "The krī class, parasmaipada" },
  {
    type: "p",
    text: "Present of krī (root क्री krī):",
  },
  {
    type: "table",
    caption: "krī — present, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "क्रीणाति", iast: "krīṇāti" },
          { dev: "क्रीणीतः", iast: "krīṇītaḥ" },
          { dev: "क्रीणन्ति", iast: "krīṇanti" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "क्रीणासि", iast: "krīṇāsi" },
          { dev: "क्रीणीतः", iast: "krīṇītaḥ" },
          { dev: "क्रीणीत", iast: "krīṇīta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "क्रीणामि", iast: "krīṇāmi" },
          { dev: "क्रीणीवः", iast: "krīṇīvaḥ" },
          { dev: "क्रीणीमः", iast: "krīṇīmaḥ" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "krī — command, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "क्रीणातु", iast: "krīṇātu" },
          { dev: "क्रीणीताम्", iast: "krīṇītām" },
          { dev: "क्रीणन्तु", iast: "krīṇantu" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "क्रीणीहि", iast: "krīṇīhi" },
          { dev: "क्रीणीतम्", iast: "krīṇītam" },
          { dev: "क्रीणीत", iast: "krīṇīta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "क्रीणानि", iast: "krīṇāni" },
          { dev: "क्रीणाव", iast: "krīṇāva" },
          { dev: "क्रीणाम", iast: "krīṇāma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Ordinary past (a- prefix):",
  },
  {
    type: "table",
    caption: "krī — ordinary past, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "अक्रीणात्", iast: "akrīṇāt" },
          { dev: "अक्रीणीताम्", iast: "akrīṇītām" },
          { dev: "अक्रीणन्", iast: "akrīṇan" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "अक्रीणाः", iast: "akrīṇāḥ" },
          { dev: "अक्रीणीतम्", iast: "akrīṇītam" },
          { dev: "अक्रीणीत", iast: "akrīṇīta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "अक्रीणाम्", iast: "akrīṇām" },
          { dev: "अक्रीणीव", iast: "akrīṇīva" },
          { dev: "अक्रीणीम", iast: "akrīṇīma" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "krī — potential, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "क्रीणीयात्", iast: "krīṇīyāt" },
          { dev: "क्रीणीयाताम्", iast: "krīṇīyātām" },
          { dev: "क्रीणीयुः", iast: "krīṇīyuḥ" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "क्रीणीयाः", iast: "krīṇīyāḥ" },
          { dev: "क्रीणीयातम्", iast: "krīṇīyātam" },
          { dev: "क्रीणीयात", iast: "krīṇīyāta" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "क्रीणीयाम्", iast: "krīṇīyām" },
          { dev: "क्रीणीयाव", iast: "krīṇīyāva" },
          { dev: "क्रीणीयाम", iast: "krīṇīyāma" },
        ],
      },
    ],
  },
  { type: "h2", text: "The krī class, ātmanepada" },
  {
    type: "table",
    caption: "krī — present, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "क्रीणीते", iast: "krīṇīte" },
          { dev: "क्रीणाते", iast: "krīṇāte" },
          { dev: "क्रीणते", iast: "krīṇate" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "क्रीणीषे", iast: "krīṇīṣe" },
          { dev: "क्रीणाथे", iast: "krīṇāthe" },
          { dev: "क्रीणीध्वे", iast: "krīṇīdhve" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "क्रीणे", iast: "krīṇe" },
          { dev: "क्रीणीवहे", iast: "krīṇīvahe" },
          { dev: "क्रीणीमहे", iast: "krīṇīmahe" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "krī — ordinary past, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "अक्रीणीत", iast: "akrīṇīta" },
          { dev: "अक्रीणाताम्", iast: "akrīṇātām" },
          { dev: "अक्रीणत", iast: "akrīṇata" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "अक्रीणीथाः", iast: "akrīṇīthāḥ" },
          { dev: "अक्रीणाथाम्", iast: "akrīṇāthām" },
          { dev: "अक्रीणीध्वम्", iast: "akrīṇīdhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "अक्रीणी", iast: "akrīṇī" },
          { dev: "अक्रीणीवहि", iast: "akrīṇīvahi" },
          { dev: "अक्रीणीमहि", iast: "akrīṇīmahi" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "krī — command, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "क्रीणीताम्", iast: "krīṇītām" },
          { dev: "क्रीणाताम्", iast: "krīṇātām" },
          { dev: "क्रीणताम्", iast: "krīṇatām" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "क्रीणीष्व", iast: "krīṇīṣva" },
          { dev: "क्रीणाथाम्", iast: "krīṇāthām" },
          { dev: "क्रीणीध्वम्", iast: "krīṇīdhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "क्रीणै", iast: "krīṇai" },
          { dev: "क्रीणावहै", iast: "krīṇāvahai" },
          { dev: "क्रीणामहै", iast: "krīṇāmahai" },
        ],
      },
    ],
  },
  {
    type: "table",
    caption: "krī — potential, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: person3,
        cells: [
          { dev: "क्रीणीत", iast: "krīṇīta" },
          { dev: "क्रीणीयाताम्", iast: "krīṇīyātām" },
          { dev: "क्रीणीरन्", iast: "krīṇīran" },
        ],
      },
      {
        label: person2,
        cells: [
          { dev: "क्रीणीथाः", iast: "krīṇīthāḥ" },
          { dev: "क्रीणीयाथाम्", iast: "krīṇīyāthām" },
          { dev: "क्रीणीध्वम्", iast: "krīṇīdhvam" },
        ],
      },
      {
        label: person1,
        cells: [
          { dev: "क्रीणीय", iast: "krīṇīya" },
          { dev: "क्रीणीवहि", iast: "krīṇīvahi" },
          { dev: "क्रीणीमहि", iast: "krīṇīmahi" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs/the-su-tan-and-kri-classes/: the printed su, tan, and krī paradigms (parasmaipada and ātmanepada). Mood labels follow the four special tense-moods already mapped elsewhere; the page headings do not name each grid. Su and tan print present, command, and potential only; krī also prints ordinary past (and in ātmanepada that past grid sits before command). Dual/plural first-person alternatives (sunuvaḥ/sunvaḥ and the like) kept as printed. No stem-formation prose was on the source.",
  },
];
