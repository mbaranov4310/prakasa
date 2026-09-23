/**
 * Drill card provenance:
 * First Steps Towards Sanskrit pp. 22–23 (Krishna / kṛṣṇa: English ri for vocalic ṛ).
 * Lesson glyph tables for traditional vs modern ṛ / ṝ / ḷ spellings.
 * Swapped stems: mṛga, nṛpa (same ṛ → i / u / r-glide pattern as kṛṣṇa).
 *
 * Visarga echo, jña, and hna/hma stay out: each word-family has fewer than
 * four distinct IAST spellings, so they cannot be practice groups.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-modern-pronunciation",
  titleEn: "Modern pronunciation",
  titleIast: "uccāraṇa",
  lessonId: "sounds-modern-pronunciation",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // ṛ|kṛṣṇa — lesson table (First Steps pp. 22–23 Krishna cue)
    {
      id: "krsna-trad",
      dev: "कृष्ण",
      iast: "kṛṣṇa",
      meaning: "traditional kṛṣṇa",
      unit: "akshara",
      group: "ṛ|kṛṣṇa",
    },
    {
      id: "krsna-i",
      dev: "क्रिष्ण",
      iast: "kriṣṇa",
      meaning: "modern kṛṣṇa with i",
      unit: "akshara",
      group: "ṛ|kṛṣṇa",
    },
    {
      id: "krsna-u",
      dev: "क्रुष्ण",
      iast: "kruṣṇa",
      meaning: "modern kṛṣṇa with u",
      unit: "akshara",
      group: "ṛ|kṛṣṇa",
    },
    {
      id: "krsna-r-glide",
      dev: "क्रृष्ण",
      iast: "krṛṣṇa",
      meaning: "modern kṛṣṇa with r-glide",
      unit: "akshara",
      group: "ṛ|kṛṣṇa",
    },
    // ṛ|mṛga — swap from kṛṣṇa
    {
      id: "mrga-trad",
      dev: "मृग",
      iast: "mṛga",
      meaning: "traditional mṛga",
      unit: "akshara",
      group: "ṛ|mṛga",
    },
    {
      id: "mrga-i",
      dev: "म्रिग",
      iast: "mriga",
      meaning: "modern mṛga with i",
      unit: "akshara",
      group: "ṛ|mṛga",
    },
    {
      id: "mrga-u",
      dev: "म्रुग",
      iast: "mruga",
      meaning: "modern mṛga with u",
      unit: "akshara",
      group: "ṛ|mṛga",
    },
    {
      id: "mrga-r-glide",
      dev: "म्रृग",
      iast: "mrṛga",
      meaning: "modern mṛga with r-glide",
      unit: "akshara",
      group: "ṛ|mṛga",
    },
    // ṛ|nṛpa — swap from kṛṣṇa
    {
      id: "nrpa-trad",
      dev: "नृप",
      iast: "nṛpa",
      meaning: "traditional nṛpa",
      unit: "akshara",
      group: "ṛ|nṛpa",
    },
    {
      id: "nrpa-i",
      dev: "न्रिप",
      iast: "nripa",
      meaning: "modern nṛpa with i",
      unit: "akshara",
      group: "ṛ|nṛpa",
    },
    {
      id: "nrpa-u",
      dev: "न्रुप",
      iast: "nrupa",
      meaning: "modern nṛpa with u",
      unit: "akshara",
      group: "ṛ|nṛpa",
    },
    {
      id: "nrpa-r-glide",
      dev: "न्रृप",
      iast: "nrṛpa",
      meaning: "modern nṛpa with r-glide",
      unit: "akshara",
      group: "ṛ|nṛpa",
    },
    // ṝ|pitṝn — lesson table
    {
      id: "pitrn-trad",
      dev: "पितॄन्",
      iast: "pitṝn",
      meaning: "traditional pitṝn",
      unit: "akshara",
      group: "ṝ|pitṝn",
    },
    {
      id: "pitrn-i",
      dev: "पित्रीन्",
      iast: "pitrīn",
      meaning: "modern pitṝn with ī",
      unit: "akshara",
      group: "ṝ|pitṝn",
    },
    {
      id: "pitrn-u",
      dev: "पित्रून्",
      iast: "pitrūn",
      meaning: "modern pitṝn with ū",
      unit: "akshara",
      group: "ṝ|pitṝn",
    },
    {
      id: "pitrn-r-glide",
      dev: "पित्रॄन्",
      iast: "pitrṝn",
      meaning: "modern pitṝn with r-glide",
      unit: "akshara",
      group: "ṝ|pitṝn",
    },
    // ḷ|kḷpta — lesson table
    {
      id: "klpta-trad",
      dev: "कॢप्त",
      iast: "kḷpta",
      meaning: "traditional kḷpta",
      unit: "akshara",
      group: "ḷ|kḷpta",
    },
    {
      id: "klpta-i",
      dev: "क्लिप्त",
      iast: "klipta",
      meaning: "modern kḷpta with i",
      unit: "akshara",
      group: "ḷ|kḷpta",
    },
    {
      id: "klpta-u",
      dev: "क्लुप्त",
      iast: "klupta",
      meaning: "modern kḷpta with u",
      unit: "akshara",
      group: "ḷ|kḷpta",
    },
    {
      id: "klpta-ri",
      dev: "क्ल्रिप्त",
      iast: "klripta",
      meaning: "modern kḷpta with ri-glide",
      unit: "akshara",
      group: "ḷ|kḷpta",
    },
    {
      id: "klpta-ru",
      dev: "क्ल्रुप्त",
      iast: "klrupta",
      meaning: "modern kḷpta with ru-glide",
      unit: "akshara",
      group: "ḷ|kḷpta",
    },
  ] as QuizDeckItem[],
};
