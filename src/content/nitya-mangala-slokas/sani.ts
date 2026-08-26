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
    { term: "nīlāṃjana", meaning: "blue-black collyrium" },
    { term: "samābhāsam", meaning: "of like appearance / lustre" },
    { term: "raviputram", meaning: "son of Ravi (the Sun)" },
    { term: "yamāgrajam", meaning: "elder brother of Yama" },
    { term: "chāyāmārtaṇḍasaṃbhūtam", meaning: "born of Chāyā and Mārtaṇḍa" },
    { term: "tam", meaning: "that one" },
    { term: "namāmi", meaning: "I bow" },
    { term: "śanaiścaram", meaning: "to Śanaiścara, the slow-mover" },
  ],
  root: group("sa-verse", "verse", translation, [
    group(
      "sa-pada12",
      "phrase",
      "of the lustre of blue-black collyrium, son of the Sun, elder brother of Yama",
      [
        group("sa-lustre", "phrase", "of like appearance to blue-black collyrium", [
          word("sa-nilanjana", "blue-black collyrium", [
            ["नी", "nī"],
            ["लां", "lāṃ"],
            ["ज", "ja"],
            ["न", "na"],
          ], { trailing: "" }),
          word("sa-samabhasam", "of like appearance / lustre", [
            ["स", "sa"],
            ["मा", "mā"],
            ["भा", "bhā"],
            ["सं", "saṃ"],
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
          word("sa-agrajam", "elder brother", [
            ["ग्र", "gra"],
            ["जम्", "jam"],
          ], { trailing: " ।", lineBreakAfter: true }),
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
        word("sa-sanaiscaram", "to Śanaiścara, the slow-mover", [
          ["श", "śa"],
          ["नै", "nai"],
          ["श्च", "śca"],
          ["रम्", "ram"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
