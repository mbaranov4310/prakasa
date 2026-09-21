import type { LessonBlock } from "../catalog";

export const compoundSystem: LessonBlock[] = [
  {
    type: "p",
    text: "Compounds (samāsa) join several words into one. Usually two words combine at a time:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामस्य माता", iast: "rāmasya mātā", note: "separate" },
      { dev: "राममाता", iast: "rāmamātā", note: "compound — Rama's mother" },
    ],
  },
  {
    type: "p",
    text: "A compound can itself join another word, and the process can repeat. Some styles of Sanskrit use very long compounds:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "राममातुर् गृहम्", iast: "rāmamātur gṛham", note: "separate" },
      {
        dev: "राममातृगृहम्",
        iast: "rāmamātṛgṛham",
        note: "compound — Rama's mother's house",
      },
    ],
  },
  {
    type: "p",
    text: "Compounds are compact, but they lose information. Both “the elephant's fruit” and “the elephants' fruit” become the same form:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गजस्य फलम्", iast: "gajasya phalam", note: "one elephant" },
      { dev: "गजानां फलम्", iast: "gajānāṃ phalam", note: "many elephants" },
      { dev: "गजफलम्", iast: "gajaphalam", note: "either → elephant fruit" },
    ],
  },
  {
    type: "p",
    text: "When context is clear, that shortness saves time; in a complex sentence a compound can even make the sense easier to follow. Compounds are common in Sanskrit, especially in later compositions.",
  },
  { type: "h2", text: "Four types" },
  {
    type: "p",
    text: "Sanskrit compounds have four basic types. Later lessons take each one in turn.",
  },
  {
    type: "p",
    text: "Dvandva — words that could be joined with “and”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामः सीता च", iast: "rāmaḥ sītā ca", note: "separate" },
      { dev: "रामसीते", iast: "rāmasīte", note: "Rama and Sita" },
      {
        dev: "रामसीतालक्ष्मणाः",
        iast: "rāmasītālakṣmaṇāḥ",
        note: "Rama, Sita, and Lakshmana",
      },
    ],
  },
  {
    type: "p",
    text: "Tatpuruṣa — the first word modifies the second (a chessboard is a kind of board, not a kind of chess):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "राममाता", iast: "rāmamātā", note: "Rama's mother" },
      { dev: "रामपुत्रः", iast: "rāmaputraḥ", note: "Rama's son" },
    ],
  },
  {
    type: "p",
    text: "Bahuvrīhi — both members together describe someone not named in the compound (like English “graybeard”):",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "महारथः",
        iast: "mahārathaḥ",
        note: "whose chariot is great → a great warrior",
      },
      {
        dev: "स्थितप्रज्ञः",
        iast: "sthitaprajñaḥ",
        note: "whose discernment is stable",
      },
    ],
  },
  {
    type: "p",
    text: "Avyayībhāva — yields an uninflected word; the first member is usually uninflected already:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "उपकृष्णम्", iast: "upakṛṣṇam", note: "near Krishna" },
      { dev: "यथोक्तम्", iast: "yathoktam", note: "as it was said" },
    ],
  },
  { type: "h2", text: "How to tell them apart" },
  {
    type: "p",
    text: "With practice the types become instinctive. Until then:",
  },
  {
    type: "ul",
    items: [
      "Dvandva members are usually the same kind of thing — all people, all animals, all weapons, and so on.",
      "An avyayībhāva usually begins with an uninflected word (yathāśakti “according to one's power”).",
      "A bahuvrīhi is an adjective. It may agree with a masculine noun even when its second member comes from a feminine (sthitaprajñaḥ from sthitā prajñā).",
      "Otherwise watch what the compound agrees with in gender, case, and number. In dṛḍha-vrato rāmo gacchati, “Rama who is firm-vowed” (bahuvrīhi) fits; “Rama who is a firm vow” (tatpuruṣa) does not.",
    ],
  },
  {
    type: "p",
    text: "In older Sanskrit, bahuvrīhi and tatpuruṣa have different accent patterns, so they are easier to tell apart. Later Sanskrit does not mark those accents clearly.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org overview: what a samāsa is; nesting; lost case/number detail vs compactness; the four types with the printed examples; tips for telling types apart; older accent contrast. No full type paradigms.",
  },
];
