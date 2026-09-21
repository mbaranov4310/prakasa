/**
 * Drill card provenance:
 * - ramamata: from the reference — tatpuruṣa (rāmasya mātā → rāmamātā)
 * - ramasite: from the reference — dvandva (rāmaḥ sītā ca → rāmasīte)
 * - maharathah: from the reference — bahuvrīhi (mahān rathaḥ yasya → mahārathaḥ)
 * - upakrsnam: from the reference — avyayībhāva (upa + kṛṣṇa → upakṛṣṇam)
 * - yathoktam: from the reference — avyayībhāva (yathā + ukta → yathoktam)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-compound-system",
  titleEn: "The compound system",
  titleIast: "samāsa",
  lessonId: "compounds-the-compound-system",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "ramamata",
      dev: "राममाता",
      iast: "rāmamātā",
      meaning: "Rama's mother (tatpuruṣa)",
      unit: "word",
    },
    {
      id: "ramasite",
      dev: "रामसीते",
      iast: "rāmasīte",
      meaning: "Rama and Sita (dvandva)",
      unit: "word",
    },
    {
      id: "maharathah",
      dev: "महारथः",
      iast: "mahārathaḥ",
      meaning: "great-charioted; a great warrior (bahuvrīhi)",
      unit: "word",
    },
    {
      id: "upakrsnam",
      dev: "उपकृष्णम्",
      iast: "upakṛṣṇam",
      meaning: "near Krishna (avyayībhāva)",
      unit: "word",
    },
    {
      id: "yathoktam",
      dev: "यथोक्तम्",
      iast: "yathoktam",
      meaning: "as it was said (avyayībhāva)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
