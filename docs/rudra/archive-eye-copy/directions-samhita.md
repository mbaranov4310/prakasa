# Directions — Saṃhitā audit (pass B)

Work in `/Users/max/Desktop/projects/prakasa`.

You are **not** encoding Prakāśa. You are **not** copying Padam. You are **not** writing IAST or slices.

Pass A copied the Padam paragraph. This pass copies the **vākya / saṃhitā** paragraph from the PDF, as letters, and diffs it against that file’s `samhita` fence. Independent of the padam dump and of the padas table.

**One anuvāka. You are told which `id` in the agent prompt. Do not snag another.**

---

## Why this pass exists

Stage 1 fused padam, saṃhitā, and slices in one table. The join-checker only proves that table is self-consistent. A wrong saṃhitā that was partitioned to match itself still PASSes.

This pass starts over from the **vākya** blocks (`TS 4.x.A.P` with **no** `- Padam`). Do not look at `docs/rudra/pada/` while copying. Do not copy from the Stage 1 `samhita` fence.

---

## Files

| What | Path |
| --- | --- |
| These directions | `docs/rudra/directions-samhita.md` |
| Stage 1 file (read only) | `docs/rudra/text/<id>.md` |
| Your dump (write this) | `docs/rudra/samhita/<id>.txt` |
| Namakam PDF | `data/TS 4.5 Sanskrit Pada Paatam with Vaakyam.pdf` |
| Camakam PDF | `data/TS 4.7 Sanskrit Pada Paatam with Vaakyam.pdf` |

**Do not edit** `docs/rudra/text/<id>.md`, `docs/rudra/pada/`, `QUEUE.md`, TypeScript, or anyone else’s dump.

Camakam: anuvākas **1–11 only**. Stop before `TS 4.7.12`.

---

## How to read the PDF

The Devanagari is a Baraha font. **`pdftotext` is garbage.** Open **page images**.

```bash
mkdir -p /tmp/rudra-samhita-<id>
python3 << 'PY'
import fitz  # pymupdf; if ImportError: PYTHONPATH=$HOME/Library/Python/3.9/lib/python/site-packages
from pathlib import Path
pdf = Path("…the pdf for your id…")
out = Path("/tmp/rudra-samhita-<id>")
doc = fitz.open(pdf)
# 1-indexed page numbers from the table below (widen by 1 if a vākya block spills)
for n in range(FIRST, LAST + 1):
    pix = doc[n - 1].get_pixmap(matrix=fitz.Matrix(2.4, 2.4))
    pix.save(out / f"p{n}.png")
doc.close()
PY
```

Read every PNG. Copy only headings `TS 4.x.A.P` that are **not** followed by `- Padam` (sometimes `TS 4.x.A.P- Padam` is the other block — skip those). Ignore Padam blocks entirely. Ignore compiler maṅgala, korvai pages, English, `www.vedavms.in`.

---

## What to copy

From each vākya block, in order, the recitation string.

- Devanagari **letters** only. Unicode NFC.
- **Strip svaras** (`॑` `॒` and friends). Keep `ऽ` and `ꣳ`.
- Keep `।` and `॥`. Keep word spaces as on the page.
- Line breaks: copy as on the page (the diff collapses whitespace, so wrap points are not a target).
- Skip: `[ ] n`, `1 (50)` / `॥ 2` pañcati counts, empty `( )`, section titles, red ink as colour (keep the letters).
- Do **not** unwrap sandhi, drop avagraha, or “fix” visarga. Copy the symbols.

File shape — no TSV, no IAST, no commentary. One `##` heading per pañcati, matching Stage 1 (`4.5.1.1` not `TS 4.5.1.1`):

```
# namakam-01
# ts: 4.5.1
# source: vākya blocks only, svaras stripped

## 4.5.1.1
नमस्ते रुद्र मन्यव उतो त इषवे नमः ।
नमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः ॥

## 4.5.1.2
…
```

---

## Compare

```bash
python3 scripts/diff-rudra-samhita.py docs/rudra/text/<id>.md docs/rudra/samhita/<id>.txt
```

That prints each pañcati’s Stage 1 `samhita` next to your dump (whitespace collapsed). Lengths and letters may differ. That is a finding, not a checker bug.

Then look at the **PDF again** (not at your `.txt`) for any mismatch the script listed, and confirm the dump matches the page. If the dump is wrong, fix the dump. Do not “fix” the dump to match Stage 1.

---

## Review block (paste this, not the whole dump)

```
## Saṃhitā audit — <id>

PDF pages used:
Pañcatis dump / Stage 1: N / M

Diff: MATCH / MISMATCH
First mismatches (up to ~15):
- [heading] dump=… | file = …

Kinds of mismatch seen:
- letter/conjunct
- missing/extra akṣara
- danda
- space-only (ignore unless it changes sandhi)
- missing/extra pañcati
- none

Uncertainties:
- …
```

Stop. Do not start slices. Do not touch padam dumps.

---

## Page hints (trust `TS …` vākya headings more than these)

**Namakam** — `TS 4.5 …pdf`

| id | TS | pages | pañcatis |
| --- | --- | --- | --- |
| namakam-01 | 4.5.1 | 4–9 | 4.5.1.1–4 |
| namakam-02 | 4.5.2 | 10–11 | 4.5.2.1–2 |
| namakam-03 | 4.5.3 | 12–15 | 4.5.3.1–2 |
| namakam-04 | 4.5.4 | 15–17 | 4.5.4.1–2 |
| namakam-05 | 4.5.5 | 18–19 | 4.5.5.1–2 |
| namakam-06 | 4.5.6 | 19–21 | 4.5.6.1–2 |
| namakam-07 | 4.5.7 | 21–22 | 4.5.7.1–2 |
| namakam-08 | 4.5.8 | 23–24 | 4.5.8.1–2 |
| namakam-09 | 4.5.9 | 25–27 | 4.5.9.1–2 |
| namakam-10 | 4.5.10 | 27–32 | 4.5.10.1–5 |
| namakam-11 | 4.5.11 | 32–34 | 4.5.11.1–2 |

**Camakam** — `TS 4.7 …pdf` (stop at anuvāka 11)

| id | TS | pages | pañcatis |
| --- | --- | --- | --- |
| chamakam-01 | 4.7.1 | 4–6 | 4.7.1.1–2 |
| chamakam-02 | 4.7.2 | 6–8 | 4.7.2.1–2 |
| chamakam-03 | 4.7.3 | 8–9 | 4.7.3.1–2 |
| chamakam-04 | 4.7.4 | 10–11 | 4.7.4.1–2 |
| chamakam-05 | 4.7.5 | 12–13 | 4.7.5.1–2 |
| chamakam-06 | 4.7.6 | 13–15 | 4.7.6.1–2 |
| chamakam-07 | 4.7.7 | 15–16 | 4.7.7.1–2 |
| chamakam-08 | 4.7.8 | 17–18 | 4.7.8.1 |
| chamakam-09 | 4.7.9 | 18–19 | 4.7.9.1 |
| chamakam-10 | 4.7.10 | 19–21 | 4.7.10.1–2 |
| chamakam-11 | 4.7.11 | 21–23 | 4.7.11.1–2 |
