import type { LessonBlock } from "../catalog";

export const nominalSuffixes: LessonBlock[] = [
  {
    type: "p",
    text: "Common nominal suffixes, listed alphabetically for reference. Unless a note says otherwise, none of them cause sound changes on their own.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अ", iast: "a" },
      { dev: "इन्", iast: "in" },
      { dev: "क", iast: "ka" },
      { dev: "तम", iast: "tama" },
      { dev: "तर", iast: "tara" },
      { dev: "तस्", iast: "tas" },
      { dev: "ता", iast: "tā" },
      { dev: "त्व", iast: "tva" },
      { dev: "मत्", iast: "mat" },
      { dev: "मय", iast: "maya" },
      { dev: "य", iast: "ya" },
      { dev: "वत्", iast: "vat" },
    ],
  },
  { type: "h2", text: "-a" },
  {
    type: "p",
    text: "Also aṇ. Often makes adjectives meaning “descending from X” or “of X.” Strengthen the stem’s first vowel to the strongest grade; if the stem ends in -a, drop that -a:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कौरव", iast: "kaurava", note: "kuru + a — descending from Kuru; a Kaurava" },
      { dev: "ऐन्द्र", iast: "aindra", note: "indra + a — of Indra" },
    ],
  },
  { type: "h2", text: "-in" },
  {
    type: "p",
    text: "Also ini̐. Feminine -inī. Adjectives meaning “characterized by X.” Drop a final stem -a:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "योगिन्", iast: "yogin", note: "yoga + in — characterized by yoga; a yogi" },
      { dev: "योगिनी", iast: "yoginī", note: "yoga + inī — a female yogi; a yogini" },
    ],
  },
  { type: "h2", text: "-ka" },
  {
    type: "p",
    text: "Often “a little X” or “a dear X”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "पुत्रक", iast: "putraka", note: "putra + ka — little son, dear son" },
    ],
  },
  { type: "h2", text: "-tama" },
  {
    type: "p",
    text: "Also tamap / gha. Feminine -tamā. Adjectives meaning “most X”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "बलवत्तम",
        iast: "balavattama",
        note: "balavat + tama — strong → strongest",
      },
    ],
  },
  { type: "h2", text: "-tara" },
  {
    type: "p",
    text: "Also tarap / gha. Feminine -tarā. Adjectives meaning “more X”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "सुन्दरतर",
        iast: "sundaratara",
        note: "sundara + tara — beautiful → more beautiful",
      },
    ],
  },
  { type: "h2", text: "-tas" },
  {
    type: "p",
    text: "Also tasi̐. Makes an uninflected word meaning “from X.” Sandhi yields -taḥ:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अग्नितः", iast: "agnitaḥ", note: "agni → from the fire" },
    ],
  },
  { type: "h2", text: "-tā" },
  {
    type: "p",
    text: "Also tal. Feminine nouns meaning “X-ness” or “the state of being X”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "योग्यता",
        iast: "yogyatā",
        note: "yogya + tā — useful, appropriate → utility, propriety",
      },
    ],
  },
  { type: "h2", text: "-tva" },
  {
    type: "p",
    text: "Same sense as -tā, but neuter stems:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अमरत्व", iast: "amaratva", note: "amara + tva — immortal → immortality" },
      {
        dev: "समत्व",
        iast: "samatva",
        note: "sama + tva — same, even → sameness, evenness, equanimity",
      },
    ],
  },
  { type: "h2", text: "-mat" },
  {
    type: "p",
    text: "Also matu̐p. Feminine -matī. Adjectives meaning “possessing X” or “characterized by X.” Some stems take -vat instead (see below):",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "हनुमत्",
        iast: "hanumat",
        note: "hanu + mat — characterized by (prominent) jaws; Hanuman",
      },
    ],
  },
  { type: "h2", text: "-maya" },
  {
    type: "p",
    text: "Also mayaṭ. Feminine -mayī. Adjectives meaning “made of X”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "हिरण्यमय",
        iast: "hiraṇyamaya",
        note: "hiraṇya + maya — gold → made of gold, golden",
      },
    ],
  },
  { type: "h2", text: "-ya" },
  {
    type: "p",
    text: "Neuter nouns with an abstract sense. Usually strengthen the stem’s first vowel to the strongest grade:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सादृश्य", iast: "sādṛśya", note: "sadṛśa → similar (to) → similarity" },
    ],
  },
  { type: "h2", text: "-vat" },
  {
    type: "p",
    text: "Also vatu̐p. Feminine -vatī. Same meaning as -mat. Use -vat when the stem ends in m or a, or has m or a as its next-to-last letter:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "भगवत्", iast: "bhagavat", note: "bhaga + vat — a is the last letter" },
      {
        dev: "लक्ष्मीवत्",
        iast: "lakṣmīvat",
        note: "lakṣmī + vat — m is the next-to-last letter",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org nominal-suffixes page: the alphabetical set a, in, ka, tama, tara, tas, tā, tva, mat, maya, ya, vat; traditional names where given; the printed stem + suffix examples and sense glosses; -mat vs -vat selection; the closing note that many more suffixes exist. No extra stems.",
  },
];
