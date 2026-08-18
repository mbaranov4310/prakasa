import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

const translation =
  "“Nyāsa is the moment where the seeker stops chanting the mantra — and allows the mantra to begin chanting the seeker.” (Why we touch the body before mantra japa) The right way to approach any mantra is not to start repeating sounds mechanically. A mantra is a living structure of consciousness. It has: a Ṛṣi — the seer who saw the mantra; a Chandas — the rhythmic body of the mantra; an Adhiṣṭhāna-devatā — the conscious principle the mantra expresses. Before japa begins, we first acknowledge these three. This is how we show that a mantra is not invented by us, but received. What Kara-nyāsa does: Kara-nyāsa places the mantra into the hands. The hands represent: action, offering, transmission, capability. By touching each finger while reciting parts of the Gāyatrī mantra, we are saying: “This mantra now lives in my capacity to act.” The mantra is no longer only in sound. It is installed into the organs of doing. What Aṅga-nyāsa does: Aṅga-nyāsa places the mantra into the body itself. We touch: heart, head, crown, shoulders, eyes, surrounding space. This is not symbolic poetry. This is mapping the mantra onto the human system. Here the seeker is no longer outside the mantra. The body itself becomes the yantra of the mantra. What is actually happening: Through kara-nyāsa and aṅga-nyāsa: The physical body is consciously linked to the metaphysical structure of the mantra. The mantra is no longer something we chant. The mantra becomes something we are sitting inside. Why this comes before japa: After nyāsa, the next steps are: Dhyāna śloka — forming the inner image of the devatā; Japa — rhythmic merging with that presence. At this stage, japa is not “repetition.” It is resonance. The practitioner invokes the devatā, and at the same time becomes fit to hold that devatā. The mantra energizes the devatā-tattva, and the mantra restructures the seeker. There is no longer a sharp inside and outside. This is the classical pathway toward: mantra-jñāna; mantra-siddhi; and eventually mantra-svarūpa-bodha (realizing what the mantra truly is).";

const karaMeaning =
  "Kara-nyāsa places the mantra into the hands. The hands represent: action, offering, transmission, capability. By touching each finger while reciting parts of the Gāyatrī mantra, we are saying: “This mantra now lives in my capacity to act.” The mantra is no longer only in sound. It is installed into the organs of doing.";

const angaMeaning =
  "Aṅga-nyāsa places the mantra into the body itself. We touch: heart, head, crown, shoulders, eyes, surrounding space. This is not symbolic poetry. This is mapping the mantra onto the human system. Here the seeker is no longer outside the mantra. The body itself becomes the yantra of the mantra.";

function om(id: string): SpanNode {
  return word(id, "", [["ॐ", "oṃ"]]);
}

function tatsavituh(id: string): SpanNode {
  return word(id, "“that of Savitṛ”", [
    ["तत्", "tat"],
    ["स", "sa"],
    ["वि", "vi"],
    ["तुः", "tuḥ"],
  ]);
}

function brahmatmane(id: string): SpanNode {
  return word(id, "to the Brahman-Self", [
    ["ब्रह्", "brah"],
    ["मात्", "māt"],
    ["म", "ma"],
    ["ने", "ne"],
  ]);
}

function varenyam(id: string): SpanNode {
  return word(id, "“the most excellent”", [
    ["व", "va"],
    ["रे", "re"],
    ["ण्यं", "ṇyam"],
  ]);
}

function visnvatmane(id: string): SpanNode {
  return word(id, "to the Viṣṇu-Self", [
    ["वि", "vi"],
    ["ष्ण्वा", "ṣṇvā"],
    ["त्म", "tma"],
    ["ने", "ne"],
  ]);
}

function bhargoDevasya(id: string): SpanNode {
  return group(id, "phrase", "“the divine radiance”", [
    word(`${id}-bhargo`, "“the divine radiance”", [
      ["भर्", "bhar"],
      ["गो", "go"],
    ]),
    word(`${id}-devasya`, "“the divine radiance”", [
      ["दे", "de"],
      ["व", "va"],
      ["स्य", "sya"],
    ]),
  ]);
}

function rudratmane(id: string): SpanNode {
  return word(id, "to the Rudra-Self", [
    ["रु", "ru"],
    ["द्रात्", "drāt"],
    ["म", "ma"],
    ["ने", "ne"],
  ]);
}

function dhimahi(id: string): SpanNode {
  return word(id, "“we meditate”", [
    ["धी", "dhī"],
    ["म", "ma"],
    ["हि", "hi"],
  ]);
}

function satyatmane(id: string): SpanNode {
  return word(id, "to the Truth-Self", [
    ["सत्", "sat"],
    ["यात्", "yāt"],
    ["म", "ma"],
    ["ने", "ne"],
  ]);
}

function dhiyoYoNah(id: string, meaning: string): SpanNode {
  return group(id, "phrase", meaning, [
    word(`${id}-dhiyo`, meaning, [
      ["धि", "dhi"],
      ["यो", "yo"],
    ]),
    word(`${id}-yo`, meaning, [["यो", "yo"]]),
    word(`${id}-nah`, meaning, [["नः", "naḥ"]]),
  ]);
}

function jnanatmane(id: string): SpanNode {
  return word(id, "to the Knowledge-Self", [
    ["ज्ञा", "jñā"],
    ["नात्", "nāt"],
    ["म", "ma"],
    ["ने", "ne"],
  ]);
}

function pracodayat(id: string): SpanNode {
  return word(id, "“may He impel”", [
    ["प्र", "pra"],
    ["चो", "cho"],
    ["द", "da"],
    ["यात्", "yāt"],
  ]);
}

function sarvatmane(id: string, meaning: string): SpanNode {
  return word(id, meaning, [
    ["सर्", "sar"],
    ["वात्", "vāt"],
    ["म", "ma"],
    ["ने", "ne"],
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

function bhyam(
  id: string,
  meaning: string,
  syllables: [string, string][],
): SpanNode {
  return word(id, meaning, syllables);
}

export const karanyasa: Chapter = {
  id: "karanyasa",
  titleDev: "करन्यासः एवं अङ्गन्यासः",
  titleIast: "kara-nyāsaḥ evaṃ aṅga-nyāsaḥ",
  titleEn: "Kara-nyāsa and aṅga-nyāsa",
  status: "ready",
  translation,
  glossary: [
    { term: "ōṃ tat-savituḥ", meaning: "“Om, of Savitṛ”" },
    { term: "tat-savituḥ", meaning: "“that of Savitṛ”" },
    { term: "brahmātmanē", meaning: "to the Brahman-Self" },
    { term: "aṅguṣṭhābhyām", meaning: "with the thumbs" },
    { term: "varēṇyam", meaning: "“the most excellent”" },
    { term: "viṣṇu-ātmanē", meaning: "to the Viṣṇu-Self" },
    { term: "viṣṇv-ātmanē", meaning: "to the Viṣṇu-Self" },
    { term: "tarjanībhyām", meaning: "with index fingers" },
    { term: "bhargaḥ dēvasya", meaning: "“the divine radiance”" },
    { term: "rudra-ātmanē", meaning: "to the Rudra-Self" },
    { term: "rudrātmanē", meaning: "to the Rudra-Self" },
    { term: "madhyamābhyām", meaning: "with middle fingers" },
    { term: "dhīmahi", meaning: "“we meditate”" },
    { term: "satya-ātmanē", meaning: "to the Truth-Self" },
    { term: "satyātmanē", meaning: "to the Truth-Self" },
    { term: "anāmikābhyām", meaning: "with ring fingers" },
    {
      term: "dhiyō yō naḥ",
      meaning: "“He who (guides) our intellects”",
    },
    {
      term: "dhiyō yō naḥ",
      meaning: "“He who (impels) our intellects”",
    },
    { term: "jñāna-ātmanē", meaning: "to the Knowledge-Self" },
    { term: "jñānātmanē", meaning: "to the Knowledge-Self" },
    { term: "kaniṣṭikābhyām", meaning: "with little fingers" },
    { term: "prachōdayāt", meaning: "“may He impel”" },
    { term: "sarva-ātmanē", meaning: "to the Universal Self" },
    { term: "sarvātmanē", meaning: "to the Universal-Self" },
    {
      term: "karatala-karapṛṣṭhābhyām",
      meaning: "with the palms and backs of the hands",
    },
    { term: "hṛdayāya", meaning: "for the heart" },
    { term: "namaḥ", meaning: "salutation" },
    { term: "śirasē", meaning: "for the head" },
    { term: "svāhā", meaning: "offering/seal" },
    { term: "śikhāyai", meaning: "for the crest/tuft" },
    { term: "vaṣaṭ", meaning: "energizing/offering cry" },
    { term: "kavacāya", meaning: "for the armor/protective sheath" },
    { term: "hum", meaning: "protective bīja" },
    { term: "nētra-trayāya", meaning: "for the three eyes" },
    { term: "vauṣaṭ", meaning: "expansive cry" },
    { term: "astrāya", meaning: "for the weapon" },
    { term: "phaṭ", meaning: "severing/protective bīja" },
    { term: "dig-bandhaḥ", meaning: "binding/sealing the quarters" },
    { term: "bhūr–bhuvaḥ–suvaḥ", meaning: "the three worlds" },
  ],
  root: group("kn-verse", "verse", translation, [
    group("kn-kara", "verse", karaMeaning, [
      group(
        "kn-k1",
        "sentence",
        "Om—To the Brahman-Self of “Tat Savituḥ,” I bow with the thumbs.",
        [
          group("kn-k1-om-tat", "phrase", "“Om, of Savitṛ”", [
            om("kn-k1-om"),
            tatsavituh("kn-k1-tatsavituh"),
          ]),
          brahmatmane("kn-k1-brahmatmane"),
          bhyam("kn-k1-angusthabhyam", "with the thumbs", [
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
        "To the Viṣṇu-Self of “Vareṇyam,” I bow with the index fingers.",
        [
          varenyam("kn-k2-varenyam"),
          visnvatmane("kn-k2-visnvatmane"),
          bhyam("kn-k2-tarjanibhyam", "with index fingers", [
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
        "To the Rudra-Self of “Bhargo Devasya,” I bow with the middle fingers.",
        [
          bhargoDevasya("kn-k3-bhargo-devasya"),
          rudratmane("kn-k3-rudratmane"),
          bhyam("kn-k3-madhyamabhyam", "with middle fingers", [
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
        "To the Truth-Self of “Dhīmahi,” I bow with the ring fingers.",
        [
          dhimahi("kn-k4-dhimahi"),
          satyatmane("kn-k4-satyatmane"),
          bhyam("kn-k4-anamikabhyam", "with ring fingers", [
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
        "To the Knowledge-Self of “Dhiyō Yō Naḥ,” I bow with the little fingers.",
        [
          dhiyoYoNah("kn-k5-dhiyo-yo-nah", "“He who (guides) our intellects”"),
          jnanatmane("kn-k5-jnanatmane"),
          bhyam("kn-k5-kanisthikabhyam", "with little fingers", [
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
        "To the Universal Self of “Prachodayāt,” I bow with the palms and backs of the hands.",
        [
          pracodayat("kn-k6-pracodayat"),
          sarvatmane("kn-k6-sarvatmane", "to the Universal Self"),
          bhyam(
            "kn-k6-karatala",
            "with the palms and backs of the hands",
            [
              ["क", "ka"],
              ["र", "ra"],
              ["त", "ta"],
              ["ल", "la"],
              ["क", "ka"],
              ["र", "ra"],
              ["पृ", "pṛ"],
              ["ष्ठा", "ṣṭhā"],
              ["भ्यां", "bhyāṃ"],
            ],
          ),
          namah("kn-k6-namah", " ॥"),
        ],
      ),
    ]),
    group("kn-anga", "verse", angaMeaning, [
      group(
        "kn-a1",
        "sentence",
        "Om—To the Brahman-Self of “Tat Savituḥ,” for the heart—salutations.",
        [
          group("kn-a1-om-tat", "phrase", "“Om, of Savitṛ”", [
            om("kn-a1-om"),
            tatsavituh("kn-a1-tatsavituh"),
          ]),
          brahmatmane("kn-a1-brahmatmane"),
          word("kn-a1-hrdayaya", "for the heart", [
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
        "To the Viṣṇu-Self of “Vareṇyam,” for the head—svāhā.",
        [
          varenyam("kn-a2-varenyam"),
          visnvatmane("kn-a2-visnvatmane"),
          word("kn-a2-sirase", "for the head", [
            ["शि", "śi"],
            ["र", "ra"],
            ["से", "se"],
          ]),
          word(
            "kn-a2-svaha",
            "offering/seal",
            [
              ["स्वा", "svā"],
              ["हा", "hā"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "kn-a3",
        "sentence",
        "To the Rudra-Self of “Bhargo Devasya,” for the crest—vaṣaṭ.",
        [
          bhargoDevasya("kn-a3-bhargo-devasya"),
          rudratmane("kn-a3-rudratmane"),
          word("kn-a3-sikhaya", "for the crest/tuft", [
            ["शि", "śi"],
            ["खा", "khā"],
            ["यै", "yai"],
          ]),
          word(
            "kn-a3-vasat",
            "energizing/offering cry",
            [
              ["व", "va"],
              ["षट्", "ṣaṭ"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "kn-a4",
        "sentence",
        "To the Truth-Self of “Dhīmahi,” for the protective armor—hum.",
        [
          dhimahi("kn-a4-dhimahi"),
          satyatmane("kn-a4-satyatmane"),
          word("kn-a4-kavacaya", "for the armor/protective sheath", [
            ["क", "ka"],
            ["व", "va"],
            ["चा", "cā"],
            ["य", "ya"],
          ]),
          word(
            "kn-a4-hum",
            "protective bīja",
            [["हुम्", "huṃ"]],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "kn-a5",
        "sentence",
        "To the Knowledge-Self of “Dhiyō Yō Naḥ,” for the three eyes—vauṣaṭ.",
        [
          dhiyoYoNah("kn-a5-dhiyo-yo-nah", "“He who (impels) our intellects”"),
          jnanatmane("kn-a5-jnanatmane"),
          word("kn-a5-netratrayaya", "for the three eyes", [
            ["ने", "ne"],
            ["त्र", "tra"],
            ["त्र", "tra"],
            ["या", "yā"],
            ["य", "ya"],
          ]),
          word(
            "kn-a5-vausat",
            "expansive cry",
            [
              ["वौ", "vau"],
              ["षट्", "ṣaṭ"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "kn-a6",
        "sentence",
        "To the Universal-Self of “Prachodayāt,” for the weapon—phaṭ.",
        [
          pracodayat("kn-a6-pracodayat"),
          sarvatmane("kn-a6-sarvatmane", "to the Universal-Self"),
          word("kn-a6-astraya", "for the weapon", [
            ["अ", "a"],
            ["स्त्रा", "strā"],
            ["य", "ya"],
          ]),
          word(
            "kn-a6-phat",
            "severing/protective bīja",
            [["फट्", "phaṭ"]],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "kn-a7",
        "sentence",
        "Om Bhūr Bhuvaḥ Suvar Om—thus is the sealing of the directions.",
        [
          om("kn-a7-om"),
          group("kn-a7-vyahrtis", "phrase", "the three worlds", [
            word("kn-a7-bhurbhuvah", "the three worlds", [
              ["भूर्", "bhūr"],
              ["भु", "bhu"],
              ["वः", "vaḥ"],
            ]),
            word("kn-a7-suvaromiti", "", [
              ["सु", "su"],
              ["व", "va"],
              ["रो", "ro"],
              ["मि", "mi"],
              ["ति", "ti"],
            ]),
          ]),
          word(
            "kn-a7-digbandhah",
            "binding/sealing the quarters",
            [
              ["दिग्", "dig"],
              ["बन्", "ban"],
              ["धः", "dhaḥ"],
            ],
            { trailing: " ॥", lineBreakAfter: true },
          ),
        ],
      ),
    ]),
  ]),
};
