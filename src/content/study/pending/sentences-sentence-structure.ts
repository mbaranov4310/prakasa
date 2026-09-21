/**
 * Drill card provenance:
 * - gacchati: from the reference — basic single-verb sentence
 * - ramo-gacchati: from the reference — nominal subject added
 * - ramo-vanam-gacchati: from the reference — destination added
 * - mataram-gacchati: from the reference — subject omitted by context
 * - ramo-balavan: from the reference — verbless sentence (asti assumed)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-sentence-structure",
  titleEn: "Sentence structure",
  titleIast: "vākya",
  lessonId: "sentences-sentence-structure",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "gacchati",
      dev: "गच्छति",
      iast: "gacchati",
      meaning: "(Someone) goes — basic sentence as a single verb",
      unit: "word",
    },
    {
      id: "ramo-gacchati",
      dev: "रामो गच्छति",
      iast: "rāmo gacchati",
      meaning: "Rama goes",
      unit: "word",
    },
    {
      id: "ramo-vanam-gacchati",
      dev: "रामो वनं गच्छति",
      iast: "rāmo vanaṃ gacchati",
      meaning: "Rama goes to the forest",
      unit: "word",
    },
    {
      id: "mataram-gacchati",
      dev: "मातरं गच्छति",
      iast: "mātaraṃ gacchati",
      meaning: "He goes to his mother (subject clear from context)",
      unit: "word",
    },
    {
      id: "ramo-balavan",
      dev: "रामो बलवान्",
      iast: "rāmo balavān",
      meaning: "Rama is strong (verbless; asti assumed)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
