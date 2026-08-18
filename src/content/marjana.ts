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
    { term: "āpaḥ", meaning: "sacred waters" },
    { term: "mayo-bhuvaḥ", meaning: "source of joy and well-being" },
    { term: "ūrja", meaning: "strength, vitality" },
    { term: "cakṣas", meaning: "vision, clarity" },
    { term: "śivatamaḥ rasaḥ", meaning: "the most auspicious, healing essence" },
    { term: "uśatīḥ", meaning: "loving, nurturing" },
    { term: "mātaraḥ", meaning: "mothers" },
    { term: "kṣaya", meaning: "decay, depletion, impurity" },
    { term: "jinvatha", meaning: "to nourish, strengthen, energize" },
  ],
  root: group("m-verse", "verse", translation, [
    group(
      "m-sent-1",
      "sentence",
      "O Waters, you are the source of joy, nourishment, and purity.",
      [
        word("m-om", "", [["ॐ", "oṃ"]], { lineBreakAfter: true }),
        group(
          "m-pada-1a",
          "phrase",
          "O Waters, you are the source of joy, nourishment, and purity.",
          [
            word("m-apo-1", "sacred waters", [
              ["आ", "ā"],
              ["पो", "po"],
            ]),
            word("m-hi", "", [["हि", "hi"]]),
            word("m-stha", "", [["ष्ठा", "ṣṭhā"]]),
            word("m-mayobhuvah", "source of joy and well-being", [
              ["म", "ma"],
              ["यो", "yo"],
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
      "Grant us strength, vitality, and clarity of vision.",
      [
        group(
          "m-pada-1b",
          "phrase",
          "Grant us strength, vitality, and clarity of vision.",
          [
            word("m-ta", "", [["ता", "tā"]]),
            word("m-na-1", "", [["न", "na"]]),
            word("m-urje", "strength, vitality", [
              ["ऊ", "ū"],
              ["र्जे", "rje"],
            ]),
            word("m-dadhatana", "", [
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
          "Grant us strength, vitality, and clarity of vision.",
          [
            word("m-mahe", "", [
              ["म", "ma"],
              ["हे", "he"],
            ]),
            word("m-ranaya", "", [
              ["र", "ra"],
              ["णा", "ṇā"],
              ["य", "ya"],
            ]),
            word("m-caksase", "vision, clarity", [
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
      "Your essence is most auspicious and healing.",
      [
        group(
          "m-pada-2a",
          "phrase",
          "Your essence is most auspicious and healing.",
          [
            word("m-yo", "", [["यो", "yo"]]),
            word("m-vah", "", [["वः", "vaḥ"]]),
            group(
              "m-sivatamah-rasah",
              "phrase",
              "the most auspicious, healing essence",
              [
                word("m-sivatamo", "the most auspicious, healing essence", [
                  ["शि", "śi"],
                  ["व", "va"],
                  ["त", "ta"],
                  ["मो", "mo"],
                ]),
                word("m-rasah", "the most auspicious, healing essence", [
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
          "Your essence is most auspicious and healing.",
          [
            word("m-tasya", "", [
              ["त", "ta"],
              ["स्य", "sya"],
            ]),
            word("m-bhajayateha", "", [
              ["भा", "bhā"],
              ["ज", "ja"],
              ["य", "ya"],
              ["ते", "te"],
              ["ह", "ha"],
            ]),
            word("m-nah-2", "", [["नः", "naḥ"]], {
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
      "Like loving mothers, you care for all beings.",
      [
        group(
          "m-pada-2c",
          "phrase",
          "Like loving mothers, you care for all beings.",
          [
            word("m-usatiriva", "loving, nurturing", [
              ["उ", "u"],
              ["श", "śa"],
              ["ती", "tī"],
              ["रि", "ri"],
              ["व", "va"],
            ]),
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
      "Protect me fully and purify me.",
      [
        group(
          "m-pada-3a",
          "phrase",
          "Protect me fully and purify me.",
          [
            word("m-tasma", "", [
              ["त", "ta"],
              ["स्मा", "smā"],
            ]),
            word("m-aranga", "", [
              ["अ", "a"],
              ["र", "ra"],
              ["ङ्ग", "ṅga"],
            ]),
            word("m-mam", "", [
              ["मा", "mā"],
              ["म्", "m"],
            ]),
            word("m-avah", "", [
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
      "May you strengthen me so that decay, weakness, and impurity are removed.",
      [
        group(
          "m-pada-3b",
          "phrase",
          "May you strengthen me so that decay, weakness, and impurity are removed.",
          [
            word("m-yasya", "", [
              ["य", "ya"],
              ["स्य", "sya"],
            ]),
            word("m-ksayaya", "decay, depletion, impurity", [
              ["क्ष", "kṣa"],
              ["या", "yā"],
              ["य", "ya"],
            ]),
            word("m-jinvatha", "to nourish, strengthen, energize", [
              ["जि", "ji"],
              ["न्व", "nva"],
              ["थ", "tha"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
        group(
          "m-pada-3c",
          "phrase",
          "May you strengthen me so that decay, weakness, and impurity are removed.",
          [
            word("m-apo-2", "sacred waters", [
              ["आ", "ā"],
              ["पो", "po"],
            ]),
            word("m-janayatha", "", [
              ["ज", "ja"],
              ["न", "na"],
              ["य", "ya"],
              ["था", "thā"],
            ]),
            word("m-ca", "", [["च", "ca"]]),
            word("m-nah-3", "", [["नः", "naḥ"]], { trailing: " ॥" }),
          ],
        ),
      ],
    ),
  ]),
};
