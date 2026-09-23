/**
 * Drill card provenance:
 * - gati|karoti-gacchati-bhavati: printed lesson glyphs (alaṃ / sat / namas + karoti;
 *   antar + gacchati; āvis + bhavati). First Steps §5.2 (p.108) puts prefixes aside;
 *   Gonda §107 I (p.80) notes alaṃkaroti as adverb+verb — no gati paradigm drill.
 * - cvi|karoti / cvi|bhavati: lesson cvi rule (a/i → ī, u → ū, ṛ → rī) + kṛ/bhū.
 *   Stems kṛṣṇa, śuci, paśu, mātṛ from the lesson; bahula / eka swapped in from
 *   Gonda §107 II (p.81) bahulībhavati / ekībhavati. śuci/paśu/mātṛ + bhavati and
 *   bahula/eka + karoti apply the same printed join.
 * -sāt (bhasmasātkaroti / bhasmasādbhavati) omitted: only two distinct IAST.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "uninflected-other-prefixes",
  titleEn: "Other prefixes",
  titleIast: "prādi",
  lessonId: "uninflected-other-prefixes",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // gati — printed cells only
    {
      id: "alamkaroti",
      // lesson glyph; Gonda §107 I alaṃkaroti
      dev: "अलंकरोति",
      iast: "alaṃkaroti",
      meaning: "decorates, adorns",
      unit: "word",
      group: "gati|examples",
    },
    {
      id: "satkaroti",
      // lesson glyph
      dev: "सत्करोति",
      iast: "satkaroti",
      meaning: "honors, respects",
      unit: "word",
      group: "gati|examples",
    },
    {
      id: "namaskaroti",
      // lesson glyph
      dev: "नमस्करोति",
      iast: "namaskaroti",
      meaning: "honors, venerates",
      unit: "word",
      group: "gati|examples",
    },
    {
      id: "antargacchati",
      // lesson glyph
      dev: "अन्तर्गच्छति",
      iast: "antargacchati",
      meaning: "goes within; disappears",
      unit: "word",
      group: "gati|examples",
    },
    {
      id: "avirbhavati",
      // lesson glyph
      dev: "आविर्भवति",
      iast: "āvirbhavati",
      meaning: "becomes apparent or manifest",
      unit: "word",
      group: "gati|examples",
    },
    // cvi|karoti
    {
      id: "krsnikaroti",
      // lesson glyph
      dev: "कृष्णीकरोति",
      iast: "kṛṣṇīkaroti",
      meaning: "makes black",
      unit: "word",
      group: "cvi|karoti",
    },
    {
      id: "sucikaroti",
      // lesson glyph
      dev: "शुचीकरोति",
      iast: "śucīkaroti",
      meaning: "makes clear",
      unit: "word",
      group: "cvi|karoti",
    },
    {
      id: "pasukaroti",
      // lesson glyph
      dev: "पशूकरोति",
      iast: "paśūkaroti",
      meaning: "makes (someone) a beast",
      unit: "word",
      group: "cvi|karoti",
    },
    {
      id: "matrikaroti",
      // lesson glyph
      dev: "मात्रीकरोति",
      iast: "mātrīkaroti",
      meaning: "makes (someone their) mother",
      unit: "word",
      group: "cvi|karoti",
    },
    {
      id: "bahulikaroti",
      // Gonda §107 II bahula → bahulī-; karoti join from lesson
      dev: "बहुलीकरोति",
      iast: "bahulīkaroti",
      meaning: "makes abundant",
      unit: "word",
      group: "cvi|karoti",
    },
    {
      id: "ekikaroti",
      // Gonda §107 II eka → ekī-; karoti join from lesson
      dev: "एकीकरोति",
      iast: "ekīkaroti",
      meaning: "makes one; unites",
      unit: "word",
      group: "cvi|karoti",
    },
    // cvi|bhavati
    {
      id: "krsnibhavati",
      // lesson glyph
      dev: "कृष्णीभवति",
      iast: "kṛṣṇībhavati",
      meaning: "becomes black",
      unit: "word",
      group: "cvi|bhavati",
    },
    {
      id: "sucibhavati",
      // lesson śuci → śucī-; bhavati join from kṛṣṇībhavati
      dev: "शुचीभवति",
      iast: "śucībhavati",
      meaning: "becomes clear",
      unit: "word",
      group: "cvi|bhavati",
    },
    {
      id: "pasubhavati",
      // lesson paśu → paśū-; bhavati join from kṛṣṇībhavati
      dev: "पशूभवति",
      iast: "paśūbhavati",
      meaning: "becomes a beast",
      unit: "word",
      group: "cvi|bhavati",
    },
    {
      id: "matribhavati",
      // lesson mātṛ → mātrī-; bhavati join from kṛṣṇībhavati
      dev: "मात्रीभवति",
      iast: "mātrībhavati",
      meaning: "becomes a mother",
      unit: "word",
      group: "cvi|bhavati",
    },
    {
      id: "bahulibhavati",
      // Gonda §107 II; bahula → bahulībhavati
      dev: "बहुलीभवति",
      iast: "bahulībhavati",
      meaning: "becomes abundant; multiplies",
      unit: "word",
      group: "cvi|bhavati",
    },
    {
      id: "ekibhavati",
      // Gonda §107 II; eka → ekībhavati
      dev: "एकीभवति",
      iast: "ekībhavati",
      meaning: "becomes one; unites",
      unit: "word",
      group: "cvi|bhavati",
    },
  ] as QuizDeckItem[],
};
