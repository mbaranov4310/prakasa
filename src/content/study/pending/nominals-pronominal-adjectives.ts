/**
 * Drill card provenance:
 * - purvasmin: from the reference — locative singular of pūrva (pūrvasmin dine)
 * - parasmin: from the reference — locative singular of para (parasmin dine)
 * - sarve: from the reference — masculine nominative plural of sarva (sarve narāḥ)
 * - ekam: from the reference — neuter nominative/accusative singular of eka (ekam phalam)
 * - anyat: from the reference — neuter nominative/accusative singular of anya (anyat phalam)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-pronominal-adjectives",
  titleEn: "Pronominal adjectives",
  titleIast: "sarva",
  lessonId: "nominals-pronominal-adjectives",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "purvasmin",
      dev: "पूर्वस्मिन्",
      iast: "pūrvasmin",
      meaning: "previous, in/on (one)",
      unit: "word",
    },
    {
      id: "parasmin",
      dev: "परस्मिन्",
      iast: "parasmin",
      meaning: "next, in/on (one)",
      unit: "word",
    },
    {
      id: "sarve",
      dev: "सर्वे",
      iast: "sarve",
      meaning: "all, as subject (many men)",
      unit: "word",
    },
    {
      id: "ekam",
      dev: "एकम्",
      iast: "ekam",
      meaning: "one fruit (neuter subject/object)",
      unit: "word",
    },
    {
      id: "anyat",
      dev: "अन्यत्",
      iast: "anyat",
      meaning: "another fruit (neuter subject/object)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
