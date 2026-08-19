import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

const translation =
  "This is the highest purification mantra to the Waters (Āpaḥ). The sādhaka prays: O Waters, golden-hued, pure, and purifying — born of Kaśyapa, connected with Indra and Agni — be auspicious and comforting to us. You move among humanity with Varuṇa, witnessing truth and untruth. You drip sweetness, cleanse all impurity, and nourish the worlds. You serve the gods in heaven, exist in many forms in the atmosphere, and fill the earth with life-giving waters. With your auspicious sight and touch, cleanse my body and skin. I invoke all divine fires dwelling in the waters — place in me radiance, strength, and vital energy. This mantra completes deep inner and outer purification before the final stages of Sandhyā.";

function refrain(id: string, danda: " ।" | " ॥"): SpanNode[] {
  return [
    word(`${id}-tah`, "those", [["ताः", "tāḥ"]]),
    word(`${id}-nah`, "for us", [["नः", "naḥ"]]),
    word(`${id}-apah`, "waters", [
      ["आ", "ā"],
      ["पः", "paḥ"],
    ]),
    word(`${id}-sam`, "peace / well-being", [["शं", "śaṃ"]]),
    word(`${id}-syonah`, "pleasant / bringing ease", [
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
    { term: "hiraṇyavarṇāḥ", meaning: "golden-hued / pleasing-colored (from clarity)" },
    { term: "śucayaḥ", meaning: "pure" },
    { term: "pāvakāḥ", meaning: "purifying" },
    { term: "yāsu", meaning: "in which" },
    { term: "jātaḥ", meaning: "born" },
    { term: "kaśyapaḥ", meaning: "Kaśyapa (here: Prajāpati)" },
    { term: "indraḥ", meaning: "Indra (here: lightning, the middle one)" },
    { term: "garbham", meaning: "embryo" },
    { term: "śaṃ", meaning: "peace / well-being" },
    { term: "syonāḥ", meaning: "pleasant / bringing ease" },
    { term: "satyānṛte", meaning: "truth-and-untruth" },
    { term: "varcas", meaning: "brilliance" },
    { term: "ojas", meaning: "ojas" },
  ],
  root: group("pnm-verse", "verse", "", [
    group(
      "pnm-sent-1",
      "sentence",
      "golden-hued, pure, purifying waters, in which Kaśyapa Prajāpati was born, in which Indra; which in diverse forms held Agni as embryo; may those waters be peace and ease for us",
      [
        group(
          "pnm-pada-1a",
          "phrase",
          "golden-hued, pure, purifying; in which Kaśyapa Prajāpati was born; in which Indra",
          [
            word("pnm-hiranyavarnah", "golden-hued / pleasing-colored (from clarity)", [
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
            word("pnm-pavakah", "purifying", [
              ["पा", "pā"],
              ["व", "va"],
              ["काः", "kāḥ"],
            ]),
            word("pnm-yasu-1", "in which", [
              ["या", "yā"],
              ["सु", "su"],
            ], { trailing: "" }),
            word("pnm-jatah", "born", [
              ["जा", "jā"],
              ["तः", "taḥ"],
            ]),
            word("pnm-kasyapah", "Kaśyapa (here: Prajāpati)", [
              ["क", "ka"],
              ["श्य", "śya"],
              ["पो", "po"],
            ]),
            word("pnm-yasu-2", "in which", [
              ["या", "yā"],
              ["स्वि", "svi"],
            ], { trailing: "" }),
            word("pnm-indrah", "Indra (here: lightning, the middle one)", [
              ["न्द्रः", "ndraḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "pnm-pada-1b",
          "phrase",
          "which in diverse forms held Agni as embryo; may those waters be peace and ease for us",
          [
            word("pnm-agnim", "Agni", [
              ["अ", "a"],
              ["ग्निं", "gniṃ"],
            ]),
            word("pnm-yah-garbha", "which", [["याः", "yāḥ"]]),
            word("pnm-garbham", "embryo", [
              ["ग", "ga"],
              ["र्भं", "rbhaṃ"],
            ]),
            word("pnm-dadhire", "they have held", [
              ["द", "da"],
              ["धि", "dhi"],
              ["रे", "re"],
            ]),
            word("pnm-virupah", "of diverse forms", [
              ["वि", "vi"],
              ["रू", "rū"],
              ["पाः", "pāḥ"],
            ]),
            ...refrain("pnm-ref-1", " ॥"),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-2",
      "sentence",
      "among whom king Varuṇa goes in the midst, seeing the truth and untruth of people",
      [
        group(
          "pnm-pada-2",
          "phrase",
          "among whom king Varuṇa goes in the midst, seeing the truth and untruth of people",
          [
            word("pnm-yasam-1", "of whom", [
              ["या", "yā"],
              ["साङ्", "sāṅ"],
            ]),
            word("pnm-raja", "king", [
              ["रा", "rā"],
              ["जा", "jā"],
            ]),
            word("pnm-varunah", "Varuṇa", [
              ["व", "va"],
              ["रु", "ru"],
              ["णो", "ṇo"],
            ]),
            word("pnm-yati", "goes", [
              ["या", "yā"],
              ["ति", "ti"],
            ]),
            word("pnm-madhye", "in the midst", [
              ["म", "ma"],
              ["ध्ये", "dhye"],
            ]),
            word("pnm-satyanrte", "truth-and-untruth", [
              ["स", "sa"],
              ["त्या", "tyā"],
              ["नृ", "nṛ"],
              ["ते", "te"],
            ]),
            word("pnm-avapasyan", "seeing", [
              ["अ", "a"],
              ["व", "va"],
              ["पश्", "paś"],
              ["यञ्", "yan"],
            ], { trailing: "" }),
            word("pnm-jananam", "of people", [
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
      "honey-flowing, pure, purifying; may those waters be peace and ease for us",
      [
        group(
          "pnm-pada-3",
          "phrase",
          "honey-flowing, pure, purifying; may those waters be peace and ease for us",
          [
            word("pnm-madhuscutah", "dripping honey", [
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
            word("pnm-yah-1", "which", [["याः", "yāḥ"]]),
            word("pnm-pavakah-2", "purifying", [
              ["पा", "pā"],
              ["व", "va"],
              ["काः", "kāḥ"],
            ]),
            ...refrain("pnm-ref-2", " ॥"),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-4",
      "sentence",
      "Bhaṭṭabhāskara: the gods make Soma/amṛta their food · or: the sun’s rays provide their food in heaven; which exist in many forms in mid-space; which moisten the earth with their essence, the clear ones; may those waters be peace and ease for us",
      [
        group(
          "pnm-pada-4a",
          "phrase",
          "Bhaṭṭabhāskara: the gods make Soma/amṛta their food · or: the sun’s rays provide their food in heaven",
          [
            word("pnm-yasam-2", "of whom", [
              ["या", "yā"],
              ["सां", "sāṃ"],
            ]),
            word("pnm-devah", "gods", [
              ["दे", "de"],
              ["वा", "vā"],
            ]),
            word("pnm-divi", "in heaven", [
              ["दि", "di"],
              ["वि", "vi"],
            ]),
            word("pnm-krnvanti", "they make", [
              ["कृ", "kṛ"],
              ["ण्व", "ṇva"],
              ["न्ति", "nti"],
            ]),
            word("pnm-bhaksam", "food", [
              ["भ", "bha"],
              ["क्षं", "kṣaṃ"],
            ]),
          ],
        ),
        group(
          "pnm-pada-4b",
          "phrase",
          "which exist in many forms in mid-space",
          [
            word("pnm-ya-4", "which", [["या", "yā"]]),
            word("pnm-antarikse", "in mid-space", [
              ["अ", "a"],
              ["न्त", "nta"],
              ["रि", "ri"],
              ["क्षे", "kṣe"],
            ]),
            word("pnm-bahudha", "in many ways", [
              ["ब", "ba"],
              ["हु", "hu"],
              ["धा", "dhā"],
            ]),
            word("pnm-bhavanti", "they are", [
              ["भ", "bha"],
              ["व", "va"],
              ["न्ति", "nti"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "pnm-pada-4c",
          "phrase",
          "which moisten the earth with their essence, the clear ones; may those waters be peace and ease for us",
          [
            word("pnm-yah-2", "which", [["याः", "yāḥ"]]),
            word("pnm-prthivim", "earth", [
              ["पृ", "pṛ"],
              ["थि", "thi"],
              ["वीं", "vīṃ"],
            ]),
            word("pnm-payasa", "with essence / milk", [
              ["प", "pa"],
              ["य", "ya"],
              ["सो", "so"],
            ], { trailing: "" }),
            word("pnm-undanti", "they moisten", [
              ["न्द", "nda"],
              ["न्ति", "nti"],
            ]),
            word("pnm-sukrah", "clear", [
              ["शु", "śu"],
              ["क्राः", "krāḥ"],
            ]),
            ...refrain("pnm-ref-3", " ॥"),
          ],
        ),
      ],
    ),
    group(
      "pnm-sent-5",
      "sentence",
      "O waters, look on me with a peaceful eye; with an auspicious body touch my skin",
      [
        group(
          "pnm-pada-5",
          "phrase",
          "O waters, look on me with a peaceful eye; with an auspicious body touch my skin",
          [
            word("pnm-sivena", "with auspicious / peaceful", [
              ["शि", "śi"],
              ["वे", "ve"],
              ["न", "na"],
            ]),
            word("pnm-ma", "me", [["मा", "mā"]]),
            word("pnm-caksusa", "with the eye", [
              ["च", "ca"],
              ["क्षु", "kṣu"],
              ["षा", "ṣā"],
            ]),
            word("pnm-pasyata", "look", [
              ["पश्", "paś"],
              ["य", "ya"],
              ["त", "ta"],
            ], { trailing: "" }),
            word("pnm-apah-voc", "waters", [
              ["आ", "ā"],
              ["पः", "paḥ"],
            ]),
            word("pnm-sivaya", "with auspicious", [
              ["शि", "śi"],
              ["व", "va"],
              ["या", "yā"],
            ]),
            word("pnm-tanva", "with the body / form", [
              ["त", "ta"],
              ["न्वा", "nvā"],
            ]),
            word("pnm-upasprsata", "touch", [
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
            word("pnm-me", "my", [["मे", "me"]], {
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
      "I invoke all fires that sit in the waters; establish in me brilliance, strength, ojas",
      [
        group(
          "pnm-pada-6",
          "phrase",
          "I invoke all fires that sit in the waters; establish in me brilliance, strength, ojas",
          [
            word("pnm-sarvan", "all", [
              ["सर्", "sar"],
              ["वाङ्", "vāṅ"],
            ]),
            word("pnm-agnin", "fires", [
              ["अग्", "ag"],
              ["नीन्", "nīn"],
            ]),
            word("pnm-apsu", "in the waters", [
              ["अप्", "ap"],
              ["सु", "su"],
            ], { trailing: "" }),
            word("pnm-sadah", "sitting", [
              ["ष", "ṣa"],
              ["दो", "do"],
            ]),
            word("pnm-huve", "I invoke", [
              ["हु", "hu"],
              ["वे", "ve"],
            ]),
            word("pnm-vah", "you", [["वः", "vaḥ"]]),
            word("pnm-mayi", "in me", [
              ["म", "ma"],
              ["यि", "yi"],
            ]),
            word("pnm-varcah", "brilliance", [
              ["वर्", "var"],
              ["चो", "co"],
            ]),
            word("pnm-bala", "strength", [
              ["ब", "ba"],
              ["ल", "la"],
            ]),
            word("pnm-ojas", "ojas", [
              ["ओ", "o"],
              ["जो", "jo"],
            ]),
            word("pnm-ni", "down", [["नि", "ni"]], { trailing: "" }),
            word("pnm-dhatta", "establish", [
              ["ध", "dha"],
              ["त्त", "tta"],
            ], { trailing: " ॥" }),
          ],
        ),
      ],
    ),
  ]),
};
