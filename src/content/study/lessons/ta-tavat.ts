import type { LessonBlock } from "../catalog";

export const taTavat: LessonBlock[] = [
  {
    type: "p",
    text: "Two more common suffixes. Both make adjectives. Also known as the past passive participle, the PPP, or kta.",
  },
  {
    type: "p",
    text: "Add -ta to a root that means “X,” and you usually get a word meaning “(has) been X-ed.” It causes the same sound changes as -tvā:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नीत", iast: "nīta", note: "nī “lead” → led" },
      { dev: "कृत", iast: "kṛta", note: "kṛ “do, make” → done, made" },
    ],
  },
  {
    type: "p",
    text: "-ta usually expresses karmaṇi prayoga — a passive sense in English:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामेण शरः कृतः।",
        iast: "rāmeṇa śaraḥ kṛtaḥ.",
        note: "By Rama, an arrow has been made.",
      },
    ],
  },
  {
    type: "p",
    text: "If the root implies motion, the sense is ordinary kartari prayoga:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गत", iast: "gata", note: "gam “go” → (has) gone" },
    ],
  },
  {
    type: "p",
    text: "The same holds for other roots, especially ones without an object:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "बुद्ध",
        iast: "buddha",
        note: "budh “awaken” → (has) awakened",
      },
    ],
  },
  {
    type: "p",
    text: "On some roots -ta has a more general sense:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "शक्त",
        iast: "śakta",
        note: "śak “be able to” → able, capable",
      },
    ],
  },
  { type: "h2", text: "-tavat" },
  {
    type: "p",
    text: "Also known as the past active participle, or ktavatu̐. The meaning is close to -ta: add it to a root that means “X,” and you usually get “has X-ed.” It takes all the same sound changes that -ta does:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "श्रुतवत्",
        iast: "śrutavat",
        note: "śru “hear” → has heard",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org -ta and -tavat page: both suffixes as adjectives; -ta as PPP/kta with “(has) been X-ed,” -tvā-like sound changes, karmaṇi vs motion/objectless kartari vs general sense, the printed examples including rāmeṇa śaraḥ kṛtaḥ; -tavat as past active / ktavatu̐ with “has X-ed” and śrutavat. No fuller paradigms.",
  },
];
