import type { LessonBlock } from "../catalog";

export const dvandva: LessonBlock[] = [
  {
    type: "p",
    text: "Also called the coordinative compound. dvandva means “pair.” Words you could join with ca (“and”) can instead form a dvandva:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामः सीता च",
        iast: "rāmaḥ sītā ca",
        note: "before",
      },
      {
        dev: "रामसीते",
        iast: "rāmasīte",
        note: "Rama and Sita",
      },
      {
        dev: "रामः सीता लक्ष्मणः च",
        iast: "rāmaḥ sītā lakṣmaṇaḥ ca",
        note: "before",
      },
      {
        dev: "रामसीतालक्ष्मणाः",
        iast: "rāmasītālakṣmaṇāḥ",
        note: "Rama, Sita, and Lakshmana",
      },
    ],
  },
  {
    type: "p",
    text: "The compound’s number matches the total of its members: rāmasīte is dual; rāmasītālakṣmaṇāḥ is plural. Gender follows the last member: rāmasīte takes a feminine ending; rāmasītālakṣmaṇāḥ takes a masculine one.",
  },
  { type: "h2", text: "Two types of dvandva" },
  {
    type: "p",
    text: "An itaretara-dvandva (“one-and-another”) simply lists different items together:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामसीतालक्ष्मणाः",
        iast: "rāmasītālakṣmaṇāḥ",
        note: "Rama, Sita, and Lakshmana",
      },
      {
        dev: "फलपुष्पाणि",
        iast: "phalapuṣpāṇi",
        note: "fruits and flowers (phalāni puṣpāṇi ca)",
      },
    ],
  },
  {
    type: "p",
    text: "A samāhāra-dvandva (“collection”) treats the members as standing for a fuller set of ideas. It is always neuter singular:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "आहारनिद्राभयम्",
        iast: "āhāranidrābhayam",
        note: "food, sleep, and fear — animal life in general",
      },
      {
        dev: "पाणिपादम्",
        iast: "pāṇipādam",
        note: "hands and feet — the limbs as a whole",
      },
    ],
  },
  { type: "h2", text: "Other small changes" },
  {
    type: "p",
    text: "A few dvandvas reshape their members slightly:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "मातापितरौ",
        iast: "mātāpitarau",
        note: "mother and father (mātā pitā ca)",
      },
      {
        dev: "मित्रावरुणौ",
        iast: "mitrāvaruṇau",
        note: "Mitra and Varuna (mitro varuṇaḥ ca)",
      },
      {
        dev: "द्यावापृथिवी",
        iast: "dyāvāpṛthivī",
        note: "heaven and earth (dyauḥ pṛthivī ca)",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org dvandva page: the ca paraphrase; number and last-member gender; itaretara vs samāhāra (neuter singular); the printed pairs and the three reshaped forms. Review questions left for drills.",
  },
];
