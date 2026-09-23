/**
 * Drill card provenance:
 * - Groups are one suffix each (`suffix|-a`, …). Wrong answers stay inside that join.
 * - Lesson printed cells kept. Extra stems apply the same printed rule (vṛddhi / drop -a /
 *   add suffix / -mat vs -vat selection). First Steps has no taddhita drill.
 * - Textbook stem swaps from Gonda glossary + Exercises XI (dhanyatara, mūrkhatama,
 *   dhanin, bālaka, pautra, paura, pāṇḍitya, laghutā, rūpavat, balavat, dhīmat).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-nominal-suffixes",
  titleEn: "Nominal suffixes",
  titleIast: "taddhita",
  lessonId: "suffixes-nominal-suffixes",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // suffix|-a (vṛddhi of first vowel; drop final -a)
    {
      id: "kaurava",
      // lesson glyph
      dev: "कौरव",
      iast: "kaurava",
      meaning: "descending from Kuru; a Kaurava (kuru + -a)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "aindra",
      // lesson glyph
      dev: "ऐन्द्र",
      iast: "aindra",
      meaning: "of Indra (indra + -a)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "pautra",
      // Gonda glossary pautra-; putra + -a join from lesson
      dev: "पौत्र",
      iast: "pautra",
      meaning: "grandson; descending from a son (putra + -a)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "paura",
      // Gonda glossary paura-; pura + -a join from lesson
      dev: "पौर",
      iast: "paura",
      meaning: "citizen; of a city (pura + -a)",
      unit: "word",
      group: "suffix|-a",
    },
    // suffix|-in (drop final -a)
    {
      id: "yogin",
      // lesson glyph
      dev: "योगिन्",
      iast: "yogin",
      meaning: "characterized by yoga; a yogi (yoga + -in)",
      unit: "word",
      group: "suffix|-in",
    },
    {
      id: "dhanin",
      // Gonda Ex. IX dhaninaḥ / glossary dhanin-; yoga→yogin join
      dev: "धनिन्",
      iast: "dhanin",
      meaning: "wealthy; characterized by wealth (dhana + -in)",
      unit: "word",
      group: "suffix|-in",
    },
    {
      id: "mantrin",
      // Gonda glossary mantrin-; same -in join
      dev: "मन्त्रिन्",
      iast: "mantrin",
      meaning: "minister; characterized by counsel (mantra + -in)",
      unit: "word",
      group: "suffix|-in",
    },
    {
      id: "balin",
      // Gonda glossary note under balavat; same -in join
      dev: "बलिन्",
      iast: "balin",
      meaning: "powerful; characterized by strength (bala + -in)",
      unit: "word",
      group: "suffix|-in",
    },
    // suffix|-ka
    {
      id: "putraka",
      // lesson glyph
      dev: "पुत्रक",
      iast: "putraka",
      meaning: "little son, dear son (putra + -ka)",
      unit: "word",
      group: "suffix|-ka",
    },
    {
      id: "balaka",
      // Gonda glossary bālaka-; putra→putraka join
      dev: "बालक",
      iast: "bālaka",
      meaning: "small child, boy (bāla + -ka)",
      unit: "word",
      group: "suffix|-ka",
    },
    {
      id: "asvaka",
      // First Steps aśva stem; same -ka join
      dev: "अश्वक",
      iast: "aśvaka",
      meaning: "little horse (aśva + -ka)",
      unit: "word",
      group: "suffix|-ka",
    },
    {
      id: "gajaka",
      // gaja stem swap; same -ka join
      dev: "गजक",
      iast: "gajaka",
      meaning: "little elephant (gaja + -ka)",
      unit: "word",
      group: "suffix|-ka",
    },
    // suffix|-tama
    {
      id: "balavattama",
      // lesson glyph
      dev: "बलवत्तम",
      iast: "balavattama",
      meaning: "strongest (balavat + -tama)",
      unit: "word",
      group: "suffix|-tama",
    },
    {
      id: "sundaratama",
      // sundara from lesson -tara row; same -tama join
      dev: "सुन्दरतम",
      iast: "sundaratama",
      meaning: "most beautiful (sundara + -tama)",
      unit: "word",
      group: "suffix|-tama",
    },
    {
      id: "priyatama",
      // priya common adj; same -tama join
      dev: "प्रियतम",
      iast: "priyatama",
      meaning: "dearest (priya + -tama)",
      unit: "word",
      group: "suffix|-tama",
    },
    {
      id: "murkhatama",
      // Gonda Ex. XI mūrkhatamāḥ; stem swap off lesson -tama join
      dev: "मूर्खतम",
      iast: "mūrkhatama",
      meaning: "most foolish (mūrkha + -tama)",
      unit: "word",
      group: "suffix|-tama",
    },
    // suffix|-tara
    {
      id: "sundaratara",
      // lesson glyph
      dev: "सुन्दरतर",
      iast: "sundaratara",
      meaning: "more beautiful (sundara + -tara)",
      unit: "word",
      group: "suffix|-tara",
    },
    {
      id: "priyatara",
      // same -tara join
      dev: "प्रियतर",
      iast: "priyatara",
      meaning: "dearer (priya + -tara)",
      unit: "word",
      group: "suffix|-tara",
    },
    {
      id: "dhanyatara",
      // Gonda Ex. XI dhanyataraḥ; sundara→sundaratara join
      dev: "धन्यतर",
      iast: "dhanyatara",
      meaning: "more fortunate (dhanya + -tara)",
      unit: "word",
      group: "suffix|-tara",
    },
    {
      id: "laghutara",
      // Gonda glossary laghutā- stem; same -tara join
      dev: "लघुतर",
      iast: "laghutara",
      meaning: "lighter; smaller (laghu + -tara)",
      unit: "word",
      group: "suffix|-tara",
    },
    // suffix|-tas (→ -taḥ)
    {
      id: "agnitah",
      // lesson glyph
      dev: "अग्नितः",
      iast: "agnitaḥ",
      meaning: "from the fire (agni + -tas)",
      unit: "word",
      group: "suffix|-tas",
    },
    {
      id: "gramatah",
      // Gonda/First Steps grāma; same -tas → -taḥ join
      dev: "ग्रामतः",
      iast: "grāmataḥ",
      meaning: "from the village (grāma + -tas)",
      unit: "word",
      group: "suffix|-tas",
    },
    {
      id: "nagaratah",
      // Gonda glossary nagara-; same join
      dev: "नगरतः",
      iast: "nagarataḥ",
      meaning: "from the city (nagara + -tas)",
      unit: "word",
      group: "suffix|-tas",
    },
    {
      id: "grhatah",
      // Gonda glossary gṛha-; same join
      dev: "गृहतः",
      iast: "gṛhataḥ",
      meaning: "from the house (gṛha + -tas)",
      unit: "word",
      group: "suffix|-tas",
    },
    // suffix|-tā
    {
      id: "yogyata",
      // lesson glyph
      dev: "योग्यता",
      iast: "yogyatā",
      meaning: "utility, propriety (yogya + -tā)",
      unit: "word",
      group: "suffix|-tā",
    },
    {
      id: "laghuta",
      // Gonda glossary laghutā-; yogya→yogyatā join
      dev: "लघुता",
      iast: "laghutā",
      meaning: "lightness; smallness (laghu + -tā)",
      unit: "word",
      group: "suffix|-tā",
    },
    {
      id: "sundarata",
      // sundara from lesson; same -tā join
      dev: "सुन्दरता",
      iast: "sundaratā",
      meaning: "beauty (sundara + -tā)",
      unit: "word",
      group: "suffix|-tā",
    },
    {
      id: "priyata",
      // same -tā join
      dev: "प्रियता",
      iast: "priyatā",
      meaning: "dearness; affection (priya + -tā)",
      unit: "word",
      group: "suffix|-tā",
    },
    // suffix|-tva
    {
      id: "amaratva",
      // lesson glyph
      dev: "अमरत्व",
      iast: "amaratva",
      meaning: "immortality (amara + -tva)",
      unit: "word",
      group: "suffix|-tva",
    },
    {
      id: "samatva",
      // lesson glyph
      dev: "समत्व",
      iast: "samatva",
      meaning: "sameness, equanimity (sama + -tva)",
      unit: "word",
      group: "suffix|-tva",
    },
    {
      id: "naratva",
      // nara stem swap; same -tva join
      dev: "नरत्व",
      iast: "naratva",
      meaning: "manhood; the state of being a man (nara + -tva)",
      unit: "word",
      group: "suffix|-tva",
    },
    {
      id: "gurutva",
      // guru stem swap; same -tva join
      dev: "गुरुत्व",
      iast: "gurutva",
      meaning: "heaviness; the state of being a teacher (guru + -tva)",
      unit: "word",
      group: "suffix|-tva",
    },
    // suffix|-mat (stems that do not take -vat by the lesson rule)
    {
      id: "hanumat",
      // lesson glyph
      dev: "हनुमत्",
      iast: "hanumat",
      meaning: "characterized by jaws; Hanuman (hanu + -mat)",
      unit: "word",
      group: "suffix|-mat",
    },
    {
      id: "buddhimat",
      // Gonda glossary buddhimat-; same -mat join
      dev: "बुद्धिमत्",
      iast: "buddhimat",
      meaning: "intelligent; possessing understanding (buddhi + -mat)",
      unit: "word",
      group: "suffix|-mat",
    },
    {
      id: "matimat",
      // Gonda glossary matimat-; same -mat join
      dev: "मतिमत्",
      iast: "matimat",
      meaning: "intelligent; possessing thought (mati + -mat)",
      unit: "word",
      group: "suffix|-mat",
    },
    {
      id: "dhimat",
      // Gonda Ex. / glossary dhīmat-; same -mat join
      dev: "धीमत्",
      iast: "dhīmat",
      meaning: "wise; possessing insight (dhī + -mat)",
      unit: "word",
      group: "suffix|-mat",
    },
    // suffix|-maya
    {
      id: "hiranyamaya",
      // lesson glyph
      dev: "हिरण्यमय",
      iast: "hiraṇyamaya",
      meaning: "made of gold, golden (hiraṇya + -maya)",
      unit: "word",
      group: "suffix|-maya",
    },
    {
      id: "suvarnamaya",
      // suvarṇa swap; same -maya join
      dev: "सुवर्णमय",
      iast: "suvarṇamaya",
      meaning: "made of gold (suvarṇa + -maya)",
      unit: "word",
      group: "suffix|-maya",
    },
    {
      id: "lohamaya",
      // loha swap; same -maya join
      dev: "लोहमय",
      iast: "lohamaya",
      meaning: "made of metal or iron (loha + -maya)",
      unit: "word",
      group: "suffix|-maya",
    },
    {
      id: "tamramaya",
      // tāmra swap; same -maya join
      dev: "ताम्रमय",
      iast: "tāmramaya",
      meaning: "made of copper (tāmra + -maya)",
      unit: "word",
      group: "suffix|-maya",
    },
    // suffix|-ya (vṛddhi of first vowel; drop final -a)
    {
      id: "sadrsya",
      // lesson glyph
      dev: "सादृश्य",
      iast: "sādṛśya",
      meaning: "similarity (sadṛśa + -ya)",
      unit: "word",
      group: "suffix|-ya",
    },
    {
      id: "dharmya",
      // First Steps dharmya; sadṛśa→sādṛśya join
      dev: "धार्म्य",
      iast: "dhārmya",
      meaning: "lawful; related to dharma (dharma + -ya)",
      unit: "word",
      group: "suffix|-ya",
    },
    {
      id: "madhurya",
      // madhura + -ya with vṛddhi; same join
      dev: "माधुर्य",
      iast: "mādhurya",
      meaning: "sweetness (madhura + -ya)",
      unit: "word",
      group: "suffix|-ya",
    },
    {
      id: "panditya",
      // Gonda glossary pāṇḍitya-; same -ya join
      dev: "पाण्डित्य",
      iast: "pāṇḍitya",
      meaning: "learning, erudition (paṇḍita + -ya)",
      unit: "word",
      group: "suffix|-ya",
    },
    // suffix|-vat (stem ends in m/a, or m/a next-to-last)
    {
      id: "bhagavat",
      // lesson glyph
      dev: "भगवत्",
      iast: "bhagavat",
      meaning: "possessing fortune; the Blessed One (bhaga + -vat)",
      unit: "word",
      group: "suffix|-vat",
    },
    {
      id: "laksmivat",
      // lesson glyph
      dev: "लक्ष्मीवत्",
      iast: "lakṣmīvat",
      meaning: "possessing Lakṣmī; fortunate (lakṣmī + -vat)",
      unit: "word",
      group: "suffix|-vat",
    },
    {
      id: "rupavat",
      // Gonda Ex. / glossary rūpavat-; same -vat join
      dev: "रूपवत्",
      iast: "rūpavat",
      meaning: "beautiful; possessing form (rūpa + -vat)",
      unit: "word",
      group: "suffix|-vat",
    },
    {
      id: "balavat",
      // Gonda Ex. / glossary balavat-; same -vat join
      dev: "बलवत्",
      iast: "balavat",
      meaning: "powerful; possessing strength (bala + -vat)",
      unit: "word",
      group: "suffix|-vat",
    },
  ] as QuizDeckItem[],
};
