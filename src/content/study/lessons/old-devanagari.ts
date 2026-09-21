import type { LessonBlock } from "../catalog";

export const oldDevanagari: LessonBlock[] = [
  {
    type: "p",
    text: "Some older printed books draw a few letters differently. The ones that used to wander are अ, आ, ओ, औ, झ, and ण. Those were other drawings of the same letters, not a second alphabet.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अ", iast: "a" },
      { dev: "आ", iast: "ā" },
      { dev: "ओ", iast: "o" },
      { dev: "औ", iast: "au" },
      { dev: "झ", iast: "jha" },
      { dev: "ण", iast: "ṇa" },
    ],
  },
  {
    type: "p",
    text: "This reader uses ordinary modern Unicode. You do not need the old drawings to study the mantras here. If you open a 19th-century lithograph and अ or झ looks unfamiliar, that is this lesson, not a different sound.",
  },
  {
    type: "note",
    text: "The guide shows scans of the old shapes. We do not copy those pictures; the letters above are the modern forms this site actually uses. Practice checks the idea, not a second glyph set we cannot encode.",
  },
];
