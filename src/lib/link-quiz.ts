import { chapterLeaves, chapterSentenceLinks } from "../content/sandhya-links";
import { wordGloss } from "../content/sandhya-gloss";
import { getChapter } from "../content/library";
import type { LinkRole } from "./link-parse";
import { shuffle } from "./quiz";
import { findPath, walkLeaves } from "./tree";
import type { SpanNode } from "../types";

export type LinkLeaf = {
  id: string;
  dev: string;
  iast: string;
  trailing?: string;
  lineBreakAfter?: boolean;
};

export type LinkOption = {
  key: string;
  label: string;
  hint?: string;
};

export type LinkStep = {
  prompt: string;
  leaves: LinkLeaf[];
  highlightId: string;
  answer: string;
  options: LinkOption[];
};

export type LinkRound = {
  wordId: string;
  iast: string;
  steps: LinkStep[];
};

const ROLE_PROMPT: Record<LinkRole, string> = {
  subject: "Who is doing this?",
  object: "What is this done to?",
  describes: "Which word does this describe?",
  complement: "What is this aimed at?",
  same: "Which word is the same person?",
};

function leavesOf(node: SpanNode): LinkLeaf[] {
  return walkLeaves(node).map((leaf) => ({
    id: leaf.id,
    dev: leaf.dev,
    iast: leaf.iast,
    trailing: leaf.trailing,
    lineBreakAfter: leaf.lineBreakAfter,
  }));
}

function passage(root: SpanNode, focusId: string, answerId: string): SpanNode {
  const focusPath = findPath(root, focusId) ?? [];
  const answerPath = findPath(root, answerId) ?? [];
  const sentence = [...focusPath].reverse().find((node) => node.level === "sentence");
  if (sentence && answerPath.some((node) => node.id === sentence.id)) return sentence;
  return [...focusPath].reverse().find((node) => node.level === "verse") ?? root;
}

function meaningOptions(answer: string, meanings: string[]): LinkOption[] {
  const pool = [...new Set(meanings.filter((meaning) => meaning.trim() && meaning !== answer))];
  return shuffle([answer, ...shuffle(pool).slice(0, 3)]).map((meaning) => ({
    key: meaning,
    label: meaning,
  }));
}

export function linkRounds(bookId: string, chapterId: string): LinkRound[] {
  const chapter = getChapter(bookId, chapterId);
  if (!chapter?.root) return [];
  const root = chapter.root;
  const leaves = chapterLeaves(chapterId);
  const byId = new Map(leaves.map((leaf) => [leaf.id, leaf]));
  const stepsByWord = new Map<string, { prompt: string; answerId: string }[]>();

  function push(wordId: string, prompt: string, answerId: string) {
    const list = stepsByWord.get(wordId);
    const step = { prompt, answerId };
    if (list) list.push(step);
    else stepsByWord.set(wordId, [step]);
  }

  for (const link of chapterSentenceLinks(chapterId)) {
    if (link.judgment !== "obvious" || !link.to) continue;
    if (link.role === "complement") {
      const kind = wordGloss(link.from)?.fields.find((field) => field.label === "Kind")?.value;
      if (!kind || kind === "indeclinable") continue;
      push(link.to, ROLE_PROMPT.complement, link.from);
      continue;
    }
    push(link.from, ROLE_PROMPT[link.role], link.to);
  }

  const rounds: LinkRound[] = [];
  for (const leaf of leaves) {
    const relations = stepsByWord.get(leaf.id);
    if (!relations?.length) continue;
    const steps: LinkStep[] = [];
    const meaning = leaf.meaning.trim();
    if (meaning) {
      const node = passage(root, leaf.id, leaf.id);
      steps.push({
        prompt: "What does this mean?",
        leaves: leavesOf(node),
        highlightId: leaf.id,
        answer: meaning,
        options: meaningOptions(meaning, leaves.map((item) => item.meaning)),
      });
    }
    for (const relation of relations) {
      const answer = byId.get(relation.answerId);
      if (!answer) continue;
      const node = passage(root, leaf.id, relation.answerId);
      const visible = new Set(leavesOf(node).map((item) => item.id));
      const sameFace = (item: { dev: string; iast: string }) => item.dev === answer.dev && item.iast === answer.iast;
      const pool = leaves.filter((item) => item.id !== leaf.id && item.id !== answer.id && !sameFace(item));
      const near = pool.filter((item) => visible.has(item.id));
      const far = pool.filter((item) => !visible.has(item.id));
      const distractors = [...shuffle(near), ...shuffle(far)].slice(0, 3);
      steps.push({
        prompt: relation.prompt,
        leaves: leavesOf(node),
        highlightId: leaf.id,
        answer: answer.id,
        options: shuffle([answer, ...distractors]).map((item) => ({
          key: item.id,
          label: item.dev,
          hint: item.iast,
        })),
      });
    }
    if (steps.length) rounds.push({ wordId: leaf.id, iast: leaf.iast, steps });
  }
  return rounds;
}
