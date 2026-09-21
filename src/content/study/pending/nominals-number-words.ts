/**
 * Drill card provenance:
 * - ekah: from the reference — nominative singular masculine eka
 * - ekasmai: from the reference — dative singular masculine eka
 * - dvau: from the reference — nominative dual masculine dvi
 * - trayanam: from the reference — genitive plural masculine tri
 * - pancanam: from the reference — genitive plural pañca
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-number-words",
  titleEn: "Number words",
  titleIast: "saṅkhyā",
  lessonId: "nominals-number-words",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "ekah",
      dev: "एकः",
      iast: "ekaḥ",
      meaning: "one (masc.) as subject",
      unit: "word",
    },
    {
      id: "ekasmai",
      dev: "एकस्मै",
      iast: "ekasmai",
      meaning: "for one (masc.)",
      unit: "word",
    },
    {
      id: "dvau",
      dev: "द्वौ",
      iast: "dvau",
      meaning: "two (masc.) as subject",
      unit: "word",
    },
    {
      id: "trayanam",
      dev: "त्रयाणाम्",
      iast: "trayāṇām",
      meaning: "of three (masc.)",
      unit: "word",
    },
    {
      id: "pancanam",
      dev: "पञ्चानाम्",
      iast: "pañcānām",
      meaning: "of five",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
