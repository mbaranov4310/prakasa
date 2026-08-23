import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const verse1Meaning =
  "Born on the highest peak, on the head of the mountain upon the earth, having been permitted by the Brāhmaṇas, O Devī, go happily as you wish.";

const verse2Meaning =
  "I have praised you, O giver of boons, O Mother of the Vedas, you who inspire the twice-born with purity. Having granted me long life on earth, wealth, spiritual radiance, and good progeny, lead me toward Brahmaloka.";

const translation =
  "This chapter is called Gayatrī Udvāsanam, which means respectfully requesting Gayatrī Devī to return to Her divine abode after completing japa and worship. In Sandhyāvandanam, Gayatrī is not treated as just a mantra, but as a living Devī, the very form of Vedic illumination. After we invoke Her (āvāhana), perform japa, and complete all associated mudrās and prayers, we must conclude properly by offering udvāsana. “" +
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
    { term: "uttame", meaning: "on the highest" },
    { term: "śikhare", meaning: "peak" },
    { term: "jāte", meaning: "born / arisen" },
    { term: "bhūmyām", meaning: "on the earth" },
    { term: "parvata", meaning: "mountain" },
    { term: "mūrdhani", meaning: "on the summit" },
    { term: "brāhmaṇebhyaḥ", meaning: "by the brāhmaṇas" },
    { term: "abhyanujñātā", meaning: "having been permitted" },
    { term: "gaccha", meaning: "go" },
    { term: "devi", meaning: "O Devī" },
    { term: "yathā", meaning: "as" },
    { term: "sukham", meaning: "comfort" },
    { term: "stuto", meaning: "praised" },
    { term: "mayā", meaning: "by me" },
    { term: "varadā", meaning: "boon-giver" },
    { term: "veda", meaning: "Veda" },
    { term: "mātā", meaning: "mother" },
    { term: "pracodayantī", meaning: "impelling" },
    { term: "pavane", meaning: "wind / vital air" },
    { term: "dvijātā", meaning: "twice-born" },
    { term: "āyuḥ", meaning: "long life" },
    { term: "pṛthivyām", meaning: "on earth" },
    { term: "draviṇam", meaning: "wealth" },
    { term: "brahma", meaning: "Brahman / Veda" },
    { term: "varcasam", meaning: "radiance" },
    { term: "mahyam", meaning: "to me" },
    { term: "dattvā", meaning: "having given" },
    { term: "prajātuṃ", meaning: "to go forth / to depart" },
    { term: "lokam", meaning: "world" },
  ],
  root: group("gu-root", "verse", "", [
    group("gu-verse-1", "verse", "", [
      group(
        "gu-verse-1a",
        "sentence",
        "born on the highest mountain-peak on the earth",
        [
          word("gu-uttame", "on the highest", [
            ["उ", "u"],
            ["त्त", "tta"],
            ["मे", "me"],
          ]),
          word("gu-sikhare", "peak", [
            ["शि", "śi"],
            ["ख", "kha"],
            ["रे", "re"],
          ]),
          word("gu-jate", "born / arisen", [
            ["जा", "jā"],
            ["ते", "te"],
          ]),
          word("gu-bhumyam", "on the earth", [
            ["भू", "bhū"],
            ["म्यां", "myāṃ"],
          ], { lineBreakAfter: true }),
          word("gu-parvata", "mountain", [
            ["पर्", "par"],
            ["व", "va"],
            ["त", "ta"],
          ], { trailing: "" }),
          word("gu-murdhani", "on the summit", [
            ["मूर्", "mūr"],
            ["ध", "dha"],
            ["नि", "ni"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "gu-verse-1b",
        "sentence",
        "having been permitted by the brāhmaṇas, O Devī, go as you wish",
        [
          word("gu-brahmanebhyah", "by the brāhmaṇas", [
            ["ब्राह्", "brāh"],
            ["म", "ma"],
            ["णे", "ṇe"],
            ["भ्यो", "bhyo"],
          ], { trailing: "" }),
          word("gu-abhyanujnata", "having been permitted", [
            ["ऽभ्", "’b"],
            ["य", "hya"],
            ["नु", "nu"],
            ["ज्ञा", "jñā"],
            ["ता", "tā"],
          ], { lineBreakAfter: true }),
          word("gu-gaccha", "go", [
            ["ग", "ga"],
            ["च्छ", "ccha"],
          ]),
          word("gu-devi", "O Devī", [
            ["दे", "de"],
            ["वि", "vi"],
          ]),
          word("gu-yatha", "as", [
            ["य", "ya"],
            ["था", "thā"],
          ], { trailing: "" }),
          word("gu-sukham", "comfort", [
            ["सु", "su"],
            ["खम्", "kham"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
    ]),
    group("gu-verse-2", "verse", "", [
      group(
        "gu-verse-2a",
        "sentence",
        "praised by me is the boon-giving Veda-mother, the twice-born who impels like the vital air",
        [
          word("gu-stuto", "praised", [
            ["स्तु", "stu"],
            ["तो", "to"],
          ]),
          word("gu-maya", "by me", [
            ["म", "ma"],
            ["या", "yā"],
          ]),
          word("gu-varada", "boon-giver", [
            ["व", "va"],
            ["र", "ra"],
            ["दा", "dā"],
          ]),
          word("gu-veda", "Veda", [
            ["वे", "ve"],
            ["द", "da"],
          ], { trailing: "" }),
          word("gu-mata", "mother", [
            ["मा", "mā"],
            ["ता", "tā"],
          ], { lineBreakAfter: true }),
          word("gu-pracodayanti", "impelling", [
            ["प्र", "pra"],
            ["चो", "co"],
            ["द", "da"],
            ["यन्", "yan"],
            ["ती", "tī"],
          ]),
          word("gu-pavane", "wind / vital air", [
            ["प", "pa"],
            ["व", "va"],
            ["ने", "ne"],
          ]),
          word("gu-dvijata", "twice-born", [
            ["द्वि", "dvi"],
            ["जा", "jā"],
            ["ता", "tā"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "gu-verse-2b",
        "sentence",
        "having given me long life on earth, wealth, and Vedic radiance, to depart to the world of Brahman",
        [
          word("gu-ayuh", "long life", [
            ["आ", "ā"],
            ["युः", "yuḥ"],
          ]),
          word("gu-prthivyam", "on earth", [
            ["पृ", "pṛ"],
            ["थि", "thi"],
            ["व्यां", "vyāṃ"],
          ]),
          word("gu-dravinam", "wealth", [
            ["द्र", "dra"],
            ["वि", "vi"],
            ["णं", "ṇaṃ"],
          ]),
          word("gu-brahma-1", "Brahman / Veda", [
            ["ब्रह्", "brah"],
            ["म", "ma"],
          ], { trailing: "" }),
          word("gu-varcasam", "radiance", [
            ["वर्", "var"],
            ["च", "ca"],
            ["सम्", "sam"],
          ], { lineBreakAfter: true }),
          word("gu-mahyam", "to me", [
            ["म", "ma"],
            ["ह्यं", "hyaṃ"],
          ]),
          word("gu-dattva", "having given", [
            ["द", "da"],
            ["त्त्वा", "ttvā"],
          ]),
          word("gu-prajatum", "to go forth / to depart", [
            ["प्र", "pra"],
            ["जा", "jā"],
            ["तुं", "tuṃ"],
          ]),
          word("gu-brahma-2", "Brahman / Veda", [
            ["ब्रह्", "brah"],
            ["म", "ma"],
          ], { trailing: "" }),
          word("gu-lokam", "world", [
            ["लो", "lo"],
            ["कम्", "kam"],
          ], { trailing: " ॥" }),
        ],
      ),
    ]),
  ]),
};
