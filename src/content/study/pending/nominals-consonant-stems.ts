/**
 * Drill card provenance:
 * - maruti: from the reference — locative singular of marut
 * - bhagavan-nom: from the reference — nominative singular of bhagavat
 * - atmane: from the reference — dative singular of ātman
 * - yogina: from the reference — instrumental singular of yogin
 * - vidusa: from the reference — instrumental singular of vidvas
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-consonant-stems",
  titleEn: "Consonant stems",
  titleIast: "halanta",
  lessonId: "nominals-consonant-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "maruti",
      dev: "मरुति",
      iast: "maruti",
      meaning: "in (one) marut",
      unit: "word",
    },
    {
      id: "bhagavan-nom",
      dev: "भगवान्",
      iast: "bhagavān",
      meaning: "subject (one) bhagavat",
      unit: "word",
    },
    {
      id: "atmane",
      dev: "आत्मने",
      iast: "ātmane",
      meaning: "for (one) ātman",
      unit: "word",
    },
    {
      id: "yogina",
      dev: "योगिना",
      iast: "yoginā",
      meaning: "with (one) yogin",
      unit: "word",
    },
    {
      id: "vidusa",
      dev: "विदुषा",
      iast: "viduṣā",
      meaning: "with (one) vidvas",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
