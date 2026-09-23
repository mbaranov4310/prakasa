/**
 * Drill card provenance:
 * Cue: Gonda Concise Elementary Grammar §§63–64 dviṣ present (pp.50–51) and
 * §68 rudh-/bhid- nasal-infix class (p.58) — one root, person × number.
 * First Steps §7.2–7.3 (pp.126–129) drills present endings on thematic roots
 * only and defers athematic classes. Irregular: printed lesson present cells
 * only (ad and rudh, parasmaipada + ātmanepada); no root swaps — lesson has
 * no stem-formation prose. Command / ordinary past / potential left out
 * (this pass is present only). Collapsed rudh 3du=2du parasmaipada runddhaḥ.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-ad-and-rudh",
  titleEn: "The ad and rudh classes",
  titleIast: "adādi",
  lessonId: "verbs-ad-and-rudh",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // ad|present — parasmaipada
    {
      id: "ad-para-3sg",
      // lesson ad present parasmaipada; Gonda §63–64 present-active shape (p.51)
      dev: "अत्ति",
      iast: "atti",
      meaning: "he/she/it (one) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-3du",
      // lesson ad present parasmaipada
      dev: "अत्तः",
      iast: "attaḥ",
      meaning: "they (two) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-3pl",
      // lesson ad present parasmaipada
      dev: "अदन्ति",
      iast: "adanti",
      meaning: "they (many) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-2sg",
      // lesson ad present parasmaipada
      dev: "अत्सि",
      iast: "atsi",
      meaning: "you (one) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-2du",
      // lesson ad present parasmaipada
      dev: "अत्थः",
      iast: "atthaḥ",
      meaning: "you (two) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-2pl",
      // lesson ad present parasmaipada
      dev: "अत्थ",
      iast: "attha",
      meaning: "you (many) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-1sg",
      // lesson ad present parasmaipada
      dev: "अद्मि",
      iast: "admi",
      meaning: "I (one) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-1du",
      // lesson ad present parasmaipada
      dev: "अद्वः",
      iast: "advaḥ",
      meaning: "we (two) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-para-1pl",
      // lesson ad present parasmaipada
      dev: "अद्मः",
      iast: "admaḥ",
      meaning: "we (many) ad, parasmaipada",
      unit: "word",
      group: "ad|present",
    },
    // ad|present — ātmanepada
    {
      id: "ad-atma-3sg",
      // lesson ad present ātmanepada
      dev: "अत्ते",
      iast: "atte",
      meaning: "he/she/it (one) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-3du",
      // lesson ad present ātmanepada
      dev: "अदाते",
      iast: "adāte",
      meaning: "they (two) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-3pl",
      // lesson ad present ātmanepada
      dev: "अदते",
      iast: "adate",
      meaning: "they (many) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-2sg",
      // lesson ad present ātmanepada
      dev: "अत्से",
      iast: "atse",
      meaning: "you (one) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-2du",
      // lesson ad present ātmanepada
      dev: "अदाथे",
      iast: "adāthe",
      meaning: "you (two) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-2pl",
      // lesson ad present ātmanepada
      dev: "अद्ध्वे",
      iast: "addhve",
      meaning: "you (many) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-1sg",
      // lesson ad present ātmanepada
      dev: "अदे",
      iast: "ade",
      meaning: "I (one) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-1du",
      // lesson ad present ātmanepada
      dev: "अद्वहे",
      iast: "advahe",
      meaning: "we (two) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    {
      id: "ad-atma-1pl",
      // lesson ad present ātmanepada
      dev: "अद्महे",
      iast: "admahe",
      meaning: "we (many) ad, ātmanepada",
      unit: "word",
      group: "ad|present",
    },
    // rudh|present — parasmaipada
    {
      id: "rudh-para-3sg",
      // lesson rudh present parasmaipada; Gonda §68 rudh-/bhid- shape (p.58)
      dev: "रुणद्धि",
      iast: "ruṇaddhi",
      meaning: "he/she/it (one) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-para-3du-2du",
      // lesson rudh present parasmaipada — 3du = 2du runddhaḥ
      dev: "रुन्द्धः",
      iast: "runddhaḥ",
      meaning: "they (two) / you (two) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-para-3pl",
      // lesson rudh present parasmaipada
      dev: "रुन्धन्ति",
      iast: "rundhanti",
      meaning: "they (many) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-para-2sg",
      // lesson rudh present parasmaipada
      dev: "रुणत्सि",
      iast: "ruṇatsi",
      meaning: "you (one) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-para-2pl",
      // lesson rudh present parasmaipada
      dev: "रुन्द्ध",
      iast: "runddha",
      meaning: "you (many) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-para-1sg",
      // lesson rudh present parasmaipada
      dev: "रुणध्मि",
      iast: "ruṇadhmi",
      meaning: "I (one) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-para-1du",
      // lesson rudh present parasmaipada
      dev: "रुन्ध्वः",
      iast: "rundhvaḥ",
      meaning: "we (two) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-para-1pl",
      // lesson rudh present parasmaipada
      dev: "रुन्ध्मः",
      iast: "rundhmaḥ",
      meaning: "we (many) rudh, parasmaipada",
      unit: "word",
      group: "rudh|present",
    },
    // rudh|present — ātmanepada
    {
      id: "rudh-atma-3sg",
      // lesson rudh present ātmanepada
      dev: "रुन्द्धे",
      iast: "runddhe",
      meaning: "he/she/it (one) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-3du",
      // lesson rudh present ātmanepada
      dev: "रुन्धाते",
      iast: "rundhāte",
      meaning: "they (two) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-3pl",
      // lesson rudh present ātmanepada
      dev: "रुन्धते",
      iast: "rundhate",
      meaning: "they (many) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-2sg",
      // lesson rudh present ātmanepada
      dev: "रुन्त्से",
      iast: "runtse",
      meaning: "you (one) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-2du",
      // lesson rudh present ātmanepada
      dev: "रुन्धाथे",
      iast: "rundhāthe",
      meaning: "you (two) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-2pl",
      // lesson rudh present ātmanepada
      dev: "रुन्द्ध्वे",
      iast: "runddhve",
      meaning: "you (many) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-1sg",
      // lesson rudh present ātmanepada
      dev: "रुन्धे",
      iast: "rundhe",
      meaning: "I (one) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-1du",
      // lesson rudh present ātmanepada
      dev: "रुन्ध्वहे",
      iast: "rundhvahe",
      meaning: "we (two) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
    {
      id: "rudh-atma-1pl",
      // lesson rudh present ātmanepada
      dev: "रुन्ध्महे",
      iast: "rundhmahe",
      meaning: "we (many) rudh, ātmanepada",
      unit: "word",
      group: "rudh|present",
    },
  ] as QuizDeckItem[],
};
