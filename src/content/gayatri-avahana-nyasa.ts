import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This chapter prepares us just before beginning Gāyatrī Japa. First, we invite (āvāhana) the powers needed for japa: Gāyatrī – the mantra itself; Sāvitrī – the illuminating force; Sarasvatī – clarity of speech and understanding; Ṛṣis and Chandas – the seers and the meter; Śrī – auspiciousness; Bala – strength and steadiness. Next, we state the full identity of the Gāyatrī mantra: Ṛṣi: Viśvāmitra; Devatā: Savitā (the Sun principle); Body mapping: Head – Brahmā (creation); Heart – Viṣṇu (sustaining awareness); Crown / tuft – Rudra (transforming power); Womb / base – Earth (support). Then we align prāṇa: Prāṇa, Apāna, Vyāna, Udāna, Samāna; All life-forces working together as one breath. Finally, we affirm that Gāyatrī: Has 24 syllables; Is arranged in three pādas; Has a six-fold body; Has five heads of awareness. This makes the mind steady, complete, and ready for japa.";

function avahayami(id: string, options?: { last?: boolean; fusedMa?: boolean }) {
  const syllables: [string, string][] = options?.fusedMa
    ? [
        ["मा", "mā"],
        ["वा", "vā"],
        ["ह", "ha"],
        ["या", "yā"],
        ["मि", "mi"],
      ]
    : [
        ["आ", "ā"],
        ["वा", "vā"],
        ["ह", "ha"],
        ["या", "yā"],
        ["मि", "mi"],
      ];
  return word(id, "I invite", syllables, {
    trailing: options?.last ? " ॥" : " ।",
    lineBreakAfter: true,
  });
}

export const gayatriAvahanaNyasa: Chapter = {
  id: "gayatri-avahana-nyasa",
  titleDev: "गायत्री-आवाहन-न्यासः",
  titleIast: "gāyatrī-āvāhana-nyāsaḥ",
  titleEn: "Gāyatrī āvāhana nyāsa",
  status: "ready",
  translation,
  glossary: [
    { term: "āvāhayāmi", meaning: "I invite" },
    { term: "viśvāmitra", meaning: "Viśvāmitra" },
    { term: "savitā", meaning: "Savitā" },
  ],
  root: group("gan-verse", "verse", "", [
    group("gan-avahana", "verse", "", [
      group("gan-gayatrim", "sentence", "I invite Gāyatrī", [
        word("gan-gayatrim", "Gāyatrī", [
          ["गा", "gā"],
          ["य", "ya"],
          ["त्री", "trī"],
        ], { trailing: "" }),
        avahayami("gan-avahayami-gayatri", { fusedMa: true }),
      ]),
      group("gan-savitrim", "sentence", "I invite Sāvitrī", [
        word("gan-savitrim", "Sāvitrī", [
          ["सा", "sā"],
          ["वि", "vi"],
          ["त्री", "trī"],
        ], { trailing: "" }),
        avahayami("gan-avahayami-savitri", { fusedMa: true }),
      ]),
      group("gan-sarasvatim", "sentence", "I invite Sarasvatī", [
        word("gan-sarasvatim", "Sarasvatī", [
          ["स", "sa"],
          ["र", "ra"],
          ["स्व", "sva"],
          ["ती", "tī"],
        ], { trailing: "" }),
        avahayami("gan-avahayami-sarasvati", { fusedMa: true }),
      ]),
      group("gan-chandarsin", "sentence", "I invite the seers of the meters", [
        word("gan-chandarsin", "seers of the meters", [
          ["छन्", "chan"],
          ["दर॑", "dar"],
          ["षी", "ṣī"],
          ["न्", "n"],
        ], { trailing: "" }),
        word("gan-avahayami-chandarsin", "I invite", [
          ["ना", "nā"],
          ["वा", "vā"],
          ["ह", "ha"],
          ["या", "yā"],
          ["मि", "mi"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-sriyam", "sentence", "I invite Śrī", [
        word("gan-sriyam", "Śrī", [
          ["श्रि", "śri"],
          ["यं", "yam"],
        ], { trailing: "" }),
        avahayami("gan-avahayami-sriyam", { fusedMa: true }),
      ]),
      group("gan-balam", "sentence", "I invite strength", [
        word("gan-balam", "strength", [
          ["ब", "ba"],
          ["ल", "la"],
        ], { trailing: "" }),
        avahayami("gan-avahayami-balam", { fusedMa: true, last: true }),
      ]),
    ]),
    group("gan-identity", "verse", "", [
      group("gan-rsi", "sentence", "Gāyatrī meter, Viśvāmitra the ṛṣi", [
        group("gan-chandas", "phrase", "Gāyatrī meter", [
          word("gan-gayatrya", "of Gāyatrī", [
            ["गा", "gā"],
            ["य", "ya"],
            ["त्र्या", "tryā"],
          ]),
          word("gan-gayatri-meter", "Gāyatrī", [
            ["गा", "gā"],
            ["य", "ya"],
            ["त्री", "trī"],
          ], { lineBreakAfter: true }),
          word("gan-chandah", "meter", [
            ["छ", "cha"],
            ["न्दो", "ndo"],
          ]),
        ]),
        word("gan-visvamitra", "Viśvāmitra", [
          ["वि", "vi"],
          ["श्वा", "śvā"],
          ["मि", "mi"],
          ["त्र", "tra"],
        ]),
        word("gan-rsih", "ṛṣi", [
          ["ऋ", "ṛ"],
          ["षिः", "ṣiḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-devata", "sentence", "Savitā the deity", [
        word("gan-savita", "Savitā", [
          ["स", "sa"],
          ["वि", "vi"],
          ["ता", "tā"],
        ]),
        word("gan-devata-word", "the deity", [
          ["दे", "de"],
          ["व", "va"],
          ["ता", "tā"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-agnimukham", "sentence", "Agni the mouth", [
        word("gan-agnih", "Agni", [
          ["अ", "a"],
          ["ग्नि", "gni"],
        ], { trailing: "" }),
        word("gan-mukham", "mouth", [
          ["मु", "mu"],
          ["खम्", "kham"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-brahma-sirah", "sentence", "Brahmā the head", [
        word("gan-brahma", "Brahmā", [
          ["ब्र", "bra"],
          ["ह्मा", "hmā"],
        ]),
        word("gan-sirah", "the head", [
          ["शि", "śi"],
          ["रः", "raḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-visnu-hrdayam", "sentence", "Viṣṇu the heart", [
        word("gan-visnuh", "Viṣṇu", [
          ["वि", "vi"],
          ["ष्णुः", "ṣṇuḥ"],
        ]),
        word("gan-hrdayam", "the heart", [
          ["हृ", "hṛ"],
          ["द", "da"],
          ["यम्", "yam"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-rudra-sikha", "sentence", "Rudra the tuft", [
        word("gan-rudrah", "Rudra", [
          ["रु", "ru"],
          ["द्रः", "draḥ"],
        ]),
        word("gan-sikha", "the tuft", [
          ["शि", "śi"],
          ["खा", "khā"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-prthivi-yonih", "sentence", "Earth the womb", [
        word("gan-prthivi", "Earth", [
          ["पृ", "pṛ"],
          ["थि", "thi"],
          ["वी", "vī"],
        ]),
        word("gan-yonih", "the womb", [
          ["यो", "yo"],
          ["निः", "niḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group(
      "gan-prana",
      "sentence",
      "prāṇa, apāna, vyāna, udāna, samāna, together as prāṇa",
      [
        word("gan-prana", "prāṇa", [
          ["प्रा", "prā"],
          ["णा", "ṇā"],
        ], { trailing: "" }),
        word("gan-apana", "apāna", [
          ["पा", "pā"],
          ["न", "na"],
        ]),
        word("gan-vyana", "vyāna", [
          ["व्या", "vyā"],
          ["नो", "no"],
        ], { trailing: "" }),
        word("gan-udana", "udāna", [
          ["दा", "dā"],
          ["न", "na"],
        ]),
        word("gan-samanah", "samāna", [
          ["स", "sa"],
          ["मा", "mā"],
          ["नाः", "nāḥ"],
        ]),
        word("gan-saprana", "together as prāṇa", [
          ["स", "sa"],
          ["प्रा", "prā"],
          ["णाः", "ṇāḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "gan-varna-gotra",
      "sentence",
      "white-colored; of the Sāṅkhyāyana gotra",
      [
        word("gan-svetavarnah", "white-colored", [
          ["श्वे", "śve"],
          ["त", "ta"],
          ["व", "va"],
          ["र्णाः", "rṇāḥ"],
        ]),
        word("gan-sankhyayana", "Sāṅkhyāyana", [
          ["सां", "sāṅ"],
          ["ख्या", "khyā"],
          ["य", "ya"],
          ["न", "na"],
        ], { trailing: "" }),
        word("gan-sagotrah", "of the gotra", [
          ["स", "sa"],
          ["गो", "go"],
          ["त्राः", "trāḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group("gan-form", "verse", "", [
      group("gan-24", "sentence", "24-syllabled", [
        word("gan-gayatri-24", "Gāyatrī", [
          ["गा", "gā"],
          ["य", "ya"],
          ["त्री", "trī"],
        ]),
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
      group("gan-tripada", "sentence", "three-footed", [
        word("gan-tripada-word", "three-footed", [
          ["त्रि", "tri"],
          ["प", "pa"],
          ["दा", "dā"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-satkuksih", "sentence", "six-bellied", [
        word("gan-satkuksih-word", "six-bellied", [
          ["ष", "ṣa"],
          ["ट्कु", "ṭku"],
          ["क्षिः", "kṣiḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("gan-pancasirsa", "sentence", "five-headed", [
        word("gan-pancasirsa-word", "five-headed", [
          ["प", "pa"],
          ["ञ्च", "ñca"],
          ["शी", "śī"],
          ["र्षा", "rṣā"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("gan-viniyoga", "sentence", "application in the upanayana", [
      word("gan-upanayane", "in the upanayana", [
        ["उ", "u"],
        ["प", "pa"],
        ["न", "na"],
        ["य", "ya"],
        ["ने", "ne"],
      ]),
      word("gan-viniyogah", "application", [
        ["वि", "vi"],
        ["नि", "ni"],
        ["यो", "yo"],
        ["गः", "gaḥ"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
