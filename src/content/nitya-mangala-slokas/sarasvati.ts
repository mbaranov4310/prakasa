import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "She who is white like jasmine, the moon, and a garland of snow; who is wrapped in pure white cloth; whose hands are adorned with the excellent neck of the vīṇā; who sits on a white lotus; who is ever praised by the gods beginning with Brahmā, Acyuta, and Śaṅkara — may that Blessed Lady Sarasvatī, who utterly removes dullness, protect me.";

export const sarasvati: Chapter = {
  id: "sarasvati",
  titleDev: "सरस्वती",
  titleIast: "sarasvatī",
  titleEn: "Sarasvatī",
  status: "ready",
  translation,
  glossary: [
    { term: "yā", meaning: "she who" },
    { term: "kunda", meaning: "white jasmine" },
    { term: "indu", meaning: "moon" },
    { term: "tuṣāra", meaning: "frost / snow" },
    { term: "hāra", meaning: "garland" },
    { term: "dhavalā", meaning: "white" },
    { term: "śubhra", meaning: "pure white" },
    { term: "vastra", meaning: "cloth" },
    { term: "āvṛtā", meaning: "wrapped" },
    { term: "vīṇā", meaning: "vīṇā" },
    { term: "vara", meaning: "excellent" },
    { term: "daṇḍa", meaning: "neck / staff of the vīṇā" },
    { term: "maṇḍita", meaning: "adorned" },
    { term: "karā", meaning: "whose hands" },
    { term: "śveta", meaning: "white" },
    { term: "padma", meaning: "lotus" },
    { term: "āsanā", meaning: "whose seat" },
    { term: "brahma", meaning: "Brahmā" },
    { term: "acyuta", meaning: "Acyuta" },
    { term: "śaṅkara", meaning: "Śaṅkara" },
    { term: "prabhṛtibhiḥ", meaning: "by (those) beginning with" },
    { term: "devaiḥ", meaning: "by the gods" },
    { term: "sadā", meaning: "always" },
    { term: "vanditā", meaning: "praised" },
    { term: "sā", meaning: "she" },
    { term: "mām", meaning: "me" },
    { term: "pātu", meaning: "may she protect" },
    { term: "sarasvatī", meaning: "Sarasvatī" },
    { term: "bhagavatī", meaning: "Blessed Lady" },
    { term: "niḥśeṣa", meaning: "without remainder" },
    { term: "jāḍya", meaning: "dullness" },
    { term: "apahā", meaning: "who takes away" },
  ],
  root: group("sv-verse", "verse", translation, [
    group(
      "sv-form",
      "phrase",
      "white like jasmine, moon, and snow-garland; wrapped in white; vīṇā in hand; seated on a white lotus",
      [
        word("sv-ya1", "she who", [["या", "yā"]]),
        group("sv-white", "phrase", "white like kunda, the moon, and a garland of snow", [
          word("sv-kunda", "white jasmine", [["कु", "ku"], ["न्दे", "nde"]], {
            trailing: "",
          }),
          word("sv-indu", "moon", [["न्दु", "ndu"]], { trailing: "" }),
          word("sv-tusara", "frost / snow", [
            ["तु", "tu"],
            ["षा", "ṣā"],
            ["र", "ra"],
          ], { trailing: "" }),
          word("sv-hara", "garland", [["हा", "hā"], ["र", "ra"]], { trailing: "" }),
          word("sv-dhavala", "white", [["ध", "dha"], ["व", "va"], ["ला", "lā"]]),
        ]),
        word("sv-ya2", "she who", [["या", "yā"]]),
        group("sv-cloth", "phrase", "wrapped in pure white cloth", [
          word("sv-subhra", "pure white", [["शु", "śu"], ["भ्र", "bhra"]], {
            trailing: "",
          }),
          word("sv-vastra", "cloth", [["व", "va"], ["स्त्रा", "strā"]], {
            trailing: "",
          }),
          word("sv-avrta", "wrapped", [["वृ", "vṛ"], ["ता", "tā"]], {
            lineBreakAfter: true,
          }),
        ]),
        word("sv-ya3", "she who", [["या", "yā"]]),
        group("sv-vina-hand", "phrase", "whose hands are adorned with the excellent neck of the vīṇā", [
          word("sv-vina", "vīṇā", [["वी", "vī"], ["णा", "ṇā"]], { trailing: "" }),
          word("sv-vara", "excellent", [["व", "va"], ["र", "ra"]], { trailing: "" }),
          word("sv-danda", "neck / staff of the vīṇā", [["द", "da"], ["ण्ड", "ṇḍa"]], {
            trailing: "",
          }),
          word("sv-mandita", "adorned", [
            ["म", "ma"],
            ["ण्डि", "ṇḍi"],
            ["त", "ta"],
          ], { trailing: "" }),
          word("sv-kara", "whose hands", [["क", "ka"], ["रा", "rā"]]),
        ]),
        word("sv-ya4", "she who", [["या", "yā"]]),
        group("sv-seat", "phrase", "who sits on a white lotus", [
          word("sv-sveta", "white", [["श्वे", "śve"], ["त", "ta"]], { trailing: "" }),
          word("sv-padma", "lotus", [["प", "pa"], ["द्मा", "dmā"]], { trailing: "" }),
          word("sv-asana", "whose seat", [["स", "sa"], ["ना", "nā"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ]),
      ],
    ),
    group(
      "sv-ask",
      "phrase",
      "ever praised by Brahmā, Acyuta, and Śaṅkara — may Sarasvatī protect me and remove all dullness",
      [
        word("sv-ya5", "she who", [["या", "yā"]]),
        group("sv-gods", "phrase", "by (the gods) beginning with Brahmā, Acyuta, and Śaṅkara", [
          word("sv-brahma", "Brahmā", [["ब्र", "bra"], ["ह्मा", "hmā"]], {
            trailing: "",
          }),
          word("sv-acyuta", "Acyuta", [["च्यु", "cyu"], ["त", "ta"]], {
            trailing: "",
          }),
          word("sv-sankara", "Śaṅkara", [
            ["शङ्", "śaṅ"],
            ["क", "ka"],
            ["र", "ra"],
          ], { trailing: "" }),
          word("sv-prabhrtibhih", "by (those) beginning with", [
            ["प्र", "pra"],
            ["भृ", "bhṛ"],
            ["ति", "ti"],
            ["भिर्", "bhir"],
          ], { trailing: "" }),
        ]),
        word("sv-devaih", "by the gods", [["दे", "de"], ["वैः", "vaiḥ"]]),
        word("sv-sada", "always", [["स", "sa"], ["दा", "dā"]]),
        word("sv-vandita", "praised", [["व", "va"], ["न्दि", "ndi"], ["ता", "tā"]], {
          lineBreakAfter: true,
        }),
        word("sv-sa", "she", [["सा", "sā"]]),
        word("sv-mam", "me", [["मां", "māṃ"]]),
        word("sv-patu", "may she protect", [["पा", "pā"], ["तु", "tu"]]),
        word("sv-sarasvati", "Sarasvatī", [
          ["स", "sa"],
          ["र", "ra"],
          ["स्व", "sva"],
          ["ती", "tī"],
        ]),
        word("sv-bhagavati", "Blessed Lady", [
          ["भ", "bha"],
          ["ग", "ga"],
          ["व", "va"],
          ["ती", "tī"],
        ]),
        group("sv-dullness", "phrase", "who utterly removes dullness", [
          word("sv-nihshesha", "without remainder", [
            ["निः", "niḥ"],
            ["शे", "śe"],
            ["ष", "ṣa"],
          ], { trailing: "" }),
          word("sv-jadya", "dullness", [["जा", "jā"], ["ड्या", "ḍyā"]], {
            trailing: "",
          }),
          word("sv-apaha", "who takes away", [["प", "pa"], ["हा", "hā"]], {
            trailing: " ॥",
          }),
        ]),
      ],
    ),
  ]),
};
