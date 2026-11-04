import { chapterSentenceLinks } from "../content/sandhya-links";
import { wordGloss } from "../content/sandhya-gloss";
import { getChapter } from "../content/library";
import type { SentenceLink } from "./link-parse";
import type { WordGloss } from "./gloss-parse";
import { shuffle } from "./quiz";
import { walkLeaves } from "./tree";

export type LinkLeaf = {
  id: string;
  dev: string;
  iast: string;
  meaning: string;
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
  explain: string;
  leaves: LinkLeaf[];
  highlightId: string;
  answer: string;
  options: LinkOption[];
};

export type LinkRound = {
  steps: LinkStep[];
};

const CASES = [
  "nominative",
  "accusative",
  "instrumental",
  "dative",
  "ablative",
  "genitive",
  "locative",
  "vocative",
];

const FIELD_TEXT: [string, string][] = [
  ["Root", "the root is"],
  ["Stem", "the stem is"],
  ["Case", "the case is"],
  ["Number", "the number is"],
  ["Gender", "the gender is"],
  ["Person", "the person is"],
  ["Tense", "the tense is"],
  ["Voice", "the voice is"],
];

function field(gloss: WordGloss | undefined, label: string): string | undefined {
  return gloss?.fields.find((item) => item.label === label)?.value;
}

function caseOf(gloss: WordGloss | undefined): string | undefined {
  const listed = field(gloss, "Case");
  if (listed) return listed;
  const why = gloss?.why ?? "";
  const found = CASES.filter((item) => why.includes(item));
  return found.length === 1 ? found[0] : undefined;
}

function shortMeaning(meaning: string): string {
  return meaning.split(" / ")[0].trim();
}

function roleName(meaning: string): string | null {
  const short = shortMeaning(meaning);
  const at = short.indexOf(" of");
  if (at === -1) return null;
  return short.slice(0, at).trim();
}

function possessedName(meaning: string): string {
  return meaning.replace(/^\s*of\s+/i, "").trim() || meaning;
}

function capitalize(text: string): string {
  return text ? text[0].toUpperCase() + text.slice(1) : text;
}

function grammarExplain(id: string, meaning: string): string {
  const gloss = wordGloss(id);
  if (!gloss || gloss.judgment === "unsure") {
    const why = gloss?.why ? ` ${gloss.why}` : "";
    return `This means “${meaning}.”${why}`;
  }
  const bits = FIELD_TEXT.flatMap(([label, text]) => {
    const value = field(gloss, label);
    return value ? [`${text} ${value}`] : [];
  });
  const note = gloss.note ? ` ${gloss.note}` : "";
  if (!bits.length) return `This means “${meaning}.” It does not decline.${note}`;
  const sentence = bits.join(", ");
  return `${sentence[0].toUpperCase()}${sentence.slice(1)}, and this means “${meaning}.”${note}`;
}

type Relation = {
  focusId: string;
  answerId: string;
  prompt: string;
  explain: string;
  sort: number;
};

function relation(link: SentenceLink, leaves: Map<string, LinkLeaf>): Relation | null {
  if (link.judgment !== "obvious" || !link.to) return null;
  const from = leaves.get(link.from);
  const to = leaves.get(link.to);
  if (!from || !to) return null;
  const fromGloss = wordGloss(from.id);
  const kind = field(fromGloss, "Kind");
  const wordCase = caseOf(fromGloss);

  if (link.role === "describes") {
    const role = roleName(from.meaning);
    const ask = role
      ? `Who is the ${role}?`
      : `Who or what is ${shortMeaning(from.meaning)}?`;
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 0,
      prompt: `We know ${from.iast} means “${from.meaning}.” ${ask}`,
      explain: `${to.iast}, “${to.meaning},” is the one this word is about.`,
    };
  }

  if (link.role === "subject") {
    return {
      focusId: to.id,
      answerId: from.id,
      sort: 1,
      prompt: `We know ${to.iast} means “${to.meaning}.” It is nominative. It is the subject of which word?`,
      explain: `${to.iast} is the subject of ${from.iast}, “${from.meaning}.”`,
    };
  }

  if (link.role === "object") {
    const named = wordCase === "accusative" ? "It is accusative. " : "";
    return {
      focusId: to.id,
      answerId: from.id,
      sort: 2,
      prompt: `We know ${to.iast} means “${to.meaning}.” ${named}It is the object of which word?`,
      explain: `${to.iast} is the object of ${from.iast}, “${from.meaning}.”`,
    };
  }

  if (link.role === "same") {
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 4,
      prompt: `We know ${from.iast} means “${from.meaning}.” This is the same person as which word?`,
      explain: `${from.iast} is the same person as ${to.iast}, “${to.meaning}.”`,
    };
  }

  if (link.role !== "complement" || kind === "indeclinable" || !kind) return null;

  if (kind === "adjective") {
    const role = roleName(from.meaning) ?? shortMeaning(from.meaning);
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 3,
      prompt: `We know ${from.iast} means “${from.meaning}.” ${capitalize(role)} of whom?`,
      explain: `${capitalize(role)} of ${to.iast}, “${to.meaning}.”`,
    };
  }

  if (wordCase === "genitive") {
    const who = possessedName(from.meaning);
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 3,
      prompt: `We know ${from.iast} means “${from.meaning}.” It is genitive. ${capitalize(who)}'s what?`,
      explain: `${capitalize(who)}'s “${to.meaning}” is ${to.iast}.`,
    };
  }

  if (wordCase === "instrumental") {
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 3,
      prompt: `We know ${from.iast} means “${from.meaning}.” It is instrumental. This is the means of which word?`,
      explain: `${from.iast} is the means of ${to.iast}, “${to.meaning}.”`,
    };
  }

  if (wordCase === "dative") {
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 3,
      prompt: `We know ${from.iast} means “${from.meaning}.” It is dative. This is for which word?`,
      explain: `${from.iast} is what ${to.iast}, “${to.meaning},” is for.`,
    };
  }

  if (wordCase === "ablative") {
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 3,
      prompt: `We know ${from.iast} means “${from.meaning}.” It is ablative. Which word does this go with?`,
      explain: `${from.iast}, “${from.meaning},” goes with ${to.iast}.`,
    };
  }

  if (wordCase === "locative") {
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 3,
      prompt: `We know ${from.iast} means “${from.meaning}.” It is locative. This is the place of which word?`,
      explain: `${from.iast}, “${from.meaning},” is where ${to.iast} takes place.`,
    };
  }

  if (kind === "pronoun") {
    return {
      focusId: from.id,
      answerId: to.id,
      sort: 3,
      prompt: `We know ${from.iast} means “${from.meaning}.” Which word is this joined to?`,
      explain: `${from.iast} is joined to ${to.iast}, “${to.meaning}.”`,
    };
  }

  return null;
}

function meaningOptions(answer: string, meanings: string[]): LinkOption[] {
  const pool = [...new Set(meanings.filter((meaning) => meaning.trim() && meaning !== answer))];
  return shuffle([answer, ...shuffle(pool).slice(0, 3)]).map((meaning) => ({
    key: meaning,
    label: meaning,
  }));
}

function wordOptions(answer: LinkLeaf, focusId: string, visible: LinkLeaf[], all: LinkLeaf[]): LinkOption[] {
  const sameFace = (item: LinkLeaf) => item.dev === answer.dev && item.iast === answer.iast;
  const pool = all.filter((item) => item.id !== focusId && item.id !== answer.id && !sameFace(item));
  const nearIds = new Set(visible.map((item) => item.id));
  const near = pool.filter((item) => nearIds.has(item.id));
  const far = pool.filter((item) => !nearIds.has(item.id));
  const distractors = [...shuffle(near), ...shuffle(far)].slice(0, 3);
  return shuffle([answer, ...distractors]).map((item) => ({
    key: item.id,
    label: item.dev,
    hint: item.iast,
  }));
}

function padas(leaves: LinkLeaf[]): LinkLeaf[][] {
  const groups: LinkLeaf[][] = [];
  let current: LinkLeaf[] = [];
  for (const leaf of leaves) {
    current.push(leaf);
    if (/[।॥]/.test(leaf.trailing ?? "")) {
      groups.push(current);
      current = [];
    }
  }
  if (current.length) groups.push(current);
  return groups;
}

export function linkRounds(bookId: string, chapterId: string): LinkRound[] {
  const chapter = getChapter(bookId, chapterId);
  if (!chapter?.root) return [];
  const leaves: LinkLeaf[] = walkLeaves(chapter.root).map((leaf) => ({
    id: leaf.id,
    dev: leaf.dev,
    iast: leaf.iast,
    meaning: leaf.meaning,
    trailing: leaf.trailing,
    lineBreakAfter: leaf.lineBreakAfter,
  }));
  const byId = new Map(leaves.map((leaf) => [leaf.id, leaf]));
  const lines = padas(leaves);
  const lineOf = new Map<string, number>();
  const placeOf = new Map<string, number>();
  lines.forEach((line, index) => line.forEach((leaf) => lineOf.set(leaf.id, index)));
  leaves.forEach((leaf, index) => placeOf.set(leaf.id, index));

  const pending = new Map<number, Relation[]>();
  for (const link of chapterSentenceLinks(chapterId)) {
    const item = relation(link, byId);
    if (!item) continue;
    const focusLine = lineOf.get(item.focusId) ?? 0;
    const answerLine = lineOf.get(item.answerId) ?? 0;
    const at = Math.max(focusLine, answerLine);
    const list = pending.get(at);
    if (list) list.push(item);
    else pending.set(at, [item]);
  }

  return lines.flatMap((line, index) => {
    const steps: LinkStep[] = [];
    for (const leaf of line) {
      const meaning = leaf.meaning.trim();
      if (!meaning) continue;
      steps.push({
        prompt: "What does this mean?",
        explain: grammarExplain(leaf.id, meaning),
        leaves: line,
        highlightId: leaf.id,
        answer: meaning,
        options: meaningOptions(meaning, leaves.map((item) => item.meaning)),
      });
    }
    const relations = (pending.get(index) ?? []).sort((a, b) => {
      const place = (placeOf.get(a.focusId) ?? 0) - (placeOf.get(b.focusId) ?? 0);
      if (place !== 0) return place;
      return a.sort - b.sort;
    });
    for (const item of relations) {
      const focus = byId.get(item.focusId);
      const answer = byId.get(item.answerId);
      if (!focus || !answer) continue;
      const start = Math.min(lineOf.get(item.focusId) ?? index, lineOf.get(item.answerId) ?? index);
      const end = Math.max(lineOf.get(item.focusId) ?? index, lineOf.get(item.answerId) ?? index);
      const shown = lines.slice(start, end + 1).flat();
      steps.push({
        prompt: item.prompt,
        explain: item.explain,
        leaves: shown,
        highlightId: item.focusId,
        answer: answer.id,
        options: wordOptions(answer, item.focusId, shown, leaves),
      });
    }
    return steps.length ? [{ steps }] : [];
  });
}

export function roundForWord(bookId: string, chapterId: string, wordId: string): number | null {
  const rounds = linkRounds(bookId, chapterId);
  const index = rounds.findIndex((round) => {
    const line = round.steps.find((step) => step.prompt === "What does this mean?")?.leaves;
    if (line?.some((leaf) => leaf.id === wordId)) return true;
    return round.steps.some((step) => step.highlightId === wordId);
  });
  return index >= 0 ? index : null;
}
