import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

const muniMeaning =
  "In this section, we offer respectful salutations to the great Munis and Ṛṣis who are believed to reside spiritually in the sacred region between the rivers Gaṅgā and Yamunā. We pray that these sages remain pleased with us and bless us with: long life (cirañjīvitam); inner clarity; spiritual progress; protection from obstacles.";

const sandhyaMeaning =
  "Here we offer salutations to: Sandhyā Devī – the presiding divine presence of twilight/prayer time; Sāvitrī – the divine form of the Gāyatrī energy; Gāyatrī – the mantra and its cosmic power; Sarasvatī – the Goddess of knowledge and sacred speech. Then we bow to all divine beings: Devatās; Devas; Ṛṣis; Munis; Gurus; Mothers and Fathers.";

const kamaManyuMeaning =
  "The lines: kāmo’kārṣīt; manyurakārṣīt mean: “I acted due to desire.” “I acted due to anger.” This is a humble confession that mistakes happen due to human weaknesses, and we seek purification and forgiveness.";

const elementsMeaning =
  "Finally, we bow to the cosmic foundation of life: Pṛthivī (Earth); Āpaḥ (Water); Tejaḥ (Fire / Light); Vāyuḥ (Air); Ākāśaḥ (Space / Ether). This completes the chapter by recognizing that the body, breath, and mind are made of these elements, and Sandhyā is ultimately a return to cosmic order.";

const translation =
  "This chapter is a closing salutation (namaskāra) offered at the end of Sandhyāvandanam. It has two parts: 1) Muni Namaskāraḥ (Salutation to the Sages) " +
  muniMeaning +
  " This is a reminder that Sandhyāvandanam is not only personal prayer, but also part of an ancient tradition protected by sages. 2) Sandhyā Devatā Namaskāraḥ (Salutations to the Divine Powers of Sandhyā) " +
  sandhyaMeaning +
  " This is done to acknowledge that our spiritual life is supported by many visible and invisible forces. 3) Confession and Humility (Kāma & Manyu) " +
  kamaManyuMeaning +
  " 4) Salutation to the Five Elements " +
  elementsMeaning;

function namo(id: string): SpanNode {
  return word(id, "salutations", [
    ["न", "na"],
    ["मो", "mo"],
  ]);
}

function namah(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode {
  return word(
    id,
    "salutations",
    [
      ["न", "na"],
      ["मः", "maḥ"],
    ],
    options ?? { trailing: " ।", lineBreakAfter: true },
  );
}

function ganga(id: string): SpanNode {
  return word(
    id,
    "Gaṅgā",
    [
      ["ग", "ga"],
      ["ङ्गा", "ṅgā"],
      ["–", "–"],
    ],
    { trailing: "" },
  );
}

function yamunayoh(id: string): SpanNode {
  return word(
    id,
    "and Yamunā (dual: “of the two”)",
    [
      ["य", "ya"],
      ["मु", "mu"],
      ["न", "na"],
      ["योर्", "yor"],
    ],
    { trailing: "" },
  );
}

function munibhyah(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode {
  return word(
    id,
    "to the sages",
    [
      ["मु", "mu"],
      ["नि", "ni"],
      ["भ्यः", "bhyaḥ"],
    ],
    options,
  );
}

function namahLine(
  id: string,
  targetMeaning: string,
  target: SpanNode,
): SpanNode {
  return group(id, "sentence", `salutations to ${targetMeaning}`, [
    target,
    namah(`${id}-namah`),
  ]);
}

export const muniNamaskara: Chapter = {
  id: "muni-namaskara",
  titleDev: "मुनि नमस्कारः, सन्ध्यादेवता नमस्कारः",
  titleIast: "muni namaskāraḥ, sandhyādevatā namaskāraḥ",
  titleEn: "Muni namaskāra and Sandhyā-devatā namaskāra",
  status: "ready",
  translation,
  glossary: [
    { term: "namo / namaḥ", meaning: "salutations" },
    { term: "gaṅgā", meaning: "Gaṅgā" },
    { term: "yamunayoḥ", meaning: "and Yamunā (dual: “of the two”)" },
    { term: "madhye", meaning: "in the midst" },
    { term: "ye", meaning: "who" },
    { term: "vasanti", meaning: "dwell" },
    { term: "te", meaning: "they" },
    { term: "me", meaning: "my / for me" },
    { term: "prasanna", meaning: "gracious" },
    { term: "ātmānaḥ", meaning: "in spirit" },
    { term: "cirañjīvitam", meaning: "long life" },
    { term: "vardhayantu", meaning: "may they increase" },
    { term: "munibhyaḥ", meaning: "to the sages" },
    { term: "sandhyāyai", meaning: "to Sandhyā" },
    { term: "sāvitryai", meaning: "to Sāvitrī" },
    { term: "gāyatryai", meaning: "to Gāyatrī" },
    { term: "sarasvatyai", meaning: "to Sarasvatī" },
    { term: "sarvābhyaḥ", meaning: "to all" },
    { term: "devatābhyaḥ", meaning: "deities" },
    { term: "devābhyaḥ", meaning: "to the gods" },
    { term: "ṛṣibhyaḥ", meaning: "to the ṛṣis" },
    { term: "gurubhyaḥ", meaning: "to the gurus" },
    { term: "mātṛbhyaḥ", meaning: "to the mothers" },
    { term: "pitṛbhyaḥ", meaning: "to the ancestors" },
    { term: "kāmaḥ", meaning: "desire" },
    { term: "manyuḥ", meaning: "anger" },
    { term: "akārṣīt", meaning: "did it / acted" },
    { term: "pṛthivyāḥ", meaning: "Earth" },
    { term: "āpaḥ", meaning: "Waters" },
    { term: "tejaḥ", meaning: "Fire" },
    { term: "vāyuḥ", meaning: "Air" },
    { term: "ākāśāt", meaning: "Space" },
  ],
  root: group("mn-root", "verse", "", [
    group("mn-muni", "verse", "", [
      group(
        "mn-muni-dwell",
        "sentence",
        "salutations to those who dwell between Gaṅgā and Yamunā; may those gracious in spirit increase my long life",
        [
          namo("mn-namo-dwell"),
          ganga("mn-ganga-1"),
          yamunayoh("mn-yamuna-1"),
          word("mn-madhye", "in the midst", [
            ["मध्", "madh"],
            ["ये", "ye"],
          ]),
          word("mn-ye", "who", [["ये", "ye"]]),
          word("mn-vasanti", "dwell", [
            ["व", "va"],
            ["स", "sa"],
            ["न्ति", "nti"],
          ], { lineBreakAfter: true }),
          word("mn-te", "they", [["ते", "te"]]),
          word("mn-me", "my / for me", [["मे", "me"]]),
          word("mn-prasanna", "gracious", [
            ["प्र", "pra"],
            ["सन्", "san"],
            ["न्", "n"],
          ], { trailing: "" }),
          word("mn-atmanah", "in spirit", [
            ["आत्", "āt"],
            ["मा", "mā"],
            ["नः", "naḥ"],
          ]),
          word("mn-ciranjivitam", "long life", [
            ["चि", "ci"],
            ["रञ्", "ran"],
            ["जी", "jī"],
            ["वि", "vi"],
            ["तं", "taṃ"],
          ]),
          word("mn-vardhayantu", "may they increase", [
            ["वर्", "var"],
            ["ध", "dha"],
            ["यन्", "yan"],
            ["तु", "tu"],
          ], {
            trailing: " ॥",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "mn-muni-sages",
        "sentence",
        "salutations to the sages of Gaṅgā and Yamunā",
        [
          namo("mn-namo-sages"),
          ganga("mn-ganga-2"),
          yamunayoh("mn-yamuna-2"),
          munibhyah("mn-munibhyah-1", {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "mn-muni-sages-again",
        "sentence",
        "salutations to the sages of Gaṅgā and Yamunā",
        [
          namo("mn-namo-again"),
          namah("mn-namah-again", { trailing: " " }),
          ganga("mn-ganga-3"),
          yamunayoh("mn-yamuna-3"),
          munibhyah("mn-munibhyah-2", {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group("mn-muni-bow", "sentence", "salutations", [
        namah("mn-namah-bow", { trailing: " ॥", lineBreakAfter: true }),
      ]),
    ]),
    group("mn-sandhya", "verse", "", [
      namahLine(
        "mn-sandhyayai",
        "Sandhyā",
        word("mn-sandhyayai-word", "to Sandhyā", [
          ["सन्", "san"],
          ["ध्या", "dhyā"],
          ["यै", "yai"],
        ]),
      ),
      namahLine(
        "mn-savitryai",
        "Sāvitrī",
        word("mn-savitryai-word", "to Sāvitrī", [
          ["सा", "sā"],
          ["वि", "vi"],
          ["त्र्यै", "tryai"],
        ]),
      ),
      namahLine(
        "mn-gayatryai",
        "Gāyatrī",
        word("mn-gayatryai-word", "to Gāyatrī", [
          ["गा", "gā"],
          ["य", "ya"],
          ["त्र्यै", "tryai"],
        ]),
      ),
      namahLine(
        "mn-sarasvatyai",
        "Sarasvatī",
        word("mn-sarasvatyai-word", "to Sarasvatī", [
          ["स", "sa"],
          ["र", "ra"],
          ["स्व", "sva"],
          ["त्यै", "tyai"],
        ]),
      ),
      namahLine(
        "mn-sarvabhyo-devatabhyo",
        "all deities",
        group("mn-sarvabhyo-devatabhyo-phrase", "phrase", "to all deities", [
          word("mn-sarvabhyo", "to all", [
            ["सर्", "sar"],
            ["वा", "vā"],
            ["भ्यो", "bhyo"],
          ]),
          word("mn-devatabhyo", "deities", [
            ["दे", "de"],
            ["व", "va"],
            ["ता", "tā"],
            ["भ्यो", "bhyo"],
          ]),
        ]),
      ),
      namahLine(
        "mn-devabhyo",
        "the gods",
        word("mn-devabhyo-word", "to the gods", [
          ["दे", "de"],
          ["वा", "vā"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-rsibhyo",
        "the ṛṣis",
        word("mn-rsibhyo-word", "to the ṛṣis", [
          ["ऋ", "ṛ"],
          ["षि", "ṣi"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-munibhyo",
        "the sages",
        word("mn-munibhyo-word", "to the sages", [
          ["मु", "mu"],
          ["नि", "ni"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-gurubhyo",
        "the gurus",
        word("mn-gurubhyo-word", "to the gurus", [
          ["गु", "gu"],
          ["रु", "ru"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-matrbhyo",
        "the mothers",
        word("mn-matrbhyo-word", "to the mothers", [
          ["मा", "mā"],
          ["तृ", "tṛ"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-pitrbhyo",
        "the ancestors",
        word("mn-pitrbhyo-word", "to the ancestors", [
          ["पि", "pi"],
          ["तृ", "tṛ"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      group("mn-kama", "sentence", "desire did it", [
        word("mn-kamo", "desire", [
          ["का", "kā"],
          ["मो", "mo"],
        ], { trailing: "" }),
        word("mn-akarsit-1", "did it / acted", [
          ["ऽकार्", "’kār"],
          ["षीत्", "ṣīt"],
        ]),
        namo("mn-namo-kama"),
        namah("mn-namah-kama"),
      ]),
      group("mn-manyu", "sentence", "anger did it", [
        word("mn-manyuh", "anger", [
          ["म", "ma"],
          ["न्यु", "nyu"],
        ], { trailing: "" }),
        word("mn-akarsit-2", "did it / acted", [
          ["रकार्", "rakār"],
          ["षीत्", "ṣīt"],
        ]),
        namo("mn-namo-manyu"),
        namah("mn-namah-manyu"),
      ]),
      group(
        "mn-elements",
        "sentence",
        "salutations to Earth, Waters, Fire, Air, and Space",
        [
          word("mn-prthivyah", "Earth", [
            ["पृ", "pṛ"],
            ["थि", "thi"],
            ["व्याः", "vyāḥ"],
          ]),
          word("mn-apah", "Waters", [
            ["आ", "ā"],
            ["पः", "paḥ"],
          ]),
          word("mn-tejo", "Fire", [
            ["ते", "te"],
            ["जो", "jo"],
          ]),
          word("mn-vayuh", "Air", [
            ["वा", "vā"],
            ["यु", "yu"],
          ], { trailing: "" }),
          word("mn-akasat", "Space", [
            ["रा", "rā"],
            ["का", "kā"],
            ["शात्", "śāt"],
          ]),
          namah("mn-namah-elements", { trailing: " ॥" }),
        ],
      ),
    ]),
  ]),
};
