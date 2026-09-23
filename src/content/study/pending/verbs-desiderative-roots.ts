/**
 * Drill card provenance:
 * Cue: Gonda Concise Elementary Grammar §99 desideratives (p.74) — reduplicated
 * -sa/-iṣa stems conjugated like class I; paradigm verb pā → pipāsati swapped to
 * lesson √gam (jigamiṣa), √kṛ (cikīrṣa), √labh (lipsa). First Steps Towards Sanskrit
 * has no desiderative section.
 * - jigamis-*: lesson jigamiṣāmi; tud-class present join on jigamiṣa (special
 *   tense-moods as tud).
 * - cikirs-para-*: lesson cikīrṣāmi / cikīrṣanti; same present join.
 * - cikirs-atm-*: lesson cikīrṣe; ātmanepada present on cikīrṣa (same pada as kṛ).
 * - lips-*: lesson lipsase; ātmanepada present on lipsa (irregular labh → lips).
 * - stem-*: lesson ṛ/ṝ → īr / ūr stem family (cikīrṣ, titīrṣ, pupūrṣ, mumūrṣ).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-desiderative-roots",
  titleEn: "Desiderative roots",
  titleIast: "sananta",
  lessonId: "verbs-desiderative-roots",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // gam|present — stem jigamiṣa
    {
      id: "jigamis-3sg",
      // Gonda §99 pipāsati shape (p.74); √pā→√gam, stem jigamiṣa
      dev: "जिगमिषति",
      iast: "jigamiṣati",
      meaning: "3rd (one) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-3du",
      // tud-class present dual on jigamiṣa
      dev: "जिगमिषतः",
      iast: "jigamiṣataḥ",
      meaning: "3rd (two) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-3pl",
      // tud-class present plural on jigamiṣa
      dev: "जिगमिषन्ति",
      iast: "jigamiṣanti",
      meaning: "3rd (many) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-2sg",
      // tud-class present on jigamiṣa
      dev: "जिगमिषसि",
      iast: "jigamiṣasi",
      meaning: "2nd (one) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-2du",
      // tud-class present on jigamiṣa
      dev: "जिगमिषथः",
      iast: "jigamiṣathaḥ",
      meaning: "2nd (two) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-2pl",
      // tud-class present on jigamiṣa
      dev: "जिगमिषथ",
      iast: "jigamiṣatha",
      meaning: "2nd (many) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-1sg",
      // lesson jigamiṣāmi
      dev: "जिगमिषामि",
      iast: "jigamiṣāmi",
      meaning: "1st (one) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-1du",
      // tud-class present on jigamiṣa
      dev: "जिगमिषावः",
      iast: "jigamiṣāvaḥ",
      meaning: "1st (two) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    {
      id: "jigamis-1pl",
      // tud-class present on jigamiṣa
      dev: "जिगमिषामः",
      iast: "jigamiṣāmaḥ",
      meaning: "1st (many) jigamiṣa — present",
      unit: "word",
      group: "gam|present",
    },
    // kṛ|present — stem cikīrṣa, parasmaipada
    {
      id: "cikirs-para-3sg",
      // Gonda §99 cikīrṣati (p.74); lesson stem cikīrṣ
      dev: "चिकीर्षति",
      iast: "cikīrṣati",
      meaning: "3rd (one) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-3du",
      // tud-class present on cikīrṣa
      dev: "चिकीर्षतः",
      iast: "cikīrṣataḥ",
      meaning: "3rd (two) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-3pl",
      // lesson cikīrṣanti
      dev: "चिकीर्षन्ति",
      iast: "cikīrṣanti",
      meaning: "3rd (many) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-2sg",
      // tud-class present on cikīrṣa
      dev: "चिकीर्षसि",
      iast: "cikīrṣasi",
      meaning: "2nd (one) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-2du",
      // tud-class present on cikīrṣa
      dev: "चिकीर्षथः",
      iast: "cikīrṣathaḥ",
      meaning: "2nd (two) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-2pl",
      // tud-class present on cikīrṣa
      dev: "चिकीर्षथ",
      iast: "cikīrṣatha",
      meaning: "2nd (many) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-1sg",
      // lesson cikīrṣāmi
      dev: "चिकीर्षामि",
      iast: "cikīrṣāmi",
      meaning: "1st (one) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-1du",
      // tud-class present on cikīrṣa
      dev: "चिकीर्षावः",
      iast: "cikīrṣāvaḥ",
      meaning: "1st (two) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-para-1pl",
      // tud-class present on cikīrṣa
      dev: "चिकीर्षामः",
      iast: "cikīrṣāmaḥ",
      meaning: "1st (many) cikīrṣa, parasmaipada — present",
      unit: "word",
      group: "kṛ|present",
    },
    // kṛ|present — stem cikīrṣa, ātmanepada
    {
      id: "cikirs-atm-3sg",
      // ātmanepada present on cikīrṣa (lesson same-pada rule)
      dev: "चिकीर्षते",
      iast: "cikīrṣate",
      meaning: "3rd (one) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-3du",
      // ātmanepada present on cikīrṣa
      dev: "चिकीर्षेते",
      iast: "cikīrṣete",
      meaning: "3rd (two) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-3pl",
      // ātmanepada present on cikīrṣa
      dev: "चिकीर्षन्ते",
      iast: "cikīrṣante",
      meaning: "3rd (many) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-2sg",
      // ātmanepada present on cikīrṣa
      dev: "चिकीर्षसे",
      iast: "cikīrṣase",
      meaning: "2nd (one) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-2du",
      // ātmanepada present on cikīrṣa
      dev: "चिकीर्षेथे",
      iast: "cikīrṣethe",
      meaning: "2nd (two) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-2pl",
      // ātmanepada present on cikīrṣa
      dev: "चिकीर्षध्वे",
      iast: "cikīrṣadhve",
      meaning: "2nd (many) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-1sg",
      // lesson cikīrṣe
      dev: "चिकीर्षे",
      iast: "cikīrṣe",
      meaning: "1st (one) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-1du",
      // ātmanepada present on cikīrṣa
      dev: "चिकीर्षावहे",
      iast: "cikīrṣāvahe",
      meaning: "1st (two) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    {
      id: "cikirs-atm-1pl",
      // ātmanepada present on cikīrṣa
      dev: "चिकीर्षामहे",
      iast: "cikīrṣāmahe",
      meaning: "1st (many) cikīrṣa, ātmanepada — present",
      unit: "word",
      group: "kṛ|present",
    },
    // labh|present — stem lipsa, ātmanepada
    {
      id: "lips-3sg",
      // irregular labh → lips; ātmanepada present (Gonda §99 shape; √pā→√labh)
      dev: "लिप्सते",
      iast: "lipsate",
      meaning: "3rd (one) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-3du",
      // ātmanepada present on lipsa
      dev: "लिप्सेते",
      iast: "lipsete",
      meaning: "3rd (two) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-3pl",
      // ātmanepada present on lipsa
      dev: "लिप्सन्ते",
      iast: "lipsante",
      meaning: "3rd (many) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-2sg",
      // lesson lipsase
      dev: "लिप्ससे",
      iast: "lipsase",
      meaning: "2nd (one) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-2du",
      // ātmanepada present on lipsa
      dev: "लिप्सेथे",
      iast: "lipsethe",
      meaning: "2nd (two) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-2pl",
      // ātmanepada present on lipsa
      dev: "लिप्सध्वे",
      iast: "lipsadhve",
      meaning: "2nd (many) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-1sg",
      // ātmanepada present on lipsa
      dev: "लिप्से",
      iast: "lipse",
      meaning: "1st (one) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-1du",
      // ātmanepada present on lipsa
      dev: "लिप्सावहे",
      iast: "lipsāvahe",
      meaning: "1st (two) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "lips-1pl",
      // ātmanepada present on lipsa
      dev: "लिप्सामहे",
      iast: "lipsāmahe",
      meaning: "1st (many) lipsa — present",
      unit: "word",
      group: "labh|present",
    },
    // ṛ|desiderative — lesson ṛ/ṝ → īr (ūr after lip) stem family
    {
      id: "stem-cikirs",
      // lesson kṛ → cikīrṣ
      dev: "चिकीर्ष्",
      iast: "cikīrṣ",
      meaning: "desiderative of kṛ",
      unit: "word",
      group: "ṛ|desiderative",
    },
    {
      id: "stem-titirs",
      // lesson tṝ → titīrṣ
      dev: "तितीर्ष्",
      iast: "titīrṣ",
      meaning: "desiderative of tṝ",
      unit: "word",
      group: "ṛ|desiderative",
    },
    {
      id: "stem-pupurs",
      // lesson pṝ → pupūrṣ (ūr after lip)
      dev: "पुपूर्ष्",
      iast: "pupūrṣ",
      meaning: "desiderative of pṝ",
      unit: "word",
      group: "ṛ|desiderative",
    },
    {
      id: "stem-mumurs",
      // lesson mṛ → mumūrṣ (ūr after lip)
      dev: "मुमूर्ष्",
      iast: "mumūrṣ",
      meaning: "desiderative of mṛ",
      unit: "word",
      group: "ṛ|desiderative",
    },
  ] as QuizDeckItem[],
};
