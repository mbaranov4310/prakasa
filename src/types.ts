export type ScriptMode = "devanagari" | "iast" | "both";

export type SpanLevel = "word" | "phrase" | "sentence" | "verse";

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
  /** Present on word leaves for superimposed display. */
  syllables?: Syllable[];
  /** Punctuation or space after a word leaf. */
  trailing?: string;
  lineBreakAfter?: boolean;
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
};

export type Book = {
  id: string;
  titleDev: string;
  titleIast: string;
  titleEn: string;
  blurb: string;
  chapters: Chapter[];
};
