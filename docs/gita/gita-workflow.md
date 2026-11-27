# Bhagavad Gītā workflow

Work in `/Users/max/Desktop/projects/prakasa`. This is the handoff. Word shape is `docs/gita/WORDS.md`. Grammar and links are `docs/gita/GLOSS.md`. Readings that differ from the digital copies are `docs/gita/flags.md`. Chapter 12 is the specimen for both steps.

## Where it stands

Published, in order, from the 1910 print: chapters 1–9 and 12. Live at `https://mbaranov4310.github.io/prakasa/#/bhagavad-gita/gita-NN` (chapter id is always two digits). Next is chapter 10, in volume 12. Then 11, skip 12, then 13–18. This edition has 34 verses in chapter 13; Supersite’s extra first verse is not encoded.

Do not commit `data/gita/`. Publish a chapter only after its verse text and its grammar both pass.

After chapter 9 the site script is about 4.2 MB (824 kB gzipped). It still loads every chapter at once. Splitting chapters so each loads when opened is worth doing before many more go in. Encoding has continued without that split.

## The text we follow

One source of record: the verses as printed with Śaṅkara's Gītābhāṣya in *Works of Sri Sankaracharya* (Vāṇī Vilās Press, Srirangam, 1910), vol. 11 (chapters 1–9) and vol. 12 (chapters 10–18). It is in the public domain. 700 verses.

Everything else is a witness. A witness helps find a typing mistake or a reading to look up. It never overrides the print.

| What | Where on this computer | Use |
| --- | --- | --- |
| 1910 scan, vol. 11 | `data/gita/vv/vol11-gita-1-9.pdf` | **The source.** Chapters 1–9. |
| 1910 scan, vol. 12 | `data/gita/vv/vol12-gita-10-18.pdf` | **The source.** Chapters 10–18. |
| Gita Supersite verses, CLTK copy | `data/gita/supersite/ss_<N>.txt` | Starting text to correct. Public domain. Has scrape glitches. |
| Sringeri Advaita Śāradā | `data/gita/sringeri/sr_<N>.html` | Reading and comparing only. Their terms forbid reuse; never commit their text. A ब/व disagreement with Sringeri alone is not a reason to change the print. |
| GRETIL verses and bhāṣya, IAST, ch. 1–17 | `data/gita/gretil/bhg-sankara-1-17.txt` | Reading the commentary. Ids `bhg_9.12` and `bhgs_9.12`. CC BY-NC-SA; do not copy. |
| Sastri's English of the bhāṣya | `data/gita/english/sastri-1977-ocr.txt` | Cross-check only. Do not copy a sentence. |
| Swarupananda word-by-word | `data/gita/english/swarupananda-1909-ocr.txt` | Cross-check only. Do not copy. |
| OCR of the scan | `data/gita/vv/vol11_djvu.xml`, `vol12_djvu.xml` | Finding which PDF page a verse is on. Never for typing. |

`data/gita/` is not in git. The scans come from the archive.org item `CompleteWorksOfSriSankaracharyaIn20Volumes1910Edition`. Render a page with `python3 scripts/gita-pages.py 12 67 84` (volume, first and last PDF page counted from 0). Output is `data/gita/vv/pages/v12_p067.png`.

## Files

The md files are the record. The site files are generated.

```
docs/gita/text/<NN>/_chapter.md          chapter name and printed colophon
docs/gita/text/<NN>/gita-<NN>-<VV>.md    verse, translation, words, meanings
docs/gita/gloss/<NN>/gita-<NN>-<VV>.md   grammar of each word
docs/gita/links/<NN>/gita-<NN>-<VV>.md   who goes with whom
src/content/gita/gita-<NN>.ts            generated; do not edit
```

Ids: book `bhagavad-gita`, chapter `gita-09`, verse `gita-09-22`, word `gita-09-22-w3`.

## How a chapter is done

One coordinator. Fresh workers, each starting blank, each owning one slice of one step. A worker that times out is not resumed. See which files it finished, and spawn a new worker for the gap only.

Workers on the same chapter may run together when they write different verse files. They must not edit scripts, briefs, `flags.md`, `_chapter.md` while someone else might, or anything under `src/`. The coordinator owns those.

About 11 or 12 verses is enough for a text worker. Fourteen timed out once. About 7 or 8 verses is enough for a grammar worker. One verse at a time: write the files, run the checker on that verse, then open the next. Do not read the checker script. Do not search other chapters’ glosses. Do not run `gita-compare.py --locked` or the directory checker while another slice of the chapter is still being written.

`check-gita-text.py` and `check-gita-gloss.py` take exactly one path, a directory or one verse file. More than one path prints usage and checks nothing.

### 1. Verse text

Follow `docs/gita/WORDS.md`. Specimens: `docs/gita/text/12/gita-12-01.md`, `gita-12-05.md`, `gita-12-13.md`.

The worker writes only its verse files. The last slice of the chapter also writes `_chapter.md` once the colophon has been read off the page. Start from Supersite and correct every letter against the PNG. The page wins over Supersite, Sringeri, and GRETIL.

`print_page` is the printed page, not the PDF index. Read the running header. The offset is not constant, even inside volume 11:

| Chapter | Printed page |
| --- | --- |
| 5 | PDF index − 37 |
| 6 | index − 36 |
| 7 | index − 35. Opening leaf unnumbered, counted 213; next header is 214. |
| 8 | index − 34. Opening leaf counted 233; numbered 234–250. |
| 9 | index − 33. Opening leaf counted 253; numbered 254–276. |
| 12 | index + 272. Index 67 is print 339. |

Recompute the offset for the next stretch from the header. Do not reuse the previous chapter’s number. An even printed page has the numeral on the left; an odd page has it on the right. Vision and the djvu OCR misread Devanagari digits (४/६/७, १/८, ५/८). Trust a header when the same offset holds on the next pages and the verse in the file is the verse on that page. The djvu XML is good for finding the page, not for reading the numeral.

An unnumbered opening leaf is counted as one less than the next header. The chapter’s `print:` line lists the numbered range, as chapters 7–9 do. Verse 1 still records the counted opening leaf when it stands there.

A line-break hyphen is not stored. The letter it carries sits at the start of the next line’s slice, as in 9.20 (`सुरेन्द्रलोक` / `मश्नन्ति`) and 9.25 (`देवा` / `न्पितॄन्`). Anuṣṭubh is stored as two lines even when the print wraps a long line. A long metre keeps its four lines. A speaker line (`श्रीभगवानुवाच`) is the first line, with no space that the print does not have, no daṇḍa, and `after` of `break`.

Slices rebuild the printed line letter for letter. A vowel merged with the previous word stays on the first word. A consonant fused with the next word’s vowel keeps that akṣara on the first word. Do not move it onto the second.

Check: `python3 scripts/check-gita-text.py --strict docs/gita/text/<NN>/<file>.md`, then the directory once every verse exists.

Then `python3 scripts/gita-compare.py --locked <N>`. Each difference is either a reading the page really has, noted in `flags.md` under that chapter, or a typing mistake. GRETIL’s extractor misses a verse line that has a space before the closing `||`. That is not a text error.

### 2. Colophon and title

Read the close off the PNG. If the page prints the long इति श्रीमहाभारते formula and it names a yoga, that name is `title_dev` / `title_en`, and that formula is the colophon (chapters 1, 2, 5, 6, 7, 8, 9, 12). If the page prints only the short ācārya formula, the title is “Chapter N” and the short formula is the colophon (chapters 3 and 4). When both are printed, store the long name-colophon. Do not invent a yoga-name. Check anusvāra on that line against the print. Chapter 8 has it on `ब्रह्मविद्यायां`. Chapter 9 has none at the end of `संहिताया`, `वैयासिक्या`, or `ब्रह्मविद्याया`.

Chapter 1 and 2.1–10 have no word gloss from Śaṅkara. Their English is the plain sense.

### 3. Grammar and links

Follow `docs/gita/GLOSS.md`. Specimens: `docs/gita/gloss/12/gita-12-01.md` with its links file, and the same pair for 12.5.

The worker writes only `docs/gita/gloss/<NN>/` and `docs/gita/links/<NN>/` for its verses. It does not edit the verse files. For each verse it reads that verse file and only the `bhgs_<N>.<V>` block in the GRETIL file. Śaṅkara’s prose order decides the links. A note is one or two plain sentences. Nothing is pasted from him or from Sastri.

After each verse: `python3 scripts/check-gita-gloss.py docs/gita/text/<NN>/gita-<NN>-<VV>.md`

The checker knows the format, not the grammar. The worker reports any meaning that looks wrong, with the verse, the word, and one sentence, and does not change it.

The coordinator decides those. A wrong meaning is fixed in the verse file and in the gloss `meaning` line, and the phrase or translation is updated when the sentence would otherwise contradict the word. The word’s own English stays on the word. Extra English (“who”, “are”, “of”, a reason) belongs in the phrase or the note. Short brackets only for a point Śaṅkara makes about that word.

Unsure only when two legal parses remain and Śaṅkara does not choose. A form the sentence settles is obvious, with a note. Chapter 9 has one such open link: *me* in 9.29.

### 4. Lift, check, publish

When every verse passes both checkers:

```
python3 scripts/lift-gita.py <N>
npx tsc --noEmit -p .
```

Lift writes `src/content/gita/gita-<NN>.ts` and rewrites the bhagavad-gita block in `src/content/library.ts` from every `gita-*.ts` present. Give it the chapter number. Do not edit the generated file.

On the local reader (`http://127.0.0.1:5173`, `npm run dev` if it is not up), open `#/bhagavad-gita/gita-<NN>` and confirm the title from the colophon, the verse count, a word tap (meaning, case, and the word it leans on), and one practice answer. Then open the previous chapter and `#/drg-drsya-viveka/ddv-01`. Gītā chapters set `joinFused`, so Devanagari joins as printed. Dṛg-dṛśya-viveka must stay gapped: no `fused` class, and the first word keeps `word-gap-after`. The quiz’s cited line has no spaces in `innerText` because the gaps are margins. IAST mode still shows slices. Neither blocks a chapter.

Commit only when asked, or when a finished chapter is ready and publishing it was already authorized. Message: `Add Bhagavad Gītā chapter N from the 1910 print, word by word.` The identity warning (committer name taken from the hostname) is expected. Do not amend, do not change git config, do not force-push, do not skip hooks.

```
git push origin main
npm run build && npx --yes gh-pages -d dist
```

GitHub Pages is the `gh-pages` branch. The live URL can take a minute after it prints `Published`.

## Conventions that keep biting

- Letters and spelling follow the print, including anusvāra against a class nasal, a printed avagraha against its absence, and a doubled conjunct in the slice when the line doubles it. The pada is the word Śaṅkara glosses, so a doubled छ in the slice can sit on a pada that has one, as in 7.1 `शृणु` / slice `छृणु`.
- A compound is one row. Members are hyphenated only in `pada`.
- IAST is never typed. `python3 scripts/ddv-iast.py to-iast '…'` makes a heading.
- Leave out `ca`, `na`, `eva`, `api`, `tu`, `hi`, and a vocative. `atha` and `tathā` have no link. A predicate whose subject is the unstated “you” has no link.
- One link when one word answers several others. Name the rest in the note. The quiz asks one question per word.
- Verb class outside class 1 is named: ad (2), hu (3), div (4), su (5), tud (6), tan (8), krī (9). `śrad` in `śraddhā` is not a prefix.
- If the compound type is open but the case is clear, leave `compound` blank and stay obvious.
