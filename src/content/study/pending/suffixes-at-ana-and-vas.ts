/**
 * Drill card provenance:
 * Cue: Gonda §101 participles of the tense stems (p.75) — thematic present/future
 *   + -at / -māna, athematic + -āna, perfect weak stem + -vas; First Steps defers
 *   present participles. Lesson does not decline; groups are by formation.
 * - at: lesson gacchat / kurvat / juhvat / gamiṣyat / kariṣyat; carat from lesson
 *   carantaṃ/caratā weak stem; pacat / bhavat / neṣyat / bhaviṣyat — same -a stem
 *   + -at join (Gonda bharat / bhaviṣyat textbook roots swapped).
 * - āna: lesson kurvāṇa / nayamāna / neṣyamāna / kariṣyamāna; caramāna / pacamāna /
 *   bharamāna — stems in -a + -māna (Gonda bhara-māṇa, lesson न not ण).
 * - vas: printed only (irregular perfect): cakṛvas / jagmivas / tasthivas / cakrāṇa.
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
    // at — present / future active participle stem
    {
      id: "gacchat",
      // lesson glyph; Gonda §101 thematic -at (p.75)
      dev: "गच्छत्",
      iast: "gacchat",
      meaning: "while going (gaccha + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "kurvat",
      // lesson glyph (irregular kuru + -at)
      dev: "कुर्वत्",
      iast: "kurvat",
      meaning: "while doing, parasmaipada (kuru + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "juhvat",
      // lesson hu-class glyph (irregular; only -at stem)
      dev: "जुह्वत्",
      iast: "juhvat",
      meaning: "while offering (juhu + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "carat",
      // lesson carantaṃ / caratā weak stem; same -a + -at as gacchat
      dev: "चरत्",
      iast: "carat",
      meaning: "while walking (cara + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "pacat",
      // Gonda §101 bharat shape; textbook root swapped to pac
      dev: "पचत्",
      iast: "pacat",
      meaning: "while cooking (paca + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "bhavat",
      // Gonda §101 bharat shape; textbook root swapped to bhū → bhava
      dev: "भवत्",
      iast: "bhavat",
      meaning: "while becoming (bhava + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "gamiṣyat",
      // lesson glyph; Gonda §101 future -at (p.75)
      dev: "गमिष्यत्",
      iast: "gamiṣyat",
      meaning: "about to go (gamiṣya + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "kariṣyat",
      // lesson glyph
      dev: "करिष्यत्",
      iast: "kariṣyat",
      meaning: "about to do (kariṣya + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "neṣyat",
      // lesson neṣya (for -māna) + same future -at join
      dev: "नेष्यत्",
      iast: "neṣyat",
      meaning: "about to lead (neṣya + -at)",
      unit: "word",
      group: "at",
    },
    {
      id: "bhaviṣyat",
      // Gonda §101 bhaviṣya(n)t-; textbook future stem kept, -at join from lesson
      dev: "भविष्यत्",
      iast: "bhaviṣyat",
      meaning: "about to become (bhaviṣya + -at)",
      unit: "word",
      group: "at",
    },

    // āna — present / future middle participle (-āna / -māna)
    {
      id: "kurvana",
      // lesson glyph (irregular kuru + -āna)
      dev: "कुर्वाण",
      iast: "kurvāṇa",
      meaning: "while doing, ātmanepada (kuru + -āna)",
      unit: "word",
      group: "āna",
    },
    {
      id: "nayamana",
      // lesson glyph; stems in -a take -māna
      dev: "नयमान",
      iast: "nayamāna",
      meaning: "while leading (naya + -māna)",
      unit: "word",
      group: "āna",
    },
    {
      id: "nesyamana",
      // lesson glyph
      dev: "नेष्यमान",
      iast: "neṣyamāna",
      meaning: "about to lead (neṣya + -māna)",
      unit: "word",
      group: "āna",
    },
    {
      id: "karisyamana",
      // lesson glyph
      dev: "करिष्यमान",
      iast: "kariṣyamāna",
      meaning: "about to do (kariṣya + -māna)",
      unit: "word",
      group: "āna",
    },
    {
      id: "caramana",
      // lesson cara + -māna rule; Gonda §101 bhara-māṇa shape (न as in lesson)
      dev: "चरमान",
      iast: "caramāna",
      meaning: "while walking (cara + -māna)",
      unit: "word",
      group: "āna",
    },
    {
      id: "pacamana",
      // Gonda §101 thematic -māna; textbook root swapped to pac
      dev: "पचमान",
      iast: "pacamāna",
      meaning: "while cooking (paca + -māna)",
      unit: "word",
      group: "āna",
    },
    {
      id: "bharamana",
      // Gonda §101 bhara-māṇa; lesson orthography -māna
      dev: "भरमान",
      iast: "bharamāna",
      meaning: "while bearing (bhara + -māna)",
      unit: "word",
      group: "āna",
    },

    // vas — perfect participle (printed irregular only)
    {
      id: "cakrvas",
      // lesson glyph; Gonda §101 cakṛvas-
      dev: "चकृवस्",
      iast: "cakṛvas",
      meaning: "has done (cakṛ + -vas)",
      unit: "word",
      group: "vas",
    },
    {
      id: "jagmivas",
      // lesson glyph
      dev: "जग्मिवस्",
      iast: "jagmivas",
      meaning: "has gone (jagm + -vas)",
      unit: "word",
      group: "vas",
    },
    {
      id: "tasthivas",
      // lesson glyph
      dev: "तस्थिवस्",
      iast: "tasthivas",
      meaning: "has stood (tasth + -vas)",
      unit: "word",
      group: "vas",
    },
    {
      id: "cakrana",
      // lesson glyph — perfect ātmanepada with -āna
      dev: "चक्राण",
      iast: "cakrāṇa",
      meaning: "has done, ātmanepada (cakṛ + -āna)",
      unit: "word",
      group: "vas",
    },
  ] as QuizDeckItem[],
};
