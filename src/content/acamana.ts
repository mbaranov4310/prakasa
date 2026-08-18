import { group, word } from "../lib/span";
import type { Chapter } from "../types";

function om(id: string) {
  return word(id, "primordial sound", [["ॐ", "oṃ"]]);
}

function namah(id: string, options?: { last?: boolean }) {
  return word(id, "salutation, reverence", [
    ["न", "na"],
    ["मः", "maḥ"],
  ], options?.last ? { trailing: " ॥" } : { lineBreakAfter: true });
}

function svaha(id: string) {
  return word(id, "", [
    ["स्वा", "svā"],
    ["हा", "hā"],
  ], { lineBreakAfter: true });
}

export const acamana: Chapter = {
  id: "acamana",
  titleDev: "आचमनम्",
  titleIast: "ācamanam",
  titleEn: "Ācamana",
  status: "ready",
  translation:
    "In Ācamana, we purify the body and senses by invoking the names of Mahāviṣṇu. The first three names — Keśava, Nārāyaṇa, Mādhava — are recited while sipping water, symbolizing internal purification. The remaining names are chanted while touching different limbs (lips, head, heart, hands, shoulders, etc.), invoking protection and sanctity in each part of the body. The final name Śrī Kṛṣṇa Parabrahmaṇe Namaḥ is a complete surrender to the Supreme Reality.",
  glossary: [
    { term: "keśava", meaning: "the beautiful-haired Lord; harmonizer" },
    { term: "nārāyaṇa", meaning: "the abode and support of all beings" },
    { term: "mādhava", meaning: "consort of Lakṣmī; the sweet, auspicious one" },
    { term: "govinda", meaning: "knower/protector of beings" },
    { term: "viṣṇu", meaning: "the all-pervading one" },
    { term: "madhusūdana", meaning: "destroyer of the demon Madhu; remover of inner darkness" },
    { term: "trivikrama", meaning: "the cosmic three-stepper" },
    { term: "vāmana", meaning: "the dwarf incarnation" },
    { term: "śrīdhara", meaning: "bearer of Śrī (Lakṣmī)" },
    { term: "hṛṣīkeśa", meaning: "Lord of the senses" },
    { term: "padmanābha", meaning: "lotus-navel Lord" },
    { term: "dāmodara", meaning: "“rope-belied”; bound by Yaśodā’s love" },
    { term: "saṅkarṣaṇa", meaning: "Vyuha form associated with strength" },
    { term: "vāsudeva", meaning: "indwelling Lord present in all" },
    { term: "pradyumna", meaning: "Vyuha form associated with mind" },
    { term: "aniruddha", meaning: "Vyuha form associated with will/ego" },
    { term: "puruṣottama", meaning: "the supreme person" },
    { term: "adhokṣaja", meaning: "beyond sensory perception" },
    { term: "narasiṃha", meaning: "man-lion form" },
    { term: "acyuta", meaning: "unfailing, imperishable" },
    { term: "janārdana", meaning: "protector/uplifter of people" },
    { term: "upendra", meaning: "brother of Indra (Vāmana)" },
    { term: "hari", meaning: "remover of sins/binds" },
    { term: "śrī kṛṣṇa parabrahma", meaning: "the Supreme Reality in the form of Śrī Kṛṣṇa" },
    { term: "namaḥ", meaning: "salutation, reverence" },
  ],
  root: group(
    "a-verse",
    "verse",
    "In Ācamana, we purify the body and senses by invoking the names of Mahāviṣṇu.",
    [
      group("a-kesava", "sentence", "the beautiful-haired Lord; harmonizer", [
        om("a-om-kesava"),
        word("a-kesavaya", "the beautiful-haired Lord; harmonizer", [
          ["के", "ke"],
          ["श", "śa"],
          ["वा", "vā"],
          ["य", "ya"],
        ]),
        svaha("a-svaha-kesava"),
      ]),
      group("a-narayana", "sentence", "the abode and support of all beings", [
        om("a-om-narayana"),
        word("a-narayanaya", "the abode and support of all beings", [
          ["ना", "nā"],
          ["रा", "rā"],
          ["य", "ya"],
          ["णा", "ṇā"],
          ["य", "ya"],
        ]),
        svaha("a-svaha-narayana"),
      ]),
      group("a-madhava", "sentence", "consort of Lakṣmī; the sweet, auspicious one", [
        om("a-om-madhava"),
        word("a-madhavaya", "consort of Lakṣmī; the sweet, auspicious one", [
          ["मा", "mā"],
          ["ध", "dha"],
          ["वा", "vā"],
          ["य", "ya"],
        ]),
        svaha("a-svaha-madhava"),
      ]),
      group("a-govinda", "sentence", "knower/protector of beings", [
        om("a-om-govinda"),
        word("a-govindaya", "knower/protector of beings", [
          ["गो", "go"],
          ["वि", "vi"],
          ["न्दा", "ndā"],
          ["य", "ya"],
        ]),
        namah("a-namah-govinda"),
      ]),
      group("a-visnu", "sentence", "the all-pervading one", [
        om("a-om-visnu"),
        word("a-visnave", "the all-pervading one", [
          ["वि", "vi"],
          ["ष्ण", "ṣṇa"],
          ["वे", "ve"],
        ]),
        namah("a-namah-visnu"),
      ]),
      group("a-madhusudana", "sentence", "destroyer of the demon Madhu; remover of inner darkness", [
        om("a-om-madhusudana"),
        word("a-madhusudanaya", "destroyer of the demon Madhu; remover of inner darkness", [
          ["म", "ma"],
          ["धु", "dhu"],
          ["सू", "sū"],
          ["द", "da"],
          ["ना", "nā"],
          ["य", "ya"],
        ]),
        namah("a-namah-madhusudana"),
      ]),
      group("a-trivikrama", "sentence", "the cosmic three-stepper", [
        om("a-om-trivikrama"),
        word("a-trivikramaya", "the cosmic three-stepper", [
          ["त्रि", "tri"],
          ["वि", "vi"],
          ["क्र", "kra"],
          ["मा", "mā"],
          ["य", "ya"],
        ]),
        namah("a-namah-trivikrama"),
      ]),
      group("a-vamana", "sentence", "the dwarf incarnation", [
        om("a-om-vamana"),
        word("a-vamanaya", "the dwarf incarnation", [
          ["वा", "vā"],
          ["म", "ma"],
          ["ना", "nā"],
          ["य", "ya"],
        ]),
        namah("a-namah-vamana"),
      ]),
      group("a-sridhara", "sentence", "bearer of Śrī (Lakṣmī)", [
        om("a-om-sridhara"),
        word("a-sridharaya", "bearer of Śrī (Lakṣmī)", [
          ["श्री", "śrī"],
          ["ध", "dha"],
          ["रा", "rā"],
          ["य", "ya"],
        ]),
        namah("a-namah-sridhara"),
      ]),
      group("a-hrsikesa", "sentence", "Lord of the senses", [
        om("a-om-hrsikesa"),
        word("a-hrsikesaya", "Lord of the senses", [
          ["हृ", "hṛ"],
          ["षी", "ṣī"],
          ["के", "ke"],
          ["शा", "śā"],
          ["य", "ya"],
        ]),
        namah("a-namah-hrsikesa"),
      ]),
      group("a-padmanabha", "sentence", "lotus-navel Lord", [
        om("a-om-padmanabha"),
        word("a-padmanabhaya", "lotus-navel Lord", [
          ["प", "pa"],
          ["द्म", "dma"],
          ["ना", "nā"],
          ["भा", "bhā"],
          ["य", "ya"],
        ]),
        namah("a-namah-padmanabha"),
      ]),
      group("a-damodara", "sentence", "“rope-belied”; bound by Yaśodā’s love", [
        om("a-om-damodara"),
        word("a-damodaraya", "“rope-belied”; bound by Yaśodā’s love", [
          ["दा", "dā"],
          ["मो", "mo"],
          ["द", "da"],
          ["रा", "rā"],
          ["य", "ya"],
        ]),
        namah("a-namah-damodara"),
      ]),
      group("a-sankarshana", "sentence", "Vyuha form associated with strength", [
        om("a-om-sankarshana"),
        word("a-sankarshanaya", "Vyuha form associated with strength", [
          ["स", "sa"],
          ["ङ्क", "ṅka"],
          ["र्ष", "rṣa"],
          ["णा", "ṇā"],
          ["य", "ya"],
        ]),
        namah("a-namah-sankarshana"),
      ]),
      group("a-vasudeva", "sentence", "indwelling Lord present in all", [
        om("a-om-vasudeva"),
        word("a-vasudevaya", "indwelling Lord present in all", [
          ["वा", "vā"],
          ["सु", "su"],
          ["दे", "de"],
          ["वा", "vā"],
          ["य", "ya"],
        ]),
        namah("a-namah-vasudeva"),
      ]),
      group("a-pradyumna", "sentence", "Vyuha form associated with mind", [
        om("a-om-pradyumna"),
        word("a-pradyumnaya", "Vyuha form associated with mind", [
          ["प्र", "pra"],
          ["द्यु", "dyu"],
          ["म्ना", "mnā"],
          ["य", "ya"],
        ]),
        namah("a-namah-pradyumna"),
      ]),
      group("a-aniruddha", "sentence", "Vyuha form associated with will/ego", [
        om("a-om-aniruddha"),
        word("a-aniruddhaya", "Vyuha form associated with will/ego", [
          ["अ", "a"],
          ["नि", "ni"],
          ["रु", "ru"],
          ["द्धा", "ddhā"],
          ["य", "ya"],
        ]),
        namah("a-namah-aniruddha"),
      ]),
      group("a-purusottama", "sentence", "the supreme person", [
        om("a-om-purusottama"),
        word("a-purusottamaya", "the supreme person", [
          ["पु", "pu"],
          ["रु", "ru"],
          ["षो", "ṣo"],
          ["त्त", "tta"],
          ["मा", "mā"],
          ["य", "ya"],
        ]),
        namah("a-namah-purusottama"),
      ]),
      group("a-adhoksaja", "sentence", "beyond sensory perception", [
        om("a-om-adhoksaja"),
        word("a-adhoksajaya", "beyond sensory perception", [
          ["अ", "a"],
          ["धो", "dho"],
          ["क्ष", "kṣa"],
          ["जा", "jā"],
          ["य", "ya"],
        ]),
        namah("a-namah-adhoksaja"),
      ]),
      group("a-narasimha", "sentence", "man-lion form", [
        om("a-om-narasimha"),
        word("a-narasimhaya", "man-lion form", [
          ["ना", "nā"],
          ["र", "ra"],
          ["सिं", "siṃ"],
          ["हा", "hā"],
          ["य", "ya"],
        ]),
        namah("a-namah-narasimha"),
      ]),
      group("a-acyuta", "sentence", "unfailing, imperishable", [
        om("a-om-acyuta"),
        word("a-acyutaya", "unfailing, imperishable", [
          ["अ", "a"],
          ["च्यु", "cyu"],
          ["ता", "tā"],
          ["य", "ya"],
        ]),
        namah("a-namah-acyuta"),
      ]),
      group("a-janardana", "sentence", "protector/uplifter of people", [
        om("a-om-janardana"),
        word("a-janardanaya", "protector/uplifter of people", [
          ["ज", "ja"],
          ["ना", "nā"],
          ["र्द", "rda"],
          ["ना", "nā"],
          ["य", "ya"],
        ]),
        namah("a-namah-janardana"),
      ]),
      group("a-upendra", "sentence", "brother of Indra (Vāmana)", [
        om("a-om-upendra"),
        word("a-upendraya", "brother of Indra (Vāmana)", [
          ["उ", "u"],
          ["पे", "pe"],
          ["न्द्रा", "ndrā"],
          ["य", "ya"],
        ]),
        namah("a-namah-upendra"),
      ]),
      group("a-hari", "sentence", "remover of sins/binds", [
        om("a-om-hari"),
        word("a-haraye", "remover of sins/binds", [
          ["ह", "ha"],
          ["र", "ra"],
          ["ये", "ye"],
        ]),
        namah("a-namah-hari"),
      ]),
      group(
        "a-krsna",
        "sentence",
        "The final name Śrī Kṛṣṇa Parabrahmaṇe Namaḥ is a complete surrender to the Supreme Reality.",
        [
          om("a-om-krsna"),
          word("a-srikrsnaparabrahmane", "the Supreme Reality in the form of Śrī Kṛṣṇa", [
            ["श्री", "śrī"],
            ["कृ", "kṛ"],
            ["ष्ण", "ṣṇa"],
            ["प", "pa"],
            ["र", "ra"],
            ["ब्र", "bra"],
            ["ह्म", "hma"],
            ["णे", "ṇe"],
          ]),
          namah("a-namah-krsna", { last: true }),
        ],
      ),
    ],
  ),
};
