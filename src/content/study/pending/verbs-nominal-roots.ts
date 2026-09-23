/**
 * Drill card provenance:
 * - miśra-*: denominative -i stem miśraya (lesson miśrayati). First Steps §7.3
 *   √cur → coraya present-active (pp.130–131); textbook verb swapped to miśra.
 *   Gonda §98 (p.74) lists aya-denominatives as 3sg only (amitra-yati, varṇa-yati,
 *   cora-yati); same aya-shape, noun swapped to lesson miśra.
 * - putrīy-*: denominative -ya stem putrīya (lesson putrīyati). Same present
 *   person endings on the printed -ya stem; First Steps Class X shape, noun kept
 *   as lesson putra → putrīya.
 * - yaśaskāmy-*: denominative -kāmya stem yaśaskāmya (lesson yaśaskāmyati). Same
 *   endings; noun kept as lesson yaśas.
 * Dual included from the present-tense naya 3×3 (First Steps Class X omits dual).
 * Groups are denominative-root|present so distractors stay inside that root and tense.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-nominal-roots",
  titleEn: "Nominal roots",
  titleIast: "nāmadhātu",
  lessonId: "verbs-nominal-roots",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // miśra|present — -i, stem miśraya
    {
      id: "misra-3sg",
      // lesson miśrayati; First Steps §7.3 corayati (p.131); √cur→miśra
      dev: "मिश्रयति",
      iast: "miśrayati",
      meaning: "he/she/it (one) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-3du",
      // naya dual on miśraya
      dev: "मिश्रयतः",
      iast: "miśrayataḥ",
      meaning: "they (two) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-3pl",
      // First Steps §7.3 corayanti (p.131); √cur→miśra
      dev: "मिश्रयन्ति",
      iast: "miśrayanti",
      meaning: "they (many) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-2sg",
      // First Steps §7.3 corayasi (p.131); √cur→miśra
      dev: "मिश्रयसि",
      iast: "miśrayasi",
      meaning: "you (one) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-2du",
      // naya dual on miśraya
      dev: "मिश्रयथः",
      iast: "miśrayathaḥ",
      meaning: "you (two) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-2pl",
      // First Steps §7.3 corayatha (p.131); √cur→miśra
      dev: "मिश्रयथ",
      iast: "miśrayatha",
      meaning: "you (many) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-1sg",
      // First Steps §7.3 corayāmi (p.130); √cur→miśra
      dev: "मिश्रयामि",
      iast: "miśrayāmi",
      meaning: "I (one) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-1du",
      // naya dual on miśraya
      dev: "मिश्रयावः",
      iast: "miśrayāvaḥ",
      meaning: "we (two) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    {
      id: "misra-1pl",
      // First Steps §7.3 corayāmaḥ (p.130); √cur→miśra
      dev: "मिश्रयामः",
      iast: "miśrayāmaḥ",
      meaning: "we (many) miśraya",
      unit: "word",
      group: "miśra|present",
    },
    // putrīy|present — -ya, stem putrīya
    {
      id: "putriy-3sg",
      // lesson putrīyati; First Steps §7.3 corayati shape (p.131) on putrīya
      dev: "पुत्रीयति",
      iast: "putrīyati",
      meaning: "he/she/it (one) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-3du",
      // naya dual on putrīya
      dev: "पुत्रीयतः",
      iast: "putrīyataḥ",
      meaning: "they (two) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-3pl",
      // First Steps §7.3 corayanti shape (p.131) on putrīya
      dev: "पुत्रीयन्ति",
      iast: "putrīyanti",
      meaning: "they (many) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-2sg",
      // First Steps §7.3 corayasi shape (p.131) on putrīya
      dev: "पुत्रीयसि",
      iast: "putrīyasi",
      meaning: "you (one) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-2du",
      // naya dual on putrīya
      dev: "पुत्रीयथः",
      iast: "putrīyathaḥ",
      meaning: "you (two) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-2pl",
      // First Steps §7.3 corayatha shape (p.131) on putrīya
      dev: "पुत्रीयथ",
      iast: "putrīyatha",
      meaning: "you (many) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-1sg",
      // First Steps §7.3 corayāmi shape (p.130) on putrīya
      dev: "पुत्रीयामि",
      iast: "putrīyāmi",
      meaning: "I (one) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-1du",
      // naya dual on putrīya
      dev: "पुत्रीयावः",
      iast: "putrīyāvaḥ",
      meaning: "we (two) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    {
      id: "putriy-1pl",
      // First Steps §7.3 corayāmaḥ shape (p.130) on putrīya
      dev: "पुत्रीयामः",
      iast: "putrīyāmaḥ",
      meaning: "we (many) putrīya",
      unit: "word",
      group: "putrīy|present",
    },
    // yaśaskāmy|present — -kāmya, stem yaśaskāmya
    {
      id: "yasaskamy-3sg",
      // lesson yaśaskāmyati; First Steps §7.3 corayati shape (p.131) on yaśaskāmya
      dev: "यशस्काम्यति",
      iast: "yaśaskāmyati",
      meaning: "he/she/it (one) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-3du",
      // naya dual on yaśaskāmya
      dev: "यशस्काम्यतः",
      iast: "yaśaskāmyataḥ",
      meaning: "they (two) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-3pl",
      // First Steps §7.3 corayanti shape (p.131) on yaśaskāmya
      dev: "यशस्काम्यन्ति",
      iast: "yaśaskāmyanti",
      meaning: "they (many) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-2sg",
      // First Steps §7.3 corayasi shape (p.131) on yaśaskāmya
      dev: "यशस्काम्यसि",
      iast: "yaśaskāmyasi",
      meaning: "you (one) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-2du",
      // naya dual on yaśaskāmya
      dev: "यशस्काम्यथः",
      iast: "yaśaskāmyathaḥ",
      meaning: "you (two) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-2pl",
      // First Steps §7.3 corayatha shape (p.131) on yaśaskāmya
      dev: "यशस्काम्यथ",
      iast: "yaśaskāmyatha",
      meaning: "you (many) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-1sg",
      // First Steps §7.3 corayāmi shape (p.130) on yaśaskāmya
      dev: "यशस्काम्यामि",
      iast: "yaśaskāmyāmi",
      meaning: "I (one) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-1du",
      // naya dual on yaśaskāmya
      dev: "यशस्काम्यावः",
      iast: "yaśaskāmyāvaḥ",
      meaning: "we (two) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
    {
      id: "yasaskamy-1pl",
      // First Steps §7.3 corayāmaḥ shape (p.130) on yaśaskāmya
      dev: "यशस्काम्यामः",
      iast: "yaśaskāmyāmaḥ",
      meaning: "we (many) yaśaskāmya",
      unit: "word",
      group: "yaśaskāmy|present",
    },
  ] as QuizDeckItem[],
};
