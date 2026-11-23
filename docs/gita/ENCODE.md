# Encode the Bhagavad Gītā

Work in `/Users/max/Desktop/projects/prakasa`.

## Where it stands

Chapter 12 is the pilot and the standard. It has gone through every step below and is on the site as `#/bhagavad-gita/gita-12`. The other 17 chapters show as “coming soon”. Do not start them until the human has looked at chapter 12.

- Words and meanings brief: `docs/gita/WORDS.md`
- Grammar and links brief: `docs/gita/GLOSS.md`
- Places where the digital copies disagree: `docs/gita/flags.md`

## The text we follow

One source of record: the verses as printed with Śaṅkara's Gītābhāṣya in *Works of Sri Sankaracharya* (Vāṇī Vilās Press, Srirangam, 1910), vol. 11 (chapters 1–9) and vol. 12 (chapters 10–18). It is in the public domain. 700 verses; Arjuna's question that some editions print before 13.1 is not in it.

Everything else is a witness. A witness helps find a typing mistake or a reading to look up. It never overrides the print.

| What | Where on this computer | Use |
| --- | --- | --- |
| 1910 scan, vol. 12 | `data/gita/vv/vol12-gita-10-18.pdf` | **The source.** Read verses off the page. |
| 1910 scan, vol. 11 | `data/gita/vv/vol11-gita-1-9.pdf` (not downloaded yet) | **The source.** |
| Gita Supersite verses, CLTK copy | `data/gita/supersite/ss_<N>.txt` | Starting text to correct. Public domain. Has scrape glitches. |
| Sringeri Advaita Śāradā | `data/gita/sringeri/sr_<N>.html` | Reading and comparing only. Their terms forbid reuse; never commit their text. |
| GRETIL verses and bhāṣya, IAST, ch. 1–17 | `data/gita/gretil/bhg-sankara-1-17.txt` | Reading the commentary. CC BY-NC-SA; do not copy. |
| Sastri's English of the bhāṣya (1897) | `data/gita/english/sastri-1977-ocr.txt` | Cross-check of meanings. Public domain, OCR. |
| Swarupananda word-by-word (1909) | `data/gita/english/swarupananda-1909-ocr.txt` | Cross-check of meanings. Public domain, OCR. |

`data/gita/` is not in git. The scans come from the archive.org item `CompleteWorksOfSriSankaracharyaIn20Volumes1910Edition` (files `WorksOfSriSankaracharya11-GitaBhashya1.pdf` and `WorksOfSriSankaracharya12-GitaBhashya2.pdf`). If `archive.org/download/…` fails, take the server address from the item's metadata.

Render pages to read: `python3 scripts/gita-pages.py 12 67 84` (volume, first and last PDF page counted from 0). In volume 12 the print page number is the PDF page plus 272: PDF page 67 is print p. 339, where chapter 12 begins.

## Files

One verse is one file. The md files are the record; the site files are generated from them.

```
docs/gita/text/<NN>/_chapter.md          chapter name and printed colophon
docs/gita/text/<NN>/gita-<NN>-<VV>.md    verse, translation, words, meanings
docs/gita/gloss/<NN>/gita-<NN>-<VV>.md   grammar of each word
docs/gita/links/<NN>/gita-<NN>-<VV>.md   who goes with whom
src/content/gita/gita-<NN>.ts            generated; do not edit
```

Ids: book `bhagavad-gita`, chapter `gita-12`, verse `gita-12-05`, line `gita-12-05-p1`, word `gita-12-05-w3`.

## Conventions

- One site page per adhyāya. 18 pages.
- Letters and spelling follow the print: `संनियम्य`, `धनंजय`, `निरहंकारः` with anusvāra where it prints anusvāra; `सङ्ग`, `काङ्क्षति` with the class nasal where it prints that. Word spacing follows the print.
- A verse is its two printed lines (four for the long metres). A speaker line such as `अर्जुन उवाच` is the first line of the verse it introduces, with no daṇḍa.
- A compound is one word. Its members are hyphenated in the `pada` column only: `अव्यक्त-आसक्त-चेतसाम्`.
- IAST is never typed. `scripts/ddv-iast.py` makes it from the Devanagari, and the checker proves the round trip.
- Meanings and translations are our own English. They follow Śaṅkara's gloss of each word; a bracket carries a point he makes that the bare English would lose. No sentence is copied from a published translation.
- Chapter 1 and 2.1–10 have no word gloss from Śaṅkara. Translate them plainly and leave it.

## Steps for a chapter

1. **Text.** Start from the Supersite verses. Read every verse against the scan and make the file say what the page says. Record the print page in the verse's `meta`. Check the chapter's entries in `flags.md` on the page and write down what the print has.
2. **Words and meanings.** `docs/gita/WORDS.md`. Fill the padas table, the line meanings, and the translation.
   `python3 scripts/check-gita-text.py --strict docs/gita/text/<NN>`
3. **Compare.** `python3 scripts/gita-compare.py --locked <NN>` prints every place where the finished chapter differs from a witness by a letter or a word. Each one is either a reading the print really has (note it in `flags.md`) or our typing mistake (fix it).
4. **Grammar and links.** `docs/gita/GLOSS.md`.
   `python3 scripts/check-gita-gloss.py docs/gita/text/<NN>`
5. **Lift.** `python3 scripts/lift-gita.py` writes `src/content/gita/` and the book entry in `src/content/library.ts`. It refuses a chapter that does not pass the strict check. Then `npx tsc --noEmit -p .` and look at the page.

One agent owns one chapter for one step. Agents working at the same time must not touch the same files: scripts, briefs, `src/`, and `flags.md` belong to whoever is coordinating.

## Before the other 17 chapters

The site loads every book in one bundle. The whole Gītā would add several megabytes to it. Chapters have to load one at a time, when opened, before the rest goes up.
