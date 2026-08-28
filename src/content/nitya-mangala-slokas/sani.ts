import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I bow to Śanaiścara, who has the lustre of blue-black collyrium, son of the Sun, elder brother of Yama, born of Chāyā and Mārtaṇḍa.";

export const sani: Chapter = {
  id: "sani",
  titleDev: "शनिः",
  titleIast: "śaniḥ",
  titleEn: "Śani",
  status: "ready",
  translation,
  glossary: [
    { term: "nīla", meaning: "blue-black" },
    { term: "añjana", meaning: "collyrium" },
    { term: "sama", meaning: "like / equal" },
    { term: "ābhāsam", meaning: "appearance / lustre" },
    { term: "ravi", meaning: "Ravi (the Sun)" },
    { term: "putram", meaning: "son" },
    { term: "yama", meaning: "Yama" },
    { term: "agra", meaning: "first / elder" },
    { term: "jam", meaning: "born" },
    { term: "chāyā", meaning: "Chāyā" },
    { term: "mārtaṇḍa", meaning: "Mārtaṇḍa (the Sun)" },
    { term: "sambhūtam", meaning: "born of" },
    { term: "tam", meaning: "that one" },
    { term: "namāmi", meaning: "I bow" },
    { term: "śanaiḥ", meaning: "slowly" },
    { term: "caram", meaning: "who moves" },
  ],
  root: group("sa-verse", "verse", translation, [
    group(
      "sa-pada12",
      "phrase",
      "of the lustre of blue-black collyrium, son of the Sun, elder brother of Yama",
      [
        group("sa-lustre", "phrase", "of like appearance to blue-black collyrium", [
          group("sa-collyrium", "phrase", "blue-black collyrium", [
            word("sa-nila", "blue-black", [["नी", "nī"], ["लां", "lāṃ"]], {
              trailing: "",
            }),
            word("sa-anjana", "collyrium", [["ज", "ja"], ["न", "na"]], {
              trailing: "",
            }),
          ]),
          group("sa-like", "phrase", "of like appearance / lustre", [
            word("sa-sama", "like / equal", [["स", "sa"], ["मा", "mā"]], {
              trailing: "",
            }),
            word("sa-abhasam", "appearance / lustre", [
              ["भा", "bhā"],
              ["सं", "saṃ"],
            ]),
          ]),
        ]),
        group("sa-son", "phrase", "son of Ravi", [
          word("sa-ravi", "Ravi (the Sun)", [["र", "ra"], ["वि", "vi"]], {
            trailing: "",
          }),
          word("sa-putram", "son", [["पु", "pu"], ["त्रं", "traṃ"]]),
        ]),
        group("sa-yama", "phrase", "elder brother of Yama", [
          word("sa-yama-w", "Yama", [["य", "ya"], ["मा", "mā"]], { trailing: "" }),
          word("sa-agra", "first / elder", [["ग्र", "gra"]], { trailing: "" }),
          word("sa-jam", "born", [["जम्", "jam"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ]),
      ],
    ),
    group(
      "sa-pada34",
      "phrase",
      "born of Chāyā and Mārtaṇḍa — I bow to Śanaiścara",
      [
        group("sa-born", "phrase", "born of Chāyā and Mārtaṇḍa", [
          word("sa-chaya", "Chāyā", [["छा", "chā"], ["या", "yā"]], { trailing: "" }),
          word("sa-martanda", "Mārtaṇḍa (the Sun)", [
            ["मा", "mā"],
            ["र्त", "rta"],
            ["ण्ड", "ṇḍa"],
          ], { trailing: "" }),
          word("sa-sambhutam", "born of", [
            ["सं", "saṃ"],
            ["भू", "bhū"],
            ["तं", "taṃ"],
          ]),
        ]),
        word("sa-tam", "that one", [["तं", "taṃ"]]),
        word("sa-namami", "I bow", [["न", "na"], ["मा", "mā"], ["मि", "mi"]]),
        group("sa-slow", "phrase", "to Śanaiścara, the slow-mover", [
          word("sa-sanaih", "slowly", [
            ["श", "śa"],
            ["नै", "nai"],
            ["श्च", "śca"],
          ], { trailing: "" }),
          word("sa-caram", "who moves", [["रम्", "ram"]], { trailing: " ॥" }),
        ]),
      ],
    ),
  ]),
};
