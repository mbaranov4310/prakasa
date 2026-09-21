import type { LessonBlock } from "../catalog";

export const aStems: LessonBlock[] = [
  {
    type: "p",
    text: "Most Sanskrit nouns end in short a. This family is masculine or neuter. The endings wander farther from the “basic” set than any other family, especially in the singular. You do not need to memorize the grid by brute force — drill one stem until the pattern feels ordinary. This preview uses masculine rāma, “Rāma.”",
  },
  { type: "h2", text: "Masculine rāma, 8 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "रामः", iast: "rāmaḥ" },
          { dev: "रामौ", iast: "rāmau" },
          { dev: "रामाः", iast: "rāmāḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "रामम्", iast: "rāmam" },
          { dev: "रामौ", iast: "rāmau" },
          { dev: "रामान्", iast: "rāmān" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "रामेण", iast: "rāmeṇa" },
          { dev: "रामाभ्याम्", iast: "rāmābhyām" },
          { dev: "रामैः", iast: "rāmaiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "रामाय", iast: "rāmāya" },
          { dev: "रामाभ्याम्", iast: "rāmābhyām" },
          { dev: "रामेभ्यः", iast: "rāmebhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "रामात्", iast: "rāmāt" },
          { dev: "रामाभ्याम्", iast: "rāmābhyām" },
          { dev: "रामेभ्यः", iast: "rāmebhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "रामस्य", iast: "rāmasya" },
          { dev: "रामयोः", iast: "rāmayoḥ" },
          { dev: "रामाणाम्", iast: "rāmāṇām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "रामे", iast: "rāme" },
          { dev: "रामयोः", iast: "rāmayoḥ" },
          { dev: "रामेषु", iast: "rāmeṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "राम", iast: "rāma" },
          { dev: "रामौ", iast: "rāmau" },
          { dev: "रामाः", iast: "rāmāḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Several cells share a form: dual nominative, accusative, and vocative are all rāmau; dual instrumental through ablative are rāmābhyām; dual genitive and locative are rāmayoḥ; plural nominative and vocative are rāmāḥ; plural dative and ablative are rāmebhyaḥ.",
  },
  { type: "h2", text: "n becomes ṇ" },
  {
    type: "p",
    text: "Endings that contain n can change after r or ṣ, even with vowels in between. So rāma + ina is not rāmena but rāmeṇa, and the genitive plural is rāmāṇām, not rāmānām. The same rule gives grāmeṇa, “with the village.”",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामेण", iast: "rāmeṇa", note: "with Rāma" },
      { dev: "रामाणाम्", iast: "rāmāṇām", note: "of many Rāmas" },
    ],
  },
  { type: "h2", text: "Neuter, in brief" },
  {
    type: "p",
    text: "Neuter -a stems such as phala, “fruit,” match the masculine from the instrumental through the locative. They differ in the nominative, accusative, and vocative (phalam, phale, phalāni). A later pass can drill those; this preview stays on masculine rāma.",
  },
];
