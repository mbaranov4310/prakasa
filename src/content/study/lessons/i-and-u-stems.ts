import type { LessonBlock } from "../catalog";

const nom = { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" };
const acc = { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" };
const ins = {
  en: "instrumental",
  dev: "तृतीया",
  iast: "tṛtīyā",
  cue: "with, by means of",
};
const dat = { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" };
const abl = { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" };
const gen = { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" };
const loc = { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" };
const voc = { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" };

export const iAndUStems: LessonBlock[] = [
  {
    type: "p",
    text: "The -a family is masculine or neuter; the -ā, -ī, and -ū family is mostly feminine. Stems in short -i and -u can be any of the three genders. This page walks both families with the adjective stems śuci, “shining, clear, pure,” and madhu, “sweet” (neuter also “honey”).",
  },
  { type: "h2", text: "Masculine śuci, 8 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [
          { dev: "शुचिः", iast: "śuciḥ" },
          { dev: "शुची", iast: "śucī" },
          { dev: "शुचयः", iast: "śucayaḥ" },
        ],
      },
      {
        label: acc,
        cells: [
          { dev: "शुचिम्", iast: "śucim" },
          { dev: "शुची", iast: "śucī" },
          { dev: "शुचीन्", iast: "śucīn" },
        ],
      },
      {
        label: ins,
        cells: [
          { dev: "शुचिना", iast: "śucinā" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभिः", iast: "śucibhiḥ" },
        ],
      },
      {
        label: dat,
        cells: [
          { dev: "शुचये", iast: "śucaye" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभ्यः", iast: "śucibhyaḥ" },
        ],
      },
      {
        label: abl,
        cells: [
          { dev: "शुचेः", iast: "śuceḥ" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभ्यः", iast: "śucibhyaḥ" },
        ],
      },
      {
        label: gen,
        cells: [
          { dev: "शुचेः", iast: "śuceḥ" },
          { dev: "शुच्योः", iast: "śucyoḥ" },
          { dev: "शुचीनाम्", iast: "śucīnām" },
        ],
      },
      {
        label: loc,
        cells: [
          { dev: "शुचौ", iast: "śucau" },
          { dev: "शुच्योः", iast: "śucyoḥ" },
          { dev: "शुचिषु", iast: "śuciṣu" },
        ],
      },
      {
        label: voc,
        cells: [
          { dev: "शुचे", iast: "śuce" },
          { dev: "शुची", iast: "śucī" },
          { dev: "शुचयः", iast: "śucayaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Most endings track the basic set, with a few singular quirks: instrumental adds an n (śucinā), and dative strengthens i to e before the ending (śucaye). Dual nominative–accusative–vocative use long ī (śucī). Accusative and genitive plural look like the -a stems (śucīn, śucīnām).",
  },
  {
    type: "glyphs",
    items: [
      { dev: "शुचिना", iast: "śucinā", note: "śuci, singular instrumental" },
      { dev: "शुचये", iast: "śucaye", note: "śuci, singular dative" },
      { dev: "शुचेः", iast: "śuceḥ", note: "ablative / genitive singular" },
      { dev: "शुचौ", iast: "śucau", note: "locative singular" },
      { dev: "शुचे", iast: "śuce", note: "vocative singular" },
    ],
  },
  { type: "h2", text: "Feminine śuci" },
  {
    type: "p",
    text: "Feminine -i stems match the masculine pattern, but in singular dative through locative they may optionally act as if they end in -ī. Accusative plural is śucīḥ, not masculine śucīn.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [
          { dev: "शुचिः", iast: "śuciḥ" },
          { dev: "शुची", iast: "śucī" },
          { dev: "शुचयः", iast: "śucayaḥ" },
        ],
      },
      {
        label: acc,
        cells: [
          { dev: "शुचिम्", iast: "śucim" },
          { dev: "शुची", iast: "śucī" },
          { dev: "शुचीः", iast: "śucīḥ" },
        ],
      },
      {
        label: ins,
        cells: [
          { dev: "शुचिना", iast: "śucinā" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभिः", iast: "śucibhiḥ" },
        ],
      },
      {
        label: dat,
        cells: [
          { dev: "शुचये, शुच्यै", iast: "śucaye, śucyai" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभ्यः", iast: "śucibhyaḥ" },
        ],
      },
      {
        label: abl,
        cells: [
          { dev: "शुचेः, शुच्याः", iast: "śuceḥ, śucyāḥ" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभ्यः", iast: "śucibhyaḥ" },
        ],
      },
      {
        label: gen,
        cells: [
          { dev: "शुचेः, शुच्याः", iast: "śuceḥ, śucyāḥ" },
          { dev: "शुच्योः", iast: "śucyoḥ" },
          { dev: "शुचीनाम्", iast: "śucīnām" },
        ],
      },
      {
        label: loc,
        cells: [
          { dev: "शुचौ, शुच्याम्", iast: "śucau, śucyām" },
          { dev: "शुच्योः", iast: "śucyoḥ" },
          { dev: "शुचिषु", iast: "śuciṣu" },
        ],
      },
      {
        label: voc,
        cells: [
          { dev: "शुचे", iast: "śuce" },
          { dev: "शुची", iast: "śucī" },
          { dev: "शुचयः", iast: "śucayaḥ" },
        ],
      },
    ],
  },
  { type: "h2", text: "Neuter śuci" },
  {
    type: "p",
    text: "Neuter -i uses the basic nominal endings, but inserts n before a vowel-initial ending, and keeps long ī in the genitive plural (śucīnām). Nominative, accusative, and vocative share one form in each number.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [
          { dev: "शुचि", iast: "śuci" },
          { dev: "शुचिनी", iast: "śucinī" },
          { dev: "शुचीनि", iast: "śucīni" },
        ],
      },
      {
        label: acc,
        cells: [
          { dev: "शुचि", iast: "śuci" },
          { dev: "शुचिनी", iast: "śucinī" },
          { dev: "शुचीनि", iast: "śucīni" },
        ],
      },
      {
        label: ins,
        cells: [
          { dev: "शुचिना", iast: "śucinā" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभिः", iast: "śucibhiḥ" },
        ],
      },
      {
        label: dat,
        cells: [
          { dev: "शुचिने", iast: "śucine" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभ्यः", iast: "śucibhyaḥ" },
        ],
      },
      {
        label: abl,
        cells: [
          { dev: "शुचिनः", iast: "śucinaḥ" },
          { dev: "शुचिभ्याम्", iast: "śucibhyām" },
          { dev: "शुचिभ्यः", iast: "śucibhyaḥ" },
        ],
      },
      {
        label: gen,
        cells: [
          { dev: "शुचिनः", iast: "śucinaḥ" },
          { dev: "शुचिनोः", iast: "śucinoḥ" },
          { dev: "शुचीनाम्", iast: "śucīnām" },
        ],
      },
      {
        label: loc,
        cells: [
          { dev: "शुचिनि", iast: "śucini" },
          { dev: "शुचिनोः", iast: "śucinoḥ" },
          { dev: "शुचिषु", iast: "śuciṣu" },
        ],
      },
      {
        label: voc,
        cells: [
          { dev: "शुचि", iast: "śuci" },
          { dev: "शुचिनी", iast: "śucinī" },
          { dev: "शुचीनि", iast: "śucīni" },
        ],
      },
    ],
  },
  {
    type: "glyphs",
    items: [
      { dev: "मनांसि", iast: "manāṃsi", note: "manas + i" },
      { dev: "फलानि", iast: "phalāni", note: "phala + i" },
      { dev: "शुचीनि", iast: "śucīni", note: "śuci + i" },
    ],
  },
  { type: "h2", text: "Masculine madhu, 8 × 3" },
  {
    type: "p",
    text: "Masculine -u endings parallel -i: where -i yields y, ay, or e, -u yields v, av, or o. Locative singular is still -au for both families (śucau, madhau).",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [
          { dev: "मधुः", iast: "madhuḥ" },
          { dev: "मधू", iast: "madhū" },
          { dev: "मधवः", iast: "madhavaḥ" },
        ],
      },
      {
        label: acc,
        cells: [
          { dev: "मधुम्", iast: "madhum" },
          { dev: "मधू", iast: "madhū" },
          { dev: "मधून्", iast: "madhūn" },
        ],
      },
      {
        label: ins,
        cells: [
          { dev: "मधुना", iast: "madhunā" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभिः", iast: "madhubhiḥ" },
        ],
      },
      {
        label: dat,
        cells: [
          { dev: "मधवे", iast: "madhave" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभ्यः", iast: "madhubhyaḥ" },
        ],
      },
      {
        label: abl,
        cells: [
          { dev: "मधोः", iast: "madhoḥ" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभ्यः", iast: "madhubhyaḥ" },
        ],
      },
      {
        label: gen,
        cells: [
          { dev: "मधोः", iast: "madhoḥ" },
          { dev: "मध्वोः", iast: "madhvoḥ" },
          { dev: "मधूनाम्", iast: "madhūnām" },
        ],
      },
      {
        label: loc,
        cells: [
          { dev: "मधौ", iast: "madhau" },
          { dev: "मध्वोः", iast: "madhvoḥ" },
          { dev: "मधुषु", iast: "madhuṣu" },
        ],
      },
      {
        label: voc,
        cells: [
          { dev: "मधो", iast: "madho" },
          { dev: "मधू", iast: "madhū" },
          { dev: "मधवः", iast: "madhavaḥ" },
        ],
      },
    ],
  },
  { type: "h2", text: "Feminine madhu" },
  {
    type: "p",
    text: "Feminine -u again matches the masculine set, with optional singular ablative–genitive–locative forms that behave like -ū stems. Accusative plural is madhūḥ, not masculine madhūn.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [
          { dev: "मधुः", iast: "madhuḥ" },
          { dev: "मधू", iast: "madhū" },
          { dev: "मधवः", iast: "madhavaḥ" },
        ],
      },
      {
        label: acc,
        cells: [
          { dev: "मधुम्", iast: "madhum" },
          { dev: "मधू", iast: "madhū" },
          { dev: "मधूः", iast: "madhūḥ" },
        ],
      },
      {
        label: ins,
        cells: [
          { dev: "मधुना", iast: "madhunā" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभिः", iast: "madhubhiḥ" },
        ],
      },
      {
        label: dat,
        cells: [
          { dev: "मधवे", iast: "madhave" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभ्यः", iast: "madhubhyaḥ" },
        ],
      },
      {
        label: abl,
        cells: [
          { dev: "मधोः, मध्वाः", iast: "madhoḥ, madhvāḥ" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभ्यः", iast: "madhubhyaḥ" },
        ],
      },
      {
        label: gen,
        cells: [
          { dev: "मधोः, मध्वाः", iast: "madhoḥ, madhvāḥ" },
          { dev: "मध्वोः", iast: "madhvoḥ" },
          { dev: "मधूनाम्", iast: "madhūnām" },
        ],
      },
      {
        label: loc,
        cells: [
          { dev: "मधौ, मध्वाम्", iast: "madhau, madhvām" },
          { dev: "मध्वोः", iast: "madhvoḥ" },
          { dev: "मधुषु", iast: "madhuṣu" },
        ],
      },
      {
        label: voc,
        cells: [
          { dev: "मधो", iast: "madho" },
          { dev: "मधू", iast: "madhū" },
          { dev: "मधवः", iast: "madhavaḥ" },
        ],
      },
    ],
  },
  { type: "h2", text: "Neuter madhu" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [
          { dev: "मधु", iast: "madhu" },
          { dev: "मधुनी", iast: "madhunī" },
          { dev: "मधूनि", iast: "madhūni" },
        ],
      },
      {
        label: acc,
        cells: [
          { dev: "मधु", iast: "madhu" },
          { dev: "मधुनी", iast: "madhunī" },
          { dev: "मधूनि", iast: "madhūni" },
        ],
      },
      {
        label: ins,
        cells: [
          { dev: "मधुना", iast: "madhunā" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभिः", iast: "madhubhiḥ" },
        ],
      },
      {
        label: dat,
        cells: [
          { dev: "मधुने", iast: "madhune" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभ्यः", iast: "madhubhyaḥ" },
        ],
      },
      {
        label: abl,
        cells: [
          { dev: "मधुनः", iast: "madhunaḥ" },
          { dev: "मधुभ्याम्", iast: "madhubhyām" },
          { dev: "मधुभ्यः", iast: "madhubhyaḥ" },
        ],
      },
      {
        label: gen,
        cells: [
          { dev: "मधुनः", iast: "madhunaḥ" },
          { dev: "मधुनोः", iast: "madhunoḥ" },
          { dev: "मधूनाम्", iast: "madhūnām" },
        ],
      },
      {
        label: loc,
        cells: [
          { dev: "मधुनि", iast: "madhuni" },
          { dev: "मधुनोः", iast: "madhunoḥ" },
          { dev: "मधुषु", iast: "madhuṣu" },
        ],
      },
      {
        label: voc,
        cells: [
          { dev: "मधु", iast: "madhu" },
          { dev: "मधुनी", iast: "madhunī" },
          { dev: "मधूनि", iast: "madhūni" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org (CC BY 4.0): full masculine, feminine, and neuter paradigms for śuci (-i) and madhu (-u); singular oddities vs. basic endings; feminine optional -ī/-ū-style forms in singular dative–locative (as printed); neuter n before vowel endings; parallel y/ay/e ↔ v/av/o note; shared locative singular -au. Comparison forms nāvā, nāve, gajān, gajānām, manāṃsi, phalāni kept only as side notes, not as second full grids.",
  },
];
