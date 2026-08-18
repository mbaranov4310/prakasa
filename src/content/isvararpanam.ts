import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const namaskaraMeaning =
  "“From Brahmaloka (the highest realm) all the way down to Ālokāloka mountain (the cosmic boundary), to all the divine Brāhmaṇas who exist there, I offer salutations again and again.” This is a cosmic bow to all sacred beings who uphold dharma across all worlds.";

const narayanaMeaning =
  "“Whatever I do—through my body, speech, mind, senses, intellect, or by my natural tendencies—whatever actions I perform, I offer all of them to the Supreme Lord, Śrīman Nārāyaṇa.” This is one of the most powerful surrender verses in Hindu tradition. It means: Even my limitations, habits, and natural impulses are also placed at the feet of Bhagavān.";

const harihMeaning =
  "“Hariḥ Om Tat Sat.” This means: • Hariḥ – the remover of sorrow and ignorance • Om – the eternal sound of Brahman • Tat – “That Supreme Reality” • Sat – “Truth / Existence” So it declares: All this belongs to the Supreme Truth.";

const finalMeaning =
  "“May all of this be offered to Śrī Parameśvara.” This is the final seal that the ritual is complete, and the fruits are surrendered.";

const translation =
  "This final chapter is called Īśvarārpaṇam, meaning: “Offering everything to God.” It is the formal closing of Sandhyāvandanam, where the practitioner surrenders the entire act of worship—its effort, merit, and results—unto Bhagavān. 1) Salutation to all Divine Brāhmaṇas “Ā brahmalokād aśeṣād ālokāloka-parvatām…” Meaning: " +
  namaskaraMeaning +
  " 2) Offering all actions to Śrīman Nārāyaṇa “Kāyena vācā manasendriyairvā…” Meaning: " +
  narayanaMeaning +
  " 3) Final completion statement " +
  harihMeaning +
  " 4) Final surrender of all results “Tatsarvaṃ Śrī Parameśvarārpaṇamastu.” Meaning: " +
  finalMeaning;

export const isvararpanam: Chapter = {
  id: "isvararpanam",
  titleDev: "ईश्वरार्पणम्",
  titleIast: "īśvarārpaṇam",
  titleEn: "Īśvarārpaṇa",
  status: "ready",
  translation,
  glossary: [
    { term: "Īśvara", meaning: "the Supreme Lord" },
    { term: "Arpaṇam", meaning: "offering / surrender" },
    {
      term: "Brahmaloka",
      meaning: "highest realm (symbol of the highest spiritual plane)",
    },
    {
      term: "Ālokāloka-parvata",
      meaning: "cosmic boundary mountain described in Purāṇic cosmology",
    },
    { term: "Namo namah", meaning: "salutations again and again" },
    { term: "Kāyena", meaning: "by the body" },
    { term: "Vācā", meaning: "by speech" },
    { term: "Manasā", meaning: "by mind" },
    { term: "Indriyaiḥ", meaning: "by the senses" },
    { term: "Buddhyā", meaning: "by intellect" },
    { term: "Ātmanā", meaning: "by inner self" },
    { term: "Prakṛti", meaning: "one’s nature" },
    { term: "Svabhāva", meaning: "natural tendencies" },
    { term: "Samarpayāmi", meaning: "I offer / I surrender" },
    { term: "Hariḥ", meaning: "Lord Viṣṇu; remover of sorrow" },
    { term: "Tat Sat", meaning: "“That is the Eternal Truth”" },
    {
      term: "Parameśvara",
      meaning: "the Supreme Lord (Śiva / Īśvara principle)",
    },
    {
      term: "karomi yadyat",
      meaning: "whatever I do, each and every action",
    },
    { term: "sakalaṃ", meaning: "wholly, entirely" },
    { term: "parasmai", meaning: "to the Supreme" },
    {
      term: "śrīmannārāyaṇāya iti",
      meaning: "saying “to Śrīman Nārāyaṇa”",
    },
    {
      term: "tat sarvaṃ śrī-parameśvarārpaṇam astu",
      meaning: "may all of this be an offering to Śrī Parameśvara",
    },
  ],
  root: group("ia-verse", "verse", translation, [
    group("ia-namaskara", "sentence", namaskaraMeaning, [
      word("ia-a", "", [["आ", "ā"]]),
      word(
        "ia-brahmalokad",
        "highest realm (symbol of the highest spiritual plane)",
        [
          ["ब्रह्", "brah"],
          ["म", "ma"],
          ["लो", "lo"],
          ["काद्", "kād"],
        ],
      ),
      word("ia-asesad", "", [
        ["अ", "a"],
        ["शे", "śe"],
        ["षाद्", "ṣād"],
      ]),
      word(
        "ia-alokalokaparvatam",
        "cosmic boundary mountain described in Purāṇic cosmology",
        [
          ["आ", "ā"],
          ["लो", "lo"],
          ["का", "kā"],
          ["लो", "lo"],
          ["क", "ka"],
          ["पर्", "par"],
          ["व", "va"],
          ["ताम्", "tām"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
      word("ia-ye", "", [["ये", "ye"]]),
      word("ia-santi", "", [
        ["सन्", "san"],
        ["ति", "ti"],
      ]),
      word("ia-brahmanadevas", "", [
        ["ब्राह्", "brāh"],
        ["म", "ma"],
        ["ण", "ṇa"],
        ["दे", "de"],
        ["वास्", "vās"],
      ]),
      word("ia-tebhyo", "", [
        ["ते", "te"],
        ["भ्यो", "bhyo"],
      ]),
      word("ia-nityam", "", [
        ["नि", "ni"],
        ["त्यं", "tyaṃ"],
      ]),
      group("ia-namo-namah", "phrase", "salutations again and again", [
        word("ia-namo", "salutations again and again", [
          ["न", "na"],
          ["मो", "mo"],
        ]),
        word(
          "ia-namah",
          "salutations again and again",
          [
            ["न", "na"],
            ["मः", "maḥ"],
          ],
          { trailing: " ॥", lineBreakAfter: true },
        ),
      ]),
    ]),
    group("ia-narayana", "sentence", narayanaMeaning, [
      word("ia-kayena", "by the body", [
        ["का", "kā"],
        ["ये", "ye"],
        ["न", "na"],
      ]),
      word("ia-vaca", "by speech", [
        ["वा", "vā"],
        ["चा", "cā"],
      ]),
      word("ia-manasendriyairva", "by mind; by the senses", [
        ["म", "ma"],
        ["न", "na"],
        ["से", "se"],
        ["न्द्रि", "ndri"],
        ["यै", "yai"],
        ["र्वा", "rvā"],
      ], { lineBreakAfter: true }),
      word("ia-buddhyatmana", "by intellect; by inner self", [
        ["बु", "bu"],
        ["द्ध्या", "ddhyā"],
        ["त्म", "tma"],
        ["ना", "nā"],
      ]),
      word("ia-va", "", [["वा", "vā"]]),
      word("ia-prakrteh", "one’s nature", [
        ["प्र", "pra"],
        ["कृ", "kṛ"],
        ["तेः", "teḥ"],
      ]),
      word(
        "ia-svabhavat",
        "natural tendencies",
        [
          ["स्व", "sva"],
          ["भा", "bhā"],
          ["वा", "vā"],
          ["त्", "t"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
      group(
        "ia-karomi-yadyat",
        "phrase",
        "whatever I do, each and every action",
        [
          word("ia-karomi", "whatever I do, each and every action", [
            ["क", "ka"],
            ["रो", "ro"],
            ["मि", "mi"],
          ]),
          word("ia-yadyat", "whatever I do, each and every action", [
            ["यद्", "yad"],
            ["यत्", "yat"],
          ]),
        ],
      ),
      word("ia-sakalam", "wholly, entirely", [
        ["स", "sa"],
        ["क", "ka"],
        ["लं", "laṃ"],
      ]),
      word(
        "ia-parasmai",
        "to the Supreme",
        [
          ["प", "pa"],
          ["र", "ra"],
          ["स्मै", "smai"],
        ],
        { lineBreakAfter: true },
      ),
      word(
        "ia-srimannarayanayeti",
        "saying “to Śrīman Nārāyaṇa”",
        [
          ["श्री", "śrī"],
          ["म", "ma"],
          ["न्ना", "nnā"],
          ["रा", "rā"],
          ["य", "ya"],
          ["णा", "ṇā"],
          ["ये", "ye"],
          ["ति", "ti"],
        ],
      ),
      word(
        "ia-samarpayami",
        "I offer / I surrender",
        [
          ["स", "sa"],
          ["म", "ma"],
          ["र्प", "rpa"],
          ["या", "yā"],
          ["मि", "mi"],
        ],
        { trailing: " ॥", lineBreakAfter: true },
      ),
    ]),
    group("ia-harih-om-tat-sat", "sentence", harihMeaning, [
      word("ia-harih", "Lord Viṣṇu; remover of sorrow", [
        ["ह", "ha"],
        ["रिः", "riḥ"],
      ]),
      word("ia-om", "", [["ॐ", "oṃ"]]),
      word(
        "ia-tatsat",
        "“That is the Eternal Truth”",
        [
          ["त", "ta"],
          ["त्स", "tsa"],
          ["त्", "t"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
    ]),
    group("ia-final", "sentence", finalMeaning, [
      group(
        "ia-offering",
        "phrase",
        "may all of this be an offering to Śrī Parameśvara",
        [
          word("ia-tatsarvam", "", [
            ["त", "ta"],
            ["त्स", "tsa"],
            ["र्वं", "rvaṃ"],
          ]),
          word(
            "ia-sriparamesvararpanamastu",
            "the Supreme Lord (Śiva / Īśvara principle)",
            [
              ["श्री", "śrī"],
              ["प", "pa"],
              ["र", "ra"],
              ["मे", "me"],
              ["श्व", "śva"],
              ["रा", "rā"],
              ["र्प", "rpa"],
              ["ण", "ṇa"],
              ["म", "ma"],
              ["स्तु", "stu"],
            ],
            { trailing: " ॥" },
          ),
        ],
      ),
    ]),
  ]),
};
