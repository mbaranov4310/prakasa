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
    word(`${id}-onnam`, "", [
      ["ओ", "o"],
      ["न्न", "nna"],
      ["म्", "m"],
    ]),
    word(
      `${id}-iti`,
      "",
      [
        ["इ", "i"],
        ["ति", "ti"],
      ],
      options,
    ),
  ];
}

function kesavam(id: string, options?: { lineBreakAfter?: boolean }): SpanNode {
  return word(
    id,
    "Lord Viṣṇu / Śrī Kṛṣṇa",
    [
      ["के", "ke"],
      ["श", "śa"],
      ["वं", "vaṃ"],
    ],
    options,
  );
}

function sriKesavam(id: string): SpanNode {
  return word(id, "Lord Viṣṇu / Śrī Kṛṣṇa", [
    ["श्री", "śrī"],
    ["के", "ke"],
    ["श", "śa"],
    ["वं", "vaṃ"],
  ]);
}

function stutva(id: string): SpanNode {
  return word(id, "having praised", [
    ["स्तु", "stu"],
    ["त्वा", "tvā"],
  ]);
}

function devam(id: string): SpanNode {
  return word(id, "Divine beings / Devatās", [
    ["दे", "de"],
    ["वं", "vaṃ"],
  ]);
}

function janardanam(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode {
  return word(
    id,
    "Lord Viṣṇu, remover of suffering",
    [
      ["ज", "ja"],
      ["ना", "nā"],
      ["र्द", "rda"],
      ["न", "na"],
      ["म्", "m"],
    ],
    options,
  );
}

function sriVasudeva(id: string): SpanNode {
  return word(id, "Supreme Lord, Śrī Kṛṣṇa", [
    ["श्री", "śrī"],
    ["वा", "vā"],
    ["सु", "su"],
    ["दे", "de"],
    ["व", "va"],
  ]);
}

function namostute(
  id: string,
  options?: { trailing?: string; lineBreakAfter?: boolean },
): SpanNode {
  return word(
    id,
    "salutations unto You",
    [
      ["न", "na"],
      ["मो", "mo"],
      ["ऽस्तु", "’stu"],
      ["ते", "te"],
    ],
    options,
  );
}

export const bhumyAkasaAbhivandanam: Chapter = {
  id: "bhumy-akasa-abhivandanam",
  titleDev: "भूम्याकाशाभिवन्दनम्",
  titleIast: "bhūmy-ākāśābhivandanam",
  titleEn: "Bhūmi-ākāśa abhivandana",
  status: "ready",
  translation,
  glossary: [
    { term: "bhūmi", meaning: "Earth" },
    { term: "ākāśa", meaning: "Space / Sky / Ether" },
    { term: "dyāvā", meaning: "Heaven (upper world)" },
    { term: "pṛthivī", meaning: "Earth (lower world)" },
    { term: "satya", meaning: "Truth" },
    { term: "devāḥ", meaning: "Divine beings / Devatās" },
    { term: "namaskāraḥ", meaning: "salutation, bow" },
    { term: "Keshava", meaning: "Lord Viṣṇu / Śrī Kṛṣṇa" },
    { term: "janārdana", meaning: "Lord Viṣṇu, remover of suffering" },
    { term: "puṇyam", meaning: "spiritual merit" },
    { term: "tīrtha", meaning: "holy place / pilgrimage" },
    { term: "phalam", meaning: "fruit/result of spiritual action" },
    {
      term: "vāsanā",
      meaning: "fragrance / subtle presence (here meaning divine permeation)",
    },
    { term: "vāsudeva", meaning: "Supreme Lord, Śrī Kṛṣṇa" },
    {
      term: "jagat-trayam",
      meaning: "the three worlds (earth, mid-region, heavens)",
    },
    {
      term: "sarva-bhūta-nivāsaḥ",
      meaning: "the one who dwells in all beings",
    },
    { term: "idaṃ", meaning: "this" },
    { term: "pitar mātari", meaning: "Father and Mother" },
    {
      term: "adhi ho pravevām",
      meaning: "unto you I speak / call (sandhi-dense form)",
    },
    {
      term: "bhūta-devānām",
      meaning: "of elemental beings and gods",
    },
    {
      term: "avame avobhiḥ",
      meaning: "help me with helps; grant protections",
    },
    { term: "vidyā me", meaning: "knowledge to me" },
    { term: "vrajinaṃ", meaning: "sin, vice" },
    {
      term: "jīradānum",
      meaning: "withering away, growing old and falling off",
    },
    {
      term: "ākāśāt patitaṃ toyaṃ",
      meaning: "water fallen from the sky",
    },
    { term: "sāgaram", meaning: "the ocean" },
    {
      term: "sarva-deva-namaskāraḥ",
      meaning: "all salutations to all gods",
    },
    {
      term: "keśavaṃ pratigacchati",
      meaning: "reach Keśava",
    },
    { term: "sarva-vedeṣu", meaning: "in all the Vedas" },
    {
      term: "sarva-tīrtheṣu",
      meaning: "in all sacred waters/holy places",
    },
    { term: "stutvā", meaning: "having praised" },
    {
      term: "vāsanāt vāsudevasya",
      meaning: "by the all-pervading presence of Vāsudeva",
    },
    {
      term: "vāsitam jagat-trayam",
      meaning: "the three worlds are suffused",
    },
    { term: "namo ’stute", meaning: "salutations unto You" },
  ],
  root: group("ba-verse", "verse", translation, [
    group("ba-heaven-earth", "sentence", heavenEarthMeaning, [
      group(
        "ba-satyam-astu",
        "phrase",
        "May Heaven (Dyāvā) and Earth (Pṛthivī) remain established in Truth.",
        [
          word("ba-idam", "this", [
            ["इ", "i"],
            ["दं", "daṃ"],
          ]),
          word("ba-dyava", "Heaven (upper world)", [
            ["द्या", "dyā"],
            ["वा", "vā"],
          ]),
          word("ba-prthivi", "Earth (lower world)", [
            ["पृ", "pṛ"],
            ["थि", "thi"],
            ["वी", "vī"],
          ]),
          group("ba-satyam-astu-words", "phrase", "may it be truth / firmness", [
            word("ba-satyam", "Truth", [
              ["स", "sa"],
              ["त्यं", "tyaṃ"],
            ]),
            word(
              "ba-astu",
              "",
              [
                ["अ", "a"],
                ["स्तु", "stu"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ]),
        ],
      ),
      group("ba-pitar-matari", "phrase", "Father and Mother", [
        word("ba-pitar-matar-yadi", "Father and Mother", [
          ["पि", "pi"],
          ["तर्", "tar"],
          ["मा", "mā"],
          ["तर्", "tar"],
          ["य", "ya"],
          ["दि", "di"],
        ]),
        word(
          "ba-hopabruvevam",
          "unto you I speak / call (sandhi-dense form)",
          [
            ["हो", "ho"],
            ["प", "pa"],
            ["ब्रु", "bru"],
            ["वे", "ve"],
            ["वा", "vā"],
            ["म्", "m"],
          ],
          { trailing: " ।", lineBreakAfter: true },
        ),
      ]),
      group(
        "ba-avobhih",
        "phrase",
        "help me with helps; grant protections",
        [
          word("ba-bhutam", "", [
            ["भू", "bhū"],
            ["तं", "taṃ"],
          ]),
          word("ba-devanamavame", "Divine beings / Devatās", [
            ["दे", "de"],
            ["वा", "vā"],
            ["ना", "nā"],
            ["म", "ma"],
            ["व", "va"],
            ["मे", "me"],
          ]),
          word(
            "ba-avobhih-word",
            "",
            [
              ["अ", "a"],
              ["वो", "vo"],
              ["भिः", "bhiḥ"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "ba-vidya-vrjina",
        "phrase",
        "The mantra also asks for Vidya (knowledge) and the removal of Vṛjina (sin, wrong tendencies, inner impurity).",
        [
        word("ba-vidya", "", [
          ["वि", "vi"],
          ["द्या", "dyā"],
        ]),
        word("ba-mesam", "", [
          ["मे", "me"],
          ["षं", "ṣaṃ"],
        ]),
        word("ba-vrjinam", "sin, vice", [
          ["वृ", "vṛ"],
          ["जि", "ji"],
          ["नं", "naṃ"],
        ]),
        word(
          "ba-jiradanum",
          "withering away, growing old and falling off",
          [
            ["जी", "jī"],
            ["र", "ra"],
            ["दा", "dā"],
            ["नु", "nu"],
            ["म्", "m"],
          ],
          { trailing: " ॥", lineBreakAfter: true },
        ),
      ]),
    ]),
    group("ba-keshava", "sentence", keshavaMeaning, [
      group(
        "ba-akasa-toyam",
        "phrase",
        "water fallen from the sky",
        [
          word("ba-akasat", "Space / Sky / Ether", [
            ["आ", "ā"],
            ["का", "kā"],
            ["शात्", "śāt"],
          ]),
          word("ba-patitam", "", [
            ["प", "pa"],
            ["ति", "ti"],
            ["तं", "taṃ"],
          ]),
          word("ba-toyam", "", [
            ["तो", "to"],
            ["यं", "yaṃ"],
          ]),
        ],
      ),
      word("ba-yatha", "", [
        ["य", "ya"],
        ["था", "thā"],
      ]),
      word("ba-gacchati-1", "", [
        ["ग", "ga"],
        ["च्छ", "ccha"],
        ["ति", "ti"],
      ]),
      word(
        "ba-sagaram",
        "the ocean",
        [
          ["सा", "sā"],
          ["ग", "ga"],
          ["र", "ra"],
          ["म्", "m"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
      group(
        "ba-sarva-deva-namaskarah",
        "phrase",
        "all salutations to all gods",
        [
          word("ba-sarvadeva", "Divine beings / Devatās", [
            ["स", "sa"],
            ["र्व", "rva"],
            ["दे", "de"],
            ["व", "va"],
          ]),
          word("ba-namaskarah", "salutation, bow", [
            ["न", "na"],
            ["म", "ma"],
            ["स्का", "skā"],
            ["रः", "raḥ"],
          ]),
        ],
      ),
      group("ba-kesavam-pratigacchati", "phrase", "reach Keśava", [
        kesavam("ba-kesavam"),
        word(
          "ba-pratigacchati",
          "",
          [
            ["प्र", "pra"],
            ["ति", "ti"],
            ["ग", "ga"],
            ["च्छ", "ccha"],
            ["ति", "ti"],
          ],
          { trailing: " ॥", lineBreakAfter: true },
        ),
      ]),
      sriKesavam("ba-sri-kesavam"),
      word("ba-pratigacchatyonnam", "", [
        ["प्र", "pra"],
        ["ति", "ti"],
        ["ग", "ga"],
        ["च्छ", "ccha"],
        ["त्यो", "tyo"],
        ["न्न", "nna"],
        ["म्", "m"],
      ]),
      word(
        "ba-iti-1",
        "",
        [
          ["इ", "i"],
          ["ति", "ti"],
        ],
        { trailing: " ॥", lineBreakAfter: true },
      ),
    ]),
    group("ba-janardana", "sentence", janardanaMeaning, [
      word("ba-sarvavedesu", "in all the Vedas", [
        ["स", "sa"],
        ["र्व", "rva"],
        ["वे", "ve"],
        ["दे", "de"],
        ["षु", "ṣu"],
      ]),
      word(
        "ba-yatpunyam",
        "spiritual merit",
        [
          ["य", "ya"],
          ["त्पु", "tpu"],
          ["ण्यं", "ṇyaṃ"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
      word("ba-sarvatirthesu", "in all sacred waters/holy places", [
        ["स", "sa"],
        ["र्व", "rva"],
        ["ती", "tī"],
        ["र्थे", "rthe"],
        ["षु", "ṣu"],
      ]),
      word(
        "ba-yatphalam",
        "fruit/result of spiritual action",
        [
          ["य", "ya"],
          ["त्फ", "tpha"],
          ["ल", "la"],
          ["म्", "m"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
      word("ba-tatphalam", "fruit/result of spiritual action", [
        ["त", "ta"],
        ["त्फ", "tpha"],
        ["लं", "laṃ"],
      ]),
      word(
        "ba-purusopnoti",
        "",
        [
          ["पु", "pu"],
          ["रु", "ru"],
          ["षो", "ṣo"],
          ["ऽप्नो", "’pno"],
          ["ति", "ti"],
        ],
        { lineBreakAfter: true },
      ),
      stutva("ba-stutva-1"),
      devam("ba-devam-1"),
      janardanam("ba-janardanam-1", {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
      stutva("ba-stutva-2"),
      devam("ba-devam-2"),
      janardanam("ba-janardanam-2"),
      ...onnamIti("ba-janardana", {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
    ]),
    group("ba-vasudeva", "sentence", vasudevaMeaning, [
      word(
        "ba-vasanad-vasudevasya",
        "by the all-pervading presence of Vāsudeva",
        [
          ["वा", "vā"],
          ["स", "sa"],
          ["ना", "nā"],
          ["-", "-"],
          ["द्वा", "dvā"],
          ["सु", "su"],
          ["दे", "de"],
          ["व", "va"],
          ["स्य", "sya"],
        ],
      ),
      group(
        "ba-vasitam-jagattrayam",
        "phrase",
        "the three worlds are suffused",
        [
          word("ba-vasitam", "", [
            ["वा", "vā"],
            ["सि", "si"],
            ["तं", "taṃ"],
          ]),
          word("ba-te", "", [["ते", "te"]]),
          word(
            "ba-jagattrayam",
            "the three worlds (earth, mid-region, heavens)",
            [
              ["ज", "ja"],
              ["ग", "ga"],
              ["त्त्र", "ttra"],
              ["य", "ya"],
              ["म्", "m"],
            ],
            { trailing: " ।", lineBreakAfter: true },
          ),
        ],
      ),
      group(
        "ba-sarvabhuta-nivasah",
        "phrase",
        "the one who dwells in all beings",
        [
          word("ba-sarvabhuta", "", [
            ["स", "sa"],
            ["र्व", "rva"],
            ["भू", "bhū"],
            ["त", "ta"],
          ]),
          word("ba-nivasosi", "", [
            ["नि", "ni"],
            ["वा", "vā"],
            ["सो", "so"],
            ["ऽसि", "’si"],
          ]),
        ],
      ),
      sriVasudeva("ba-sri-vasudeva-1"),
      namostute("ba-namostute-1", {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
      sriVasudeva("ba-sri-vasudeva-2"),
      namostute("ba-namostute-2"),
      ...onnamIti("ba-vasudeva", { trailing: " ॥" }),
    ]),
  ]),
};
