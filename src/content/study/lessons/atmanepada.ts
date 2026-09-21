import type { LessonBlock } from "../catalog";

export const atmanepada: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as the middle voice. The last lesson covered parasmaipada endings for the four special tense-moods; this one covers the matching ātmanepada set.",
  },
  { type: "h2", text: "What is ātmanepada?" },
  {
    type: "p",
    text: "Sanskrit verbs use two ending families: parasmaipada and ātmanepada. Some roots take only one; some take both.",
  },
  {
    type: "p",
    text: "For a few roots, ātmanepada marks that the actor acts for their own benefit. The classic pair:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "देवदत्त ओदनं पचति।",
        iast: "devadatta odanaṃ pacati.",
        note: "Devadatta cooks rice (for others).",
      },
      {
        dev: "देवदत्त ओदनं पचते।",
        iast: "devadatta odanaṃ pacate.",
        note: "Devadatta cooks rice (for himself).",
      },
    ],
  },
  {
    type: "p",
    text: "That contrast matters more in older Sanskrit. In later Sanskrit the two ending sets usually do not differ in meaning.",
  },
  { type: "h2", text: "The present tense" },
  {
    type: "p",
    text: "Ātmanepada present endings, shown on the stem naya (“lead”):",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "", iast: "" },
        cells: [
          { dev: "नयते", iast: "nayate" },
          { dev: "नयेते", iast: "nayete" },
          { dev: "नयन्ते", iast: "nayante" },
        ],
      },
      {
        label: { en: "2nd", dev: "", iast: "" },
        cells: [
          { dev: "नयसे", iast: "nayase" },
          { dev: "नयेथे", iast: "nayethe" },
          { dev: "नयध्वे", iast: "nayadhve" },
        ],
      },
      {
        label: { en: "1st", dev: "", iast: "" },
        cells: [
          { dev: "नये", iast: "naye" },
          { dev: "नयावहे", iast: "nayāvahe" },
          { dev: "नयामहे", iast: "nayāmahe" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Every present ending here ends in -e. Several cells echo their parasmaipada partners: nayati / nayate, nayataḥ / nayete, nayanti / nayante, nayasi / nayase, nayathaḥ / nayethe, nayāvaḥ / nayāvahe, nayāmaḥ / nayāmahe.",
  },
  { type: "h2", text: "The command mood" },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "", iast: "" },
        cells: [
          { dev: "नयताम्", iast: "nayatām" },
          { dev: "नयेताम्", iast: "nayetām" },
          { dev: "नयन्ताम्", iast: "nayantām" },
        ],
      },
      {
        label: { en: "2nd", dev: "", iast: "" },
        cells: [
          { dev: "नयस्व", iast: "nayasva" },
          { dev: "नयेथाम्", iast: "nayethām" },
          { dev: "नयध्वम्", iast: "nayadhvam" },
        ],
      },
      {
        label: { en: "1st", dev: "", iast: "" },
        cells: [
          { dev: "नयै", iast: "nayai" },
          { dev: "नयावहै", iast: "nayāvahai" },
          { dev: "नयामहै", iast: "nayāmahai" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Five of these endings carry into the next two tense-moods almost unchanged: dual 3rd -tām, dual 2nd -thām, plural 2nd -dhvam, dual 1st -vahai, plural 1st -mahai.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ताम्", iast: "tām", note: "dual 3rd" },
      { dev: "थाम्", iast: "thām", note: "dual 2nd" },
      { dev: "ध्वम्", iast: "dhvam", note: "plural 2nd" },
      { dev: "वहै", iast: "vahai", note: "dual 1st" },
      { dev: "महै", iast: "mahai", note: "plural 1st" },
    ],
  },
  { type: "h2", text: "The ordinary past tense" },
  {
    type: "p",
    text: "Ordinary past forms add the a- prefix, as before:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "", iast: "" },
        cells: [
          { dev: "अनयत", iast: "anayata" },
          { dev: "अनयेताम्", iast: "anayetām" },
          { dev: "अनयन्त", iast: "anayanta" },
        ],
      },
      {
        label: { en: "2nd", dev: "", iast: "" },
        cells: [
          { dev: "अनयथाः", iast: "anayathāḥ" },
          { dev: "अनयेथाम्", iast: "anayethām" },
          { dev: "अनयध्वम्", iast: "anayadhvam" },
        ],
      },
      {
        label: { en: "1st", dev: "", iast: "" },
        cells: [
          { dev: "अनये", iast: "anaye" },
          { dev: "अनयावहि", iast: "anayāvahi" },
          { dev: "अनयामहि", iast: "anayāmahi" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "First person dual and plural use -vahi and -mahi, not the -vahai and -mahai of the command mood.",
  },
  { type: "h2", text: "The potential mood" },
  {
    type: "p",
    text: "The potential mood mostly reuses the ordinary-past endings, and those endings begin with -ī:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "", iast: "" },
        cells: [
          { dev: "नयेत", iast: "nayeta" },
          { dev: "नयेयाताम्", iast: "nayeyātām" },
          { dev: "नयेरन्", iast: "nayeran" },
        ],
      },
      {
        label: { en: "2nd", dev: "", iast: "" },
        cells: [
          { dev: "नयेः", iast: "nayeḥ" },
          { dev: "नयेयाथम्", iast: "nayeyātham" },
          { dev: "नयेध्वम्", iast: "nayedhvam" },
        ],
      },
      {
        label: { en: "1st", dev: "", iast: "" },
        cells: [
          { dev: "नयेय", iast: "nayeya" },
          { dev: "नयेवहि", iast: "nayevahi" },
          { dev: "नयेमहि", iast: "nayemahi" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "The one clear exception is third-person plural:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अनयन्त।", iast: "anayanta.", note: "They led." },
      { dev: "नयेरन्।", iast: "nayeran.", note: "They might lead." },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-1/atmanepada/: ātmanepada vs parasmaipada with the pacati/pacate contrast; full naya paradigms for present, command, ordinary past, and potential; the five reusable command endings; past -vahi/-mahi vs command -vahai/-mahai; 3pl anayanta vs nayeran. Sparse “similar forms” grid summarized in prose.",
  },
];
