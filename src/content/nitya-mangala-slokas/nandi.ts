import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "O Nandikeśa, highly distinguished one, ever intent on meditating on Śiva — be pleased to grant me permission to serve Gaurī and Śaṅkara.";

export const nandi: Chapter = {
  id: "nandi",
  titleDev: "नन्दी",
  titleIast: "nandī",
  titleEn: "Nandī",
  status: "ready",
  translation,
  glossary: [
    { term: "nandi", meaning: "Nandi" },
    { term: "keśa", meaning: "O lord" },
    { term: "mahā", meaning: "great" },
    { term: "bhāga", meaning: "distinguished (vocative)" },
    { term: "śiva", meaning: "Śiva" },
    { term: "dhyāna", meaning: "meditation" },
    { term: "parāyaṇa", meaning: "ever intent on" },
    { term: "gaurī", meaning: "Gaurī" },
    { term: "śaṅkara", meaning: "Śaṅkara" },
    { term: "sevā", meaning: "service" },
    { term: "artham", meaning: "for the sake of" },
    { term: "anujñām", meaning: "permission / leave" },
    { term: "dātum", meaning: "to give" },
    { term: "arhasi", meaning: "you ought; be pleased to" },
  ],
  root: group("nd-verse", "verse", translation, [
    group("nd-pada12", "phrase", "O Nandikeśa, distinguished one, intent on meditating on Śiva", [
      group("nd-name", "phrase", "O Nandikeśa", [
        word("nd-nandi", "Nandi", [["न", "na"], ["न्दि", "ndi"]], { trailing: "" }),
        word("nd-kesa", "O lord", [["के", "ke"], ["श", "śa"]]),
      ]),
      group("nd-distinguished", "phrase", "O highly distinguished one", [
        word("nd-maha", "great", [["म", "ma"], ["हा", "hā"]], { trailing: "" }),
        word("nd-bhaga", "distinguished (vocative)", [["भा", "bhā"], ["ग", "ga"]]),
      ]),
      group("nd-intent", "phrase", "ever intent on meditating on Śiva", [
        word("nd-siva", "Śiva", [["शि", "śi"], ["व", "va"]], { trailing: "" }),
        word("nd-dhyana", "meditation", [["ध्या", "dhyā"], ["न", "na"]], {
          trailing: "",
        }),
        word("nd-parayana", "ever intent on", [
          ["प", "pa"],
          ["रा", "rā"],
          ["य", "ya"],
          ["ण", "ṇa"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("nd-pada34", "phrase", "be pleased to grant leave to serve Gaurī and Śaṅkara", [
      group("nd-serve", "phrase", "for the sake of serving Gaurī-Śaṅkara", [
        word("nd-gauri-w", "Gaurī", [["गौ", "gau"], ["री", "rī"]], { trailing: "" }),
        word("nd-sankara", "Śaṅkara", [
          ["शङ्", "śaṅ"],
          ["क", "ka"],
          ["र", "ra"],
        ], { trailing: "" }),
        word("nd-seva", "service", [["से", "se"], ["वा", "vā"]], { trailing: "" }),
        word("nd-artham", "for the sake of", [["र्थं", "rthaṃ"]]),
      ]),
      word("nd-anujnam", "permission / leave", [
        ["अ", "a"],
        ["नु", "nu"],
        ["ज्ञां", "jñāṃ"],
      ]),
      word("nd-datum", "to give", [["दा", "dā"], ["तु", "tu"], ["म", "ma"]], {
        trailing: "",
      }),
      word("nd-arhasi", "be pleased to", [
        ["र्ह", "rha"],
        ["सि", "si"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
