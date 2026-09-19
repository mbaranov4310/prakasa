# Encode Dṛg-dṛśya-viveka

Work in `/Users/max/Desktop/projects/prakasa`.

## Current phase — Phase 2 complete (A–C locked)

Saṃhitā is locked Param for classes A–C (explicit nasals, visarga/spaces, avagraha). Letter-level locks in `docs/ddv/flags.md`. Phase 2 padas follow Nikh padaccheda with join slices; checker PASS on all 46. Next human gates: crop skim of remaining verses, pada-split disagreements, meaning audit. Re-lift: `python3 scripts/lift-ddv.py`.

- Agent brief: `docs/ddv/STAGE1.md`
- Queue: `docs/ddv/QUEUE.md`
- Flags: `docs/ddv/flags.md`
- Dump: `docs/ddv/decode/out/`
- Crops (gitignored): `python3 scripts/ddv-crop-verses.py` → `docs/ddv/decode/crops/`

PDFs (gitignored):

- `data/DrgDrsyaViveka.pdf` — Paramarthananda, Arsha Avinash (IAST extractable)
- `data/drgdrisyaviveka.pdf` — Nikhilananda 1931 scan (visual Devanagari + padaccheda)

Do not commit the PDFs. Do not put class transcripts or Nikhilananda notes on the site.

---

## Why this pipeline

Param Devanagari is CID garbage if you copy-paste. Nikh is an image. The only trustworthy *digital* letter channel is Param IAST. Devanagari is derived from that, then checked against both PDFs’ glyphs.

```
Param IAST dump  →  IAST→Dev  →  docs/ddv/text/ddv-NN.md
                         ↑
              crops + flags.md  (Param vs Nikh)
```

Checker: `python3 scripts/check-ddv-text.py docs/ddv/text`

Phase 1: `to_dev(samhita_iast) == samhita`.
Phase 2: slice join == saṃhitā (Nikh padaccheda; Param letters).
Phase 4: `python3 scripts/lift-ddv.py` → `src/content/ddv/` + `library.ts`.

---

## What a chapter is

One śloka. Library book `drg-drsya-viveka`, chapters `ddv-01` … `ddv-46`. Skip the Nikh maṅgala `ॐ परमात्मने नमः`.

Display = saṃhitā (what you chant). Click gloss / glossary term = pada form.

---

## Re-run dump

Do not run `ddv-write-text.py` after padas exist — it rewrites Stage-1 skeletons and wipes tables. Dump/crop scripts are safe.

```
python3 scripts/ddv-extract-param-iast.py
python3 scripts/ddv-crop-verses.py
python3 scripts/check-ddv-text.py docs/ddv/text
```

IAST: `python3 scripts/ddv-iast.py to-dev 'rūpaṃ'` / `to-iast 'रूपं'`.

---

## Scripts

```
python3 scripts/check-ddv-text.py docs/ddv/text
python3 scripts/ddv-fill-stage2.py          # verses 1–6 (Nikh-style joins)
python3 scripts/ddv-nikh-padas.py apply     # verses 7–46 (Nikh padaccheda)
python3 scripts/lift-ddv.py
```
