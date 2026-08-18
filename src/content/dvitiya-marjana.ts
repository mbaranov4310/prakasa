import { group, word } from "../lib/span";
import type { Chapter } from "../types";

function apo(id: string) {
  return word(id, "sacred waters", [
    ["आ", "ā"],
    ["पो", "po"],
  ]);
}

export const dvitiyaMarjana: Chapter = {
  id: "dvitiya-marjana",
  titleDev: "द्वितीय मार्जनः",
  titleIast: "dvitīya mārjanaḥ",
  titleEn: "Second ritual sprinkling",
  status: "ready",
  translation:
    "This second sprinkling deepens purification. The opening mantra invokes vigor, speed, fragrance, and vitality, asking that life-forces and lifespan be strengthened. The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity. Finally, the prayer asks the waters to generate and renew what has been depleted. Together, this removes subtle fatigue, restores prāṇa, and prepares the sādhaka for the next stages of Sandhyā.",
  glossary: [
    { term: "dvitīya mārjana", meaning: "second ritual sprinkling" },
    { term: "dadhi-krāvṇṇaḥ", meaning: "energizing, strengthening force (invocation of vitality)" },
    { term: "jiṣṇuḥ", meaning: "victorious, powerful" },
    { term: "vājinaḥ", meaning: "swift, strong" },
    { term: "prāṇa-āyūṃṣi", meaning: "life-forces and lifespan" },
    { term: "āpaḥ", meaning: "sacred waters" },
    { term: "mayo-bhuvaḥ", meaning: "source of joy" },
    { term: "śivatamaḥ rasaḥ", meaning: "most auspicious essence" },
    { term: "āpo janayathā ca naḥ", meaning: "“O waters, generate and renew us”" },
  ],
  root: group(
    "dm-verse",
    "verse",
    "This second sprinkling deepens purification. The opening mantra invokes vigor, speed, fragrance, and vitality, asking that life-forces and lifespan be strengthened. The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity. Finally, the prayer asks the waters to generate and renew what has been depleted. Together, this removes subtle fatigue, restores prāṇa, and prepares the sādhaka for the next stages of Sandhyā.",
    [
      group(
        "dm-opening",
        "sentence",
        "The opening mantra invokes vigor, speed, fragrance, and vitality, asking that life-forces and lifespan be strengthened.",
        [
          word("dm-dadhikravnno", "energizing, strengthening force (invocation of vitality)", [
            ["द", "da"],
            ["धि", "dhi"],
            ["क्रा", "krā"],
            ["व्ण्णो", "vṇṇo"],
          ]),
          word("dm-akarisam", "", [
            ["अ", "a"],
            ["का", "kā"],
            ["रि", "ri"],
            ["ष", "ṣa"],
            ["म्", "m"],
          ]),
          word("dm-jisnorasvasya", "victorious, powerful", [
            ["जि", "ji"],
            ["ष्णो", "ṣṇo"],
            ["र", "ra"],
            ["श्व", "śva"],
            ["स्य", "sya"],
          ]),
          word("dm-vajinah", "swift, strong", [
            ["वा", "vā"],
            ["जि", "ji"],
            ["नः", "naḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
          word("dm-surabhino", "", [
            ["सु", "su"],
            ["र", "ra"],
            ["भि", "bhi"],
            ["णो", "ṇo"],
          ]),
          word("dm-mukha", "", [
            ["मु", "mu"],
            ["खा", "khā"],
          ]),
          word("dm-karat", "", [
            ["क", "ka"],
            ["र", "ra"],
            ["त्", "t"],
          ]),
          group("dm-prana-ayumsi", "phrase", "life-forces and lifespan", [
            word("dm-prana", "", [
              ["प्रा", "prā"],
              ["ण", "ṇa"],
            ]),
            word("dm-ayumsi", "", [
              ["आ", "ā"],
              ["यू", "yū"],
              ["ङ्षि", "ṅṣi"],
            ]),
          ]),
          word("dm-tarisat", "", [
            ["ता", "tā"],
            ["रि", "ri"],
            ["ष", "ṣa"],
            ["त्", "t"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
      group(
        "dm-apah",
        "verse",
        "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
        [
          group(
            "dm-apah-1",
            "sentence",
            "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
            [
              word("dm-om", "", [["ॐ", "oṃ"]]),
              apo("dm-apo-1"),
              word("dm-histha", "", [
                ["हि", "hi"],
                ["ष्ठा", "ṣṭhā"],
              ]),
              word("dm-mayobhuvah", "source of joy", [
                ["म", "ma"],
                ["यो", "yo"],
                ["भु", "bhu"],
                ["वः", "vaḥ"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ],
          ),
          group(
            "dm-apah-2",
            "sentence",
            "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
            [
              word("dm-ta", "", [["ता", "tā"]]),
              word("dm-na", "", [["न", "na"]]),
              word("dm-urje", "", [
                ["ऊ", "ū"],
                ["र्जे", "rje"],
              ]),
              word("dm-dadhatana", "", [
                ["द", "da"],
                ["धा", "dhā"],
                ["त", "ta"],
                ["न", "na"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ],
          ),
          group(
            "dm-apah-3",
            "sentence",
            "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
            [
              word("dm-maheranaya", "", [
                ["म", "ma"],
                ["हे", "he"],
                ["र", "ra"],
                ["णा", "ṇā"],
                ["य", "ya"],
              ]),
              word("dm-caksase", "", [
                ["च", "ca"],
                ["क्ष", "kṣa"],
                ["से", "se"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ],
          ),
          group(
            "dm-apah-4",
            "sentence",
            "most auspicious essence",
            [
              word("dm-yo", "", [["यो", "yo"]]),
              word("dm-vah", "", [["वः", "vaḥ"]]),
              group("dm-sivatamo-rasah", "phrase", "most auspicious essence", [
                word("dm-sivatamo", "", [
                  ["शि", "śi"],
                  ["व", "va"],
                  ["त", "ta"],
                  ["मो", "mo"],
                ]),
                word("dm-rasah", "", [
                  ["र", "ra"],
                  ["सः", "saḥ"],
                ], { trailing: " ।", lineBreakAfter: true }),
              ]),
            ],
          ),
          group(
            "dm-apah-5",
            "sentence",
            "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
            [
              word("dm-tasya", "", [
                ["त", "ta"],
                ["स्य", "sya"],
              ]),
              word("dm-bhajayate", "", [
                ["भा", "bhā"],
                ["ज", "ja"],
                ["य", "ya"],
                ["ते", "te"],
              ]),
              word("dm-ha", "", [["ह", "ha"]]),
              word("dm-nah-1", "", [["नः", "naḥ"]], {
                trailing: " ।",
                lineBreakAfter: true,
              }),
            ],
          ),
          group(
            "dm-apah-6",
            "sentence",
            "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
            [
              word("dm-usatiriva", "", [
                ["उ", "u"],
                ["श", "śa"],
                ["ती", "tī"],
                ["रि", "ri"],
                ["व", "va"],
              ]),
              word("dm-matarah", "", [
                ["मा", "mā"],
                ["त", "ta"],
                ["रः", "raḥ"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ],
          ),
          group(
            "dm-apah-7",
            "sentence",
            "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
            [
              word("dm-tasma", "", [
                ["त", "ta"],
                ["स्मा", "smā"],
              ]),
              word("dm-aranga", "", [
                ["अ", "a"],
                ["र", "ra"],
                ["ङ्ग", "ṅga"],
              ]),
              word("dm-mamavah", "", [
                ["मा", "mā"],
                ["म", "ma"],
                ["वः", "vaḥ"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ],
          ),
          group(
            "dm-apah-8",
            "sentence",
            "The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity.",
            [
              word("dm-yasya", "", [
                ["य", "ya"],
                ["स्य", "sya"],
              ]),
              word("dm-ksayaya", "", [
                ["क्ष", "kṣa"],
                ["या", "yā"],
                ["य", "ya"],
              ]),
              word("dm-jinvatha", "", [
                ["जि", "ji"],
                ["न्व", "nva"],
                ["थ", "tha"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ],
          ),
        ],
      ),
      group(
        "dm-renew",
        "sentence",
        "Finally, the prayer asks the waters to generate and renew what has been depleted.",
        [
          group("dm-apo-janayatha", "phrase", "“O waters, generate and renew us”", [
            apo("dm-apo-2"),
            word("dm-janayatha", "", [
              ["ज", "ja"],
              ["न", "na"],
              ["य", "ya"],
              ["था", "thā"],
            ]),
            word("dm-ca", "", [["च", "ca"]]),
            word("dm-nah-2", "", [["नः", "naḥ"]], { trailing: " ॥" }),
          ]),
        ],
      ),
    ],
  ),
};
