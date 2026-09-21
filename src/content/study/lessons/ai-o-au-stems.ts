import type { LessonBlock } from "../catalog";

export const aiOAuStems: LessonBlock[] = [
  {
    type: "p",
    text: "Only a few stems end in -ai, -o, or -au. They generally take the basic nominal endings, with a handful of stem changes.",
  },
  { type: "h2", text: "-ai stems: rai" },
  {
    type: "p",
    text: "The main -ai stem is masculine rai, “wealth” or “prosperity.” Before a vowel-initial ending the stem stays rai; otherwise it becomes rā.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "राः", iast: "rāḥ" },
          { dev: "रायौ", iast: "rāyau" },
          { dev: "रायः", iast: "rāyaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "रायम्", iast: "rāyam" },
          { dev: "रायौ", iast: "rāyau" },
          { dev: "रायः", iast: "rāyaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "राया", iast: "rāyā" },
          { dev: "राभ्याम्", iast: "rābhyām" },
          { dev: "राभिः", iast: "rābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "राये", iast: "rāye" },
          { dev: "राभ्याम्", iast: "rābhyām" },
          { dev: "राभ्यः", iast: "rābhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "रायः", iast: "rāyaḥ" },
          { dev: "राभ्याम्", iast: "rābhyām" },
          { dev: "राभ्यः", iast: "rābhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "रायः", iast: "rāyaḥ" },
          { dev: "रायोः", iast: "rāyoḥ" },
          { dev: "रायाम्", iast: "rāyām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "रायि", iast: "rāyi" },
          { dev: "रायोः", iast: "rāyoḥ" },
          { dev: "राषु", iast: "rāṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "राः", iast: "rāḥ" },
          { dev: "रायौ", iast: "rāyau" },
          { dev: "रायः", iast: "rāyaḥ" },
        ],
      },
    ],
  },
  { type: "h2", text: "-o stems: go" },
  {
    type: "p",
    text: "The two common -o stems are go, “cow,” and dyo, “sky” or “heaven.” go is masculine or feminine by the animal’s gender; dyo is always feminine. The paradigm below is go; the stem takes basic endings with several small changes.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "गौः", iast: "gauḥ" },
          { dev: "गावौ", iast: "gāvau" },
          { dev: "गावः", iast: "gāvaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "गाम्", iast: "gām" },
          { dev: "गावौ", iast: "gāvau" },
          { dev: "गाः", iast: "gāḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "गवा", iast: "gavā" },
          { dev: "गोभ्याम्", iast: "gobhyām" },
          { dev: "गोभिः", iast: "gobhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "गवे", iast: "gave" },
          { dev: "गोभ्याम्", iast: "gobhyām" },
          { dev: "गोभ्यः", iast: "gobhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "गोः", iast: "goḥ" },
          { dev: "गोभ्याम्", iast: "gobhyām" },
          { dev: "गोभ्यः", iast: "gobhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "गोः", iast: "goḥ" },
          { dev: "गवोः", iast: "gavoḥ" },
          { dev: "गवाम्", iast: "gavām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "गवि", iast: "gavi" },
          { dev: "गवोः", iast: "gavoḥ" },
          { dev: "गोषु", iast: "goṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "गौः", iast: "gauḥ" },
          { dev: "गावौ", iast: "gāvau" },
          { dev: "गावः", iast: "gāvaḥ" },
        ],
      },
    ],
  },
  { type: "h2", text: "-au stems: nau" },
  {
    type: "p",
    text: "The main -au stem is feminine nau, “boat.” It uses the ordinary endings with ordinary sandhi.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "नौः", iast: "nauḥ" },
          { dev: "नावौ", iast: "nāvau" },
          { dev: "नावः", iast: "nāvaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "नावम्", iast: "nāvam" },
          { dev: "नावौ", iast: "nāvau" },
          { dev: "नावः", iast: "nāvaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "नावा", iast: "nāvā" },
          { dev: "नौभ्याम्", iast: "naubhyām" },
          { dev: "नौभिः", iast: "naubhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "नावे", iast: "nāve" },
          { dev: "नौभ्याम्", iast: "naubhyām" },
          { dev: "नौभ्यः", iast: "naubhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "नावः", iast: "nāvaḥ" },
          { dev: "नौभ्याम्", iast: "naubhyām" },
          { dev: "नौभ्यः", iast: "naubhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "नावः", iast: "nāvaḥ" },
          { dev: "नावोः", iast: "nāvoḥ" },
          { dev: "नावाम्", iast: "nāvām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "नावि", iast: "nāvi" },
          { dev: "नावोः", iast: "nāvoḥ" },
          { dev: "नौषु", iast: "nauṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "नौः", iast: "nauḥ" },
          { dev: "नावौ", iast: "nāvau" },
          { dev: "नावः", iast: "nāvaḥ" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org page: the rarity of -ai/-o/-au stems; masculine rai with the rai→rā stem change and its full paradigm; go and dyo as the common -o stems (paradigm for go only); feminine nau with its full paradigm. No extra nouns.",
  },
];
