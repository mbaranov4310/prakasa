import type { LessonBlock } from "../catalog";

export const soundSystem: LessonBlock[] = [
  {
    type: "p",
    text: "Earlier lessons named the Sanskrit sounds. This page adds how they are pronounced and described, with the usual English and Sanskrit terms.",
  },
  { type: "h2", text: "Points of pronunciation" },
  {
    type: "p",
    text: "Traditionally, Sanskrit names these main points of pronunciation:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कण्ठः", iast: "kaṇṭhaḥ", note: "soft palate — “throat”" },
      { dev: "तालु", iast: "tālu", note: "hard palate" },
      { dev: "मूर्धा", iast: "mūrdhā", note: "top of the roof of the mouth — “head”" },
      { dev: "दन्ताः", iast: "dantāḥ", note: "teeth" },
      { dev: "ओष्ठौ", iast: "oṣṭhau", note: "lips" },
      { dev: "नासिका", iast: "nāsikā", note: "nose" },
      { dev: "जिह्वामूलम्", iast: "jihvāmūlam", note: "base of the tongue" },
    ],
  },
  {
    type: "p",
    text: "Some lists also include the chest (uraḥ) as the source of the flow of air.",
  },
  {
    type: "glyphs",
    items: [{ dev: "उरः", iast: "uraḥ", note: "chest" }],
  },
  { type: "h2", text: "Names for the sounds" },
  {
    type: "p",
    text: "In order, sounds made at those points are called:",
  },
  {
    type: "ul",
    items: [
      "velar (kaṇṭhya) — guttural in some older books",
      "palatal (tālavya)",
      "retroflex (mūrdhanya) — cerebral or lingual in some older books",
      "dental (dantya)",
      "labial (oṣṭhya)",
      "nasal (anunāsika)",
      "uvular (jihvāmūlīya)",
    ],
  },
  {
    type: "glyphs",
    items: [
      { dev: "कण्ठ्य", iast: "kaṇṭhya", note: "velar" },
      { dev: "तालव्य", iast: "tālavya", note: "palatal" },
      { dev: "मूर्धन्य", iast: "mūrdhanya", note: "retroflex" },
      { dev: "दन्त्य", iast: "dantya", note: "dental" },
      { dev: "ओष्ठ्य", iast: "oṣṭhya", note: "labial" },
      { dev: "अनुनासिक", iast: "anunāsika", note: "nasal" },
      { dev: "जिह्वामूलीय", iast: "jihvāmūlīya", note: "uvular" },
    ],
  },
  {
    type: "p",
    text: "va uses both the teeth and the lips, so it is labio-dental (dantoṣṭhya). o and au use both the soft palate and the lips, so they are labio-velar (kaṇṭhoṣṭhya).",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दन्तोष्ठ्य", iast: "dantoṣṭhya", note: "labio-dental — va" },
      { dev: "कण्ठोष्ठ्य", iast: "kaṇṭhoṣṭhya", note: "labio-velar — o, au" },
    ],
  },
  {
    type: "note",
    text: "You do not need to memorize these terms; they are here for reference.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org sound-system page: the seven main points of pronunciation (plus uraḥ), the ordered English/Sanskrit class names, labio-dental va, and labio-velar o/au. The guide’s “kanṭhoṣṭhya” is written kaṇṭhoṣṭhya to match kaṇṭhaḥ / kaṇṭhya on the same page.",
  },
];
