/**
 * Drill card provenance:
 * - bhu-*: lesson bhū distant-future (luṭ) table — printed cells.
 *   Cue: Gonda §73 p.63 (dā paradigm; textbook verb swapped).
 * - gam-*: same -tā + as join the lesson shows (gantā / gantāsmi glyphs).
 * - jiv-*: same -itā + as join as bhū; Gonda §73 lists jīvitāsmi (dā → jīv).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-distant-future-tense",
  titleEn: "The distant future tense",
  titleIast: "luṭ",
  lessonId: "verbs-the-distant-future-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // bhū|distant-future — lesson table
    {
      id: "bhu-3sg",
      // lesson bhū table; Gonda §73 dātā shape (p.63)
      dev: "भविता",
      iast: "bhavitā",
      meaning: "he/she/it (one) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-3du",
      // lesson bhū table
      dev: "भवितारौ",
      iast: "bhavitārau",
      meaning: "they (two) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-3pl",
      // lesson bhū table; Gonda §73 dātāras (p.63)
      dev: "भवितारः",
      iast: "bhavitāraḥ",
      meaning: "they (many) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-2sg",
      // lesson bhū table; Gonda §73 dātāsi (p.63)
      dev: "भवितासि",
      iast: "bhavitāsi",
      meaning: "you (one) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-2du",
      // lesson bhū table
      dev: "भवितास्थः",
      iast: "bhavitāsthaḥ",
      meaning: "you (two) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-2pl",
      // lesson bhū table; Gonda §73 dātāstha (p.63)
      dev: "भवितास्थ",
      iast: "bhavitāstha",
      meaning: "you (many) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-1sg",
      // lesson bhū table; Gonda §73 dātāsmi / bhavitāsmi (p.63)
      dev: "भवितास्मि",
      iast: "bhavitāsmi",
      meaning: "I (one) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-1du",
      // lesson bhū table
      dev: "भवितास्वः",
      iast: "bhavitāsvaḥ",
      meaning: "we (two) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    {
      id: "bhu-1pl",
      // lesson bhū table; Gonda §73 dātāsmas (p.63)
      dev: "भवितास्मः",
      iast: "bhavitāsmaḥ",
      meaning: "we (many) bhū",
      unit: "word",
      group: "bhū|distant-future",
    },
    // gam|distant-future — lesson gantā join
    {
      id: "gam-3sg",
      // lesson glyph gantā; same 3sg join as bhavitā
      dev: "गन्ता",
      iast: "gantā",
      meaning: "he/she/it (one) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-3du",
      // lesson -tā + dual case-1 ending (bhavitārau)
      dev: "गन्तारौ",
      iast: "gantārau",
      meaning: "they (two) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-3pl",
      // lesson -tā + plural case-1 ending (bhavitāraḥ)
      dev: "गन्तारः",
      iast: "gantāraḥ",
      meaning: "they (many) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-2sg",
      // lesson -tā + asi (bhavitāsi)
      dev: "गन्तासि",
      iast: "gantāsi",
      meaning: "you (one) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-2du",
      // lesson -tā + sthaḥ (bhavitāsthaḥ)
      dev: "गन्तास्थः",
      iast: "gantāsthaḥ",
      meaning: "you (two) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-2pl",
      // lesson -tā + stha (bhavitāstha)
      dev: "गन्तास्थ",
      iast: "gantāstha",
      meaning: "you (many) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-1sg",
      // lesson glyph gantāsmi
      dev: "गन्तास्मि",
      iast: "gantāsmi",
      meaning: "I (one) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-1du",
      // lesson -tā + svaḥ (bhavitāsvaḥ)
      dev: "गन्तास्वः",
      iast: "gantāsvaḥ",
      meaning: "we (two) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    {
      id: "gam-1pl",
      // lesson -tā + smaḥ (bhavitāsmaḥ)
      dev: "गन्तास्मः",
      iast: "gantāsmaḥ",
      meaning: "we (many) gam",
      unit: "word",
      group: "gam|distant-future",
    },
    // jīv|distant-future — Gonda §73 dā → jīv
    {
      id: "jiv-3sg",
      // Gonda §73 jīvitāsmi cue; same -itā join as bhavitā (dā → jīv)
      dev: "जीविता",
      iast: "jīvitā",
      meaning: "he/she/it (one) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-3du",
      // same dual join as bhavitārau
      dev: "जीवितारौ",
      iast: "jīvitārau",
      meaning: "they (two) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-3pl",
      // same plural join as bhavitāraḥ
      dev: "जीवितारः",
      iast: "jīvitāraḥ",
      meaning: "they (many) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-2sg",
      // same 2sg join as bhavitāsi
      dev: "जीवितासि",
      iast: "jīvitāsi",
      meaning: "you (one) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-2du",
      // same 2du join as bhavitāsthaḥ
      dev: "जीवितास्थः",
      iast: "jīvitāsthaḥ",
      meaning: "you (two) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-2pl",
      // same 2pl join as bhavitāstha
      dev: "जीवितास्थ",
      iast: "jīvitāstha",
      meaning: "you (many) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-1sg",
      // Gonda §73 jīvitāsmi (p.63); dā → jīv
      dev: "जीवितास्मि",
      iast: "jīvitāsmi",
      meaning: "I (one) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-1du",
      // same 1du join as bhavitāsvaḥ
      dev: "जीवितास्वः",
      iast: "jīvitāsvaḥ",
      meaning: "we (two) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
    {
      id: "jiv-1pl",
      // same 1pl join as bhavitāsmaḥ
      dev: "जीवितास्मः",
      iast: "jīvitāsmaḥ",
      meaning: "we (many) jīv",
      unit: "word",
      group: "jīv|distant-future",
    },
  ] as QuizDeckItem[],
};
