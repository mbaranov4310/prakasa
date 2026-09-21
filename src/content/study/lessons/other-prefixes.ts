import type { LessonBlock } from "../catalog";

export const otherPrefixes: LessonBlock[] = [
  {
    type: "p",
    text: "The upasarga is the usual verb prefix. Sanskrit also has a few other prefix types that sit on a verb.",
  },
  { type: "h2", text: "gati" },
  {
    type: "p",
    text: "gati is a mixed set of prefixes. Most of them attach only to certain roots. Common ones:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "करोति", iast: "karoti", note: "does, makes" },
      { dev: "अलंकरोति", iast: "alaṃkaroti", note: "decorates, adorns" },
      { dev: "सत्करोति", iast: "satkaroti", note: "honors, respects" },
      { dev: "नमस्करोति", iast: "namaskaroti", note: "honors, venerates" },
    ],
  },
  {
    type: "glyphs",
    items: [
      { dev: "गच्छति", iast: "gacchati", note: "goes" },
      { dev: "अन्तर्गच्छति", iast: "antargacchati", note: "goes within; disappears" },
      { dev: "भवति", iast: "bhavati", note: "becomes" },
      { dev: "आविर्भवति", iast: "āvirbhavati", note: "becomes apparent or manifest" },
    ],
  },
  { type: "h2", text: "-sāt" },
  {
    type: "p",
    text: "A nominal stem can become a verb prefix. One way is to add -sāt to the stem. These forms usually go with kṛ (“do, make”) or bhū (“become”):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "भस्म", iast: "bhasma", note: "ash" },
      { dev: "भस्मसात्करोति", iast: "bhasmasātkaroti", note: "turns (something) to ash" },
      { dev: "भस्मसाद्भवति", iast: "bhasmasādbhavati", note: "becomes ash" },
    ],
  },
  { type: "h2", text: "cvi" },
  {
    type: "p",
    text: "Another common nominal-prefix type is called cvi in traditional grammar. Last -a or -i of the stem becomes ī; last -u becomes ū; last -ṛ becomes rī:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृष्ण", iast: "kṛṣṇa", note: "black" },
      { dev: "कृष्णीकरोति", iast: "kṛṣṇīkaroti", note: "makes black" },
      { dev: "कृष्णीभवति", iast: "kṛṣṇībhavati", note: "becomes black" },
    ],
  },
  {
    type: "glyphs",
    items: [
      { dev: "शुचि", iast: "śuci", note: "clear, bright → śucī-" },
      { dev: "शुचीकरोति", iast: "śucīkaroti", note: "makes clear" },
      { dev: "पशु", iast: "paśu", note: "beast, animal → paśū-" },
      { dev: "पशूकरोति", iast: "paśūkaroti", note: "makes (someone) a beast" },
      { dev: "मातृ", iast: "mātṛ", note: "mother → mātrī-" },
      { dev: "मात्रीकरोति", iast: "mātrīkaroti", note: "makes (someone their) mother" },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org other prefixes: gati examples with karoti / gacchati / bhavati; -sāt on bhasma with kṛ and bhū; cvi with kṛṣṇa, and the a/i → ī, u → ū, ṛ → rī stem changes (śuci, paśu, mātṛ). Upasarga itself is left to its own lesson.",
  },
];
