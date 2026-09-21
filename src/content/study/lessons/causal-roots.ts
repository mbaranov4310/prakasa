import type { LessonBlock } from "../catalog";

export const causalRoots: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as causative roots, or ṇijanta (“ending in the ṇic affix”). Derived roots change a root’s meaning; once formed, they behave like ordinary verb roots. The causal root is among the most common.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नी → नायि → नाययति",
        iast: "nī → nāyi → nāyayati",
        note: "lead → make lead → they make (someone) lead",
      },
      {
        dev: "चर् → चारि → चारयति",
        iast: "car → cāri → cārayati",
        note: "walk → make walk → they make (someone) walk",
      },
    ],
  },
  {
    type: "p",
    text: "Some causal forms also carry an idiomatic sense:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "गमयति",
        iast: "gamayati",
        note: "makes go; passes (time), leads (someone)",
      },
    ],
  },
  { type: "h2", text: "Making the root" },
  {
    type: "p",
    text: "Form the causal root by adding -i to the original root. Roots that end in a vowel strengthen to the strongest grade:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नी → नायि", iast: "nī → nāyi", note: "lead → make lead" },
      { dev: "भू → भावि", iast: "bhū → bhāvi", note: "become → make become" },
      { dev: "कृ → कारि", iast: "kṛ → kāri", note: "do → make do" },
    ],
  },
  {
    type: "p",
    text: "Other vowels often strengthen to e or o:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "शुच् → शोचि", iast: "śuc → śoci", note: "grieve → make grieve" },
    ],
  },
  {
    type: "p",
    text: "Roots that end in -ā generally insert an extra -p-. Roots that end in -e, -ai, or -o change that final vowel to -ā:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "स्था → स्थापि", iast: "sthā → sthāpi", note: "stand → make stand" },
      { dev: "गै → गापि", iast: "gai → gāpi", note: "sing → make sing" },
      { dev: "दा → दापि", iast: "dā → dāpi", note: "give → make give" },
    ],
  },
  {
    type: "p",
    text: "A few roots change irregularly:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गम् → गमि", iast: "gam → gami", note: "go → make go" },
      {
        dev: "हन् → घाति",
        iast: "han → ghāti",
        note: "kill, strike → make strike",
      },
    ],
  },
  { type: "h2", text: "Using the root" },
  {
    type: "p",
    text: "Treat the causal root like a bhū-class root. It can take either parasmaipada or ātmanepada endings:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "कारि → कारयति",
        iast: "kāri → kārayati",
        note: "make do → makes do",
      },
      {
        dev: "कारि → कारयिष्यति",
        iast: "kāri → kārayiṣyati",
        note: "make do → will make do",
      },
      {
        dev: "कारि → कारयां चकार",
        iast: "kāri → kārayāṃ cakāra",
        note: "make do → made do (long ago)",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org causal-roots page: ṇijanta name; overview examples nī/car and idiomatic gamayati; -i formation with strongest-grade vowel roots, e/o strengthening, -ā/-e/-ai/-o patterns with -p-, irregulars gam and han; bhū-class use with kārayati, kārayiṣyati, and kārayāṃ cakāra. No extra roots or paradigms.",
  },
];
