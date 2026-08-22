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
    { term: "sumukham", meaning: "fair-faced / well-faced" },
    { term: "samputam", meaning: "casket / cupped join" },
    { term: "caiva", meaning: "and" },
    { term: "vitatam", meaning: "spread" },
    { term: "vistṛtam", meaning: "expanded" },
    { term: "tathā", meaning: "and so / likewise" },
    { term: "dvimukham", meaning: "two-faced" },
    { term: "trimukham", meaning: "three-faced" },
    { term: "caturmukham", meaning: "four-faced" },
    { term: "pañcamukham", meaning: "five-faced" },
    { term: "ṣaṇmukhaḥ", meaning: "six-faced" },
    { term: "adhomukham", meaning: "downward-faced" },
    { term: "vyāpakañjalikam", meaning: "spreading-añjali" },
    { term: "śakaṭam", meaning: "cart" },
    { term: "yamapāśam", meaning: "Yama’s noose" },
    { term: "ca", meaning: "and" },
    { term: "grathitam", meaning: "knotted" },
    { term: "sammukhonmukham", meaning: "facing and turned-toward" },
    { term: "pralambam", meaning: "hanging" },
    { term: "muṣṭikam", meaning: "fist" },
    { term: "matsyaḥ", meaning: "fish" },
    { term: "kūrmo", meaning: "tortoise" },
    { term: "varāhakam", meaning: "boar" },
    { term: "siṃhākrāntam", meaning: "lion-stride" },
    { term: "mahākrāntam", meaning: "great-stride" },
    { term: "mudgaram", meaning: "mallet" },
    { term: "pallavam", meaning: "sprout" },
    { term: "caturviṃśati", meaning: "twenty-four" },
    { term: "mudrā", meaning: "mudrās" },
    { term: "vai", meaning: "indeed" },
    { term: "gāyatryām", meaning: "in Gāyatrī" },
    { term: "supratiṣṭhitāḥ", meaning: "well-established" },
    { term: "iti", meaning: "thus" },
    { term: "na", meaning: "not" },
    { term: "jānāti", meaning: "knows" },
    { term: "gāyatrī", meaning: "Gāyatrī" },
    { term: "niṣphalā", meaning: "fruitless" },
    { term: "bhavet", meaning: "would become" },
    { term: "yaḥ", meaning: "who" },
    { term: "devaḥ", meaning: "the god" },
    { term: "savitā", meaning: "Savitṛ" },
    { term: "asmākam", meaning: "our" },
    { term: "dhiyaḥ", meaning: "intellects" },
    { term: "dharma", meaning: "dharma" },
    { term: "ādi", meaning: "and so on" },
    { term: "gocarāḥ", meaning: "having as their range" },
    { term: "prerayet", meaning: "may he impel" },
    { term: "tasya", meaning: "his" },
    { term: "yat", meaning: "which" },
    { term: "bhargaḥ", meaning: "radiance" },
    { term: "tat", meaning: "that" },
    { term: "varenyam", meaning: "to be sought" },
    { term: "upāsmahe", meaning: "we worship" },
  ],
  root: group("mp-verse", "verse", "", [
    group("mp-sent-1", "sentence", "", [
      word("mp-sumukham", "fair-faced / well-faced", [
        ["सु", "su"],
        ["मु", "mu"],
        ["खं", "khaṃ"],
      ]),
      word("mp-samputam", "casket / cupped join", [
        ["सम्", "sam"],
        ["पु", "pu"],
        ["टं", "ṭaṃ"],
      ]),
      word("mp-caiva-1", "and", caiva),
      word("mp-vitatam", "spread", [
        ["वि", "vi"],
        ["त", "ta"],
        ["तं", "taṃ"],
      ]),
      word("mp-vistrtam", "expanded", [
        ["वि", "vi"],
        ["स्तृ", "stṛ"],
        ["तं", "taṃ"],
      ]),
      word("mp-tatha-1", "and so / likewise", tatha, {
        trailing: " ।",
        lineBreakAfter: true,
      }),
      word("mp-dvimukham", "two-faced", [
        ["द्वि", "dvi"],
        ["मु", "mu"],
        ["खं", "khaṃ"],
      ]),
      word("mp-trimukham", "three-faced", [
        ["त्रि", "tri"],
        ["मु", "mu"],
        ["खं", "khaṃ"],
      ]),
      word("mp-caiva-2", "and", caiva),
      word("mp-caturmukham", "four-faced", [
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
      word("mp-tatha-2", "and so / likewise", tatha, {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
    ]),
    group("mp-sent-2", "sentence", "", [
      word("mp-sanmukhah", "six-faced", [
        ["षण्", "ṣaṇ"],
        ["मु", "mu"],
        ["खो", "kho"],
      ]),
      word("mp-adhomukham", "downward-faced", [
        ["अ", "a"],
        ["धो", "dho"],
        ["मु", "mu"],
        ["खं", "khaṃ"],
      ]),
      word("mp-caiva-3", "and", caiva),
      word("mp-vyapakanjalikam", "spreading-añjali", [
        ["व्या", "vyā"],
        ["प", "pa"],
        ["का", "kā"],
        ["ञ्ज", "ñja"],
        ["लि", "li"],
        ["कं", "kaṃ"],
      ]),
      word("mp-tatha-3", "and so / likewise", tatha, {
        trailing: " ।",
        lineBreakAfter: true,
      }),
      word("mp-sakatam", "cart", [
        ["श", "śa"],
        ["क", "ka"],
        ["टं", "ṭaṃ"],
      ]),
      word("mp-yamapasam", "Yama’s noose", [
        ["य", "ya"],
        ["म", "ma"],
        ["पा", "pā"],
        ["शं", "śaṃ"],
      ]),
      word("mp-cha", "and", [["च", "ca"]]),
      word("mp-grathitam", "knotted", [
        ["ग्र", "gra"],
        ["थि", "thi"],
        ["तं", "taṃ"],
      ]),
      word("mp-sammukhonmukham", "facing and turned-toward", [
        ["सम्", "sam"],
        ["मु", "mu"],
        ["खो", "kho"],
        ["न्मु", "nmu"],
        ["खम्", "kham"],
      ], {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
    ]),
    group("mp-sent-3", "sentence", "", [
      word("mp-pralambam", "hanging", [
        ["प्र", "pra"],
        ["ल", "la"],
        ["म्बं", "mbaṃ"],
      ]),
      word("mp-mustikam", "fist", [
        ["मु", "mu"],
        ["ष्टि", "ṣṭi"],
        ["कं", "kaṃ"],
      ]),
      word("mp-caiva-4", "and", caiva),
      word("mp-matsyah", "fish", [
        ["म", "ma"],
        ["त्स्यः", "tsyaḥ"],
      ]),
      word("mp-kurmo", "tortoise", [
        ["कूर्", "kūr"],
        ["मो", "mo"],
      ]),
      word("mp-varahakam", "boar", [
        ["व", "va"],
        ["रा", "rā"],
        ["ह", "ha"],
        ["कम्", "kam"],
      ], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
      word("mp-simhakrantam", "lion-stride", [
        ["सिं", "siṃ"],
        ["हा", "hā"],
        ["क्रा", "krā"],
        ["न्तं", "ntaṃ"],
      ]),
      word("mp-mahakrantam", "great-stride", [
        ["म", "ma"],
        ["हा", "hā"],
        ["क्रा", "krā"],
        ["न्तं", "ntaṃ"],
      ]),
      word("mp-mudgaram", "mallet", [
        ["मु", "mu"],
        ["द्ग", "dga"],
        ["रं", "raṃ"],
      ]),
      word("mp-pallavam", "sprout", [
        ["प", "pa"],
        ["ल्ल", "lla"],
        ["वं", "vaṃ"],
      ]),
      word("mp-tatha-4", "and so / likewise", tatha, {
        trailing: " ॥",
        lineBreakAfter: true,
      }),
    ]),
    group(
      "mp-sent-4",
      "sentence",
      "The twenty-four mudrās are well-established in Gāyatrī; who does not know the mudrās — Gāyatrī would be fruitless",
      [
        group(
          "mp-warning-1",
          "phrase",
          "the twenty-four mudrās are well-established in Gāyatrī",
          [
            word("mp-caturvimsati", "twenty-four", [
              ["च", "ca"],
              ["तुर्", "tur"],
              ["विं", "viṃ"],
              ["श", "śa"],
              ["ति", "ti"],
            ]),
            word("mp-mudra-1", "mudrās", [
              ["मु", "mu"],
              ["द्रा", "drā"],
            ]),
            word("mp-vai", "indeed", [["वै", "vai"]]),
            word("mp-gayatryam", "in Gāyatrī", [
              ["गा", "gā"],
              ["य", "ya"],
              ["त्र्यां", "tryāṃ"],
            ]),
            word("mp-supratisthitah", "well-established", [
              ["सु", "su"],
              ["प्र", "pra"],
              ["ति", "ti"],
              ["ष्ठि", "ṣṭhi"],
              ["ताः", "tāḥ"],
            ], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "mp-warning-2",
          "phrase",
          "who does not know the mudrās — Gāyatrī would be fruitless",
          [
            word("mp-iti", "thus", [
              ["इ", "i"],
              ["ति", "ti"],
            ]),
            word("mp-mudra-2", "mudrās", [
              ["मु", "mu"],
              ["द्रा", "drā"],
            ]),
            word("mp-na", "not", [["न", "na"]]),
            word("mp-janati", "knows", [
              ["जा", "jā"],
              ["ना", "nā"],
              ["ति", "ti"],
            ]),
            word("mp-gayatri", "Gāyatrī", [
              ["गा", "gā"],
              ["य", "ya"],
              ["त्री", "trī"],
            ]),
            word("mp-nisphala", "fruitless", [
              ["नि", "ni"],
              ["ष्फ", "ṣpha"],
              ["ला", "lā"],
            ]),
            word("mp-bhavet", "would become", [
              ["भ", "bha"],
              ["वेत्", "vet"],
            ], {
              trailing: " ॥",
              lineBreakAfter: true,
            }),
          ],
        ),
      ],
    ),
    group(
      "mp-sent-5",
      "sentence",
      "May the god Savitṛ impel our intellects toward dharma and the rest; that radiance of his, the one to be sought, we worship",
      [
        group(
          "mp-savita-line",
          "phrase",
          "the god Savitṛ — our intellects having dharma and so on as their range",
          [
            word("mp-yo", "who", [["यो", "yo"]]),
            word("mp-devah", "the god", [
              ["दे", "de"],
              ["वः", "vaḥ"],
            ]),
            word("mp-savita", "Savitṛ", [
              ["स", "sa"],
              ["वि", "vi"],
              ["ता", "tā"],
            ]),
            word("mp-asmakam", "our", [
              ["ऽस्मा", "’smā"],
              ["कं", "kaṃ"],
            ]),
            word("mp-dhiyo", "intellects", [
              ["धि", "dhi"],
              ["यो", "yo"],
            ]),
            word("mp-dharma", "dharma", [
              ["ध", "dha"],
              ["र्म", "rma"],
            ]),
            word("mp-adi", "and so on", [
              ["आ", "ā"],
              ["दि", "di"],
            ]),
            word("mp-gocarah", "having as their range", [
              ["गो", "go"],
              ["च", "ca"],
              ["राः", "rāḥ"],
            ], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ],
        ),
        group(
          "mp-bhargas-line",
          "phrase",
          "may he impel; that radiance of his, the one to be sought, we worship",
          [
            word("mp-prerayet", "may he impel", [
              ["प्रे", "pre"],
              ["र", "ra"],
              ["ये", "ye"],
              ["त", "ta"],
            ]),
            word("mp-tasya", "his", [
              ["त", "ta"],
              ["स्य", "sya"],
            ]),
            word("mp-yad", "which", [["यद्", "yad"]]),
            word("mp-bhargas", "radiance", [
              ["भर्", "bhar"],
              ["गस्", "gas"],
            ]),
            word("mp-tad", "that", [["तद्", "tad"]]),
            word("mp-varenyam", "to be sought", [
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
      ],
    ),
  ]),
};
