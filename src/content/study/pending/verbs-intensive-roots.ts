/**
 * Drill card provenance:
 * - lalapyate: from the reference — repeatedly laments
 * - jangamyate: from the reference — goes crookedly
 * - lolupyate: from the reference — cuts badly
 * - narinrtyeta: from the reference — might repeatedly dance
 * - lolupyam-cakre: from the reference — cut badly (long ago)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-intensive-roots",
  titleEn: "Intensive roots",
  titleIast: "yaṅanta",
  lessonId: "verbs-intensive-roots",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "lalapyate",
      dev: "लालप्यते",
      iast: "lālapyate",
      meaning: "repeatedly laments",
      unit: "word",
    },
    {
      id: "jangamyate",
      dev: "जङ्गम्यते",
      iast: "jaṅgamyate",
      meaning: "goes crookedly",
      unit: "word",
    },
    {
      id: "lolupyate",
      dev: "लोलुप्यते",
      iast: "lolupyate",
      meaning: "cuts badly",
      unit: "word",
    },
    {
      id: "narinrtyeta",
      dev: "नरीनृत्येत",
      iast: "narīnṛtyeta",
      meaning: "might repeatedly dance",
      unit: "word",
    },
    {
      id: "lolupyam-cakre",
      dev: "लोलुप्यां चक्रे",
      iast: "lolupyāṃ cakre",
      meaning: "cut badly (long ago)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
