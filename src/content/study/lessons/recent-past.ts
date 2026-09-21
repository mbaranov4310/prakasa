import type { LessonBlock } from "../catalog";

export const recentPast: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as the aorist, bhūta (“past”), or luṅ. Traditionally it marks any past action, without a time restriction:",
  },
  {
    type: "glyphs",
    items: [{ dev: "अश्रौषम्", iast: "aśrauṣam", note: "I heard" }],
  },
  {
    type: "p",
    text: "Sanskrit has three past tenses. The ordinary past traditionally covers non-recent (anadyatana, “not of today”) events, and the distant past covers distant (parokṣa, “unwitnessed”) ones — so only this tense can mark very recent past. That is why it is called the recent past.",
  },
  {
    type: "p",
    text: "It often has the sense of having just done something:",
  },
  {
    type: "glyphs",
    items: [{ dev: "अश्रौषम्", iast: "aśrauṣam", note: "I have heard" }],
  },
  {
    type: "p",
    text: "This tense is rare and complicated. This page covers only a few common stem patterns.",
  },
  { type: "h2", text: "Making the stem" },
  {
    type: "p",
    text: "Recent-past stems form in several patterns; different roots use different ones.",
  },
  {
    type: "p",
    text: "Some roots are unchanged:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "भू → अभूः",
        iast: "bhū → abhūḥ",
        note: "become → you have become",
      },
    ],
  },
  {
    type: "p",
    text: "Others insert a connecting -a:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "गम् → अगमः",
        iast: "gam → agamaḥ",
        note: "go → you have gone",
      },
    ],
  },
  {
    type: "p",
    text: "A third group reduplicates in a special way:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नश् → अनीनशत्",
        iast: "naś → anīnaśat",
        note: "perish → it has perished",
      },
    ],
  },
  {
    type: "p",
    text: "A fourth strengthens with the suffix -siṣ:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नम् → अनंसिषम्",
        iast: "nam → anaṃsiṣam",
        note: "bow → I have bowed",
      },
    ],
  },
  {
    type: "p",
    text: "A fifth uses -sa:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "श्रु → अश्रौषम्",
        iast: "śru → aśrauṣam",
        note: "hear → I have heard",
      },
    ],
  },
  {
    type: "p",
    text: "There are other minor patterns as well.",
  },
  { type: "h2", text: "Adding endings" },
  {
    type: "p",
    text: "These stems generally take the same endings as the ordinary past tense.",
  },
  { type: "h2", text: "Without a-" },
  {
    type: "p",
    text: "A common pattern: recent-past forms with mā (“don’t”) state commands. There is no past meaning — only an alternate way to command:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मा गमः", iast: "mā gamaḥ", note: "Don’t go" },
      { dev: "मा भैषीः", iast: "mā bhaiṣīḥ", note: "Don’t fear" },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-2/the-recent-past-tense/: names (aorist / bhūta / luṅ); any-past vs recent sense with aśrauṣam; contrast with ordinary (anadyatana) and distant (parokṣa) past; five stem patterns (bhū, gam, naś, nam, śru); ordinary-past endings; mā + recent-past commands (mā gamaḥ, mā bhaiṣīḥ). No full paradigm table on the reference.",
  },
];
