/**
 * Drill card provenance:
 * - maharathah: from the reference — mahān ratho yasya → mahārathaḥ
 * - pitambarah: from the reference — pīto 'mbaro yasya → pītāmbaraḥ
 * - drdhavratah: from the reference — dṛḍhā vratā yasya → dṛḍhavrataḥ
 * - cakrapanih: from the reference — cakraṃ pāṇau yasya → cakrapāṇiḥ
 * - bahuvrihi: from the reference — bahur vrīhir yasya → bahuvrīhi
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-bahuvrihi",
  titleEn: "The bahuvrīhi",
  titleIast: "bahuvrīhi",
  lessonId: "compounds-the-bahuvrihi",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "maharathah",
      dev: "महारथः",
      iast: "mahārathaḥ",
      meaning: "who has a great chariot; “great-charioted”",
      unit: "word",
    },
    {
      id: "pitambarah",
      dev: "पीताम्बरः",
      iast: "pītāmbaraḥ",
      meaning: "who has yellow clothes; yellow-clothed",
      unit: "word",
    },
    {
      id: "drdhavratah",
      dev: "दृढव्रतः",
      iast: "dṛḍhavrataḥ",
      meaning: "whose vows are firm; firm-vowed",
      unit: "word",
    },
    {
      id: "cakrapanih",
      dev: "चक्रपाणिः",
      iast: "cakrapāṇiḥ",
      meaning: "in whose hand is a discus; discus-handed",
      unit: "word",
    },
    {
      id: "bahuvrihi",
      dev: "बहुव्रीहि",
      iast: "bahuvrīhi",
      meaning: "who has much rice; a wealthy person",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
