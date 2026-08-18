import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const vasudevaMeaning =
  "We bow to Lord Vāsudeva (Śrī Kṛṣṇa / Viṣṇu), the Supreme Lord.";

const sandhyaMeaning =
  "We pray that Sandhyā Devī, whom all beings worship morning and evening, may protect us always. May the sacred Sandhyā time itself guard our life, mind, and dharma.";

const aikyaMeaning =
  "Viṣṇu is the form of Śiva; Śiva is the heart of Viṣṇu; Viṣṇu is the heart of Śiva. The teaching is that the Supreme Reality is one, even if forms appear different. “May I never see separation between Śiva and Viṣṇu, and may I have long life and auspiciousness.”";

const govindaMeaning =
  "The final śloka bows to Śrī Kṛṣṇa as: protector of dharma; well-wisher of cows and brāhmaṇas; benefactor of the entire world.";

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
    { term: "bhagavate", meaning: "the Blessed Lord" },
    { term: "vāsudevāya", meaning: "to Vāsudeva (Kṛṣṇa/Nārāyaṇa)" },
    { term: "carāṇi", meaning: "moving beings" },
    { term: "sthāvarāṇi", meaning: "unmoving beings" },
    { term: "sandhyā", meaning: "the twilight goddess, also the Sandhyā rite" },
    { term: "abhirakṣatu", meaning: "may she protect" },
    {
      term: "śiva-rūpa / viṣṇu-rūpa",
      meaning: "in the form of Śiva / Viṣṇu",
    },
    { term: "hṛdaya", meaning: "heart, essence" },
    { term: "maya", meaning: "filled with, consisting of" },
    { term: "svasti", meaning: "well-being, auspiciousness" },
    {
      term: "brahmaṇya-deva",
      meaning: "the god devoted to Brahmins (dharmic order)",
    },
    {
      term: "go-brāhmaṇa-hitāya",
      meaning: "benefactor of cows and Brahmins",
    },
    { term: "jagad-dhitāya", meaning: "for the welfare of the world" },
    {
      term: "govinda",
      meaning: "protector of cows / finder of light / Kṛṣṇa",
    },
  ],
  root: group("pn-verse", "verse", translation, [
    group("pn-vasudeva", "sentence", vasudevaMeaning, [
      word("pn-om", "", [["ॐ", "oṃ"]]),
      word("pn-namo-1", "", [
        ["न", "na"],
        ["मो", "mo"],
      ]),
      word("pn-bhagavate", "the Blessed Lord", [
        ["भ", "bha"],
        ["ग", "ga"],
        ["व", "va"],
        ["ते", "te"],
      ]),
      word(
        "pn-vasudevaya",
        "to Vāsudeva (Kṛṣṇa/Nārāyaṇa)",
        [
          ["वा", "vā"],
          ["सु", "su"],
          ["दे", "de"],
          ["वा", "vā"],
          ["य", "ya"],
        ],
        { trailing: " ॥", lineBreakAfter: true },
      ),
    ]),
    group("pn-sandhya", "sentence", sandhyaMeaning, [
      word("pn-yam", "", [["यं", "yaṃ"]]),
      word("pn-sada", "", [
        ["स", "sa"],
        ["दा", "dā"],
      ]),
      word("pn-sarvabhutani", "", [
        ["स", "sa"],
        ["र्व", "rva"],
        ["भू", "bhū"],
        ["ता", "tā"],
        ["नि", "ni"],
      ]),
      word(
        "pn-carani",
        "moving beings",
        [
          ["च", "ca"],
          ["रा", "rā"],
          ["णि", "ṇi"],
        ],
        { lineBreakAfter: true },
      ),
      word("pn-sthavarani", "unmoving beings", [
        ["स्थ", "stha"],
        ["व", "va"],
        ["रा", "rā"],
        ["णि", "ṇi"],
      ]),
      word("pn-ca-1", "", [["च", "ca"]], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
      word("pn-sayam", "", [
        ["सा", "sā"],
        ["यं", "yaṃ"],
      ]),
      word("pn-pratar", "", [
        ["प्रा", "prā"],
        ["त", "ta"],
        ["र्", "r"],
      ]),
      word("pn-namasyanti", "", [
        ["न", "na"],
        ["म", "ma"],
        ["स्य", "sya"],
        ["न्ति", "nti"],
      ]),
      word("pn-sa", "", [["सा", "sā"]]),
      word("pn-mam", "", [["मां", "māṃ"]], { lineBreakAfter: true }),
      word(
        "pn-sandhyabhiraksatu",
        "the twilight goddess, also the Sandhyā rite; may she protect",
        [
          ["स", "sa"],
          ["न्ध्या", "ndhyā"],
          ["ऽभि", "’bhi"],
          ["र", "ra"],
          ["क्ष", "kṣa"],
          ["तु", "tu"],
        ],
        { trailing: " ॥", lineBreakAfter: true },
      ),
    ]),
    group("pn-aikya", "sentence", aikyaMeaning, [
      group("pn-forms", "phrase", "Viṣṇu is the form of Śiva", [
        word("pn-sivaya", "", [
          ["शि", "śi"],
          ["वा", "vā"],
          ["य", "ya"],
        ]),
        word("pn-visnurupaya", "in the form of Śiva / Viṣṇu", [
          ["वि", "vi"],
          ["ष्णु", "ṣṇu"],
          ["रू", "rū"],
          ["पा", "pā"],
          ["य", "ya"],
        ]),
        word("pn-sivarupaya", "in the form of Śiva / Viṣṇu", [
          ["शि", "śi"],
          ["व", "va"],
          ["रू", "rū"],
          ["पा", "pā"],
          ["य", "ya"],
        ]),
        word(
          "pn-visnave",
          "",
          [
            ["वि", "vi"],
            ["ष्ण", "ṣṇa"],
            ["वे", "ve"],
          ],
          { trailing: " ।", lineBreakAfter: true },
        ),
      ]),
      group(
        "pn-hearts",
        "phrase",
        "Śiva is the heart of Viṣṇu; Viṣṇu is the heart of Śiva",
        [
          word("pn-sivasya", "", [
            ["शि", "śi"],
            ["व", "va"],
            ["स्य", "sya"],
          ]),
          word("pn-hrdayam-1", "heart, essence", [
            ["हृ", "hṛ"],
            ["द", "da"],
            ["यं", "yaṃ"],
          ]),
          word("pn-visnur-1", "", [
            ["वि", "vi"],
            ["ष्णु", "ṣṇu"],
            ["र्", "r"],
          ]),
          word("pn-visnosca", "", [
            ["वि", "vi"],
            ["ष्णो", "ṣṇo"],
            ["श्च", "śca"],
          ], { lineBreakAfter: true }),
          word("pn-hrdayam-2", "heart, essence", [
            ["हृ", "hṛ"],
            ["द", "da"],
            ["यं", "yaṃ"],
          ]),
          word(
            "pn-sivah-1",
            "",
            [
              ["शि", "śi"],
              ["वः", "vaḥ"],
            ],
            { trailing: " ॥", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "pn-maya",
        "phrase",
        "The teaching is that the Supreme Reality is one, even if forms appear different.",
        [
          word("pn-yatha-1", "", [
            ["य", "ya"],
            ["था", "thā"],
          ]),
          word("pn-sivamayo", "filled with, consisting of", [
            ["शि", "śi"],
            ["व", "va"],
            ["म", "ma"],
            ["यो", "yo"],
          ]),
          word("pn-visnur-2", "", [
            ["वि", "vi"],
            ["ष्णु", "ṣṇu"],
            ["र्", "r"],
          ]),
          word("pn-evam", "", [
            ["ए", "e"],
            ["वं", "vaṃ"],
          ], { lineBreakAfter: true }),
          word("pn-visnumayah", "filled with, consisting of", [
            ["वि", "vi"],
            ["ष्णु", "ṣṇu"],
            ["म", "ma"],
            ["यः", "yaḥ"],
          ]),
          word(
            "pn-sivah-2",
            "",
            [
              ["शि", "śi"],
              ["वः", "vaḥ"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "pn-no-difference",
        "phrase",
        "May I never see separation between Śiva and Viṣṇu, and may I have long life and auspiciousness.",
        [
          word("pn-yathantaram", "", [
            ["य", "ya"],
            ["था", "thā"],
            ["न्त", "nta"],
            ["रं", "raṃ"],
          ]),
          word("pn-na", "", [["न", "na"]]),
          word("pn-pasyami", "", [
            ["प", "pa"],
            ["श्या", "śyā"],
            ["मि", "mi"],
          ]),
          word("pn-tatha", "", [
            ["त", "ta"],
            ["था", "thā"],
          ]),
          word("pn-me", "", [["मे", "me"]], { lineBreakAfter: true }),
          word("pn-svastir", "well-being, auspiciousness", [
            ["स्वस्", "svas"],
            ["तिर्", "tir"],
          ]),
          word(
            "pn-ayusi",
            "",
            [
              ["आ", "ā"],
              ["यु", "yu"],
              ["षि", "ṣi"],
            ],
            { trailing: " ॥", lineBreakAfter: true },
          ),
        ],
      ),
    ]),
    group("pn-govinda", "sentence", govindaMeaning, [
      word("pn-namo-2", "", [
        ["न", "na"],
        ["मो", "mo"],
      ]),
      word(
        "pn-brahmanyadevaya",
        "the god devoted to Brahmins (dharmic order)",
        [
          ["ब्र", "bra"],
          ["ह्म", "hma"],
          ["ण्य", "ṇya"],
          ["दे", "de"],
          ["वा", "vā"],
          ["य", "ya"],
        ],
      ),
      word(
        "pn-gobrahmanahitaya",
        "benefactor of cows and Brahmins",
        [
          ["गो", "go"],
          ["ब्रा", "brā"],
          ["ह्म", "hma"],
          ["ण", "ṇa"],
          ["हि", "hi"],
          ["ता", "tā"],
          ["य", "ya"],
        ],
      ),
      word("pn-ca-2", "", [["च", "ca"]], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
      word("pn-jagaddhitaya", "for the welfare of the world", [
        ["ज", "ja"],
        ["ग", "ga"],
        ["द्धि", "ddhi"],
        ["ता", "tā"],
        ["य", "ya"],
      ]),
      word("pn-krsnaya", "", [
        ["कृ", "kṛ"],
        ["ष्णा", "ṣṇā"],
        ["य", "ya"],
      ]),
      word(
        "pn-govindaya",
        "protector of cows / finder of light / Kṛṣṇa",
        [
          ["गो", "go"],
          ["वि", "vi"],
          ["न्दा", "ndā"],
          ["य", "ya"],
        ],
      ),
      word("pn-namo-3", "", [
        ["न", "na"],
        ["मो", "mo"],
      ]),
      word(
        "pn-namah",
        "",
        [
          ["न", "na"],
          ["मः", "maḥ"],
        ],
        { trailing: " ॥" },
      ),
    ]),
  ]),
};
