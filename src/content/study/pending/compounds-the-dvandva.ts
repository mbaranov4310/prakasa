/**
 * Drill card provenance:
 * - ramasite: from the reference — dual itaretara (rāmaḥ sītā ca → rāmasīte)
 * - ramasitalaksmanah: from the reference — plural itaretara (rāmaḥ sītā lakṣmaṇaḥ ca)
 * - phalapuspani: from the reference — itaretara (phalāni puṣpāṇi ca)
 * - aharanidrabhayam: from the reference — samāhāra, neuter singular
 * - panipadam: from the reference — samāhāra, neuter singular
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-dvandva",
  titleEn: "The dvandva",
  titleIast: "dvandva",
  lessonId: "compounds-the-dvandva",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "ramasite",
      dev: "रामसीते",
      iast: "rāmasīte",
      meaning: "Rama and Sita",
      unit: "word",
    },
    {
      id: "ramasitalaksmanah",
      dev: "रामसीतालक्ष्मणाः",
      iast: "rāmasītālakṣmaṇāḥ",
      meaning: "Rama, Sita, and Lakshmana",
      unit: "word",
    },
    {
      id: "phalapuspani",
      dev: "फलपुष्पाणि",
      iast: "phalapuṣpāṇi",
      meaning: "fruits and flowers",
      unit: "word",
    },
    {
      id: "aharanidrabhayam",
      dev: "आहारनिद्राभयम्",
      iast: "āhāranidrābhayam",
      meaning: "food, sleep, and fear",
      unit: "word",
    },
    {
      id: "panipadam",
      dev: "पाणिपादम्",
      iast: "pāṇipādam",
      meaning: "hands and feet",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
