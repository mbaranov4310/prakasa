import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This chapter is the final prayer and prostration (pranāma) after completing Sandhyāvandanam. “Om namo bhagavate Vāsudevāya” We bow to Lord Vāsudeva (Śrī Kṛṣṇa / Viṣṇu), the Supreme Lord. We pray that Sandhyā Devī, whom all beings worship morning and evening, may protect us always. May the sacred Sandhyā time itself guard our life, mind, and dharma. These verses declare that: Viṣṇu is the form of Śiva; Śiva is the heart of Viṣṇu; Viṣṇu is the heart of Śiva. The teaching is that the Supreme Reality is one, even if forms appear different. The prayer asks: “May I never see separation between Śiva and Viṣṇu, and may I have long life and auspiciousness.” The final śloka bows to Śrī Kṛṣṇa as: protector of dharma; well-wisher of cows and brāhmaṇas; benefactor of the entire world.";

export const pranama: Chapter = {
  id: "pranama",
  titleDev: "प्रणामः",
  titleIast: "praṇāmaḥ",
  titleEn: "Praṇāma",
  status: "ready",
  translation,
  glossary: [
    { term: "namo / namaḥ", meaning: "salutations" },
    { term: "bhagavate", meaning: "to the Blessed Lord" },
    { term: "vāsudevāya", meaning: "to Vāsudeva" },
    { term: "yaṃ", meaning: "whom" },
    { term: "sadā", meaning: "always" },
    { term: "sarva", meaning: "all" },
    { term: "bhūtāni", meaning: "beings" },
    { term: "carāṇi", meaning: "moving" },
    { term: "sthāvarāṇi", meaning: "unmoving" },
    { term: "ca", meaning: "and" },
    { term: "sāyaṃ", meaning: "at evening" },
    { term: "prātar", meaning: "at morning" },
    { term: "namasyanti", meaning: "they salute" },
    { term: "sā", meaning: "she" },
    { term: "māṃ", meaning: "me" },
    { term: "sandhyā", meaning: "Sandhyā" },
    { term: "abhirakṣatu", meaning: "may she protect" },
    { term: "śivāya", meaning: "to Śiva" },
    { term: "viṣṇu / viṣṇuḥ", meaning: "Viṣṇu" },
    { term: "viṣṇave", meaning: "to Viṣṇu" },
    { term: "rūpāya", meaning: "to the form" },
    { term: "śiva / śivaḥ", meaning: "Śiva" },
    { term: "śivasya", meaning: "of Śiva" },
    { term: "hṛdayam", meaning: "heart" },
    { term: "viṣṇoḥ", meaning: "of Viṣṇu" },
    { term: "yathā", meaning: "just as" },
    { term: "mayaḥ", meaning: "consisting of" },
    { term: "evam", meaning: "so" },
    { term: "antaram", meaning: "difference" },
    { term: "na", meaning: "not" },
    { term: "paśyāmi", meaning: "I see" },
    { term: "tathā", meaning: "so" },
    { term: "me", meaning: "for me / my" },
    { term: "svastiḥ", meaning: "well-being" },
    { term: "āyuṣi", meaning: "in (my) life" },
    { term: "brahmaṇya", meaning: "devoted to brāhmaṇas / to Veda-dharma" },
    { term: "devāya", meaning: "to the god" },
    { term: "go", meaning: "cows" },
    { term: "brāhmaṇa", meaning: "brāhmaṇas" },
    { term: "hitāya", meaning: "for the welfare of" },
    { term: "jagat", meaning: "the world" },
    { term: "kṛṣṇāya", meaning: "to Kṛṣṇa" },
    { term: "govindāya", meaning: "to Govinda" },
  ],
  root: group("pn-root", "verse", "", [
    group(
      "pn-vasudeva",
      "sentence",
      "salutations to the Blessed Lord Vāsudeva",
      [
        word("pn-om", "", [["ॐ", "oṃ"]]),
        word("pn-namo-1", "salutations", [
          ["न", "na"],
          ["मो", "mo"],
        ]),
        word("pn-bhagavate", "to the Blessed Lord", [
          ["भ", "bha"],
          ["ग", "ga"],
          ["व", "va"],
          ["ते", "te"],
        ]),
        word("pn-vasudevaya", "to Vāsudeva", [
          ["वा", "vā"],
          ["सु", "su"],
          ["दे", "de"],
          ["वा", "vā"],
          ["य", "ya"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group(
      "pn-sandhya",
      "sentence",
      "she whom all beings, moving and unmoving, always salute at evening and morning — may that Sandhyā protect me",
      [
        word("pn-yam", "whom", [["यं", "yaṃ"]]),
        word("pn-sada", "always", [
          ["स", "sa"],
          ["दा", "dā"],
        ]),
        word("pn-sarva", "all", [
          ["सर्", "sar"],
          ["व", "va"],
        ], { trailing: "" }),
        word("pn-bhutani", "beings", [
          ["भू", "bhū"],
          ["ता", "tā"],
          ["नि", "ni"],
        ]),
        word("pn-carani", "moving", [
          ["च", "ca"],
          ["रा", "rā"],
          ["णि", "ṇi"],
        ], { lineBreakAfter: true }),
        word("pn-sthavarani", "unmoving", [
          ["स्थ", "stha"],
          ["व", "va"],
          ["रा", "rā"],
          ["णि", "ṇi"],
        ]),
        word("pn-ca-1", "and", [["च", "ca"]], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        word("pn-sayam", "at evening", [
          ["सा", "sā"],
          ["यं", "yaṃ"],
        ]),
        word("pn-pratar", "at morning", [
          ["प्रा", "prā"],
          ["तर्", "tar"],
        ]),
        word("pn-namasyanti", "they salute", [
          ["न", "na"],
          ["म", "ma"],
          ["स्यन्", "syan"],
          ["ति", "ti"],
        ]),
        word("pn-sa", "she", [["सा", "sā"]]),
        word("pn-mam", "me", [["मां", "māṃ"]], { lineBreakAfter: true }),
        word("pn-sandhya", "Sandhyā", [
          ["सन्", "san"],
          ["ध्या", "dhyā"],
        ], { trailing: "" }),
        word("pn-abhiraksatu", "may she protect", [
          ["ऽभि", "bhi"],
          ["रक्", "rak"],
          ["ष", "ṣa"],
          ["तु", "tu"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group("pn-aikya", "verse", "", [
      group(
        "pn-aikya-1",
        "sentence",
        "to Śiva in the form of Viṣṇu, to Viṣṇu in the form of Śiva",
        [
          word("pn-sivaya", "to Śiva", [
            ["शि", "śi"],
            ["वा", "vā"],
            ["य", "ya"],
          ]),
          word("pn-visnu-1", "Viṣṇu", [
            ["वि", "vi"],
            ["ष्णु", "ṣṇu"],
          ], { trailing: "" }),
          word("pn-rupaya-1", "to the form", [
            ["रू", "rū"],
            ["पा", "pā"],
            ["य", "ya"],
          ]),
          word("pn-siva-1", "Śiva", [
            ["शि", "śi"],
            ["व", "va"],
          ], { trailing: "" }),
          word("pn-rupaya-2", "to the form", [
            ["रू", "rū"],
            ["पा", "pā"],
            ["य", "ya"],
          ]),
          word("pn-visnave", "to Viṣṇu", [
            ["वि", "vi"],
            ["ष्ण", "ṣṇa"],
            ["वे", "ve"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "pn-aikya-2",
        "sentence",
        "Viṣṇu is Śiva’s heart, and Śiva is Viṣṇu’s heart",
        [
          word("pn-sivasya", "of Śiva", [
            ["शि", "śi"],
            ["व", "va"],
            ["स्य", "sya"],
          ]),
          word("pn-hrdayam-1", "heart", [
            ["हृ", "hṛ"],
            ["द", "da"],
            ["यं", "yaṃ"],
          ]),
          word("pn-visnuh-1", "Viṣṇu", [
            ["वि", "vi"],
            ["ष्णुर्", "ṣṇur"],
          ]),
          word("pn-visnoh", "of Viṣṇu", [
            ["वि", "vi"],
            ["ष्णोश्", "ṣṇoś"],
          ], { trailing: "" }),
          word("pn-ca-2", "and", [["च", "ca"]], { lineBreakAfter: true }),
          word("pn-hrdayam-2", "heart", [
            ["हृ", "hṛ"],
            ["द", "da"],
            ["यं", "yaṃ"],
          ]),
          word("pn-sivah-1", "Śiva", [
            ["शि", "śi"],
            ["वः", "vaḥ"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
      group(
        "pn-aikya-3",
        "sentence",
        "just as Viṣṇu consists of Śiva, so Śiva consists of Viṣṇu",
        [
          word("pn-yatha-1", "just as", [
            ["य", "ya"],
            ["था", "thā"],
          ]),
          word("pn-siva-2", "Śiva", [
            ["शि", "śi"],
            ["व", "va"],
          ], { trailing: "" }),
          word("pn-mayah-1", "consisting of", [
            ["म", "ma"],
            ["यो", "yo"],
          ]),
          word("pn-visnuh-2", "Viṣṇu", [
            ["वि", "vi"],
            ["ष्णुर्", "ṣṇur"],
          ]),
          word("pn-evam", "so", [
            ["ए", "e"],
            ["वं", "vaṃ"],
          ], { lineBreakAfter: true }),
          word("pn-visnu-2", "Viṣṇu", [
            ["वि", "vi"],
            ["ष्णु", "ṣṇu"],
          ], { trailing: "" }),
          word("pn-mayah-2", "consisting of", [
            ["म", "ma"],
            ["यः", "yaḥ"],
          ]),
          word("pn-sivah-2", "Śiva", [
            ["शि", "śi"],
            ["वः", "vaḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "pn-aikya-4",
        "sentence",
        "as I see no difference, so may there be well-being in my life",
        [
          word("pn-yatha-2", "just as", [
            ["य", "ya"],
            ["था", "thā"],
          ], { trailing: "" }),
          word("pn-antaram", "difference", [
            ["न्त", "nta"],
            ["रं", "raṃ"],
          ]),
          word("pn-na", "not", [["न", "na"]]),
          word("pn-pasyami", "I see", [
            ["प", "pa"],
            ["श्या", "śyā"],
            ["मि", "mi"],
          ]),
          word("pn-tatha", "so", [
            ["त", "ta"],
            ["था", "thā"],
          ]),
          word("pn-me", "for me / my", [["मे", "me"]], { lineBreakAfter: true }),
          word("pn-svastih", "well-being", [
            ["स्वस्", "svas"],
            ["तिर्", "tir"],
          ]),
          word("pn-ayusi", "in (my) life", [
            ["आ", "ā"],
            ["यु", "yu"],
            ["षि", "ṣi"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
    ]),
    group("pn-govinda", "verse", "", [
      group(
        "pn-govinda-1",
        "sentence",
        "salutations to the god devoted to dharma, and to the benefactor of cows and brāhmaṇas",
        [
          word("pn-namo-2", "salutations", [
            ["न", "na"],
            ["मो", "mo"],
          ]),
          word("pn-brahmanya", "devoted to brāhmaṇas / to Veda-dharma", [
            ["ब्रह्", "brah"],
            ["म", "ma"],
            ["ण्य", "ṇya"],
          ], { trailing: "" }),
          word("pn-devaya", "to the god", [
            ["दे", "de"],
            ["वा", "vā"],
            ["य", "ya"],
          ]),
          word("pn-go", "cows", [["गो", "go"]], { trailing: "" }),
          word("pn-brahmana", "brāhmaṇas", [
            ["ब्राह्", "brāh"],
            ["म", "ma"],
            ["ण", "ṇa"],
          ], { trailing: "" }),
          word("pn-hitaya-1", "for the welfare of", [
            ["हि", "hi"],
            ["ता", "tā"],
            ["य", "ya"],
          ]),
          word("pn-ca-3", "and", [["च", "ca"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "pn-govinda-2",
        "sentence",
        "salutations again and again to Kṛṣṇa, Govinda, benefactor of the world",
        [
          word("pn-jagat", "the world", [
            ["ज", "ja"],
            ["गद्", "gad"],
          ], { trailing: "" }),
          word("pn-hitaya-2", "for the welfare of", [
            ["धि", "dhi"],
            ["ता", "tā"],
            ["य", "ya"],
          ]),
          word("pn-krsnaya", "to Kṛṣṇa", [
            ["कृ", "kṛ"],
            ["ष्णा", "ṣṇā"],
            ["य", "ya"],
          ]),
          word("pn-govindaya", "to Govinda", [
            ["गो", "go"],
            ["विन्", "vin"],
            ["दा", "dā"],
            ["य", "ya"],
          ]),
          word("pn-namo-3", "salutations", [
            ["न", "na"],
            ["मो", "mo"],
          ]),
          word("pn-namah", "salutations", [
            ["न", "na"],
            ["मः", "maḥ"],
          ], { trailing: " ॥" }),
        ],
      ),
    ]),
  ]),
};
