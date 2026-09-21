import type { LessonBlock } from "../catalog";

export const verblessSentences: LessonBlock[] = [
  {
    type: "p",
    text: "If a sentence has no verb, Sanskrit assumes asti (“is”) by default. These two sentences mean essentially the same thing:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामो राजपुत्रो ऽस्ति", iast: "rāmo rājaputro 'sti", note: "with asti" },
      { dev: "रामो राजपुत्रः", iast: "rāmo rājaputraḥ", note: "verbless" },
    ],
  },
  {
    type: "p",
    text: "Roughly, verbless sentences fall into three types.",
  },
  { type: "h2", text: "Two nominals in case 1" },
  {
    type: "p",
    text: "The most common pattern puts two nominals in case 1: one item is identified with another.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामो राजपुत्रः", iast: "rāmo rājaputraḥ", note: "Rama is a prince" },
      { dev: "रामो बलवान्", iast: "rāmo balavān", note: "Rama is strong" },
    ],
  },
  { type: "h2", text: "Having or owning" },
  {
    type: "p",
    text: "Another common pattern puts one noun in case 6: that noun owns or has the other.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दशरथस्य पुत्रः", iast: "daśarathasya putraḥ", note: "has a son" },
      { dev: "दशरथस्य बलम्", iast: "daśarathasya balam", note: "has strength" },
      { dev: "दशरथस्य नगरम्", iast: "daśarathasya nagaram", note: "has a city" },
      { dev: "दशरथस्य सुखम्", iast: "daśarathasya sukham", note: "has happiness; is happy" },
    ],
  },
  { type: "h2", text: "Other sentences" },
  {
    type: "p",
    text: "Special uninflected words can also build verbless sentences:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अलम् एतेन", iast: "alam etena", note: "Enough of this" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org page: default asti, the with/without contrast, two case-1 nominals, case-6 ownership, and uninflected alam etena. No extra stems or rules.",
  },
];
