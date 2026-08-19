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
    { term: "drupadāt", meaning: "post (here: fetter)" },
    { term: "iva", meaning: "like" },
    { term: "muñcatu", meaning: "may it release" },
    { term: "mumucānaḥ", meaning: "having been released" },
    { term: "svinnaḥ", meaning: "having sweated" },
    { term: "snātvī", meaning: "having bathed" },
    { term: "malāt", meaning: "from dirt" },
    { term: "pūtam", meaning: "purified" },
    { term: "pavitreṇa", meaning: "with the strainer / purifier" },
    { term: "ājyam", meaning: "ghee" },
    { term: "āpaḥ", meaning: "waters" },
    { term: "śundhantu", meaning: "may they cleanse" },
    { term: "me", meaning: "my" },
    { term: "manasaḥ", meaning: "of the mind" },
  ],
  root: group("ag-verse", "verse", "", [
    group(
      "ag-sent-1",
      "sentence",
      "like from a post, may it be released; like from a post, having been released",
      [
        group(
          "ag-pada-1",
          "phrase",
          "like from a post, may it be released",
          [
            word("ag-drupadat-1", "post (here: fetter)", [
              ["द्रु", "dru"],
              ["प", "pa"],
              ["दात्", "dāt"],
            ]),
            word("ag-iva-1", "like", [
              ["इ", "i"],
              ["व", "va"],
            ]),
            word("ag-muncatu", "may it release", [
              ["मुञ्", "muñ"],
              ["च", "ca"],
              ["तु", "tu"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "ag-pada-2",
          "phrase",
          "like from a post, having been released",
          [
            word("ag-drupadat-2", "post (here: fetter)", [
              ["द्रु", "dru"],
              ["प", "pa"],
              ["दात्", "dāt"],
            ]),
            word("ag-iva-2", "like", [
              ["इ", "i"],
              ["व", "va"],
            ]),
            word("ag-mumucanah", "having been released", [
              ["मु", "mu"],
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
      "having sweated, having bathed, like from dirt",
      [
        group(
          "ag-pada-3",
          "phrase",
          "having sweated, having bathed, like from dirt",
          [
            word("ag-svinnah", "having sweated", [
              ["स्वि", "svi"],
              ["न्नः", "nnaḥ"],
            ]),
            word("ag-snatvi", "having bathed", [
              ["स्ना", "snā"],
              ["त्वी", "tvī"],
            ]),
            word("ag-malat", "from dirt", [
              ["म", "ma"],
              ["लात्", "lāt"],
            ]),
            word("ag-iva-3", "like", [
              ["इ", "i"],
              ["व", "va"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "ag-sent-3",
      "sentence",
      "purified like ghee with a strainer, O waters, may they cleanse my mind",
      [
        group(
          "ag-pada-4",
          "phrase",
          "purified like ghee with a strainer, O waters",
          [
            word("ag-putam", "purified", [
              ["पू", "pū"],
              ["तं", "taṃ"],
            ]),
            word("ag-pavitrena", "with the strainer / purifier", [
              ["प", "pa"],
              ["वि", "vi"],
              ["त्रे", "tre"],
              ["ण", "ṇa"],
            ]),
            word("ag-iva-4", "like", [
              ["इ", "i"],
              ["व", "va"],
            ]),
            word("ag-ajyam", "ghee", [
              ["आ", "ā"],
              ["ज्यम्", "jyam"],
            ]),
            word("ag-apah", "waters", [
              ["आ", "ā"],
              ["पः", "paḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "ag-pada-5",
          "phrase",
          "may they cleanse my mind",
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
