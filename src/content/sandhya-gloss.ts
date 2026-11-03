import { parseGlossNote, type WordGloss } from "../lib/gloss-parse";

const glossFiles = import.meta.glob("../../docs/sandhya/gloss/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const notes = new Map<string, WordGloss>();
for (const markdown of Object.values(glossFiles)) {
  for (const [id, gloss] of parseGlossNote(markdown)) notes.set(id, gloss);
}

export function wordGloss(id: string): WordGloss | undefined {
  return notes.get(id);
}
