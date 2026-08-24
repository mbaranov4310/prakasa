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
    { term: "ā", meaning: "from / as far as" },
    { term: "brahma", meaning: "Brahman" },
    { term: "lokād", meaning: "from the world" },
    { term: "aśeṣād", meaning: "without remainder" },
    { term: "ālokāloka", meaning: "Ālokāloka" },
    { term: "parvatām", meaning: "mountain" },
    { term: "ye", meaning: "who" },
    { term: "santi", meaning: "exist" },
    { term: "brāhmaṇa", meaning: "brāhmaṇas" },
    { term: "devāḥ", meaning: "gods" },
    { term: "tebhyaḥ", meaning: "to them" },
    { term: "nityam", meaning: "always" },
    { term: "namo / namaḥ", meaning: "salutations" },
    { term: "kāyena", meaning: "by the body" },
    { term: "vācā", meaning: "by speech" },
    { term: "manasā", meaning: "by the mind" },
    { term: "indriyaiḥ", meaning: "by the senses" },
    { term: "vā", meaning: "or" },
    { term: "buddhyā", meaning: "by the intellect" },
    { term: "ātmanā", meaning: "by the self" },
    { term: "prakṛteḥ", meaning: "from nature" },
    { term: "svabhāvāt", meaning: "from own-being" },
    { term: "karomi", meaning: "I do" },
    { term: "yad yat", meaning: "whatever" },
    { term: "sakalam", meaning: "all" },
    { term: "parasmai", meaning: "to the Supreme" },
    { term: "śrī", meaning: "Śrī" },
    { term: "man", meaning: "blessed" },
    { term: "nārāyaṇāya", meaning: "to Nārāyaṇa" },
    { term: "iti", meaning: "thus" },
    { term: "samarpayāmi", meaning: "I offer" },
    { term: "hariḥ", meaning: "Hari" },
    { term: "tat", meaning: "that" },
    { term: "sat", meaning: "truth" },
    { term: "sarvam", meaning: "all" },
    { term: "parama", meaning: "supreme" },
    { term: "īśvara", meaning: "Lord" },
    { term: "arpaṇam", meaning: "offering" },
    { term: "astu", meaning: "may it be" },
  ],
  root: group("ia-root", "verse", "", [
    group(
      "ia-namaskara",
      "sentence",
      "from Brahmaloka all the way to Ālokāloka mountain, always salutations to the divine brāhmaṇas who exist there",
      [
        word("ia-a", "from / as far as", [["आ", "ā"]]),
        word("ia-brahma", "Brahman", [
          ["ब्रह्", "brah"],
          ["म", "ma"],
        ], { trailing: "" }),
        word("ia-lokad", "from the world", [
          ["लो", "lo"],
          ["काद्", "kād"],
        ]),
        word("ia-asesad", "without remainder", [
          ["अ", "a"],
          ["शे", "śe"],
          ["षाद्", "ṣād"],
        ]),
        word("ia-alokaloka", "Ālokāloka", [
          ["आ", "ā"],
          ["लो", "lo"],
          ["का", "kā"],
          ["लो", "lo"],
          ["क", "ka"],
        ], { trailing: "" }),
        word("ia-parvatam", "mountain", [
          ["पर्", "par"],
          ["व", "va"],
          ["ताम्", "tām"],
        ], { trailing: " ।", lineBreakAfter: true }),
        word("ia-ye", "who", [["ये", "ye"]]),
        word("ia-santi", "exist", [
          ["सन्", "san"],
          ["ति", "ti"],
        ]),
        word("ia-brahmana", "brāhmaṇas", [
          ["ब्राह्", "brāh"],
          ["म", "ma"],
          ["ण", "ṇa"],
        ], { trailing: "" }),
        word("ia-devah", "gods", [
          ["दे", "de"],
          ["वास्", "vās"],
        ]),
        word("ia-tebhyo", "to them", [
          ["ते", "te"],
          ["भ्यो", "bhyo"],
        ]),
        word("ia-nityam", "always", [
          ["नि", "ni"],
          ["त्यं", "tyaṃ"],
        ]),
        word("ia-namo", "salutations", [
          ["न", "na"],
          ["मो", "mo"],
        ]),
        word("ia-namah", "salutations", [
          ["न", "na"],
          ["मः", "maḥ"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group(
      "ia-narayana",
      "sentence",
      "whatever I do by body, speech, mind, senses, intellect, self, or by nature and own-being — all that I offer to Śrīman Nārāyaṇa",
      [
        word("ia-kayena", "by the body", [
          ["का", "kā"],
          ["ये", "ye"],
          ["न", "na"],
        ]),
        word("ia-vaca", "by speech", [
          ["वा", "vā"],
          ["चा", "cā"],
        ]),
        word("ia-manasa", "by the mind", [
          ["म", "ma"],
          ["न", "na"],
          ["से", "se"],
        ], { trailing: "" }),
        word("ia-indriyaih", "by the senses", [
          ["न्द्रि", "ndri"],
          ["यैर्", "yair"],
        ], { trailing: "" }),
        word("ia-va-1", "or", [["वा", "vā"]], { lineBreakAfter: true }),
        word("ia-buddhya", "by the intellect", [
          ["बुद्", "bud"],
          ["ध्यात्", "dhyāt"],
        ], { trailing: "" }),
        word("ia-atmana", "by the self", [
          ["म", "ma"],
          ["ना", "nā"],
        ]),
        word("ia-va-2", "or", [["वा", "vā"]]),
        word("ia-prakrteh", "from nature", [
          ["प्र", "pra"],
          ["कृ", "kṛ"],
          ["तेः", "teḥ"],
        ]),
        word("ia-svabhavat", "from own-being", [
          ["स्व", "sva"],
          ["भा", "bhā"],
          ["वात्", "vāt"],
        ], { trailing: " ।", lineBreakAfter: true }),
        word("ia-karomi", "I do", [
          ["क", "ka"],
          ["रो", "ro"],
          ["मि", "mi"],
        ]),
        word("ia-yad", "whatever", [["यद्", "yad"]], { trailing: "" }),
        word("ia-yat", "whatever", [["यत्", "yat"]]),
        word("ia-sakalam", "all", [
          ["स", "sa"],
          ["क", "ka"],
          ["लं", "laṃ"],
        ]),
        word("ia-parasmai", "to the Supreme", [
          ["प", "pa"],
          ["रस्", "ras"],
          ["मै", "mai"],
        ], { lineBreakAfter: true }),
        word("ia-sri-1", "Śrī", [["श्री", "śrī"]], { trailing: "" }),
        word("ia-man", "blessed", [["मन्", "man"]], { trailing: "" }),
        word("ia-narayanaya", "to Nārāyaṇa", [
          ["ना", "nā"],
          ["रा", "rā"],
          ["य", "ya"],
          ["णा", "ṇā"],
        ], { trailing: "" }),
        word("ia-iti", "thus", [
          ["ये", "ye"],
          ["ति", "ti"],
        ]),
        word("ia-samarpayami", "I offer", [
          ["स", "sa"],
          ["मर्", "mar"],
          ["प", "pa"],
          ["या", "yā"],
          ["मि", "mi"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group("ia-harih", "sentence", "Hari, oṃ, that Truth", [
      word("ia-harih", "Hari", [
        ["ह", "ha"],
        ["रिः", "riḥ"],
      ]),
      word("ia-om", "", [["ॐ", "oṃ"]]),
      word("ia-tat-1", "that", [["तत्", "tat"]], { trailing: "" }),
      word("ia-sat", "truth", [["सत्", "sat"]], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
    ]),
    group(
      "ia-final",
      "sentence",
      "may all of this be an offering to Śrī Parameśvara",
      [
        word("ia-tat-2", "that", [["तत्", "tat"]], { trailing: "" }),
        word("ia-sarvam", "all", [
          ["सर्", "sar"],
          ["वं", "vaṃ"],
        ]),
        word("ia-sri-2", "Śrī", [["श्री", "śrī"]], { trailing: "" }),
        word("ia-parama", "supreme", [
          ["प", "pa"],
          ["र", "ra"],
          ["मे", "me"],
        ], { trailing: "" }),
        word("ia-isvara", "Lord", [
          ["श्व", "śva"],
          ["रार्", "rār"],
        ], { trailing: "" }),
        word("ia-arpanam", "offering", [
          ["प", "pa"],
          ["ण", "ṇa"],
        ], { trailing: "" }),
        word("ia-astu", "may it be", [
          ["मस्", "mas"],
          ["तु", "tu"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
