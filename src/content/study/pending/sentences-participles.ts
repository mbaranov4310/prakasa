/**
 * Drill card provenance:
 * - kurvan: from the reference — present participle “while doing”
 * - karisyan: from the reference — future participle “about to do”
 * - krtam: from the reference — past passive “(has been) done”
 * - krtavan: from the reference — past active “(has) done”
 * - kartavyam: from the reference — gerundive “should or must be done”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-participles",
  titleEn: "Participles",
  titleIast: "kṛdanta",
  lessonId: "sentences-participles",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kurvan",
      dev: "कुर्वन्",
      iast: "kurvan",
      meaning: "while doing",
      unit: "word",
    },
    {
      id: "karisyan",
      dev: "करिष्यन्",
      iast: "kariṣyan",
      meaning: "about to do",
      unit: "word",
    },
    {
      id: "krtam",
      dev: "कृतम्",
      iast: "kṛtam",
      meaning: "(has been) done",
      unit: "word",
    },
    {
      id: "krtavan",
      dev: "कृतवान्",
      iast: "kṛtavān",
      meaning: "(has) done",
      unit: "word",
    },
    {
      id: "kartavyam",
      dev: "कर्तव्यम्",
      iast: "kartavyam",
      meaning: "should or must be done",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
