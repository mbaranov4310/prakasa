import type { LessonBlock } from "../catalog";

export const desiderativeRoots: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as sannanta (“ending in the san affix”). The name is technical; the meaning is simple: wanting to do something.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "जिगमिषामि", iast: "jigamiṣāmi", note: "I want to go" },
    ],
  },
  {
    type: "p",
    text: "A few roots form this derived root with no “wanting” sense. Those usually carry a special idiomatic meaning:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "तिज् → तितिक्षति",
        iast: "tij → titikṣati",
        note: "be sharp → endures",
      },
      {
        dev: "गुप् → जुगुप्सति",
        iast: "gup → jugupsati",
        note: "protect → detests, despises",
      },
      {
        dev: "मन् → मीमांसति",
        iast: "man → mīmāṃsati",
        note: "think → investigates",
      },
    ],
  },
  { type: "h2", text: "Making the root" },
  {
    type: "p",
    text: "Double the root and add -s. Some roots also take the connecting iṭ vowel. The pattern is close to distant-past doubling, with a few changes.",
  },
  {
    type: "p",
    text: "First, a in the doubled sound becomes i:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "स्था → तिष्ठास्",
        iast: "sthā → tiṣṭhās",
        note: "stand → want to stand",
      },
    ],
  },
  {
    type: "p",
    text: "Roots ending in a short vowel lengthen that vowel:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "स्तु → तुष्टूस्",
        iast: "stu → tuṣṭūs",
        note: "praise → want to praise",
      },
      {
        dev: "श्रु → शुश्रूष्",
        iast: "śru → śuśrūṣ",
        note: "hear → want to hear; attend or serve (idiomatic)",
      },
    ],
  },
  {
    type: "p",
    text: "Roots ending in -ṛ or -ṝ generally change the final vowel to -īr:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "कृ → चिकीर्ष्",
        iast: "kṛ → cikīrṣ",
        note: "do → want to do",
      },
      {
        dev: "तॄ → तितीर्ष्",
        iast: "tṝ → titīrṣ",
        note: "cross → want to cross",
      },
    ],
  },
  {
    type: "p",
    text: "But they use -ūr when that vowel follows a lip consonant (pa-class):",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "पॄ → पुपूर्ष्",
        iast: "pṝ → pupūrṣ",
        note: "fill → want to fill",
      },
      {
        dev: "मृ → मुमूर्ष्",
        iast: "mṛ → mumūrṣ",
        note: "die → “want to die”; be about to die",
      },
    ],
  },
  {
    type: "p",
    text: "A few common roots are irregular:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "आप् → ईप्स्",
        iast: "āp → īps",
        note: "obtain → want to obtain",
      },
      {
        dev: "लभ् → लिप्स्",
        iast: "labh → lips",
        note: "obtain → want to obtain",
      },
    ],
  },
  { type: "h2", text: "Using the root" },
  {
    type: "p",
    text: "Desiderative roots generally keep the same pada as the original root:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "लभसे → लिप्ससे",
        iast: "labhase → lipsase",
        note: "you obtain → you want to obtain",
      },
      {
        dev: "करोमि → चिकीर्षामि",
        iast: "karomi → cikīrṣāmi",
        note: "I do → I want to do (parasmaipada)",
      },
      {
        dev: "कुर्वे → चिकीर्षे",
        iast: "kurve → cikīrṣe",
        note: "I do → I want to do (ātmanepada)",
      },
    ],
  },
  {
    type: "p",
    text: "For the special tense-moods, treat the root as if it belonged to the tud class:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "चिकीर्षन्ति",
        iast: "cikīrṣanti",
        note: "they want to do",
      },
      {
        dev: "जिगमिषेत्",
        iast: "jigamiṣet",
        note: "(someone) might want to go",
      },
    ],
  },
  {
    type: "p",
    text: "For the distant past, use the suffix -ām:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "जिगमिषां चकार",
        iast: "jigamiṣāṃ cakāra",
        note: "(someone) wanted to go (long ago)",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org desiderative-roots page: the name sannanta; wanting-to sense and three idiomatic non-wanting roots; doubling with -s / iṭ, a→i in the reduplicant, short-vowel lengthening, ṛ/ṝ → īr (ūr after lip sounds), and the irregular āp / labh forms; same-pada use; tud-class special tense-moods; distant past with -ām. No extra roots or paradigms.",
  },
];
