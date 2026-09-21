/**
 * Drill card provenance:
 * - jigamisami: from the reference — जिगमिषामि “I want to go”
 * - cikirsami: from the reference — चिकीर्षामि “I want to do” (parasmaipada)
 * - lipsase: from the reference — लिप्ससे “you want to obtain”
 * - cikirsanti: from the reference — चिकीर्षन्ति “they want to do”
 * - titiksati: from the reference — तितिक्षति “endures” (tij, idiomatic)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-desiderative-roots",
  titleEn: "Desiderative roots",
  titleIast: "sananta",
  lessonId: "verbs-desiderative-roots",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "jigamisami",
      dev: "जिगमिषामि",
      iast: "jigamiṣāmi",
      meaning: "I want to go",
      unit: "word",
    },
    {
      id: "cikirsami",
      dev: "चिकीर्षामि",
      iast: "cikīrṣāmi",
      meaning: "I want to do (parasmaipada)",
      unit: "word",
    },
    {
      id: "lipsase",
      dev: "लिप्ससे",
      iast: "lipsase",
      meaning: "you want to obtain",
      unit: "word",
    },
    {
      id: "cikirsanti",
      dev: "चिकीर्षन्ति",
      iast: "cikīrṣanti",
      meaning: "they want to do",
      unit: "word",
    },
    {
      id: "titiksati",
      dev: "तितिक्षति",
      iast: "titikṣati",
      meaning: "endures (tij, idiomatic)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
