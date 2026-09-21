import type { LessonBlock } from "../catalog";

export const consonantSandhiBetweenWords: LessonBlock[] = [
  {
    type: "p",
    text: "Consonant sandhi (vyañjana-sandhi, hal-sandhi) is the change between a final consonant and the sound that follows. This lesson covers the common patterns between two words; the same changes also apply between the two members of a compound.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "सीता वनम् गच्छति",
        iast: "sītā vanam gacchati",
        note: "before",
      },
      {
        dev: "सीता वनं गच्छति",
        iast: "sītā vanaṃ gacchati",
        note: "after; Sita goes to the forest",
      },
    ],
  },
  { type: "h2", text: "Reducing consonants" },
  {
    type: "p",
    text: "Words end only in a short list of consonants. Before other sandhi rules apply, reduce the final sound. First, a word is not usually allowed to end in more than one consonant — keep only the first:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अगच्छन्", iast: "agacchan", note: "from agacchant, they went" },
      { dev: "पश्यन्", iast: "paśyan", note: "from paśyant, while seeing" },
      { dev: "प्राञ्", iast: "prāñ", note: "from prāñc, facing" },
    ],
  },
  {
    type: "p",
    text: "A rare exception keeps the cluster when the second-to-last consonant is r: ūrj “strength” does not change.",
  },
  {
    type: "glyphs",
    items: [{ dev: "ऊर्ज्", iast: "ūrj", note: "no change" }],
  },
  {
    type: "p",
    text: "Second, consonants at the hard palate generally become k (ñ becomes ṅ). A very small set, such as rāj, uses ṭ instead:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "वाक्", iast: "vāk", note: "from vāc, speech" },
      { dev: "दिक्", iast: "dik", note: "from diś, direction" },
      { dev: "प्राङ्", iast: "prāṅ", note: "from prāñ" },
      { dev: "राट्", iast: "rāṭ", note: "from rāj, king" },
    ],
  },
  {
    type: "p",
    text: "Third, the remaining consonant becomes unaspirated and unvoiced when it has such a version. dh has t, so samidh becomes samit; m has no unvoiced counterpart, so vanam stays vanam.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "समित्", iast: "samit", note: "from samidh, kindling" },
      { dev: "वनम्", iast: "vanam", note: "forest; no change" },
    ],
  },
  {
    type: "p",
    text: "Finally, -s and -r become the visarga:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नरः", iast: "naraḥ", note: "from naras, man" },
      { dev: "द्वाः", iast: "dvāḥ", note: "from dvār, door" },
    ],
  },
  {
    type: "p",
    text: "Words do not usually end in the semivowels ya ra la va. After reduction, eight finals remain: k, ṭ, t, p, ṅ, n, m, and the visarga.",
  },
  { type: "h2", text: "Rules for k, ṭ, t, and p" },
  {
    type: "p",
    text: "These four take the same voicing as the sound that follows. Before a nasal they become the matching nasal. Before h, the stop usually voices and h shifts its place of articulation to match:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "तद् वनम्", iast: "tad vanam", note: "tat vanam" },
      { dev: "तद् उदकम्", iast: "tad udakam", note: "tat udakam" },
      { dev: "तत् फलम्", iast: "tat phalam", note: "tat phalam; unvoiced, no change" },
      { dev: "वाङ् न", iast: "vāṅ na", note: "vāk na" },
      { dev: "राण् न", iast: "rāṇ na", note: "rāṭ na" },
      { dev: "तन् न", iast: "tan na", note: "tat na" },
      { dev: "ककुम् न", iast: "kakum na", note: "kakup na" },
      { dev: "वाग् घ", iast: "vāg gha", note: "vāk ha" },
      { dev: "राड् ढ", iast: "rāḍ ḍha", note: "rāṭ ha" },
      { dev: "तद् ध", iast: "tad dha", note: "tat ha" },
      { dev: "ककुब् भ", iast: "kakub bha", note: "kakup ha" },
    ],
  },
  {
    type: "ul",
    items: [
      "Before nasals: k → ṅ, ṭ → ṇ, p → m (and t → n).",
      "Before h: k → g with gha, ṭ → ḍ with ḍha, p → b with bha (and t → d with dha).",
      "Before other voiced sounds: k → g, ṭ → ḍ, p → b.",
      "Before unvoiced sounds: k, ṭ, p stay.",
    ],
  },
  { type: "h2", text: "Extra rules for -t" },
  {
    type: "p",
    text: "-t changes often. Before a hard-palate or retroflex stop it takes the same place of articulation. Before l it becomes l. Before ś it becomes c and ś becomes ch:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "तच् चित्रम्", iast: "tac citram", note: "tat citram" },
      { dev: "तज् जलम्", iast: "taj jalam", note: "tat jalam" },
      { dev: "तल् लभस्व", iast: "tal labhasva", note: "tat labhasva; obtain that" },
      { dev: "तच् छोचन्ति", iast: "tac chocanti", note: "tat śocanti" },
    ],
  },
  {
    type: "ul",
    items: [
      "n before a nasal; c before c/ch; j before j/jh; ṭ before ṭ/ṭh; ḍ before ḍ/ḍh; l before l.",
      "c (with ś → ch) before ś; d (with h → dh) before h; d before other voiced sounds; t otherwise.",
    ],
  },
  { type: "h2", text: "Rules for -n" },
  {
    type: "p",
    text: "Before a voiced hard-palate or retroflex consonant, -n becomes the nasal of that place. Before l it becomes a nasalized l (candrabindu on the vowel). Before c/ch, ṭ/ṭh, or t/th it becomes ṃś, ṃṣ, or ṃs. Before ś, two outcomes are allowed:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नराञ् जयामि", iast: "narāñ jayāmi", note: "narān jayāmi" },
      { dev: "ताँल् लभन्ते", iast: "tāṃl labhante", note: "tān labhante; nasal l" },
      { dev: "तांश् चरन्ति", iast: "tāṃś caranti", note: "tān caranti" },
      { dev: "तांस् तरन्ति", iast: "tāṃs taranti", note: "tān taranti" },
      { dev: "ताञ् शोचन्ति", iast: "tāñ śocanti", note: "tān śocanti; option 1" },
      { dev: "ताञ् छोचन्ति", iast: "tāñ chocanti", note: "tān śocanti; option 2" },
    ],
  },
  {
    type: "ul",
    items: [
      "ṃś before c/ch; ñ before j/jh; ṃṣ before ṭ/ṭh; ṇ before ḍ/ḍh; ṃs before t/th.",
      "Nasal l before l; ñ before ś (ś may become ch); n before other sounds.",
    ],
  },
  {
    type: "p",
    text: "Why ṃs? Many words that now end in -n once ended in -ns. Reduction leaves -n, but before certain unvoiced sounds the old -s returns and then follows ordinary s-sandhi.",
  },
  { type: "h2", text: "Rules for -m" },
  {
    type: "p",
    text: "-m becomes the anusvāra when a consonant follows. It may optionally become the nasal that matches the next consonant; modern writing usually keeps the anusvāra, though speech often uses the matching nasal:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "सीता वनं गच्छति",
        iast: "sītā vanaṃ gacchati",
        note: "vanam before gacchati",
      },
      { dev: "फलञ् चरामि", iast: "phalañ carāmi", note: "optional; phalam carāmi" },
      { dev: "फलङ् खादामि", iast: "phalaṅ khādāmi", note: "optional; phalam khādāmi" },
    ],
  },
  { type: "h2", text: "Rules for the visarga" },
  {
    type: "p",
    text: "Visarga sandhi is covered in the previous lesson.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org “Consonant sandhi between words”: the name, the opening forest example, consonant reduction (cluster trim, palatal→k/ṭ, deaspiration/devoicing, -s/-r→visarga), the eight finals, voicing/nasal/h rules for k ṭ t p, the extra -t and -n tables with their printed pairs, the ṃs note, -m → anusvāra and optional matching nasal, and the pointer to visarga sandhi. No within-word consonant rules.",
  },
];
