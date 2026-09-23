/**
 * Drill card provenance (Gonda §109 p.82; lesson ca-paraphrase / number-gender rule):
 * - itaretara|dual: lesson rāmasīte; Gonda hastyaśvau, sutabhārye kept;
 *   hastin→gaja / aśva / nara swaps; suta→putra.
 * - itaretara|plural: lesson rāmasītālakṣmaṇāḥ, phalapuṣpāṇi (+ order swap);
 *   Gonda hastyaśvāḥ, vṛkasiṃhavyāghrāḥ kept; animal triple → aśva-gaja-nara;
 *   dual pair → plural aśvagajāḥ.
 * - samāhāra: lesson āhāranidrābhayam, pāṇipādam; Gonda sukhaduḥkham, aharniśam;
 *   abstract swap śītam+uṣṇam → śītoṣṇam.
 * Reshaped mātāpitarau / mitrāvaruṇau / dyāvāpṛthivī omitted (one-offs, <4).
 * First Steps has no dvandva exercise (glossary “Compound” only).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-dvandva",
  titleEn: "The dvandva",
  titleIast: "dvandva",
  lessonId: "compounds-the-dvandva",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // itaretara|dual
    {
      id: "ramasite",
      // lesson glyph
      dev: "रामसीते",
      iast: "rāmasīte",
      meaning: "rāmaḥ sītā ca",
      unit: "word",
      group: "itaretara|dual",
    },
    {
      id: "hastyasvau",
      // Gonda §109 a; kept
      dev: "हस्त्यश्वौ",
      iast: "hastyaśvau",
      meaning: "hastī aśvaḥ ca",
      unit: "word",
      group: "itaretara|dual",
    },
    {
      id: "sutabharye",
      // Gonda §109 a; kept
      dev: "सुतभार्ये",
      iast: "sutabhārye",
      meaning: "sutaḥ bhāryā ca",
      unit: "word",
      group: "itaretara|dual",
    },
    {
      id: "gajasvau",
      // Gonda §109 a shape; hastin→gaja
      dev: "गजाश्वौ",
      iast: "gajāśvau",
      meaning: "gajaḥ aśvaḥ ca",
      unit: "word",
      group: "itaretara|dual",
    },
    {
      id: "asvagajau",
      // Gonda §109 a shape; aśva + gaja
      dev: "अश्वगजौ",
      iast: "aśvagajau",
      meaning: "aśvaḥ gajaḥ ca",
      unit: "word",
      group: "itaretara|dual",
    },
    {
      id: "narasvau",
      // Gonda §109 a shape; nara + aśva
      dev: "नराश्वौ",
      iast: "narāśvau",
      meaning: "naraḥ aśvaḥ ca",
      unit: "word",
      group: "itaretara|dual",
    },
    {
      id: "gajanarau",
      // Gonda §109 a shape; gaja + nara
      dev: "गजनरौ",
      iast: "gajanarau",
      meaning: "gajaḥ naraḥ ca",
      unit: "word",
      group: "itaretara|dual",
    },
    {
      id: "putrabharye",
      // Gonda §109 a shape; suta→putra
      dev: "पुत्रभार्ये",
      iast: "putrabhārye",
      meaning: "putraḥ bhāryā ca",
      unit: "word",
      group: "itaretara|dual",
    },
    // itaretara|plural
    {
      id: "ramasitalaksmanah",
      // lesson glyph
      dev: "रामसीतालक्ष्मणाः",
      iast: "rāmasītālakṣmaṇāḥ",
      meaning: "rāmaḥ sītā lakṣmaṇaḥ ca",
      unit: "word",
      group: "itaretara|plural",
    },
    {
      id: "phalapuspani",
      // lesson glyph
      dev: "फलपुष्पाणि",
      iast: "phalapuṣpāṇi",
      meaning: "phalāni puṣpāṇi ca",
      unit: "word",
      group: "itaretara|plural",
    },
    {
      id: "puspaphalani",
      // lesson phala-puṣpa order swap
      dev: "पुष्पफलानि",
      iast: "puṣpaphalāni",
      meaning: "puṣpāṇi phalāni ca",
      unit: "word",
      group: "itaretara|plural",
    },
    {
      id: "hastyasvah",
      // Gonda §109 a; kept
      dev: "हस्त्यश्वाः",
      iast: "hastyaśvāḥ",
      meaning: "hastinaḥ aśvāḥ ca",
      unit: "word",
      group: "itaretara|plural",
    },
    {
      id: "vrkasimhavyaghrah",
      // Gonda §109 a; kept
      dev: "वृकसिंहव्याघ्राः",
      iast: "vṛkasiṃhavyāghrāḥ",
      meaning: "vṛkaḥ siṃhaḥ vyāghraḥ ca",
      unit: "word",
      group: "itaretara|plural",
    },
    {
      id: "asvagajah",
      // Gonda hastyaśvāḥ shape; aśva + gaja
      dev: "अश्वगजाः",
      iast: "aśvagajāḥ",
      meaning: "aśvāḥ gajāḥ ca",
      unit: "word",
      group: "itaretara|plural",
    },
    {
      id: "asvagajanarah",
      // Gonda vṛka-siṃha-vyāghra → aśva-gaja-nara
      dev: "अश्वगजनराः",
      iast: "aśvagajanarāḥ",
      meaning: "aśvaḥ gajaḥ naraḥ ca",
      unit: "word",
      group: "itaretara|plural",
    },
    // samāhāra
    {
      id: "aharanidrabhayam",
      // lesson glyph
      dev: "आहारनिद्राभयम्",
      iast: "āhāranidrābhayam",
      meaning: "āhāraḥ nidrā bhayam ca",
      unit: "word",
      group: "samāhāra",
    },
    {
      id: "panipadam",
      // lesson glyph
      dev: "पाणिपादम्",
      iast: "pāṇipādam",
      meaning: "pāṇiḥ pādaḥ ca",
      unit: "word",
      group: "samāhāra",
    },
    {
      id: "sukhaduhkham",
      // Gonda §109 b; kept
      dev: "सुखदुःखम्",
      iast: "sukhaduḥkham",
      meaning: "sukham duḥkham ca",
      unit: "word",
      group: "samāhāra",
    },
    {
      id: "aharnisam",
      // Gonda §109 b; kept
      dev: "अहर्निशम्",
      iast: "aharniśam",
      meaning: "ahaḥ niśā ca",
      unit: "word",
      group: "samāhāra",
    },
    {
      id: "sitosnam",
      // Gonda §109 b shape; sukha/duḥkha → śīta/uṣṇa
      dev: "शीतोष्णम्",
      iast: "śītoṣṇam",
      meaning: "śītam uṣṇam ca",
      unit: "word",
      group: "samāhāra",
    },
  ] as QuizDeckItem[],
};
