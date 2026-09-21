/**
 * Drill card provenance:
 * - sunoti: from the reference — su present 3rd singular parasmaipada
 * - tanoti: from the reference — tan present 3rd singular parasmaipada
 * - krinati: from the reference — krī present 3rd singular parasmaipada
 * - sunute: from the reference — su present 3rd singular ātmanepada
 * - akrinat: from the reference — krī ordinary past 3rd singular parasmaipada
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-su-tan-and-kri",
  titleEn: "The su, tan, and krī classes",
  titleIast: "svādi",
  lessonId: "verbs-su-tan-and-kri",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "sunoti",
      dev: "सुनोति",
      iast: "sunoti",
      meaning: "su — present 3rd singular, parasmaipada",
      unit: "word",
    },
    {
      id: "tanoti",
      dev: "तनोति",
      iast: "tanoti",
      meaning: "tan — present 3rd singular, parasmaipada",
      unit: "word",
    },
    {
      id: "krinati",
      dev: "क्रीणाति",
      iast: "krīṇāti",
      meaning: "krī — present 3rd singular, parasmaipada",
      unit: "word",
    },
    {
      id: "sunute",
      dev: "सुनुते",
      iast: "sunute",
      meaning: "su — present 3rd singular, ātmanepada",
      unit: "word",
    },
    {
      id: "akrinat",
      dev: "अक्रीणात्",
      iast: "akrīṇāt",
      meaning: "krī — ordinary past 3rd singular, parasmaipada",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
