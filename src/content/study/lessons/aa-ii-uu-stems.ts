import type { LessonBlock } from "../catalog";

export const aaIiUuStems: LessonBlock[] = [
  {
    type: "p",
    text: "After the -a stems come three close cousins, almost always feminine: -ā stems (ākārantāni), -ī stems (īkārantāni), and -ū stems (ūkārantāni). The -ā and -ī endings often make the feminine of an -a stem — gaja → gajā, mṛga → mṛgī.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गज", iast: "gaja", note: "(male) elephant" },
      { dev: "गजा", iast: "gajā", note: "(female) elephant" },
      { dev: "मृग", iast: "mṛga", note: "(male) deer" },
      { dev: "मृगी", iast: "mṛgī", note: "(female) deer" },
    ],
  },
  { type: "h2", text: "Feminine gajā, 8 × 3" },
  {
    type: "p",
    text: "The singular uses endings that look new; dual and plural mostly reuse endings you have already seen. Preview stem: gajā, “(female) elephant.”",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "गजा", iast: "gajā" },
          { dev: "गजे", iast: "gaje" },
          { dev: "गजाः", iast: "gajāḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "गजाम्", iast: "gajām" },
          { dev: "गजे", iast: "gaje" },
          { dev: "गजाः", iast: "gajāḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "गजया", iast: "gajayā" },
          { dev: "गजाभ्याम्", iast: "gajābhyām" },
          { dev: "गजाभिः", iast: "gajābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "गजायै", iast: "gajāyai" },
          { dev: "गजाभ्याम्", iast: "gajābhyām" },
          { dev: "गजाभ्यः", iast: "gajābhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "गजायाः", iast: "gajāyāḥ" },
          { dev: "गजाभ्याम्", iast: "gajābhyām" },
          { dev: "गजाभ्यः", iast: "gajābhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "गजायाः", iast: "gajāyāḥ" },
          { dev: "गजयोः", iast: "gajayoḥ" },
          { dev: "गजानाम्", iast: "gajānām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "गजायाम्", iast: "gajāyām" },
          { dev: "गजयोः", iast: "gajayoḥ" },
          { dev: "गजासु", iast: "gajāsu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "गजे", iast: "gaje" },
          { dev: "गजे", iast: "gaje" },
          { dev: "गजाः", iast: "gajāḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Shared cells: dual nominative, accusative, and vocative are gaje; dual instrumental through ablative are gajābhyām; dual genitive and locative are gajayoḥ; ablative and genitive singular are both gajāyāḥ; plural nominative, accusative, and vocative are gajāḥ; plural dative and ablative are gajābhyaḥ. Nominative singular has no visarga.",
  },
  { type: "h2", text: "Feminine nadī, in brief" },
  {
    type: "p",
    text: "The -ī stems follow the same family. Singular forms differ from gajā: -ī often becomes y before the ending. Stem: nadī, “river.”",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नदी", iast: "nadī", note: "nominative singular" },
      { dev: "नद्या", iast: "nadyā", note: "instrumental singular" },
      { dev: "नद्यै", iast: "nadyai", note: "dative singular" },
      { dev: "नद्याः", iast: "nadyāḥ", note: "ablative / genitive singular" },
      { dev: "नद्याम्", iast: "nadyām", note: "locative singular" },
      { dev: "नदि", iast: "nadi", note: "vocative singular" },
    ],
  },
  {
    type: "p",
    text: "Compare the -ā singulars that insert y: gajayā → nadyā, gajāyai → nadyai, gajāyāḥ → nadyāḥ, gajāyām → nadyām. Dual and plural keep the long ī before the usual endings (nadībhyām, nadīnām, nadīṣu, and so on).",
  },
  { type: "h2", text: "Feminine camū" },
  {
    type: "p",
    text: "The -ū stems match -ī, with v/u where -ī uses y/i. The one clear difference: nominative singular adds a visarga — camūḥ, not camū. Vocative singular is camu.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "चमूः", iast: "camūḥ", note: "nominative singular" },
      { dev: "चम्वा", iast: "camvā", note: "instrumental singular" },
      { dev: "चम्वै", iast: "camvai", note: "dative singular" },
      { dev: "चम्वाम्", iast: "camvām", note: "locative singular" },
      { dev: "चमु", iast: "camu", note: "vocative singular" },
      { dev: "चमूषु", iast: "camūṣu", note: "locative plural" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org page: the three feminine stem names, gaja/gajā and mṛga/mṛgī pairs, the full gajā paradigm, the nadī and camū singular contrasts (with y/v), the four gajā→nadī singular comparisons, and the camūḥ visarga note. Dual/plural grids for nadī and camū were not copied as second full tables.",
  },
];
