# Encode one Sandhyāvandana chapter

Work in `/Users/max/Desktop/projects/prakasa`.

This file is the frozen process for turning one PDF chapter into website content. **One chapter per chat.** Do not encode the rest of the book in the same conversation.

The human reviews on the **live site** after several chapters are up, not between each chapter. When you finish encoding, commit, push, and publish Pages yourself.

---

## Paste this into a new chat

Copy from the next heading through the end of “Publish.” Then add one line: `Do Chapter N — <title>` (for example `Do Chapter 2 — आचमनम्`).

### Task

Encode **one** Sandhyāvandana chapter into Prakāśa’s content format. Follow this file (`docs/ENCODE_CHAPTER.md`) exactly. Sacred recitation text: fidelity over cleverness.

When the chapter is encoded, **commit it, push `main`, and deploy GitHub Pages** so it is on https://mbaranov4310.github.io/prakasa/ without waiting for the human to say “commit.”

### Sources

- **Source of truth:** `data/sandhya_content.pdf` (meanings, glossary, word breaks, the Sanskrit as this book recites it).
- **Display only:** `data/nice_formating.pdf` (syllable stacking for Devanagari + IAST overlay).
- If the two PDFs disagree on wording, sandhi, or translation, **content wins**.

### How to read the PDFs (do not install a PDF library)

The previous encoding chats could read these files with Cursor’s **Read** tool. Do **not** install poppler, `pdftotext`, PyMuPDF, pdfminer, or any other PDF reader.

Use Read on the absolute paths:

- `/Users/max/Desktop/projects/prakasa/data/sandhya_content.pdf`
- `/Users/max/Desktop/projects/prakasa/data/nice_formating.pdf`

That tool already understands PDFs. It returns extracted text with page markers like `-- 4 of 113 --`.

To stay on one chapter, pass `offset` and `limit` so you only pull those pages (see the inventory below). Example: Chapter 2 is pages 4–8 of the content PDF, so start near the `-- 4 of 113 --` marker and stop after `-- 8 of 113 --`.

**The extract is hostile.** Devanagari often comes out wrong (broken conjuncts, `ि`/`व` swaps, smashed visargas). Use it to find the right page and the English translation/glossary, then reconstruct correct Devanagari from:

1. The same Read output’s less-garbled lines
2. `nice_formating.pdf` for that chapter (usually a clean Devanagari page, then an overlay page, then translation)
3. The content PDF’s hyphenated IAST (`ke-śa-vā-ya`), which is more reliable than the mangled Devanagari dump

Do not treat the raw extract as the mantra string you encode. Never “fix” it to a textbook edition; fix only OCR garbage so it matches what the PDF page actually shows.

If Read on the `.pdf` path works, you are done. Shell conversion to images or extra packages is a last resort only if Read returns an error (file not found), not because the Sanskrit looks messy.

### Hard rules

1. Copy translations and glossary **verbatim** from the content PDF. Do not paraphrase, polish, or add scholarship.
2. Do not invent glosses for words the PDF does not gloss. Phrase/sentence/verse meanings may use the PDF’s translation of that span; do not invent a new English sentence.
3. Do not “correct” sandhi or spelling to a textbook form. Recitation forms in this book (for example *Ogm suvah*) stay as written.
4. Do not split a compound unless the content PDF already treats the pieces as separate glossary entries or separate words on the Sanskrit page. (`भूतपिशाचाः` stayed one word in v0 for this reason.)
5. Omit ritual stage directions (sip water, touch limbs, hold the nose, and so on). Encode **meanings of the recitation only**.
6. Personal names, gotra, and similar in saṅkalpa / abhivāda: copy as the content PDF has them.
7. Reuse an already-encoded tree when the book repeats a block (Ācamana appears more than once). Do not retype it.
8. Touch only that chapter’s content module, `src/content/library.ts`, and this status table if you mark the chapter ready. No drive-by refactors.

### How to encode

Read an existing ready file first and match it:

- `src/content/guru-namaskara.ts` (shallow)
- `src/content/sarira-suddhi.ts` (word → phrase → sentence → verse)
- `src/content/bhutocchatanam.ts`

Use `word()` and `group()` from `src/lib/span.ts`.

- **word:** Devanagari + IAST syllables as pairs, glossary meaning on the leaf.
- **group:** `phrase` / `sentence` / `verse` with the PDF’s English for that span.
- `trailing` for `।` `॥` `!` ; `lineBreakAfter: true` where the PDF line-breaks.
- `source: "curated"` (already set by the helpers).
- Syllable pairs should match `nice_formating.pdf` overlay when that chapter has one; otherwise use the content PDF’s hyphenation (`gu-ru-bhyo`).

Wire it in `src/content/library.ts`: replace the `comingSoon(...)` placeholder (or add the chapter in book order if it is not listed yet). Keep book order the same as the content PDF. Mark this chapter **ready** in the inventory table below.

### When you finish (review block)

Paste a review block, not a dump of the TypeScript:

1. **Devanagari** — all leaf `dev` strings joined in reading order, with dandas.
2. **IAST** — all leaf `iast` strings joined.
3. **Glossary** — every PDF glossary line, marked used / unused. List any encoded word that has no PDF gloss.
4. **Translation** — the `chapter.translation` string (must be the PDF’s, not a rewrite).
5. **Uncertainties** — anything the PDF was unclear on. Prefer a listed uncertainty over guessing.
6. **Live URL** — confirm https://mbaranov4310.github.io/prakasa/ was updated.

### Publish

Do this in the same chat after the files are written. Do not wait for the human to approve the commit.

Do **not** commit `data/*.pdf` (gitignored, personal details). Do not commit `node_modules` or `dist`.

```bash
git add src/content src/content/library.ts docs/ENCODE_CHAPTER.md
git status
git commit -m "$(cat <<'EOF'
Add Sandhyāvandana chapter N (<title>) to the reader.

EOF
)"
git push origin main
npm run build
npx --yes gh-pages -d dist
```

Use a commit message that names the chapter. If `git push` or `gh-pages` needs extra permissions (`all`), request them. GitHub Pages is the `gh-pages` branch of `mbaranov4310/prakasa` (not GitHub Actions).

Then stop. Start a **new chat** for the next chapter. Do not encode another chapter in this conversation.

---

## Chapter inventory

Page numbers are `sandhya_content.pdf` (`N of 113`). Status is the website, not the PDF.

| Ch | Pages | Title | Status |
| --- | --- | --- | --- |
| 1a | 1–3 | ॐ श्री गुरुभ्यो नमः | ready (`guru-namaskara`) |
| 1b | 1–3 | शरीर-शुद्धिः | ready (`sarira-suddhi`) |
| 2 | 4–8 | आचमनम् | ready (`acamana`) |
| 3 | 9–11 | भूतोच्छाटनम् | ready (`bhutocchatanam`) |
| 4 | 12–15 | प्राणायामः | next |
| 5 | 16–22 | संकल्पः | upcoming (contains personal name / gotra) |
| 6 | 23–25 | मार्जनः | upcoming |
| 7 | 26–28 | प्रातः काल मन्त्राचमनः | upcoming |
| 8 | 29–31 | द्वितीय मार्जनः | upcoming |
| 9 | 32–34 | पुनः मार्जनः | upcoming |
| 10 | 35–37 | अघमर्षण मन्त्रः | upcoming |
| 11 | 38–41 | पुनः प्राणायामः, संकल्प वाक्य, सूर्योपस्थानम् | upcoming (repeat prāṇāyāma: reuse Ch 4) |
| 12 | 42–44 | आचमनम्, सन्ध्याङ्ग तर्पणम् | upcoming (reuse Ch 2 ācamana) |
| 13 | 45–48 | गायत्री आवाहनम् | upcoming |
| 14 | 49–53 | गायत्री-आवाहन-न्यासः | upcoming |
| 15 | 54 | आचमनम् | upcoming (reuse Ch 2) |
| 16 | 55–57 | गायत्री जप संकल्पः | upcoming |
| 17 | 58–62 | करन्यासः एवं अङ्गन्यासः | upcoming |
| 18 | 63–64 | ध्यानम् | upcoming |
| 19 | 65–67 | मुद्रा प्रदर्शनम् | upcoming |
| 20 | 68–70 | गायत्री मन्त्रः | upcoming |
| 21 | 71–73 | अष्ट-मुद्रा प्रदर्शनम् | upcoming |
| 22 | 74–78 | प्रातः काल सूर्योपस्थानम् | upcoming |
| 23 | 79–82 | दिग्देवता नमस्कारः | upcoming |
| 24 | 83–87 | मुनि नमस्कारः, सन्ध्यादेवता नमस्कारः | upcoming |
| 25 | 88–91 | प्रणामः | upcoming |
| 26 | 92–94 | गायत्री उद्वासनम् | upcoming |
| 27 | 95–98 | भगवन्नमस्कारः | upcoming |
| 28 | 99–104 | भूम्याकाशाभिवन्दनम् | upcoming |
| 29 | 105–108 | अभिवादः | upcoming (personal name / pravara) |
| 30 | 109–113 | ईश्वरार्पणम् | upcoming |
