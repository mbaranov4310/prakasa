import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

// Drill cards for critic review (meaning → iast):
//   simhah — from the reference — stem + ending → case-1 singular “the lion”
//   simhasya — from the reference — case 6 (“of”) on siṃha
//   simhaih — from the reference — instrumental plural “by the lions”
//   simhau — from the reference — dual number (exactly two) as subject
//   simhaya — composed — applying the page’s -a vs -ā stem-family contrast (feminine instrumental)

export const pendingDeck = {
  id: "nominals-the-nominal-system",
  titleEn: "The nominal system",
  titleIast: "nāman",
  lessonId: "nominals-the-nominal-system",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "simhah",
      dev: "सिंहः",
      iast: "siṃhaḥ",
      meaning: "the lion (one, as subject)",
      unit: "word",
    },
    {
      id: "simhasya",
      dev: "सिंहस्य",
      iast: "siṃhasya",
      meaning: "of the lion",
      unit: "word",
    },
    {
      id: "simhaih",
      dev: "सिंहैः",
      iast: "siṃhaiḥ",
      meaning: "by the lions",
      unit: "word",
    },
    {
      id: "simhau",
      dev: "सिंहौ",
      iast: "siṃhau",
      meaning: "the two lions (as subject)",
      unit: "word",
    },
    {
      id: "simhaya",
      dev: "सिंहया",
      iast: "siṃhayā",
      meaning: "by the female lion (-ā stem)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
