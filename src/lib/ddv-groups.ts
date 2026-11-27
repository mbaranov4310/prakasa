import type { Chapter } from "../types";

export const DDV_BOOK = "drg-drsya-viveka";

export function ddvVerseNumber(chapterId: string): number | null {
  const match = /^ddv-(\d{2})$/.exec(chapterId);
  if (!match) return null;
  const verse = Number(match[1]);
  return verse >= 1 ? verse : null;
}

/** Verses 1–33 have a recording. Later verses are text only. */
export function ddvRecordingSrc(chapterId: string): string | null {
  const verse = ddvVerseNumber(chapterId);
  if (verse == null || verse > 33) return null;
  return `${import.meta.env.BASE_URL}audio/ddv/${chapterId}.m4a`;
}

export function ddvGroupLabel(chapters: Chapter[]): string {
  const nums = chapters.map((chapter) => ddvVerseNumber(chapter.id) ?? 0);
  if (nums.length <= 1) return `Verse ${nums[0]}`;
  return `Verses ${nums[0]}–${nums[nums.length - 1]}`;
}

/** Ready verses, in order, in groups of three. The last group may be shorter. */
export function ddvGroups(chapters: Chapter[]): Chapter[][] {
  const ready = chapters
    .filter((chapter) => chapter.status === "ready" && ddvVerseNumber(chapter.id) != null)
    .sort((a, b) => (ddvVerseNumber(a.id) ?? 0) - (ddvVerseNumber(b.id) ?? 0));
  const groups: Chapter[][] = [];
  for (let i = 0; i < ready.length; i += 3) groups.push(ready.slice(i, i + 3));
  return groups;
}

export type DdvGroup = {
  chapters: Chapter[];
  label: string;
  prevId: string | null;
  nextId: string | null;
};

export function ddvGroupFor(chapters: Chapter[], chapterId: string): DdvGroup | null {
  const groups = ddvGroups(chapters);
  const index = groups.findIndex((group) => group.some((chapter) => chapter.id === chapterId));
  if (index < 0) return null;
  return {
    chapters: groups[index],
    label: ddvGroupLabel(groups[index]),
    prevId: index > 0 ? groups[index - 1][0].id : null,
    nextId: index < groups.length - 1 ? groups[index + 1][0].id : null,
  };
}
