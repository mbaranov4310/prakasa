/**
 * Drill card provenance:
 * - śuc-*: bhū-class stem śoca. First Steps §7.3 √bhū → bhava present-active
 *   (pp.129–130); textbook verb swapped to √śuc (lesson glyph śocati).
 * - muh-*: div-class stem muhya. First Steps §7.3 √nṛt → nṛtya (p.130);
 *   textbook verb swapped to √muh (lesson glyph muhya).
 * - tud-*: tud-class stem tuda. First Steps §7.3 √likh → likha (p.130);
 *   textbook verb swapped to √tud (lesson glyph tuda).
 * - cint-*: cur-class stem cintaya. First Steps §7.3 √cur → coraya (pp.130–131);
 *   textbook verb swapped to √cint (lesson glyph cintayati; no strengthen).
 * Person endings from the present-tense naya 3×3 (dual included; First Steps
 * omits dual). Groups are root|present so distractors stay inside that root.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-bhu-div-tud-and-cur",
  titleEn: "The bhū, div, tud, and cur classes",
  titleIast: "bhvādi",
  lessonId: "verbs-bhu-div-tud-and-cur",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // śuc|present — bhū class, stem śoca
    {
      id: "suc-3sg",
      // First Steps §7.3 bhavati shape (p.129); √śuc swapped in
      dev: "शोचति",
      iast: "śocati",
      meaning: "he/she/it (one) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-3du",
      // naya dual on śoca
      dev: "शोचतः",
      iast: "śocataḥ",
      meaning: "they (two) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-3pl",
      // First Steps §7.3 bhavanti shape (p.129); √śuc swapped in
      dev: "शोचन्ति",
      iast: "śocanti",
      meaning: "they (many) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-2sg",
      // First Steps §7.3 bhavasi shape (p.129); √śuc swapped in
      dev: "शोचसि",
      iast: "śocasi",
      meaning: "you (one) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-2du",
      // naya dual on śoca
      dev: "शोचथः",
      iast: "śocathaḥ",
      meaning: "you (two) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-2pl",
      // First Steps §7.3 bhavatha shape (p.129); √śuc swapped in
      dev: "शोचथ",
      iast: "śocatha",
      meaning: "you (many) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-1sg",
      // First Steps §7.3 bhavāmi shape (p.129); √śuc swapped in
      dev: "शोचामि",
      iast: "śocāmi",
      meaning: "I (one) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-1du",
      // naya dual on śoca
      dev: "शोचावः",
      iast: "śocāvaḥ",
      meaning: "we (two) śoca",
      unit: "word",
      group: "śuc|present",
    },
    {
      id: "suc-1pl",
      // First Steps §7.3 bhavāmaḥ shape (p.129); √śuc swapped in
      dev: "शोचामः",
      iast: "śocāmaḥ",
      meaning: "we (many) śoca",
      unit: "word",
      group: "śuc|present",
    },
    // muh|present — div class, stem muhya
    {
      id: "muh-3sg",
      // First Steps §7.3 nṛtyati shape (p.130); √muh swapped in
      dev: "मुह्यति",
      iast: "muhyati",
      meaning: "he/she/it (one) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-3du",
      // naya dual on muhya
      dev: "मुह्यतः",
      iast: "muhyataḥ",
      meaning: "they (two) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-3pl",
      // First Steps §7.3 nṛtyanti shape (p.130); √muh swapped in
      dev: "मुह्यन्ति",
      iast: "muhyanti",
      meaning: "they (many) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-2sg",
      // First Steps §7.3 nṛtyasi shape (p.130); √muh swapped in
      dev: "मुह्यसि",
      iast: "muhyasi",
      meaning: "you (one) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-2du",
      // naya dual on muhya
      dev: "मुह्यथः",
      iast: "muhyathaḥ",
      meaning: "you (two) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-2pl",
      // First Steps §7.3 nṛtyatha shape (p.130); √muh swapped in
      dev: "मुह्यथ",
      iast: "muhyatha",
      meaning: "you (many) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-1sg",
      // First Steps §7.3 nṛtyāmi shape (p.130); √muh swapped in
      dev: "मुह्यामि",
      iast: "muhyāmi",
      meaning: "I (one) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-1du",
      // naya dual on muhya
      dev: "मुह्यावः",
      iast: "muhyāvaḥ",
      meaning: "we (two) muhya",
      unit: "word",
      group: "muh|present",
    },
    {
      id: "muh-1pl",
      // First Steps §7.3 nṛtyāmaḥ shape (p.130); √muh swapped in
      dev: "मुह्यामः",
      iast: "muhyāmaḥ",
      meaning: "we (many) muhya",
      unit: "word",
      group: "muh|present",
    },
    // tud|present — tud class, stem tuda
    {
      id: "tud-3sg",
      // First Steps §7.3 likhati shape (p.130); √tud swapped in
      dev: "तुदति",
      iast: "tudati",
      meaning: "he/she/it (one) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-3du",
      // naya dual on tuda
      dev: "तुदतः",
      iast: "tudataḥ",
      meaning: "they (two) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-3pl",
      // First Steps §7.3 likhanti shape (p.130); √tud swapped in
      dev: "तुदन्ति",
      iast: "tudanti",
      meaning: "they (many) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-2sg",
      // First Steps §7.3 likhasi shape (p.130); √tud swapped in
      dev: "तुदसि",
      iast: "tudasi",
      meaning: "you (one) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-2du",
      // naya dual on tuda
      dev: "तुदथः",
      iast: "tudathaḥ",
      meaning: "you (two) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-2pl",
      // First Steps §7.3 likhatha shape (p.130); √tud swapped in
      dev: "तुदथ",
      iast: "tudatha",
      meaning: "you (many) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-1sg",
      // First Steps §7.3 likhāmi shape (p.130); √tud swapped in
      dev: "तुदामि",
      iast: "tudāmi",
      meaning: "I (one) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-1du",
      // naya dual on tuda
      dev: "तुदावः",
      iast: "tudāvaḥ",
      meaning: "we (two) tuda",
      unit: "word",
      group: "tud|present",
    },
    {
      id: "tud-1pl",
      // First Steps §7.3 likhāmaḥ shape (p.130); √tud swapped in
      dev: "तुदामः",
      iast: "tudāmaḥ",
      meaning: "we (many) tuda",
      unit: "word",
      group: "tud|present",
    },
    // cint|present — cur class, stem cintaya
    {
      id: "cint-3sg",
      // First Steps §7.3 corayati shape (p.131); √cint swapped in
      dev: "चिन्तयति",
      iast: "cintayati",
      meaning: "he/she/it (one) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-3du",
      // naya dual on cintaya
      dev: "चिन्तयतः",
      iast: "cintayataḥ",
      meaning: "they (two) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-3pl",
      // First Steps §7.3 corayanti shape (p.131); √cint swapped in
      dev: "चिन्तयन्ति",
      iast: "cintayanti",
      meaning: "they (many) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-2sg",
      // First Steps §7.3 corayasi shape (p.131); √cint swapped in
      dev: "चिन्तयसि",
      iast: "cintayasi",
      meaning: "you (one) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-2du",
      // naya dual on cintaya
      dev: "चिन्तयथः",
      iast: "cintayathaḥ",
      meaning: "you (two) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-2pl",
      // First Steps §7.3 corayatha shape (p.131); √cint swapped in
      dev: "चिन्तयथ",
      iast: "cintayatha",
      meaning: "you (many) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-1sg",
      // First Steps §7.3 corayāmi shape (p.130); √cint swapped in
      dev: "चिन्तयामि",
      iast: "cintayāmi",
      meaning: "I (one) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-1du",
      // naya dual on cintaya
      dev: "चिन्तयावः",
      iast: "cintayāvaḥ",
      meaning: "we (two) cintaya",
      unit: "word",
      group: "cint|present",
    },
    {
      id: "cint-1pl",
      // First Steps §7.3 corayāmaḥ shape (p.130); √cint swapped in
      dev: "चिन्तयामः",
      iast: "cintayāmaḥ",
      meaning: "we (many) cintaya",
      unit: "word",
      group: "cint|present",
    },
  ] as QuizDeckItem[],
};
