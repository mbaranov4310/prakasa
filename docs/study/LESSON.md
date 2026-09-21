# Study lesson brief — one page

Work in `/Users/max/Desktop/projects/prakasa`. **You own exactly one lesson** (the id in your task). Do not edit other lessons, the plan file, mantra chapters, or this brief. Do not commit or publish unless the human asks.

The catalog of stubs is `src/content/study/catalog.ts`. Ready pages are already filled. Coming-soon pages are the queue. Part II of [learnsanskrit.org/guide](https://learnsanskrit.org/guide/) is the syllabus. There is no second Core track.

**Out of scope:** Old Devanagari and Vedic Devanagari. Do not add those lessons back.

## Goal

Turn that one stub into a page a person can read and drill:

1. A short lesson body.
2. A handwritten practice deck.
3. Catalog wiring so the lesson is `ready` and Practice opens.

`npx tsc --noEmit` must pass. Importing the catalog throws if a ready lesson has no body, no source URL, or a deck id that does not exist.

## What to copy

| Job | Model |
| --- | --- |
| Script page (letters, marks) | `src/content/study/lessons/vowel-marks.ts` and its deck in `src/content/study/decks.ts` |
| Paradigm page (endings table) | `src/content/study/lessons/a-stems.ts` and the `ramaItems` deck |
| Clusters | Do **not** copy `src/lib/clusters.ts`. That deck is harvested from the library. New drills are typed by hand. |

## Files you may edit

- `src/content/study/lessons/<slug>.ts` — new file, one export of `LessonBlock[]`.
- `src/content/study/decks.ts` — one `letters(...)` list and one `deck(...)` entry.
- `src/content/study/catalog.ts` — import the body, add it to `lessonBodies`, set `status: "ready"` and `practice` on **that** draft only.

Leave `prereqs` as they are unless the draft has none and the previous lesson in the same topic is the real dependency (the helper already chains them).

## Where examples come from

Teach Classical Sanskrit. One sentence is enough when a mantra form is Vedic or sandhi-odd. Do not open a Vedic grammar.

1. **The guide page** in that lesson’s `sourceUrl` (CC BY 4.0). Rewrite it shorter. Do not paste their paragraphs. The site footer already attributes the adaptation.
2. **A closed inventory** (a vowel grid, an endings table, a sandhi rule the guide states). Type it from that page. Check every Devanagari string with `python3 scripts/rudra-iast.py '…'`. Prakāśa IAST uses `ā ī ū ṛ ṝ ḷ ṃ ḥ ṅ ñ ṭ ḍ ṇ ś ṣ`. If the script and your IAST disagree, fix the card before shipping.
3. **A mantra syllable**, only when you can point at an existing encoded pair in `src/content/**/*.ts` (a `["ना", "nā"]` style tuple or the same word in a chapter). Copy both sides. Name the chapter in the glyph `note`. If the library does not have the form, do not invent a “from the mantras” example. Use the guide’s sentence instead and say so.
4. Do not “correct” a chapter’s encoding in the same task. If a stored pair looks wrong, leave it out of the lesson and mention it in your summary.

End every lesson with a `note` block that says which examples are the guide’s table, which are copied syllables, and which are the guide’s sample sentence. That note is how a reviewer checks you.

## The eight cases

Any paradigm table uses these labels, in this order. Do not renumber them and do not swap in another Sanskrit name.

| English | Devanagari | IAST | Cue |
| --- | --- | --- | --- |
| nominative | प्रथमा | prathamā | subject |
| accusative | द्वितीया | dvitīyā | object |
| instrumental | तृतीया | tṛtīyā | with, by means of |
| dative | चतुर्थी | caturthī | for, to |
| ablative | पञ्चमी | pañcamī | from |
| genitive | षष्ठी | ṣaṣṭhī | of |
| locative | सप्तमी | saptamī | in, on |
| vocative | सम्बोधन | sambodhana | O |

```ts
{
  type: "table",
  labelHeader: "Case",
  headers: ["Singular", "Dual", "Plural"],
  rows: [
    {
      label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
      cells: [
        { dev: "रामेण", iast: "rāmeṇa" },
        { dev: "रामाभ्याम्", iast: "rāmābhyām" },
        { dev: "रामैः", iast: "rāmaiḥ" },
      ],
    },
  ],
}
```

One exemplar stem per lesson (rāma, phala, agni, …), the stem the guide uses. Do not generate a second stem’s full grid unless that page’s guide table already prints it.

## Drills

Handwritten. Each row is `[id, dev, iast]` or `[id, dev, iast, meaning]`.

- **Script** (read the glyph): `direction: "dev-iast"`. Meaning optional. `dev` must differ across cards or the multiple choice collapses.
- **Grammar** (produce the form): `direction: "meaning-iast"`. The meaning is the prompt (“with (one) Rāma”). When two cells share a form (`rāmau`), the meanings must still differ (“two Rāmas as the subject” vs “as the object”).
- Deck id: stable, kebab-case, unique in `scriptDecks`. `lessonId` on the deck matches the catalog id. `kind` is `"script"` or `"grammar"`.
- Size: the lesson’s own table or a short list of before/after pairs. Not every word in the library.
- `unit`: `akshara` or `matra` for script, `sandhi` for sandhi pairs, `word` for inflected forms.

A lesson cannot be `ready` without `practice.deckIds`.

## Lesson shape

Blocks already implemented: `p`, `h2`, `ul`, `glyphs`, `note`, `table`. A few screens. Patterns and the odd shape first, then the grid. Glyph `note` is a short gloss (“gurubhyo”), not a second paragraph.

## Check

1. `npx tsc --noEmit`
2. With the dev server up, open `#/study/<lessonId>`, read the page, open Practice, answer one card correctly.
3. Stop. Report the lesson id, how many cards, and which examples are guide vs copied. Do not start the next stub.
