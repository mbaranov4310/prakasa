# Stage 1 agent brief — one Dṛg-dṛśya-viveka verse

Work in `/Users/max/Desktop/projects/prakasa`. **You own exactly the ids in your task.** Do not encode TypeScript. Do not add meanings. Do not “fix” a flag by merging recensions.

Parent: `docs/ddv/ENCODE.md`. Checker: `python3 scripts/check-ddv-text.py docs/ddv/text/ddv-NN.md`.

## Goal

`docs/ddv/text/ddv-NN.md` so that:

1. The checker prints **PASS** (IAST→Dev == saṃhitā).
2. The saṃhitā matches the **locked** recitation (Param dump unless `flags.md` says otherwise).

Then stop. Do not edit `QUEUE.md`.

## Sources (priority)

1. **Param IAST dump:** `docs/ddv/decode/out/param-iast.txt` (raw: `param-iast-raw.txt`)
2. **Crops:** `docs/ddv/decode/crops/param-NN.png` and `nikh-NN.png` (regenerate: `python3 scripts/ddv-crop-verses.py`). Nikh Sanskrit is sometimes on `nikh-NN-prev.png`.
3. **IAST table:** `python3 scripts/ddv-iast.py`
4. **Not a source:** Wikipedia, Gita Press reprints, an LLM typing from memory.

## File shape

Copy `docs/ddv/text/_TEMPLATE.md`. Keep fence names.

## When you finish

```
## Stage 1 review — ddv-NN

Checker: PASS / FAIL
Saṃhitā vs Param crop: MATCH / MISMATCH
Saṃhitā vs Nikh crop: MATCH / MISMATCH / sandhi-only

Uncertainties:
- … or none
```
