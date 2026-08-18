import { group, word } from "../lib/span";
import type { Chapter } from "../types";

function om(id: string) {
  return word(id, "primordial sound", [["ॐ", "oṃ"]]);
}

function ogm(id: string) {
  return word(id, "a slight nasal glide in the breath", [["ॐ॒", "ogm"]]);
}

export const pranayama: Chapter = {
  id: "pranayama",
  titleDev: "प्राणायामः",
  titleIast: "prāṇāyāmaḥ",
  titleEn: "Prāṇāyāma",
  status: "ready",
  translation:
    "Prāṇāyāma in Sandhyā-vandana is not just breathing. It is a way to steady the breath, sound, and mind together before Gāyatrī japa. The seven words—Bhūḥ, Bhuvaḥ, Suvah, Mahaḥ, Janaḥ, Tapaḥ, Satyam—represent a step-by-step movement: from the physical world, to the mental and cosmic worlds, and finally to Truth (Satyam). When chanted aloud, Suvah and Satyam carry a slight nasal glide in the breath. This is written in this book as ॐ॒ (Ogm). That is why you may hear “Ogm Suvah” and “Ogm Satyam”, even though other words use a simple Om. The Gāyatrī mantra is the heart of Sandhyā-vandana. Here, we meditate on the divine light (Bhargaḥ) so that our intellect (Dhī) moves toward truth and clarity. Āpo jyotī raso’mṛtam… This mantra reminds us that water becomes light, light becomes essence, essence becomes immortality, and all of this is Brahman.",
  glossary: [
    { term: "satyam", meaning: "Truth" },
    { term: "bhargaḥ", meaning: "divine light" },
    { term: "dhī", meaning: "intellect" },
  ],
  root: group(
    "p-verse",
    "verse",
    "The seven words—Bhūḥ, Bhuvaḥ, Suvah, Mahaḥ, Janaḥ, Tapaḥ, Satyam—represent a step-by-step movement: from the physical world, to the mental and cosmic worlds, and finally to Truth (Satyam). We meditate on the divine light (Bhargaḥ) so that our intellect (Dhī) moves toward truth and clarity. Water becomes light, light becomes essence, essence becomes immortality, and all of this is Brahman.",
    [
      group(
        "p-vyahrtis",
        "sentence",
        "The seven words—Bhūḥ, Bhuvaḥ, Suvah, Mahaḥ, Janaḥ, Tapaḥ, Satyam—represent a step-by-step movement: from the physical world, to the mental and cosmic worlds, and finally to Truth (Satyam).",
        [
          om("p-om-bhuh"),
          word("p-bhuh", "", [["भूः", "bhūḥ"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
          om("p-om-bhuvah"),
          word("p-bhuvah", "", [
            ["भु", "bhu"],
            ["वः", "vaḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
          ogm("p-ogm-suvah"),
          word("p-suvah", "", [
            ["सु", "su"],
            ["वः", "vah"],
          ], { trailing: " ।", lineBreakAfter: true }),
          om("p-om-mahah"),
          word("p-mahah", "", [
            ["म", "ma"],
            ["हः", "haḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
          om("p-om-janah"),
          word("p-janah", "", [
            ["ज", "ja"],
            ["नः", "naḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
          om("p-om-tapah"),
          word("p-tapah", "", [
            ["त", "ta"],
            ["पः", "paḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
          ogm("p-ogm-satyam"),
          word("p-satyam", "Truth", [
            ["स", "sa"],
            ["त्यम्", "tyam"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "p-gayatri",
        "sentence",
        "The Gāyatrī mantra is the heart of Sandhyā-vandana. Here, we meditate on the divine light (Bhargaḥ) so that our intellect (Dhī) moves toward truth and clarity.",
        [
          om("p-om-gayatri"),
          word("p-tat", "", [["तत्", "tat"]]),
          word("p-savitur", "", [
            ["स", "sa"],
            ["वि", "vi"],
            ["तुर्", "tur"],
          ]),
          word("p-varenyam", "", [
            ["व", "va"],
            ["रे", "re"],
            ["ण्यं", "ṇyam"],
          ], { trailing: " ।", lineBreakAfter: true }),
          group(
            "p-g-pada2",
            "phrase",
            "we meditate on the divine light (Bhargaḥ)",
            [
              word("p-bhargo", "divine light", [
                ["भ", "bha"],
                ["र्गो", "rgo"],
              ]),
              word("p-devasya", "", [
                ["दे", "de"],
                ["व", "va"],
                ["स्य", "sya"],
              ]),
              word("p-dhimahi", "we meditate on", [
                ["धी", "dhī"],
                ["म", "ma"],
                ["हि", "hi"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ],
          ),
          group(
            "p-g-pada3",
            "phrase",
            "so that our intellect (Dhī) moves toward truth and clarity",
            [
              word("p-dhiyo", "intellect", [
                ["धि", "dhi"],
                ["यो", "yo"],
              ]),
              word("p-yo", "", [["यो", "yo"]]),
              word("p-nah", "", [["नः", "naḥ"]]),
              word("p-pracodayat", "", [
                ["प्र", "pra"],
                ["चो", "co"],
                ["द", "da"],
                ["या", "yā"],
                ["त्", "t"],
              ], { trailing: " ॥", lineBreakAfter: true }),
            ],
          ),
        ],
      ),
      group(
        "p-siro",
        "sentence",
        "This mantra reminds us that water becomes light, light becomes essence, essence becomes immortality, and all of this is Brahman.",
        [
          om("p-om-siro"),
          group("p-water-light", "phrase", "Water becomes light", [
            word("p-apo", "Water", [
              ["आ", "ā"],
              ["पो", "po"],
            ]),
            word("p-jyoti", "light", [
              ["ज्यो", "jyo"],
              ["ती", "tī"],
            ]),
          ]),
          word("p-rasomrtam", "essence becomes immortality", [
            ["र", "ra"],
            ["सो", "so"],
            ["ऽमृ", "’mṛ"],
            ["तम्", "tam"],
          ], { lineBreakAfter: true }),
          word("p-brahma", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ], { lineBreakAfter: true }),
          word("p-bhur", "", [["भूर्", "bhūr"]]),
          word("p-bhuvas", "", [
            ["भु", "bhu"],
            ["वस्", "vas"],
          ]),
          word("p-suvar", "", [
            ["सु", "su"],
            ["वर्", "var"],
          ]),
          word("p-om-close", "primordial sound", [["ॐ", "oṃ"]], {
            trailing: "",
          }),
        ],
      ),
    ],
  ),
};
