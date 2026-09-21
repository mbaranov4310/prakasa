/**
 * Drill card provenance:
 * - nesyami: from the reference — nī → neṣya → neṣyāmi “I will lead”
 * - ninyuh: from the reference — nī → ninī → ninyuḥ “they led (long ago)”
 * - niyase: from the reference — nīyase “You are led” (special tense-mood karmaṇi, -ya)
 * - nesyate: from the reference — neṣyate “You will be led” (other tense-mood, ātmanepada)
 * - gasyati: from the reference — gai → gāsyati “will sing” (-ai → -ā)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-other-tense-moods",
  titleEn: "Other tense-moods",
  titleIast: "lakāra",
  lessonId: "verbs-other-tense-moods",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "nesyami",
      dev: "नेष्यामि",
      iast: "neṣyāmi",
      meaning: "I will lead",
      unit: "word",
    },
    {
      id: "ninyuh",
      dev: "निन्युः",
      iast: "ninyuḥ",
      meaning: "they led (long ago)",
      unit: "word",
    },
    {
      id: "niyase",
      dev: "नीयसे",
      iast: "nīyase",
      meaning: "you are led (special tense-mood, -ya stem)",
      unit: "word",
    },
    {
      id: "nesyate",
      dev: "नेष्यते",
      iast: "neṣyate",
      meaning: "you will be led (other tense-mood, ātmanepada)",
      unit: "word",
    },
    {
      id: "gasyati",
      dev: "गास्यति",
      iast: "gāsyati",
      meaning: "will sing (gai → gā)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
