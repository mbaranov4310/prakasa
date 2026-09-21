/**
 * Drill card provenance:
 * - yatra: from the reference — uninflected relative “where”
 * - tatra: from the reference — correlative “there”
 * - yada: from the reference — uninflected relative “when”
 * - yatha: from the reference — uninflected relative “in which way”
 * - ya-prcchati-sa: from the reference — yad–tad pair (yā … sā)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-relative-phrases",
  titleEn: "Relative phrases",
  titleIast: "yad-tad",
  lessonId: "sentences-relative-phrases",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "yatra",
      dev: "यत्र",
      iast: "yatra",
      meaning: "where (relative)",
      unit: "word",
    },
    {
      id: "tatra",
      dev: "तत्र",
      iast: "tatra",
      meaning: "there (correlative of yatra)",
      unit: "word",
    },
    {
      id: "yada",
      dev: "यदा",
      iast: "yadā",
      meaning: "when (relative)",
      unit: "word",
    },
    {
      id: "yatha",
      dev: "यथा",
      iast: "yathā",
      meaning: "in which way",
      unit: "word",
    },
    {
      id: "ya-prcchati-sa",
      dev: "या पृच्छति सा रामस्य पत्नी",
      iast: "yā pṛcchati sā rāmasya patnī",
      meaning: "The person who asks is Rama's wife",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
