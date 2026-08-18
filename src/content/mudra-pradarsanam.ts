import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "In Sandhyāvandana, the 24 mudrās shown in this chapter are not mere hand exercises — they are symbolic signposts of the inner journey of mantra practice. Traditional manuals state that if one does not perform these mudrās during Gāyatrī japa, the practice may be considered incomplete or less effective. Classical texts mention that the 24 mudrās are connected to 24 syllables of the Gāyatrī mantra and, in some traditions, also to 24 divine powers or deities residing within the mantra. When practiced mindfully, these mudrās help focus attention, balance subtle energies, and support the practitioner’s inner alignment before entering into japa. Each mudrā suggests a symbolic quality: Sumukham — the “face ready for creation”; Sampuṭam — the bud holding inner potential; Vitatam / Vistṛtam — opening and expansion; Dvimukham / Trimukham / Caturmukham — reflecting duality, trifold awareness, cosmic order; Ṣaṇmukho ’tho mukha — embracing multidirectional consciousness; Vyāpakañjalikam — hands opened to receive all grace; Śakaṭa, Yamapāśa, Grathitam — forces restraining distractions; Pralamba, Muṣṭika — grounding and protection; Matsya, Kūrma, Varāhakam — primal forms of evolution; Siṃhākrānta, Mahākrānta — overcoming fear and ego; Mudgara, Pallavam — inner strength and blossoming realization";

const caiva: [string, string][] = [
  ["चै", "cai"],
  ["व", "va"],
];

const tatha: [string, string][] = [
  ["त", "ta"],
  ["था", "thā"],
];

export const mudraPradarsanam: Chapter = {
  id: "mudra-pradarsanam",
  titleDev: "मुद्रा प्रदर्शनम्",
  titleIast: "mudrā pradarśanam",
  titleEn: "Mudrā pradarśana",
  status: "ready",
  translation,
  glossary: [
    { term: "Sumukham", meaning: "the “face ready for creation”" },
    { term: "Sampuṭam", meaning: "the bud holding inner potential" },
    { term: "Vitatam / Vistṛtam", meaning: "opening and expansion" },
    {
      term: "Dvimukham / Trimukham / Caturmukham",
      meaning: "reflecting duality, trifold awareness, cosmic order",
    },
    {
      term: "Ṣaṇmukho ’tho mukha",
      meaning: "embracing multidirectional consciousness",
    },
    { term: "Vyāpakañjalikam", meaning: "hands opened to receive all grace" },
    {
      term: "Śakaṭa, Yamapāśa, Grathitam",
      meaning: "forces restraining distractions",
    },
    { term: "Pralamba, Muṣṭika", meaning: "grounding and protection" },
    {
      term: "Matsya, Kūrma, Varāhakam",
      meaning: "primal forms of evolution",
    },
    {
      term: "Siṃhākrānta, Mahākrānta",
      meaning: "overcoming fear and ego",
    },
    {
      term: "Mudgara, Pallavam",
      meaning: "inner strength and blossoming realization",
    },
    { term: "pañcha-mukham", meaning: "five-faced" },
    { term: "chatur-viṃśati mudrāḥ", meaning: "the twenty-four mudrās" },
    {
      term: "gāyatryāṃ supratiṣṭhitāḥ",
      meaning: "firmly taught in Gāyatrī worship",
    },
    {
      term: "dharmādi-gōcharāḥ",
      meaning: "directed toward dharma and noble aims",
    },
    { term: "prērayēt", meaning: "may he impel" },
    { term: "upāsmahē", meaning: "we worship" },
  ],
  root: group("mp-verse", "verse", translation, [
    group(
      "mp-sent-1",
      "sentence",
      "Sumukham — the “face ready for creation”; Sampuṭam — the bud holding inner potential; Vitatam / Vistṛtam — opening and expansion; Dvimukham / Trimukham / Caturmukham — reflecting duality, trifold awareness, cosmic order",
      [
        word("mp-sumukham", "the “face ready for creation”", [
          ["सु", "su"],
          ["मु", "mu"],
          ["खं", "khaṃ"],
        ]),
        word("mp-samputam", "the bud holding inner potential", [
          ["सम्", "sam"],
          ["पु", "pu"],
          ["टं", "ṭaṃ"],
        ]),
        word("mp-caiva-1", "", caiva),
        word("mp-vitatam", "opening and expansion", [
          ["वि", "vi"],
          ["त", "ta"],
          ["तं", "taṃ"],
        ]),
        word("mp-vistrtam", "opening and expansion", [
          ["वि", "vi"],
          ["स्तृ", "stṛ"],
          ["तं", "taṃ"],
        ]),
        word("mp-tatha-1", "", tatha, {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        word("mp-dvimukham", "reflecting duality, trifold awareness, cosmic order", [
          ["द्वि", "dvi"],
          ["मु", "mu"],
          ["खं", "khaṃ"],
        ]),
        word("mp-trimukham", "reflecting duality, trifold awareness, cosmic order", [
          ["त्रि", "tri"],
          ["मु", "mu"],
          ["खं", "khaṃ"],
        ]),
        word("mp-caiva-2", "", caiva),
        word("mp-caturmukham", "reflecting duality, trifold awareness, cosmic order", [
          ["च", "ca"],
          ["तुर्", "tur"],
          ["मु", "mu"],
          ["खं", "khaṃ"],
        ]),
        word("mp-pancamukham", "five-faced", [
          ["प", "pa"],
          ["ञ्च", "ñca"],
          ["मु", "mu"],
          ["खं", "khaṃ"],
        ]),
        word("mp-tatha-2", "", tatha, {
          trailing: " ॥",
          lineBreakAfter: true,
        }),
      ],
    ),
    group(
      "mp-sent-2",
      "sentence",
      "Ṣaṇmukho ’tho mukha — embracing multidirectional consciousness; Vyāpakañjalikam — hands opened to receive all grace; Śakaṭa, Yamapāśa, Grathitam — forces restraining distractions",
      [
        word("mp-sanmukhotho", "embracing multidirectional consciousness", [
          ["षण्", "ṣaṇ"],
          ["मु", "mu"],
          ["खो", "kho"],
          ["ऽथो", "’tho"],
        ]),
        word("mp-mukham", "embracing multidirectional consciousness", [
          ["मु", "mu"],
          ["खं", "khaṃ"],
        ]),
        word("mp-caiva-3", "", caiva),
        word("mp-vyapakanjalikam", "hands opened to receive all grace", [
          ["व्या", "vyā"],
          ["प", "pa"],
          ["का", "kā"],
          ["ञ्ज", "ñja"],
          ["लि", "li"],
          ["कं", "kaṃ"],
        ]),
        word("mp-tatha-3", "", tatha, {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        word("mp-sakatam", "forces restraining distractions", [
          ["श", "śa"],
          ["क", "ka"],
          ["टं", "ṭaṃ"],
        ]),
        word("mp-yamapasam", "forces restraining distractions", [
          ["य", "ya"],
          ["म", "ma"],
          ["पा", "pā"],
          ["शं", "śaṃ"],
        ]),
        word("mp-cha", "", [["च", "ca"]]),
        word("mp-grathitam", "forces restraining distractions", [
          ["ग्र", "gra"],
          ["थि", "thi"],
          ["तं", "taṃ"],
        ]),
        word("mp-sammukhonmukham", "", [
          ["सम्", "sam"],
          ["मु", "mu"],
          ["खो", "kho"],
          ["न्मु", "nmu"],
          ["खम्", "kham"],
        ], {
          trailing: " ॥",
          lineBreakAfter: true,
        }),
      ],
    ),
    group(
      "mp-sent-3",
      "sentence",
      "Pralamba, Muṣṭika — grounding and protection; Matsya, Kūrma, Varāhakam — primal forms of evolution; Siṃhākrānta, Mahākrānta — overcoming fear and ego; Mudgara, Pallavam — inner strength and blossoming realization",
      [
        word("mp-pralambam", "grounding and protection", [
          ["प्र", "pra"],
          ["ल", "la"],
          ["म्बं", "mbaṃ"],
        ]),
        word("mp-mustikam", "grounding and protection", [
          ["मु", "mu"],
          ["ष्टि", "ṣṭi"],
          ["कं", "kaṃ"],
        ]),
        word("mp-caiva-4", "", caiva),
        word("mp-matsyah", "primal forms of evolution", [
          ["म", "ma"],
          ["त्स्यः", "tsyaḥ"],
        ]),
        word("mp-kurmo", "primal forms of evolution", [
          ["कूर्", "kūr"],
          ["मो", "mo"],
        ]),
        word("mp-varahakam", "primal forms of evolution", [
          ["व", "va"],
          ["रा", "rā"],
          ["ह", "ha"],
          ["कम्", "kam"],
        ], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        word("mp-simhakrantam", "overcoming fear and ego", [
          ["सिं", "siṃ"],
          ["हा", "hā"],
          ["क्रा", "krā"],
          ["न्तं", "ntaṃ"],
        ]),
        word("mp-mahakrantam", "overcoming fear and ego", [
          ["म", "ma"],
          ["हा", "hā"],
          ["क्रा", "krā"],
          ["न्तं", "ntaṃ"],
        ]),
        word("mp-mudgaram", "inner strength and blossoming realization", [
          ["मु", "mu"],
          ["द्ग", "dga"],
          ["रं", "raṃ"],
        ]),
        word("mp-pallavam", "inner strength and blossoming realization", [
          ["प", "pa"],
          ["ल्ल", "lla"],
          ["वं", "vaṃ"],
        ]),
        word("mp-tatha-4", "", tatha, {
          trailing: " ॥",
          lineBreakAfter: true,
        }),
      ],
    ),
    group(
      "mp-sent-4",
      "sentence",
      "Traditional manuals state that if one does not perform these mudrās during Gāyatrī japa, the practice may be considered incomplete or less effective. Classical texts mention that the 24 mudrās are connected to 24 syllables of the Gāyatrī mantra and, in some traditions, also to 24 divine powers or deities residing within the mantra.",
      [
        word("mp-caturvimsati", "the twenty-four mudrās", [
          ["च", "ca"],
          ["तुर्", "tur"],
          ["विं", "viṃ"],
          ["श", "śa"],
          ["ति", "ti"],
        ]),
        word("mp-mudra-1", "the twenty-four mudrās", [
          ["मु", "mu"],
          ["द्रा", "drā"],
        ]),
        word("mp-vai", "", [["वै", "vai"]]),
        word("mp-gayatryam", "firmly taught in Gāyatrī worship", [
          ["गा", "gā"],
          ["य", "ya"],
          ["त्र्यां", "tryāṃ"],
        ]),
        word("mp-supratisthitah", "firmly taught in Gāyatrī worship", [
          ["सु", "su"],
          ["प्र", "pra"],
          ["ति", "ti"],
          ["ष्ठि", "ṣṭhi"],
          ["ताः", "tāḥ"],
        ], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        word("mp-iti", "", [
          ["इ", "i"],
          ["ति", "ti"],
        ]),
        word("mp-mudra-2", "", [
          ["मु", "mu"],
          ["द्रा", "drā"],
        ]),
        word("mp-na", "", [["न", "na"]]),
        word("mp-janati", "", [
          ["जा", "jā"],
          ["ना", "nā"],
          ["ति", "ti"],
        ]),
        word("mp-gayatri", "", [
          ["गा", "gā"],
          ["य", "ya"],
          ["त्री", "trī"],
        ]),
        word("mp-nisphala", "", [
          ["नि", "ni"],
          ["ष्फ", "ṣpha"],
          ["ला", "lā"],
        ]),
        word("mp-bhavet", "", [
          ["भ", "bha"],
          ["वेत्", "vet"],
        ], {
          trailing: " ॥",
          lineBreakAfter: true,
        }),
      ],
    ),
    group(
      "mp-sent-5",
      "sentence",
      "",
      [
        word("mp-yo", "", [["यो", "yo"]]),
        word("mp-devah", "", [
          ["दे", "de"],
          ["वः", "vaḥ"],
        ]),
        word("mp-savitasmakam", "", [
          ["स", "sa"],
          ["वि", "vi"],
          ["ता", "tā"],
          ["ऽस्मा", "’smā"],
          ["कं", "kaṃ"],
        ]),
        word("mp-dhiyo", "", [
          ["धि", "dhi"],
          ["यो", "yo"],
        ]),
        word("mp-dharmadigocarah", "directed toward dharma and noble aims", [
          ["ध", "dha"],
          ["र्मा", "rmā"],
          ["दि", "di"],
          ["गो", "go"],
          ["च", "ca"],
          ["राः", "rāḥ"],
        ], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
        word("mp-prerayeta", "may he impel", [
          ["प्रे", "pre"],
          ["र", "ra"],
          ["ये", "ye"],
          ["त", "ta"],
        ]),
        word("mp-tasya", "", [
          ["त", "ta"],
          ["स्य", "sya"],
        ]),
        word("mp-yadbhargastadvarenyam", "", [
          ["यद्", "yad"],
          ["भर्", "bhar"],
          ["गस्", "gas"],
          ["तद्", "tad"],
          ["व", "va"],
          ["रे", "re"],
          ["ण्यं", "ṇyaṃ"],
        ]),
        word("mp-upasmahe", "we worship", [
          ["उ", "u"],
          ["पा", "pā"],
          ["स्म", "sma"],
          ["हे", "he"],
        ], {
          trailing: " ॥",
        }),
      ],
    ),
  ]),
};
