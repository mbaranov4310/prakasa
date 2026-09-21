/**
 * Drill card provenance:
 * - agacchat: from the reference — gacchati → agacchat “went”
 * - apasyat: from the reference — apaśyat in “Rama saw Sita”
 * - anayat: from the reference — 3sg paradigm / nayati → anayat
 * - anayam: from the reference — 1sg paradigm / nayāmi → anayam
 * - paryagacchat: from the reference — parigacchati → paryagacchat
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-ordinary-past-tense",
  titleEn: "The ordinary past tense",
  titleIast: "laṅ",
  lessonId: "verbs-the-ordinary-past-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "agacchat",
      dev: "अगच्छत्",
      iast: "agacchat",
      meaning: "(someone) went",
      unit: "word",
    },
    {
      id: "apasyat",
      dev: "अपश्यत्",
      iast: "apaśyat",
      meaning: "(someone) saw",
      unit: "word",
    },
    {
      id: "anayat",
      dev: "अनयत्",
      iast: "anayat",
      meaning: "(someone) led",
      unit: "word",
    },
    {
      id: "anayam",
      dev: "अनयम्",
      iast: "anayam",
      meaning: "I led",
      unit: "word",
    },
    {
      id: "paryagacchat",
      dev: "पर्यगच्छत्",
      iast: "paryagacchat",
      meaning: "(someone) went around",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
