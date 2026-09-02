# Directions — Padam audit (pass A)

Work in `/Users/max/Desktop/projects/prakasa`.

You are **not** encoding Prakāśa. You are **not** checking slices or saṃhitā. You are **not** writing IAST.

A previous pass built `docs/rudra/text/<id>.md` by aligning padam, saṃhitā, and slices in one table. The join-checker only proves that table is self-consistent. It cannot see a padam that was *rewritten* (example below). This pass copies the Padam paragraph from the PDF, as letters, and diffs it against that file’s `pada_dev` column.

**One anuvāka. You are told which `id` in the agent prompt. Do not snag another.**

---

## Why this pass exists

PDF (camakam 1, page 5, `TS 4.7.1.1 - Padam`):

```
द्युम्नैः । वाजेभिः । एति । गतम् ॥
```

The Stage 1 file had `आ` in that slot. Join still passed, because `आ` and `एति` contribute the same saṃhitā letters (`वाजेभिरा`). The padam on the page is **एति**. Do not unwrap it. Do not “drop iti” as a blanket rule. Copy the symbols.

---

## Files

| What | Path |
| --- | --- |
| These directions | `docs/rudra/directions.md` |
| Stage 1 file (read only) | `docs/rudra/text/<id>.md` |
| Your dump (write this) | `docs/rudra/pada/<id>.txt` |
| Namakam PDF | `data/TS 4.5 Sanskrit Pada Paatam with Vaakyam.pdf` |
| Camakam PDF | `data/TS 4.7 Sanskrit Pada Paatam with Vaakyam.pdf` |

**Do not edit** `docs/rudra/text/<id>.md`, `QUEUE.md`, TypeScript, or anyone else’s dump.

Camakam: anuvākas **1–11 only**. Stop before `TS 4.7.12`.

---

## How to read the PDF

The Devanagari is a Baraha font. **`pdftotext` is garbage.** Open **page images**.

```bash
mkdir -p /tmp/rudra-audit-<id>
python3 << 'PY'
import fitz  # pymupdf; if ImportError: PYTHONPATH=$HOME/Library/Python/3.9/lib/python/site-packages
from pathlib import Path
pdf = Path("…the pdf for your id…")
out = Path("/tmp/rudra-audit-<id>")
doc = fitz.open(pdf)
# 1-indexed page numbers from the table below (widen by 1 if a Padam block spills)
for n in range(FIRST, LAST + 1):
    pix = doc[n - 1].get_pixmap(matrix=fitz.Matrix(2.4, 2.4))
    pix.save(out / f"p{n}.png")
doc.close()
PY
```

Read every PNG. Find headings `TS 4.x.A.P - Padam` (sometimes `TS 4.x.A.P- Padam`). Ignore the vākya blocks that are **not** labelled Padam. Ignore compiler maṅgala, korvai pages, English, `www.vedavms.in`.

---

## What to copy

From each Padam block, in order, every chunk that sits between `।` or `॥`.

One chunk = one line in `docs/rudra/pada/<id>.txt`.

- Devanagari **letters** only. Unicode NFC.
- **Strip svaras** (`॑` `॒` and friends). Keep `ऽ` and `ꣳ`.
- **Do not** translate, unwrap, or tidy:
  - `एति` stays `एति` (not `आ`)
  - a chunk that is only `इति` stays `इति`
  - `बाहुभ्यामिति बाहु - भ्याम्` stays that chunk (do not turn it into `बाहुभ्याम्`)
  - hyphens that are on the page stay in that chunk
- Skip: `[ ] n`, `1 (50)` / `॥ 2` pañcati counts, empty `( )`, section titles, red ink as colour (keep the letters).

File shape — no TSV, no IAST, no commentary:

```
# namakam-01
# ts: 4.5.1
# source: Padam blocks only, svaras stripped
नमः
ते
रुद्र
मन्यवे
उतो
इति
ते
```

(`उतो` / `इति` as two lines if the page has two danda-units. If they are one unit, one line.)

---

## Compare

```bash
python3 scripts/diff-rudra-pada.py docs/rudra/text/<id>.md docs/rudra/pada/<id>.txt
```

That prints the Stage 1 `pada_dev` list next to your dump. Lengths may differ. That is a finding, not a checker bug.

Then look at the **PDF again** (not at your `.txt`) for any mismatch the script listed, and confirm the dump matches the page. If the dump is wrong, fix the dump. Do not “fix” the dump to match Stage 1.

---

## Review block (paste this, not the whole dump)

```
## Padam audit — <id>

PDF pages used:
Dump lines: N
Stage 1 pada_dev rows: M

Diff: MATCH / MISMATCH
First mismatches (up to ~15):
- dump[i] = … | file = …

Kinds of mismatch seen:
- unwrap (एति→आ, etc.)
- dropped isolated इति
- veṣṭana collapsed
- letter/conjunct
- extra/missing chunk
- none

Uncertainties:
- …
```

Stop. Do not start saṃhitā. Do not touch slices.

---

## Page hints (trust `TS … Padam` headings more than these)

**Namakam** — `TS 4.5 …pdf`

| id | TS | pages | Stage 1 rows (for contrast, not a target) |
| --- | --- | --- | --- |
| namakam-01 | 4.5.1 | 4–9 | 222 |
| namakam-02 | 4.5.2 | 10–11 | 79 |
| namakam-03 | 4.5.3 | 12–14 | 103 |
| namakam-04 | 4.5.4 | 15–17 | 102 |
| namakam-05 | 4.5.5 | 18–19 | 75 |
| namakam-06 | 4.5.6 | 19–21 | 75 |
| namakam-07 | 4.5.7 | 21–22 | 80 |
| namakam-08 | 4.5.8 | 23–24 | 80 |
| namakam-09 | 4.5.9 | 25–26 | 83 |
| namakam-10 | 4.5.10 | 27–31 | 229 |
| namakam-11 | 4.5.11 | 32–34 | 106 |

**Camakam** — `TS 4.7 …pdf` (stop at anuvāka 11)

| id | TS | pages | Stage 1 rows |
| --- | --- | --- | --- |
| chamakam-01 | 4.7.1 | 4–6 | 118 |
| chamakam-02 | 4.7.2 | 6–8 | 114 |
| chamakam-03 | 4.7.3 | 8–9 | 108 |
| chamakam-04 | 4.7.4 | 10–11 | 114 |
| chamakam-05 | 4.7.5 | 12–13 | 98 |
| chamakam-06 | 4.7.6 | 13–15 | 121 |
| chamakam-07 | 4.7.7 | 15–16 | 84 |
| chamakam-08 | 4.7.8 | 17–18 | 66 |
| chamakam-09 | 4.7.9 | 18–19 | 68 |
| chamakam-10 | 4.7.10 | 19–21 | 90 |
| chamakam-11 | 4.7.11 | 21–23 | 111 |
