/**
 * Drill card provenance:
 * - yathasakti: from the reference — yathā + śakti → according to one's power
 * - pratipadam: from the reference — prati + padam → at every word, for each word
 * - yavajjivam: from the reference — yāvat + jīvam → throughout one's life
 * - avyayibhava: from the reference — literal sense “uninflected state”
 * - yatha: from the reference — first-member gloss “according to”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-avyayibhava",
  titleEn: "The avyayībhāva",
  titleIast: "avyayībhāva",
  lessonId: "compounds-the-avyayibhava",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "yathasakti",
      dev: "यथाशक्ति",
      iast: "yathāśakti",
      meaning: "according to one's power",
      unit: "word",
    },
    {
      id: "pratipadam",
      dev: "प्रतिपदम्",
      iast: "pratipadam",
      meaning: "at every word; for each word",
      unit: "word",
    },
    {
      id: "yavajjivam",
      dev: "यावज्जीवम्",
      iast: "yāvajjīvam",
      meaning: "throughout one's life",
      unit: "word",
    },
    {
      id: "avyayibhava",
      dev: "अव्ययीभाव",
      iast: "avyayībhāva",
      meaning: "uninflected state (this compound type)",
      unit: "word",
    },
    {
      id: "yatha",
      dev: "यथा",
      iast: "yathā",
      meaning: "according to (first member)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
