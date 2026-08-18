import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This is the daily Aghamarṣaṇa mantra, recited to remove subtle impurities gathered unconsciously. The sādhaka prays: May all knots, bonds, and burdens (drupadā) be released by day and night. Whatever impurities arose from perspiration, sleep, or bodily processes, let them be washed away. May the sacred waters, acting through purity and clarity, cleanse my mind itself. This mantra is especially significant because it asks not only for external purity, but for mental purification (manasaḥ) — washing away hidden impressions.";

export const aghamarsana: Chapter = {
  id: "aghamarsana",
  titleDev: "अघमर्षण मन्त्रः",
  titleIast: "aghamarṣaṇa mantraḥ",
  titleEn: "Aghamarṣaṇa mantra",
  status: "ready",
  translation,
  glossary: [
    { term: "agha", meaning: "sin, impurity, moral stain" },
    { term: "marṣaṇa", meaning: "rubbing away, dissolving" },
    { term: "drupadā", meaning: "knots, fetters, burdens" },
    { term: "divā / divaḥ", meaning: "day / daily cycle" },
    { term: "svinnaḥ", meaning: "fatigued, perspired" },
    { term: "snātvī", meaning: "having bathed" },
    { term: "malāḥ", meaning: "impurities" },
    { term: "pavitra", meaning: "purifier" },
    { term: "āpaḥ", meaning: "sacred waters" },
    { term: "manasaḥ", meaning: "of the mind" },
    { term: "śundhantu", meaning: "may they cleanse" },
    { term: "muñcatu", meaning: "may it fall off / be released" },
    { term: "divenmu mucānaḥ", meaning: "may it be let go into the divine realm" },
    { term: "pūtaṃ", meaning: "pure" },
    { term: "vājyaṃ", meaning: "strong, vigorous, powerful" },
    { term: "me", meaning: "my" },
  ],
  root: group("ag-verse", "verse", translation, [
    group(
      "ag-sent-1",
      "sentence",
      "May all knots, bonds, and burdens (drupadā) be released by day and night.",
      [
        group(
          "ag-pada-1",
          "phrase",
          "May all knots, bonds, and burdens (drupadā) be released by day and night.",
          [
            word("ag-drupada-1", "knots, fetters, burdens", [
              ["द्रु", "dru"],
              ["प", "pa"],
              ["दा", "dā"],
            ]),
            word("ag-diva", "day / daily cycle", [
              ["दि", "di"],
              ["वा", "vā"],
            ]),
            word("ag-muncatu", "may it fall off / be released", [
              ["मुञ्", "muñ"],
              ["च", "ca"],
              ["तु", "tu"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "ag-pada-2",
          "phrase",
          "May all knots, bonds, and burdens (drupadā) be released by day and night.",
          [
            word("ag-drupada-2", "knots, fetters, burdens", [
              ["द्रु", "dru"],
              ["प", "pa"],
              ["दा", "dā"],
            ]),
            word("ag-divenmu", "may it be let go into the divine realm", [
              ["दि", "di"],
              ["वे", "ve"],
              ["न्मु", "nmu"],
            ]),
            word("ag-mucanah", "may it be let go into the divine realm", [
              ["मु", "mu"],
              ["चा", "cā"],
              ["नः", "naḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "ag-sent-2",
      "sentence",
      "Whatever impurities arose from perspiration, sleep, or bodily processes, let them be washed away.",
      [
        group(
          "ag-pada-3",
          "phrase",
          "Whatever impurities arose from perspiration, sleep, or bodily processes, let them be washed away.",
          [
            word("ag-svinnah", "fatigued, perspired", [
              ["स्वि", "svi"],
              ["न्नः", "nnaḥ"],
            ]),
            word("ag-snatvi", "having bathed", [
              ["स्ना", "snā"],
              ["त्वी", "tvī"],
            ]),
            word("ag-malah", "impurities", [
              ["म", "ma"],
              ["लाः", "lāḥ"],
            ]),
            word("ag-divah", "day / daily cycle", [
              ["दि", "di"],
              ["वः", "vaḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "ag-sent-3",
      "sentence",
      "May the sacred waters, acting through purity and clarity, cleanse my mind itself.",
      [
        group(
          "ag-pada-4",
          "phrase",
          "May the sacred waters, acting through purity and clarity, cleanse my mind itself.",
          [
            word("ag-putam", "pure", [
              ["पू", "pū"],
              ["तं", "taṃ"],
            ]),
            word("ag-pavitrena", "purifier", [
              ["प", "pa"],
              ["वि", "vi"],
              ["त्रे", "tre"],
              ["ण", "ṇa"],
            ]),
            word("ag-vajyam", "strong, vigorous, powerful", [
              ["वा", "vā"],
              ["ज्यम्", "jyam"],
            ]),
            word("ag-apah", "sacred waters", [
              ["आ", "ā"],
              ["पः", "paḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "ag-pada-5",
          "phrase",
          "May the sacred waters, acting through purity and clarity, cleanse my mind itself.",
          [
            word("ag-sundhantu", "may they cleanse", [
              ["शु", "śu"],
              ["न्ध", "ndha"],
              ["न्तु", "ntu"],
            ]),
            word("ag-me", "my", [["मे", "me"]]),
            word("ag-manasah", "of the mind", [
              ["म", "ma"],
              ["न", "na"],
              ["सः", "saḥ"],
            ], { trailing: " ॥" }),
          ],
        ),
      ],
    ),
  ]),
};
