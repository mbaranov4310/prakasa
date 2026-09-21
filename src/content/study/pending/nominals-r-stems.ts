/**
 * Drill card provenance:
 * - pita-nom: from the reference — nominative singular
 * - matrrh-acc: from the reference — accusative plural
 * - kartra-ins: from the reference — instrumental singular
 * - pituh-gen: from the reference — genitive singular
 * - bhratuh-gen: composed — genitive singular (bhrātṛ + -uḥ as in pituḥ / kartuḥ)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-r-stems",
  titleEn: "-ṛ stems",
  titleIast: "ṛ",
  lessonId: "nominals-r-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "pita-nom",
      dev: "पिता",
      iast: "pitā",
      meaning: "father (subject)",
      unit: "word",
    },
    {
      id: "matrrh-acc",
      dev: "मातॄः",
      iast: "mātṝḥ",
      meaning: "(many) mothers (object)",
      unit: "word",
    },
    {
      id: "kartra-ins",
      dev: "कर्त्रा",
      iast: "kartrā",
      meaning: "with (one) doer",
      unit: "word",
    },
    {
      id: "pituh-gen",
      dev: "पितुः",
      iast: "pituḥ",
      meaning: "of (one) father",
      unit: "word",
    },
    {
      id: "bhratuh-gen",
      dev: "भ्रातुः",
      iast: "bhrātuḥ",
      meaning: "of (one) brother",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
