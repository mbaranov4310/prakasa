import type { LessonBlock } from "../catalog";

export const suffixSystem: LessonBlock[] = [
  {
    type: "p",
    text: "Suffixes are meaningful groups of sounds added to something else. Sanskrit has many of them, and they often change the sounds they attach to. This page only maps the system; later lessons take each kind in turn.",
  },
  { type: "h2", text: "Kinds already seen" },
  {
    type: "p",
    text: "Nominal endings:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नरस्य", iast: "narasya", note: "nara + sya — of the man" },
    ],
  },
  {
    type: "p",
    text: "Verb endings:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गच्छति", iast: "gacchati", note: "gaccha + ti — (someone) goes" },
    ],
  },
  {
    type: "p",
    text: "Other suffixes used with verbs:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नाययति",
        iast: "nāyayati",
        note: "nī + i → nāyi → nāyayati — lead → make lead → makes lead",
      },
    ],
  },
  { type: "h2", text: "Two groups for this topic" },
  {
    type: "p",
    text: "Root suffixes attach to a verb root:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "मन्त्र",
        iast: "mantra",
        note: "man + tra — “means of thinking,” mantra, counsel",
      },
      {
        dev: "नेत्र",
        iast: "netra",
        note: "nī + tra — “means of leading,” an eye",
      },
    ],
  },
  {
    type: "p",
    text: "Nominal suffixes usually attach to a nominal stem:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "मन्त्रिन्",
        iast: "mantrin",
        note: "mantra + in — characterized by mantra → minister, counselor",
      },
      {
        dev: "अमरत्व",
        iast: "amaratva",
        note: "amara + tva — immortal + state of being → immortality",
      },
      {
        dev: "कौरव",
        iast: "kaurava",
        note: "kuru + a — descendant of Kuru → a Kaurava",
      },
    ],
  },
  { type: "h2", text: "What sound changes do suffixes cause?" },
  {
    type: "p",
    text: "The most common change strengthens the last vowel into a compound vowel, as in netra above. Some suffixes leave the vowel alone:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नीत",
        iast: "nīta",
        note: "nī + ta — lead + past → (has been) led",
      },
    ],
  },
  {
    type: "p",
    text: "Others shift c and j to k and g:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "शोक",
        iast: "śoka",
        note: "śuc + a — grieve + state → grief, sorrow",
      },
      {
        dev: "त्याग",
        iast: "tyāga",
        note: "tyaj + a — abandon + state → abandoning, relinquishment",
      },
    ],
  },
  { type: "h2", text: "iṭ" },
  {
    type: "p",
    text: "Between a root and a suffix, an extra i sometimes appears. Traditional grammar calls that sound iṭ. Some roots take it, some do not, and some take it optionally:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नीत",
        iast: "nīta",
        note: "nī + ta — no iṭ — led",
      },
      {
        dev: "वन्दित",
        iast: "vandita",
        note: "vand + i + ta — with iṭ — venerated",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/suffixes/the-suffix-system/: what a suffix is; nominal, verb, and other already-seen endings; root vs nominal suffix groups with the printed examples; vowel strengthening, no-change, and c/j → k/g; iṭ with and without. No full suffix tables.",
  },
];
