/**
 * Drill card provenance:
 * Cue: Gonda Concise Elementary Grammar §67 su present (pp.56–57),
 * §69 tan like su (p.59), §70 krī present (pp.59–60) — one root, person × number.
 * First Steps §7.2–7.3 (pp.126–129) drills present endings on thematic roots
 * only and defers athematic classes. Printed lesson present cells only
 * (su, tan, krī; parasmaipada + ātmanepada); no root swaps — lesson has
 * no stem-formation prose; Gonda āp/śru/kṛ/aś joins differ. Command,
 * potential, and ordinary past left out (this pass is present only).
 * Collapsed su/tan 3du=2du and 3pl=2pl; krī 3du=2du. First of dual/plural
 * first-person alternatives (sunuvaḥ / sunumaḥ and tan counterparts).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-su-tan-and-kri",
  titleEn: "The su, tan, and krī classes",
  titleIast: "svādi",
  lessonId: "verbs-su-tan-and-kri",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // su|present — parasmaipada
    {
      id: "su-para-3sg",
      // lesson su present parasmaipada; Gonda §67 su (pp.56–57)
      dev: "सुनोति",
      iast: "sunoti",
      meaning: "he/she/it (one) su, parasmaipada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-para-3du-2du",
      // lesson su present parasmaipada; Gonda §67 su (pp.56–57)
      dev: "सुनुतः",
      iast: "sunutaḥ",
      meaning: "they (two) / you (two) su, parasmaipada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-para-3pl-2pl",
      // lesson su present parasmaipada; Gonda §67 su (pp.56–57)
      dev: "सुन्वन्ति",
      iast: "sunvanti",
      meaning: "they (many) / you (many) su, parasmaipada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-para-2sg",
      // lesson su present parasmaipada; Gonda §67 su (pp.56–57)
      dev: "सुनोषि",
      iast: "sunoṣi",
      meaning: "you (one) su, parasmaipada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-para-1sg",
      // lesson su present parasmaipada; Gonda §67 su (pp.56–57)
      dev: "सुनोमि",
      iast: "sunomi",
      meaning: "I (one) su, parasmaipada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-para-1du",
      // lesson su present parasmaipada; Gonda §67 su (pp.56–57)
      dev: "सुनुवः",
      iast: "sunuvaḥ",
      meaning: "we (two) su, parasmaipada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-para-1pl",
      // lesson su present parasmaipada; Gonda §67 su (pp.56–57)
      dev: "सुनुमः",
      iast: "sunumaḥ",
      meaning: "we (many) su, parasmaipada",
      unit: "word",
      group: "su|present",
    },
    // su|present — ātmanepada
    {
      id: "su-atma-3sg",
      // lesson su present ātmanepada
      dev: "सुनुते",
      iast: "sunute",
      meaning: "he/she/it (one) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-3du",
      // lesson su present ātmanepada
      dev: "सुन्वाते",
      iast: "sunvāte",
      meaning: "they (two) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-3pl",
      // lesson su present ātmanepada
      dev: "सुन्वते",
      iast: "sunvate",
      meaning: "they (many) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-2sg",
      // lesson su present ātmanepada
      dev: "सुनुषे",
      iast: "sunuṣe",
      meaning: "you (one) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-2du",
      // lesson su present ātmanepada
      dev: "सुन्वाथे",
      iast: "sunvāthe",
      meaning: "you (two) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-2pl",
      // lesson su present ātmanepada
      dev: "सुनुध्वे",
      iast: "sunudhve",
      meaning: "you (many) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-1sg",
      // lesson su present ātmanepada
      dev: "सुन्वे",
      iast: "sunve",
      meaning: "I (one) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-1du",
      // lesson su present ātmanepada
      dev: "सुनुवहे",
      iast: "sunuvahe",
      meaning: "we (two) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    {
      id: "su-atma-1pl",
      // lesson su present ātmanepada
      dev: "सुनुमहे",
      iast: "sunumahe",
      meaning: "we (many) su, ātmanepada",
      unit: "word",
      group: "su|present",
    },
    // tan|present — parasmaipada
    {
      id: "tan-para-3sg",
      // lesson tan present parasmaipada; Gonda §69 tan like su (p.59)
      dev: "तनोति",
      iast: "tanoti",
      meaning: "he/she/it (one) tan, parasmaipada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-para-3du-2du",
      // lesson tan present parasmaipada; Gonda §69 tan like su (p.59)
      dev: "तनुतः",
      iast: "tanutaḥ",
      meaning: "they (two) / you (two) tan, parasmaipada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-para-3pl-2pl",
      // lesson tan present parasmaipada; Gonda §69 tan like su (p.59)
      dev: "तन्वन्ति",
      iast: "tanvanti",
      meaning: "they (many) / you (many) tan, parasmaipada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-para-2sg",
      // lesson tan present parasmaipada; Gonda §69 tan like su (p.59)
      dev: "तनोषि",
      iast: "tanoṣi",
      meaning: "you (one) tan, parasmaipada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-para-1sg",
      // lesson tan present parasmaipada; Gonda §69 tan like su (p.59)
      dev: "तनोमि",
      iast: "tanomi",
      meaning: "I (one) tan, parasmaipada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-para-1du",
      // lesson tan present parasmaipada; Gonda §69 tan like su (p.59)
      dev: "तनुवः",
      iast: "tanuvaḥ",
      meaning: "we (two) tan, parasmaipada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-para-1pl",
      // lesson tan present parasmaipada; Gonda §69 tan like su (p.59)
      dev: "तनुमः",
      iast: "tanumaḥ",
      meaning: "we (many) tan, parasmaipada",
      unit: "word",
      group: "tan|present",
    },
    // tan|present — ātmanepada
    {
      id: "tan-atma-3sg",
      // lesson tan present ātmanepada
      dev: "तनुते",
      iast: "tanute",
      meaning: "he/she/it (one) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-3du",
      // lesson tan present ātmanepada
      dev: "तन्वाते",
      iast: "tanvāte",
      meaning: "they (two) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-3pl",
      // lesson tan present ātmanepada
      dev: "तन्वते",
      iast: "tanvate",
      meaning: "they (many) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-2sg",
      // lesson tan present ātmanepada
      dev: "तनुषे",
      iast: "tanuṣe",
      meaning: "you (one) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-2du",
      // lesson tan present ātmanepada
      dev: "तन्वाथे",
      iast: "tanvāthe",
      meaning: "you (two) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-2pl",
      // lesson tan present ātmanepada
      dev: "तनुध्वे",
      iast: "tanudhve",
      meaning: "you (many) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-1sg",
      // lesson tan present ātmanepada
      dev: "तन्वे",
      iast: "tanve",
      meaning: "I (one) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-1du",
      // lesson tan present ātmanepada
      dev: "तनुवहे",
      iast: "tanuvahe",
      meaning: "we (two) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    {
      id: "tan-atma-1pl",
      // lesson tan present ātmanepada
      dev: "तनुमहे",
      iast: "tanumahe",
      meaning: "we (many) tan, ātmanepada",
      unit: "word",
      group: "tan|present",
    },
    // krī|present — parasmaipada
    {
      id: "kri-para-3sg",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणाति",
      iast: "krīṇāti",
      meaning: "he/she/it (one) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-para-3du-2du",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणीतः",
      iast: "krīṇītaḥ",
      meaning: "they (two) / you (two) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-para-3pl",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणन्ति",
      iast: "krīṇanti",
      meaning: "they (many) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-para-2sg",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणासि",
      iast: "krīṇāsi",
      meaning: "you (one) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-para-2pl",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणीत",
      iast: "krīṇīta",
      meaning: "you (many) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-para-1sg",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणामि",
      iast: "krīṇāmi",
      meaning: "I (one) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-para-1du",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणीवः",
      iast: "krīṇīvaḥ",
      meaning: "we (two) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-para-1pl",
      // lesson krī present parasmaipada; Gonda §70 krī (pp.59–60)
      dev: "क्रीणीमः",
      iast: "krīṇīmaḥ",
      meaning: "we (many) krī, parasmaipada",
      unit: "word",
      group: "krī|present",
    },
    // krī|present — ātmanepada
    {
      id: "kri-atma-3sg",
      // lesson krī present ātmanepada
      dev: "क्रीणीते",
      iast: "krīṇīte",
      meaning: "he/she/it (one) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-3du",
      // lesson krī present ātmanepada
      dev: "क्रीणाते",
      iast: "krīṇāte",
      meaning: "they (two) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-3pl",
      // lesson krī present ātmanepada
      dev: "क्रीणते",
      iast: "krīṇate",
      meaning: "they (many) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-2sg",
      // lesson krī present ātmanepada
      dev: "क्रीणीषे",
      iast: "krīṇīṣe",
      meaning: "you (one) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-2du",
      // lesson krī present ātmanepada
      dev: "क्रीणाथे",
      iast: "krīṇāthe",
      meaning: "you (two) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-2pl",
      // lesson krī present ātmanepada
      dev: "क्रीणीध्वे",
      iast: "krīṇīdhve",
      meaning: "you (many) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-1sg",
      // lesson krī present ātmanepada
      dev: "क्रीणे",
      iast: "krīṇe",
      meaning: "I (one) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-1du",
      // lesson krī present ātmanepada
      dev: "क्रीणीवहे",
      iast: "krīṇīvahe",
      meaning: "we (two) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
    {
      id: "kri-atma-1pl",
      // lesson krī present ātmanepada
      dev: "क्रीणीमहे",
      iast: "krīṇīmahe",
      meaning: "we (many) krī, ātmanepada",
      unit: "word",
      group: "krī|present",
    },
  ] as QuizDeckItem[],
};
