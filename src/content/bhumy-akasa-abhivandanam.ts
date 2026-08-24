import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

const heavenEarthMeaning =
  "The first mantra begins by affirming: “May Heaven (Dyāvā) and Earth (Pṛthivī) remain established in Truth.” This is a Vedic-style declaration that the entire universe is supported by Satya (Truth) and Ṛta (cosmic order). Then we pray: to the Divine forces; for protection; for removal of obstacles; for the strength to follow the path of Dharma. The mantra also asks for Vidya (knowledge) and the removal of Vṛjina (sin, wrong tendencies, inner impurity).";

const keshavaMeaning =
  "The next famous verse says: “Just as water falling from the sky ultimately reaches the ocean, all salutations offered to all Devatās ultimately reach Keshava (Viṣṇu).” This is a key Vedantic principle: Even if we worship many forms, the final destination is One Supreme Reality. So every namaskāra, every prayer, every offering is accepted by the Supreme Lord.";

const janardanaMeaning =
  "The next verse declares: “Whatever merit exists in all the Vedas, whatever fruit exists in all holy pilgrimages, that same fruit is obtained by the person who praises Lord Janārdana.” Meaning: The Lord is not separate from Dharma. By worshipping Him with sincerity, one receives the spiritual merit of the highest sacred practices.";

const vasudevaMeaning =
  "The final verse says: “The fragrance (presence) of Vāsudeva fills the three worlds. You dwell in all beings. O Śrī Vāsudeva, I bow to You.” This teaches that Bhagavān is not far away in a temple alone, but is present in: all life; all directions; all beings; the entire universe. This is a closing surrender that completes Sandhyāvandanam with gratitude and unity consciousness.";

const translation =
  "This chapter is called Bhūmi-Ākāśa Abhivandanam, meaning: “Salutation to Earth and Sky, and final surrender to Bhagavān.” It is a concluding prayer that recognizes the cosmic order in which Sandhyāvandanam is performed. 1) Salutation to Heaven and Earth " +
  heavenEarthMeaning +
  " 2) Water Returns to the Ocean — Namaskāra Returns to Keshava " +
  keshavaMeaning +
  " 3) Merit of All Vedas and All Pilgrimages " +
  janardanaMeaning +
  " 4) Vāsudeva Fills the Three Worlds " +
  vasudevaMeaning;

function onnamIti(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode[] {
  return [
    word(`${id}-onnam`, "oṃ", [
      ["ओन्", "on"],
      ["नम्", "nam"],
    ]),
    word(`${id}-iti`, "thus", [
      ["इ", "i"],
      ["ति", "ti"],
    ], options),
  ];
}

function kesavam(id: string, options?: { trailing?: string; lineBreakAfter?: boolean }): SpanNode {
  return word(
    id,
    "to Keśava",
    [
      ["के", "ke"],
      ["श", "śa"],
      ["वं", "vaṃ"],
    ],
    options,
  );
}

function janardanam(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode {
  return word(
    id,
    "Janārdana",
    [
      ["ज", "ja"],
      ["नार्", "nār"],
      ["द", "da"],
      ["नम्", "nam"],
    ],
    options,
  );
}

function stutvaDevamJanardanam(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode[] {
  return [
    word(`${id}-stutva`, "having praised", [
      ["स्तु", "stu"],
      ["त्वा", "tvā"],
    ]),
    word(`${id}-devam`, "the Lord", [
      ["दे", "de"],
      ["वं", "vaṃ"],
    ]),
    janardanam(`${id}-janardanam`, options),
  ];
}

function sri(id: string): SpanNode {
  return word(id, "Śrī", [["श्री", "śrī"]], { trailing: "" });
}

function vasudevaVocative(id: string): SpanNode {
  return word(id, "O Vāsudeva", [
    ["वा", "vā"],
    ["सु", "su"],
    ["दे", "de"],
    ["व", "va"],
  ]);
}

function namoAstuTe(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode[] {
  return [
    word(`${id}-namo`, "salutations", [
      ["न", "na"],
      ["मो", "mo"],
    ], { trailing: "" }),
    word(`${id}-astu`, "may there be", [
      ["ऽस्तु", "’stu"],
    ], { trailing: "" }),
    word(`${id}-te`, "to you", [["ते", "te"]], options),
  ];
}

export const bhumyAkasaAbhivandanam: Chapter = {
  id: "bhumy-akasa-abhivandanam",
  titleDev: "भूम्याकाशाभिवन्दनम्",
  titleIast: "bhūmy-ākāśābhivandanam",
  titleEn: "Bhūmi-ākāśa abhivandana",
  status: "ready",
  translation,
  glossary: [
    { term: "idam", meaning: "this" },
    { term: "dyāvā", meaning: "Heaven" },
    { term: "pṛthivī", meaning: "Earth" },
    { term: "satyam", meaning: "truth" },
    { term: "astu", meaning: "may it be" },
    { term: "pitar", meaning: "O Father" },
    { term: "mātar", meaning: "O Mother" },
    { term: "yadi", meaning: "which / if" },
    { term: "iha", meaning: "here" },
    { term: "upa", meaning: "toward" },
    { term: "bruve", meaning: "I speak" },
    { term: "vām", meaning: "to you two" },
    { term: "bhūtam", meaning: "be ye" },
    { term: "devānām", meaning: "of the gods" },
    { term: "avame", meaning: "nearest" },
    { term: "avobhiḥ", meaning: "with protections" },
    { term: "vidyāma", meaning: "may we know" },
    { term: "iṣam", meaning: "nourishment" },
    { term: "vṛjinaṃ", meaning: "sin" },
    { term: "jīradānum", meaning: "life-giving" },
    { term: "ākāśāt", meaning: "from the sky" },
    { term: "patitam", meaning: "fallen" },
    { term: "toyam", meaning: "water" },
    { term: "yathā", meaning: "just as" },
    { term: "gacchati", meaning: "goes" },
    { term: "sāgaram", meaning: "to the ocean" },
    { term: "sarva", meaning: "all" },
    { term: "deva", meaning: "gods" },
    { term: "namaskāraḥ", meaning: "salutation" },
    { term: "keśavam", meaning: "to Keśava" },
    { term: "prati", meaning: "toward" },
    { term: "śrī", meaning: "Śrī" },
    { term: "onnam", meaning: "oṃ" },
    { term: "iti", meaning: "thus" },
    { term: "vedeṣu", meaning: "in the Vedas" },
    { term: "yat", meaning: "which" },
    { term: "puṇyam", meaning: "merit" },
    { term: "tīrtheṣu", meaning: "in the holy places" },
    { term: "phalam", meaning: "fruit" },
    { term: "tat", meaning: "that" },
    { term: "puruṣaḥ", meaning: "a person" },
    { term: "āpnoti", meaning: "obtains" },
    { term: "stutvā", meaning: "having praised" },
    { term: "devam", meaning: "the Lord" },
    { term: "janārdanam", meaning: "Janārdana" },
    { term: "vāsanāt", meaning: "from the fragrance / presence" },
    { term: "vāsudevasya", meaning: "of Vāsudeva" },
    { term: "vāsitam", meaning: "is suffused" },
    { term: "te", meaning: "your / to you" },
    { term: "jagat", meaning: "world" },
    { term: "trayam", meaning: "the three" },
    { term: "bhūta", meaning: "beings" },
    { term: "nivāsaḥ", meaning: "dwelling" },
    { term: "asi", meaning: "you are" },
    { term: "vāsudeva", meaning: "O Vāsudeva" },
    { term: "namo / namaḥ", meaning: "salutations" },
  ],
  root: group("ba-root", "verse", "", [
    group("ba-rk", "verse", "", [
      group(
        "ba-rk-1",
        "sentence",
        "may this, O Heaven and Earth, be true",
        [
          word("ba-idam", "this", [
            ["इ", "i"],
            ["दं", "daṃ"],
          ]),
          word("ba-dyava", "Heaven", [
            ["द्या", "dyā"],
            ["वा", "vā"],
          ]),
          word("ba-prthivi", "Earth", [
            ["पृ", "pṛ"],
            ["थि", "thi"],
            ["वी", "vī"],
          ]),
          word("ba-satyam", "truth", [
            ["सत्", "sat"],
            ["यम्", "yam"],
          ]),
          word("ba-astu", "may it be", [
            ["अस्", "as"],
            ["तु", "tu"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "ba-rk-2",
        "sentence",
        "O Father, O Mother, which I here address to you two",
        [
          word("ba-pitar", "O Father", [
            ["पि", "pi"],
            ["तर्", "tar"],
          ]),
          word("ba-matar", "O Mother", [
            ["मा", "mā"],
            ["तर्", "tar"],
          ]),
          word("ba-yadi", "which / if", [
            ["य", "ya"],
            ["दि", "di"],
          ]),
          word("ba-iha", "here", [["हो", "ho"]], { trailing: "" }),
          word("ba-upa", "toward", [["प", "pa"]], { trailing: "" }),
          word("ba-bruve", "I speak", [
            ["ब्रु", "bru"],
            ["वे", "ve"],
          ], { trailing: "" }),
          word("ba-vam", "to you two", [["वाम्", "vām"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "ba-rk-3",
        "sentence",
        "be ye the nearest of the gods with your protections",
        [
          word("ba-bhutam", "be ye", [
            ["भू", "bhū"],
            ["तं", "taṃ"],
          ]),
          word("ba-devanam", "of the gods", [
            ["दे", "de"],
            ["वा", "vā"],
            ["ना", "nā"],
            ["म्", "m"],
          ], { trailing: "" }),
          word("ba-avame", "nearest", [
            ["अ", "a"],
            ["व", "va"],
            ["मे", "me"],
          ]),
          word("ba-avobhih", "with protections", [
            ["अ", "a"],
            ["वो", "vo"],
            ["भिः", "bhiḥ"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ],
      ),
      group(
        "ba-rk-4",
        "sentence",
        "may we know nourishment, and the life-giving (away from) sin",
        [
          word("ba-vidyama", "may we know", [
            ["विद्", "vid"],
            ["या", "yā"],
          ], { trailing: "" }),
          word("ba-isam", "nourishment", [
            ["मे", "me"],
            ["षं", "ṣaṃ"],
          ]),
          word("ba-vrjinam", "sin", [
            ["वृ", "vṛ"],
            ["जि", "ji"],
            ["नं", "naṃ"],
          ]),
          word("ba-jiradanum", "life-giving", [
            ["जी", "jī"],
            ["र", "ra"],
            ["दा", "dā"],
            ["नुम्", "num"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
    ]),
    group("ba-keshava", "verse", "", [
      group(
        "ba-keshava-1",
        "sentence",
        "just as water fallen from the sky goes to the ocean, all salutations to the gods go to Keśava",
        [
          word("ba-akasat", "from the sky", [
            ["आ", "ā"],
            ["का", "kā"],
            ["शात्", "śāt"],
          ]),
          word("ba-patitam", "fallen", [
            ["प", "pa"],
            ["ति", "ti"],
            ["तं", "taṃ"],
          ]),
          word("ba-toyam", "water", [
            ["तो", "to"],
            ["यं", "yaṃ"],
          ]),
          word("ba-yatha", "just as", [
            ["य", "ya"],
            ["था", "thā"],
          ]),
          word("ba-gacchati-1", "goes", [
            ["गच्", "gac"],
            ["छ", "cha"],
            ["ति", "ti"],
          ]),
          word("ba-sagaram", "to the ocean", [
            ["सा", "sā"],
            ["ग", "ga"],
            ["रम्", "ram"],
          ], { trailing: " ।", lineBreakAfter: true }),
          word("ba-sarva-1", "all", [
            ["सर्", "sar"],
            ["व", "va"],
          ], { trailing: "" }),
          word("ba-deva", "gods", [
            ["दे", "de"],
            ["व", "va"],
          ]),
          word("ba-namaskarah", "salutation", [
            ["न", "na"],
            ["मस्", "mas"],
            ["का", "kā"],
            ["रः", "raḥ"],
          ]),
          kesavam("ba-kesavam-1"),
          word("ba-prati-1", "toward", [
            ["प्र", "pra"],
            ["ति", "ti"],
          ], { trailing: "" }),
          word("ba-gacchati-2", "goes", [
            ["गच्", "gac"],
            ["छ", "cha"],
            ["ति", "ti"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
      group(
        "ba-keshava-2",
        "sentence",
        "just as water fallen from the sky goes to the ocean, all salutations to the gods go to Keśava",
        [
          word("ba-sri-1", "Śrī", [["श्री", "śrī"]], { trailing: "" }),
          kesavam("ba-kesavam-2"),
          word("ba-prati-2", "toward", [
            ["प्र", "pra"],
            ["ति", "ti"],
          ], { trailing: "" }),
          word("ba-gacchati-3", "goes", [
            ["गच्", "gac"],
            ["छ", "cha"],
          ], { trailing: "" }),
          word("ba-onnam-1", "oṃ", [
            ["त्योन्", "tyon"],
            ["नम्", "nam"],
          ]),
          word("ba-iti-1", "thus", [
            ["इ", "i"],
            ["ति", "ti"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ],
      ),
    ]),
    group("ba-janardana", "verse", "", [
      group(
        "ba-janardana-1",
        "sentence",
        "whatever merit is in all the Vedas, whatever fruit in all tīrthas, that fruit a person obtains having praised Janārdana",
        [
          word("ba-sarva-2", "all", [
            ["सर्", "sar"],
            ["व", "va"],
          ], { trailing: "" }),
          word("ba-vedesu", "in the Vedas", [
            ["वे", "ve"],
            ["दे", "de"],
            ["षु", "ṣu"],
          ]),
          word("ba-yat-1", "which", [["यत्", "yat"]], { trailing: "" }),
          word("ba-punyam", "merit", [
            ["पुण्", "puṇ"],
            ["यं", "yaṃ"],
          ], { trailing: " ।", lineBreakAfter: true }),
          word("ba-sarva-3", "all", [
            ["सर्", "sar"],
            ["व", "va"],
          ], { trailing: "" }),
          word("ba-tirthesu", "in the holy places", [
            ["तीर्", "tīr"],
            ["थे", "the"],
            ["षु", "ṣu"],
          ]),
          word("ba-yat-2", "which", [["यत्", "yat"]], { trailing: "" }),
          word("ba-phalam-1", "fruit", [
            ["फ", "pha"],
            ["लम्", "lam"],
          ], { trailing: " ।", lineBreakAfter: true }),
          word("ba-tat", "that", [["तत्", "tat"]], { trailing: "" }),
          word("ba-phalam-2", "fruit", [
            ["फ", "pha"],
            ["लं", "laṃ"],
          ]),
          word("ba-purusah", "a person", [
            ["पु", "pu"],
            ["रु", "ru"],
            ["षो", "ṣo"],
          ], { trailing: "" }),
          word("ba-apnoti", "obtains", [
            ["ऽप्", "’p"],
            ["नो", "no"],
            ["ति", "ti"],
          ], { lineBreakAfter: true }),
          ...stutvaDevamJanardanam("ba-j1", {
            trailing: " ॥",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "ba-janardana-2",
        "sentence",
        "whatever merit is in all the Vedas, whatever fruit in all tīrthas, that fruit a person obtains having praised Janārdana",
        [
          ...stutvaDevamJanardanam("ba-j2"),
          ...onnamIti("ba-janardana", {
            trailing: " ॥",
            lineBreakAfter: true,
          }),
        ],
      ),
    ]),
    group("ba-vasudeva", "verse", "", [
      group(
        "ba-vasudeva-1",
        "sentence",
        "by the presence of Vāsudeva your three worlds are suffused; you are the dwelling of all beings; O Śrī Vāsudeva, salutations to you",
        [
          word("ba-vasanat", "from the fragrance / presence", [
            ["वा", "vā"],
            ["स", "sa"],
            ["ना", "nā"],
          ], { trailing: "" }),
          word("ba-vasudevasya", "of Vāsudeva", [
            ["द्वा", "dvā"],
            ["सु", "su"],
            ["दे", "de"],
            ["व", "va"],
            ["स्य", "sya"],
          ]),
          word("ba-vasitam", "is suffused", [
            ["वा", "vā"],
            ["सि", "si"],
            ["तं", "taṃ"],
          ]),
          word("ba-te-1", "your / to you", [["ते", "te"]]),
          word("ba-jagat", "world", [
            ["ज", "ja"],
            ["गत्", "gat"],
          ], { trailing: "" }),
          word("ba-trayam", "the three", [
            ["त्र", "tra"],
            ["यम्", "yam"],
          ], { trailing: " ।", lineBreakAfter: true }),
          word("ba-sarva-4", "all", [
            ["सर्", "sar"],
            ["व", "va"],
          ], { trailing: "" }),
          word("ba-bhuta", "beings", [
            ["भू", "bhū"],
            ["त", "ta"],
          ]),
          word("ba-nivasah", "dwelling", [
            ["नि", "ni"],
            ["वा", "vā"],
            ["सो", "so"],
          ], { trailing: "" }),
          word("ba-asi", "you are", [["ऽसि", "’si"]]),
          sri("ba-sri-2"),
          vasudevaVocative("ba-vasudeva-voc-1"),
          ...namoAstuTe("ba-n1", {
            trailing: " ॥",
            lineBreakAfter: true,
          }),
        ],
      ),
      group(
        "ba-vasudeva-2",
        "sentence",
        "by the presence of Vāsudeva your three worlds are suffused; you are the dwelling of all beings; O Śrī Vāsudeva, salutations to you",
        [
          sri("ba-sri-3"),
          vasudevaVocative("ba-vasudeva-voc-2"),
          ...namoAstuTe("ba-n2"),
          ...onnamIti("ba-vasudeva", { trailing: " ॥" }),
        ],
      ),
    ]),
  ]),
};
