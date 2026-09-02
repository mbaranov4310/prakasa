# Stage 1 agent brief — one Rudra anuvāka

Work in `/Users/max/Desktop/projects/prakasa`. **You own exactly one anuvāka** (the id in your task). Do not touch other chapters. Do not encode TypeScript. Do not add meanings.

Parent plan: `docs/rudra/ENCODE.md`. Checker: `python3 scripts/check-rudra-text.py docs/rudra/text/<id>.md`.

## Goal

Write `docs/rudra/text/<id>.md` so that:

1. `python3 scripts/check-rudra-text.py docs/rudra/text/<id>.md` prints **PASS** (slice join == saṃhitā, padam count == `expected_padams`).
2. The saṃhitā and pada list match **this PDF’s** recitation, not Wikipedia / Sacred Texts / a stotra booklet.

Then **do not edit** `docs/rudra/QUEUE.md`. The parent marks your row. Stop.

## Sources (priority)

1. **Literal dump (primary letters):**
   - Your slice: `docs/rudra/decode/slices/<id>.txt` (regenerate with `python3 scripts/rudra-dump-slice.py <id> --write`)
   - Full books: `docs/rudra/decode/out/namakam.txt` / `camakam.txt`
   Headings look like `TS 4.5.1.1` (saṃhitā / vākya) and `TS 4.5.1.1 - Padam` or `TS 4.5.1.1- Padam`.
2. **PDF (layout / unclear dump):** gitignored
   - `data/TS 4.5 Sanskrit Pada Paatam with Vaakyam.pdf`
   - `data/TS 4.7 Sanskrit Pada Paatam with Vaakyam.pdf`
3. **IAST:** `python3 scripts/rudra-iast.py 'देवनागरी'` (stdin or args). Prakāśa IAST: `oṃ` `ḥ` `ṇ` `ṛ` `ś` `ṣ` `ā`; avagraha `ऽ` → `'`; Vedic `ꣳ` → `ṃ`.
4. **Eye-copy is not a source.** `docs/rudra/archive-eye-copy/text/<id>.md` is a draft of slices from before the dump. You may copy it to `docs/rudra/text/<id>.md` as a starting table, then **reconcile every line against the dump/PDF**. If they disagree, the dump/PDF wins. Do not keep an eye-copy padam that the Padam paragraph does not show.

## Strip / omit

- **Svaras:** delete `॑` `॒` and friends. Keep letters, `ऽ`, `ꣳ`.
- **Maṅgala / headers / URLs / page numbers / `[ ] n` pañcati counters / korvai** at the end of the PDF.
- **`इति` in the padam line** is a teaching mark, not a word (`उतो इति` → one padam `उतो`).
- **Veṣṭana hyphen-splits** are not extra words (`बाहुभ्यामिति बाहु - भ्याम्` → one padam `बाहुभ्याम्`).
- **Camakam 12–15:** out of scope (not this id).
- **Meanings:** none.
- Dump **compose slips** (stray `्`, doubled virama, `ि` in the wrong place): fix from the padapāṭha + PDF so the recitation is readable. Do not “improve” to a different printed Rudram.

## File shape

Copy `docs/rudra/text/_TEMPLATE.md`. Keep fence names. One `##` heading per pañcati, **PDF label without `TS `** (`4.5.1.1` not `TS 4.5.1.1`).

````markdown
# <id>

```meta
id: namakam-01
ts: 4.5.1
pdf: TS 4.5 Sanskrit Pada Paatam with Vaakyam.pdf
pages: 4-9
expected_padams: 222
```

## 4.5.1.1

```samhita
<Devanagari saṃhitā, no svaras, line breaks as on the page>
```

```samhita_iast
<IAST of that saṃhitā; ASCII danda | and ||>
```

```padas
pada_dev	pada_iast	slice_dev	slice_iast	after
नमः	namaḥ	नमस्	namas	join
ते	te	ते	te	space
```
````

`padas` is **tab-separated**. `after` is exactly `join` / `space` / `danda` / `ddanda`.

| Column | What |
| --- | --- |
| `pada_dev` | Padapāṭha form, visarga intact, no `इति` |
| `pada_iast` | IAST of that pada |
| `slice_dev` | Letters this pada contributes to the **saṃhitā** (no trailing space, no danda) |
| `slice_iast` | IAST of that slice |
| `after` | How to rejoin |

Rejoin: `join` → slice only; `space` → slice + space; `danda` → slice + ` ।` + newline (IAST ` |` + newline); `ddanda` → slice + ` ॥` + newline (IAST ` ||` + newline).

`concat(slice_dev + suffix(after))` must equal the `samhita` block. Same for IAST.

## Queue

You were assigned this id. The draft is already at `docs/rudra/text/<id>.md` (copied from eye-copy; the checker already PASSes as a self-join). Your job is dump/PDF reconciliation, not snagging a row. **Do not edit** `docs/rudra/QUEUE.md`.

## When you finish

Paste this review block and the checker PASS lines. Do not commit, push, or encode TypeScript.

```
## Stage 1 review — <id>

Expected padams: N
Checker padams: N
Count: MATCH / MISMATCH

Saṃhitā vs dump/PDF: MATCH / MISMATCH
Pada list vs dump/PDF: MATCH / MISMATCH

Uncertainties:
- (ambiguous line break, unclear slice, compose slip you fixed, …) or none
```
