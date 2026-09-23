# Drill brief — one lesson

Work in `/Users/max/Desktop/projects/prakasa`. You own **one lesson id**. Read this file, the lesson body, and its current deck. Then either leave the deck alone, or replace the thin deck with a real one. Write a note. Stop.

Do not edit other lessons, `catalog.ts` except to keep the existing `practice` pointer, mantra chapters, `LESSON.md`, or this file. Do not commit or publish unless the human asks.

`QuizDeckItem.group` is live. `mcqOptions` draws wrong answers only from cards with the same `group`. A card with no `group` still mixes the whole deck, which is the bug you are here to fix.

## What is wrong with the thin decks

Practice is multiple choice. `mcqOptions` takes the right IAST and fills the other buttons from **other cards in the same deck**. A five-card deck that mixes stems makes the question useless.

The `-ā`, `-ī`, and `-ū` deck asks “with (one) gajā” and offers `gajayā`, `nadyām`, `gajāyai`, `camūḥ`. Two of those are different words. The learner can discard them without knowing the instrumental.

A wrong answer has to be a form the learner could plausibly confuse with the right one: another case of the **same stem and the same number**. “with (one) gajā” should be answered against other singular forms of gajā.

## Read, then judge

Read:

- `src/content/study/lessons/<file>.ts` for this id
- the deck that `catalog.ts` already points at (`src/content/study/pending/<id>.ts`, or the handwritten list in `decks.ts` for `-a` stems and the Devanagari decks)
- the reference URL on the catalog draft, only to see what the page is teaching

Write one sentence: what skill this page is actually drilling.

Then pick one outcome.

**skip.** The page is an overview. It names a system and points at later lessons. Five reference cards are enough. Overview ids include the sound system, the sandhi system, the nominal system, sentence structure, special tense-moods, other tense-moods, the suffix system, and the compound system. If you are unsure, skip. A thin honest deck is better than a fake one.

**generate.** The page teaches a closed rule you can apply without inventing grammar: a paradigm table, a sandhi rule with a fixed outcome, or a stem-formation step the lesson states in full (guṇa plus the thematic vowel, and nothing else). Build a deck whose wrong answers stay inside one group.

**blocked.** The lesson does not state a rule you can apply, and the textbooks have no exercise for it either. Say what is missing and stop. Swapping a noun is not a reason to stop.

## Where a card may come from

A card is one of these:

1. A cell printed in the lesson table, turned into a prompt.
2. The same endings, applied to another stem of the **same class**, where the join is the one the table already shows (drop the stem vowel, add the ending that `rāma` uses). Check Devanagari with `python3 scripts/rudra-iast.py`.
3. A sandhi pair whose outcome is the rule printed on that page, applied to sounds the page already uses.

The two textbooks are the cue for the exercise shape. Elementary drills look the same in every grammar: one stem, the persons or the cases, the right ending. Use that shape.

- `data/FirstStepsTowardsSanskrit.pdf` — text layer. Declension exercises start near page 120, verb sentences near 136, sandhi after 140, sound true/false near 50. Search with `pypdf`.
- `data/concise_elementary_grammar.pdf` — scan, one image per page, no text. Render a page to a temp image and read it. Do not commit the image. Use it when First Steps has no exercise for this paradigm.

Read the exercise. Then build the same drill on a different ordinary noun or root. If the book declines an elephant, decline a horse, a dog, or a carpet. The endings stay the ones in the lesson table. A short sentence that only exists to show one case is fine once the noun is swapped. Do not paste a reading passage or a whole translation list.

Name the book and the page in the card comment, and name the stem you swapped in.

Do not harvest mantra chapters. The cluster deck is a finished exception. Do not copy that approach.

## Groups, so the wrong answers work

Every new grammar card sets `group` to `stem|number`, for example `gajā|sg` or `rāma|pl`.

`mcqOptions` must prefer other cards in that group. A group needs at least four **different** IAST strings, so a question has three real distractors. If a group cannot reach four distinct spellings, do not use it as a practice group.

Cells that share a spelling (dual nominative and dual accusative of `rāma` are both `rāmau`) become **one** card. Multiple choice on the spelling cannot ask the learner to tell them apart. The lesson prose can mention the ambiguity.

Prompts name the case the way the lesson tables do: English cue, number, stem in IAST. “with (one) gajā”, “of (many) rāma”. The stem stays in IAST. The prompt is the case, not an English translation of the noun.

Direction stays `meaning-iast`. `unit` stays `word` for inflected forms and `sandhi` for sandhi pairs. Sandhi groups are the rule, not a stem: `vowel|a+i`, `visarga|before-voiced`. Distractors are other outcomes a learner might produce for that join.

## How to generate a paradigm

Do not hand-type a grid. Hand-typing is how endings drift.

Take the lesson table as the pattern. Strip the citation stem to its stem vowel. For each new stem of that class, add the same ending the citation form uses after that vowel. Masculine `-a`: `rāmeṇa` means the ending after `rām-` is `eṇa`, so `gaja` gives `gajena`.

Pick two or three ordinary stems of the class the lesson declines. Swap whatever noun the textbook used. Masculine `-a` can be `rāma`, `gaja`, `nara`, `aśva`, `kambala`. Feminine `-ā` starts from `gajā` and one more stem that takes the same table.

One stem fully filled out is the minimum. Two or three stems of that same class are enough. Stop around 40 cards.

Gender and class stay inside the lesson. Do not decline a neuter with a masculine table. Consonant stems, `-ṛ`, and pronouns are irregular: turn **printed** cells into cards, grouped by stem and number. Do not invent a stem the table does not decline.

Check every generated Devanagari string with `scripts/rudra-iast.py`. If the script and the IAST disagree, fix the card before you stop.

## Verbs, sandhi, and the rest

Sandhi: generate pairs only from the rule on that page. Keep each rule in its own group.

Verb classes: turn the printed person grid into cards first (`group` like `nī|present|sg`). Add a second root only when the lesson states the stem step completely enough to repeat it. If the page is “still being developed” or is only a grid of one root, stop at that grid.

Sentences, translation, and “pick the right case in a story” need a stock of sentences. That stock is not in the lesson. Mark `blocked` and name the missing pile. Do not compose Sanskrit prose.

Devanagari lessons already have large recognition decks. Skip them unless the current deck is the five-card stub kind.

## Files

- The deck for this lesson. Pending decks stay in `src/content/study/pending/<id>.ts` and keep the same `id`, `lessonId`, `kind`, and `direction`. The `-a` stem deck is the `ramaItems` list in `decks.ts`; extend that list in place.
- `docs/study/drills/<lesson-id>.md` — the note below.
- `src/lib/quiz.ts` only if you were sent to add `group` support. A lesson agent does not touch it.

Leave the lesson prose alone. Leave `prereqs` alone.

`npx tsc --noEmit` must pass when you changed TypeScript.

## The note

Write `docs/study/drills/<lesson-id>.md` with:

- **Judgment** — one sentence on the skill.
- **Outcome** — `skip`, `generate`, or `blocked`.
- **What I would need** — the missing pile, or “nothing”.
- **What I did** — card count, stems, and the `group` values. For a skip, “left the reference deck”.
- **Check** — `unverified`. You do not verify your own cards.

A later pass, by a different agent or the human, re-applies the lesson table (or re-runs the generator) and only then sets the ledger row to `verified`. Gold star means that second pass agreed. The writer never edits `docs/study/DRILL-LEDGER.md`.

## Ledger

`docs/study/DRILL-LEDGER.md` is one row per lesson id: `todo`, `skip`, `unverified`, `verified`, or `blocked`. The parent updates it from the note. Parallel agents will collide if they share that file.

## Stop

Report the outcome, the card count, and any group that could not reach four distinct spellings. Do not start another lesson.
