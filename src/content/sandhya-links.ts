import mitraLinks from "../../docs/sandhya/links/mitra-sukta.md?raw";
import sariraLinks from "../../docs/sandhya/links/sarira-suddhi.md?raw";
import { mitraSukta } from "./mitra-sukta";
import { wordGloss } from "./sandhya-gloss";
import { sariraSuddhi } from "./sarira-suddhi";
import { parseLinkNote, type LinkRole, type SentenceLink } from "../lib/link-parse";
import { walkLeaves } from "../lib/tree";
import type { Chapter } from "../types";

export type WordLink = {
  label: string;
  iast?: string;
  meaning?: string;
  wordId?: string;
  detail?: string;
};

export type LinkedWord = {
  id: string;
  dev: string;
  iast: string;
  meaning: string;
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

const byWord = new Map<string, WordLink[]>();
const leavesByChapter = new Map<string, LinkedWord[]>();
const linksByChapter = new Map<string, SentenceLink[]>();
const quizChapters = new Set<string>();

function add(id: string, link: WordLink) {
  const list = byWord.get(id);
  if (list) list.push(link);
  else byWord.set(id, [link]);
}

function indexChapter(chapter: Chapter, markdown: string) {
  if (!chapter.root) return;
  const words = new Map<string, LinkedWord>();
  const leaves: LinkedWord[] = [];
  for (const leaf of walkLeaves(chapter.root)) {
    const word = { id: leaf.id, dev: leaf.dev, iast: leaf.iast, meaning: leaf.meaning };
    words.set(leaf.id, word);
    leaves.push(word);
  }
  leavesByChapter.set(chapter.id, leaves);
  const links = parseLinkNote(markdown);
  linksByChapter.set(chapter.id, links);

  for (const link of links) {
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
    const kind = wordGloss(link.from)?.fields.find((field) => field.label === "Kind")?.value;
    if (link.role !== "complement" || (kind !== undefined && kind !== "indeclinable")) {
      quizChapters.add(chapter.id);
    }
  }
}

indexChapter(sariraSuddhi, sariraLinks);
indexChapter(mitraSukta, mitraLinks);

export function wordLinks(id: string): WordLink[] {
  return byWord.get(id) ?? [];
}

export function chapterLeaves(chapterId: string): LinkedWord[] {
  return leavesByChapter.get(chapterId) ?? [];
}

export function chapterSentenceLinks(chapterId: string): SentenceLink[] {
  return linksByChapter.get(chapterId) ?? [];
}

export function hasLinkQuiz(chapterId: string): boolean {
  return quizChapters.has(chapterId);
}
