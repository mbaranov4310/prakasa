import type { LessonBlock } from "../catalog";

export const atAnaVas: LessonBlock[] = [
  {
    type: "p",
    text: "The three suffixes -at, -āna, and -vas all create nominal stems. They attach to verb stems, not to verb roots. With stems of the root kṛ:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कुर्वत्", iast: "kurvat", note: "kuru + at → while doing (parasmaipada)" },
      { dev: "कुर्वाण", iast: "kurvāṇa", note: "kuru + āna → while doing (ātmanepada)" },
      { dev: "करिष्यत्", iast: "kariṣyat", note: "kariṣya + at → about to do" },
      { dev: "चकृवस्", iast: "cakṛvas", note: "cakṛ + vas → has done" },
    ],
  },
  { type: "h2", text: "-at" },
  {
    type: "p",
    text: "Also known as the present or future active participle (śatṛ). Meaning depends on the stem. On a present stem, “while doing X”; on a simple future stem, usually “about to do X.” Only with roots that use parasmaipada endings.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गच्छत्", iast: "gacchat", note: "gaccha → while going" },
      { dev: "कुर्वत्", iast: "kurvat", note: "kuru → while doing" },
      { dev: "गमिष्यत्", iast: "gamiṣyat", note: "gamiṣya → about to go" },
      { dev: "करिष्यत्", iast: "kariṣyat", note: "kariṣya → about to do" },
    ],
  },
  {
    type: "p",
    text: "Stems in -at generally have two shapes: strong -ant and weak -at. Some endings take the strong stem, others the weak:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अहं चरन्तं नरं पश्यामि",
        iast: "ahaṃ carantaṃ naraṃ paśyāmi",
        note: "I see the man who is walking (strong)",
      },
      {
        dev: "अहं चरता नरेण सह वदामि।",
        iast: "ahaṃ caratā nareṇa saha vadāmi.",
        note: "I speak with the man who is walking (weak)",
      },
    ],
  },
  {
    type: "p",
    text: "Roots of the hu class keep -at as their only stem:",
  },
  {
    type: "glyphs",
    items: [{ dev: "जुह्वत्", iast: "juhvat", note: "juhu → while offering" }],
  },
  { type: "h2", text: "-āna" },
  {
    type: "p",
    text: "Also known as the present or future middle participle (śānac). Same meaning and use as -at, but with roots that take ātmanepada endings. Stems that already end in -a use -māna instead:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कुर्वाण", iast: "kurvāṇa", note: "kuru → while doing (ātmanepada)" },
      { dev: "नयमान", iast: "nayamāna", note: "naya → while leading" },
      { dev: "नेष्यमान", iast: "neṣyamāna", note: "neṣya → about to lead" },
      { dev: "करिष्यमान", iast: "kariṣyamāna", note: "kariṣya → about to do" },
    ],
  },
  { type: "h2", text: "-vas" },
  {
    type: "p",
    text: "Also known as the perfect active participle (kvasu̐). Rare; only with the distant-past stem. Usually “has done X.” Only when the root can take parasmaipada endings; otherwise use -āna:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "चकृवस्", iast: "cakṛvas", note: "cakṛ → has done" },
      { dev: "जग्मिवस्", iast: "jagmivas", note: "jagm → has gone" },
      { dev: "तस्थिवस्", iast: "tasthivas", note: "tasth → has stood" },
      { dev: "चक्राण", iast: "cakrāṇa", note: "cakṛ → has done (ātmanepada)" },
    ],
  },
  {
    type: "note",
    text: "-at and -āna are common and worth knowing well. Sentence use is covered under Sentences.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org page on -at, -āna, and -vas: kṛ stem examples; present and future -at; strong/weak and hu-class notes; -āna and -māna; -vas with parasmaipada and ātmanepada alternatives. No case paradigm on the source page.",
  },
];
