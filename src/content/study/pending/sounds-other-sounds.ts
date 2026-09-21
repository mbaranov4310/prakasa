/**
 * Drill card provenance:
 * - anusvara: from the reference — the anusvāra mark itself (ṃ)
 * - visarga: from the reference — the visarga mark itself (ḥ)
 * - sangah: from the reference — saṃgaḥ → saṅgaḥ (matching nasal)
 * - sanjayah: from the reference — saṃjayaḥ → sañjayaḥ (matching nasal)
 * - ramah: from the reference — rāmas → rāmaḥ (final -s → visarga)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-other-sounds",
  titleEn: "Other sounds",
  titleIast: "ayogavāha",
  lessonId: "sounds-other-sounds",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "anusvara",
      dev: "ं",
      iast: "ṃ",
      meaning: "anusvāra (pure nasal)",
      unit: "akshara",
    },
    {
      id: "visarga",
      dev: "ः",
      iast: "ḥ",
      meaning: "visarga",
      unit: "akshara",
    },
    {
      id: "sangah",
      dev: "सङ्गः",
      iast: "saṅgaḥ",
      meaning: "saṃgaḥ with matching nasal before ga",
      unit: "akshara",
    },
    {
      id: "sanjayah",
      dev: "सञ्जयः",
      iast: "sañjayaḥ",
      meaning: "saṃjayaḥ with matching nasal before ja",
      unit: "akshara",
    },
    {
      id: "ramah",
      dev: "रामः",
      iast: "rāmaḥ",
      meaning: "rāmas at word end",
      unit: "akshara",
    },
  ] as QuizDeckItem[],
};
