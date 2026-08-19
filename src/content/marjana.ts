import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This mantra is an invocation to sacred waters (Āpaḥ). The sādhaka prays: O Waters, you are the source of joy, nourishment, and purity. Grant us strength, vitality, and clarity of vision. Your essence is most auspicious and healing. Like loving mothers, you care for all beings. Protect me fully and purify me. May you strengthen me so that decay, weakness, and impurity are removed.";

export const marjana: Chapter = {
  id: "marjana",
  titleDev: "मार्जनः",
  titleIast: "mārjanaḥ",
  titleEn: "Mārjana",
  status: "ready",
  translation,
  glossary: [
    { term: "mārjana", meaning: "ritual sprinkling of water for purification" },
    { term: "āpaḥ", meaning: "waters (here: sacred)" },
    { term: "mayo", meaning: "joy" },
    { term: "bhuvaḥ", meaning: "becoming / source" },
    { term: "ūrja", meaning: "for strength" },
    { term: "cakṣas", meaning: "for seeing" },
    { term: "śivatamaḥ", meaning: "most auspicious" },
    { term: "rasaḥ", meaning: "essence" },
    { term: "uśatīḥ", meaning: "loving" },
    { term: "mātaraḥ", meaning: "mothers" },
    { term: "kṣaya", meaning: "for decay (here: impurity)" },
    { term: "jinvatha", meaning: "you nourish" },
  ],
  root: group("m-verse", "verse", "", [
    group(
      "m-sent-1",
      "sentence",
      "waters, you are indeed sources of joy",
      [
        word("m-om", "primordial sound", [["ॐ", "oṃ"]], { lineBreakAfter: true }),
        group(
          "m-pada-1a",
          "phrase",
          "waters, you are indeed sources of joy",
          [
            word("m-apo-1", "waters (here: sacred)", [
              ["आ", "ā"],
              ["पो", "po"],
            ]),
            word("m-hi", "indeed", [["हि", "hi"]]),
            word("m-stha", "you are", [["ष्ठा", "ṣṭhā"]]),
            word("m-mayo", "joy", [
              ["म", "ma"],
              ["यो", "yo"],
            ], { trailing: "" }),
            word("m-bhuvah", "becoming / source", [
              ["भु", "bhu"],
              ["वः", "vaḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "m-sent-2",
      "sentence",
      "bestow strength on us; for great delight, for seeing",
      [
        group(
          "m-pada-1b",
          "phrase",
          "bestow strength on us",
          [
            word("m-ta", "they", [["ता", "tā"]]),
            word("m-na-1", "us", [["न", "na"]]),
            word("m-urje", "for strength", [
              ["ऊ", "ū"],
              ["र्जे", "rje"],
            ]),
            word("m-dadhatana", "bestow", [
              ["द", "da"],
              ["धा", "dhā"],
              ["त", "ta"],
              ["न", "na"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "m-pada-1c",
          "phrase",
          "for great delight, for seeing",
          [
            word("m-mahe", "for the great", [
              ["म", "ma"],
              ["हे", "he"],
            ]),
            word("m-ranaya", "for delight", [
              ["र", "ra"],
              ["णा", "ṇā"],
              ["य", "ya"],
            ]),
            word("m-caksase", "for seeing", [
              ["च", "ca"],
              ["क्ष", "kṣa"],
              ["से", "se"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "m-sent-3",
      "sentence",
      "which is your most auspicious essence; grant us a share of that here",
      [
        group(
          "m-pada-2a",
          "phrase",
          "which is your most auspicious essence",
          [
            word("m-yo", "which", [["यो", "yo"]]),
            word("m-vah", "your", [["वः", "vaḥ"]]),
            group(
              "m-sivatamah-rasah",
              "phrase",
              "the most auspicious essence",
              [
                word("m-sivatamo", "most auspicious", [
                  ["शि", "śi"],
                  ["व", "va"],
                  ["त", "ta"],
                  ["मो", "mo"],
                ]),
                word("m-rasah", "essence", [
                  ["र", "ra"],
                  ["सः", "saḥ"],
                ], { trailing: " ।", lineBreakAfter: true }),
              ],
            ),
          ],
        ),
        group(
          "m-pada-2b",
          "phrase",
          "grant us a share of that here",
          [
            word("m-tasya", "of that", [
              ["त", "ta"],
              ["स्य", "sya"],
            ]),
            word("m-bhajayate", "grant a share", [
              ["भा", "bhā"],
              ["ज", "ja"],
              ["य", "ya"],
              ["ते", "te"],
            ], { trailing: "" }),
            word("m-iha", "here", [["ह", "ha"]]),
            word("m-nah-2", "us", [["नः", "naḥ"]], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "m-sent-4",
      "sentence",
      "like loving mothers",
      [
        group(
          "m-pada-2c",
          "phrase",
          "like loving mothers",
          [
            word("m-usatir", "loving", [
              ["उ", "u"],
              ["श", "śa"],
              ["ती", "tī"],
              ["रि", "ri"],
            ], { trailing: "" }),
            word("m-iva", "like", [["व", "va"]]),
            word("m-matarah", "mothers", [
              ["मा", "mā"],
              ["त", "ta"],
              ["रः", "raḥ"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "m-sent-5",
      "sentence",
      "for that, protect me",
      [
        group(
          "m-pada-3a",
          "phrase",
          "for that, protect me",
          [
            word("m-tasma", "for that", [
              ["त", "ta"],
              ["स्मा", "smā"],
            ]),
            word("m-aranga", "", [
              ["अ", "a"],
              ["र", "ra"],
              ["ङ्ग", "ṅga"],
            ]),
            word("m-mam", "me", [
              ["मा", "mā"],
              ["म्", "m"],
            ]),
            word("m-avah", "protect", [
              ["अ", "a"],
              ["वः", "vaḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "m-sent-6",
      "sentence",
      "you who nourish for [whose] decay; and, waters, you generate us",
      [
        group(
          "m-pada-3b",
          "phrase",
          "you who nourish for [whose] decay",
          [
            word("m-yasya", "whose", [
              ["य", "ya"],
              ["स्य", "sya"],
            ]),
            word("m-ksayaya", "for decay (here: impurity)", [
              ["क्ष", "kṣa"],
              ["या", "yā"],
              ["य", "ya"],
            ]),
            word("m-jinvatha", "you nourish", [
              ["जि", "ji"],
              ["न्व", "nva"],
              ["थ", "tha"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
        group(
          "m-pada-3c",
          "phrase",
          "and, waters, you generate us",
          [
            word("m-apo-2", "waters (here: sacred)", [
              ["आ", "ā"],
              ["पो", "po"],
            ]),
            word("m-janayatha", "you generate", [
              ["ज", "ja"],
              ["न", "na"],
              ["य", "ya"],
              ["था", "thā"],
            ]),
            word("m-ca", "and", [["च", "ca"]]),
            word("m-nah-3", "us", [["नः", "naḥ"]], { trailing: " ॥" }),
          ],
        ),
      ],
    ),
  ]),
};
