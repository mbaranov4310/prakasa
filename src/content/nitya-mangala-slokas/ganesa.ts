import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "O curved-trunked, large-bodied Lord, whose radiance equals a crore of suns — make my every undertaking always free of obstacles.";

export const ganesa: Chapter = {
  id: "ganesa",
  titleDev: "गणेशः",
  titleIast: "gaṇeśaḥ",
  titleEn: "Gaṇeśa",
  status: "ready",
  translation,
  glossary: [
    { term: "vakratuṇḍa", meaning: "O curved-trunked one" },
    { term: "mahākāya", meaning: "O large-bodied one" },
    { term: "sūryakoṭi", meaning: "a crore of suns" },
    { term: "samaprabha", meaning: "of equal radiance" },
    { term: "nirvighnam", meaning: "obstacle-free" },
    { term: "kuru", meaning: "make / do" },
    { term: "me", meaning: "for me / my" },
    { term: "deva", meaning: "O god" },
    { term: "sarvakāryeṣu", meaning: "in all undertakings" },
    { term: "sarvadā", meaning: "always" },
  ],
  root: group("ga-verse", "verse", translation, [
    group(
      "ga-form",
      "phrase",
      "O curved-trunked, large-bodied Lord, whose radiance equals a crore of suns",
      [
        group("ga-trunk", "phrase", "O curved-trunked one", [
          word("ga-vakra", "curved", [["व", "va"], ["क्र", "kra"]], { trailing: "" }),
          word("ga-tunda", "trunk (vocative)", [["तु", "tu"], ["ण्ड", "ṇḍa"]]),
        ]),
        group("ga-body", "phrase", "O large-bodied one", [
          word("ga-maha", "great", [["म", "ma"], ["हा", "hā"]], { trailing: "" }),
          word("ga-kaya", "body (vocative)", [["का", "kā"], ["य", "ya"]]),
        ]),
        group("ga-radiance", "phrase", "whose radiance equals a crore of suns", [
          word("ga-surya", "sun", [["सू", "sū"], ["र्य", "rya"]], { trailing: "" }),
          word("ga-koti", "a crore", [["को", "ko"], ["टि", "ṭi"]]),
          word("ga-sama", "equal", [["स", "sa"], ["म", "ma"]], { trailing: "" }),
          word(
            "ga-prabha",
            "radiance (vocative)",
            [["प्र", "pra"], ["भ", "bha"]],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ]),
      ],
    ),
    group("ga-ask", "phrase", "make my every undertaking always free of obstacles", [
      word("ga-nir", "without", [["निर्", "nir"]], { trailing: "" }),
      word("ga-vighnam", "obstacles", [["वि", "vi"], ["घ्नं", "ghnaṃ"]]),
      word("ga-kuru", "make", [["कु", "ku"], ["रु", "ru"]]),
      word("ga-me", "for me", [["मे", "me"]]),
      word("ga-deva", "O god", [["दे", "de"], ["व", "va"]]),
      group("ga-works", "phrase", "in all undertakings", [
        word("ga-sarva", "all", [["स", "sa"], ["र्व", "rva"]], { trailing: "" }),
        word("ga-karyesu", "in undertakings", [
          ["का", "kā"],
          ["र्ये", "rye"],
          ["षु", "ṣu"],
        ]),
      ]),
      word("ga-sarvada", "always", [["स", "sa"], ["र्व", "rva"], ["दा", "dā"]], {
        trailing: " ॥",
      }),
    ]),
  ]),
};
