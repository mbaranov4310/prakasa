import type { LessonBlock } from "../catalog";

export const otherRootSuffixes: LessonBlock[] = [
  {
    type: "p",
    text: "Other common root suffixes, in alphabetical order: -a, -aka, -ana, -in, -tṛ, -tra.",
  },
  { type: "h2", text: "-a" },
  {
    type: "p",
    text: "Also known as ghañ. -a makes abstract nouns with masculine endings. On a root meaning “X,” it yields “the state of X-ing”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "भू", iast: "bhū", note: "be, become" },
      { dev: "भाव", iast: "bhāva", note: "the state of being or becoming; existence" },
      { dev: "मृ", iast: "mṛ", note: "die" },
      { dev: "मार", iast: "māra", note: "death" },
      { dev: "आनन्द्", iast: "ānand", note: "feel blissful" },
      { dev: "आनन्द", iast: "ānanda", note: "bliss" },
    ],
  },
  {
    type: "p",
    text: "In this sense -a often turns a root’s final c and j into k and g:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "युज्", iast: "yuj", note: "root" },
      { dev: "योग", iast: "yoga", note: "yuj + -a (j → g)" },
      { dev: "शुच्", iast: "śuc", note: "grieve" },
      { dev: "शोक", iast: "śoka", note: "grief, sorrow" },
      { dev: "त्यज्", iast: "tyaj", note: "abandon" },
      { dev: "त्याग", iast: "tyāga", note: "abandonment, relinquishment" },
    ],
  },
  { type: "h2", text: "-aka" },
  {
    type: "p",
    text: "Also known as ṇvul. -aka (feminine -ikā) makes adjectives meaning “one who does X”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृ", iast: "kṛ", note: "do" },
      { dev: "कारक", iast: "kāraka", note: "doer" },
      { dev: "पच्", iast: "pac", note: "cook" },
      { dev: "पाचक", iast: "pācaka", note: "cooker" },
    ],
  },
  { type: "h2", text: "-ana" },
  {
    type: "p",
    text: "Also known as lyuṭ or lyu. -ana usually makes abstract neuter nouns meaning “the act of doing X”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृ", iast: "kṛ", note: "do" },
      { dev: "करण", iast: "karaṇa", note: "act of doing; action" },
      { dev: "इ", iast: "i", note: "go" },
      { dev: "अयन", iast: "ayana", note: "act of going; journey" },
      { dev: "मृ", iast: "mṛ", note: "die" },
      { dev: "मरण", iast: "maraṇa", note: "act of dying; death" },
    ],
  },
  {
    type: "p",
    text: "-ana also makes adjectives (feminine -anī) meaning “one who does X”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृ", iast: "kṛ", note: "do" },
      {
        dev: "करण",
        iast: "karaṇa",
        note: "one that does or causes; the means of an action",
      },
      { dev: "मृद्", iast: "mṛd", note: "crush" },
      { dev: "मर्दन", iast: "mardana", note: "one who crushes or pulverizes" },
    ],
  },
  { type: "h2", text: "-in" },
  {
    type: "p",
    text: "-in (feminine -inī) makes adjectives meaning “one who does X”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृ", iast: "kṛ", note: "do" },
      { dev: "कारिन्", iast: "kārin", note: "doing" },
    ],
  },
  { type: "h2", text: "-tṛ" },
  {
    type: "p",
    text: "Also known as tṛc. -tṛ (feminine -trī) makes adjectives meaning “one who does X”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृ", iast: "kṛ", note: "do" },
      { dev: "कर्तृ", iast: "kartṛ", note: "doer, agent" },
      { dev: "नी", iast: "nī", note: "lead" },
      { dev: "नेतृ", iast: "netṛ", note: "leader" },
      { dev: "युध्", iast: "yudh", note: "fight" },
      { dev: "योद्धृ", iast: "yoddhṛ", note: "fighter" },
    ],
  },
  {
    type: "p",
    text: "The case 7 singular of kartṛ is kartari — as in kartari prayoga, “usage in (the sense of) agent.”",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कर्तरि", iast: "kartari", note: "case 7 singular of kartṛ" },
      {
        dev: "कर्तरि प्रयोग",
        iast: "kartari prayoga",
        note: "usage in (the sense of) agent",
      },
    ],
  },
  { type: "h2", text: "-tra" },
  {
    type: "p",
    text: "Also known as ṣṭran. -tra usually makes neuter nouns meaning “the means of doing X”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नी", iast: "nī", note: "lead" },
      { dev: "नेत्र", iast: "netra", note: "by which one is led; an eye" },
      { dev: "मन्", iast: "man", note: "think" },
      {
        dev: "मन्त्र",
        iast: "mantra",
        note: "by which thought occurs; a mantra",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org other root suffixes: -a (ghañ) abstracts with c/j → k/g; -aka (ṇvul); -ana (lyuṭ/lyu) nouns and adjectives; -in; -tṛ (tṛc) with kartari prayoga; -tra (ṣṭran). Only the printed roots and derivatives.",
  },
];
