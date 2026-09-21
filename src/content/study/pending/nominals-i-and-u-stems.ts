/**
 * Drill card provenance:
 * - sucih: from the reference — nominative singular (masculine śuci)
 * - sucina: from the reference — instrumental singular (masculine śuci)
 * - agneh: composed — genitive singular; agni + -eḥ as in śuceḥ
 * - madhave: from the reference — dative singular (masculine madhu)
 * - sucini: from the reference — nominative plural (neuter śuci)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-i-and-u-stems",
  titleEn: "-i and -u stems",
  titleIast: "i-u",
  lessonId: "nominals-i-and-u-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "sucih",
      dev: "शुचिः",
      iast: "śuciḥ",
      meaning: "pure (masc.) as subject (one)",
      unit: "word",
    },
    {
      id: "sucina",
      dev: "शुचिना",
      iast: "śucinā",
      meaning: "with (one) pure (masc.)",
      unit: "word",
    },
    {
      id: "agneh",
      dev: "अग्नेः",
      iast: "agneḥ",
      meaning: "of (one) agni",
      unit: "word",
    },
    {
      id: "madhave",
      dev: "मधवे",
      iast: "madhave",
      meaning: "for (one) sweet (masc.)",
      unit: "word",
    },
    {
      id: "sucini",
      dev: "शुचीनि",
      iast: "śucīni",
      meaning: "pure (neut.) as subject (many)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
