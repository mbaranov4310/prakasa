# Encode Rudra namakam / camakam

Work in `/Users/max/Desktop/projects/prakasa`.

## Current phase — empty-gloss review on the site

Glyph decode rewind: `1d02141`. Stage 1 files: `docs/rudra/text/` (checker PASS). Lift: `python3 scripts/lift-rudra-stage2.py` → `src/content/rudra/` with **empty glosses**.

**This phase:** human reads the recitation on https://mbaranov4310.github.io/prakasa/ before translations. No meanings yet.

Agent brief: `docs/rudra/STAGE1.md`. Queue: `docs/rudra/QUEUE.md`. Dump slices: `docs/rudra/decode/slices/`. Eye-copy is **not** a source: `docs/rudra/archive-eye-copy/`.

---

## Why two stages (later)

The PDF is the ground truth, but it is a Baraha-font visual document (`pdftotext` is garbage). Prakāśa TypeScript is a nested span tree — hard to diff against a page.

So we stop in the middle, at a **clean text file** that is easy to read, count, and check. Only after that file matches the PDF do we lift it into Prakāśa.

```
PDF (visual)  →  docs/rudra/text/<id>.md  →  check  →  src/content/rudra/<id>.ts
                     ↑                         ↑
              Stage 1 (this is the          mechanical:
              fidelity gate)                join slices == saṃhitā
                                            padam count == table
```

Do **not** auto-encode from the PDF. Do **not** skip the text file and type TypeScript from the page. The text file is what we check. The TypeScript is a lift of a file that already matched.

---

## Book

Library id: `rudra-namakam-chamakam`

| | Namakam | Camakam |
| --- | --- | --- |
| PDF | `data/TS 4.5 Sanskrit Pada Paatam with Vaakyam.pdf` | `data/TS 4.7 Sanskrit Pada Paatam with Vaakyam.pdf` |
| TS | 4.5 (11 anuvākas) | 4.7 **anuvākas 1–11 only** |
| Chapters | `namakam-01` … `namakam-11` | `chamakam-01` … `chamakam-11` |
| Content dir | `src/content/rudra/` | same |

TS 4.7 continues through anuvāka 15 in the PDF. **Omit 12–15.** They are not the pūjā recitation.

Svaras (॑ ॒ and friends): **strip them.** Keep letters, *avagraha* ऽ, and Vedic *anusvāra* ꣳ.

---

## What a chapter is

One anuvāka. Inside it, pañcatis (`TS 4.5.1.1`, `TS 4.5.1.2`, …).

Two layers of the same text:

1. **Saṃhitā / vākya** — the heading `TS 4.x.A.P` with **no** `- Padam`. This is the recitation string we display.
2. **Pada-pāṭha** — the heading `TS 4.x.A.P - Padam`. This is how we **break** the recitation into clickable words.

Display syllables follow the saṃhitā. Each `word()` is one **counted padam**. Glossary term (later) is the pada form (`नमः`), not the sandhied surface (`नमस्`). Same idea as Sandhyāvandana `gurubhyo` on screen / `gurubhyaḥ` in the glossary.

### Do not encode

- Compiler maṅgala on p.4 (`ॐ नमः परमात्मने…`)
- `इति` in the padam line — teaching mark, not a word (`उतो इति` → one padam `उतो`)
- Veṣṭana hyphen-splits as extra words (`बाहुभ्यामिति बाहु - भ्याम्` → one padam `बाहुभ्याम्`)
- Korvai / first-last-padam pages at the end of the PDF
- Red ink / highlights — keep the letters, ignore the colour
- English meanings, phrase translations, verse translations — **empty string** `""` until a later pass
- Any other printed Rudram (Sacred Texts, Wikipedia, a stotra booklet). If it disagrees with this PDF, the PDF wins.

---

## Stage 1 — text file

Snag the first `[ ]` row in `docs/rudra/QUEUE.md` → `[~]`. Write only:

- `docs/rudra/text/<id>.md`
- that one queue line

Copy the skeleton from `docs/rudra/text/_TEMPLATE.md`.

Open the PDF **as pages**, not as extracted text. Transcribe by eye.

### File shape

One file per anuvāka. One `## TS …` section per pañcati. Three fenced blocks per pañcati:

````markdown
## 4.5.1.1

```samhita
<Devanagari saṃhitā, no svaras, line breaks as on the page>
```

```samhita_iast
<IAST of that saṃhitā, ASCII danda | and ||>
```

```padas
pada_dev	pada_iast	slice_dev	slice_iast	after
नमः	namaḥ	नमस्	namas	join
ते	te	ते	te	space
```
````

Five tab-separated columns, header row required:

| Column | What |
| --- | --- |
| `pada_dev` | Pada-pāṭha form, visarga and endings intact, no `इति` |
| `pada_iast` | IAST of that pada |
| `slice_dev` | The letters this pada contributes to the saṃhitā (no trailing space, no danda) |
| `slice_iast` | IAST of that slice |
| `after` | How to rejoin: `join` / `space` / `danda` / `ddanda` |

Rejoin rules (this is the check):

- `join` → slice only (sandhi with the next pada)
- `space` → slice + one space
- `danda` → slice + ` ।` + newline  (IAST: slice + ` \|` + newline)
- `ddanda` → slice + ` ॥` + newline (IAST: slice + ` \|\|` + newline)

`concat(slice_dev + suffix(after))` must equal the `samhita` block. Same for IAST.

### Format example (first half-verse of namakam 1 — **re-read the PDF anyway**)

Saṃhitā: `नमस्ते रुद्र मन्यव उतो त इषवे नमः ।`

| pada | slice | after | why |
| --- | --- | --- | --- |
| नमः | नमस् | join | visarga → स् before ते |
| ते | ते | space | |
| रुद्र | रुद्र | space | |
| मन्यवे | मन्यव | space | ए + उ → अ + उ |
| उतो | उतो | space | pragraha; drop `इति` |
| ते | त | space | ते + इषवे → त इषवे |
| इषवे | इषवे | space | |
| नमः | नमः | danda | |

IAST: standard Prakāśa IAST (`oṃ` `ḥ` `ṇ` `ṛ` `ś` `ṣ` `ā`). No accent marks.

### Padam counts (checksums)

From the last page of each PDF. Camakam totals below are anuvākas **1–11 only** (not the PDF’s 2008, which includes 12–15).

**Namakam (TS 4.5)** — 1234 padams

| Anuvāka | Pages (approx.) | Pañcatis | Padams |
| --- | --- | --- | --- |
| 1 | 4–9 | 4 | 222 |
| 2 | 10–11 | 2 | 79 |
| 3 | 12–14 | 2 | 103 |
| 4 | 15–17 | 2 | 102 |
| 5 | 18–19 | 2 | 75 |
| 6 | 19–21 | 2 | 75 |
| 7 | 21–22 | 2 | 80 |
| 8 | 23–24 | 2 | 80 |
| 9 | 25–26 | 2 | 83 |
| 10 | 27–31 | 5 | 229 |
| 11 | 32–34 | 2 | 106 |

**Camakam (TS 4.7.1–11)** — 1092 padams

| Anuvāka | Pages (approx.) | Pañcatis | Padams |
| --- | --- | --- | --- |
| 1 | 4–6 | 2 | 118 |
| 2 | 6–8 | 2 | 114 |
| 3 | 8–9 | 2 | 108 |
| 4 | 10–11 | 2 | 114 |
| 5 | 12–13 | 2 | 98 |
| 6 | 13–14 | 2 | 121 |
| 7 | 15–16 | 2 | 84 |
| 8 | 17 | 1 | 66 |
| 9 | 18 | 1 | 68 |
| 10 | 19–20 | 2 | 90 |
| 11 | 21–23 | 2 | 111 |

Page numbers are a hint. Trust the `TS 4.x.A.P` headings.

---

## Stage 1 check — reconciliation

The failure mode is checking the file you just wrote against itself. Do not do that.

After the text file is saved:

1. Put that file out of mind. Re-open **only** this anuvāka’s PDF pages.
2. From the PDF, write two strings into the chat (by eye, not from the `.md`):
   - **SAṂHITĀ-FROM-PDF** — every `TS 4.x.A.P` vākya block in order, svaras stripped, `[ ] n` pañcati markers dropped, dandas kept
   - **PADA-LIST-FROM-PDF** — every `- Padam` block, one padam per `।` unit, `इति` dropped, hyphen analysis dropped
3. Run the checker:

```bash
python3 scripts/check-rudra-text.py docs/rudra/text/<id>.md
```

It reprints the reconstructed saṃhitā and the pada list, and exits non-zero on mismatch (join ≠ `samhita` block, or row count ≠ expected padams).

4. Compare:
   - checker saṃhitā **==** SAṂHITĀ-FROM-PDF
   - checker pada list **==** PADA-LIST-FROM-PDF
   - padam count **==** table

If anything differs, **fix the text file**, do not explain the difference away. Then run the checker again.

Paste this review block (not a dump of the whole file):

```
## Stage 1 review — <id>

Expected padams: N
Checker padams: N
Count: MATCH / MISMATCH

Saṃhitā vs PDF: MATCH / MISMATCH
Pada list vs PDF: MATCH / MISMATCH

Uncertainties:
- (ambiguous line break, unclear slice, …) or none
```

Stop. Do not encode. Mark the queue `[x]` only when the checker is green **and** the PDF strings match. The human audits the text file next.

---

## Stage 2 — lift into Prakāśa (after the human has audited the text file)

Only then, and usually in a **new chat**.

Read `docs/rudra/text/<id>.md`. Match `src/lib/span.ts` (`word`, `group`). A ready shallow chapter to copy mechanically: `src/content/guru-namaskara.ts`.

- One `word()` per padas row. `meaning: ""`.
- Syllable pairs: recitable akṣaras of **`slice_dev` / `slice_iast`**, not etymological fragments. Overlay is still used even with empty glosses.
- `trailing` / `lineBreakAfter` from `after`:
  - `join` → `{ trailing: "" }`
  - `space` → default space
  - `danda` → `{ trailing: " ।", lineBreakAfter: true }`
  - `ddanda` → `{ trailing: " ॥", lineBreakAfter: true }`
- Group pañcatis as `sentence` with `meaning: ""`. Group the whole anuvāka as `verse` with `meaning: ""`. Optional: group each danda-unit as `phrase` with `meaning: ""` so translations have a hook later.
- `chapter.translation`: omit or `""`.
- `chapter.glossary`: omit for now (empty glosses on the words are enough).
- Wire in `src/content/library.ts`: replace the matching `comingSoon(...)`.
- Touch only: that chapter module, `library.ts`, `docs/rudra/QUEUE.md` if you mark encode-done there. No drive-by refactors.

After encoding, dump the chapter’s leaves (`dev + trailing`) and confirm they still equal the text file’s saṃhitā. If not, the lift is wrong — fix the TypeScript. Do not “improve” the recitation.

Do not commit, push, or publish until the human asks.

When they ask to publish, same path as `docs/ENCODE_CHAPTER.md` (never `data/*.pdf`).

---

## Agent prompt (Stage 1)

Do **not** snag the first `[ ]` row. The parent assigns one `id`. Follow `docs/rudra/STAGE1.md`.
