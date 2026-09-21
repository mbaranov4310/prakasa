/**
 * Drill card provenance:
 * - gajaya: from the reference — instrumental singular (gajā)
 * - gajayai: from the reference — dative singular (gajā)
 * - nadyam: from the reference — locative singular (nadī)
 * - nadinam: from the reference — genitive plural (nadī)
 * - camuh: from the reference — nominative singular (camū)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-aa-ii-uu-stems",
  titleEn: "-ā, -ī, and -ū stems",
  titleIast: "ā-ī-ū",
  lessonId: "nominals-aa-ii-uu-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "gajaya",
      dev: "गजया",
      iast: "gajayā",
      meaning: "with (one) gajā",
      unit: "word",
    },
    {
      id: "gajayai",
      dev: "गजायै",
      iast: "gajāyai",
      meaning: "for (one) gajā",
      unit: "word",
    },
    {
      id: "nadyam",
      dev: "नद्याम्",
      iast: "nadyām",
      meaning: "in (one) nadī",
      unit: "word",
    },
    {
      id: "nadinam",
      dev: "नदीनाम्",
      iast: "nadīnām",
      meaning: "of (many) nadī",
      unit: "word",
    },
    {
      id: "camuh",
      dev: "चमूः",
      iast: "camūḥ",
      meaning: "camū as the subject (one)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
