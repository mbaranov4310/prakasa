import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This chapter invokes Gāyatrī Devi before japa begins. We declare: Om as the one imperishable Brahman; Agni as the presiding deity; Gāyatrī as the sacred meter; Paramātma as the true form. We then invite Gāyatrī, the boon-giving Mother, to accept our worship through her own sacred meter. The mantra affirms that sins done by day or night are released, and praises Gāyatrī as Sarasvatī, the Sandhyā-Vidya, the power of all sounds. The final section infuses strength, brilliance, life-force, and universality, preparing the chanter for focused Gāyatrī Japa.";

export const gayatriAvahanam: Chapter = {
  id: "gayatri-avahanam",
  titleDev: "गायत्री आवाहनम्",
  titleIast: "gāyatrī āvāhanam",
  titleEn: "Gāyatrī Invocation",
  status: "ready",
  translation,
  glossary: [
    { term: "juṣasva", meaning: "please accept" },
    { term: "ojas", meaning: "vigor" },
    { term: "viniyogaḥ", meaning: "application" },
  ],
  root: group("ga-verse", "verse", "", [
    group(
      "ga-declare",
      "sentence",
      "Om — thus the one syllable, Brahman. Agni is the deity. Gāyatra is the meter. The supreme Self is the own-form. Union is the application.",
      [
        group("ga-om-brahma", "phrase", "Om — thus the one syllable, Brahman", [
          word("ga-om-1", "primordial sound", [["ॐ", "oṃ"]]),
          word("ga-iti-1", "thus", [
            ["इ", "i"],
            ["त्ये", "tye"],
          ], { trailing: "" }),
          word("ga-eka", "one", [["का", "kā"]], { trailing: "" }),
          word("ga-aksaram", "syllable", [
            ["क्ष", "kṣa"],
            ["रं", "raṃ"],
          ]),
          word("ga-brahma-1", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group("ga-agni", "phrase", "Agni is the deity", [
          word("ga-agnih", "Agni", [
            ["अ", "a"],
            ["ग्नि", "gni"],
            ["र्", "r"],
          ], { trailing: "" }),
          word("ga-devata", "the deity", [
            ["दे", "de"],
            ["व", "va"],
            ["ता", "tā"],
          ]),
          word("ga-brahma-2", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ]),
          word("ga-iti-2", "thus", [
            ["इ", "i"],
            ["त्या", "tyā"],
          ], { trailing: "" }),
          word("ga-arsam", "of the ṛṣi / the seer-application", [
            ["र्ष", "rṣa"],
            ["म्", "m"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group("ga-gayatra-chandas", "phrase", "Gāyatra is the meter", [
          word("ga-gayatram", "gāyatra (the Gāyatrī meter)", [
            ["गा", "gā"],
            ["य", "ya"],
            ["त्रं", "traṃ"],
          ]),
          word("ga-chandah", "meter", [
            ["छ", "cha"],
            ["न्दः", "ndaḥ"],
          ]),
        ]),
        group("ga-paramatma", "phrase", "the supreme Self is the own-form", [
          word("ga-parama", "supreme", [
            ["प", "pa"],
            ["र", "ra"],
            ["मा", "mā"],
          ], { trailing: "" }),
          word("ga-atma", "Self", [["त्मा", "tmā"]]),
          word("ga-svarupam", "own form", [
            ["स्व", "sva"],
            ["रू", "rū"],
            ["प", "pa"],
            ["म्", "m"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
        group("ga-viniyoga", "phrase", "union is the application", [
          word("ga-sayujyam", "union", [
            ["सा", "sā"],
            ["यु", "yu"],
            ["ज्यं", "jyaṃ"],
          ]),
          word("ga-viniyogah", "application", [
            ["वि", "vi"],
            ["नि", "ni"],
            ["यो", "yo"],
            ["गः", "gaḥ"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "ga-invite",
      "sentence",
      "May the boon-giving goddess come, commensurate with imperishable Brahman. O mother, with the Gāyatrī meter, accept this Brahman of mine.",
      [
        group(
          "ga-ayatu",
          "phrase",
          "May the boon-giving goddess come, commensurate with imperishable Brahman",
          [
            word("ga-ayatu-word", "may she come", [
              ["आ", "ā"],
              ["या", "yā"],
              ["तु", "tu"],
            ]),
            word("ga-varada", "boon-giving", [
              ["व", "va"],
              ["र", "ra"],
              ["दा", "dā"],
            ]),
            word("ga-devi", "goddess", [
              ["दे", "de"],
              ["वी", "vī"],
            ], { lineBreakAfter: true }),
            word("ga-aksaram-2", "syllable", [
              ["अ", "a"],
              ["क्ष", "kṣa"],
              ["र", "ra"],
            ], { trailing: "" }),
            word("ga-brahma-invite", "Brahman", [
              ["ब्र", "bra"],
              ["ह्म", "hma"],
            ], { trailing: "" }),
            word("ga-sammitam", "commensurate with", [
              ["स", "sa"],
              ["म्मि", "mmi"],
              ["त", "ta"],
              ["म्", "m"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "ga-jusasva-pada",
          "phrase",
          "O mother, with the Gāyatrī meter, accept this Brahman of mine",
          [
            word("ga-gayatri", "Gāyatrī", [
              ["गा", "gā"],
              ["य", "ya"],
              ["त्री", "trī"],
            ], { trailing: "" }),
            word("ga-chandasa", "with the meter", [
              ["छ", "cha"],
              ["न्द", "nda"],
              ["सा", "sā"],
            ]),
            word("ga-mate", "O mother", [
              ["मा", "mā"],
              ["ते", "te"],
            ], { trailing: "" }),
            word("ga-idam", "this", [["दं", "daṃ"]], { lineBreakAfter: true }),
            word("ga-brahma-3", "Brahman", [
              ["ब्र", "bra"],
              ["ह्म", "hma"],
            ]),
            word("ga-jusasva", "please accept", [
              ["जु", "ju"],
              ["ष", "ṣa"],
              ["स्व", "sva"],
            ]),
            word("ga-me", "mine", [["मे", "me"]], {
              trailing: " ॥",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "ga-papa",
      "sentence",
      "whatever sin one does by day is released by day; whatever sin one does by night is released by night",
      [
        group(
          "ga-papa-day",
          "phrase",
          "whatever sin one does by day is released by day",
          [
            word("ga-yad-1", "which", [
              ["य", "ya"],
              ["द", "da"],
            ], { trailing: "" }),
            word("ga-ahna-1", "by day", [["ह्ना", "hnā"]]),
            word("ga-kurute-1", "does", [
              ["कु", "ku"],
              ["रु", "ru"],
              ["ते", "te"],
            ]),
            word("ga-papam-1", "sin", [
              ["पा", "pā"],
              ["पं", "paṃ"],
            ]),
            word("ga-tad-1", "that", [
              ["त", "ta"],
              ["द", "da"],
            ], { trailing: "" }),
            word("ga-ahna-2", "by day", [["ह्ना", "hnā"]]),
            word("ga-pratimucyate-1", "is released", [
              ["प्र", "pra"],
              ["ति", "ti"],
              ["मु", "mu"],
              ["च्य", "cya"],
              ["ते", "te"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
        group(
          "ga-papa-night",
          "phrase",
          "whatever sin one does by night is released by night",
          [
            word("ga-yad-2", "which", [["यद्", "yad"]], { trailing: "" }),
            word("ga-ratrya-1", "by night", [
              ["रा", "rā"],
              ["त्र्या", "tryā"],
            ]),
            word("ga-kurute-2", "does", [
              ["कु", "ku"],
              ["रु", "ru"],
              ["ते", "te"],
            ]),
            word("ga-papam-2", "sin", [
              ["पा", "pā"],
              ["पं", "paṃ"],
            ]),
            word("ga-tad-2", "that", [["तद्", "tad"]], { trailing: "" }),
            word("ga-ratrya-2", "by night", [
              ["रा", "rā"],
              ["त्र्या", "tryā"],
            ]),
            word("ga-pratimucyate-2", "is released", [
              ["प्र", "pra"],
              ["ति", "ti"],
              ["मु", "mu"],
              ["च्य", "cya"],
              ["ते", "te"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "ga-praise",
      "sentence",
      "O you of all syllables, O great goddess, O knowledge of Sandhyā, O Sarasvatī",
      [
        word("ga-sarva", "all", [
          ["स", "sa"],
          ["र्व", "rva"],
        ], { trailing: "" }),
        word("ga-varne", "O you of syllables", [
          ["व", "va"],
          ["र्णे", "rṇe"],
        ]),
        word("ga-maha", "great", [
          ["म", "ma"],
          ["हा", "hā"],
        ], { trailing: "" }),
        word("ga-devi-2", "O goddess", [
          ["दे", "de"],
          ["वि", "vi"],
        ]),
        word("ga-sandhya", "Sandhyā", [
          ["स", "sa"],
          ["न्ध्या", "ndhyā"],
        ], { trailing: "" }),
        word("ga-vidye", "O knowledge", [
          ["वि", "vi"],
          ["द्ये", "dye"],
        ]),
        word("ga-sarasvati", "O Sarasvatī", [
          ["स", "sa"],
          ["र", "ra"],
          ["स्व", "sva"],
          ["ति", "ti"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group(
      "ga-ojas",
      "sentence",
      "You are ojas, you are might, you are strength. You are brilliance, you are the abode/name of the gods. You are the all, all-life, everything, the overlord of all life.",
      [
        group(
          "ga-ojas-line",
          "phrase",
          "You are ojas, you are might, you are strength",
          [
            word("ga-ojas", "vigor", [
              ["ओ", "o"],
              ["जो", "jo"],
            ], { trailing: "" }),
            word("ga-asi-1", "you are", [["ऽसि", "'si"]]),
            word("ga-sahas", "might", [
              ["स", "sa"],
              ["हो", "ho"],
            ], { trailing: "" }),
            word("ga-asi-2", "you are", [["ऽसि", "'si"]]),
            word("ga-balam", "strength", [
              ["ब", "ba"],
              ["ल", "la"],
              ["म", "ma"],
            ], { trailing: "" }),
            word("ga-asi-3", "you are", [["सि", "si"]], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ga-bhrajas-line",
          "phrase",
          "You are brilliance, you are the abode/name of the gods",
          [
            word("ga-bhrajas", "brilliance", [
              ["भ्रा", "bhrā"],
              ["जो", "jo"],
            ], { trailing: "" }),
            word("ga-asi-4", "you are", [["ऽसि", "'si"]]),
            word("ga-devanam", "of the gods", [
              ["दे", "de"],
              ["वा", "vā"],
              ["नां", "nāṃ"],
            ]),
            word("ga-dhama", "abode", [
              ["धा", "dhā"],
              ["म", "ma"],
            ], { trailing: "" }),
            word("ga-nama", "name", [
              ["ना", "nā"],
              ["म", "ma"],
            ], { trailing: "" }),
            word("ga-asi-5", "you are", [["सि", "si"]], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ga-visva-line",
          "phrase",
          "You are the all, all-life, everything",
          [
            word("ga-visvam", "the all", [
              ["वि", "vi"],
              ["श्व", "śva"],
              ["म", "ma"],
            ], { trailing: "" }),
            word("ga-asi-6", "you are", [["सि", "si"]]),
            word("ga-visvayuh", "all-life", [
              ["वि", "vi"],
              ["श्वा", "śvā"],
              ["युः", "yuḥ"],
            ]),
            word("ga-sarvam", "everything", [
              ["स", "sa"],
              ["र्व", "rva"],
              ["म", "ma"],
            ], { trailing: "" }),
            word("ga-asi-7", "you are", [["सि", "si"]], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ga-sarvayuh-line",
          "phrase",
          "the overlord of all life",
          [
            word("ga-sarvayuh", "all-life", [
              ["स", "sa"],
              ["र्वा", "rvā"],
              ["यु", "yu"],
              ["र", "ra"],
            ], { trailing: "" }),
            word("ga-abhibhuh", "overlord", [
              ["भि", "bhi"],
              ["भूर्", "bhūr"],
            ]),
            word("ga-om-2", "primordial sound", [["ॐ", "oṃ"]], {
              trailing: " ॥",
            }),
          ],
        ),
      ],
    ),
  ]),
};
