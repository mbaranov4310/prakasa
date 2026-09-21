import type { LessonBlock } from "../catalog";

export const asmadYusmad: LessonBlock[] = [
  {
    type: "p",
    text: "Pronouns are words like “I,” “you,” “he,” and “they.” They can stand in for other nominals, and they are often dropped when context already makes the person clear. Pronouns share many endings with other nominals, but their shapes are irregular and must be learned one stem at a time.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो नगरं गच्छति",
        iast: "rāmo nagaraṃ gacchati",
        note: "Rāma goes to the city",
      },
      {
        dev: "स नगरं गच्छति",
        iast: "sa nagaraṃ gacchati",
        note: "He goes to the city",
      },
      {
        dev: "नगरं गच्छति",
        iast: "nagaraṃ gacchati",
        note: "(He) goes to the city",
      },
    ],
  },
  { type: "h2", text: "asmad — I, we" },
  {
    type: "p",
    text: "The first-person pronoun is asmad. It has no vocative (case 8); many pronouns stop at the locative. The paradigm also mixes stems — aham, mām, āvām, vayam, asmān, and so on — rather than one fixed stem plus endings.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "अहम्", iast: "aham" },
          { dev: "आवाम्", iast: "āvām" },
          { dev: "वयम्", iast: "vayam" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "माम्", iast: "mām" },
          { dev: "आवाम्", iast: "āvām" },
          { dev: "अस्मान्", iast: "asmān" },
        ],
      },
      {
        label: {
          en: "instrumental",
          dev: "तृतीया",
          iast: "tṛtīyā",
          cue: "with, by means of",
        },
        cells: [
          { dev: "मया", iast: "mayā" },
          { dev: "आवाभ्याम्", iast: "āvābhyām" },
          { dev: "अस्माभिः", iast: "asmābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "मह्यम्", iast: "mahyam" },
          { dev: "आवाभ्याम्", iast: "āvābhyām" },
          { dev: "अस्मभ्यम्", iast: "asmabhyam" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "मत्", iast: "mat" },
          { dev: "आवाभ्याम्", iast: "āvābhyām" },
          { dev: "अस्मत्", iast: "asmat" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "मम", iast: "mama" },
          { dev: "आवयोः", iast: "āvayoḥ" },
          { dev: "अस्माकम्", iast: "asmākam" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "मयि", iast: "mayi" },
          { dev: "आवयोः", iast: "āvayoḥ" },
          { dev: "अस्मासु", iast: "asmāsu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Shared cells: dual nominative and accusative are āvām; dual instrumental through ablative are āvābhyām; dual genitive and locative are āvayoḥ.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अहम्", iast: "aham", note: "I — cf. English ego" },
      { dev: "माम्", iast: "mām", note: "me" },
      { dev: "आवाम्", iast: "āvām", note: "the two of us" },
      { dev: "वयम्", iast: "vayam", note: "we" },
      { dev: "अस्मान्", iast: "asmān", note: "us" },
    ],
  },
  { type: "h2", text: "yuṣmad — you" },
  {
    type: "p",
    text: "yuṣmad (“you”) follows the same layout as asmad: seven cases, mixed stems, and the same dual sharing pattern.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "त्वम्", iast: "tvam" },
          { dev: "युवाम्", iast: "yuvām" },
          { dev: "यूयम्", iast: "yūyam" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "त्वाम्", iast: "tvām" },
          { dev: "युवाम्", iast: "yuvām" },
          { dev: "युष्मान्", iast: "yuṣmān" },
        ],
      },
      {
        label: {
          en: "instrumental",
          dev: "तृतीया",
          iast: "tṛtīyā",
          cue: "with, by means of",
        },
        cells: [
          { dev: "त्वया", iast: "tvayā" },
          { dev: "युवाभ्याम्", iast: "yuvābhyām" },
          { dev: "युष्माभिः", iast: "yuṣmābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "तुभ्यम्", iast: "tubhyam" },
          { dev: "युवाभ्याम्", iast: "yuvābhyām" },
          { dev: "युष्मभ्यम्", iast: "yuṣmabhyam" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "त्वत्", iast: "tvat" },
          { dev: "युवाभ्याम्", iast: "yuvābhyām" },
          { dev: "युष्मत्", iast: "yuṣmat" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "तव", iast: "tava" },
          { dev: "युवयोः", iast: "yuvayoḥ" },
          { dev: "युष्माकम्", iast: "yuṣmākam" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "त्वयि", iast: "tvayi" },
          { dev: "युवयोः", iast: "yuvayoḥ" },
          { dev: "युष्मासु", iast: "yuṣmāsu" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Shared cells: dual nominative and accusative are yuvām; dual instrumental through ablative are yuvābhyām; dual genitive and locative are yuvayoḥ.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "त्वम्", iast: "tvam", note: "you (one) — cf. English thou" },
      { dev: "यूयम्", iast: "yūyam", note: "you (many)" },
    ],
  },
  {
    type: "p",
    text: "Transferred from learnsanskrit.org asmad and yuṣmad (CC BY 4.0): pronoun framing with the rāma / sa / omitted-subject examples; full asmad and yuṣmad 7×3 paradigms (no vocative); stem-mix and English-cognate notes. Case labels use the Prakāśa eight-name set for cases 1–7; case 8 is omitted as on the reference.",
  },
];
