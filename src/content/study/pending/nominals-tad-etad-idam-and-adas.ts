/**
 * Drill card provenance:
 * - sah-nom: from the reference — masculine nominative singular (tad)
 * - tena-ins: from the reference — masculine instrumental singular (tad)
 * - esah-nom: from the reference — masculine nominative singular (etad; saḥ → eṣaḥ)
 * - ayam-nom: from the reference — masculine nominative singular (idam)
 * - asau-nom: from the reference — masculine nominative singular (adas)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-tad-etad-idam-and-adas",
  titleEn: "tad, etad, idam, and adas",
  titleIast: "tad-etad",
  lessonId: "nominals-tad-etad-idam-and-adas",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "sah-nom",
      dev: "सः",
      iast: "saḥ",
      meaning: "that (absent, masc.) as subject",
      unit: "word",
    },
    {
      id: "tena-ins",
      dev: "तेन",
      iast: "tena",
      meaning: "with that (one, masc.)",
      unit: "word",
    },
    {
      id: "esah-nom",
      dev: "एषः",
      iast: "eṣaḥ",
      meaning: "this (near, masc.) as subject",
      unit: "word",
    },
    {
      id: "ayam-nom",
      dev: "अयम्",
      iast: "ayam",
      meaning: "this (nearby, masc.) as subject",
      unit: "word",
    },
    {
      id: "asau-nom",
      dev: "असौ",
      iast: "asau",
      meaning: "that (distant, masc.) as subject",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
