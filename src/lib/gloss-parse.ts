export type GlossField = {
  label: string;
  value: string;
};

export type WordGloss = {
  judgment: "obvious" | "unsure";
  why?: string;
  note?: string;
  fields: GlossField[];
};

const FIELD_ORDER = [
  "stem",
  "gender",
  "case",
  "number",
  "root",
  "prefix",
  "class",
  "tense",
  "voice",
  "person",
  "participle",
  "compound",
];

const ORDER_BY_KIND: Record<string, string[]> = {
  noun: ["stem", "gender", "case", "number", "root", "compound"],
  adjective: ["stem", "gender", "case", "number", "root", "compound"],
  verb: ["root", "prefix", "class", "tense", "voice", "person", "number"],
  participle: ["root", "participle", "stem", "gender", "case", "number", "prefix", "compound"],
  pronoun: ["stem", "gender", "case", "number"],
};

const LABELS: Record<string, string> = {
  kind: "Kind",
  stem: "Stem",
  root: "Root",
  prefix: "Prefix",
  class: "Class",
  tense: "Tense",
  voice: "Voice",
  person: "Person",
  participle: "Participle",
  gender: "Gender",
  case: "Case",
  number: "Number",
  compound: "Compound",
};

const KIND_LABEL: Record<string, string> = {
  noun: "noun",
  adjective: "adjective",
  verb: "verb",
  participle: "participle",
  pronoun: "pronoun",
  indeclinable: "indeclinable",
};

export function parseGlossNote(markdown: string): Map<string, WordGloss> {
  const notes = new Map<string, WordGloss>();
  for (const section of markdown.split(/\n## /).slice(1)) {
    const data: Record<string, string> = {};
    for (const line of section.split("\n").slice(1)) {
      const trimmed = line.trim();
      const splitAt = trimmed.indexOf(":");
      if (splitAt === -1) continue;
      data[trimmed.slice(0, splitAt).trim()] = trimmed.slice(splitAt + 1).trim();
    }
    const judgment = data.judgment === "unsure" ? "unsure" : "obvious";
    const fields: GlossField[] = [];
    if (data.kind) {
      fields.push({ label: LABELS.kind, value: KIND_LABEL[data.kind] ?? data.kind });
    }
    if (judgment === "obvious") {
      const order = ORDER_BY_KIND[data.kind] ?? FIELD_ORDER;
      for (const key of order) {
        const value = data[key];
        if (value) fields.push({ label: LABELS[key], value });
      }
    }
    const gloss: WordGloss = {
      judgment,
      why: data.why || undefined,
      note: data.note || undefined,
      fields,
    };
    for (const id of (data.ids ?? "").split(",")) {
      const wordId = id.trim();
      if (wordId) notes.set(wordId, gloss);
    }
  }
  return notes;
}
