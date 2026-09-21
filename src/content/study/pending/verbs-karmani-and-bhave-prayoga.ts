/**
 * Drill card provenance:
 * - niyate: from the reference — nī → nīyate “is led”
 * - jiyate: from the reference — ji → jīyate “is conquered”
 * - kriyate: from the reference — kṛ → kriyate “is done”
 * - maya-gaja-niyante: from the reference — karmaṇi agreement with plural object
 * - maya-supyate: from the reference — bhāve third-person singular
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-karmani-and-bhave-prayoga",
  titleEn: "karmaṇi and bhāve prayoga",
  titleIast: "karmaṇi",
  lessonId: "verbs-karmani-and-bhave-prayoga",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "niyate",
      dev: "नीयते",
      iast: "nīyate",
      meaning: "is led (nī + ya)",
      unit: "word",
    },
    {
      id: "jiyate",
      dev: "जीयते",
      iast: "jīyate",
      meaning: "is conquered (ji lengthened)",
      unit: "word",
    },
    {
      id: "kriyate",
      dev: "क्रियते",
      iast: "kriyate",
      meaning: "is done (kṛ → kri)",
      unit: "word",
    },
    {
      id: "maya-gaja-niyante",
      dev: "मया गजा नीयन्ते",
      iast: "mayā gajā nīyante",
      meaning: "by me, the elephants are led",
      unit: "word",
    },
    {
      id: "maya-supyate",
      dev: "मया सुप्यते",
      iast: "mayā supyate",
      meaning: "there is sleeping by me (bhāve)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
