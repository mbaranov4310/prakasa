# Encode a chapter

Work in `/Users/max/Desktop/projects/prakasa`.

This is the living process for turning a recitation into Prakāśa content. Sandhyāvandana is done (inventory below). The same loop continues for the next collection.

---

## The loop

Word-by-word and phrase-by-phrase, by hand. Traditional commentaries first when they exist (for the Vedic chapters: Sāyaṇa, Bhaṭṭabhāskara, pada-pāṭha). The agent searches, proposes readings and glosses, and lists uncertainties. The human reviews that research and corrects it. Then encode.

Do not dump a finished TypeScript file and call it done. The review happens on the *meanings* before they are wired in.

**One chapter per chat** unless the human says otherwise.

---

## What changed after the first pass

Early Sandhyāvandana chapters were transcribed from two local PDFs (`data/sandhya_content.pdf` for the book’s recitation and English, `data/nice_formating.pdf` for syllable stacking). That first pass copied the book’s translations verbatim.

The second pass is what the site actually reflects: every ready chapter was re-glossed at word and phrase level from traditional bhāṣyas and pada-pāṭha, with the book kept only as the recitation wording (Taittirīya forms, *Ogm suvah*, and so on). Do not revert to “copy the PDF English.” The PDFs are not published and are not the gloss source of truth.

---

## Next collection: Rudra namakam / camakam

Taittirīya Saṃhitā 4.5 and 4.7 (camakam anuvākas 1–11 only). Library book `rudra-namakam-chamakam`. This is information transfer from the VedaVMS PDFs in `data/`, not a hunt.

**Do not start from this file.** Follow `docs/rudra/ENCODE.md`: Stage 1 is a checkable text file (`docs/rudra/text/`), Stage 2 lifts into Prakāśa after the human audits. Empty glosses for now. No svaras.

## Previous collection: devatā namaskāra

Short one-śloka greetings. Library book `devata-namaskara`. Packages live in `docs/devata-stuti/findings/`. Finding workflow: `docs/devata-stuti/WORKFLOW.md`.

---

## Hard rules (still)

1. Encode **meanings of the recitation only**. Omit ritual stage directions (sip water, touch limbs, hold the nose, and so on).
2. Skip saṅkalpa and personal-name / gotra / pravara formulas. Leave those coming soon.
3. One library card per unique recitation. Do not add another card when a later chapter only repeats an earlier mantra. If a chapter mixes a repeat with new recitation, encode only the new part.
4. Split sandhi and compounds when pada-pāṭha or the commentary treats the pieces as separate words. Do not split only because a dictionary could.
5. Sacred recitation: fidelity over cleverness. Fix OCR and encoding garbage; do not “improve” the mantra to a textbook edition the human did not choose.
6. Do not invent remaining gaps. Empty gloss on a particle is better than a guess. Prefer a listed uncertainty.
7. Touch only that chapter’s content module, `src/content/library.ts`, and this file if the inventory needs a status change. No drive-by refactors.

---

## How to encode

Read a ready file first and match the span tree:

- `src/content/guru-namaskara.ts` (shallow)
- `src/content/sarira-suddhi.ts` (word → phrase → sentence → verse)
- `src/content/bhutocchatanam.ts`

Use `word()` and `group()` from `src/lib/span.ts`.

- **word:** Devanagari + IAST syllables as pairs, glossary meaning on the leaf.
- **group:** `phrase` / `sentence` / `verse` with the agreed English for that span.
- `trailing` for `।` `॥` `!` ; `lineBreakAfter: true` at recitation line breaks.
- `source: "curated"` (already set by the helpers).
- Syllable pairs should be recitable, not etymological fragments.

Wire it in `src/content/library.ts` in book order. Replace a `comingSoon(...)` placeholder when one exists.

---

## When you finish (review block)

Paste a review block, not a dump of the TypeScript:

1. **Devanagari** — all leaf `dev` strings joined in reading order, with dandas.
2. **IAST** — all leaf `iast` strings joined.
3. **Glossary** — every encoded word gloss. Flag empties and any reading that is a proposal, not a commentary citation.
4. **Translation** — the `chapter.translation` string.
5. **Uncertainties** — recension choices, commentary silence, splits you are unsure of. Prefer a listed uncertainty over guessing.
6. **Sources used** — which recension, which bhāṣya or other commentary, what you searched.

Do not commit, push, or publish until the human has reviewed the proposals. When they ask to publish:

Do **not** commit `data/*.pdf` (gitignored, personal details). Do not commit `node_modules` or `dist`.

```bash
git add src/content src/content/library.ts docs/ENCODE_CHAPTER.md
git status
git commit -m "$(cat <<'EOF'
Gloss <title> word by word.

EOF
)"
git push origin main
npm run build
npx --yes gh-pages -d dist
```

Name the chapter in the commit message. GitHub Pages is the `gh-pages` branch of `mbaranov4310/prakasa` (not GitHub Actions). Live site: https://mbaranov4310.github.io/prakasa/

Then stop. Start a **new chat** for the next chapter.

---

## Sandhyāvandana inventory

Status is the website (`src/content/library.ts`), not the old PDF table of contents.

| Ch | Title | Status |
| --- | --- | --- |
| 1a | ॐ श्री गुरुभ्यो नमः | ready (`guru-namaskara`) |
| 1b | शरीर-शुद्धिः | ready (`sarira-suddhi`) |
| 2 | आचमनम् | ready (`acamana`) |
| 3 | भूतोच्छाटनम् | ready (`bhutocchatanam`) |
| 4 | प्राणायामः | ready (`pranayama`) |
| 5 | संकल्पः | skipped (coming soon; personal formula) |
| 6 | मार्जनः | ready (`marjana`) |
| 7 | प्रातः काल मन्त्राचमनः | ready (`pratah-mantracamana`) |
| 8 | द्वितीय मार्जनः | ready (`dvitiya-marjana`) |
| 9 | पुनः मार्जनः | ready (`punah-marjana`) |
| 10 | अघमर्षण मन्त्रः | ready (`aghamarsana`) |
| 11 | सूर्योपस्थानम् | ready (`suryopasthana`; no second prāṇāyāma card) |
| 12 | सन्ध्याङ्ग तर्पणम् | ready (`sandhyanga-tarpana`; no second ācamana card) |
| 13 | गायत्री आवाहनम् | ready (`gayatri-avahanam`) |
| 14 | गायत्री-आवाहन-न्यासः | ready (`gayatri-avahana-nyasa`) |
| 15 | आचमनम् | skip (repeat of Ch 2) |
| 16 | गायत्री जप संकल्पः | skipped (saṅkalpa; coming soon) |
| 17 | करन्यासः एवं अङ्गन्यासः | ready (`karanyasa`) |
| 18 | ध्यानम् | ready (`dhyanam`) |
| 19 | मुद्रा प्रदर्शनम् | ready (`mudra-pradarsanam`) |
| 20 | गायत्री मन्त्रः | dropped (duplicate card; japa is the same recitation) |
| 21 | अष्ट-मुद्रा प्रदर्शनम् | encoded in `asta-mudra.ts`, parked coming soon in the library |
| 22 | मित्र सूक्तम् | ready (`mitra-sukta`; no second ācamana card) |
| 23 | दिग्देवता नमस्कारः | ready (`digdevata-namaskara`) |
| 24 | मुनि नमस्कारः, सन्ध्यादेवता नमस्कारः | ready (`muni-namaskara`) |
| 25 | प्रणामः | ready (`pranama`) |
| 26 | गायत्री उद्वासनम् | ready (`gayatri-udvasanam`) |
| 27 | भगवन्नमस्कारः | ready (`bhagavan-namaskara`) |
| 28 | भूम्याकाशाभिवन्दनम् | ready (`bhumy-akasa-abhivandanam`) |
| 29 | अभिवादः | skipped (coming soon; personal name / pravara) |
| 30 | ईश्वरार्पणम् | ready (`isvararpanam`) |
