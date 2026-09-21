import type { LessonBlock } from "../catalog";

export const eightCases: LessonBlock[] = [
  {
    type: "p",
    text: "Sanskrit has eight cases. Each can carry many shades of meaning, but each also has a basic sense that is easy to hold onto. Uninflected words can sharpen or shift that sense when needed.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "प्रथमा", iast: "prathamā", note: "nominative — subject" },
      { dev: "द्वितीया", iast: "dvitīyā", note: "accusative — object" },
      { dev: "तृतीया", iast: "tṛtīyā", note: "instrumental — with, by means of" },
      { dev: "चतुर्थी", iast: "caturthī", note: "dative — for, to" },
      { dev: "पञ्चमी", iast: "pañcamī", note: "ablative — from" },
      { dev: "षष्ठी", iast: "ṣaṣṭhī", note: "genitive — of" },
      { dev: "सप्तमी", iast: "saptamī", note: "locative — in, on" },
      { dev: "सम्बोधन", iast: "sambodhana", note: "vocative — O" },
    ],
  },
  { type: "h2", text: "Nominative (prathamā) — subject" },
  {
    type: "p",
    text: "The nominative is the default case. Usually it marks the subject of the action — though that depends on the verb’s prayoga. In an active sentence siṃhaḥ khādati is “the lion eats”; with a passive verb the same nominative can be the patient: siṃhaḥ khādyate, “the lion is eaten.” It also appears in verbless sentences such as aśvaḥ kṛṣṇaḥ, “the horse is black.”",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सिंहः", iast: "siṃhaḥ", note: "the lion (subject)" },
      { dev: "अश्वः कृष्णः", iast: "aśvaḥ kṛṣṇaḥ", note: "the horse is black" },
    ],
  },
  { type: "h2", text: "Accusative (dvitīyā) — object" },
  {
    type: "p",
    text: "The accusative is generally the object of the action: siṃho grāmaṃ paśyati, “the lion sees a village.” It also marks destinations (grāmaṃ gacchati, “goes to the village”), and stretches of time or distance (māsam, “for a month”; yojanam, “a yojana”). Certain uninflected words — antarā, antareṇa, ṛte, prati — take an accusative as well.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ग्रामम्", iast: "grāmam", note: "village (object / goal)" },
      { dev: "मासम्", iast: "māsam", note: "for a month" },
    ],
  },
  { type: "h2", text: "Instrumental (tṛtīyā) — with, by means of" },
  {
    type: "p",
    text: "The instrumental usually means “with” or “by means of”: mārgeṇa, “by means of the road”; dhanuṣā, “with a bow.” In karmaṇi or bhāve prayoga it names the agent — rāmeṇa rāvaṇo hanyate, “Rāvaṇa is killed by Rāma”; mayā supyate, “I sleep” (“by me there is sleeping”). With saha or vinā it marks accompaniment or its opposite.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मार्गेण", iast: "mārgeṇa", note: "by means of the road" },
      { dev: "रामेण", iast: "rāmeṇa", note: "by Rāma (agent)" },
    ],
  },
  { type: "h2", text: "Dative (caturthī) — for, to" },
  {
    type: "p",
    text: "The dative generally means “for” or “for the sake of”: māṃsāya, “for meat”; khādanāya, “for eating.” With verbs of anger, jealousy, or blame it marks the target of the feeling — rāvaṇāya krudhyati, “is angry at Rāvaṇa.”",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मांसाय", iast: "māṃsāya", note: "for meat" },
      { dev: "रावणाय", iast: "rāvaṇāya", note: "at / to Rāvaṇa" },
    ],
  },
  { type: "h2", text: "Ablative (pañcamī) — from" },
  {
    type: "p",
    text: "The ablative generally means “from” or “because of”: vanād, “from the forest”; bhayād, “from (because of) fear.” With verbs of fear or protection it is the cause of fear — rāvaṇād bhītaḥ, “afraid of Rāvaṇa.” In birth it can name the father; in comparisons it has the sense “than.” It also pairs with ā (“up to”) and apa (“away from”).",
  },
  {
    type: "glyphs",
    items: [
      { dev: "वनाद्", iast: "vanād", note: "from the forest" },
      { dev: "भयाद्", iast: "bhayād", note: "from / because of fear" },
    ],
  },
  { type: "h2", text: "Genitive (ṣaṣṭhī) — of" },
  {
    type: "p",
    text: "The genitive generally means “of,” linking two nominals: narasya gṛham, “the man’s house.” It often serves as a catch-all when no other case fits; epic Sanskrit sometimes uses it where other texts would use the dative.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नरस्य", iast: "narasya", note: "of the man" },
    ],
  },
  { type: "h2", text: "Locative (saptamī) — in, on" },
  {
    type: "p",
    text: "The locative generally means “in” or “on”: grāme, “in the village.” In birth it can name the mother (devakyām). More abstractly it sets a context — “when Rāma had gone,” or “in this matter.”",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ग्रामे", iast: "grāme", note: "in the village" },
      { dev: "देवक्यां", iast: "devakyāṃ", note: "in Devakī (mother)" },
    ],
  },
  { type: "h2", text: "Vocative (sambodhana) — O" },
  {
    type: "p",
    text: "The vocative addresses the person spoken to: he nara, “hey man!”; he siṃha, “hey lion!”",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नर", iast: "nara", note: "O man" },
      { dev: "सिंह", iast: "siṃha", note: "O lion" },
    ],
  },
  {
    type: "p",
    text: "The cases have further minor uses. This page covers the major patterns you will meet most often.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/sentences/the-eight-cases/: basic sense of each case; nominative subject vs prayoga and verbless uses; accusative object, goal, time/distance, and selected uninflecteds; instrumental means, agent, saha/vinā; dative purpose and emotion target; ablative from/cause, fear, birth father, comparison, ā/apa; genitive “of” and catch-all; locative place, birth mother, context; vocative address. Case labels follow the Prakāśa eight-name set used in a-stems.ts.",
  },
];
