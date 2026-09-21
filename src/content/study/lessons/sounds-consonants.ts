import type { LessonBlock } from "../catalog";

export const soundConsonants: LessonBlock[] = [
  {
    type: "p",
    text: "Consonants (vyañjanāni, “embellishments”; also called hal) are made by changing the basic airflow through the mouth. Sanskrit uses three degrees of contact:",
  },
  {
    type: "ul",
    items: [
      "spṛṣṭam — full contact; air stops in the mouth (ka through ma)",
      "īṣatspṛṣṭam — slight contact; air is tightly constricted (ya through va)",
      "īṣadvivṛtam — loose contact; air is less constricted (śa through ha)",
    ],
  },
  { type: "h2", text: "ka through ma" },
  {
    type: "p",
    text: "The first twenty-five consonants (sparśāḥ, “contacts”) form a five-by-five square. Points of pronunciation meet fully. English calls the fifth column nasals and the rest stops.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "क", iast: "ka" },
      { dev: "ख", iast: "kha" },
      { dev: "ग", iast: "ga" },
      { dev: "घ", iast: "gha" },
      { dev: "ङ", iast: "ṅa" },
      { dev: "च", iast: "ca" },
      { dev: "छ", iast: "cha" },
      { dev: "ज", iast: "ja" },
      { dev: "झ", iast: "jha" },
      { dev: "ञ", iast: "ña" },
      { dev: "ट", iast: "ṭa" },
      { dev: "ठ", iast: "ṭha" },
      { dev: "ड", iast: "ḍa" },
      { dev: "ढ", iast: "ḍha" },
      { dev: "ण", iast: "ṇa" },
      { dev: "त", iast: "ta" },
      { dev: "थ", iast: "tha" },
      { dev: "द", iast: "da" },
      { dev: "ध", iast: "dha" },
      { dev: "न", iast: "na" },
      { dev: "प", iast: "pa" },
      { dev: "फ", iast: "pha" },
      { dev: "ब", iast: "ba" },
      { dev: "भ", iast: "bha" },
      { dev: "म", iast: "ma" },
    ],
  },
  {
    type: "ul",
    items: [
      "Columns 1–2 are unvoiced (aghoṣāḥ); the rest are voiced (ghoṣavantaḥ).",
      "Columns 2 and 4 are aspirated (mahāprāṇāḥ); the others are unaspirated (alpaprāṇāḥ).",
      "Column 5 is nasal (anunāsikāḥ).",
    ],
  },
  { type: "h2", text: "ya through va" },
  {
    type: "p",
    text: "The four semivowels are antaḥsthāḥ (“in-between”) — pronounced between vowels and other consonants:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "य", iast: "ya" },
      { dev: "र", iast: "ra" },
      { dev: "ल", iast: "la" },
      { dev: "व", iast: "va" },
    ],
  },
  {
    type: "p",
    text: "Semivowels can be nasalized. For example, anusvāra before y sounds like a nasal y.",
  },
  { type: "h2", text: "śa through ha" },
  {
    type: "p",
    text: "The last four are ūṣmāṇaḥ (“vapor sounds”; English sibilants). ha is voiced; śa, ṣa, and sa are not:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "श", iast: "śa" },
      { dev: "ष", iast: "ṣa" },
      { dev: "स", iast: "sa" },
      { dev: "ह", iast: "ha" },
    ],
  },
  { type: "h2", text: "ḷa" },
  {
    type: "p",
    text: "In some Vedic recitation, ḍa between vowels becomes ḷa, and ḍha becomes ḷha. These appear only in Vedic:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ळ", iast: "ḷa" },
      { dev: "ळ्ह", iast: "ḷha" },
    ],
  },
  { type: "h2", text: "-kāra and -varga" },
  {
    type: "p",
    text: "Add -kāra to name a consonant usable in speech — except ra, which is repha (“snarl,” “burr”):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ककारः", iast: "kakāraḥ", note: "ka → kakāraḥ" },
      { dev: "रेफः", iast: "rephaḥ", note: "ra → rephaḥ" },
    ],
  },
  {
    type: "p",
    text: "The word -varga (“group”) names sets with similar properties:",
  },
  {
    type: "ul",
    items: [
      "kavarga — ka kha ga gha ṅa",
      "cavarga — ca cha ja jha ña",
      "ṭavarga — ṭa ṭha ḍa ḍha ṇa",
      "tavarga — ta tha da dha na",
      "pavarga — pa pha ba bha ma",
      "yavarga — ya ra la va",
      "śavarga — śa ṣa sa ha",
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org consonants page: three airflow types; the sparśa 5×5 grid and column labels; antaḥstha and ūṣman sets; Vedic ḷa/ḷha (reference writes ḻa/ḻha; Prakāśa IAST maps ळ → ḷa); -kāra / repha naming; the seven varga lists. No review Q&A block.",
  },
];
