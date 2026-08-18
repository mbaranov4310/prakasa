import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

const translation =
  "You can recite Laghu Gayatri or Full Gayatri for 11/27/54/108/1008 times a day (A) Laghu Gāyatrī Mantra (B) Full Gāyatrī Mantra";

const gayatriSentence =
  "The Gāyatrī mantra is the heart of Sandhyā-vandana. Here, we meditate on the divine light (Bhargaḥ) so that our intellect (Dhī) moves toward truth and clarity.";

const vyahrtiSentence =
  "The seven words—Bhūḥ, Bhuvaḥ, Suvah, Mahaḥ, Janaḥ, Tapaḥ, Satyam—represent a step-by-step movement: from the physical world, to the mental and cosmic worlds, and finally to Truth (Satyam).";

const siroSentence =
  "This mantra reminds us that water becomes light, light becomes essence, essence becomes immortality, and all of this is Brahman.";

function om(id: string) {
  return word(id, "the primal sound", [["ॐ", "om"]]);
}

function ogm(id: string) {
  return word(id, "", [["ॐ॒", "ogm"]]);
}

function tatsaviturvarenyam(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode {
  return word(
    id,
    "",
    [
      ["तत्", "tat"],
      ["स", "sa"],
      ["वि", "vi"],
      ["तुर्", "tur"],
      ["व", "va"],
      ["रे", "re"],
      ["ण्यं", "ṇyam"],
    ],
    options,
  );
}

function gayatriPada2(prefix: string): SpanNode {
  return group(prefix, "phrase", "we meditate on the divine light (Bhargaḥ)", [
    word(`${prefix}-bhargo`, "radiance", [
      ["भर्", "bhar"],
      ["गो", "go"],
    ]),
    word(`${prefix}-devasya`, "of the divine", [
      ["दे", "de"],
      ["व", "va"],
      ["स्य", "sya"],
    ]),
    word(
      `${prefix}-dhimahi`,
      "we meditate upon",
      [
        ["धी", "dhī"],
        ["म", "ma"],
        ["हि", "hi"],
      ],
      { trailing: " ।", lineBreakAfter: true },
    ),
  ]);
}

function gayatriPada3(prefix: string): SpanNode {
  return group(
    prefix,
    "phrase",
    "so that our intellect (Dhī) moves toward truth and clarity",
    [
      word(`${prefix}-dhiyo`, "our intellects", [
        ["धि", "dhi"],
        ["यो", "yo"],
      ]),
      word(`${prefix}-yo`, "who", [["यो", "yo"]]),
      word(`${prefix}-nah`, "our", [["नः", "naḥ"]]),
      word(
        `${prefix}-pracodayat`,
        "may (He) inspire / impel",
        [
          ["प्र", "pra"],
          ["चो", "cho"],
          ["द", "da"],
          ["यात्", "yāt"],
        ],
        { trailing: " ॥", lineBreakAfter: true },
      ),
    ],
  );
}

export const gayatriMantra: Chapter = {
  id: "gayatri-mantra",
  titleDev: "गायत्री मन्त्रः",
  titleIast: "gāyatrī mantraḥ",
  titleEn: "Gāyatrī mantra",
  status: "ready",
  translation,
  glossary: [
    { term: "ōm", meaning: "the primal sound" },
    { term: "bhūḥ", meaning: "earth" },
    { term: "bhuvaḥ", meaning: "mid-space" },
    { term: "suvaḥ", meaning: "heaven" },
    { term: "mahaḥ", meaning: "the great realm" },
    { term: "janaḥ", meaning: "the world of beings" },
    { term: "tapaḥ", meaning: "world of austerity" },
    { term: "satyam", meaning: "the realm of truth" },
    { term: "tat", meaning: "that" },
    { term: "savituḥ", meaning: "of Savitṛ (solar deity)" },
    { term: "vareṇyam", meaning: "most excellent, worthy of choosing" },
    { term: "bhargaḥ", meaning: "radiance" },
    { term: "devasya", meaning: "of the divine" },
    { term: "dhīmahi", meaning: "we meditate upon" },
    { term: "dhiyah", meaning: "our intellects" },
    { term: "yaḥ", meaning: "who" },
    { term: "naḥ", meaning: "our" },
    { term: "pracodayāt", meaning: "may (He) inspire / impel" },
    { term: "āpaḥ", meaning: "waters" },
    { term: "jyotiḥ", meaning: "light" },
    { term: "rasaḥ", meaning: "essence" },
    { term: "amṛtam", meaning: "immortality" },
    { term: "brahma", meaning: "the absolute" },
    {
      term: "bhūr bhuvaḥ suvar",
      meaning: "the three primary vyāhṛtis",
    },
  ],
  root: group("gm-verse", "verse", translation, [
    group("gm-laghu", "sentence", "(A) Laghu Gāyatrī Mantra", [
      om("gm-laghu-om"),
      word(
        "gm-laghu-bhurbhuvassuvah",
        "the three primary vyāhṛtis",
        [
          ["भूर्", "bhūr"],
          ["भु", "bhu"],
          ["वस्", "vas"],
          ["सु", "su"],
          ["वः", "vaḥ"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
      group("gm-laghu-gayatri", "sentence", gayatriSentence, [
        tatsaviturvarenyam("gm-laghu-tatsaviturvarenyam", {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        gayatriPada2("gm-laghu-pada2"),
        gayatriPada3("gm-laghu-pada3"),
      ]),
    ]),
    group("gm-full", "verse", "(B) Full Gāyatrī Mantra", [
      group("gm-vyahrtis", "sentence", vyahrtiSentence, [
        om("gm-om-bhuh"),
        word("gm-bhuh", "earth", [["भूः", "bhūḥ"]], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        om("gm-om-bhuvah"),
        word("gm-bhuvah", "mid-space", [
          ["भु", "bhu"],
          ["वः", "vaḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
        ogm("gm-ogm-suvah"),
        word("gm-suvah", "heaven", [
          ["सु", "su"],
          ["वः", "vaḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
        om("gm-om-mahah"),
        word("gm-mahah", "the great realm", [
          ["म", "ma"],
          ["हः", "haḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
        om("gm-om-janah"),
        word("gm-janah", "the world of beings", [
          ["ज", "ja"],
          ["नः", "naḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
        om("gm-om-tapah"),
        word("gm-tapah", "world of austerity", [
          ["त", "ta"],
          ["पः", "paḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
        ogm("gm-ogm-satyam"),
        word("gm-satyam", "the realm of truth", [
          ["स", "sa"],
          ["त्यम्", "tyam"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gm-gayatri", "sentence", gayatriSentence, [
        om("gm-om-gayatri"),
        tatsaviturvarenyam("gm-full-tatsaviturvarenyam", {
          lineBreakAfter: true,
        }),
        gayatriPada2("gm-full-pada2"),
        gayatriPada3("gm-full-pada3"),
      ]),
      group("gm-siro", "sentence", siroSentence, [
        om("gm-om-siro"),
        group("gm-water-light", "phrase", "Water becomes light", [
          word("gm-apo", "waters", [
            ["आ", "ā"],
            ["पो", "po"],
          ]),
          word("gm-jyoti", "light", [
            ["ज्यो", "jyo"],
            ["ति", "ti"],
          ]),
        ]),
        word("gm-rasomrtam", "", [
          ["रस्", "ras"],
          ["ओ", "o"],
          ["ऽमृ", "’mṛ"],
          ["तम्", "tam"],
        ], { lineBreakAfter: true }),
        word("gm-brahma", "the absolute", [
          ["ब्र", "bra"],
          ["ह्म", "hma"],
        ], { lineBreakAfter: true }),
        word("gm-bhurbhuvassuvarom", "", [
          ["भूर्", "bhūr"],
          ["भु", "bhu"],
          ["वस्", "vas"],
          ["सु", "su"],
          ["व", "va"],
          ["रोम्", "rom"],
        ], { trailing: " ॥" }),
      ]),
    ]),
  ]),
};
