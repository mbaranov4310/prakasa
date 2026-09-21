/**
 * Drill card provenance:
 * - kurvat: from the reference — kuru + at → while doing (parasmaipada)
 * - kurvana: from the reference — kuru + āna → while doing (ātmanepada)
 * - karisyat: from the reference — kariṣya + at → about to do
 * - nayamana: from the reference — naya + māna → while leading
 * - cakrvas: from the reference — cakṛ + vas → has done
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-at-ana-and-vas",
  titleEn: "-at, -āna, and -vas",
  titleIast: "śatṛ",
  lessonId: "suffixes-at-ana-and-vas",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kurvat",
      dev: "कुर्वत्",
      iast: "kurvat",
      meaning: "while doing (parasmaipada, -at)",
      unit: "word",
    },
    {
      id: "kurvana",
      dev: "कुर्वाण",
      iast: "kurvāṇa",
      meaning: "while doing (ātmanepada, -āna)",
      unit: "word",
    },
    {
      id: "karisyat",
      dev: "करिष्यत्",
      iast: "kariṣyat",
      meaning: "about to do (-at on future stem)",
      unit: "word",
    },
    {
      id: "nayamana",
      dev: "नयमान",
      iast: "nayamāna",
      meaning: "while leading (-māna)",
      unit: "word",
    },
    {
      id: "cakrvas",
      dev: "चकृवस्",
      iast: "cakṛvas",
      meaning: "has done (-vas)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
