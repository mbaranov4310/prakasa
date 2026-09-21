# Study lesson brief — one page

Work in `/Users/max/Desktop/projects/prakasa`. **You own exactly one lesson** (the id in your task) and **one pass** (transfer, or drills). Do not edit other lessons, the plan file, mantra chapters, or this brief. Do not commit or publish unless the human asks.

Stubs live in `src/content/study/catalog.ts`. Each draft has a `sourceUrl` on [learnsanskrit.org/guide](https://learnsanskrit.org/guide/) (CC BY 4.0). That page is the source. Part II is the syllabus. There is no second Core track.

**Out of scope:** Old Devanagari and Vedic Devanagari. Do not add those lessons back.

## How to write

Read the reference page. Read one ready lesson that is the same kind of page (`src/content/study/lessons/`). Put the reference into that shape.

You are transferring, not authoring. Do not add facts, examples, stems, or rules the reference does not have. Do not paste their paragraphs; shorten them into the blocks the existing lessons use (`p`, `h2`, `ul`, `glyphs`, `note`, `table`). The site footer already attributes the adaptation.

If the reference shows a paradigm table, copy its labels and layout from the closest ready table (see `a-stems.ts`). Do not invent a labeling scheme.

Check every Devanagari string you type:

```bash
python3 scripts/rudra-iast.py '…'
```

Prakāśa IAST uses `ā ī ū ṛ ṝ ḷ ṃ ḥ ṅ ñ ṭ ḍ ṇ ś ṣ`. If the script and the IAST disagree, fix it before you stop.

A mantra example is allowed only when both the Devanagari and the IAST are copied from an existing pair in `src/content/**/*.ts`. If the library does not have it, use the reference’s own example. Do not correct a chapter’s encoding in this task.

## Pass 1 — transfer

Make the lesson readable. The practice deck, if you add one, is only the reference’s own examples turned into cards. Same forms. Do not build a large drill here.

Files:

- `src/content/study/lessons/<slug>.ts` — one export of `LessonBlock[]`.
- `src/content/study/decks.ts` — only if you add that small deck: one `letters(...)` list and one `deck(...)` entry.
- `src/content/study/catalog.ts` — import the body into `lessonBodies`. Set `status: "ready"` and `practice` on **that** draft only. A ready lesson must have a deck; the catalog throws otherwise. Leave `prereqs` alone.

`npx tsc --noEmit` must pass. Stop. Report the lesson id and anything you were unsure how to transfer. Do not start the next stub.

## Pass 2 — drills

A later task. The lesson body already exists. Extend its deck with more cards that practice the same material.

Every card has to be checkable:

- It is a form the reference already gives, or
- It is the same rule applied to a stem the reference already declines, and `scripts/rudra-iast.py` agrees, or
- Both sides are copied from an encoded chapter.

If you cannot show which of those it is, do not add the card. Do not harvest the library (the cluster deck in `src/lib/clusters.ts` is an exception already shipped; do not copy that approach).

Handwritten rows: `[id, dev, iast]` or `[id, dev, iast, meaning]`.

- Reading a glyph: `direction: "dev-iast"`. The `dev` values must differ or the choices collapse.
- Producing a form: `direction: "meaning-iast"`. The meaning is the prompt. If two forms are spelled the same, the prompts must still differ.

Deck id stays the one the lesson already points at. `kind` is `"script"` or `"grammar"`. `unit` is `akshara` or `matra` for script, `sandhi` for sandhi pairs, `word` for inflected forms.

Stop after that one deck. Report how many cards you added and, for any card that is not printed on the reference page, where it came from.
