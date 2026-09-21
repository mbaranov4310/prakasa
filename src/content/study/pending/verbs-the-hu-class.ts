/**
 * Drill card provenance:
 * - juhoti: from the reference — present 3rd singular
 * - juhutah: from the reference — present 3rd dual
 * - juhvati: from the reference — present 3rd plural (-ati, not -anti)
 * - juhudhi: from the reference — command 2nd singular (-dhi)
 * - dehi: from the reference — irregular command of dā
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-hu-class",
  titleEn: "The hu class",
  titleIast: "juhotyādi",
  lessonId: "verbs-the-hu-class",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "juhoti",
      dev: "जुहोति",
      iast: "juhoti",
      meaning: "(Someone) offers",
      unit: "word",
    },
    {
      id: "juhutah",
      dev: "जुहुतः",
      iast: "juhutaḥ",
      meaning: "(The two of them) offer",
      unit: "word",
    },
    {
      id: "juhvati",
      dev: "जुह्वति",
      iast: "juhvati",
      meaning: "They offer (present; -ati not -anti)",
      unit: "word",
    },
    {
      id: "juhudhi",
      dev: "जुहुधि",
      iast: "juhudhi",
      meaning: "Offer! (command; -dhi not -hi)",
      unit: "word",
    },
    {
      id: "dehi",
      dev: "देहि",
      iast: "dehi",
      meaning: "Give! (irregular command of dā)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
