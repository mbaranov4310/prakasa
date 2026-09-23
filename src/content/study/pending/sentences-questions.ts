/**
 * Drill card provenance:
 * Printed kim case forms from the lesson Rahula glyphs (not the full paradigm;
 * that is on kim-yad). Cue shape: Gonda §50 interrogative / First Steps kutra
 * as inventory ID — same list the lesson prints; no sentence frames.
 * - kim-ko / kim-kasmai / kim-kim / kim-kasmad: lesson glyphs; kept
 * - qw-katham … qw-kidrsa: lesson uninflected + adjective list; kva dropped
 *   (same gloss as kutra — would make two right answers)
 * Yes-no particles api / kim / kaccit: only three distinct IAST — no group.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-questions",
  titleEn: "Questions",
  titleIast: "praśna",
  lessonId: "sentences-questions",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // --- kim|sg (printed case forms only) ---
    {
      id: "kim-ko",
      // lesson glyph; kept (sandhi form as printed)
      dev: "को",
      iast: "ko",
      meaning: "who? (one) kim",
      unit: "word",
      group: "kim|sg",
    },
    {
      id: "kim-kasmai",
      // lesson glyph; kept
      dev: "कस्मै",
      iast: "kasmai",
      meaning: "to whom? (one) kim",
      unit: "word",
      group: "kim|sg",
    },
    {
      id: "kim-kim",
      // lesson glyph; kept
      dev: "किं",
      iast: "kiṃ",
      meaning: "what? (one) kim",
      unit: "word",
      group: "kim|sg",
    },
    {
      id: "kim-kasmad",
      // lesson glyph; kept
      dev: "कस्माद्",
      iast: "kasmād",
      meaning: "from what? (one) kim",
      unit: "word",
      group: "kim|sg",
    },
    // --- praśna|word (lesson uninflected + adjectives) ---
    {
      id: "qw-katham",
      // lesson list; kept
      dev: "कथम्",
      iast: "katham",
      meaning: "in what way? how?",
      unit: "word",
      group: "praśna|word",
    },
    {
      id: "qw-kada",
      // lesson list; kept
      dev: "कदा",
      iast: "kadā",
      meaning: "when?",
      unit: "word",
      group: "praśna|word",
    },
    {
      id: "qw-kimartham",
      // lesson list; kept
      dev: "किमर्थम्",
      iast: "kimartham",
      meaning: "for what reason? why?",
      unit: "word",
      group: "praśna|word",
    },
    {
      id: "qw-kutah",
      // lesson list; kept
      dev: "कुतः",
      iast: "kutaḥ",
      meaning: "from what? for what reason?",
      unit: "word",
      group: "praśna|word",
    },
    {
      id: "qw-kutra",
      // lesson list; First Steps ~p.71 kutra cue; kept (kva synonym omitted)
      dev: "कुत्र",
      iast: "kutra",
      meaning: "where?",
      unit: "word",
      group: "praśna|word",
    },
    {
      id: "qw-kiyat",
      // lesson adjective list; kept
      dev: "कियत्",
      iast: "kiyat",
      meaning: "how much?",
      unit: "word",
      group: "praśna|word",
    },
    {
      id: "qw-kidrsa",
      // lesson adjective list; kept
      dev: "कीदृश",
      iast: "kīdṛśa",
      meaning: "of what kind?",
      unit: "word",
      group: "praśna|word",
    },
  ] as QuizDeckItem[],
};
