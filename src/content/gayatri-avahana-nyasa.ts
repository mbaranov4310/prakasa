import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This chapter prepares us just before beginning Gāyatrī Japa. First, we invite (āvāhana) the powers needed for japa: Gāyatrī – the mantra itself; Sāvitrī – the illuminating force; Sarasvatī – clarity of speech and understanding; Ṛṣis and Chandas – the seers and the meter; Śrī – auspiciousness; Bala – strength and steadiness. Next, we state the full identity of the Gāyatrī mantra: Ṛṣi: Viśvāmitra; Devatā: Savitā (the Sun principle); Body mapping: Head – Brahmā (creation); Heart – Viṣṇu (sustaining awareness); Crown / tuft – Rudra (transforming power); Womb / base – Earth (support). Then we align prāṇa: Prāṇa, Apāna, Vyāna, Udāna, Samāna; All life-forces working together as one breath. Finally, we affirm that Gāyatrī: Has 24 syllables; Is arranged in three pādas; Has a six-fold body; Has five heads of awareness. This makes the mind steady, complete, and ready for japa.";

const avahayami: [string, string][] = [
  ["मा", "mā"],
  ["वा", "vā"],
  ["ह", "ha"],
  ["या", "yā"],
  ["मि", "mi"],
];

export const gayatriAvahanaNyasa: Chapter = {
  id: "gayatri-avahana-nyasa",
  titleDev: "गायत्री-आवाहन-न्यासः",
  titleIast: "gāyatrī-āvāhana-nyāsaḥ",
  titleEn: "Gāyatrī āvāhana nyāsa",
  status: "ready",
  translation,
  glossary: [
    { term: "āvāhayāmi", meaning: "I invoke, I invite to be present" },
    {
      term: "gāyatrī / sāvitrī / sarasvatī",
      meaning: "forms of divine speech, light, wisdom",
    },
    { term: "chanda-ṛṣīṇām", meaning: "the seers of the Vedic metres" },
    { term: "śriyaṃ", meaning: "prosperity, auspicious presence" },
    { term: "balam", meaning: "strength" },
    { term: "gāyatrī-chandas", meaning: "Gāyatrī metre" },
    { term: "viśvāmitra", meaning: "seer (ṛṣi)" },
    { term: "savitā", meaning: "deity (solar impeller)" },
    {
      term: "agnir mukham",
      meaning: "Agni is the mouth (the offering-point)",
    },
    { term: "brahmā śiraḥ", meaning: "Brahmā the head" },
    { term: "viṣṇuḥ hṛdayam", meaning: "Viṣṇu the heart" },
    { term: "rudraḥ śikhā", meaning: "Rudra the crest" },
    { term: "pṛthivī yoniḥ", meaning: "Earth the womb/origin" },
    {
      term: "prāṇa–apāna–vyāna–udāna–samānāḥ",
      meaning: "the five vital airs",
    },
    { term: "śveta-varṇāḥ", meaning: "white/pure in radiance" },
    {
      term: "sāṅkhyāyana-gōtra",
      meaning: "of the Sāṅkhyāyana lineage",
    },
    { term: "chaturviṃśaty-akṣarā", meaning: "24-syllabled" },
    { term: "tripadā", meaning: "three-footed" },
    { term: "ṣaṭ-kukṣiḥ", meaning: "six-sectioned" },
    { term: "pañca-śīrṣā", meaning: "five-headed" },
    {
      term: "upanayanē viniyōgaḥ",
      meaning: "employed in the Upanayana rite",
    },
  ],
  root: group("gan-verse", "verse", translation, [
    group(
      "gan-avahana",
      "verse",
      "First, we invite (āvāhana) the powers needed for japa: Gāyatrī – the mantra itself; Sāvitrī – the illuminating force; Sarasvatī – clarity of speech and understanding; Ṛṣis and Chandas – the seers and the meter; Śrī – auspiciousness; Bala – strength and steadiness.",
      [
        group("gan-gayatrim", "sentence", "Gāyatrī – the mantra itself", [
          word(
            "gan-gayatrimavahayami",
            "forms of divine speech, light, wisdom",
            [["गा", "gā"], ["य", "ya"], ["त्री", "trī"], ...avahayami],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ]),
        group("gan-savitrim", "sentence", "Sāvitrī – the illuminating force", [
          word(
            "gan-savitrimavahayami",
            "forms of divine speech, light, wisdom",
            [["सा", "sā"], ["वि", "vi"], ["त्री", "trī"], ...avahayami],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ]),
        group(
          "gan-sarasvatim",
          "sentence",
          "Sarasvatī – clarity of speech and understanding",
          [
            word(
              "gan-sarasvatimavahayami",
              "forms of divine speech, light, wisdom",
              [
                ["स", "sa"],
                ["र", "ra"],
                ["स्व", "sva"],
                ["ती", "tī"],
                ...avahayami,
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "gan-chandarsin",
          "sentence",
          "Ṛṣis and Chandas – the seers and the meter",
          [
            word(
              "gan-chandarsinnavahayami",
              "the seers of the Vedic metres",
              [
                ["छन्", "chan"],
                ["दर॑", "dar"],
                ["षी", "ṣī"],
                ["न्ना", "nnā"],
                ["वा", "vā"],
                ["ह", "ha"],
                ["या", "yā"],
                ["मि", "mi"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group("gan-sriyam", "sentence", "Śrī – auspiciousness", [
          word(
            "gan-sriyammavahayami",
            "prosperity, auspicious presence",
            [["श्रि", "śri"], ["यं", "yam"], ...avahayami],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ]),
        group("gan-balam", "sentence", "Bala – strength and steadiness", [
          word(
            "gan-balamavahayami",
            "strength",
            [["ब", "ba"], ["ल", "la"], ...avahayami],
            { trailing: " ॥", lineBreakAfter: true },
          ),
        ]),
      ],
    ),
    group(
      "gan-identity",
      "verse",
      "Next, we state the full identity of the Gāyatrī mantra: Ṛṣi: Viśvāmitra; Devatā: Savitā (the Sun principle); Body mapping: Head – Brahmā (creation); Heart – Viṣṇu (sustaining awareness); Crown / tuft – Rudra (transforming power); Womb / base – Earth (support).",
      [
        group("gan-rsi", "sentence", "Ṛṣi: Viśvāmitra", [
          group("gan-chandas", "phrase", "Gāyatrī metre", [
            word("gan-gayatrya", "forms of divine speech, light, wisdom", [
              ["गा", "gā"],
              ["य", "ya"],
              ["त्र्या", "tryā"],
            ]),
            word(
              "gan-gayatri-meter",
              "forms of divine speech, light, wisdom",
              [
                ["गा", "gā"],
                ["य", "ya"],
                ["त्री", "trī"],
              ],
              { lineBreakAfter: true },
            ),
            word("gan-chando", "Gāyatrī metre", [
              ["छ", "cha"],
              ["न्दो", "ndo"],
            ]),
          ]),
          word("gan-visvamitra", "seer (ṛṣi)", [
            ["वि", "vi"],
            ["श्वा", "śvā"],
            ["मि", "mi"],
            ["त्र", "tra"],
          ]),
          word("gan-rsih", "", [
            ["ऋ", "ṛ"],
            ["षिः", "ṣiḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group(
          "gan-devata",
          "sentence",
          "Devatā: Savitā (the Sun principle)",
          [
            word("gan-savita", "deity (solar impeller)", [
              ["स", "sa"],
              ["वि", "vi"],
              ["ता", "tā"],
            ]),
            word("gan-devata-word", "", [
              ["दे", "de"],
              ["व", "va"],
              ["ता", "tā"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "gan-agnimukham",
          "sentence",
          "Agni is the mouth (the offering-point)",
          [
            word(
              "gan-agnimukham-word",
              "Agni is the mouth (the offering-point)",
              [
                ["अ", "a"],
                ["ग्नि", "gni"],
                ["मु", "mu"],
                ["खम्", "kham"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group("gan-brahma-sirah", "sentence", "Head – Brahmā (creation)", [
          word("gan-brahma", "Brahmā the head", [
            ["ब्र", "bra"],
            ["ह्मा", "hmā"],
          ]),
          word("gan-sirah", "Brahmā the head", [
            ["शि", "śi"],
            ["रः", "raḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group(
          "gan-visnu-hrdayam",
          "sentence",
          "Heart – Viṣṇu (sustaining awareness)",
          [
            word("gan-visnuh", "Viṣṇu the heart", [
              ["वि", "vi"],
              ["ष्णुः", "ṣṇuḥ"],
            ]),
            word("gan-hrdayam", "Viṣṇu the heart", [
              ["हृ", "hṛ"],
              ["द", "da"],
              ["यम्", "yam"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "gan-rudra-sikha",
          "sentence",
          "Crown / tuft – Rudra (transforming power)",
          [
            word("gan-rudrah", "Rudra the crest", [
              ["रु", "ru"],
              ["द्रः", "draḥ"],
            ]),
            word("gan-sikha", "Rudra the crest", [
              ["शि", "śi"],
              ["खा", "khā"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "gan-prthivi-yonih",
          "sentence",
          "Womb / base – Earth (support)",
          [
            word("gan-prthivi", "Earth the womb/origin", [
              ["पृ", "pṛ"],
              ["थि", "thi"],
              ["वी", "vī"],
            ]),
            word("gan-yonih", "Earth the womb/origin", [
              ["यो", "yo"],
              ["निः", "niḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "gan-prana",
      "sentence",
      "Prāṇa, Apāna, Vyāna, Udāna, Samāna; All life-forces working together as one breath.",
      [
        word("gan-pranapana", "the five vital airs", [
          ["प्रा", "prā"],
          ["णा", "ṇā"],
          ["पा", "pā"],
          ["न", "na"],
        ]),
        word("gan-vyanodana", "the five vital airs", [
          ["व्या", "vyā"],
          ["नो", "no"],
          ["दा", "dā"],
          ["न", "na"],
        ]),
        word("gan-samanah", "the five vital airs", [
          ["स", "sa"],
          ["मा", "mā"],
          ["नाः", "nāḥ"],
        ]),
        word("gan-sapranah", "", [
          ["स", "sa"],
          ["प्रा", "prā"],
          ["णाः", "ṇāḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group("gan-varna-gotra", "sentence", "white/pure in radiance; of the Sāṅkhyāyana lineage", [
      word("gan-svetavarnah", "white/pure in radiance", [
        ["श्वे", "śve"],
        ["त", "ta"],
        ["व", "va"],
        ["र्णाः", "rṇāḥ"],
      ]),
      word("gan-sankhyayanasagotrah", "of the Sāṅkhyāyana lineage", [
        ["सां", "sāṅ"],
        ["ख्या", "khyā"],
        ["य", "ya"],
        ["न", "na"],
        ["स", "sa"],
        ["गो", "go"],
        ["त्राः", "trāḥ"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group(
      "gan-form",
      "verse",
      "Finally, we affirm that Gāyatrī: Has 24 syllables; Is arranged in three pādas; Has a six-fold body; Has five heads of awareness.",
      [
        group("gan-24", "sentence", "Has 24 syllables", [
          word(
            "gan-gayatri-24",
            "forms of divine speech, light, wisdom",
            [
              ["गा", "gā"],
              ["य", "ya"],
              ["त्री", "trī"],
            ],
          ),
          word("gan-caturvimsatyaksara", "24-syllabled", [
            ["च", "ca"],
            ["तु", "tu"],
            ["र्विं", "rviṃ"],
            ["श", "śa"],
            ["त्य", "tya"],
            ["क्ष", "kṣa"],
            ["रा", "rā"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group("gan-tripada", "sentence", "Is arranged in three pādas", [
          word("gan-tripada-word", "three-footed", [
            ["त्रि", "tri"],
            ["प", "pa"],
            ["दा", "dā"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group("gan-satkuksih", "sentence", "Has a six-fold body", [
          word("gan-satkuksih-word", "six-sectioned", [
            ["ष", "ṣa"],
            ["ट्कु", "ṭku"],
            ["क्षिः", "kṣiḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group("gan-pancasirsa", "sentence", "Has five heads of awareness", [
          word("gan-pancasirsa-word", "five-headed", [
            ["प", "pa"],
            ["ञ्च", "ñca"],
            ["शी", "śī"],
            ["र्षा", "rṣā"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "gan-viniyoga",
      "sentence",
      "employed in the Upanayana rite",
      [
        word("gan-upanayane", "employed in the Upanayana rite", [
          ["उ", "u"],
          ["प", "pa"],
          ["न", "na"],
          ["य", "ya"],
          ["ने", "ne"],
        ]),
        word("gan-viniyogah", "employed in the Upanayana rite", [
          ["वि", "vi"],
          ["नि", "ni"],
          ["यो", "yo"],
          ["गः", "gaḥ"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
