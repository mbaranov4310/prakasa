import {
  defaultQuizSetup,
  eligibleChapterKeys,
  pruneChapterKeys,
  quizDecks,
  type MantraUnit,
  type QuizDirection,
  type QuizMode,
  type QuizSetupState,
} from "./quiz";

export type NavLang = "sanskrit" | "english";

const KEY = "prakasa-nav-lang";
const QUIZ_KEY = "prakasa-quiz-setup";

export function loadNavLang(): NavLang {
  try {
    return localStorage.getItem(KEY) === "english" ? "english" : "sanskrit";
  } catch {
    return "sanskrit";
  }
}

export function saveNavLang(lang: NavLang) {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* ignore quota / private mode */
  }
}

function isDirection(value: unknown): value is QuizDirection {
  return (
    value === "iast-meaning" ||
    value === "meaning-iast" ||
    value === "meaning-dev" ||
    value === "iast-dev" ||
    value === "dev-iast"
  );
}

function isMode(value: unknown): value is QuizMode {
  return value === "mcq" || value === "flashcard";
}

function isUnit(value: unknown): value is MantraUnit {
  return value === "word" || value === "phrase";
}

export function loadQuizSetup(): QuizSetupState {
  const fallback = defaultQuizSetup();
  try {
    const raw = localStorage.getItem(QUIZ_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<QuizSetupState>;
    const units = Array.isArray(parsed.units)
      ? parsed.units.filter(isUnit)
      : fallback.units;
    const resolvedUnits: MantraUnit[] = units.length ? units : fallback.units;
    const direction = isDirection(parsed.direction) ? parsed.direction : fallback.direction;
    const mode = isMode(parsed.mode) ? parsed.mode : fallback.mode;
    const knownDecks = new Set(quizDecks.map((deck) => deck.id));
    const deckIds = Array.isArray(parsed.deckIds)
      ? parsed.deckIds.filter((id): id is string => typeof id === "string" && knownDecks.has(id))
      : [];
    const chapterKeys = Array.isArray(parsed.chapterKeys)
      ? pruneChapterKeys(
          parsed.chapterKeys.filter((key): key is string => typeof key === "string"),
          resolvedUnits,
          direction,
        )
      : eligibleChapterKeys(resolvedUnits, direction);
    return { chapterKeys, deckIds, units: resolvedUnits, direction, mode };
  } catch {
    return fallback;
  }
}

export function saveQuizSetup(setup: QuizSetupState) {
  try {
    localStorage.setItem(QUIZ_KEY, JSON.stringify(setup));
  } catch {
    /* ignore quota / private mode */
  }
}
