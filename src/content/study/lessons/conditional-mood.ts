import type { LessonBlock } from "../catalog";

export const conditionalMood: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as saṃketaḥ (“condition”), or lṛṅ. The conditional mood describes situations that would happen or would have happened — hypothetical cases.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "दक्षिणेन चेद् आयास्यन् न शकटं पर्याभविष्यत्",
        iast: "dakṣiṇena ced āyāsyan na śakaṭaṃ paryābhaviṣyat",
        note: "If he would come by the southern road, the cart would not overturn.",
      },
    ],
  },
  { type: "h2", text: "How to form it" },
  {
    type: "p",
    text: "Start with the stem of the simple future, then treat that stem like the ordinary past tense:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नी", iast: "nī", note: "lead" },
      { dev: "नेष्य", iast: "neṣya", note: "will lead (future stem)" },
      {
        dev: "अनेष्यत्",
        iast: "aneṣyat",
        note: "would lead; would have led",
      },
    ],
  },
  { type: "h2", text: "Past vs conditional" },
  {
    type: "p",
    text: "Compare the ordinary past (first form) with the conditional (second). The right-hand pair is past, then conditional:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अनयत्, अनेष्यत्",
        iast: "anayat, aneṣyat",
        note: "nī — led, would lead",
      },
      {
        dev: "अकरोत्, अकरिष्यत्",
        iast: "akarot, akariṣyat",
        note: "kṛ — did, would do (parasmaipada)",
      },
      {
        dev: "अकुरुत, अकरिष्यत",
        iast: "akuruta, akariṣyata",
        note: "kṛ — did, would do (ātmanepada)",
      },
    ],
  },
  {
    type: "p",
    text: "The conditional is rare. It is taught here because it reuses the future stem and past endings already studied.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org conditional-mood page: name saṃketaḥ / lṛṅ; hypothetical sense; the southern-road example; future-stem then past formation (nī → neṣya → aneṣyat); past vs conditional pairs for nī and kṛ (parasmaipada and ātmanepada). No full person grid.",
  },
];
