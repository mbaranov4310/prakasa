import type { LessonBlock } from "../catalog";

export const vedicDevanagari: LessonBlock[] = [
  {
    type: "p",
    text: "Vedic manuscripts add a few extra signs. Classical Sanskrit (the grammar we teach) does not need them, but Rudra and Sandhyā pages will show some of them.",
  },
  { type: "h2", text: "ḷa and ḷha" },
  {
    type: "p",
    text: "In some recitation traditions, ḍa and ḍha become a retroflex l. Devanagari writes that as ळ. This site’s IAST is ḷa (same convention as our converter). Some Vedic books write ḻa instead; it is the same letter.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ळ", iast: "ḷa", note: "Vedic ḍa in some śākhās" },
      { dev: "ळ्ह", iast: "ḷha", note: "Vedic ḍha" },
    ],
  },
  {
    type: "p",
    text: "ळ is not in the current Prakāśa library yet. It is still worth knowing before you read a printed Veda.",
  },
  { type: "h2", text: "Accent" },
  {
    type: "p",
    text: "Vedic recitation marks three pitches. In the usual modern notation, a low tone (anudātta) is a stroke under the syllable, a high tone (svarita) is a stroke above, and the middle tone (udātta) has no mark:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अ॒", iast: "anudātta", note: "low, mark below" },
      { dev: "अ", iast: "udātta", note: "middle, no mark" },
      { dev: "अ॑", iast: "svarita", note: "high, mark above" },
    ],
  },
  {
    type: "p",
    text: "Unicode names the upper stroke UDATTA, but in this recitation notation that stroke is the svarita. Most syllables in Prakāśa are stored without pitch marks. Two library examples that do keep a mark:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ॐ॒", iast: "ogm", note: "prāṇāyāma: Ogm before suvaḥ / satyam" },
      { dev: "दर॑", iast: "dar", note: "Gāyatrī āvāhana" },
    ],
  },
  { type: "h2", text: "Vedic anusvāra" },
  {
    type: "p",
    text: "Rudra pada-pāṭha often writes a nasal with ꣳ instead of ं. This site still transliterates both as ṃ.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ं", iast: "ṃ", note: "ordinary anusvāra" },
      { dev: "ꣳ", iast: "ṃ", note: "Vedic anusvāra, same IAST here" },
      { dev: "षाꣳ", iast: "ṣāṃ", note: "namakam" },
    ],
  },
  {
    type: "note",
    text: "ḷa / accents follow the learnsanskrit.org Vedic page, with IAST aligned to this site (ḷa not ḻa; ँ and ꣳ stored as ṃ). ॐ॒ and षाꣳ are copied from encoded chapters. ळ is taught from the guide because it is not in the library yet.",
  },
];
