import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const mudraBullets =
  "सुरभि = fragrance / auspicious essence; ज्ञानचक्र = wheel of knowledge; योनि = source / womb; कूर्म = tortoise form; पङ्कज = lotus; निर्गमन = release / exit gesture";

const savitrMeaning =
  "We worship that most excellent radiance of the god Savitṛ, who may impel our intellects toward dharma and all righteous aims.";

const samarpana1 =
  "May this be offered to Brahman, who is “That” and “Truth.”";
const samarpana2 = "May it be offered to Śrī Parameśvara.";
const samarpana3 =
  "May the fruit of this act be offered to Śrī Parameśvara.";

const translation = `${mudraBullets} ${savitrMeaning} ${samarpana1} ${samarpana2} ${samarpana3}`;

export const astaMudra: Chapter = {
  id: "asta-mudra",
  titleDev: "अष्ट-मुद्रा प्रदर्शनम्",
  titleIast: "aṣṭa-mudrā pradarśanam",
  titleEn: "Eight mudrās",
  status: "ready",
  translation,
  glossary: [
    { term: "सुरभि", meaning: "fragrance / auspicious essence" },
    { term: "ज्ञानचक्र", meaning: "wheel of knowledge" },
    { term: "योनि", meaning: "source / womb" },
    { term: "कूर्म", meaning: "tortoise form" },
    { term: "पङ्कज", meaning: "lotus" },
    { term: "निर्गमन", meaning: "release / exit gesture" },
    {
      term: "liṅgam",
      meaning: "“liṅga” mudrā; clasped fists with upright thumb",
    },
    { term: "aṣṭa-mudrāḥ", meaning: "the eight mudrās" },
    { term: "prakīrtitāḥ", meaning: "are proclaimed/declared" },
    { term: "yō dēvaḥ savitā", meaning: "the god Savitṛ" },
    { term: "asmākaṃ dhiyāḥ", meaning: "our intellects" },
    {
      term: "dharmādi-gōcarāḥ",
      meaning: "oriented toward dharma and noble aims",
    },
    { term: "prērayēt", meaning: "may he impel/guide" },
    { term: "tasya yad bhargaḥ", meaning: "his radiance" },
    { term: "tad varēṇyam", meaning: "that most excellent brilliance" },
    { term: "upāsmahē", meaning: "we worship" },
    { term: "tat", meaning: "“that,” the transcendent" },
    { term: "sat", meaning: "truth, reality" },
    { term: "brahma", meaning: "Brahman, the Absolute" },
    { term: "arpaṇam", meaning: "offering" },
    { term: "astu", meaning: "may it be" },
    { term: "śrī", meaning: "auspicious, blessed" },
    { term: "parameśvara", meaning: "the Supreme Lord" },
    { term: "etat", meaning: "this" },
    { term: "phalam", meaning: "fruit, result, outcome" },
  ],
  root: group("am-verse", "verse", translation, [
    group("am-asta", "sentence", mudraBullets, [
      word("am-surabhi", "fragrance / auspicious essence", [
        ["सु", "su"],
        ["र", "ra"],
        ["भि", "bhi"],
      ]),
      word("am-jnanacakre", "wheel of knowledge", [
        ["ज्ञा", "jñā"],
        ["न", "na"],
        ["च", "ca"],
        ["क्रे", "kre"],
      ]),
      word("am-ca", "", [["च", "ca"]]),
      word("am-yonih", "source / womb", [
        ["यो", "yo"],
        ["निः", "niḥ"],
      ]),
      word("am-kurmotha", "tortoise form", [
        ["कूर्", "kūr"],
        ["मो", "mo"],
        ["ऽथ", "’tha"],
      ]),
      word("am-pankajam", "lotus", [
        ["प", "pa"],
        ["ङ्क", "ṅka"],
        ["जम्", "jam"],
      ], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
      word(
        "am-lingam",
        "“liṅga” mudrā; clasped fists with upright thumb",
        [
          ["लि", "li"],
          ["ङ्गं", "ṅgaṃ"],
        ],
      ),
      word("am-nirgamanam", "release / exit gesture", [
        ["निर्", "nir"],
        ["ग", "ga"],
        ["म", "ma"],
        ["नं", "naṃ"],
      ]),
      word("am-mudra", "", [
        ["मु", "mu"],
        ["द्रा", "drā"],
      ]),
      word("am-ceti", "", [
        ["चे", "ce"],
        ["ति", "ti"],
      ]),
      word("am-astamudrah", "the eight mudrās", [
        ["अ", "a"],
        ["ष्ट", "ṣṭa"],
        ["मु", "mu"],
        ["द्राः", "drāḥ"],
      ]),
      word("am-prakirtitah", "are proclaimed/declared", [
        ["प्र", "pra"],
        ["कीर्", "kīr"],
        ["ति", "ti"],
        ["ताः", "tāḥ"],
      ], {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
    ]),
    group("am-savitṛ", "sentence", savitrMeaning, [
      word("am-yo", "the god Savitṛ", [["यो", "yo"]]),
      word("am-devah", "the god Savitṛ", [
        ["दे", "de"],
        ["वः", "vaḥ"],
      ]),
      word("am-savitasmakam", "the god Savitṛ", [
        ["स", "sa"],
        ["वि", "vi"],
        ["ता", "tā"],
        ["ऽस्मा", "’smā"],
        ["कं", "kaṃ"],
      ]),
      word("am-dhiyo", "our intellects", [
        ["धि", "dhi"],
        ["यो", "yo"],
      ]),
      word(
        "am-dharmadigocarah",
        "oriented toward dharma and noble aims",
        [
          ["ध", "dha"],
          ["र्मा", "rmā"],
          ["दि", "di"],
          ["गो", "go"],
          ["च", "ca"],
          ["राः", "rāḥ"],
        ],
        {
          trailing: " ।",
          lineBreakAfter: true,
        },
      ),
      word("am-prerayeta", "may he impel/guide", [
        ["प्रे", "pre"],
        ["र", "ra"],
        ["ये", "ye"],
        ["त", "ta"],
      ]),
      word("am-tasya", "his radiance", [
        ["त", "ta"],
        ["स्य", "sya"],
      ]),
      word("am-yadbhargastadvarenyam", "that most excellent brilliance", [
        ["यद्", "yad"],
        ["भर्", "bhar"],
        ["गस्", "gas"],
        ["तद्", "tad"],
        ["व", "va"],
        ["रे", "re"],
        ["ण्यं", "ṇyaṃ"],
      ]),
      word("am-upasmahe", "we worship", [
        ["उ", "u"],
        ["पा", "pā"],
        ["स्म", "sma"],
        ["हे", "he"],
      ], {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
    ]),
    group("am-samarpanam-1", "sentence", samarpana1, [
      word("am-tatsat", "“that,” the transcendent; truth, reality", [
        ["तत्", "tat"],
        ["सत्", "sat"],
      ]),
      word("am-brahmarpanam", "Brahman, the Absolute; offering", [
        ["ब्रह्", "brah"],
        ["मार्", "mār"],
        ["प", "pa"],
        ["णम्", "ṇam"],
      ]),
      word("am-astu-1", "may it be", [
        ["अ", "a"],
        ["स्तु", "stu"],
      ], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
    ]),
    group("am-samarpanam-2", "sentence", samarpana2, [
      word("am-sri-1", "auspicious, blessed", [["श्री", "śrī"]]),
      word("am-paramesvararpanam-1", "the Supreme Lord", [
        ["प", "pa"],
        ["र", "ra"],
        ["मे", "me"],
        ["श्व", "śva"],
        ["रा", "rā"],
        ["र्प", "rpa"],
        ["णम्", "ṇam"],
      ]),
      word("am-astu-2", "may it be", [
        ["अ", "a"],
        ["स्तु", "stu"],
      ], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
    ]),
    group("am-samarpanam-3", "sentence", samarpana3, [
      word("am-etat", "this", [
        ["ए", "e"],
        ["तत्", "tat"],
      ]),
      word("am-phalam", "fruit, result, outcome", [
        ["फ", "pha"],
        ["लं", "laṃ"],
      ]),
      word("am-sri-2", "auspicious, blessed", [["श्री", "śrī"]]),
      word("am-paramesvararpanam-2", "the Supreme Lord", [
        ["प", "pa"],
        ["र", "ra"],
        ["मे", "me"],
        ["श्व", "śva"],
        ["रा", "rā"],
        ["र्प", "rpa"],
        ["णम्", "ṇam"],
      ]),
      word("am-astu-3", "may it be", [
        ["अ", "a"],
        ["स्तु", "stu"],
      ], {
        trailing: " ॥",
      }),
    ]),
  ]),
};
