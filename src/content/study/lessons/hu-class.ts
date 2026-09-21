import type { LessonBlock } from "../catalog";

export const huClass: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as class 3, or juhotyādigaṇa — “the group starting with juhoti.” The last of the ten stem patterns, the hu class builds its stem by doubling the root. There is no special suffix and no inserted sound:",
  },
  {
    type: "glyphs",
    items: [{ dev: "हु → जुहु", iast: "hu → juhu", note: "offer" }],
  },
  {
    type: "p",
    text: "The strong stem strengthens the vowel; the weak stem stays as the doubled form:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "जुहोति", iast: "juhoti", note: "(Someone) offers." },
      { dev: "जुहुतः", iast: "juhutaḥ", note: "(The two of them) offer." },
    ],
  },
  {
    type: "p",
    text: "The class itself is rare, but doubling is not — many other Sanskrit verbs use it too.",
  },
  { type: "h2", text: "Basic rules of doubling" },
  {
    type: "p",
    text: "Long vowels become short:",
  },
  {
    type: "glyphs",
    items: [{ dev: "दा दा → ददा", iast: "dā dā → dadā" }],
  },
  {
    type: "p",
    text: "Aspirated sounds become unaspirated:",
  },
  {
    type: "glyphs",
    items: [{ dev: "धा धा → दधा", iast: "dhā dhā → dadhā" }],
  },
  {
    type: "p",
    text: "Sounds at the soft palate (ka-class) shift to the hard palate (ca-class):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कि कि → चिकि", iast: "ki ki → ciki" },
      { dev: "हु हु → जुहु", iast: "hu hu → juhu" },
    ],
  },
  {
    type: "p",
    text: "Other minor rules exist; these are the common patterns.",
  },
  { type: "h2", text: "Irregular roots" },
  {
    type: "p",
    text: "Many hu-class roots are irregular. The most important are dā (“give”) and dhā (“place”). dā has strong stem dadā and weak stem dad:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामः फलं सीतायै ददाति।",
        iast: "rāmaḥ phalaṃ sītāyai dadāti.",
        note: "Rama gives the fruit to Sita.",
      },
      {
        dev: "ते फलानि रामाय ददति।",
        iast: "te phalāni rāmāya dadati.",
        note: "They give the fruits to Rama.",
      },
    ],
  },
  {
    type: "p",
    text: "It also has the irregular command form dehi:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "देहि मे फलम्!",
        iast: "dehi me phalam!",
        note: "Give me a fruit!",
      },
    ],
  },
  {
    type: "p",
    text: "dhā generally follows the same pattern as dā.",
  },
  { type: "h2", text: "Endings of the hu class" },
  {
    type: "p",
    text: "Parasmaipada endings match the other complex classes, with a few changes. In the present, plural third person uses -ati instead of -anti:",
  },
  {
    type: "table",
    caption: "Present tense (parasmaipada)",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "प्रथम", iast: "prathama" },
        cells: [
          { dev: "जुहोति", iast: "juhoti" },
          { dev: "जुहुतः", iast: "juhutaḥ" },
          { dev: "जुह्वति", iast: "juhvati" },
        ],
      },
      {
        label: { en: "2nd", dev: "मध्यम", iast: "madhyama" },
        cells: [
          { dev: "जुहोषि", iast: "juhoṣi" },
          { dev: "जुहुथः", iast: "juhuthaḥ" },
          { dev: "जुहुथ", iast: "juhutha" },
        ],
      },
      {
        label: { en: "1st", dev: "उत्तम", iast: "uttama" },
        cells: [
          { dev: "जुहोमि", iast: "juhomi" },
          { dev: "जुहुवः", iast: "juhuvaḥ" },
          { dev: "जुहुमः", iast: "juhumaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "The command mood is normal, but second-person singular uses -dhi instead of -hi:",
  },
  {
    type: "table",
    caption: "Command mood (parasmaipada)",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "प्रथम", iast: "prathama" },
        cells: [
          { dev: "जुहोतु", iast: "juhotu" },
          { dev: "जुहुताम्", iast: "juhutām" },
          { dev: "जुह्वतु", iast: "juhvatu" },
        ],
      },
      {
        label: { en: "2nd", dev: "मध्यम", iast: "madhyama" },
        cells: [
          { dev: "जुहुधि", iast: "juhudhi" },
          { dev: "जुहुतम्", iast: "juhutam" },
          { dev: "जुहुत", iast: "juhuta" },
        ],
      },
      {
        label: { en: "1st", dev: "उत्तम", iast: "uttama" },
        cells: [
          { dev: "जुहवानि", iast: "juhavāni" },
          { dev: "जुहवाव", iast: "juhavāva" },
          { dev: "जुहवाम", iast: "juhavāma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "The ordinary past is normal, but plural third person uses -uḥ instead of -an. That ending forces a vowel change, so the form is ajuhavuḥ, not *ajuhuvuḥ:",
  },
  {
    type: "table",
    caption: "Ordinary past (parasmaipada)",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "प्रथम", iast: "prathama" },
        cells: [
          { dev: "अजुहोत्", iast: "ajuhot" },
          { dev: "अजुहुताम्", iast: "ajuhutām" },
          { dev: "अजुहवुः", iast: "ajuhavuḥ" },
        ],
      },
      {
        label: { en: "2nd", dev: "मध्यम", iast: "madhyama" },
        cells: [
          { dev: "अजुहोः", iast: "ajuhoḥ" },
          { dev: "अजुहुतम्", iast: "ajuhutam" },
          { dev: "अजुहुत", iast: "ajuhuta" },
        ],
      },
      {
        label: { en: "1st", dev: "उत्तम", iast: "uttama" },
        cells: [
          { dev: "अजुहवम्", iast: "ajuhavam" },
          { dev: "अजुहुव", iast: "ajuhuva" },
          { dev: "अजुहुम", iast: "ajuhuma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "The potential mood is normal:",
  },
  {
    type: "table",
    caption: "Potential mood (parasmaipada)",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "प्रथम", iast: "prathama" },
        cells: [
          { dev: "जुहुयात्", iast: "juhuyāt" },
          { dev: "जुहुयाताम्", iast: "juhuyātām" },
          { dev: "जुहुयुः", iast: "juhuyuḥ" },
        ],
      },
      {
        label: { en: "2nd", dev: "मध्यम", iast: "madhyama" },
        cells: [
          { dev: "जुहुयाः", iast: "juhuyāḥ" },
          { dev: "जुहुयातम्", iast: "juhuyātam" },
          { dev: "जुहुयात", iast: "juhuyāta" },
        ],
      },
      {
        label: { en: "1st", dev: "उत्तम", iast: "uttama" },
        cells: [
          { dev: "जुहुयाम्", iast: "juhuyām" },
          { dev: "जुहुयाव", iast: "juhuyāva" },
          { dev: "जुहुयाम", iast: "juhuyāma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Ātmanepada endings are the same as for the other complex classes.",
  },
  { type: "h2", text: "Review: the ten classes" },
  {
    type: "p",
    text: "All ten verb classes in traditional order. The ad class is illustrated with dviṣ; simple classes leave the weak stem blank:",
  },
  {
    type: "table",
    labelHeader: "Class",
    headers: ["Strong stem", "Weak stem"],
    rows: [
      {
        label: { en: "bhū", dev: "भू", iast: "bhū" },
        cells: [
          { dev: "भव", iast: "bhava" },
          { dev: "—", iast: "—" },
        ],
      },
      {
        label: { en: "ad", dev: "अद्", iast: "ad" },
        cells: [
          { dev: "द्वेष्", iast: "dveṣ" },
          { dev: "द्विष्", iast: "dviṣ" },
        ],
      },
      {
        label: { en: "hu", dev: "हु", iast: "hu" },
        cells: [
          { dev: "जुहो", iast: "juho" },
          { dev: "जुहु", iast: "juhu" },
        ],
      },
      {
        label: { en: "div", dev: "दिव्", iast: "div" },
        cells: [
          { dev: "दीव्य", iast: "dīvya" },
          { dev: "—", iast: "—" },
        ],
      },
      {
        label: { en: "su", dev: "सु", iast: "su" },
        cells: [
          { dev: "सुनो", iast: "suno" },
          { dev: "सुनु", iast: "sunu" },
        ],
      },
      {
        label: { en: "tud", dev: "तुद्", iast: "tud" },
        cells: [
          { dev: "तुद", iast: "tuda" },
          { dev: "—", iast: "—" },
        ],
      },
      {
        label: { en: "rudh", dev: "रुध्", iast: "rudh" },
        cells: [
          { dev: "रुनध्", iast: "runadh" },
          { dev: "रुन्ध्", iast: "rundh" },
        ],
      },
      {
        label: { en: "tan", dev: "तन्", iast: "tan" },
        cells: [
          { dev: "तनो", iast: "tano" },
          { dev: "तनु", iast: "tanu" },
        ],
      },
      {
        label: { en: "krī", dev: "क्री", iast: "krī" },
        cells: [
          { dev: "क्रीणा", iast: "krīṇā" },
          { dev: "क्रीणी", iast: "krīṇī" },
        ],
      },
      {
        label: { en: "cur", dev: "चुर्", iast: "cur" },
        cells: [
          { dev: "चोरय", iast: "coraya" },
          { dev: "—", iast: "—" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs/the-hu-class/ (and its verbs-1 twin): class 3 / juhotyādigaṇa; doubling with strong juho / weak juhu; the three common doubling rules; irregular dā (dadā/dad, dehi) and dhā; present -ati, command -dhi, past -uḥ (ajuhavuḥ); the four parasmaipada paradigms for hu; ātmanepada noted as matching other complex classes; the ten-class strong/weak review table. Full ātmanepada grids and review quiz items were not copied.",
  },
];
