/**
 * Drill card provenance:
 * - kṛ-*: causal stem kāraya. Gonda §97 kārayati (p.73); lesson kāri→kārayati.
 *   Present persons as bhū-class (lesson “Using the root”).
 * - nī-*: causal stem nāyaya. Gonda §97 nāyayati (p.73); lesson nāyi→nāyayati.
 * - car-*: causal stem cāraya. Gonda §97 pat→pātaya swapped to lesson √car.
 * - kṛ future: stem kārayiṣya. Gonda §98 ay+iṣya (p.74); lesson kārayiṣyati.
 * First Steps has no causative paradigm (only gamaya in a mantra, p.154).
 * Dual from the present-tense naya 3×3 (Gonda tables often omit dual).
 * Groups are root|causal-present or root|causal-future.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-causal-roots",
  titleEn: "Causal roots",
  titleIast: "ṇijanta",
  lessonId: "verbs-causal-roots",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // kṛ|causal-present — stem kāraya
    {
      id: "kr-3sg",
      // Gonda §97 (p.73) kārayati; lesson kāri→kārayati; bhū-class persons
      dev: "कारयति",
      iast: "kārayati",
      meaning: "he/she/it (one) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-3du",
      // naya dual on causal kāraya
      dev: "कारयतः",
      iast: "kārayataḥ",
      meaning: "they (two) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-3pl",
      // Gonda §97 / lesson bhū-class on kāraya; kṛ causal
      dev: "कारयन्ति",
      iast: "kārayanti",
      meaning: "they (many) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-2sg",
      // Gonda §97 / lesson bhū-class on kāraya; kṛ causal
      dev: "कारयसि",
      iast: "kārayasi",
      meaning: "you (one) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-2du",
      // naya dual on causal kāraya
      dev: "कारयथः",
      iast: "kārayathaḥ",
      meaning: "you (two) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-2pl",
      // Gonda §97 / lesson bhū-class on kāraya; kṛ causal
      dev: "कारयथ",
      iast: "kārayatha",
      meaning: "you (many) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-1sg",
      // Gonda §97 / lesson bhū-class on kāraya; kṛ causal
      dev: "कारयामि",
      iast: "kārayāmi",
      meaning: "I (one) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-1du",
      // naya dual on causal kāraya
      dev: "कारयावः",
      iast: "kārayāvaḥ",
      meaning: "we (two) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    {
      id: "kr-1pl",
      // Gonda §97 / lesson bhū-class on kāraya; kṛ causal
      dev: "कारयामः",
      iast: "kārayāmaḥ",
      meaning: "we (many) kāraya",
      unit: "word",
      group: "kṛ|causal-present",
    },
    // nī|causal-present — stem nāyaya
    {
      id: "ni-3sg",
      // Gonda §97 (p.73) nāyayati; lesson nāyi→nāyayati
      dev: "नाययति",
      iast: "nāyayati",
      meaning: "he/she/it (one) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-3du",
      // naya dual on causal nāyaya
      dev: "नाययतः",
      iast: "nāyayataḥ",
      meaning: "they (two) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-3pl",
      // Gonda §97 / lesson bhū-class on nāyaya; nī causal
      dev: "नाययन्ति",
      iast: "nāyayanti",
      meaning: "they (many) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-2sg",
      // Gonda §97 / lesson bhū-class on nāyaya; nī causal
      dev: "नाययसि",
      iast: "nāyayasi",
      meaning: "you (one) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-2du",
      // naya dual on causal nāyaya
      dev: "नाययथः",
      iast: "nāyayathaḥ",
      meaning: "you (two) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-2pl",
      // Gonda §97 / lesson bhū-class on nāyaya; nī causal
      dev: "नाययथ",
      iast: "nāyayatha",
      meaning: "you (many) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-1sg",
      // Gonda §97 / lesson bhū-class on nāyaya; nī causal
      dev: "नाययामि",
      iast: "nāyayāmi",
      meaning: "I (one) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-1du",
      // naya dual on causal nāyaya
      dev: "नाययावः",
      iast: "nāyayāvaḥ",
      meaning: "we (two) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    {
      id: "ni-1pl",
      // Gonda §97 / lesson bhū-class on nāyaya; nī causal
      dev: "नाययामः",
      iast: "nāyayāmaḥ",
      meaning: "we (many) nāyaya",
      unit: "word",
      group: "nī|causal-present",
    },
    // car|causal-present — stem cāraya
    {
      id: "car-3sg",
      // Gonda §97 (p.73) pat→pātayati swapped to lesson √car cāraya
      dev: "चारयति",
      iast: "cārayati",
      meaning: "he/she/it (one) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-3du",
      // naya dual on causal cāraya
      dev: "चारयतः",
      iast: "cārayataḥ",
      meaning: "they (two) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-3pl",
      // Gonda §97 / lesson bhū-class on cāraya; car causal
      dev: "चारयन्ति",
      iast: "cārayanti",
      meaning: "they (many) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-2sg",
      // Gonda §97 / lesson bhū-class on cāraya; car causal
      dev: "चारयसि",
      iast: "cārayasi",
      meaning: "you (one) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-2du",
      // naya dual on causal cāraya
      dev: "चारयथः",
      iast: "cārayathaḥ",
      meaning: "you (two) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-2pl",
      // Gonda §97 / lesson bhū-class on cāraya; car causal
      dev: "चारयथ",
      iast: "cārayatha",
      meaning: "you (many) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-1sg",
      // Gonda §97 / lesson bhū-class on cāraya; car causal
      dev: "चारयामि",
      iast: "cārayāmi",
      meaning: "I (one) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-1du",
      // naya dual on causal cāraya
      dev: "चारयावः",
      iast: "cārayāvaḥ",
      meaning: "we (two) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    {
      id: "car-1pl",
      // Gonda §97 / lesson bhū-class on cāraya; car causal
      dev: "चारयामः",
      iast: "cārayāmaḥ",
      meaning: "we (many) cāraya",
      unit: "word",
      group: "car|causal-present",
    },
    // kṛ|causal-future — stem kārayiṣya
    {
      id: "kr-fut-3sg",
      // Gonda §98 kārayiṣyati (p.74); lesson kārayiṣyati
      dev: "कारयिष्यति",
      iast: "kārayiṣyati",
      meaning: "he/she/it (one) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-3du",
      // naya dual on future stem kārayiṣya
      dev: "कारयिष्यतः",
      iast: "kārayiṣyataḥ",
      meaning: "they (two) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-3pl",
      // Gonda §98 ay+iṣya on kāraya; future persons
      dev: "कारयिष्यन्ति",
      iast: "kārayiṣyanti",
      meaning: "they (many) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-2sg",
      // Gonda §98 ay+iṣya on kāraya; future persons
      dev: "कारयिष्यसि",
      iast: "kārayiṣyasi",
      meaning: "you (one) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-2du",
      // naya dual on future stem kārayiṣya
      dev: "कारयिष्यथः",
      iast: "kārayiṣyathaḥ",
      meaning: "you (two) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-2pl",
      // Gonda §98 ay+iṣya on kāraya; future persons
      dev: "कारयिष्यथ",
      iast: "kārayiṣyatha",
      meaning: "you (many) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-1sg",
      // Gonda §98 ay+iṣya on kāraya; future persons
      dev: "कारयिष्यामि",
      iast: "kārayiṣyāmi",
      meaning: "I (one) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-1du",
      // naya dual on future stem kārayiṣya
      dev: "कारयिष्यावः",
      iast: "kārayiṣyāvaḥ",
      meaning: "we (two) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
    {
      id: "kr-fut-1pl",
      // Gonda §98 ay+iṣya on kāraya; future persons
      dev: "कारयिष्यामः",
      iast: "kārayiṣyāmaḥ",
      meaning: "we (many) kārayiṣya",
      unit: "word",
      group: "kṛ|causal-future",
    },
  ] as QuizDeckItem[],
};
