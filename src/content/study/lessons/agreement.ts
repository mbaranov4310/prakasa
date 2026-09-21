import type { LessonBlock } from "../catalog";

export const agreement: LessonBlock[] = [
  {
    type: "p",
    text: "In a sentence, more than one word can point to the same idea. Rama asks — rāmaḥ names the doer, pṛcchati names what that doer does. Rama is a warrior — rāmaḥ is described, yodhaḥ describes him.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामः पृच्छति।", iast: "rāmaḥ pṛcchati.", note: "Rama asks" },
      { dev: "रामो योधः।", iast: "rāmo yodhaḥ.", note: "Rama is a warrior" },
    ],
  },
  {
    type: "p",
    text: "When two words share one concept, they must match in gender, case, number, and person. That match is agreement. Mismatches of number, person, gender, or case are wrong.",
  },
  { type: "h2", text: "Agreement of two nominals" },
  {
    type: "p",
    text: "Two nominals for the same idea share gender, case, and number. One names (sarpaḥ); the other describes (kṛṣṇaḥ):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृष्णः सर्पः", iast: "kṛṣṇaḥ sarpaḥ", note: "black snake" },
      { dev: "कृष्णौ सर्पौ", iast: "kṛṣṇau sarpau", note: "two black snakes" },
      { dev: "कृष्णाः सर्पाः", iast: "kṛṣṇāḥ sarpāḥ", note: "many black snakes" },
      { dev: "कृष्णाय सर्पाय", iast: "kṛṣṇāya sarpāya", note: "for the black snake" },
      { dev: "कृष्णा सर्पी", iast: "kṛṣṇā sarpī", note: "female black snake" },
    ],
  },
  {
    type: "p",
    text: "With ca (“and”), the describing word matches the joined count of all described words:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामो योधः।", iast: "rāmo yodhaḥ.", note: "singular" },
      {
        dev: "रामो लक्ष्मणश् च योधौ।",
        iast: "rāmo lakṣmaṇaś ca yodhau.",
        note: "dual",
      },
      {
        dev: "रामो लक्ष्मणो भरतश् च योधाः।",
        iast: "rāmo lakṣmaṇo bharataś ca yodhāḥ.",
        note: "plural",
      },
    ],
  },
  {
    type: "p",
    text: "With vā (“or”), the describing word usually matches the last word:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामः सत्यवान्।", iast: "rāmaḥ satyavān.", note: "Rama is truthful" },
      {
        dev: "रामो लक्ष्मणो वा सत्यवान्।",
        iast: "rāmo lakṣmaṇo vā satyavān.",
        note: "matches lakṣmaṇa",
      },
      {
        dev: "रामो लक्ष्मणः सीता वा सत्यवती।",
        iast: "rāmo lakṣmaṇaḥ sītā vā satyavatī.",
        note: "matches sītā",
      },
    ],
  },
  { type: "h2", text: "Agreement of nominal and verb" },
  {
    type: "p",
    text: "The case-1 nominal and the verb share person:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अहं चरामि", iast: "ahaṃ carāmi", note: "I walk" },
      { dev: "अहं चर्ये।", iast: "ahaṃ carye.", note: "I am walked (to)" },
      { dev: "त्वं चरसि", iast: "tvaṃ carasi", note: "You walk" },
      { dev: "त्वं चर्यसे।", iast: "tvaṃ caryase.", note: "You are walked (to)" },
    ],
  },
  {
    type: "p",
    text: "They also share number — including in karmaṇi prayoga, where the patient is case 1:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गजश् चरति", iast: "gajaś carati", note: "the elephant walks" },
      { dev: "गजौ चरतः", iast: "gajau carataḥ", note: "the two elephants walk" },
      { dev: "गजाश् चरन्ति", iast: "gajāś caranti", note: "the elephants walk" },
      {
        dev: "नरेण गजश् चर्यते",
        iast: "nareṇa gajaś caryate",
        note: "walked to by the man",
      },
      {
        dev: "नरेण गजौ चर्येते",
        iast: "nareṇa gajau caryete",
        note: "two walked to",
      },
      {
        dev: "नरेण गजाश् चर्यन्ते",
        iast: "nareṇa gajāś caryante",
        note: "many walked to",
      },
    ],
  },
  {
    type: "p",
    text: "With ca or vā, number follows the same pattern as for nominals:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो गजश् च चरतः।",
        iast: "rāmo gajaś ca carataḥ.",
        note: "Rama and the elephant walk",
      },
      {
        dev: "रामो गजो वा चरति।",
        iast: "rāmo gajo vā carati.",
        note: "Rama or the elephant walks",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org agreement: shared gender/case/number/person; nominal–nominal pairs (kṛṣṇa/sarpa); ca vs vā number; case-1 + verb person and number (including karmaṇi prayoga); ca/vā with verbs. Incorrect mismatch examples are summarized, not drilled as cards.",
  },
];
