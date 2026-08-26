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
    { term: "nandikeśa", meaning: "O Nandikeśa" },
    { term: "mahābhāga", meaning: "O highly distinguished one" },
    { term: "śivadhyānaparāyaṇa", meaning: "ever intent on meditating on Śiva" },
    { term: "gaurīśaṅkarasevārtham", meaning: "for the sake of serving Gaurī-Śaṅkara" },
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
      word("nd-sivadhyana", "ever intent on meditating on Śiva", [
        ["शि", "śi"],
        ["व", "va"],
        ["ध्या", "dhyā"],
        ["न", "na"],
        ["प", "pa"],
        ["रा", "rā"],
        ["य", "ya"],
        ["ण", "ṇa"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("nd-pada34", "phrase", "be pleased to grant leave to serve Gaurī and Śaṅkara", [
      word("nd-gauri", "for the sake of serving Gaurī-Śaṅkara", [
        ["गौ", "gau"],
        ["री", "rī"],
        ["शङ्", "śaṅ"],
        ["क", "ka"],
        ["र", "ra"],
        ["से", "se"],
        ["वा", "vā"],
        ["र्थं", "rthaṃ"],
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
