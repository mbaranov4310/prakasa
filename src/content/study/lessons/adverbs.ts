import type { LessonBlock } from "../catalog";

export const adverbs: LessonBlock[] = [
  {
    type: "p",
    text: "Adverbs are uninflected words that describe how an action is done:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "गजो मन्दं चरति",
        iast: "gajo mandaṃ carati",
        note: "The elephant walks slowly.",
      },
    ],
  },
  {
    type: "p",
    text: "Any adjective becomes an adverb in its neuter case-1 singular form:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "मृदु",
        iast: "mṛdu",
        note: "soft →",
      },
      {
        dev: "स मृदु भाषते",
        iast: "sa mṛdu bhāṣate",
        note: "He speaks softly.",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org adverbs page: adverbs as uninflected manner words; the gajo mandaṃ carati example; and the rule that an adjective’s neuter case-1 singular is the adverb, with mṛdu → sa mṛdu bhāṣate.",
  },
];
