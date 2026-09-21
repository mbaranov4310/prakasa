import type { QuizDirection } from "../../lib/quiz";
import { scriptDecks } from "./decks";
import { howDevanagariWorks } from "./lessons/how-devanagari-works";
import { vowelsAndConsonants } from "./lessons/vowels-and-consonants";
import { vowelMarks } from "./lessons/vowel-marks";
import { consonantClusters } from "./lessons/consonant-clusters";
import { numeralsAndPunctuation } from "./lessons/numerals-and-punctuation";
import { aStems } from "./lessons/a-stems";
import { sandhiSystem } from "./lessons/sandhi-system";
import { vowelSandhi } from "./lessons/vowel-sandhi";
import { visargaSandhi } from "./lessons/visarga-sandhi";
import { consonantSandhiBetweenWords } from "./lessons/consonant-sandhi-between-words";
import { consonantSandhiWithinAWord } from "./lessons/consonant-sandhi-within-a-word";
import { nominalSystem } from "./lessons/nominal-system";
import { basicNominalEndings } from "./lessons/basic-nominal-endings";
import { aaIiUuStems } from "./lessons/aa-ii-uu-stems";
import { iAndUStems } from "./lessons/i-and-u-stems";
import { rStems } from "./lessons/r-stems";
import { aiOAuStems } from "./lessons/ai-o-au-stems";
import { consonantStems } from "./lessons/consonant-stems";

export type LessonStatus = "ready" | "coming-soon";

export type LessonBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "glyphs"; items: Array<{ dev: string; iast: string; note?: string }> }
  | { type: "note"; text: string }
  | {
      type: "table";
      caption?: string;
      labelHeader?: string;
      headers: string[];
      rows: Array<{
        label: { en: string; dev: string; iast: string; cue?: string };
        cells: Array<{ dev: string; iast: string }>;
      }>;
    };

export type LessonMeta = {
  id: string;
  topicId: string;
  titleEn: string;
  status: LessonStatus;
  prereqs: string[];
  sourceUrl: string;
  practice?: {
    deckIds: string[];
    direction: QuizDirection;
  };
};

export type StudyTopic = {
  id: string;
  titleEn: string;
  lessonIds: string[];
};

const GUIDE = "https://learnsanskrit.org/guide";

type Draft = {
  id: string;
  titleEn: string;
  sourceUrl: string;
  status?: LessonStatus;
  prereqs?: string[];
  practice?: LessonMeta["practice"];
};

function topicLessons(topicId: string, drafts: Draft[]): LessonMeta[] {
  return drafts.map((draft, index) => ({
    id: draft.id,
    topicId,
    titleEn: draft.titleEn,
    status: draft.status ?? "coming-soon",
    prereqs: draft.prereqs ?? (index === 0 ? [] : [drafts[index - 1].id]),
    sourceUrl: draft.sourceUrl,
    practice: draft.practice,
  }));
}

const devanagari = topicLessons("devanagari", [
  {
    id: "devanagari-how-devanagari-works",
    titleEn: "How Devanagari works",
    sourceUrl: `${GUIDE}/devanagari/how-devanagari-works/`,
    status: "ready",
    prereqs: [],
    practice: {
      deckIds: ["devanagari-how-it-works"],
      direction: "meaning-iast",
    },
  },
  {
    id: "devanagari-vowels-and-consonants",
    titleEn: "Vowels and consonants",
    sourceUrl: `${GUIDE}/devanagari/vowels-and-consonants/`,
    status: "ready",
    practice: {
      deckIds: ["devanagari-vowels-consonants"],
      direction: "dev-iast",
    },
  },
  {
    id: "devanagari-vowel-marks",
    titleEn: "Vowel marks",
    sourceUrl: `${GUIDE}/devanagari/vowel-marks/`,
    status: "ready",
    practice: {
      deckIds: ["devanagari-vowel-marks"],
      direction: "dev-iast",
    },
  },
  {
    id: "devanagari-consonant-clusters",
    titleEn: "Consonant clusters",
    sourceUrl: `${GUIDE}/devanagari/consonant-clusters/`,
    status: "ready",
    prereqs: ["devanagari-vowels-and-consonants"],
    practice: {
      deckIds: ["devanagari-clusters"],
      direction: "dev-iast",
    },
  },
  {
    id: "devanagari-numerals-and-punctuation",
    titleEn: "Numerals and punctuation",
    sourceUrl: `${GUIDE}/devanagari/numerals-and-punctuation/`,
    status: "ready",
    prereqs: ["devanagari-vowels-and-consonants"],
    practice: {
      deckIds: ["devanagari-numerals-punctuation"],
      direction: "dev-iast",
    },
  },
]);

const sounds = topicLessons("sounds", [
  {
    id: "sounds-the-sound-system",
    titleEn: "The sound system",
    sourceUrl: `${GUIDE}/sounds/the-sound-system/`,
  },
  {
    id: "sounds-vowels",
    titleEn: "Vowels",
    sourceUrl: `${GUIDE}/sounds/vowels/`,
  },
  {
    id: "sounds-consonants",
    titleEn: "Consonants",
    sourceUrl: `${GUIDE}/sounds/consonants/`,
  },
  {
    id: "sounds-other-sounds",
    titleEn: "Other sounds",
    sourceUrl: `${GUIDE}/sounds/other-sounds/`,
  },
  {
    id: "sounds-syllables",
    titleEn: "Syllables",
    sourceUrl: `${GUIDE}/core/syllables/`,
  },
  {
    id: "sounds-modern-pronunciation",
    titleEn: "Modern pronunciation",
    sourceUrl: `${GUIDE}/sounds/modern-pronunciation/`,
    prereqs: ["sounds-other-sounds"],
  },
]);

const sandhi = topicLessons("sandhi", [
  {
    id: "sandhi-the-sandhi-system",
    titleEn: "The sandhi system",
    sourceUrl: `${GUIDE}/sandhi/the-sandhi-system/`,
    status: "ready",
    practice: { deckIds: ["sandhi-the-sandhi-system"], direction: "meaning-iast" },
  },
  {
    id: "sandhi-vowel-sandhi",
    titleEn: "Vowel sandhi",
    sourceUrl: `${GUIDE}/sandhi/vowel-sandhi/`,
    status: "ready",
    practice: { deckIds: ["sandhi-vowel-sandhi"], direction: "meaning-iast" },
  },
  {
    id: "sandhi-visarga-sandhi",
    titleEn: "visarga sandhi",
    sourceUrl: `${GUIDE}/sandhi/visarga-sandhi/`,
    status: "ready",
    practice: { deckIds: ["sandhi-visarga-sandhi"], direction: "meaning-iast" },
  },
  {
    id: "sandhi-consonant-sandhi-between-words",
    titleEn: "Consonant sandhi between words",
    sourceUrl: `${GUIDE}/sandhi/consonant-sandhi-between-words/`,
    status: "ready",
    practice: { deckIds: ["sandhi-consonant-sandhi-between-words"], direction: "meaning-iast" },
  },
  {
    id: "sandhi-consonant-sandhi-within-a-word",
    titleEn: "Consonant sandhi within a word",
    sourceUrl: `${GUIDE}/sandhi/consonant-sandhi-within-a-word/`,
    status: "ready",
    practice: { deckIds: ["sandhi-consonant-sandhi-within-a-word"], direction: "meaning-iast" },
  },
]);

const nominals1 = topicLessons("nominals-1", [
  {
    id: "nominals-the-nominal-system",
    titleEn: "The nominal system",
    sourceUrl: `${GUIDE}/nominals/the-nominal-system/`,
    status: "ready",
    practice: { deckIds: ["nominals-the-nominal-system"], direction: "meaning-iast" },
  },
  {
    id: "nominals-basic-nominal-endings",
    titleEn: "Basic nominal endings",
    sourceUrl: `${GUIDE}/nominals/basic-nominal-endings/`,
    status: "ready",
    practice: { deckIds: ["nominals-basic-nominal-endings"], direction: "meaning-iast" },
  },
  {
    id: "nominals-a-stems",
    titleEn: "-a stems",
    sourceUrl: `${GUIDE}/nominals/a-stems/`,
    status: "ready",
    practice: {
      deckIds: ["nominals-rama-a-stems"],
      direction: "meaning-iast",
    },
  },
  {
    id: "nominals-aa-ii-uu-stems",
    titleEn: "-ā, -ī, and -ū stems",
    sourceUrl: `${GUIDE}/nominals/a-i-and-u-stems/`,
    status: "ready",
    practice: { deckIds: ["nominals-aa-ii-uu-stems"], direction: "meaning-iast" },
  },
  {
    id: "nominals-i-and-u-stems",
    titleEn: "-i and -u stems",
    sourceUrl: `${GUIDE}/nominals/i-and-u-stems/`,
    status: "ready",
    practice: { deckIds: ["nominals-i-and-u-stems"], direction: "meaning-iast" },
  },
  {
    id: "nominals-r-stems",
    titleEn: "-ṛ stems",
    sourceUrl: `${GUIDE}/nominals/r-stems/`,
    status: "ready",
    practice: { deckIds: ["nominals-r-stems"], direction: "meaning-iast" },
  },
  {
    id: "nominals-ai-o-au-stems",
    titleEn: "-ai, -o, and -au stems",
    sourceUrl: `${GUIDE}/nominals/ai-o-and-au-stems/`,
    status: "ready",
    practice: { deckIds: ["nominals-ai-o-au-stems"], direction: "meaning-iast" },
  },
  {
    id: "nominals-consonant-stems",
    titleEn: "Consonant stems",
    sourceUrl: `${GUIDE}/nominals/consonant-stems/`,
    status: "ready",
    practice: { deckIds: ["nominals-consonant-stems"], direction: "meaning-iast" },
  },
]);

const uninflected = topicLessons("uninflected", [
  {
    id: "uninflected-types",
    titleEn: "Types of uninflected words",
    sourceUrl: `${GUIDE}/uninflected-words/types-of-uninflected-words/`,
  },
  {
    id: "uninflected-upasarga",
    titleEn: "The upasarga",
    sourceUrl: `${GUIDE}/uninflected-words/the-upasarga/`,
  },
  {
    id: "uninflected-other-prefixes",
    titleEn: "Other prefixes",
    sourceUrl: `${GUIDE}/uninflected-words/other-prefixes/`,
  },
  {
    id: "uninflected-ca-va-and-others",
    titleEn: "ca, vā, and others",
    sourceUrl: `${GUIDE}/uninflected-words/ca-va-and-others/`,
  },
  {
    id: "uninflected-adverbs",
    titleEn: "Adverbs",
    sourceUrl: `${GUIDE}/uninflected-words/adverbs/`,
  },
]);

const sentences = topicLessons("sentences", [
  {
    id: "sentences-sentence-structure",
    titleEn: "Sentence structure",
    sourceUrl: `${GUIDE}/sentences/sentence-structure/`,
  },
  {
    id: "sentences-agreement",
    titleEn: "Agreement",
    sourceUrl: `${GUIDE}/sentences/agreement/`,
  },
  {
    id: "sentences-verbless-sentences",
    titleEn: "Verbless sentences",
    sourceUrl: `${GUIDE}/sentences/verbless-sentences/`,
  },
  {
    id: "sentences-questions",
    titleEn: "Questions",
    sourceUrl: `${GUIDE}/sentences/questions/`,
  },
  {
    id: "sentences-relative-phrases",
    titleEn: "Relative phrases",
    sourceUrl: `${GUIDE}/sentences/relative-phrases/`,
  },
  {
    id: "sentences-participles",
    titleEn: "Participles",
    sourceUrl: `${GUIDE}/sentences/participles/`,
  },
  {
    id: "sentences-the-eight-cases",
    titleEn: "The eight cases",
    sourceUrl: `${GUIDE}/sentences/the-eight-cases/`,
  },
]);

const nominals2 = topicLessons("nominals-2", [
  {
    id: "nominals-asmad-and-yusmad",
    titleEn: "asmad and yuṣmad",
    sourceUrl: `${GUIDE}/nominals/asmad-and-yusmad/`,
  },
  {
    id: "nominals-tad-etad-idam-and-adas",
    titleEn: "tad, etad, idam, and adas",
    sourceUrl: `${GUIDE}/nominals/tad-etad-idam-and-adas/`,
  },
  {
    id: "nominals-kim-and-yad",
    titleEn: "kim and yad",
    sourceUrl: `${GUIDE}/nominals/kim-and-yad/`,
  },
  {
    id: "nominals-pronominal-adjectives",
    titleEn: "Pronominal adjectives",
    sourceUrl: `${GUIDE}/nominals/pronominal-adjectives/`,
  },
  {
    id: "nominals-number-words",
    titleEn: "Number words",
    sourceUrl: `${GUIDE}/nominals/number-words/`,
  },
]);

const verbs1 = topicLessons("verbs-1", [
  {
    id: "verbs-special-tense-moods",
    titleEn: "Special tense-moods",
    sourceUrl: `${GUIDE}/verbs/special-tense-moods/`,
  },
  {
    id: "verbs-the-present-tense",
    titleEn: "The present tense",
    sourceUrl: `${GUIDE}/verbs/the-present-tense/`,
  },
  {
    id: "verbs-the-command-mood",
    titleEn: "The command mood",
    sourceUrl: `${GUIDE}/verbs/the-command-mood/`,
  },
  {
    id: "verbs-the-ordinary-past-tense",
    titleEn: "The ordinary past tense",
    sourceUrl: `${GUIDE}/verbs/the-ordinary-past-tense/`,
  },
  {
    id: "verbs-the-potential-mood",
    titleEn: "The potential mood",
    sourceUrl: `${GUIDE}/verbs/the-potential-mood/`,
  },
  {
    id: "verbs-atmanepada",
    titleEn: "ātmanepada",
    sourceUrl: `${GUIDE}/verbs/atmanepada/`,
  },
  {
    id: "verbs-bhu-div-tud-and-cur",
    titleEn: "The bhū, div, tud, and cur classes",
    sourceUrl: `${GUIDE}/verbs/the-bhu-div-tud-and-cur-classes/`,
  },
  {
    id: "verbs-su-tan-and-kri",
    titleEn: "The su, tan, and krī classes",
    sourceUrl: `${GUIDE}/verbs/the-su-tan-and-kri-classes/`,
  },
  {
    id: "verbs-ad-and-rudh",
    titleEn: "The ad and rudh classes",
    sourceUrl: `${GUIDE}/verbs/the-ad-and-rudh-classes/`,
  },
  {
    id: "verbs-the-hu-class",
    titleEn: "The hu class",
    sourceUrl: `${GUIDE}/verbs/the-hu-class/`,
  },
  {
    id: "verbs-karmani-and-bhave-prayoga",
    titleEn: "karmaṇi and bhāve prayoga",
    sourceUrl: `${GUIDE}/verbs/karmani-and-bhave-prayoga/`,
  },
]);

const verbs2 = topicLessons("verbs-2", [
  {
    id: "verbs-other-tense-moods",
    titleEn: "Other tense-moods",
    sourceUrl: `${GUIDE}/verbs/other-tense-moods/`,
  },
  {
    id: "verbs-the-simple-future-tense",
    titleEn: "The simple future tense",
    sourceUrl: `${GUIDE}/verbs/the-simple-future-tense/`,
  },
  {
    id: "verbs-the-conditional-mood",
    titleEn: "The conditional mood",
    sourceUrl: `${GUIDE}/verbs/the-conditional-mood/`,
  },
  {
    id: "verbs-the-distant-future-tense",
    titleEn: "The distant future tense",
    sourceUrl: `${GUIDE}/verbs/the-distant-future-tense/`,
  },
  {
    id: "verbs-the-distant-past-tense",
    titleEn: "The distant past tense",
    sourceUrl: `${GUIDE}/verbs/the-distant-past-tense/`,
  },
  {
    id: "verbs-the-recent-past-tense",
    titleEn: "The recent past tense",
    sourceUrl: `${GUIDE}/verbs/the-recent-past-tense/`,
  },
  {
    id: "verbs-the-blessing-mood",
    titleEn: "The blessing mood",
    sourceUrl: `${GUIDE}/verbs/the-blessing-mood/`,
  },
]);

const verbs3 = topicLessons("verbs-3", [
  {
    id: "verbs-causal-roots",
    titleEn: "Causal roots",
    sourceUrl: `${GUIDE}/verbs/causal-roots/`,
  },
  {
    id: "verbs-desiderative-roots",
    titleEn: "Desiderative roots",
    sourceUrl: `${GUIDE}/verbs/desiderative-roots/`,
  },
  {
    id: "verbs-nominal-roots",
    titleEn: "Nominal roots",
    sourceUrl: `${GUIDE}/verbs/nominal-roots/`,
  },
  {
    id: "verbs-intensive-roots",
    titleEn: "Intensive roots",
    sourceUrl: `${GUIDE}/verbs/intensive-roots/`,
  },
]);

const suffixes = topicLessons("suffixes", [
  {
    id: "suffixes-the-suffix-system",
    titleEn: "The suffix system",
    sourceUrl: `${GUIDE}/suffixes/the-suffix-system/`,
  },
  {
    id: "suffixes-tva-and-ya",
    titleEn: "-tvā and -ya",
    sourceUrl: `${GUIDE}/suffixes/tva-and-ya/`,
  },
  {
    id: "suffixes-ta-and-tavat",
    titleEn: "-ta and -tavat",
    sourceUrl: `${GUIDE}/suffixes/ta-and-tavat/`,
  },
  {
    id: "suffixes-tum",
    titleEn: "-tum",
    sourceUrl: `${GUIDE}/suffixes/tum/`,
  },
  {
    id: "suffixes-tavya-aniya-and-ya",
    titleEn: "-tavya, -anīya, and -ya",
    sourceUrl: `${GUIDE}/suffixes/tavya-aniya-and-ya/`,
  },
  {
    id: "suffixes-at-ana-and-vas",
    titleEn: "-at, -āna, and -vas",
    sourceUrl: `${GUIDE}/suffixes/at-ana-and-vas/`,
  },
  {
    id: "suffixes-other-root-suffixes",
    titleEn: "Other root suffixes",
    sourceUrl: `${GUIDE}/suffixes/other-root-suffixes/`,
  },
  {
    id: "suffixes-nominal-suffixes",
    titleEn: "Nominal suffixes",
    sourceUrl: `${GUIDE}/suffixes/nominal-suffixes/`,
  },
]);

const compounds = topicLessons("compounds", [
  {
    id: "compounds-the-compound-system",
    titleEn: "The compound system",
    sourceUrl: `${GUIDE}/compounds/the-compound-system/`,
  },
  {
    id: "compounds-the-dvandva",
    titleEn: "The dvandva",
    sourceUrl: `${GUIDE}/compounds/the-dvandva/`,
  },
  {
    id: "compounds-the-tatpurusa",
    titleEn: "The tatpuruṣa",
    sourceUrl: `${GUIDE}/compounds/the-tatpurusa/`,
  },
  {
    id: "compounds-the-bahuvrihi",
    titleEn: "The bahuvrīhi",
    sourceUrl: `${GUIDE}/compounds/the-bahuvrihi/`,
  },
  {
    id: "compounds-the-avyayibhava",
    titleEn: "The avyayībhāva",
    sourceUrl: `${GUIDE}/compounds/the-avyayibhava/`,
  },
]);

export const lessonMetas: LessonMeta[] = [
  ...devanagari,
  ...sounds,
  ...sandhi,
  ...nominals1,
  ...uninflected,
  ...sentences,
  ...nominals2,
  ...verbs1,
  ...verbs2,
  ...verbs3,
  ...suffixes,
  ...compounds,
];

export const studyTopics: StudyTopic[] = [
  { id: "devanagari", titleEn: "Devanagari", lessonIds: devanagari.map((lesson) => lesson.id) },
  { id: "sounds", titleEn: "Sounds", lessonIds: sounds.map((lesson) => lesson.id) },
  { id: "sandhi", titleEn: "Sandhi", lessonIds: sandhi.map((lesson) => lesson.id) },
  { id: "nominals-1", titleEn: "Nominals 1: Normal stems", lessonIds: nominals1.map((lesson) => lesson.id) },
  { id: "uninflected", titleEn: "Uninflected words", lessonIds: uninflected.map((lesson) => lesson.id) },
  { id: "sentences", titleEn: "Sentences", lessonIds: sentences.map((lesson) => lesson.id) },
  { id: "nominals-2", titleEn: "Nominals 2: Pronouns and numbers", lessonIds: nominals2.map((lesson) => lesson.id) },
  { id: "verbs-1", titleEn: "Verbs 1: Special tense-moods", lessonIds: verbs1.map((lesson) => lesson.id) },
  { id: "verbs-2", titleEn: "Verbs 2: Other tense-moods", lessonIds: verbs2.map((lesson) => lesson.id) },
  { id: "verbs-3", titleEn: "Verbs 3: Derived roots", lessonIds: verbs3.map((lesson) => lesson.id) },
  { id: "suffixes", titleEn: "Suffixes", lessonIds: suffixes.map((lesson) => lesson.id) },
  { id: "compounds", titleEn: "Compounds", lessonIds: compounds.map((lesson) => lesson.id) },
];

export const lessonBodies: Record<string, LessonBlock[]> = {
  "devanagari-how-devanagari-works": howDevanagariWorks,
  "devanagari-vowels-and-consonants": vowelsAndConsonants,
  "devanagari-vowel-marks": vowelMarks,
  "devanagari-consonant-clusters": consonantClusters,
  "devanagari-numerals-and-punctuation": numeralsAndPunctuation,
  "sandhi-the-sandhi-system": sandhiSystem,
  "sandhi-vowel-sandhi": vowelSandhi,
  "sandhi-visarga-sandhi": visargaSandhi,
  "sandhi-consonant-sandhi-between-words": consonantSandhiBetweenWords,
  "sandhi-consonant-sandhi-within-a-word": consonantSandhiWithinAWord,
  "nominals-the-nominal-system": nominalSystem,
  "nominals-basic-nominal-endings": basicNominalEndings,
  "nominals-a-stems": aStems,
  "nominals-aa-ii-uu-stems": aaIiUuStems,
  "nominals-i-and-u-stems": iAndUStems,
  "nominals-r-stems": rStems,
  "nominals-ai-o-au-stems": aiOAuStems,
  "nominals-consonant-stems": consonantStems,
};

function checkCatalog() {
  const ids = new Set(lessonMetas.map((lesson) => lesson.id));
  const topicIds = new Set(studyTopics.flatMap((topic) => topic.lessonIds));
  const knownDecks = new Set(scriptDecks.map((deck) => deck.id));
  if (ids.size !== lessonMetas.length) {
    throw new Error("Duplicate study lesson id");
  }
  for (const id of ids) {
    if (!topicIds.has(id)) throw new Error(`Lesson ${id} is missing from studyTopics`);
  }
  for (const lesson of lessonMetas) {
    for (const prereq of lesson.prereqs) {
      if (!ids.has(prereq)) throw new Error(`Unknown prereq ${prereq} on ${lesson.id}`);
    }
    if (lesson.status !== "ready") continue;
    if (!lessonBodies[lesson.id]?.length) {
      throw new Error(`Ready lesson ${lesson.id} has no body`);
    }
    if (!lesson.practice?.deckIds.length) {
      throw new Error(`Ready lesson ${lesson.id} has no practice deck`);
    }
    if (!lesson.sourceUrl) {
      throw new Error(`Ready lesson ${lesson.id} is missing a source URL`);
    }
    for (const deckId of lesson.practice.deckIds) {
      if (!knownDecks.has(deckId)) {
        throw new Error(`Ready lesson ${lesson.id} points at missing deck ${deckId}`);
      }
    }
  }
}

checkCatalog();
