import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This hymn is addressed to Mitra, one of the great Vedic deities associated with the Sun. In the Vedic worldview, Mitra is not merely a “god of friendship” in the social sense — Mitra represents the power that creates harmony, trust, agreement, order, and mutual balance in the universe. Mitra is the force by which people cooperate instead of conflict, by which nature stays in rhythm, and by which truth becomes stable in human life. He is closely tied to Ṛta — the cosmic order that holds the worlds together. In this hymn, Mitra is praised as: the one who supports heaven and earth; the one who watches over all beings without blinking; the one who guides people toward right conduct; the one who protects the devotee from harm and misfortune. This is why Mitra Sūktam is recited during Sūryopasthānam: it is a reminder that the rising Sun is not only physical light, but also the awakening of truth, law, and inner discipline. When we recite this in the morning, we are aligning ourselves with a life of: Satya (truth), Ṛta (order), and Dharma (right action). “Mitra’s glory is upheld by all beings.” His radiance is divine and truthful. “Mitra guides all people and protects their lives.” He sustains the earth and the heavens. “Mitra sees all communities without blinking.” To him we offer sacred offerings with purified intention. “May the mortal who follows Mitra’s vow prosper.” The one who lives with discipline becomes blessed. “One protected by Mitra is not destroyed, not defeated.” Misfortune cannot touch him, whether near or far.";

export const mitraSukta: Chapter = {
  id: "mitra-sukta",
  titleDev: "मित्र सूक्तम्",
  titleIast: "mitra sūktam",
  titleEn: "Mitra sūkta (morning sūryopasthāna)",
  status: "ready",
  translation,
  glossary: [
    { term: "mitrasya", meaning: "of Mitra" },
    { term: "carṣaṇi", meaning: "the peoples" },
    { term: "dhṛtaḥ", meaning: "supporter of" },
    { term: "śravaḥ", meaning: "fame / renown" },
    { term: "devasya", meaning: "of the god" },
    { term: "sānasim", meaning: "to be shared / enjoyed by all" },
    { term: "satyam", meaning: "true / truth" },
    { term: "citra-śravaḥ", meaning: "wondrous fame" },
    { term: "tamam", meaning: "most" },
    { term: "mitraḥ", meaning: "Mitra" },
    { term: "janān", meaning: "people" },
    { term: "yātayati", meaning: "sets to their work" },
    { term: "prajānan", meaning: "knowing / distinguishing" },
    { term: "dādhāra", meaning: "has upheld" },
    { term: "pṛthivīm", meaning: "the earth" },
    { term: "uta", meaning: "and also" },
    { term: "dyām", meaning: "the sky" },
    { term: "kṛṣṭīḥ", meaning: "the peoples / tribes" },
    { term: "animiṣā", meaning: "with unblinking (gaze)" },
    { term: "abhi", meaning: "over / toward" },
    { term: "caṣṭe", meaning: "looks" },
    { term: "satyāya", meaning: "for Truth" },
    { term: "havyam", meaning: "oblation" },
    { term: "ghṛtavat", meaning: "ghee-rich" },
    { term: "vidhema", meaning: "we would offer" },
    { term: "pra", meaning: "forth" },
    { term: "saḥ", meaning: "he" },
    { term: "mitra", meaning: "O Mitra" },
    { term: "martaḥ", meaning: "mortal" },
    { term: "astu", meaning: "may he be" },
    { term: "prayasvān", meaning: "possessing the offering" },
    { term: "yaḥ", meaning: "who" },
    { term: "tvā", meaning: "you" },
    { term: "āditya", meaning: "O Āditya" },
    { term: "śikṣati", meaning: "gives (offering) / practices" },
    { term: "vratena", meaning: "by the vow" },
    { term: "na", meaning: "not" },
    { term: "hanyate", meaning: "is slain" },
    { term: "jīyate", meaning: "is defeated" },
    { term: "ūtaḥ", meaning: "protected" },
    { term: "enam", meaning: "him" },
    { term: "aṃhaḥ", meaning: "evil / sin" },
    { term: "aśnoti", meaning: "reaches" },
    { term: "antitaḥ", meaning: "from near" },
    { term: "dūrāt", meaning: "from far" },
  ],
  root: group("ms-verse", "verse", "", [
    group(
      "ms-rk-1",
      "sentence",
      "The renown of the god Mitra, supporter of the peoples, is to be shared; true, of most wondrous fame",
      [
        group(
          "ms-pada-1a",
          "phrase",
          "the renown of the god Mitra, supporter of the peoples, is to be shared",
          [
            word("ms-om", "", [["ॐ", "oṃ"]]),
            word("ms-mitrasya", "of Mitra", [
              ["मि", "mi"],
              ["त्र", "tra"],
              ["स्य", "sya"],
            ]),
            word("ms-carsani", "the peoples", [
              ["च", "ca"],
              ["र्ष", "rṣa"],
              ["णी", "ṇī"],
            ]),
            word("ms-dhrtah", "supporter of", [
              ["धृ", "dhṛ"],
              ["तः", "taḥ"],
            ]),
            word("ms-sravo", "fame / renown", [
              ["श्र", "śra"],
              ["वो", "vo"],
            ]),
            word("ms-devasya", "of the god", [
              ["दे", "de"],
              ["व", "va"],
              ["स्य", "sya"],
            ]),
            word("ms-sanasim", "to be shared / enjoyed by all", [
              ["सा", "sā"],
              ["न", "na"],
              ["सिम्", "sim"],
            ], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ms-pada-1b",
          "phrase",
          "true, of most wondrous fame",
          [
            word("ms-satyam", "true / truth", [
              ["स", "sa"],
              ["त्यं", "tyaṃ"],
            ]),
            word("ms-citrasravah", "wondrous fame", [
              ["चि", "ci"],
              ["त्र", "tra"],
              ["श्र", "śra"],
              ["वः", "vaḥ"],
            ]),
            word("ms-tamam", "most", [
              ["त", "ta"],
              ["मम्", "mam"],
            ], {
              trailing: " ॥",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-2a",
      "sentence",
      "Mitra, knowing the peoples, sets them to their work; Mitra has upheld the earth and also the sky",
      [
        group(
          "ms-pada-2a",
          "phrase",
          "Mitra, knowing the peoples, sets them to their work",
          [
            word("ms-mitro-1", "Mitra", [
              ["मि", "mi"],
              ["त्रो", "tro"],
            ]),
            word("ms-janan", "people", [
              ["ज", "ja"],
              ["नान्", "nān"],
            ]),
            word("ms-yatayati", "sets to their work", [
              ["या", "yā"],
              ["त", "ta"],
              ["य", "ya"],
              ["ति", "ti"],
            ]),
            word("ms-prajanan", "knowing / distinguishing", [
              ["प्र", "pra"],
              ["जा", "jā"],
              ["नन्", "nan"],
            ], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ms-pada-2b",
          "phrase",
          "Mitra has upheld the earth and also the sky",
          [
            word("ms-mitro-2", "Mitra", [
              ["मि", "mi"],
              ["त्रो", "tro"],
            ]),
            word("ms-dadhara", "has upheld", [
              ["दा", "dā"],
              ["धा", "dhā"],
              ["र", "ra"],
            ]),
            word("ms-prthivim", "the earth", [
              ["पृ", "pṛ"],
              ["थि", "thi"],
              ["वीम्", "vīm"],
            ]),
            word("ms-uta", "and also", [
              ["उ", "u"],
              ["त", "ta"],
            ]),
            word("ms-dyam", "the sky", [
              ["द्याम्", "dyām"],
            ], {
              trailing: " ॥",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-2b",
      "sentence",
      "Mitra looks upon the peoples with unblinking gaze; for Truth we would offer a ghee-rich oblation",
      [
        group(
          "ms-pada-2c",
          "phrase",
          "Mitra looks upon the peoples with unblinking gaze",
          [
            word("ms-mitrah", "Mitra", [
              ["मि", "mi"],
              ["त्रः", "traḥ"],
            ]),
            word("ms-krstih", "the peoples / tribes", [
              ["कृ", "kṛ"],
              ["ष्टीः", "ṣṭīḥ"],
            ]),
            word("ms-animisa", "with unblinking (gaze)", [
              ["अ", "a"],
              ["नि", "ni"],
              ["मि", "mi"],
              ["षा", "ṣā"],
            ]),
            word("ms-abhi", "over / toward", [
              ["अ", "a"],
              ["भि", "bhi"],
            ]),
            word("ms-caste", "looks", [
              ["च", "ca"],
              ["ष्टे", "ṣṭe"],
            ], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ms-pada-2d",
          "phrase",
          "for Truth we would offer a ghee-rich oblation",
          [
            word("ms-satyaya", "for Truth", [
              ["स", "sa"],
              ["त्या", "tyā"],
              ["य", "ya"],
            ]),
            word("ms-havyam", "oblation", [
              ["ह", "ha"],
              ["व्यं", "vyaṃ"],
            ]),
            word("ms-ghrtavat", "ghee-rich", [
              ["घृ", "ghṛ"],
              ["त", "ta"],
              ["वत्", "vat"],
            ]),
            word("ms-vidhema", "we would offer", [
              ["वि", "vi"],
              ["धे", "dhe"],
              ["म", "ma"],
            ], {
              trailing: " ॥",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-3a",
      "sentence",
      "O Mitra, may that mortal prosper who, O Āditya, keeps the vow toward you",
      [
        group(
          "ms-pada-3a",
          "phrase",
          "O Mitra, may that mortal prosper",
          [
            word("ms-pra", "forth", [["प्र", "pra"]]),
            word("ms-sa", "he", [["स", "sa"]]),
            word("ms-mitra", "O Mitra", [
              ["मि", "mi"],
              ["त्र", "tra"],
            ]),
            word("ms-marto", "mortal", [
              ["मर्", "mar"],
              ["तो", "to"],
            ]),
            word("ms-astu", "may he be", [
              ["अ", "a"],
              ["स्तु", "stu"],
            ]),
            word("ms-prayasvan", "possessing the offering", [
              ["प्र", "pra"],
              ["य", "ya"],
              ["स्वा", "svā"],
              ["न्", "n"],
            ], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ms-pada-3b",
          "phrase",
          "who, O Āditya, keeps the vow toward you",
          [
            word("ms-yah", "who", [["यस्", "yas"]]),
            word("ms-tva-1", "you", [["त्वा", "tvā"]]),
            word("ms-aditya", "O Āditya", [
              ["आ", "ā"],
              ["दि", "di"],
              ["त्य", "tya"],
            ]),
            word("ms-siksati", "gives (offering) / practices", [
              ["शि", "śi"],
              ["क्ष", "kṣa"],
              ["ति", "ti"],
            ]),
            word("ms-vratena", "by the vow", [
              ["व्र", "vra"],
              ["ते", "te"],
              ["न", "na"],
            ], {
              trailing: " ॥",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-3b",
      "sentence",
      "Protected by you he is not slain, not defeated; sin reaches him neither from near nor from far",
      [
        group(
          "ms-pada-3c",
          "phrase",
          "protected by you he is not slain, not defeated",
          [
            word("ms-na-1", "not", [["न", "na"]]),
            word("ms-hanyate", "is slain", [
              ["ह", "ha"],
              ["न्य", "nya"],
              ["ते", "te"],
            ]),
            word("ms-na-2", "not", [["न", "na"]]),
            word("ms-jiyate", "is defeated", [
              ["जी", "jī"],
              ["य", "ya"],
              ["ते", "te"],
            ]),
            word("ms-tva-2", "you", [["त्वा", "tvā"]]),
            word("ms-utah", "protected", [
              ["ऊ", "ū"],
              ["तः", "taḥ"],
            ], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "ms-pada-3d",
          "phrase",
          "sin reaches him neither from near nor from far",
          [
            word("ms-na-3", "not", [["न", "na"]]),
            word("ms-enam", "him", [
              ["ए", "e"],
              ["नम्", "nam"],
            ]),
            word("ms-amho", "evil / sin", [
              ["अं", "aṃ"],
              ["हो", "ho"],
            ]),
            word("ms-asnoti", "reaches", [
              ["अ", "a"],
              ["श्नो", "śno"],
              ["ति", "ti"],
            ]),
            word("ms-antito", "from near", [
              ["अ", "a"],
              ["न्ति", "nti"],
              ["तो", "to"],
            ]),
            word("ms-na-4", "not", [["न", "na"]]),
            word("ms-durat", "from far", [
              ["दू", "dū"],
              ["रात्", "rāt"],
            ], {
              trailing: " ॥",
            }),
          ],
        ),
      ],
    ),
  ]),
};
