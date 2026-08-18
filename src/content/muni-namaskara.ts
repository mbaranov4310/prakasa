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
  return word(id, "salutations, bowing", [
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
    "salutations, bowing",
    [
      ["न", "na"],
      ["मः", "maḥ"],
    ],
    options ?? { trailing: " ।", lineBreakAfter: true },
  );
}

const gangaYamunaSyllables: [string, string][] = [
  ["ग", "ga"],
  ["ङ्गा", "ṅgā"],
  ["–", "–"],
  ["य", "ya"],
  ["मु", "mu"],
  ["न", "na"],
  ["यो", "yo"],
];

function gangaYamunaMadhye(id: string): SpanNode {
  return word(id, "of Gaṅgā and Yamunā (dual genitive); in the midst, in the region between", [
    ...gangaYamunaSyllables,
    ["र्म", "rma"],
    ["ध्ये", "dhye"],
  ]);
}

function gangaYamunaMunibhyah(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode {
  return word(
    id,
    "of Gaṅgā and Yamunā (dual genitive); to the sages",
    [
      ...gangaYamunaSyllables,
      ["र्मु", "rmu"],
      ["नि", "ni"],
      ["भ्यः", "bhyaḥ"],
    ],
    options,
  );
}

function namahLine(
  id: string,
  meaning: string,
  target: SpanNode,
): SpanNode {
  return group(id, "sentence", meaning, [
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
    { term: "namo", meaning: "salutations, bowing" },
    { term: "gaṅgā–yamunayōḥ", meaning: "of Gaṅgā and Yamunā (dual genitive)" },
    { term: "madhyē", meaning: "in the midst, in the region between" },
    { term: "yē vasanti", meaning: "those who dwell" },
    { term: "tē", meaning: "they" },
    { term: "mē", meaning: "for me, unto me" },
    { term: "prasanna-ātmānaḥ", meaning: "serene-hearted, gracious-minded" },
    { term: "cirañjīvitam", meaning: "long life, longevity" },
    { term: "vardhayanti", meaning: "they increase, bestow" },
    { term: "munibhyas ca", meaning: "and to the sages" },
    { term: "namaḥ / namo namo", meaning: "salutations, repeated reverence" },
    { term: "sandhyāyai", meaning: "to Sandhyā, the twilight deity" },
    { term: "sāvitryai", meaning: "to Sāvitrī" },
    { term: "gāyatryai", meaning: "to Gāyatrī" },
    { term: "sarasvatyai", meaning: "to Sarasvatī" },
    { term: "sarvābhyaḥ devatābhyaḥ", meaning: "to all deities" },
    { term: "devābhyaḥ", meaning: "to the gods" },
    { term: "ṛṣibhyaḥ", meaning: "to the seers" },
    { term: "munibhyaḥ", meaning: "to the sages" },
    { term: "gurubhyaḥ", meaning: "to the teachers" },
    { term: "mātṛbhyaḥ", meaning: "to the mothers" },
    { term: "pitṛbhyaḥ", meaning: "to the ancestors" },
    {
      term: "kāmaḥ akārṣīt",
      meaning: "“desire did it” (a traditional formula of self-clearing)",
    },
    { term: "manyuḥ akārṣīt", meaning: "“anger did it”" },
    {
      term: "pṛthivyāḥ … ākāśāt",
      meaning: "Earth, Waters, Fire, Air, Space (five elements)",
    },
  ],
  root: group("mn-root", "verse", translation, [
    group("mn-muni", "verse", muniMeaning, [
      group(
        "mn-muni-dwell",
        "sentence",
        "Salutations to those who dwell in the region between the Gaṅgā and the Yamunā; may those serene-hearted ones increase my longevity.",
        [
          namo("mn-namo-dwell"),
          gangaYamunaMadhye("mn-ganga-madhye"),
          group("mn-ye-vasanti", "phrase", "those who dwell", [
            word("mn-ye", "those who dwell", [["ये", "ye"]]),
            word(
              "mn-vasanti",
              "those who dwell",
              [
                ["व", "va"],
                ["स", "sa"],
                ["न्ति", "nti"],
              ],
              { lineBreakAfter: true },
            ),
          ]),
          word("mn-te", "they", [["ते", "te"]]),
          word("mn-me", "for me, unto me", [["मे", "me"]]),
          word("mn-prasannatmanah", "serene-hearted, gracious-minded", [
            ["प्र", "pra"],
            ["स", "sa"],
            ["न्ना", "nnā"],
            ["त्मा", "tmā"],
            ["नः", "naḥ"],
          ]),
          word("mn-ciranjivitam", "long life, longevity", [
            ["चि", "ci"],
            ["र", "ra"],
            ["ञ्जी", "ñjī"],
            ["वि", "vi"],
            ["तं", "taṃ"],
          ]),
          word(
            "mn-vardhayantu",
            "they increase, bestow",
            [
              ["वर्", "var"],
              ["ध", "dha"],
              ["यन्", "yan"],
              ["तु", "tu"],
            ],
            { trailing: " ॥", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "mn-muni-sages",
        "sentence",
        "Salutations to the sages of the Gaṅgā and Yamunā.",
        [
          namo("mn-namo-sages"),
          gangaYamunaMunibhyah("mn-ganga-munibhyah-1", {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "mn-muni-sages-again",
        "sentence",
        "salutations, salutations again to the sages of the Gaṅgā and Yamunā",
        [
          namo("mn-namo-again"),
          namah("mn-namah-again", { trailing: " " }),
          gangaYamunaMunibhyah("mn-ganga-munibhyah-2", {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group("mn-muni-bow", "sentence", "I bow.", [
        namah("mn-namah-bow", { trailing: " ॥", lineBreakAfter: true }),
      ]),
    ]),
    group("mn-sandhya", "verse", sandhyaMeaning + " " + kamaManyuMeaning + " " + elementsMeaning, [
      namahLine(
        "mn-sandhyayai",
        "the presiding divine presence of twilight/prayer time",
        word("mn-sandhyayai-word", "the presiding divine presence of twilight/prayer time", [
          ["स", "sa"],
          ["न्ध्या", "ndhyā"],
          ["यै", "yai"],
        ]),
      ),
      namahLine(
        "mn-savitryai",
        "the divine form of the Gāyatrī energy",
        word("mn-savitryai-word", "the divine form of the Gāyatrī energy", [
          ["सा", "sā"],
          ["वि", "vi"],
          ["त्र्यै", "tryai"],
        ]),
      ),
      namahLine(
        "mn-gayatryai",
        "the mantra and its cosmic power",
        word("mn-gayatryai-word", "the mantra and its cosmic power", [
          ["गा", "gā"],
          ["य", "ya"],
          ["त्र्यै", "tryai"],
        ]),
      ),
      namahLine(
        "mn-sarasvatyai",
        "the Goddess of knowledge and sacred speech",
        word("mn-sarasvatyai-word", "the Goddess of knowledge and sacred speech", [
          ["स", "sa"],
          ["र", "ra"],
          ["स्व", "sva"],
          ["त्यै", "tyai"],
        ]),
      ),
      namahLine(
        "mn-sarvabhyo-devatabhyo",
        "to all deities",
        group("mn-sarvabhyo-devatabhyo-phrase", "phrase", "to all deities", [
          word("mn-sarvabhyo", "to all deities", [
            ["स", "sa"],
            ["र्वा", "rvā"],
            ["भ्यो", "bhyo"],
          ]),
          word("mn-devatabhyo", "to all deities", [
            ["दे", "de"],
            ["व", "va"],
            ["ता", "tā"],
            ["भ्यो", "bhyo"],
          ]),
        ]),
      ),
      namahLine(
        "mn-devabhyo",
        "to the gods",
        word("mn-devabhyo-word", "to the gods", [
          ["दे", "de"],
          ["वा", "vā"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-rsibhyo",
        "to the seers",
        word("mn-rsibhyo-word", "to the seers", [
          ["ऋ", "ṛ"],
          ["षि", "ṣi"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-munibhyo",
        "to the sages",
        word("mn-munibhyo-word", "to the sages", [
          ["मु", "mu"],
          ["नि", "ni"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-gurubhyo",
        "to the teachers",
        word("mn-gurubhyo-word", "to the teachers", [
          ["गु", "gu"],
          ["रु", "ru"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-matrbhyo",
        "to the mothers",
        word("mn-matrbhyo-word", "to the mothers", [
          ["मा", "mā"],
          ["तृ", "tṛ"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      namahLine(
        "mn-pitrbhyo",
        "to the ancestors",
        word("mn-pitrbhyo-word", "to the ancestors", [
          ["पि", "pi"],
          ["तृ", "tṛ"],
          ["भ्यो", "bhyo"],
        ]),
      ),
      group("mn-kama-manyu", "phrase", kamaManyuMeaning, [
        group("mn-kama", "sentence", "I acted due to desire.", [
          word("mn-kamo-karsit", "I acted due to desire.", [
            ["का", "kā"],
            ["मो", "mo"],
            ["ऽका", "’kā"],
            ["र्षी", "rṣī"],
            ["त्", "t"],
          ]),
          namo("mn-namo-kama"),
          namah("mn-namah-kama"),
        ]),
        group("mn-manyu", "sentence", "I acted due to anger.", [
          word("mn-manyurakarsit", "I acted due to anger.", [
            ["म", "ma"],
            ["न्यु", "nyu"],
            ["र", "ra"],
            ["का", "kā"],
            ["र्षी", "rṣī"],
            ["त्", "t"],
          ]),
          namo("mn-namo-manyu"),
          namah("mn-namah-manyu"),
        ]),
      ]),
      group(
        "mn-elements",
        "sentence",
        "Salutations to Earth, Waters, Fire, Air, and Space.",
        [
          group(
            "mn-elements-phrase",
            "phrase",
            "Earth, Waters, Fire, Air, Space (five elements)",
            [
              word("mn-prthivyah", "Pṛthivī (Earth)", [
                ["पृ", "pṛ"],
                ["थि", "thi"],
                ["व्याः", "vyāḥ"],
              ]),
              word("mn-apah", "Āpaḥ (Water)", [
                ["आ", "ā"],
                ["पः", "paḥ"],
              ]),
              word("mn-tejo", "Tejaḥ (Fire / Light)", [
                ["ते", "te"],
                ["जो", "jo"],
              ]),
              word("mn-vayurakasat", "Vāyuḥ (Air); Ākāśaḥ (Space / Ether)", [
                ["वा", "vā"],
                ["यु", "yu"],
                ["रा", "rā"],
                ["का", "kā"],
                ["शा", "śā"],
                ["त्", "t"],
              ]),
            ],
          ),
          namah("mn-namah-elements", { trailing: " ॥" }),
        ],
      ),
    ]),
  ]),
};
