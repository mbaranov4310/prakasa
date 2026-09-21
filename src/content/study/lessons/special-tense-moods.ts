import type { LessonBlock } from "../catalog";

export const specialTenseMoods: LessonBlock[] = [
  {
    type: "p",
    text: "A verb root becomes a stem; endings on that stem make a complete verb. The same root can take more than one stem:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नी", iast: "nī", note: "root — lead" },
      { dev: "नय", iast: "naya", note: "stem → नयन्ति nayanti “They lead.”" },
      { dev: "नेष्य", iast: "neṣya", note: "stem → नेष्यामि neṣyāmi “I will lead.”" },
    ],
  },
  {
    type: "p",
    text: "Sanskrit verbs mark five basic kinds of information.",
  },
  { type: "h2", text: "Person, number, and tense-mood" },
  {
    type: "p",
    text: "Person is the verb’s perspective:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति", iast: "nayati", note: "(Someone) leads." },
      { dev: "नयामि", iast: "nayāmi", note: "I lead." },
    ],
  },
  {
    type: "p",
    text: "Number is how many are involved:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति", iast: "nayati", note: "(Someone) leads." },
      { dev: "नयन्ति", iast: "nayanti", note: "They lead." },
    ],
  },
  {
    type: "p",
    text: "Tense-mood combines time and manner:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति", iast: "nayati", note: "(Someone) leads." },
      { dev: "नेष्यति", iast: "neṣyati", note: "(Someone) will lead." },
      { dev: "नयेत्", iast: "nayet", note: "(Someone) might lead." },
    ],
  },
  { type: "h2", text: "Prayoga and pada" },
  {
    type: "p",
    text: "Prayoga is easy to see in pairs like these:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति", iast: "nayati", note: "(Someone) leads. — kartari" },
      { dev: "नीयते", iast: "nīyate", note: "(Someone) is led. — karmaṇi" },
    ],
  },
  {
    type: "p",
    text: "Pada matters for some roots — whose benefit the action serves. Later lessons treat it in full; one contrast:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति", iast: "nayati", note: "leads (for another) — parasmaipada" },
      { dev: "नयते", iast: "nayate", note: "leads (for oneself) — ātmanepada" },
    ],
  },
  { type: "h2", text: "Four special tense-moods" },
  {
    type: "p",
    text: "Sanskrit has ten tense-moods. Four of them share very similar stems in kartari prayoga:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति", iast: "nayati", note: "(Someone) leads." },
      { dev: "नयतु", iast: "nayatu", note: "(Someone) should lead." },
      { dev: "अनयत्", iast: "anayat", note: "(Someone) led." },
      { dev: "नयेत्", iast: "nayet", note: "(Someone) might or could lead." },
    ],
  },
  {
    type: "p",
    text: "They are called special only because of that shared stem. Otherwise they behave like any other verb.",
  },
  { type: "h2", text: "Ten stem patterns" },
  {
    type: "p",
    text: "Those four tense-moods form stems in ten patterns. Each root usually follows one pattern. The most common strengthens the root vowel and adds -a:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नी",
        iast: "nī",
        note: "→ नयति nayati, नयतु nayatu, अनयत् anayat, नयेत् nayet",
      },
    ],
  },
  {
    type: "p",
    text: "Others add a suffix like -aya:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "चुर्",
        iast: "cur",
        note: "→ चोरयति corayati, चोरयतु corayatu, अचोरयत् acorayat, चोरयेत् corayet",
      },
    ],
  },
  {
    type: "p",
    text: "A few change more drastically:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "हु",
        iast: "hu",
        note: "→ जुहोति juhoti, जुहोतु juhotu, अजुहोत् ajuhot, जुहुयात् juhuyāt",
      },
    ],
  },
  {
    type: "p",
    text: "The ten patterns are the ten verb classes. Later lessons take the classes and each of these four tense-moods in turn; this page only maps the overview.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-1/special-tense-moods/: root→stem→verb; the five verb infos (person, number, tense-mood, prayoga, pada) with the printed nī examples; the four special tense-moods; ten stem patterns with nī / cur / hu. No full paradigms or class tables.",
  },
];
