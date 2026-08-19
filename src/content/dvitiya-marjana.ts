import { group, word } from "../lib/span";
import type { Chapter } from "../types";

export const dvitiyaMarjana: Chapter = {
  id: "dvitiya-marjana",
  titleDev: "द्वितीय मार्जनः",
  titleIast: "dvitīya mārjanaḥ",
  titleEn: "Second ritual sprinkling",
  status: "ready",
  translation:
    "This second sprinkling deepens purification. The opening mantra invokes vigor, speed, fragrance, and vitality, asking that life-forces and lifespan be strengthened. The Āpaḥ mantra again praises the waters as sources of joy, nourishment, and clarity. Finally, the prayer asks the waters to generate and renew what has been depleted. Together, this removes subtle fatigue, restores prāṇa, and prepares the sādhaka for the next stages of Sandhyā.",
  glossary: [
    { term: "dadhikrāvṇaḥ", meaning: "Dadhikrāvan" },
    { term: "akāriṣam", meaning: "I have performed" },
    { term: "jiṣṇoḥ", meaning: "of the victorious" },
    { term: "aśvasya", meaning: "of the horse" },
    { term: "vājinaḥ", meaning: "of the vigorous (possessed of vāja)" },
    { term: "surabhi", meaning: "fragrant" },
    { term: "mukhā", meaning: "mouths / faces" },
    { term: "tāriṣat", meaning: "may he carry across" },
    { term: "āpaḥ", meaning: "waters (here: sacred)" },
  ],
  root: group("dm-verse", "verse", "", [
    group(
      "dm-dadhikravan",
      "sentence",
      "Sāyaṇa: I praise the god Dadhikrāvan, the victorious horse · Nārāyaṇa: invocation of Paramātman. May he make our mouths fragrant; may he carry our lives across.",
      [
        group(
          "dm-dk-identity",
          "phrase",
          "Sāyaṇa: I praise the god Dadhikrāvan, the victorious horse · Nārāyaṇa: invocation of Paramātman",
          [
            word("dm-dadhikravnno", "Dadhikrāvan", [
              ["द", "da"],
              ["धि", "dhi"],
              ["क्रा", "krā"],
              ["व्ण्णो", "vṇṇo"],
            ]),
            word("dm-akarisam", "I have performed", [
              ["अ", "a"],
              ["का", "kā"],
              ["रि", "ri"],
              ["ष", "ṣa"],
              ["म्", "m"],
            ]),
            word("dm-jisnoh", "of the victorious", [
              ["जि", "ji"],
              ["ष्णो", "ṣṇo"],
            ], { trailing: "" }),
            word("dm-asvasya", "of the horse", [
              ["र", "ra"],
              ["श्व", "śva"],
              ["स्य", "sya"],
            ]),
            word("dm-vajinah", "of the vigorous (possessed of vāja)", [
              ["वा", "vā"],
              ["जि", "ji"],
              ["नः", "naḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "dm-dk-mouths",
          "phrase",
          "may he make our mouths fragrant (here: speech)",
          [
            word("dm-surabhi", "fragrant", [
              ["सु", "su"],
              ["र", "ra"],
              ["भि", "bhi"],
            ], { trailing: "" }),
            word("dm-nah-mouths", "our", [["णो", "ṇo"]]),
            word("dm-mukha", "mouths / faces", [
              ["मु", "mu"],
              ["खा", "khā"],
            ]),
            word("dm-karat", "may he make", [
              ["क", "ka"],
              ["र", "ra"],
              ["त्", "t"],
            ]),
          ],
        ),
        group(
          "dm-dk-lives",
          "phrase",
          "may he carry our lives across (here: make them excellent and unafflicted)",
          [
            word("dm-pra", "forth", [["प्रा", "prā"]]),
            word("dm-nah-lives", "our", [["ण", "ṇa"]]),
            word("dm-ayumsi", "lifespans", [
              ["आ", "ā"],
              ["यू", "yū"],
              ["ङ्षि", "ṅṣi"],
            ]),
            word("dm-tarisat", "may he carry across", [
              ["ता", "tā"],
              ["रि", "ri"],
              ["ष", "ṣa"],
              ["त्", "t"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "dm-apah-1",
      "sentence",
      "waters, you are indeed sources of joy",
      [
        word("dm-om", "primordial sound", [["ॐ", "oṃ"]]),
        group(
          "dm-pada-1a",
          "phrase",
          "waters, you are indeed sources of joy",
          [
            word("dm-apo-1", "waters (here: sacred)", [
              ["आ", "ā"],
              ["पो", "po"],
            ]),
            word("dm-hi", "indeed", [["हि", "hi"]]),
            word("dm-stha", "you are", [["ष्ठा", "ṣṭhā"]]),
            word("dm-mayo", "joy", [
              ["म", "ma"],
              ["यो", "yo"],
            ], { trailing: "" }),
            word("dm-bhuvah", "becoming / source", [
              ["भु", "bhu"],
              ["वः", "vaḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "dm-apah-2",
      "sentence",
      "bestow strength on us; for great joy / battle, for sight",
      [
        group(
          "dm-pada-1b",
          "phrase",
          "bestow strength on us",
          [
            word("dm-ta", "they", [["ता", "tā"]]),
            word("dm-na", "us", [["न", "na"]]),
            word("dm-urje", "for strength", [
              ["ऊ", "ū"],
              ["र्जे", "rje"],
            ]),
            word("dm-dadhatana", "bestow", [
              ["द", "da"],
              ["धा", "dhā"],
              ["त", "ta"],
              ["न", "na"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "dm-pada-1c",
          "phrase",
          "for great joy / battle, for sight",
          [
            word("dm-mahe", "for the great", [
              ["म", "ma"],
              ["हे", "he"],
            ]),
            word("dm-ranaya", "for joy / for battle", [
              ["र", "ra"],
              ["णा", "ṇā"],
              ["य", "ya"],
            ]),
            word("dm-caksase", "for sight", [
              ["च", "ca"],
              ["क्ष", "kṣa"],
              ["से", "se"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "dm-apah-3",
      "sentence",
      "which is your most auspicious essence; grant us a share of that here",
      [
        group(
          "dm-pada-2a",
          "phrase",
          "which is your most auspicious essence",
          [
            word("dm-yo", "which", [["यो", "yo"]]),
            word("dm-vah", "your", [["वः", "vaḥ"]]),
            group("dm-sivatamo-rasah", "phrase", "the most auspicious essence", [
              word("dm-sivatamo", "most auspicious", [
                ["शि", "śi"],
                ["व", "va"],
                ["त", "ta"],
                ["मो", "mo"],
              ]),
              word("dm-rasah", "essence", [
                ["र", "ra"],
                ["सः", "saḥ"],
              ], { trailing: " ।", lineBreakAfter: true }),
            ]),
          ],
        ),
        group(
          "dm-pada-2b",
          "phrase",
          "grant us a share of that here",
          [
            word("dm-tasya", "of that", [
              ["त", "ta"],
              ["स्य", "sya"],
            ]),
            word("dm-bhajayate", "grant a share", [
              ["भा", "bhā"],
              ["ज", "ja"],
              ["य", "ya"],
              ["ते", "te"],
            ], { trailing: "" }),
            word("dm-ha", "here", [["ह", "ha"]]),
            word("dm-nah-1", "us", [["नः", "naḥ"]], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "dm-apah-4",
      "sentence",
      "like loving mothers",
      [
        group(
          "dm-pada-2c",
          "phrase",
          "like loving mothers",
          [
            word("dm-usatir", "loving", [
              ["उ", "u"],
              ["श", "śa"],
              ["ती", "tī"],
              ["रि", "ri"],
            ], { trailing: "" }),
            word("dm-iva", "like", [["व", "va"]]),
            word("dm-matarah", "mothers", [
              ["मा", "mā"],
              ["त", "ta"],
              ["रः", "raḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "dm-apah-5",
      "sentence",
      "for that, let us go fittingly to you",
      [
        group(
          "dm-pada-3a",
          "phrase",
          "for that, let us go fittingly to you",
          [
            word("dm-tasma", "for that", [
              ["त", "ta"],
              ["स्मा", "smā"],
            ]),
            word("dm-aram", "fittingly / quickly", [
              ["अ", "a"],
              ["रं", "raṃ"],
            ]),
            word("dm-gamama", "let us go", [
              ["ग", "ga"],
              ["मा", "mā"],
              ["म", "ma"],
            ]),
            word("dm-vah-to", "to you", [
              ["वः", "vaḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "dm-apah-6",
      "sentence",
      "Sāyaṇa: for the destruction of sin (sprinkling) · Sāyaṇa: for the dwelling of food · Bhaṭṭabhāskara: the person as the abode of rasa; and, waters, you produce us",
      [
        group(
          "dm-pada-3b",
          "phrase",
          "Sāyaṇa: for the destruction of sin (sprinkling) · Sāyaṇa: for the dwelling of food · Bhaṭṭabhāskara: the person as the abode of rasa",
          [
            word("dm-yasya", "whose", [
              ["य", "ya"],
              ["स्य", "sya"],
            ]),
            word("dm-ksayaya", "for destruction / for the abode", [
              ["क्ष", "kṣa"],
              ["या", "yā"],
              ["य", "ya"],
            ]),
            word("dm-jinvatha", "you invigorate / nourish", [
              ["जि", "ji"],
              ["न्व", "nva"],
              ["थ", "tha"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "dm-pada-3c",
          "phrase",
          "and, waters, you produce us",
          [
            word("dm-apo-2", "waters (here: sacred)", [
              ["आ", "ā"],
              ["पो", "po"],
            ]),
            word("dm-janayatha", "you produce", [
              ["ज", "ja"],
              ["न", "na"],
              ["य", "ya"],
              ["था", "thā"],
            ]),
            word("dm-ca", "and", [["च", "ca"]]),
            word("dm-nah-2", "us", [["नः", "naḥ"]], { trailing: " ॥" }),
          ],
        ),
      ],
    ),
  ]),
};
