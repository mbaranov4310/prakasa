import type { LessonBlock } from "../catalog";

export const visargaSandhi: LessonBlock[] = [
  {
    type: "p",
    text: "Visarga sandhi is sandhi when the first sound is the visarga. Many words end in ḥ, so these changes are common:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो योद्धुम्",
        iast: "rāmo yoddhum",
        note: "rāmaḥ yoddhum → … icchati",
      },
    ],
  },
  { type: "h2", text: "Where the visarga comes from" },
  {
    type: "p",
    text: "Final s and r become the visarga at the end of a word. Most visargas you meet come from s; a few come from r, and those have small rule differences.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामः", iast: "rāmaḥ", note: "from rāmas" },
      { dev: "मातः", iast: "mātaḥ", note: "from mātar, “mother!”" },
    ],
  },
  { type: "h2", text: "Common changes" },
  {
    type: "p",
    text: "Before an unvoiced stop, the visarga can become ś, ṣ, or s to match that stop’s place of articulation — for every kind of visarga:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "बालश् चरति", iast: "bālaś carati", note: "bālaḥ + carati" },
      {
        dev: "बालष् टिप्पणीं",
        iast: "bālaṣ ṭippaṇīṃ",
        note: "bālaḥ + ṭippaṇīm",
      },
      { dev: "बालस् तिष्ठति", iast: "bālas tiṣṭhati", note: "bālaḥ + tiṣṭhati" },
    ],
  },
  {
    type: "p",
    text: "The same matching can happen before śa, ṣa, and sa, but printed text usually leaves the visarga as ḥ there (नरः शिलां, नरः षण्डं, नरः सागरं).",
  },
  { type: "h2", text: "-ās sandhi" },
  {
    type: "p",
    text: "If the word originally ended in -ās, the visarga disappears before any voiced sound:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नरा उदकं", iast: "narā udakaṃ", note: "narāḥ + udakam" },
      { dev: "नरा मद्यं", iast: "narā madyaṃ", note: "narāḥ + madyam" },
      { dev: "नरा वमन्ति", iast: "narā vamanti", note: "narāḥ + vamanti" },
    ],
  },
  { type: "h2", text: "-as sandhi" },
  {
    type: "p",
    text: "If the word originally ended in -as, the visarga becomes o before a voiced consonant:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नरो मद्यं", iast: "naro madyaṃ", note: "naraḥ + madyaṃ" },
    ],
  },
  {
    type: "p",
    text: "Before a, all three sounds become o, and an avagraha (ऽ) often marks the lost vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नरोऽमृतं", iast: "naro 'mṛtaṃ", note: "naraḥ + amṛtaṃ" },
    ],
  },
  {
    type: "p",
    text: "Before other vowels, the visarga simply disappears (as with -ās):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नर उदकं", iast: "nara udakaṃ", note: "naraḥ + udakam" },
      { dev: "नर ओदनम्", iast: "nara odanam", note: "naraḥ + odanam" },
    ],
  },
  { type: "h2", text: "Other endings" },
  {
    type: "p",
    text: "Otherwise the visarga becomes r before any voiced sound:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अग्निर् अस्ति", iast: "agnir asti", note: "agniḥ + asti" },
      { dev: "वायुर् अस्ति", iast: "vāyur asti", note: "vāyuḥ + asti" },
      { dev: "द्वार् अस्ति", iast: "dvār asti", note: "dvāḥ from dvār + asti" },
    ],
  },
  {
    type: "p",
    text: "But before r, the visarga disappears and the vowel before it lengthens:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अग्नी रोचते", iast: "agnī rocate", note: "agniḥ + rocate" },
      { dev: "वायू रोचते", iast: "vāyū rocate", note: "vāyuḥ + rocate" },
      { dev: "द्वा रोचते", iast: "dvā rocate", note: "dvāḥ from dvār + rocate" },
    ],
  },
  { type: "h2", text: "saḥ and eṣaḥ" },
  {
    type: "p",
    text: "saḥ (“he,” “that”) and eṣaḥ (“he,” “this”) are special. Before a they behave like ordinary -as (o plus avagraha). Before every other sound, the visarga simply drops:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सोऽचिन्तयत्", iast: "so 'cintayat", note: "saḥ + acintayat" },
      { dev: "एषोऽपश्यत्", iast: "eṣo 'paśyat", note: "eṣaḥ + apaśyat" },
      { dev: "स इच्छति", iast: "sa icchati", note: "saḥ + icchati" },
      { dev: "स चिन्तयति", iast: "sa cintayati", note: "saḥ + cintayati" },
      { dev: "एष पश्यति", iast: "eṣa paśyati", note: "eṣaḥ + paśyati" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org visarga-sandhi page: origin of ḥ from s/r; matching ś/ṣ/s before unvoiced stops; -ās dropping before voiced sounds; -as → o before voiced consonants, o' before a, drop before other vowels; other endings → r (or lengthen before r); saḥ/eṣaḥ. The guide’s ending×follower summary grid is covered by these sections, not copied as a numeric table. Examples are the page’s own.",
  },
];
