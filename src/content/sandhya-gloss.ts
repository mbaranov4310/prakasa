import acamana from "../../docs/sandhya/gloss/acamana.md?raw";
import bhutocchatanam from "../../docs/sandhya/gloss/bhutocchatanam.md?raw";
import guruNamaskara from "../../docs/sandhya/gloss/guru-namaskara.md?raw";
import mitraSukta from "../../docs/sandhya/gloss/mitra-sukta.md?raw";
import pranayama from "../../docs/sandhya/gloss/pranayama.md?raw";
import sariraSuddhi from "../../docs/sandhya/gloss/sarira-suddhi.md?raw";
import { parseGlossNote, type WordGloss } from "../lib/gloss-parse";

const notes = new Map<string, WordGloss>();
for (const markdown of [guruNamaskara, sariraSuddhi, acamana, bhutocchatanam, pranayama, mitraSukta]) {
  for (const [id, gloss] of parseGlossNote(markdown)) notes.set(id, gloss);
}

export function wordGloss(id: string): WordGloss | undefined {
  return notes.get(id);
}
