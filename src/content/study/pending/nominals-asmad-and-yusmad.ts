/**
 * Drill card provenance (printed lesson cells only; pronouns are irregular):
 * - asmad-sg-nom: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — aham
 * - asmad-sg-acc: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mām
 * - asmad-sg-ins: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mayā
 * - asmad-sg-dat: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mahyam
 * - asmad-sg-abl: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mat
 * - asmad-sg-gen: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mama
 * - asmad-sg-loc: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mayi
 * - yusmad-sg-nom: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvam
 * - yusmad-sg-acc: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvām
 * - yusmad-sg-ins: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvayā
 * - yusmad-sg-dat: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tubhyam
 * - yusmad-sg-abl: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvat
 * - yusmad-sg-gen: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tava
 * - yusmad-sg-loc: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvayi
 * Plural and dual stay on the lesson page and are not quizzed. Enclitics not in lesson table.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-asmad-and-yusmad",
  titleEn: "asmad and yuṣmad",
  titleIast: "asmad-yuṣmad",
  lessonId: "nominals-asmad-and-yusmad",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "asmad-sg-nom",
      dev: "अहम्",
      iast: "aham",
      meaning: "subject (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-acc",
      dev: "माम्",
      iast: "mām",
      meaning: "object (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-ins",
      dev: "मया",
      iast: "mayā",
      meaning: "with (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-dat",
      dev: "मह्यम्",
      iast: "mahyam",
      meaning: "for (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-abl",
      dev: "मत्",
      iast: "mat",
      meaning: "from (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-gen",
      dev: "मम",
      iast: "mama",
      meaning: "of (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-loc",
      dev: "मयि",
      iast: "mayi",
      meaning: "in (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "yusmad-sg-nom",
      dev: "त्वम्",
      iast: "tvam",
      meaning: "subject (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-acc",
      dev: "त्वाम्",
      iast: "tvām",
      meaning: "object (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-ins",
      dev: "त्वया",
      iast: "tvayā",
      meaning: "with (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-dat",
      dev: "तुभ्यम्",
      iast: "tubhyam",
      meaning: "for (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-abl",
      dev: "त्वत्",
      iast: "tvat",
      meaning: "from (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-gen",
      dev: "तव",
      iast: "tava",
      meaning: "of (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-loc",
      dev: "त्वयि",
      iast: "tvayi",
      meaning: "in (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
  ] as QuizDeckItem[],
};
