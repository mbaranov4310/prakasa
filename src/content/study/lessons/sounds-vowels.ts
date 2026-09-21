import type { LessonBlock } from "../catalog";

export const soundVowels: LessonBlock[] = [
  {
    type: "p",
    text: "Vowels (svarāḥ, “tones”; also akṣarāṇi, “syllables”; and ac) are simple, open sounds. Sanskrit builds the full set by changing the basic vowel a in a few ways.",
  },
  {
    type: "glyphs",
    items: [{ dev: "अ", iast: "a" }],
  },
  { type: "h2", text: "Point of pronunciation" },
  {
    type: "p",
    text: "First is the point of pronunciation (uccāraṇa-sthāna). Sanskrit vowels use five places: soft palate, hard palate, edge of the roof of the mouth, base of the teeth, and lips. That yields five simple vowels (samānākṣarāni) — each using one place:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अ", iast: "a", note: "soft palate" },
      { dev: "इ", iast: "i", note: "hard palate" },
      { dev: "ऋ", iast: "ṛ", note: "edge of the roof" },
      { dev: "ऌ", iast: "ḷ", note: "base of the teeth" },
      { dev: "उ", iast: "u", note: "lips" },
    ],
  },
  {
    type: "p",
    text: "Using more than one place makes compound vowels (sandhyakṣarāṇī, “joined vowels”): e and ai use soft palate with hard palate; o and au use soft palate with the lips:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "ए", iast: "e" },
      { dev: "ऐ", iast: "ai" },
      { dev: "ओ", iast: "o" },
      { dev: "औ", iast: "au" },
    ],
  },
  { type: "h2", text: "Length" },
  {
    type: "p",
    text: "Second is length (kāla). Most vowels are short (hrasva, one measure, eka-mātra) or long (dīrgha, two measures, dvi-mātra). Every short vowel except ḷ has a long form; compound vowels are already long and have no short form:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "आ", iast: "ā" },
      { dev: "ई", iast: "ī" },
      { dev: "ॠ", iast: "ṝ" },
      { dev: "ऊ", iast: "ū" },
    ],
  },
  {
    type: "p",
    text: "A third length, protracted (pluta), is mainly Vedic. It is written by adding 3 after the vowel (ā3, ī3, ū3, ṝ3, ḷ3, e3, ai3, o3, au3):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अ", iast: "a", note: "short" },
      { dev: "आ", iast: "ā", note: "long" },
      { dev: "आ३", iast: "ā३", note: "pluta" },
    ],
  },
  { type: "h2", text: "Nasality and accent" },
  {
    type: "p",
    text: "Third, a vowel can be nasal (anunāsika) or non-nasal (an-anunāsika); nasal vowels are rare in ordinary Sanskrit. Fourth, Vedic uses three accents (svara) — anudātta (low), udātta (high), and svarita (mixed, or a higher high in some chanting). Accent detail is outside this guide.",
  },
  { type: "h2", text: "-kāra and -varṇa" },
  {
    type: "p",
    text: "Adding -kāra to a vowel makes a usable name (akāra for a). In the Bhagavad Gītā:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अक्षराणाम् अकारो ऽस्मि",
        iast: "akṣarāṇām akāro 'smi",
        note: "Of sounds, I am the letter a",
      },
    ],
  },
  {
    type: "p",
    text: "A varṇa names a whole vowel family. a has three lengths, three accents, and optional nasality — 3 × 3 × 2 = 18 forms — called avarṇa. Sounds in the same varṇa are similar (sa-varṇa). Likewise: ivarṇa and uvarṇa (18 each), ṛvarṇa (18), and ḷvarṇa (only 12, because ḷ has no long form). The compound vowels e, ai, o, and au also have 12 forms each (no short form).",
  },
  { type: "h2", text: "vivṛta and saṃvṛta" },
  {
    type: "p",
    text: "Within a varṇa, short and long usually match in quality. a is different: except for a, vowels are vivṛta (“open”), with the vocal cords uncontracted; a is saṃvṛta (“covered”), more contracted. Rough English anchors: ivarṇa like “ee” in teeth; ā like “a” in father; a like “u” in mud.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org vowels page: names (svarāḥ / akṣarāṇi / ac); five pronunciation points and simple vs compound vowels; short / long / pluta length; nasality and the three Vedic accents (accents left undetailed); -kāra naming and the Gītā akāra line; varṇa counts; vivṛta vs saṃvṛta for a. No accent glyph grid.",
  },
];
