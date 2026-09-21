/**
 * Drill card provenance:
 * - ramo-rajaputrah: from the reference — two case-1 nominals (verbless)
 * - ramo-balavan: from the reference — two case-1 nominals
 * - dasarathasya-putrah: from the reference — case-6 ownership
 * - dasarathasya-sukham: from the reference — case-6 ownership
 * - alam-etena: from the reference — uninflected word
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-verbless-sentences",
  titleEn: "Verbless sentences",
  titleIast: "kriyā-rahita",
  lessonId: "sentences-verbless-sentences",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "ramo-rajaputrah",
      dev: "रामो राजपुत्रः",
      iast: "rāmo rājaputraḥ",
      meaning: "Rama is a prince",
      unit: "word",
    },
    {
      id: "ramo-balavan",
      dev: "रामो बलवान्",
      iast: "rāmo balavān",
      meaning: "Rama is strong",
      unit: "word",
    },
    {
      id: "dasarathasya-putrah",
      dev: "दशरथस्य पुत्रः",
      iast: "daśarathasya putraḥ",
      meaning: "Dasharatha has a son",
      unit: "word",
    },
    {
      id: "dasarathasya-sukham",
      dev: "दशरथस्य सुखम्",
      iast: "daśarathasya sukham",
      meaning: "Dasharatha has happiness",
      unit: "word",
    },
    {
      id: "alam-etena",
      dev: "अलम् एतेन",
      iast: "alam etena",
      meaning: "Enough of this",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
