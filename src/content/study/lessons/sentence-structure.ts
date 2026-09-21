import type { LessonBlock } from "../catalog";

export const sentenceStructure: LessonBlock[] = [
  {
    type: "p",
    text: "A sentence is a meaningful expression built from one or more words. Sounds make a word; words make a sentence. These lessons watch how words work together for meaning.",
  },
  { type: "h2", text: "A basic sentence" },
  {
    type: "p",
    text: "The simplest Sanskrit sentence is a single verb:",
  },
  {
    type: "glyphs",
    items: [{ dev: "गच्छति।", iast: "gacchati.", note: "(Someone) goes." }],
  },
  {
    type: "p",
    text: "Other words extend or modify that action. A nominal can name who goes:",
  },
  {
    type: "glyphs",
    items: [{ dev: "रामो गच्छति।", iast: "rāmo gacchati.", note: "Rama goes." }],
  },
  {
    type: "p",
    text: "Or where the action goes:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो वनं गच्छति।",
        iast: "rāmo vanaṃ gacchati.",
        note: "Rama goes to the forest.",
      },
    ],
  },
  {
    type: "p",
    text: "Or several kinds of detail at once:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो सीतया सह वनम् अयोध्यायाः पित्रे गच्छति।",
        iast: "rāmo sītayā saha vanam ayodhyāyāḥ pitre gacchati.",
        note: "Rama goes with Sita to the forest from Ayodhya for his father.",
      },
    ],
  },
  {
    type: "p",
    text: "Each added nominal adds detail to the original action.",
  },
  { type: "h2", text: "Sentence context" },
  {
    type: "p",
    text: "Words that context already makes clear are often left out:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो मातरं गच्छति।",
        iast: "rāmo mātaraṃ gacchati.",
        note: "Rama goes to his mother.",
      },
      {
        dev: "रामो हस्तं पश्यति।",
        iast: "rāmo hastaṃ paśyati.",
        note: "Rama looks at his hand.",
      },
    ],
  },
  {
    type: "p",
    text: "If it is clear that rāma is the subject, even that word can drop:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "मातरं गच्छति।",
        iast: "mātaraṃ gacchati.",
        note: "He goes to his mother.",
      },
      {
        dev: "हस्तं पश्यति।",
        iast: "hastaṃ paśyati.",
        note: "He looks at his hand.",
      },
    ],
  },
  { type: "h2", text: "Verbless sentences" },
  {
    type: "p",
    text: "With a verb like asti (“is”), one thing can be said to be another:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो राजपुत्रो ऽस्ति।",
        iast: "rāmo rājaputro 'sti.",
        note: "Rama is a prince.",
      },
      {
        dev: "रामो बलवान् अस्ति।",
        iast: "rāmo balavān asti.",
        note: "Rama is strong.",
      },
    ],
  },
  {
    type: "p",
    text: "If there is no verb, asti is assumed. The same ideas can drop the verb:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो राजपुत्रः।",
        iast: "rāmo rājaputraḥ.",
        note: "Rama is a prince.",
      },
      {
        dev: "रामो बलवान्।",
        iast: "rāmo balavān.",
        note: "Rama is strong.",
      },
    ],
  },
  {
    type: "p",
    text: "Sentences without a verb are sometimes called verbless sentences; a later lesson returns to them.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org sentence-structure page: basic verb sentence, adding nominals for agent/destination/detail, context omission, and verbless sentences with assumed asti. No extra paradigms.",
  },
];
