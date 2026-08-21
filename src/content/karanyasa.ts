import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

const translation =
  "“Nyāsa is the moment where the seeker stops chanting the mantra — and allows the mantra to begin chanting the seeker.” (Why we touch the body before mantra japa) The right way to approach any mantra is not to start repeating sounds mechanically. A mantra is a living structure of consciousness. It has: a Ṛṣi — the seer who saw the mantra; a Chandas — the rhythmic body of the mantra; an Adhiṣṭhāna-devatā — the conscious principle the mantra expresses. Before japa begins, we first acknowledge these three. This is how we show that a mantra is not invented by us, but received. What Kara-nyāsa does: Kara-nyāsa places the mantra into the hands. The hands represent: action, offering, transmission, capability. By touching each finger while reciting parts of the Gāyatrī mantra, we are saying: “This mantra now lives in my capacity to act.” The mantra is no longer only in sound. It is installed into the organs of doing. What Aṅga-nyāsa does: Aṅga-nyāsa places the mantra into the body itself. We touch: heart, head, crown, shoulders, eyes, surrounding space. This is not symbolic poetry. This is mapping the mantra onto the human system. Here the seeker is no longer outside the mantra. The body itself becomes the yantra of the mantra. What is actually happening: Through kara-nyāsa and aṅga-nyāsa: The physical body is consciously linked to the metaphysical structure of the mantra. The mantra is no longer something we chant. The mantra becomes something we are sitting inside. Why this comes before japa: After nyāsa, the next steps are: Dhyāna śloka — forming the inner image of the devatā; Japa — rhythmic merging with that presence. At this stage, japa is not “repetition.” It is resonance. The practitioner invokes the devatā, and at the same time becomes fit to hold that devatā. The mantra energizes the devatā-tattva, and the mantra restructures the seeker. There is no longer a sharp inside and outside. This is the classical pathway toward: mantra-jñāna; mantra-siddhi; and eventually mantra-svarūpa-bodha (realizing what the mantra truly is).";

function om(id: string): SpanNode {
  return word(id, "primordial sound", [["ॐ", "oṃ"]]);
}

function tatSavituh(id: string): SpanNode[] {
  return [
    word(`${id}-tat`, "that", [["तत्", "tat"]]),
    word(`${id}-savituh`, "of Savitṛ", [
      ["स", "sa"],
      ["वि", "vi"],
      ["तुः", "tuḥ"],
    ]),
  ];
}

function atmane(
  id: string,
  who: string,
  whoSyllables: [string, string][],
): SpanNode[] {
  return [
    word(`${id}-who`, who, whoSyllables, { trailing: "" }),
    word(`${id}-atmane`, "to the Self", [
      ["आ", "ā"],
      ["त्म", "tma"],
      ["ने", "ne"],
    ]),
  ];
}

function varenyam(id: string): SpanNode {
  return word(id, "to be desired", [
    ["व", "va"],
    ["रे", "re"],
    ["ण्यं", "ṇyam"],
  ]);
}

function bhargoDevasya(id: string): SpanNode {
  return group(id, "phrase", "the radiance of the divine", [
    word(`${id}-bhargo`, "radiance", [
      ["भर्", "bhar"],
      ["गो", "go"],
    ]),
    word(`${id}-devasya`, "of the divine", [
      ["दे", "de"],
      ["व", "va"],
      ["स्य", "sya"],
    ]),
  ]);
}

function dhimahi(id: string): SpanNode {
  return word(id, "we meditate", [
    ["धी", "dhī"],
    ["म", "ma"],
    ["हि", "hi"],
  ]);
}

function dhiyoYoNah(id: string): SpanNode {
  return group(id, "phrase", "who [may impel] our intellect", [
    word(`${id}-dhiyo`, "intellect", [
      ["धि", "dhi"],
      ["यो", "yo"],
    ]),
    word(`${id}-yo`, "who", [["यो", "yo"]]),
    word(`${id}-nah`, "our", [["नः", "naḥ"]]),
  ]);
}

function pracodayat(id: string): SpanNode {
  return word(id, "may he impel", [
    ["प्र", "pra"],
    ["चो", "cho"],
    ["द", "da"],
    ["यात्", "yāt"],
  ]);
}

function namah(id: string, danda: " ।" | " ॥"): SpanNode {
  return word(
    id,
    "salutation",
    [
      ["न", "na"],
      ["मः", "maḥ"],
    ],
    { trailing: danda, lineBreakAfter: true },
  );
}

export const karanyasa: Chapter = {
  id: "karanyasa",
  titleDev: "करन्यासः एवं अङ्गन्यासः",
  titleIast: "kara-nyāsaḥ evaṃ aṅga-nyāsaḥ",
  titleEn: "Kara-nyāsa and aṅga-nyāsa",
  status: "ready",
  translation,
  glossary: [
    { term: "ātmane", meaning: "to the Self" },
    { term: "namaḥ", meaning: "salutation" },
  ],
  root: group("kn-verse", "verse", "", [
    group("kn-kara", "verse", "", [
      group(
        "kn-k1",
        "sentence",
        "to the Brahman-Self, with the thumbs, salutation",
        [
          om("kn-k1-om"),
          ...tatSavituh("kn-k1"),
          ...atmane("kn-k1-brahma", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ]),
          word("kn-k1-angusthabhyam", "with the thumbs", [
            ["अङ्", "aṅ"],
            ["गुष्", "guṣ"],
            ["ठा", "ṭhā"],
            ["भ्यां", "bhyāṃ"],
          ]),
          namah("kn-k1-namah", " ।"),
        ],
      ),
      group(
        "kn-k2",
        "sentence",
        "to the Viṣṇu-Self, with the index fingers, salutation",
        [
          varenyam("kn-k2-varenyam"),
          ...atmane("kn-k2-visnu", "Viṣṇu", [
            ["वि", "vi"],
            ["ष्णु", "ṣṇu"],
          ]),
          word("kn-k2-tarjanibhyam", "with the index fingers", [
            ["तर्", "tar"],
            ["ज", "ja"],
            ["नी", "nī"],
            ["भ्यां", "bhyāṃ"],
          ]),
          namah("kn-k2-namah", " ।"),
        ],
      ),
      group(
        "kn-k3",
        "sentence",
        "to the Rudra-Self, with the middle fingers, salutation",
        [
          bhargoDevasya("kn-k3-bhargo-devasya"),
          ...atmane("kn-k3-rudra", "Rudra", [
            ["रु", "ru"],
            ["द्र", "dra"],
          ]),
          word("kn-k3-madhyamabhyam", "with the middle fingers", [
            ["मध्", "madh"],
            ["य", "ya"],
            ["मा", "mā"],
            ["भ्यां", "bhyāṃ"],
          ]),
          namah("kn-k3-namah", " ।"),
        ],
      ),
      group(
        "kn-k4",
        "sentence",
        "to the Truth-Self, with the ring fingers, salutation",
        [
          dhimahi("kn-k4-dhimahi"),
          ...atmane("kn-k4-satya", "Truth", [
            ["स", "sa"],
            ["त्य", "tya"],
          ]),
          word("kn-k4-anamikabhyam", "with the ring fingers", [
            ["अ", "a"],
            ["ना", "nā"],
            ["मि", "mi"],
            ["का", "kā"],
            ["भ्यां", "bhyāṃ"],
          ]),
          namah("kn-k4-namah", " ।"),
        ],
      ),
      group(
        "kn-k5",
        "sentence",
        "to the Knowledge-Self, with the little fingers, salutation",
        [
          dhiyoYoNah("kn-k5-dhiyo-yo-nah"),
          ...atmane("kn-k5-jnana", "Knowledge", [
            ["ज्ञा", "jñā"],
            ["न", "na"],
          ]),
          word("kn-k5-kanisthikabhyam", "with the little fingers", [
            ["क", "ka"],
            ["नि", "ni"],
            ["ष्ठि", "ṣṭhi"],
            ["का", "kā"],
            ["भ्यां", "bhyāṃ"],
          ]),
          namah("kn-k5-namah", " ।"),
        ],
      ),
      group(
        "kn-k6",
        "sentence",
        "to the All-Self, with the palms and backs of the hands, salutation",
        [
          pracodayat("kn-k6-pracodayat"),
          ...atmane("kn-k6-sarva", "the All", [
            ["स", "sa"],
            ["र्व", "rva"],
          ]),
          word("kn-k6-karatala", "palms", [
            ["क", "ka"],
            ["र", "ra"],
            ["त", "ta"],
            ["ल", "la"],
          ], { trailing: "" }),
          word("kn-k6-karaprstha", "backs of the hands", [
            ["क", "ka"],
            ["र", "ra"],
            ["पृ", "pṛ"],
            ["ष्ठा", "ṣṭhā"],
          ], { trailing: "" }),
          word("kn-k6-bhyam", "with both", [["भ्यां", "bhyāṃ"]]),
          namah("kn-k6-namah", " ॥"),
        ],
      ),
    ]),
    group("kn-anga", "verse", "", [
      group(
        "kn-a1",
        "sentence",
        "to the Brahman-Self, to the heart, salutation",
        [
          om("kn-a1-om"),
          ...tatSavituh("kn-a1"),
          ...atmane("kn-a1-brahma", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ]),
          word("kn-a1-hrdayaya", "to the heart", [
            ["हृ", "hṛ"],
            ["द", "da"],
            ["या", "yā"],
            ["य", "ya"],
          ]),
          namah("kn-a1-namah", " ।"),
        ],
      ),
      group(
        "kn-a2",
        "sentence",
        "to the Viṣṇu-Self, to the head, svāhā",
        [
          varenyam("kn-a2-varenyam"),
          ...atmane("kn-a2-visnu", "Viṣṇu", [
            ["वि", "vi"],
            ["ष्णु", "ṣṇu"],
          ]),
          word("kn-a2-sirase", "to the head", [
            ["शि", "śi"],
            ["र", "ra"],
            ["से", "se"],
          ]),
          word("kn-a2-svaha", "svāhā", [
            ["स्वा", "svā"],
            ["हा", "hā"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "kn-a3",
        "sentence",
        "to the Rudra-Self, to the tuft, vaṣaṭ",
        [
          bhargoDevasya("kn-a3-bhargo-devasya"),
          ...atmane("kn-a3-rudra", "Rudra", [
            ["रु", "ru"],
            ["द्र", "dra"],
          ]),
          word("kn-a3-sikhaya", "to the tuft", [
            ["शि", "śi"],
            ["खा", "khā"],
            ["यै", "yai"],
          ]),
          word("kn-a3-vasat", "vaṣaṭ", [
            ["व", "va"],
            ["षट्", "ṣaṭ"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "kn-a4",
        "sentence",
        "to the Truth-Self, to the armor, huṃ",
        [
          dhimahi("kn-a4-dhimahi"),
          ...atmane("kn-a4-satya", "Truth", [
            ["स", "sa"],
            ["त्य", "tya"],
          ]),
          word("kn-a4-kavacaya", "to the armor", [
            ["क", "ka"],
            ["व", "va"],
            ["चा", "cā"],
            ["य", "ya"],
          ]),
          word("kn-a4-hum", "huṃ", [["हुम्", "huṃ"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "kn-a5",
        "sentence",
        "to the Knowledge-Self, to the three eyes, vauṣaṭ",
        [
          dhiyoYoNah("kn-a5-dhiyo-yo-nah"),
          ...atmane("kn-a5-jnana", "Knowledge", [
            ["ज्ञा", "jñā"],
            ["न", "na"],
          ]),
          word("kn-a5-netra", "eye", [
            ["ने", "ne"],
            ["त्र", "tra"],
          ], { trailing: "" }),
          word("kn-a5-trayaya", "to the triad", [
            ["त्र", "tra"],
            ["या", "yā"],
            ["य", "ya"],
          ]),
          word("kn-a5-vausat", "vauṣaṭ", [
            ["वौ", "vau"],
            ["षट्", "ṣaṭ"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "kn-a6",
        "sentence",
        "to the All-Self, to the weapon, phaṭ",
        [
          pracodayat("kn-a6-pracodayat"),
          ...atmane("kn-a6-sarva", "the All", [
            ["स", "sa"],
            ["र्व", "rva"],
          ]),
          word("kn-a6-astraya", "to the weapon", [
            ["अ", "a"],
            ["स्त्रा", "strā"],
            ["य", "ya"],
          ]),
          word("kn-a6-phat", "phaṭ", [["फट्", "phaṭ"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "kn-a7",
        "sentence",
        "oṃ bhūḥ bhuvaḥ suvaḥ oṃ iti — binding of the quarters",
        [
          om("kn-a7-om"),
          word("kn-a7-bhuh", "earth (here: this world)", [["भूर्", "bhūr"]]),
          word("kn-a7-bhuvah", "mid-region (here: the atmospheric realm)", [
            ["भु", "bhu"],
            ["वः", "vaḥ"],
          ]),
          word("kn-a7-suvah", "heaven (here: the celestial realm)", [
            ["सु", "su"],
            ["वः", "vaḥ"],
          ]),
          word("kn-a7-om-2", "primordial sound", [["ॐ", "oṃ"]]),
          word("kn-a7-iti", "thus", [
            ["इ", "i"],
            ["ति", "ti"],
          ]),
          word("kn-a7-dik", "quarter", [["दिग्", "dig"]], { trailing: "" }),
          word("kn-a7-bandhah", "binding", [
            ["बन्", "ban"],
            ["धः", "dhaḥ"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
    ]),
  ]),
};
