import type { LessonBlock } from "../catalog";

export const otherTenseMoods: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as ārdhadhātuka verbs. A root becomes a stem; endings on that stem make a full verb:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नी → नेष्य → नेष्यामि",
        iast: "nī → neṣya → neṣyāmi",
        note: "lead → will lead → I will lead",
      },
      {
        dev: "नी → निनी → निन्युः",
        iast: "nī → ninī → ninyuḥ",
        note: "lead → led (long ago) → they led (long ago)",
      },
    ],
  },
  {
    type: "p",
    text: "Sanskrit verbs mark five kinds of information: person, number, tense-mood, prayoga, and pada.",
  },
  {
    type: "p",
    text: "Of the ten tense-moods, four (the special ones) use similar kartari stems that depend on the root’s verb class:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नी → नय → नयति", iast: "nī → naya → nayati", note: "bhū class" },
      { dev: "सु → सुनु → सुनोति", iast: "su → sunu → sunoti", note: "su class" },
      {
        dev: "क्री → क्रीणा → क्रीणाति",
        iast: "krī → krīṇā → krīṇāti",
        note: "krī class",
      },
    ],
  },
  {
    type: "p",
    text: "The other six form stems the same way for every class. Different classes, same steps:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नी → नेष्यति", iast: "nī → neṣyati" },
      { dev: "सु → सोष्यति", iast: "su → soṣyati" },
      { dev: "क्री → क्रेष्यति", iast: "krī → kreṣyati" },
    ],
  },
  {
    type: "p",
    text: "This topic covers those six tense-moods.",
  },
  { type: "h2", text: "Common behavior for the six" },
  {
    type: "p",
    text: "For the special tense-moods, karmaṇi and bhāve prayoga use a special stem with -ya:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयसि", iast: "nayasi", note: "You lead. (kartari)" },
      { dev: "नीयसे", iast: "nīyase", note: "You are led. (karmaṇi)" },
    ],
  },
  {
    type: "p",
    text: "For the other tense-moods, the stem stays the same; karmaṇi is shown with ātmanepada endings:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नेष्यति।", iast: "neṣyati.", note: "You will lead." },
      { dev: "नेष्यते।", iast: "neṣyate.", note: "You will be led." },
    ],
  },
  {
    type: "p",
    text: "Many verbs insert an extra i between root and ending. Traditional grammar calls that iṭ:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "भू → भविष्यसि",
        iast: "bhū → bhaviṣyasi",
        note: "bhav-i-ṣyasi — you will become",
      },
      {
        dev: "स्मृ → स्मरिष्यसि",
        iast: "smṛ → smariṣyasi",
        note: "smar-i-ṣyasi — you will remember",
      },
    ],
  },
  {
    type: "ul",
    items: [
      "seṭ (sa-iṭ, “with iṭ”) — always use iṭ",
      "aniṭ (an-iṭ, “without iṭ”) — never use iṭ",
      "veṭ (vā-iṭ, “optional iṭ”) — use iṭ optionally",
    ],
  },
  {
    type: "p",
    text: "Roots ending in -e, -ai, or -au change that vowel to -ā:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गै → गास्यति", iast: "gai → gāsyati", note: "sing → will sing" },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-2/other-tense-moods/: ārdhadhātuka overview; root→stem→verb; ten tense-moods with class-dependent four vs general six; karmaṇi via -ya vs ātmanepada; iṭ (seṭ/aniṭ/veṭ); -e/-ai/-au → -ā. No individual tense-mood paradigms.",
  },
];
