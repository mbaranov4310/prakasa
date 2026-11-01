import sariraLinks from "../../docs/sandhya/links/sarira-suddhi.md?raw";
import { sariraSuddhi } from "./sarira-suddhi";
import { parseLinkNote, type LinkRole } from "../lib/link-parse";
import { walkLeaves } from "../lib/tree";

export type WordLink = {
  label: string;
  iast?: string;
  meaning?: string;
  wordId?: string;
  detail?: string;
};

const FROM_LABEL: Record<LinkRole, string> = {
  subject: "Who",
  object: "What",
  describes: "Describes",
  complement: "Leans on",
  same: "Same as",
};

const TO_LABEL: Record<LinkRole, string> = {
  subject: "Subject of",
  object: "Object of",
  describes: "Described by",
  complement: "Takes",
  same: "Same as",
};

const words = new Map<string, { iast: string; meaning: string }>();
if (sariraSuddhi.root) {
  for (const leaf of walkLeaves(sariraSuddhi.root)) {
    words.set(leaf.id, { iast: leaf.iast, meaning: leaf.meaning });
  }
}

const byWord = new Map<string, WordLink[]>();

function add(id: string, link: WordLink) {
  const list = byWord.get(id);
  if (list) list.push(link);
  else byWord.set(id, [link]);
}

for (const link of parseLinkNote(sariraLinks)) {
  if (link.judgment === "unsure" || !link.to) {
    add(link.from, { label: "Unsure", detail: link.why });
    continue;
  }
  const target = words.get(link.to);
  const source = words.get(link.from);
  add(link.from, {
    label: FROM_LABEL[link.role],
    iast: target?.iast,
    meaning: target?.meaning,
    wordId: link.to,
    detail: link.note,
  });
  add(link.to, {
    label: TO_LABEL[link.role],
    iast: source?.iast,
    meaning: source?.meaning,
    wordId: link.from,
  });
}

export function wordLinks(id: string): WordLink[] {
  return byWord.get(id) ?? [];
}
