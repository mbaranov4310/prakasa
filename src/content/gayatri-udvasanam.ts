import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const verse1Meaning =
  "Born on the highest peak, on the head of the mountain upon the earth, having been permitted by the Brāhmaṇas, O Devī, go happily as you wish.";

const verse2Meaning =
  "I have praised you, O giver of boons, O Mother of the Vedas, you who inspire the twice-born with purity. Having granted me long life on earth, wealth, spiritual radiance, and good progeny, lead me toward Brahmaloka.";

const translation =
  "This chapter is called Gayatrī Udvāsanam, which means respectfully requesting Gayatrī Devī to return to Her divine abode after completing japa and worship. In Sandhyāvandanam, Gayatrī is not treated as just a mantra, but as a living Devī, the very form of Vedic illumination. “" +
  verse1Meaning +
  "” This expresses that Gayatrī Devī is supreme, pure, and exalted, and now that the prayer is complete, she may depart peacefully. “" +
  verse2Meaning +
  "” This is a powerful closing prayer asking Gayatrī Devī for: Āyuḥ (long life); Draviṇam (wealth and resources); Brahma-varcasam (spiritual brilliance and sacred radiance); Prajā (good progeny / continuation of dharma); and finally, the ultimate goal: Brahmaloka (spiritual liberation / highest realm). So the chapter closes Sandhyāvandanam with both gratitude and a final dharmic aspiration.";

export const gayatriUdvasanam: Chapter = {
  id: "gayatri-udvasanam",
  titleDev: "गायत्री उद्वासनम्",
  titleIast: "gāyatrī udvāsanam",
  titleEn: "Gāyatrī udvāsana",
  status: "ready",
  translation,
  glossary: [
    { term: "uttame śikhare", meaning: "highest peak" },
    {
      term: "parvata-mūrdhani",
      meaning: "the summit/crest of a mountain",
    },
    {
      term: "brāhmaṇebhyaḥ abhy-anujñātā",
      meaning: "given leave by the brāhmaṇas",
    },
    {
      term: "gaccha devi yathā-sukham",
      meaning: "go, O Goddess, as is comfortable to you",
    },
    { term: "varadā", meaning: "boon-bestowing one" },
    { term: "veda-mātā", meaning: "Mother of the Veda (Gāyatrī)" },
    { term: "pracodayantī", meaning: "she who impels/inspires" },
    { term: "āyuḥ", meaning: "long life" },
    { term: "draviṇam", meaning: "wealth and resources" },
    {
      term: "brahma-varcasam",
      meaning: "spiritual brilliance and sacred radiance",
    },
    {
      term: "prajā",
      meaning: "good progeny / continuation of dharma",
    },
    {
      term: "brahma-lokam",
      meaning: "spiritual liberation / highest realm",
    },
  ],
  root: group("gu-verse", "verse", translation, [
    group("gu-verse-1", "sentence", verse1Meaning, [
      group(
        "gu-peak",
        "phrase",
        "Born on the highest peak, on the head of the mountain upon the earth",
        [
          word("gu-uttame", "highest peak", [
            ["उ", "u"],
            ["त्त", "tta"],
            ["मे", "me"],
          ]),
          word("gu-sikhare", "highest peak", [
            ["शि", "śi"],
            ["ख", "kha"],
            ["रे", "re"],
          ]),
          word("gu-jate", "", [
            ["जा", "jā"],
            ["ते", "te"],
          ]),
          word("gu-bhumyam", "", [
            ["भू", "bhū"],
            ["म्यां", "myāṃ"],
          ], { lineBreakAfter: true }),
          word(
            "gu-parvatamurdhani",
            "the summit/crest of a mountain",
            [
              ["प", "pa"],
              ["र्व", "rva"],
              ["त", "ta"],
              ["मू", "mū"],
              ["र्ध", "rdha"],
              ["नि", "ni"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "gu-permitted",
        "phrase",
        "having been permitted by the Brāhmaṇas",
        [
          word(
            "gu-brahmanebhyo'bhyanujnata",
            "given leave by the brāhmaṇas",
            [
              ["ब्रा", "brā"],
              ["ह्म", "hma"],
              ["णे", "ṇe"],
              ["भ्यो", "bhyo"],
              ["ऽभ्य", "'bhya"],
              ["नु", "nu"],
              ["ज्ञा", "jñā"],
              ["ता", "tā"],
            ],
            { lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "gu-go",
        "phrase",
        "O Devī, go happily as you wish",
        [
          word("gu-gaccha", "go, O Goddess, as is comfortable to you", [
            ["ग", "ga"],
            ["च्छ", "ccha"],
          ]),
          word("gu-devi", "go, O Goddess, as is comfortable to you", [
            ["दे", "de"],
            ["वि", "vi"],
          ]),
          word(
            "gu-yathasukham",
            "go, O Goddess, as is comfortable to you",
            [
              ["य", "ya"],
              ["था", "thā"],
              ["सु", "su"],
              ["ख", "kha"],
              ["म्", "m"],
            ],
            { trailing: " ॥", lineBreakAfter: true },
          ),
        ],
      ),
    ]),
    group("gu-verse-2", "sentence", verse2Meaning, [
      group(
        "gu-praise",
        "phrase",
        "I have praised you, O giver of boons, O Mother of the Vedas",
        [
          word("gu-stota", "", [
            ["स्तो", "sto"],
            ["ता", "tā"],
          ]),
          word("gu-maya", "", [
            ["म", "ma"],
            ["या", "yā"],
          ]),
          word("gu-varada", "boon-bestowing one", [
            ["व", "va"],
            ["र", "ra"],
            ["दा", "dā"],
          ]),
          word(
            "gu-vedamata",
            "Mother of the Veda (Gāyatrī)",
            [
              ["वे", "ve"],
              ["द", "da"],
              ["मा", "mā"],
              ["ता", "tā"],
            ],
            { lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "gu-inspire",
        "phrase",
        "you who inspire the twice-born with purity",
        [
          word("gu-pracodayanti", "she who impels/inspires", [
            ["प्र", "pra"],
            ["चो", "co"],
            ["द", "da"],
            ["य", "ya"],
            ["न्ती", "ntī"],
          ]),
          word("gu-pavane", "", [
            ["पा", "pā"],
            ["व", "va"],
            ["ने", "ne"],
          ]),
          word(
            "gu-dvijatan",
            "",
            [
              ["द्वि", "dvi"],
              ["जा", "jā"],
              ["तान्", "tān"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "gu-grant",
        "phrase",
        "Having granted me long life on earth, wealth, spiritual radiance, and good progeny, lead me toward Brahmaloka",
        [
          word("gu-ayuh", "long life", [
            ["आ", "ā"],
            ["युः", "yuḥ"],
          ]),
          word("gu-prthivyam", "", [
            ["पृ", "pṛ"],
            ["थि", "thi"],
            ["व्यां", "vyāṃ"],
          ]),
          word(
            "gu-dravinam",
            "wealth and resources",
            [
              ["द्र", "dra"],
              ["वि", "vi"],
              ["णं", "ṇaṃ"],
            ],
            { lineBreakAfter: true },
          ),
          word(
            "gu-brahmavarcasam",
            "spiritual brilliance and sacred radiance",
            [
              ["ब्र", "bra"],
              ["ह्म", "hma"],
              ["व", "va"],
              ["र्च", "rca"],
              ["स", "sa"],
              ["म्", "m"],
            ],
            { lineBreakAfter: true },
          ),
          word("gu-mahyam", "", [
            ["म", "ma"],
            ["ह्यं", "hyaṃ"],
          ]),
          word("gu-dattva", "", [
            ["द", "da"],
            ["त्त्वा", "ttvā"],
          ]),
          word("gu-prajam", "good progeny / continuation of dharma", [
            ["प्र", "pra"],
            ["जां", "jāṃ"],
          ]),
          word("gu-tu", "", [["तु", "tu"]], { lineBreakAfter: true }),
          word(
            "gu-brahmalokam",
            "spiritual liberation / highest realm",
            [
              ["ब्र", "bra"],
              ["ह्म", "hma"],
              ["लो", "lo"],
              ["क", "ka"],
              ["म्", "m"],
            ],
            { trailing: " ॥" },
          ),
        ],
      ),
    ]),
  ]),
};
