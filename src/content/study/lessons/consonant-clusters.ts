import type { LessonBlock } from "../catalog";

export const consonantClusters: LessonBlock[] = [
  {
    type: "p",
    text: "A cluster is two or more consonants with no vowel between them. Sanskrit uses them constantly, so Devanagari has many stacked and fused shapes. Fonts differ; learn the pattern, then the odd ones.",
  },
  { type: "h2", text: "Learn these two first" },
  {
    type: "p",
    text: "क्ष and ज्ञ do not look like their parts. You cannot guess them, so they have to be memorized.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "क्ष", iast: "kṣa", note: "k + ṣa" },
      { dev: "ज्ञ", iast: "jña", note: "j + ña" },
    ],
  },
  { type: "h2", text: "The usual pattern" },
  {
    type: "p",
    text: "Most consonants have a vertical line on the right. The first consonant in a cluster often drops that line and joins the next:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "त्स", iast: "tsa" },
      { dev: "ण्ड", iast: "ṇḍa" },
      { dev: "स्त", iast: "sta" },
    ],
  },
  {
    type: "p",
    text: "If ra comes first, it becomes a hook above the next letter. If ra comes second, it is a tick on the first letter — unless that letter is a “hoop” shape such as ट, which uses a different ra mark.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "र्त", iast: "rta", note: "ra first" },
      { dev: "र्म", iast: "rma" },
      { dev: "प्र", iast: "pra", note: "ra second" },
      { dev: "त्र", iast: "tra" },
      { dev: "ट्र", iast: "ṭra", note: "hoop + ra" },
    ],
  },
  {
    type: "p",
    text: "na as the second letter often looks like that same tick. śa as the first letter shrinks and sits on top. ṣa often stacks. da plus a voiced aspirate usually dangles the second letter underneath.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "प्न", iast: "pna" },
      { dev: "श्र", iast: "śra" },
      { dev: "ष्ट", iast: "ṣṭa" },
      { dev: "द्ध", iast: "ddha", note: "d + dha" },
      { dev: "क्त", iast: "kta" },
      { dev: "त्त", iast: "tta" },
    ],
  },
  {
    type: "note",
    text: "Three-letter clusters exist (स्त्र, त्त्र, and others). Drill the two-letter shapes first; the longer ones reuse the same pieces.",
  },
];
