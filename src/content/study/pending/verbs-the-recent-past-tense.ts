/**
 * Drill card provenance:
 * - bhu-*: root aorist of √bhū (lesson abhūḥ; Gonda §75 paradigm). Unchanged-stem join.
 * - gam-*: thematic aorist of √gam (lesson agamaḥ; Gonda §76 sic shape, textbook verb
 *   swapped to gam — Gonda lists agamat). Ordinary-past / 1st-class imperfect endings.
 *   mā gamaḥ: lesson + Gonda §82 injunctive (no augment).
 * - nas-*: reduplicated aorist of √naś (lesson anīnaśat; Gonda §77 causative-type
 *   reduplication + 1st-class imperfect endings).
 * - nam-*: siṣ-aorist of √nam (lesson anaṃsiṣam; Gonda §80 + §79 iṣ active endings).
 * - sru-*: s-aorist of √śru (lesson aśrauṣam; Gonda §78 ji active shape).
 * - bhi-*: s-aorist of √bhī (same §78 join as śru; lesson mā bhaiṣīḥ; Gonda §82).
 * Dual omitted (Gonda short lists print sg+pl). Final -ur written -uḥ like other decks.
 * First Steps has no aorist drill (mentions the tense only).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-recent-past-tense",
  titleEn: "The recent past tense",
  titleIast: "luṅ",
  lessonId: "verbs-the-recent-past-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // bhū|aorist — root aorist (unchanged stem)
    {
      id: "bhu-1sg",
      // Gonda §75 bhū; lesson unchanged-stem join
      dev: "अभूवम्",
      iast: "abhūvam",
      meaning: "I (one) bhū",
      unit: "word",
      group: "bhū|aorist",
    },
    {
      id: "bhu-2sg",
      // lesson abhūḥ; Gonda §75 abhūs
      dev: "अभूः",
      iast: "abhūḥ",
      meaning: "you (one) bhū",
      unit: "word",
      group: "bhū|aorist",
    },
    {
      id: "bhu-3sg",
      // Gonda §75 bhū
      dev: "अभूत्",
      iast: "abhūt",
      meaning: "he/she/it (one) bhū",
      unit: "word",
      group: "bhū|aorist",
    },
    {
      id: "bhu-1pl",
      // Gonda §75 bhū
      dev: "अभूम",
      iast: "abhūma",
      meaning: "we (many) bhū",
      unit: "word",
      group: "bhū|aorist",
    },
    {
      id: "bhu-2pl",
      // Gonda §75 bhū
      dev: "अभूत",
      iast: "abhūta",
      meaning: "you (many) bhū",
      unit: "word",
      group: "bhū|aorist",
    },
    {
      id: "bhu-3pl",
      // Gonda §75 bhū
      dev: "अभूवन्",
      iast: "abhūvan",
      meaning: "they (many) bhū",
      unit: "word",
      group: "bhū|aorist",
    },

    // gam|aorist — thematic (connecting -a)
    {
      id: "gam-1sg",
      // Gonda §76 sic → gam (lesson connecting -a)
      dev: "अगमम्",
      iast: "agamam",
      meaning: "I (one) gam",
      unit: "word",
      group: "gam|aorist",
    },
    {
      id: "gam-2sg",
      // lesson agamaḥ; Gonda §76 agamat shape
      dev: "अगमः",
      iast: "agamaḥ",
      meaning: "you (one) gam",
      unit: "word",
      group: "gam|aorist",
    },
    {
      id: "gam-3sg",
      // Gonda §76 gam → agamat
      dev: "अगमत्",
      iast: "agamat",
      meaning: "he/she/it (one) gam",
      unit: "word",
      group: "gam|aorist",
    },
    {
      id: "gam-1pl",
      // Gonda §76 sic pl shape on gam
      dev: "अगमाम",
      iast: "agamāma",
      meaning: "we (many) gam",
      unit: "word",
      group: "gam|aorist",
    },
    {
      id: "gam-2pl",
      // Gonda §76 sic pl shape on gam
      dev: "अगमत",
      iast: "agamata",
      meaning: "you (many) gam",
      unit: "word",
      group: "gam|aorist",
    },
    {
      id: "gam-3pl",
      // Gonda §76 sic pl shape on gam
      dev: "अगमन्",
      iast: "agaman",
      meaning: "they (many) gam",
      unit: "word",
      group: "gam|aorist",
    },
    {
      id: "gam-ma-2sg",
      // lesson mā gamaḥ; Gonda §82 injunctive
      dev: "मा गमः",
      iast: "mā gamaḥ",
      meaning: "don't (mā) gam",
      unit: "word",
      group: "gam|aorist",
    },

    // naś|aorist — special reduplication
    {
      id: "nas-1sg",
      // lesson anīnaśat stem; Gonda §77 1st-class endings
      dev: "अनीनशम्",
      iast: "anīnaśam",
      meaning: "I (one) naś",
      unit: "word",
      group: "naś|aorist",
    },
    {
      id: "nas-2sg",
      // lesson anīnaśat stem; Gonda §77 1st-class endings
      dev: "अनीनशः",
      iast: "anīnaśaḥ",
      meaning: "you (one) naś",
      unit: "word",
      group: "naś|aorist",
    },
    {
      id: "nas-3sg",
      // lesson anīnaśat
      dev: "अनीनशत्",
      iast: "anīnaśat",
      meaning: "he/she/it (one) naś",
      unit: "word",
      group: "naś|aorist",
    },
    {
      id: "nas-1pl",
      // lesson anīnaśat stem; Gonda §77 1st-class endings
      dev: "अनीनशाम",
      iast: "anīnaśāma",
      meaning: "we (many) naś",
      unit: "word",
      group: "naś|aorist",
    },
    {
      id: "nas-2pl",
      // lesson anīnaśat stem; Gonda §77 1st-class endings
      dev: "अनीनशत",
      iast: "anīnaśata",
      meaning: "you (many) naś",
      unit: "word",
      group: "naś|aorist",
    },
    {
      id: "nas-3pl",
      // lesson anīnaśat stem; Gonda §77 1st-class endings
      dev: "अनीनशन्",
      iast: "anīnaśan",
      meaning: "they (many) naś",
      unit: "word",
      group: "naś|aorist",
    },

    // nam|aorist — -siṣ
    {
      id: "nam-1sg",
      // lesson anaṃsiṣam; Gonda §80
      dev: "अनंसिषम्",
      iast: "anaṃsiṣam",
      meaning: "I (one) nam",
      unit: "word",
      group: "nam|aorist",
    },
    {
      id: "nam-2sg",
      // Gonda §80 siṣ + §79 active 2sg -īs
      dev: "अनंसीः",
      iast: "anaṃsīḥ",
      meaning: "you (one) nam",
      unit: "word",
      group: "nam|aorist",
    },
    {
      id: "nam-3sg",
      // Gonda §80 ayāsīt shape on nam
      dev: "अनंसीत्",
      iast: "anaṃsīt",
      meaning: "he/she/it (one) nam",
      unit: "word",
      group: "nam|aorist",
    },
    {
      id: "nam-1pl",
      // Gonda §79 alāviṣma shape on nam siṣ
      dev: "अनंसिष्म",
      iast: "anaṃsiṣma",
      meaning: "we (many) nam",
      unit: "word",
      group: "nam|aorist",
    },
    {
      id: "nam-2pl",
      // Gonda §79 alāviṣṭa shape on nam siṣ
      dev: "अनंसिष्ट",
      iast: "anaṃsiṣṭa",
      meaning: "you (many) nam",
      unit: "word",
      group: "nam|aorist",
    },
    {
      id: "nam-3pl",
      // Gonda §79 alāviṣur shape on nam siṣ
      dev: "अनंसिषुः",
      iast: "anaṃsiṣuḥ",
      meaning: "they (many) nam",
      unit: "word",
      group: "nam|aorist",
    },

    // śru|aorist — s-aorist (lesson “-sa”)
    {
      id: "sru-1sg",
      // lesson aśrauṣam; Gonda §78
      dev: "अश्रौषम्",
      iast: "aśrauṣam",
      meaning: "I (one) śru",
      unit: "word",
      group: "śru|aorist",
    },
    {
      id: "sru-2sg",
      // Gonda §78 ajaiṣīs shape on śru
      dev: "अश्रौषीः",
      iast: "aśrauṣīḥ",
      meaning: "you (one) śru",
      unit: "word",
      group: "śru|aorist",
    },
    {
      id: "sru-3sg",
      // Gonda §78 ajaiṣīt shape on śru
      dev: "अश्रौषीत्",
      iast: "aśrauṣīt",
      meaning: "he/she/it (one) śru",
      unit: "word",
      group: "śru|aorist",
    },
    {
      id: "sru-1pl",
      // Gonda §78 ajaiṣma shape on śru
      dev: "अश्रौष्म",
      iast: "aśrauṣma",
      meaning: "we (many) śru",
      unit: "word",
      group: "śru|aorist",
    },
    {
      id: "sru-2pl",
      // Gonda §78 ajaiṣṭa shape on śru
      dev: "अश्रौष्ट",
      iast: "aśrauṣṭa",
      meaning: "you (many) śru",
      unit: "word",
      group: "śru|aorist",
    },
    {
      id: "sru-3pl",
      // Gonda §78 ajaiṣur shape on śru
      dev: "अश्रौषुः",
      iast: "aśrauṣuḥ",
      meaning: "they (many) śru",
      unit: "word",
      group: "śru|aorist",
    },

    // bhī|aorist — s-aorist (same join as śru); lesson mā bhaiṣīḥ
    {
      id: "bhi-1sg",
      // Gonda §78 s-aorist join (śru → bhī swap)
      dev: "अभैषम्",
      iast: "abhaiṣam",
      meaning: "I (one) bhī",
      unit: "word",
      group: "bhī|aorist",
    },
    {
      id: "bhi-2sg",
      // Gonda §78; cf. lesson mā bhaiṣīḥ
      dev: "अभैषीः",
      iast: "abhaiṣīḥ",
      meaning: "you (one) bhī",
      unit: "word",
      group: "bhī|aorist",
    },
    {
      id: "bhi-3sg",
      // Gonda §78 s-aorist join on bhī
      dev: "अभैषीत्",
      iast: "abhaiṣīt",
      meaning: "he/she/it (one) bhī",
      unit: "word",
      group: "bhī|aorist",
    },
    {
      id: "bhi-1pl",
      // Gonda §78 s-aorist join on bhī
      dev: "अभैष्म",
      iast: "abhaiṣma",
      meaning: "we (many) bhī",
      unit: "word",
      group: "bhī|aorist",
    },
    {
      id: "bhi-2pl",
      // Gonda §78 s-aorist join on bhī
      dev: "अभैष्ट",
      iast: "abhaiṣṭa",
      meaning: "you (many) bhī",
      unit: "word",
      group: "bhī|aorist",
    },
    {
      id: "bhi-3pl",
      // Gonda §78 s-aorist join on bhī
      dev: "अभैषुः",
      iast: "abhaiṣuḥ",
      meaning: "they (many) bhī",
      unit: "word",
      group: "bhī|aorist",
    },
    {
      id: "bhi-ma-2sg",
      // lesson mā bhaiṣīḥ; Gonda §82
      dev: "मा भैषीः",
      iast: "mā bhaiṣīḥ",
      meaning: "don't (mā) bhī",
      unit: "word",
      group: "bhī|aorist",
    },
  ] as QuizDeckItem[],
};
