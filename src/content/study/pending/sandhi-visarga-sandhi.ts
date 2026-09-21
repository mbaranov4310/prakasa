import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

// Drill provenance (criticize these):
// - balas-carati: from the reference — common: ḥ → ś before c/ch
// - naras-madyam: from the reference — -as + voiced consonant → o
// - naras-amrtam: from the reference — -as + a → o '
// - agnis-asti: from the reference — otherwise ḥ → r before voiced
// - ramas-gacchati: composed — review prompt rāmaḥ gacchati; -as + voiced consonant → o

export const pendingDeck = {
  id: "sandhi-visarga-sandhi",
  titleEn: "visarga sandhi",
  titleIast: "visarga-sandhi",
  lessonId: "sandhi-visarga-sandhi",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "balas-carati",
      dev: "बालश् चरति",
      iast: "bālaś carati",
      meaning: "bālaḥ + carati",
      unit: "sandhi",
    },
    {
      id: "naras-madyam",
      dev: "नरो मद्यं",
      iast: "naro madyaṃ",
      meaning: "naraḥ + madyaṃ",
      unit: "sandhi",
    },
    {
      id: "naras-amrtam",
      dev: "नरोऽमृतं",
      iast: "naro 'mṛtaṃ",
      meaning: "naraḥ + amṛtaṃ",
      unit: "sandhi",
    },
    {
      id: "agnis-asti",
      dev: "अग्निर् अस्ति",
      iast: "agnir asti",
      meaning: "agniḥ + asti",
      unit: "sandhi",
    },
    {
      id: "ramas-gacchati",
      dev: "रामो गच्छति",
      iast: "rāmo gacchati",
      meaning: "rāmaḥ + gacchati",
      unit: "sandhi",
    },
  ] as QuizDeckItem[],
};
