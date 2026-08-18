import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

const translation =
  "This is the highest purification mantra to the Waters (Āpaḥ). The sādhaka prays: O Waters, golden-hued, pure, and purifying — born of Kaśyapa, connected with Indra and Agni — be auspicious and comforting to us. You move among humanity with Varuṇa, witnessing truth and untruth. You drip sweetness, cleanse all impurity, and nourish the worlds. You serve the gods in heaven, exist in many forms in the atmosphere, and fill the earth with life-giving waters. With your auspicious sight and touch, cleanse my body and skin. I invoke all divine fires dwelling in the waters — place in me radiance, strength, and vital energy. This mantra completes deep inner and outer purification before the final stages of Sandhyā.";

function apassagamRefrain(id: string, danda: " ।" | " ॥"): SpanNode[] {
  return [
    word(`${id}-apassagam`, "", [
      ["आ", "ā"],
      ["प", "pa"],
      ["स्स", "ssa"],
      ["गं", "gaṃ"],
    ]),
    word(`${id}-syonah`, "soothing, benevolent", [
      ["स्यो", "syo"],
      ["नाः", "nāḥ"],
    ]),
    word(`${id}-bhavantu`, "may they be", [
      ["भ", "bha"],
      ["व", "va"],
      ["न्तु", "ntu"],
    ], { trailing: danda, lineBreakAfter: true }),
  ];
}

export const punahMarjana: Chapter = {
  id: "punah-marjana",
  titleDev: "पुनः मार्जनः",
  titleIast: "punaḥ mārjanaḥ",
  titleEn: "Punaḥ mārjana",
  status: "ready",
  translation,
  glossary: [
    { term: "punaḥ mārjana", meaning: "final, deeper sprinkling for purification" },
    { term: "hiraṇyavarṇāḥ", meaning: "golden-hued" },
    { term: "śucayaḥ", meaning: "pure" },
    { term: "pāvaka", meaning: "purifier" },
    { term: "sujātāḥ", meaning: "well-born" },
    { term: "kaśyapa", meaning: "progenitor sage" },
    { term: "svindraḥ", meaning: "with Indra" },
    { term: "agniṃ", meaning: "Agni (fire)" },
    { term: "garbham", meaning: "embryo" },
    { term: "dadhire", meaning: "they hold" },
    { term: "virūpāḥ", meaning: "of many forms" },
    { term: "varuṇa", meaning: "lord of cosmic order and truth" },
    { term: "bhavantu", meaning: "may they be" },
    { term: "yāsām", meaning: "among whom" },
    { term: "yāti", meaning: "moves" },
    { term: "madhye", meaning: "in the midst" },
    { term: "satya-anṛte", meaning: "truth and untruth" },
    { term: "avapaśyan", meaning: "seeing, discerning" },
    { term: "janānām", meaning: "of people" },
    { term: "śyona", meaning: "soothing, benevolent" },
    { term: "madhuścut", meaning: "dripping sweetness" },
    { term: "bhakṣam", meaning: "sustenance" },
    { term: "antarīkṣe", meaning: "in mid-space" },
    { term: "bahudhā", meaning: "in many forms" },
    { term: "pṛthivīm", meaning: "the earth" },
    { term: "payasaḥ", meaning: "nourishing essence" },
    { term: "undanti", meaning: "pour out" },
    { term: "śukrāḥ", meaning: "bright" },
    { term: "āpaḥ", meaning: "sacred waters" },
    { term: "śiva-cakṣuṣā", meaning: "auspicious vision" },
    { term: "upaspṛśata", meaning: "touch gently, cleanse" },
    { term: "tvacam", meaning: "skin" },
    { term: "apsu-ṣadaḥ", meaning: "dwelling in waters" },
    { term: "varcas", meaning: "spiritual radiance" },
    { term: "bala", meaning: "strength" },
    { term: "ojas", meaning: "vital energy" },
    { term: "nidhatta", meaning: "place, deposit" },
  ],
  root: group("pnm-verse", "verse", translation, [
    group(
      "pnm-sent-1",
      "sentence",
      "O Waters, golden-hued, pure, and purifying — born of Kaśyapa, connected with Indra and Agni — be auspicious and comforting to us.",
      [
        group(
          "pnm-pada-1a",
          "phrase",
          "O Waters, golden-hued, pure, and purifying — born of Kaśyapa, connected with Indra and Agni",
          [
            word("pnm-hiranyavarnah", "golden-hued", [
              ["हि", "hi"],
              ["र", "ra"],
              ["ण्य", "ṇya"],
              ["व", "va"],
              ["र्णाः", "rṇāḥ"],
            ]),
            word("pnm-sucayah", "pure", [
              ["शु", "śu"],
              ["च", "ca"],
              ["यः", "yaḥ"],
            ]),
            word("pnm-pavakah", "purifier", [
              ["पा", "pā"],
              ["व", "va"],
              ["काः", "kāḥ"],
            ]),
            word("pnm-ya-1", "", [["या", "yā"]]),
            word("pnm-sujatah", "well-born", [
              ["सु", "su"],
              ["जा", "jā"],
              ["तः", "taḥ"],
            ]),
            word("pnm-kasyapo", "progenitor sage", [
              ["क", "ka"],
              ["श्य", "śya"],
              ["पो", "po"],
            ]),
            word("pnm-ya-2", "", [["या", "yā"]]),
            word("pnm-svindrah", "with Indra", [
              ["स्वि", "svi"],
              ["न्द्रः", "ndraḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "pnm-pada-1b",
          "phrase",
          "be auspicious and comforting to us.",
          [
            word("pnm-agnim", "Agni (fire)", [
              ["अ", "a"],
              ["ग्निं", "gniṃ"],
            ]),
            word("pnm-ya-3", "", [["या", "yā"]]),
            word("pnm-garbham", "embryo", [
              ["ग", "ga"],
              ["र्भं", "rbhaṃ"],
            ]),
            word("pnm-dadhire", "they hold", [
              ["द", "da"],
              ["धि", "dhi"],
              ["रे", "re"],
            ]),
            word("pnm-virupastan", "of many forms", [
              ["वि", "vi"],
              ["रू", "rū"],
              ["पा", "pā"],
              ["स्तान", "stān"],
            ]),
            ...apassagamRefrain("pnm-ref-1", " ॥"),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-2",
      "sentence",
      "You move among humanity with Varuṇa, witnessing truth and untruth.",
      [
        group(
          "pnm-pada-2",
          "phrase",
          "You move among humanity with Varuṇa, witnessing truth and untruth.",
          [
            word("pnm-yasan", "among whom", [
              ["या", "yā"],
              ["साङ्", "sāṅ"],
            ]),
            word("pnm-raja", "", [
              ["रा", "rā"],
              ["जा", "jā"],
            ]),
            word("pnm-varuno", "lord of cosmic order and truth", [
              ["व", "va"],
              ["रु", "ru"],
              ["णो", "ṇo"],
            ]),
            word("pnm-yati", "moves", [
              ["या", "yā"],
              ["ति", "ti"],
            ]),
            word("pnm-madhye", "in the midst", [
              ["म", "ma"],
              ["ध्ये", "dhye"],
            ]),
            word("pnm-satyanrte", "truth and untruth", [
              ["स", "sa"],
              ["त्या", "tyā"],
              ["नृ", "nṛ"],
              ["ते", "te"],
            ]),
            word("pnm-avapasyanjananam", "seeing, discerning", [
              ["अ", "a"],
              ["व", "va"],
              ["पश्", "paś"],
              ["यञ्", "yan"],
              ["ज", "ja"],
              ["ना", "nā"],
              ["नाम्", "nām"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-3",
      "sentence",
      "You drip sweetness, cleanse all impurity, and nourish the worlds.",
      [
        group(
          "pnm-pada-3",
          "phrase",
          "You drip sweetness, cleanse all impurity, and nourish the worlds.",
          [
            word("pnm-madhuscutah", "dripping sweetness", [
              ["म", "ma"],
              ["धु", "dhu"],
              ["श्चु", "ścu"],
              ["तः", "taḥ"],
            ]),
            word("pnm-sucayo", "pure", [
              ["शु", "śu"],
              ["च", "ca"],
              ["यो", "yo"],
            ]),
            word("pnm-yah-1", "", [["याः", "yāḥ"]]),
            word("pnm-pavakastan", "purifier", [
              ["पा", "pā"],
              ["व", "va"],
              ["का", "kā"],
              ["स्तान", "stān"],
            ]),
            ...apassagamRefrain("pnm-ref-2", " ॥"),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-4",
      "sentence",
      "You serve the gods in heaven, exist in many forms in the atmosphere, and fill the earth with life-giving waters.",
      [
        group(
          "pnm-pada-4a",
          "phrase",
          "You serve the gods in heaven, exist in many forms in the atmosphere",
          [
            word("pnm-yasam", "among whom", [
              ["या", "yā"],
              ["सां", "sāṃ"],
            ]),
            word("pnm-deva", "", [
              ["दे", "de"],
              ["वा", "vā"],
            ]),
            word("pnm-divi", "", [
              ["दि", "di"],
              ["वि", "vi"],
            ]),
            word("pnm-krnvanti", "", [
              ["कृ", "kṛ"],
              ["ण्व", "ṇva"],
              ["न्ति", "nti"],
            ]),
            word("pnm-bhaksam", "sustenance", [
              ["भ", "bha"],
              ["क्षं", "kṣaṃ"],
            ]),
            word("pnm-ya-4", "", [["या", "yā"]]),
            word("pnm-antarikse", "in mid-space", [
              ["अ", "a"],
              ["न्त", "nta"],
              ["रि", "ri"],
              ["क्षे", "kṣe"],
            ]),
            word("pnm-bahudha", "in many forms", [
              ["ब", "ba"],
              ["हु", "hu"],
              ["धा", "dhā"],
            ]),
            word("pnm-bhavanti", "", [
              ["भ", "bha"],
              ["व", "va"],
              ["न्ति", "nti"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "pnm-pada-4b",
          "phrase",
          "and fill the earth with life-giving waters.",
          [
            word("pnm-yah-2", "", [["याः", "yāḥ"]]),
            word("pnm-prthivim", "the earth", [
              ["पृ", "pṛ"],
              ["थि", "thi"],
              ["वीं", "vīṃ"],
            ]),
            word("pnm-payasondanti", "pour out nourishing essence", [
              ["प", "pa"],
              ["य", "ya"],
              ["सो", "so"],
              ["न्द", "nda"],
              ["न्ति", "nti"],
            ]),
            word("pnm-sukrastan", "bright", [
              ["शु", "śu"],
              ["क्रा", "krā"],
              ["स्तान", "stān"],
            ]),
            ...apassagamRefrain("pnm-ref-3", " ॥"),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-5",
      "sentence",
      "With your auspicious sight and touch, cleanse my body and skin.",
      [
        group(
          "pnm-pada-5",
          "phrase",
          "With your auspicious sight and touch, cleanse my body and skin.",
          [
            word("pnm-sivena", "auspicious vision", [
              ["शि", "śi"],
              ["वे", "ve"],
              ["न", "na"],
            ]),
            word("pnm-ma", "", [["मा", "mā"]]),
            word("pnm-caksusa", "auspicious vision", [
              ["च", "ca"],
              ["क्षु", "kṣu"],
              ["षा", "ṣā"],
            ]),
            word("pnm-pasyatapah", "", [
              ["पश्", "paś"],
              ["य", "ya"],
              ["ता", "tā"],
              ["पः", "paḥ"],
            ]),
            word("pnm-sivaya", "", [
              ["शि", "śi"],
              ["व", "va"],
              ["या", "yā"],
            ]),
            word("pnm-tanva", "", [
              ["त", "ta"],
              ["न्वा", "nvā"],
            ]),
            word("pnm-vopasprsat", "touch gently, cleanse", [
              ["वो", "vo"],
              ["प", "pa"],
              ["स्पृ", "spṛ"],
              ["श", "śa"],
              ["त", "ta"],
            ]),
            word("pnm-tvacam", "skin", [
              ["त्व", "tva"],
              ["चं", "caṃ"],
            ]),
            word("pnm-me", "", [["मे", "me"]], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-6",
      "sentence",
      "I invoke all divine fires dwelling in the waters — place in me radiance, strength, and vital energy.",
      [
        group(
          "pnm-pada-6",
          "phrase",
          "I invoke all divine fires dwelling in the waters — place in me radiance, strength, and vital energy.",
          [
            word("pnm-sarvan", "", [
              ["सर्", "sar"],
              ["वाङ्", "vāṅ"],
            ]),
            word("pnm-agnigam", "", [
              ["अग्", "ag"],
              ["नी", "nī"],
              ["गं", "gaṃ"],
            ]),
            word("pnm-apsusado", "dwelling in waters", [
              ["अप्", "ap"],
              ["सु", "su"],
              ["ष", "ṣa"],
              ["दो", "do"],
            ]),
            word("pnm-huve", "", [
              ["हु", "hu"],
              ["वे", "ve"],
            ]),
            word("pnm-vah", "", [["वः", "vaḥ"]]),
            word("pnm-mayi", "", [
              ["म", "ma"],
              ["यि", "yi"],
            ]),
            word("pnm-varco", "spiritual radiance", [
              ["वर्", "var"],
              ["चो", "co"],
            ]),
            word("pnm-bala", "strength", [
              ["ब", "ba"],
              ["ल", "la"],
            ]),
            word("pnm-ojo", "vital energy", [
              ["ओ", "o"],
              ["जो", "jo"],
            ]),
            word("pnm-nidhatta", "place, deposit", [
              ["नि", "ni"],
              ["ध", "dha"],
              ["त्त", "tta"],
            ], { trailing: " ॥" }),
          ],
        ),
      ],
    ),
  ]),
};
