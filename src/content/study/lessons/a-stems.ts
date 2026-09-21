import type { LessonBlock } from "../catalog";

export const aStems: LessonBlock[] = [
  {
    type: "p",
    text: "Most Sanskrit nouns end in short a. This family is masculine or neuter. The endings wander farther from the “basic” set than any other family, especially in the singular. You do not need to memorize the grid by brute force — drill one stem until the pattern feels ordinary. This preview uses masculine rāma, “Rāma.”",
  },
  { type: "h2", text: "Masculine rāma, 8 × 3" },
  {
    type: "table",
    caption: "Case 1 is usually the subject, case 2 the object, case 3 “with / by,” case 4 “for,” case 5 “from,” case 6 “of,” case 7 “in / on,” case 8 the person addressed.",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: "1",
        cells: [
          { dev: "रामः", iast: "rāmaḥ" },
          { dev: "रामौ", iast: "rāmau" },
          { dev: "रामाः", iast: "rāmāḥ" },
        ],
      },
      {
        label: "2",
        cells: [
          { dev: "रामम्", iast: "rāmam" },
          { dev: "रामौ", iast: "rāmau" },
          { dev: "रामान्", iast: "rāmān" },
        ],
      },
      {
        label: "3",
        cells: [
          { dev: "रामेण", iast: "rāmeṇa" },
          { dev: "रामाभ्याम्", iast: "rāmābhyām" },
          { dev: "रामैः", iast: "rāmaiḥ" },
        ],
      },
      {
        label: "4",
        cells: [
          { dev: "रामाय", iast: "rāmāya" },
          { dev: "रामाभ्याम्", iast: "rāmābhyām" },
          { dev: "रामेभ्यः", iast: "rāmebhyaḥ" },
        ],
      },
      {
        label: "5",
        cells: [
          { dev: "रामात्", iast: "rāmāt" },
          { dev: "रामाभ्याम्", iast: "rāmābhyām" },
          { dev: "रामेभ्यः", iast: "rāmebhyaḥ" },
        ],
      },
      {
        label: "6",
        cells: [
          { dev: "रामस्य", iast: "rāmasya" },
          { dev: "रामयोः", iast: "rāmayoḥ" },
          { dev: "रामाणाम्", iast: "rāmāṇām" },
        ],
      },
      {
        label: "7",
        cells: [
          { dev: "रामे", iast: "rāme" },
          { dev: "रामयोः", iast: "rāmayoḥ" },
          { dev: "रामेषु", iast: "rāmeṣu" },
        ],
      },
      {
        label: "8",
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
    text: "Several cells share a form: dual 1, 2, and 8 are all rāmau; dual 3–5 are rāmābhyām; dual 6–7 are rāmayoḥ; plural 1 and 8 are rāmāḥ; plural 4 and 5 are rāmebhyaḥ.",
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
    text: "Neuter -a stems such as phala, “fruit,” match the masculine in cases 3–7. They differ in 1, 2, and 8 (phalam, phale, phalāni). A later pass can drill those; this preview stays on masculine rāma.",
  },
];
