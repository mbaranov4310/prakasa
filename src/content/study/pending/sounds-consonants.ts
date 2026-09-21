/**
 * Drill card provenance:
 * - ka: from the reference — first of kavarga (sparśa grid)
 * - cavarga-nasal: from the reference — nasal of cavarga (ña)
 * - ya: from the reference — first antaḥstha / semivowel
 * - ha: from the reference — voiced member of śavarga
 * - ra: from the reference — semivowel also named repha
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-consonants",
  titleEn: "Consonants",
  titleIast: "vyañjana",
  lessonId: "sounds-consonants",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "ka",
      dev: "क",
      iast: "ka",
      meaning: "first consonant of kavarga",
      unit: "akshara",
    },
    {
      id: "cavarga-nasal",
      dev: "ञ",
      iast: "ña",
      meaning: "nasal of cavarga",
      unit: "akshara",
    },
    {
      id: "ya",
      dev: "य",
      iast: "ya",
      meaning: "first antaḥstha (semivowel)",
      unit: "akshara",
    },
    {
      id: "ha",
      dev: "ह",
      iast: "ha",
      meaning: "voiced member of śavarga",
      unit: "akshara",
    },
    {
      id: "ra",
      dev: "र",
      iast: "ra",
      meaning: "semivowel also called repha",
      unit: "akshara",
    },
  ] as QuizDeckItem[],
};
