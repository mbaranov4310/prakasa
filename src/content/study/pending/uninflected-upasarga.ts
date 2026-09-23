/**
 * Drill card provenance:
 * - up-* list: the twenty printed upasargas (lesson “The list”); inventory
 *   ID shape like First Steps §3.6 true/false (book p.50). First Steps §5.1
 *   (book p.97) defers prefix study — no book list exercise; cells from the
 *   lesson only. No stem swap.
 * - prati|case2: lesson “prati with a noun in case 2”; kept rāmaṃ / tat;
 *   swapped aśva, gaja, nara (accusative + prati).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "uninflected-upasarga",
  titleEn: "The upasarga",
  titleIast: "upasarga",
  lessonId: "uninflected-upasarga",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // --- upasarga|list (lesson glyph list) ---
    {
      id: "up-ati",
      // lesson list; kept
      dev: "अति",
      iast: "ati",
      meaning: "beyond, over, excessive",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-adhi",
      // lesson list; kept
      dev: "अधि",
      iast: "adhi",
      meaning: "above, over",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-anu",
      // lesson list; kept
      dev: "अनु",
      iast: "anu",
      meaning: "after, along",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-apa",
      // lesson list; kept
      dev: "अप",
      iast: "apa",
      meaning: "away from",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-api",
      // lesson list; kept
      dev: "अपि",
      iast: "api",
      meaning: "close to",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-abhi",
      // lesson list; kept
      dev: "अभि",
      iast: "abhi",
      meaning: "towards",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-ava",
      // lesson list; kept
      dev: "अव",
      iast: "ava",
      meaning: "down, downward",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-aa",
      // lesson list; kept
      dev: "आ",
      iast: "ā",
      meaning: "here, near",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-ud",
      // lesson list; kept
      dev: "उद्",
      iast: "ud",
      meaning: "up, upward",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-upa",
      // lesson list; kept
      dev: "उप",
      iast: "upa",
      meaning: "next to, under",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-dus",
      // lesson list; kept
      dev: "दुस्",
      iast: "dus",
      meaning: "bad, difficult",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-ni",
      // lesson list; kept
      dev: "नि",
      iast: "ni",
      meaning: "in, into",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-nis",
      // lesson list; kept
      dev: "निस्",
      iast: "nis",
      meaning: "out, out of",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-paraa",
      // lesson list; kept
      dev: "परा",
      iast: "parā",
      meaning: "far away, gone",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-pari",
      // lesson list; kept
      dev: "परि",
      iast: "pari",
      meaning: "around, about",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-pra",
      // lesson list; kept
      dev: "प्र",
      iast: "pra",
      meaning: "forward",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-prati",
      // lesson list; kept
      dev: "प्रति",
      iast: "prati",
      meaning: "backward, against",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-vi",
      // lesson list; kept
      dev: "वि",
      iast: "vi",
      meaning: "apart, separate",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-sam",
      // lesson list; kept
      dev: "सम्",
      iast: "sam",
      meaning: "together; complete, full",
      unit: "word",
      group: "upasarga|list",
    },
    {
      id: "up-su",
      // lesson list; kept
      dev: "सु",
      iast: "su",
      meaning: "good, easy",
      unit: "word",
      group: "upasarga|list",
    },
    // --- prati|case2 ---
    {
      id: "prati-rama",
      // lesson; kept
      dev: "रामं प्रति",
      iast: "rāmaṃ prati",
      meaning: "regarding rāma",
      unit: "word",
      group: "prati|case2",
    },
    {
      id: "prati-tat",
      // lesson; kept
      dev: "तत् प्रति",
      iast: "tat prati",
      meaning: "regarding that",
      unit: "word",
      group: "prati|case2",
    },
    {
      id: "prati-asva",
      // lesson prati + case 2; rāma→aśva
      dev: "अश्वं प्रति",
      iast: "aśvaṃ prati",
      meaning: "regarding aśva",
      unit: "word",
      group: "prati|case2",
    },
    {
      id: "prati-gaja",
      // lesson prati + case 2; rāma→gaja
      dev: "गजं प्रति",
      iast: "gajaṃ prati",
      meaning: "regarding gaja",
      unit: "word",
      group: "prati|case2",
    },
    {
      id: "prati-nara",
      // lesson prati + case 2; rāma→nara
      dev: "नरं प्रति",
      iast: "naraṃ prati",
      meaning: "regarding nara",
      unit: "word",
      group: "prati|case2",
    },
  ] as QuizDeckItem[],
};
