# Flags — Param vs Nikhilananda (saṃhitā only)

The 46 files in `docs/ddv/text/` follow **Channel A: Paramarthananda IAST → Devanagari**. Classes A–C and the letter-level rows below are **locked**. Phase 2 padas use Nikh padaccheda; join still equals the locked Param saṃhitā.

Crops: `python3 scripts/ddv-crop-verses.py` (gitignored). Nikh Devanagari is sometimes on `nikh-NN-prev.png`, not `nikh-NN.png`.

**LOCK: Param** for classes A–C (explicit nasals, visarga/spaces, avagraha). Same Prakāśa convention as Rudra.

**LOCK:** verse 4 Param `भासयत्येकधा`. Verse 5 Param `वृद्धिं`. Verse 10 keep supplied `॥`. Verse 22 Nikh/sandhi `कुर्याद्धृदये` (plan: drop transcript hyphen; recitation is द्ध).

---

## Default in the candidate files

Param letters, including:

- `ङ्` `न्` `म्` written out (`अहङ्कार`, `सम्बन्ध`, `मानसम्`) where Nikh often prints anusvāra (`अहंकार`, `संबंध`, `मानसं`)
- Avagraha `ऽ` where Param IAST has `'`
- Spaces where Param IAST has spaces; visarga kept before a following `s`/`ś`

Nikh’s padaccheda line is **not** a saṃhitā source. It is the Phase 2 pada layer.

---

## Class A — anusvāra vs class nasal (systematic)

Nikh almost always prints `ं` for Param `ङ्`/`न्`/`म्` in the same word.

Examples already checked:

| verse | Param (in `ddv-NN.md`) | Nikh |
| --- | --- | --- |
| 1 | `मानसम्` | `मानसं` |
| 3, 4 | `सङ्कल्प` | `संकल्प` |
| 6–12, 10 | `अहङ्कार` `अन्तः` `लिङ्ग` | `अहंकार` `अंतः` `लिंग` |
| 14, 21 | `सच्चिदानन्द` | `सच्चिदानंद` |

**LOCK: Param** — explicit class nasals (`ङ्` `न्` `म्`), same Prakāśa convention as Rudra.

---

## Class B — visarga / space vs printed sandhi (systematic)

Nikh often writes the couplet as one sandhied stream (`ः` + `स` → `स्स`, no word spaces). Param IAST prints words and visargas.

| verse | Param | Nikh |
| --- | --- | --- |
| 1 | `दृश्या धीवृत्तयः साक्षी` | `दृश्याधीवृत्तयस्साक्षी` |
| 9 | `सम्बन्धिनोः सतोर्नास्ति निवृत्तिः सहजस्य` | `संबंधिनोस्सतोर्नास्ति निवृत्तिस्सहजस्य` |
| 10 | `विकासार्धः स्वप्नः सर्वस्तु` | `विकासार्धस्स्वप्नस्सर्वस्तु` |
| 21 | `अभिन्नाः सच्चिदानन्दाः` | `अभिन्नास्सच्चिदानंदाः` |

**LOCK: Param** — keep printed spaces and visarga in the saṃhitā. Phase 2 slices rejoin with `join` where sandhi needs it. The Nikh sandhi stream (`स्स`, no spaces) is the loser.

---

## Class C — avagraha printed or not

| verse | Param | Nikh |
| --- | --- | --- |
| 4 | `श्रद्धाऽश्रद्धे` | `श्रद्धाश्रद्धे` |
| 6 | `चिच्छायाऽऽवेशतो` | `चिच्छायावेशतो` |
| 7 | `छायाऽहङ्कारयोः` | `छायाहंकारयोः` |

**LOCK: Param** — keep printed avagraha `ऽ` from the IAST dump.

---

## Letter-level (not just printing)

Locked with classes A–C except where noted.

### 4 — `भासयत्येकधा` vs `भासयेत्येकधा`

- Param IAST and Param Devanagari crop: `bhāsayatyekadhā` / `भासयत्येकधा` (भासयति + एकधा)
- Nikh verse and padaccheda: `भासयेत्` → `भासयेत्येकधा`

Different verb form, not a glyph. **LOCK: Param** `भासयत्येकधा`.

### 5 — `वृद्धिं` vs `वृद्धि`

- Param: `na vṛddhiṃ yāti` / `न वृद्धिं याति`
- Nikh crop looks like `न वृद्धि याति` (bindu easy to miss on a 1931 plate)

**LOCK: Param** `वृद्धिं`.

### 10 — closing danda

- Param IAST/Devanagari omit `॥` on pāda 2
- File supplies `॥` (every other verse has it; Nikh has `॥ १० ॥`)

**LOCK: supplied `॥`.**

### 22 — `कुर्याद्-हृदये` vs `कुर्याद्धृदये`

- Param (both scripts): hyphen `कुर्याद्-हृदये`
- Nikh: sandhi `कुर्याद्धृदये` (द् + ध)

Hyphen is a transcript/print aid. Recitation is Nikh’s `कुर्याद्धृदये`. **LOCK: Nikh/sandhi** — file has `कुर्याद्धृदये` (no hyphen).

---

## Phase 2 — pada splits

Verses **1–6** and **7–46** use Nikhilananda padaccheda as the pada column, then split dvandvas and transparent compounds so each stem has its own gloss (`नील` `पीत` `स्थूल` …, `सत्` `चित्` `आनन्द`). Join slices still equal the locked Param saṃhitā. Virama + independent vowel does not NFC-compose (`दृग्`+`एव` ≠ `दृगेव`; `चिद्`+`आनन्द` ≠ `चिदानन्द`), so those bake the vowel into the previous slice.

Keep as one word: technical terms (`अहङ्कार`, `अन्तःकरण`, `साक्षी`, `समाधि`, `व्यावहारिक`, `प्रातिभासिक`, `पारमार्थिक`) and sandhi chunks that cannot split cleanly (`लिङ्गादि`, `त्वगादौ`, `जलोर्वीषु`).

Flag, don’t merge:

| verse | finer split | chosen |
| --- | --- | --- |
| 1 | `दृक्`+`एव` | `दृगेव` (one slice) |
| 2 | `लोचनम्`+`एकधा` | join into `लोचनमेकधा` surface |
| 17, 33 | `जीवत्वम्`+`आरोपात्` | bake `आ` into previous slice (`जीवत्वमा`+`रोपात्`) |
| 18 | `भेदम्`+`आवृत्य` | `भेदमा`+`वृत्य` |
| 22 | `कुर्याद्`+`हृदये` | `कुर्याद्धृदये` |
| 37 | `अनादिकालम्`+`आरभ्य` | `अनादिकालमा`+`रभ्य` |

---

## Visual pass coverage

Eye-read against Nikh Devanagari (not just the translation page): verses **1–12, 14, 20–22, 30**. Other verses: Param dump + checker only; Class A–C almost certainly continue. The lock is you skimming the remaining crops, not a second agent typing.

Verse 31 Nikh crop in this dump is the translation page; Sanskrit is on the previous PNG.

---

## How to mark a decision

Under each letter-level row (and once for classes A–C), write `LOCK: Param` / `LOCK: Nikh` / `LOCK: …`. Then edit the matching `docs/ddv/text/ddv-NN.md` if you leave Param, or say so and an agent will apply Nikh. Re-run the checker after any edit.
