import type { LessonBlock } from "../catalog";

export const intensiveRoots: LessonBlock[] = [
  {
    type: "p",
    text: "Also called frequentative roots, or yaṅanta (“ending in the affix yaṅ”). An intensive root marks an action done intensely or repeatedly:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "लपति", iast: "lapati", note: "laments" },
      { dev: "लालप्यते", iast: "lālapyate", note: "repeatedly laments" },
    ],
  },
  {
    type: "p",
    text: "With verbs of motion, the intensive often means crooked or difficult motion:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "जङ्गम्यते", iast: "jaṅgamyate", note: "goes crookedly" },
    ],
  },
  {
    type: "p",
    text: "For some roots it marks blameworthy or inept action:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "लोलुप्यते", iast: "lolupyate", note: "cuts badly" },
    ],
  },
  {
    type: "p",
    text: "Parasmaipada intensives exist but are rare. This lesson sticks to ātmanepada forms.",
  },
  { type: "h2", text: "Making the root" },
  {
    type: "p",
    text: "Roots that begin with a vowel, and roots of the cur class, generally cannot form intensives. Most other roots can.",
  },
  {
    type: "p",
    text: "Formation uses a special doubling. First add -ya (with the same root changes as karmaṇi prayoga -ya):",
  },
  {
    type: "glyphs",
    items: [{ dev: "लुप्", iast: "lup", note: "→ lupya" }],
  },
  {
    type: "p",
    text: "Then double by the ordinary rules:",
  },
  {
    type: "glyphs",
    items: [{ dev: "लुप्य", iast: "lupya", note: "→ lu lupya" }],
  },
  {
    type: "p",
    text: "Finally strengthen the doubled syllable’s vowel:",
  },
  {
    type: "glyphs",
    items: [{ dev: "लोलुप्य", iast: "lolupya", note: "intensive root" }],
  },
  {
    type: "p",
    text: "More examples:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "बोभूय", iast: "bobhūya", note: "bhū — repeatedly be" },
      { dev: "चेक्रीय", iast: "cekrīya", note: "kṛ — repeatedly do" },
    ],
  },
  {
    type: "p",
    text: "A common pattern when ṛ is the middle vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सरीसृप्य", iast: "sarīsṛpya", note: "sṛp — creep along" },
      { dev: "वरीवृत्य", iast: "varīvṛtya", note: "vṛt — repeatedly turn" },
      { dev: "नरीनृत्य", iast: "narīnṛtya", note: "nṛt — repeatedly dance" },
    ],
  },
  { type: "h2", text: "Using the root" },
  {
    type: "p",
    text: "Intensives take ātmanepada endings:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "जङ्गम्यते", iast: "jaṅgamyate", note: "goes crookedly" },
    ],
  },
  {
    type: "p",
    text: "In the special tense-moods, treat the intensive like a div-class root:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नरीनृत्येत",
        iast: "narīnṛtyeta",
        note: "might repeatedly dance",
      },
    ],
  },
  {
    type: "p",
    text: "For the distant past, use the suffix -ām:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "लोलुप्यां चक्रे",
        iast: "lolupyāṃ cakre",
        note: "cut badly (long ago)",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org intensive roots (yaṅanta): intense/frequent sense; motion and blameworthy shades; ātmanepada focus; -ya + doubling + strengthen steps (lup → lolupya); bobhūya, cekrīya; ṛ-middle pattern (sarīsṛpya, varīvṛtya, narīnṛtya); div-class special tense-moods and distant-past -ām. No paradigm tables beyond the printed forms.",
  },
];
