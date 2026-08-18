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
    { term: "carṣaṇī-dhṛtaḥ", meaning: "upheld/borne by peoples" },
    { term: "śravaḥ", meaning: "renown, praise" },
    { term: "sānasiṃ", meaning: "lofty seat, high abode" },
    { term: "citra-śravastamam", meaning: "of wondrous, most brilliant fame" },
    { term: "mitraḥ", meaning: "Mitra" },
    { term: "janān / prajānān", meaning: "people, creatures" },
    { term: "yātayati", meaning: "guides, orders" },
    { term: "dādhāra", meaning: "has supported/upheld" },
    { term: "pṛthivīm uta dyām", meaning: "the earth and also the sky" },
    { term: "kṛṣṭīḥ", meaning: "tribes, nations" },
    { term: "animiṣā", meaning: "with unblinking eyes" },
    { term: "abhi caṣṭe", meaning: "looks upon" },
    { term: "satyāya", meaning: "for Truth" },
    { term: "havyaṃ", meaning: "oblation" },
    { term: "ghṛtavat", meaning: "rich in ghee" },
    { term: "vidhēma", meaning: "we arrange/prepare" },
    { term: "pra sa … astu", meaning: "may he go forth/be aligned" },
    { term: "martyaḥ", meaning: "mortal human" },
    { term: "prayasvān", meaning: "zealous, earnest" },
    { term: "āditya", meaning: "O Āditya (Sun)" },
    { term: "śikṣati", meaning: "follows/keeps" },
    { term: "vratēna", meaning: "with/through (your) vow" },
    { term: "na hanyatē", meaning: "is not slain" },
    { term: "na jīyatē", meaning: "is not defeated" },
    { term: "tv-ōtaḥ", meaning: "through you, by your protection" },
    { term: "aghmaḥ", meaning: "sin, evil" },
    { term: "aśnōti", meaning: "reaches" },
    { term: "antitaḥ na dūrāt", meaning: "neither from near nor from far" },
  ],
  root: group("ms-verse", "verse", translation, [
    group(
      "ms-rk-1",
      "sentence",
      "“Mitra’s glory is upheld by all beings.” His radiance is divine and truthful.",
      [
        group(
          "ms-pada-1a",
          "phrase",
          "“Mitra’s glory is upheld by all beings.”",
          [
            word("ms-om", "", [["ॐ", "oṃ"]]),
            word("ms-mitrasya", "of Mitra", [
              ["मि", "mi"],
              ["त्र", "tra"],
              ["स्य", "sya"],
            ]),
            word("ms-carsanidhrtah", "upheld/borne by peoples", [
              ["च", "ca"],
              ["र्ष", "rṣa"],
              ["णी", "ṇī"],
              ["धृ", "dhṛ"],
              ["तः", "taḥ"],
            ]),
            word("ms-sravo", "renown, praise", [
              ["श्र", "śra"],
              ["वो", "vo"],
            ]),
            word("ms-devasya", "", [
              ["दे", "de"],
              ["व", "va"],
              ["स्य", "sya"],
            ]),
            word(
              "ms-sanasim",
              "lofty seat, high abode",
              [
                ["सा", "sā"],
                ["न", "na"],
                ["सि", "si"],
                ["म्", "m"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ms-pada-1b",
          "phrase",
          "His radiance is divine and truthful.",
          [
            word("ms-satyam", "", [
              ["स", "sa"],
              ["त्यं", "tyaṃ"],
            ]),
            word(
              "ms-citrasravastamam",
              "of wondrous, most brilliant fame",
              [
                ["चि", "ci"],
                ["त्र", "tra"],
                ["श्र", "śra"],
                ["व", "va"],
                ["स्त", "sta"],
                ["म", "ma"],
                ["म्", "m"],
              ],
              { trailing: " ॥", lineBreakAfter: true },
            ),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-2a",
      "sentence",
      "“Mitra guides all people and protects their lives.” He sustains the earth and the heavens.",
      [
        group(
          "ms-pada-2a",
          "phrase",
          "“Mitra guides all people and protects their lives.”",
          [
            word("ms-mitro-1", "Mitra", [
              ["मि", "mi"],
              ["त्रो", "tro"],
            ]),
            word("ms-jananyatayati", "", [
              ["ज", "ja"],
              ["ना", "nā"],
              ["न्या", "nyā"],
              ["त", "ta"],
              ["य", "ya"],
              ["ति", "ti"],
            ]),
            word(
              "ms-prajanan",
              "people, creatures",
              [
                ["प्र", "pra"],
                ["जा", "jā"],
                ["नन्", "nan"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ms-pada-2b",
          "phrase",
          "He sustains the earth and the heavens.",
          [
            word("ms-mitro-2", "Mitra", [
              ["मि", "mi"],
              ["त्रो", "tro"],
            ]),
            word("ms-dadhara", "has supported/upheld", [
              ["दा", "dā"],
              ["धा", "dhā"],
              ["र", "ra"],
            ]),
            group(
              "ms-prthivim-uta-dyam",
              "phrase",
              "the earth and also the sky",
              [
                word("ms-prthivim", "the earth and also the sky", [
                  ["पृ", "pṛ"],
                  ["थि", "thi"],
                  ["वी", "vī"],
                  ["म्", "m"],
                ]),
                word("ms-uta", "the earth and also the sky", [["उ", "u"], ["त", "ta"]]),
                word(
                  "ms-dyam",
                  "the earth and also the sky",
                  [
                    ["द्या", "dyā"],
                    ["म्", "m"],
                  ],
                  { trailing: " ॥", lineBreakAfter: true },
                ),
              ],
            ),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-2b",
      "sentence",
      "“Mitra sees all communities without blinking.” To him we offer sacred offerings with purified intention.",
      [
        group(
          "ms-pada-2c",
          "phrase",
          "“Mitra sees all communities without blinking.”",
          [
            word("ms-mitrah", "Mitra", [
              ["मि", "mi"],
              ["त्रः", "traḥ"],
            ]),
            word("ms-krstiraninmisa", "", [
              ["कृष्टी", "kṛṣṭī"],
              ["र", "ra"],
              ["नि", "ni"],
              ["मि", "mi"],
              ["षा", "ṣā"],
            ]),
            group("ms-abhi-caste", "phrase", "looks upon", [
              word("ms-abhi", "looks upon", [
                ["अ", "a"],
                ["भि", "bhi"],
              ]),
              word(
                "ms-caste",
                "looks upon",
                [
                  ["च", "ca"],
                  ["ष्टे", "ṣṭe"],
                ],
                { trailing: " ।", lineBreakAfter: true },
              ),
            ]),
          ],
        ),
        group(
          "ms-pada-2d",
          "phrase",
          "To him we offer sacred offerings with purified intention.",
          [
            word("ms-satyaya", "for Truth", [
              ["स", "sa"],
              ["त्या", "tyā"],
              ["य", "ya"],
            ]),
            word("ms-havyam", "oblation", [
              ["ह", "ha"],
              ["व्य", "vya"],
              ["म्", "m"],
            ]),
            word("ms-ghrtavat", "rich in ghee", [
              ["घृ", "ghṛ"],
              ["त", "ta"],
              ["व", "va"],
              ["त्", "t"],
            ]),
            word(
              "ms-vidhema",
              "we arrange/prepare",
              [
                ["वि", "vi"],
                ["धे", "dhe"],
                ["म", "ma"],
              ],
              { trailing: " ॥", lineBreakAfter: true },
            ),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-3a",
      "sentence",
      "“May the mortal who follows Mitra’s vow prosper.” The one who lives with discipline becomes blessed.",
      [
        group(
          "ms-pada-3a",
          "phrase",
          "“May the mortal who follows Mitra’s vow prosper.”",
          [
            word("ms-pra", "may he go forth/be aligned", [["प्र", "pra"]]),
            word("ms-sa", "may he go forth/be aligned", [["स", "sa"]]),
            word("ms-mitra", "Mitra", [
              ["मि", "mi"],
              ["त्र", "tra"],
            ]),
            word("ms-marto", "mortal human", [
              ["मर्", "mar"],
              ["तो", "to"],
            ]),
            word("ms-astu", "may he go forth/be aligned", [
              ["अ", "a"],
              ["स्तु", "stu"],
            ]),
            word(
              "ms-prayasvan",
              "zealous, earnest",
              [
                ["प्र", "pra"],
                ["य", "ya"],
                ["स्वा", "svā"],
                ["न्", "n"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ms-pada-3b",
          "phrase",
          "The one who lives with discipline becomes blessed.",
          [
            word("ms-yastva", "", [
              ["यस्", "yas"],
              ["त्वा", "tvā"],
            ]),
            word("ms-aditya", "O Āditya (Sun)", [
              ["आ", "ā"],
              ["दि", "di"],
              ["त्य", "tya"],
            ]),
            word("ms-siksati", "follows/keeps", [
              ["शि", "śi"],
              ["क्ष", "kṣa"],
              ["ति", "ti"],
            ]),
            word(
              "ms-vratena",
              "with/through (your) vow",
              [
                ["व्र", "vra"],
                ["ते", "te"],
                ["न", "na"],
              ],
              { trailing: " ॥", lineBreakAfter: true },
            ),
          ],
        ),
      ],
    ),
    group(
      "ms-rk-3b",
      "sentence",
      "“One protected by Mitra is not destroyed, not defeated.” Misfortune cannot touch him, whether near or far.",
      [
        group(
          "ms-pada-3c",
          "phrase",
          "“One protected by Mitra is not destroyed, not defeated.”",
          [
            group("ms-na-hanyate", "phrase", "is not slain", [
              word("ms-na-1", "is not slain", [["न", "na"]]),
              word("ms-hanyate", "is not slain", [
                ["ह", "ha"],
                ["न्य", "nya"],
                ["ते", "te"],
              ]),
            ]),
            group("ms-na-jiyate", "phrase", "is not defeated", [
              word("ms-na-2", "is not defeated", [["न", "na"]]),
              word("ms-jiyate", "is not defeated", [
                ["जी", "jī"],
                ["य", "ya"],
                ["ते", "te"],
              ]),
            ]),
            word(
              "ms-tvotah",
              "through you, by your protection",
              [
                ["त्वो", "tvo"],
                ["तः", "taḥ"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ],
        ),
        group(
          "ms-pada-3d",
          "phrase",
          "Misfortune cannot touch him, whether near or far.",
          [
            word("ms-nainam", "", [
              ["नै", "nai"],
              ["नम्", "nam"],
            ]),
            word("ms-amho", "sin, evil", [
              ["अं", "aṃ"],
              ["हो", "ho"],
            ]),
            word("ms-asnoti", "reaches", [
              ["अ", "a"],
              ["श्नो", "śno"],
              ["ति", "ti"],
            ]),
            group(
              "ms-antito-na-durat",
              "phrase",
              "neither from near nor from far",
              [
                word("ms-antito", "neither from near nor from far", [
                  ["अ", "a"],
                  ["न्ति", "nti"],
                  ["तो", "to"],
                ]),
                word("ms-na-3", "neither from near nor from far", [["न", "na"]]),
                word(
                  "ms-durat",
                  "neither from near nor from far",
                  [
                    ["दू", "dū"],
                    ["रा", "rā"],
                    ["त्", "t"],
                  ],
                  { trailing: " ॥" },
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  ]),
};
