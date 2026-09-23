/**
 * Drill card provenance:
 * Cue: Gonda, Concise Elementary Grammar §83 Precative (p.67) — active paradigm of
 *   √bhū (bhūyāsam, bhūyās, bhūyāt …). First Steps has no benedictive exercise.
 * Endings: lesson blessing tables only (parasmaipada yāt yātām yāsuḥ / yāḥ yāstam yāsta /
 *   yāsam yāsva yāsma; ātmanepada sīṣṭa … on strengthened nī → neṣī-). No invented
 *   ātmanepada for other roots.
 * Roots: nī (printed lesson grids, both voices); gam and vac (lesson -ya stems gamya /
 *   ucya) swapped in for Gonda’s √bhū.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-blessing-mood",
  titleEn: "The blessing mood",
  titleIast: "āśīr-liṅ",
  lessonId: "verbs-the-blessing-mood",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // nī|blessing — parasmaipada (printed lesson grid)
    {
      id: "ni-p-3sg",
      // lesson nī parasmaipada table; Gonda §83 bhūyāt shape (p.67), √bhū swapped
      dev: "नीयात्",
      iast: "nīyāt",
      meaning: "he/she/it (one) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-3du",
      // lesson nī parasmaipada table
      dev: "नीयाताम्",
      iast: "nīyātām",
      meaning: "they (two) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-3pl",
      // lesson nī parasmaipada table; Gonda §83 bhūyāsur (p.67) uses -ur; lesson -uḥ
      dev: "नीयासुः",
      iast: "nīyāsuḥ",
      meaning: "they (many) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-2sg",
      // lesson nī parasmaipada table
      dev: "नीयाः",
      iast: "nīyāḥ",
      meaning: "you (one) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-2du",
      // lesson nī parasmaipada table
      dev: "नीयास्तम्",
      iast: "nīyāstam",
      meaning: "you (two) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-2pl",
      // lesson nī parasmaipada table; Gonda §83 bhūyāsta (p.67)
      dev: "नीयास्त",
      iast: "nīyāsta",
      meaning: "you (many) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-1sg",
      // lesson nī parasmaipada table; Gonda §83 bhūyāsam (p.67)
      dev: "नीयासम्",
      iast: "nīyāsam",
      meaning: "I (one) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-1du",
      // lesson nī parasmaipada table
      dev: "नीयास्व",
      iast: "nīyāsva",
      meaning: "we (two) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-p-1pl",
      // lesson nī parasmaipada table; Gonda §83 bhūyāsma (p.67)
      dev: "नीयास्म",
      iast: "nīyāsma",
      meaning: "we (many) nī — parasmaipada",
      unit: "word",
      group: "nī|blessing",
    },
    // nī|blessing — ātmanepada (printed lesson grid)
    {
      id: "ni-a-3sg",
      // lesson nī ātmanepada table
      dev: "नेषीष्ट",
      iast: "neṣīṣṭa",
      meaning: "he/she/it (one) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-3du",
      // lesson nī ātmanepada table
      dev: "नेषीयास्ताम्",
      iast: "neṣīyāstām",
      meaning: "they (two) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-3pl",
      // lesson nī ātmanepada table
      dev: "नेषीरन्",
      iast: "neṣīran",
      meaning: "they (many) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-2sg",
      // lesson nī ātmanepada table
      dev: "नेषीष्ठाः",
      iast: "neṣīṣṭhāḥ",
      meaning: "you (one) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-2du",
      // lesson nī ātmanepada table
      dev: "नेषीयास्थाम्",
      iast: "neṣīyāsthām",
      meaning: "you (two) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-2pl",
      // lesson nī ātmanepada table
      dev: "नेषीध्वम्",
      iast: "neṣīdhvam",
      meaning: "you (many) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-1sg",
      // lesson nī ātmanepada table
      dev: "नेषीय",
      iast: "neṣīya",
      meaning: "I (one) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-1du",
      // lesson nī ātmanepada table
      dev: "नेषीवहि",
      iast: "neṣīvahi",
      meaning: "we (two) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    {
      id: "ni-a-1pl",
      // lesson nī ātmanepada table
      dev: "नेषीमहि",
      iast: "neṣīmahi",
      meaning: "we (many) nī — ātmanepada",
      unit: "word",
      group: "nī|blessing",
    },
    // gam|blessing — parasmaipada (lesson gamya + yās endings; Gonda √bhū swapped)
    {
      id: "gam-3sg",
      // lesson endings on gamya; Gonda §83 bhūyāt shape (p.67)
      dev: "गम्यात्",
      iast: "gamyāt",
      meaning: "he/she/it (one) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-3du",
      // lesson endings on gamya
      dev: "गम्याताम्",
      iast: "gamyātām",
      meaning: "they (two) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-3pl",
      // lesson endings on gamya
      dev: "गम्यासुः",
      iast: "gamyāsuḥ",
      meaning: "they (many) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-2sg",
      // lesson endings on gamya
      dev: "गम्याः",
      iast: "gamyāḥ",
      meaning: "you (one) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-2du",
      // lesson endings on gamya
      dev: "गम्यास्तम्",
      iast: "gamyāstam",
      meaning: "you (two) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-2pl",
      // lesson endings on gamya
      dev: "गम्यास्त",
      iast: "gamyāsta",
      meaning: "you (many) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-1sg",
      // lesson endings on gamya; Gonda §83 bhūyāsam shape (p.67)
      dev: "गम्यासम्",
      iast: "gamyāsam",
      meaning: "I (one) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-1du",
      // lesson endings on gamya
      dev: "गम्यास्व",
      iast: "gamyāsva",
      meaning: "we (two) gam",
      unit: "word",
      group: "gam|blessing",
    },
    {
      id: "gam-1pl",
      // lesson endings on gamya
      dev: "गम्यास्म",
      iast: "gamyāsma",
      meaning: "we (many) gam",
      unit: "word",
      group: "gam|blessing",
    },
    // vac|blessing — parasmaipada (lesson ucya + yās endings; Gonda √bhū swapped)
    {
      id: "vac-3sg",
      // lesson endings on ucya; Gonda §83 bhūyāt shape (p.67)
      dev: "उच्यात्",
      iast: "ucyāt",
      meaning: "he/she/it (one) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-3du",
      // lesson endings on ucya
      dev: "उच्याताम्",
      iast: "ucyātām",
      meaning: "they (two) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-3pl",
      // lesson endings on ucya
      dev: "उच्यासुः",
      iast: "ucyāsuḥ",
      meaning: "they (many) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-2sg",
      // lesson endings on ucya
      dev: "उच्याः",
      iast: "ucyāḥ",
      meaning: "you (one) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-2du",
      // lesson endings on ucya
      dev: "उच्यास्तम्",
      iast: "ucyāstam",
      meaning: "you (two) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-2pl",
      // lesson endings on ucya
      dev: "उच्यास्त",
      iast: "ucyāsta",
      meaning: "you (many) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-1sg",
      // lesson endings on ucya; Gonda §83 bhūyāsam shape (p.67)
      dev: "उच्यासम्",
      iast: "ucyāsam",
      meaning: "I (one) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-1du",
      // lesson endings on ucya
      dev: "उच्यास्व",
      iast: "ucyāsva",
      meaning: "we (two) vac",
      unit: "word",
      group: "vac|blessing",
    },
    {
      id: "vac-1pl",
      // lesson endings on ucya
      dev: "उच्यास्म",
      iast: "ucyāsma",
      meaning: "we (many) vac",
      unit: "word",
      group: "vac|blessing",
    },
  ] as QuizDeckItem[],
};
