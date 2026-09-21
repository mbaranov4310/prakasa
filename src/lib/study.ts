import { quizDecks, type QuizSetupState } from "./quiz";
import {
  lessonBodies,
  lessonMetas,
  studyTopics,
  type LessonBlock,
  type LessonMeta,
  type StudyTopic,
} from "../content/study/catalog";

export type { LessonBlock, LessonMeta, StudyTopic };

export const GUIDE_ATTRIBUTION = {
  text: "Lesson text is adapted from Sanskrit for Beginners at learnsanskrit.org (CC BY 4.0). We shortened some explanations and added exercises.",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  sourceRoot: "https://learnsanskrit.org/guide/",
};

export type Lesson = LessonMeta & {
  body?: LessonBlock[];
};

export function getTopics(): StudyTopic[] {
  return studyTopics;
}

export function getLessonMeta(id: string): LessonMeta | undefined {
  return lessonMetas.find((lesson) => lesson.id === id);
}

export function getLesson(id: string): Lesson | undefined {
  const meta = getLessonMeta(id);
  if (!meta) return undefined;
  return { ...meta, body: lessonBodies[id] };
}

export function setupForLesson(lessonId: string): QuizSetupState | null {
  const lesson = getLessonMeta(lessonId);
  if (!lesson?.practice) return null;
  const known = new Set(quizDecks.map((deck) => deck.id));
  const deckIds = lesson.practice.deckIds.filter((id) => known.has(id));
  if (!deckIds.length) return null;
  return {
    chapterKeys: [],
    deckIds,
    units: ["word", "phrase"],
    direction: lesson.practice.direction,
    mode: "mcq",
  };
}
