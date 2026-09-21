/**
 * Drill card provenance:
 * - kah: from the reference — masculine nominative singular (kim)
 * - kim: from the reference — neuter nominative/accusative singular (kim)
 * - kasmai: from the reference — masculine dative singular (kim)
 * - ya: from the reference — feminine nominative singular (yad)
 * - yasyai: from the reference — feminine dative singular (yad)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-kim-and-yad",
  titleEn: "kim and yad",
  titleIast: "kim-yad",
  lessonId: "nominals-kim-and-yad",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kah",
      dev: "कः",
      iast: "kaḥ",
      meaning: "who? (masculine subject)",
      unit: "word",
    },
    {
      id: "kim",
      dev: "किम्",
      iast: "kim",
      meaning: "what? (neuter)",
      unit: "word",
    },
    {
      id: "kasmai",
      dev: "कस्मै",
      iast: "kasmai",
      meaning: "to whom?",
      unit: "word",
    },
    {
      id: "ya",
      dev: "या",
      iast: "yā",
      meaning: "who (relative, feminine subject)",
      unit: "word",
    },
    {
      id: "yasyai",
      dev: "यस्यै",
      iast: "yasyai",
      meaning: "to whom (relative, feminine)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
