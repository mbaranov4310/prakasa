export type ScriptMode = "devanagari" | "iast" | "both";

export type SpanLevel = "word" | "phrase" | "sentence" | "verse" | "chapter";

export type MeaningSource = "curated" | "llm";

export type Syllable = {
  dev: string;
  iast: string;
};

export type SpanNode = {
  id: string;
  level: SpanLevel;
  meaning: string;
  /** How this meaning was produced. v0 is always curated; LLM can fill later. */
  source: MeaningSource;
  dev: string;
  iast: string;
  /** The word by itself in IAST, before sandhi joined it to its neighbours. */
  pada?: string;
  /** Present on word leaves for superimposed display. */
  syllables?: Syllable[];
  /** Punctuation or space after a word leaf. */
  trailing?: string;
  lineBreakAfter?: boolean;
  /** Blank space after this word's line: the end of a verse in a many-verse chapter. */
  gapAfter?: boolean;
  children?: SpanNode[];
};

export type GlossaryEntry = {
  term: string;
  meaning: string;
};

export type Chapter = {
  id: string;
  titleDev: string;
  titleIast: string;
  titleEn: string;
  status: "ready" | "coming-soon";
  translation?: string;
  glossary?: GlossaryEntry[];
  root?: SpanNode;
  /**
   * Set words that sandhi wrote as one with no gap between them, so the line
   * reads as it is printed. A tap then lands on whole akṣaras: a word's final
   * consonant is shown, and tapped, with the word it is joined to.
   */
  joinFused?: boolean;
};

export type Book = {
  id: string;
  titleDev: string;
  titleIast: string;
  titleEn: string;
  blurb: string;
  chapters: Chapter[];
};
