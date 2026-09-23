/**
 * Drill card provenance:
 * - ni-*: lesson nī → neṣya; Gonda §72 p.62 simple-future paradigm (dā → nī).
 * - gam-*: lesson gamiṣya; same present endings on the future stem.
 * - labh-*: lesson lapsya (ātmanepada); Gonda §72 lists lapsyate.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-simple-future-tense",
  titleEn: "The simple future tense",
  titleIast: "lṛṭ",
  lessonId: "verbs-the-simple-future-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // nī|future — lesson neṣya; Gonda §72 dā → nī
    {
      id: "ni-3sg",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यति",
      iast: "neṣyati",
      meaning: "he/she/it (one) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-3du",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यतः",
      iast: "neṣyataḥ",
      meaning: "they (two) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-3pl",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यन्ति",
      iast: "neṣyanti",
      meaning: "they (many) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-2sg",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यसि",
      iast: "neṣyasi",
      meaning: "you (one) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-2du",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यथः",
      iast: "neṣyathaḥ",
      meaning: "you (two) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-2pl",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यथ",
      iast: "neṣyatha",
      meaning: "you (many) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-1sg",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यामि",
      iast: "neṣyāmi",
      meaning: "I (one) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-1du",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यावः",
      iast: "neṣyāvaḥ",
      meaning: "we (two) nī",
      unit: "word",
      group: "nī|future",
    },
    {
      id: "ni-1pl",
      // Gonda §72 p.62 dā paradigm → nī (lesson neṣya); present para. endings
      dev: "नेष्यामः",
      iast: "neṣyāmaḥ",
      meaning: "we (many) nī",
      unit: "word",
      group: "nī|future",
    },
    // gam|future — lesson gamiṣya
    {
      id: "gam-3sg",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यति",
      iast: "gamiṣyati",
      meaning: "he/she/it (one) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-3du",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यतः",
      iast: "gamiṣyataḥ",
      meaning: "they (two) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-3pl",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यन्ति",
      iast: "gamiṣyanti",
      meaning: "they (many) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-2sg",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यसि",
      iast: "gamiṣyasi",
      meaning: "you (one) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-2du",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यथः",
      iast: "gamiṣyathaḥ",
      meaning: "you (two) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-2pl",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यथ",
      iast: "gamiṣyatha",
      meaning: "you (many) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-1sg",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यामि",
      iast: "gamiṣyāmi",
      meaning: "I (one) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-1du",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यावः",
      iast: "gamiṣyāvaḥ",
      meaning: "we (two) gam",
      unit: "word",
      group: "gam|future",
    },
    {
      id: "gam-1pl",
      // lesson gamiṣya / gamiṣyati; Gonda §72 shape; present para. endings
      dev: "गमिष्यामः",
      iast: "gamiṣyāmaḥ",
      meaning: "we (many) gam",
      unit: "word",
      group: "gam|future",
    },
    // labh|future — lesson lapsya ātmanepada
    {
      id: "labh-3sg",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्यते",
      iast: "lapsyate",
      meaning: "he/she/it (one) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-3du",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्येते",
      iast: "lapsyete",
      meaning: "they (two) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-3pl",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्यन्ते",
      iast: "lapsyante",
      meaning: "they (many) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-2sg",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्यसे",
      iast: "lapsyase",
      meaning: "you (one) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-2du",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्येथे",
      iast: "lapsyethe",
      meaning: "you (two) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-2pl",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्यध्वे",
      iast: "lapsyadhve",
      meaning: "you (many) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-1sg",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्ये",
      iast: "lapsye",
      meaning: "I (one) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-1du",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्यावहे",
      iast: "lapsyāvahe",
      meaning: "we (two) labh",
      unit: "word",
      group: "labh|future",
    },
    {
      id: "labh-1pl",
      // lesson lapsya / lapsyate; Gonda §72 lapsyate; present ātmanepada endings
      dev: "लप्स्यामहे",
      iast: "lapsyāmahe",
      meaning: "we (many) labh",
      unit: "word",
      group: "labh|future",
    },
  ] as QuizDeckItem[],
};
