import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This chapter invokes Gāyatrī Devi before japa begins. We declare: Om as the one imperishable Brahman; Agni as the presiding deity; Gāyatrī as the sacred meter; Paramātma as the true form. We then invite Gāyatrī, the boon-giving Mother, to accept our worship through her own sacred meter. The mantra affirms that sins done by day or night are released, and praises Gāyatrī as Sarasvatī, the Sandhyā-Vidya, the power of all sounds. The final section infuses strength, brilliance, life-force, and universality, preparing the chanter for focused Gāyatrī Japa.";

export const gayatriAvahanam: Chapter = {
  id: "gayatri-avahanam",
  titleDev: "गायत्री आवाहनम्",
  titleIast: "gāyatrī āvāhanam",
  titleEn: "Gāyatrī Invocation",
  status: "ready",
  translation,
  glossary: [
    { term: "āvāhanam", meaning: "respectful invocation" },
    { term: "eka-akṣaram", meaning: "the single imperishable sound (Om)" },
    { term: "chandas", meaning: "Vedic meter" },
    { term: "vinīyogaḥ", meaning: "purpose and application" },
    { term: "juṣasva", meaning: "“please accept”" },
    { term: "ojas", meaning: "inner strength" },
    { term: "bala", meaning: "physical and mental power" },
    { term: "tejas / bhrajas", meaning: "brilliance" },
    { term: "sarasvatī", meaning: "goddess of wisdom and speech" },
  ],
  root: group("ga-verse", "verse", translation, [
    group(
      "ga-declare",
      "sentence",
      "We declare: Om as the one imperishable Brahman; Agni as the presiding deity; Gāyatrī as the sacred meter; Paramātma as the true form.",
      [
        group("ga-om-brahma", "phrase", "Om as the one imperishable Brahman", [
          word("ga-om-1", "the primal sound", [["ॐ", "oṃ"]]),
          word("ga-ityekaksaram", "the single imperishable sound (Om)", [
            ["इ", "i"],
            ["त्ये", "tye"],
            ["का", "kā"],
            ["क्ष", "kṣa"],
            ["रं", "raṃ"],
          ]),
          word(
            "ga-brahma-1",
            "the Absolute",
            [
              ["ब्र", "bra"],
              ["ह्म", "hma"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ]),
        group("ga-agni", "phrase", "Agni as the presiding deity", [
          word("ga-agnirdevata", "", [
            ["अ", "a"],
            ["ग्नि", "gni"],
            ["र्दे", "rde"],
            ["व", "va"],
            ["ता", "tā"],
          ]),
          word("ga-brahma-2", "the Absolute", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ]),
          word(
            "ga-ityarsam",
            "",
            [
              ["इ", "i"],
              ["त्या", "tyā"],
              ["र्ष", "rṣa"],
              ["म्", "m"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ]),
        group("ga-gayatra-chandas", "phrase", "Gāyatrī as the sacred meter", [
          word("ga-gayatram", "", [
            ["गा", "gā"],
            ["य", "ya"],
            ["त्रं", "traṃ"],
          ]),
          word("ga-chandah", "Vedic meter", [
            ["छ", "cha"],
            ["न्दः", "ndaḥ"],
          ]),
        ]),
        group("ga-paramatma", "phrase", "Paramātma as the true form", [
          word("ga-paramatma-word", "supreme Self", [
            ["प", "pa"],
            ["र", "ra"],
            ["मा", "mā"],
            ["त्मा", "tmā"],
          ]),
          word(
            "ga-svarupam",
            "true form",
            [
              ["स्व", "sva"],
              ["रू", "rū"],
              ["प", "pa"],
              ["म्", "m"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ]),
        group("ga-viniyoga", "phrase", "purpose and application", [
          word("ga-sayujyam", "union, intimate communion", [
            ["सा", "sā"],
            ["यु", "yu"],
            ["ज्यं", "jyaṃ"],
          ]),
          word(
            "ga-viniyogah",
            "purpose and application",
            [
              ["वि", "vi"],
              ["नि", "ni"],
              ["यो", "yo"],
              ["गः", "gaḥ"],
            ],
            { trailing: " ॥", lineBreakAfter: true },
          ),
        ]),
      ],
    ),
    group(
      "ga-invite",
      "sentence",
      "We then invite Gāyatrī, the boon-giving Mother, to accept our worship through her own sacred meter.",
      [
        group(
          "ga-ayatu",
          "phrase",
          "We then invite Gāyatrī, the boon-giving Mother",
          [
            word("ga-ayatu-word", "may she come", [
              ["आ", "ā"],
              ["या", "yā"],
              ["तु", "tu"],
            ]),
            word("ga-varada", "boon-giving", [
              ["व", "va"],
              ["र", "ra"],
              ["दा", "dā"],
            ]),
            word(
              "ga-devi",
              "the goddess",
              [
                ["दे", "de"],
                ["वी", "vī"],
              ],
              { lineBreakAfter: true },
            ),
            word(
              "ga-aksarabrahmasammitam",
              "united with the imperishable Brahman",
              [
                ["अ", "a"],
                ["क्ष", "kṣa"],
                ["र", "ra"],
                ["ब्र", "bra"],
                ["ह्म", "hma"],
                ["स", "sa"],
                ["म्मि", "mmi"],
                ["त", "ta"],
                ["म्", "m"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ga-jusasva-pada",
          "phrase",
          "to accept our worship through her own sacred meter",
          [
            word("ga-gayatrichandasa", "by the Gāyatrī metre", [
              ["गा", "gā"],
              ["य", "ya"],
              ["त्री", "trī"],
              ["छ", "cha"],
              ["न्द", "nda"],
              ["सा", "sā"],
            ]),
            word(
              "ga-matedam",
              "",
              [
                ["मा", "mā"],
                ["ते", "te"],
                ["दं", "daṃ"],
              ],
              { lineBreakAfter: true },
            ),
            word("ga-brahma-3", "the Absolute", [
              ["ब्र", "bra"],
              ["ह्म", "hma"],
            ]),
            word("ga-jusasva", "“please accept”", [
              ["जु", "ju"],
              ["ष", "ṣa"],
              ["स्व", "sva"],
            ]),
            word("ga-me", "of mine", [["मे", "me"]], {
              trailing: " ॥",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "ga-papa",
      "sentence",
      "The mantra affirms that sins done by day or night are released",
      [
        group(
          "ga-papa-day",
          "phrase",
          "The mantra affirms that sins done by day or night are released",
          [
            word("ga-yadahna", "whatever by day", [
              ["य", "ya"],
              ["द", "da"],
              ["ह्ना", "hnā"],
            ]),
            word("ga-kurute-1", "", [
              ["कु", "ku"],
              ["रु", "ru"],
              ["ते", "te"],
            ]),
            word("ga-papam-1", "sin, fault", [
              ["पा", "pā"],
              ["पं", "paṃ"],
            ]),
            word("ga-tadahna", "", [
              ["त", "ta"],
              ["द", "da"],
              ["ह्ना", "hnā"],
            ]),
            word(
              "ga-pratimucyate-1",
              "is released, loosened",
              [
                ["प्र", "pra"],
                ["ति", "ti"],
                ["मु", "mu"],
                ["च्य", "cya"],
                ["ते", "te"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ga-papa-night",
          "phrase",
          "The mantra affirms that sins done by day or night are released",
          [
            word("ga-yadratrya", "whatever by night", [
              ["यद्", "yad"],
              ["रा", "rā"],
              ["त्र्या", "tryā"],
            ]),
            word("ga-kurute-2", "", [
              ["कु", "ku"],
              ["रु", "ru"],
              ["ते", "te"],
            ]),
            word("ga-papam-2", "sin, fault", [
              ["पा", "pā"],
              ["पं", "paṃ"],
            ]),
            word("ga-tadratrya", "", [
              ["तद्", "tad"],
              ["रा", "rā"],
              ["त्र्या", "tryā"],
            ]),
            word(
              "ga-pratimucyate-2",
              "is released, loosened",
              [
                ["प्र", "pra"],
                ["ति", "ti"],
                ["मु", "mu"],
                ["च्य", "cya"],
                ["ते", "te"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
      ],
    ),
    group(
      "ga-praise",
      "sentence",
      "praises Gāyatrī as Sarasvatī, the Sandhyā-Vidya, the power of all sounds",
      [
        word("ga-sarvavarne", "O one of all letters/syllables", [
          ["स", "sa"],
          ["र्व", "rva"],
          ["व", "va"],
          ["र्णे", "rṇe"],
        ]),
        word("ga-mahadevi", "great goddess", [
          ["म", "ma"],
          ["हा", "hā"],
          ["दे", "de"],
          ["वि", "vi"],
        ]),
        word("ga-sandhyavidye", "knowledge and rite of twilight", [
          ["स", "sa"],
          ["न्ध्या", "ndhyā"],
          ["वि", "vi"],
          ["द्ये", "dye"],
        ]),
        word(
          "ga-sarasvati",
          "goddess of wisdom and speech",
          [
            ["स", "sa"],
            ["र", "ra"],
            ["स्व", "sva"],
            ["ति", "ti"],
          ],
          { trailing: " ॥", lineBreakAfter: true },
        ),
      ],
    ),
    group(
      "ga-ojas",
      "sentence",
      "The final section infuses strength, brilliance, life-force, and universality, preparing the chanter for focused Gāyatrī Japa.",
      [
        group(
          "ga-ojas-line",
          "phrase",
          "The final section infuses strength, brilliance, life-force, and universality, preparing the chanter for focused Gāyatrī Japa.",
          [
            word("ga-ojosi", "inner strength", [
              ["ओ", "o"],
              ["जो", "jo"],
              ["ऽसि", "'si"],
            ]),
            word("ga-sahosi", "might, endurance", [
              ["स", "sa"],
              ["हो", "ho"],
              ["ऽसि", "'si"],
            ]),
            word(
              "ga-balamasi",
              "physical and mental power",
              [
                ["ब", "ba"],
                ["ल", "la"],
                ["म", "ma"],
                ["सि", "si"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ga-bhrajas-line",
          "phrase",
          "The final section infuses strength, brilliance, life-force, and universality, preparing the chanter for focused Gāyatrī Japa.",
          [
            word("ga-bhrajosi", "brilliance", [
              ["भ्रा", "bhrā"],
              ["जो", "jo"],
              ["ऽसि", "'si"],
            ]),
            word("ga-devanam", "brightness/abode of the gods", [
              ["दे", "de"],
              ["वा", "vā"],
              ["नां", "nāṃ"],
            ]),
            word(
              "ga-dhamanamasi",
              "brightness/abode of the gods",
              [
                ["धा", "dhā"],
                ["म", "ma"],
                ["ना", "nā"],
                ["म", "ma"],
                ["सि", "si"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ga-visva-line",
          "phrase",
          "The final section infuses strength, brilliance, life-force, and universality, preparing the chanter for focused Gāyatrī Japa.",
          [
            word("ga-visvamasi", "the All", [
              ["वि", "vi"],
              ["श्व", "śva"],
              ["म", "ma"],
              ["सि", "si"],
            ]),
            word("ga-visvayuh", "life of all", [
              ["वि", "vi"],
              ["श्वा", "śvā"],
              ["युः", "yuḥ"],
            ]),
            word(
              "ga-sarvamasi",
              "everything",
              [
                ["स", "sa"],
                ["र्व", "rva"],
                ["म", "ma"],
                ["सि", "si"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ga-sarvayuh-line",
          "phrase",
          "The final section infuses strength, brilliance, life-force, and universality, preparing the chanter for focused Gāyatrī Japa.",
          [
            word("ga-sarvayurabhibhur", "overlord of all life", [
              ["स", "sa"],
              ["र्वा", "rvā"],
              ["यु", "yu"],
              ["र", "ra"],
              ["भि", "bhi"],
              ["भूर्", "bhūr"],
            ]),
            word("ga-om-2", "the primal sound", [["ॐ", "oṃ"]], {
              trailing: " ॥",
            }),
          ],
        ),
      ],
    ),
  ]),
};
