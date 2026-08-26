# Devatā namaskāra

Short greetings people say to each god — home, school, temple walk. Not Vedic, not immutable. Village and region vary.

Library book: **देवता नमस्कारः** / `devata-namaskara`.

**Find first. Encode only after the human has audited the package.** The find file should already contain Sanskrit, IAST, word glosses, and a natural translation — enough to review before anything is wired into Prakāśa. Encoding format: `docs/ENCODE_CHAPTER.md`.

---

## What a chapter is

One deity, one short recitation. Yardstick is Gaṇeśa (`vakratuṇḍa mahākāya…`): about 1–2 ślokas, 2–4 lines, something a child can memorize. Standalone salutation, prārthanā, dhyāna, or namaskāra. Not a 108-name stotra and not a 20-verse excerpt unless people actually say that excerpt as the hello.

---

## Stage 1: find

Do not start from English “Kartikeya prayer 4 lines.”

1. **All the names.** Search every major Sanskrit (and regional) name. Kārtikeya → स्कन्द, सुब्रह्मण्य, षण्मुख / षडानन, गुह, कुमार, முருகன். One dry name is not “there isn’t one.”
2. **Short-prayer queries**, for each name: श्लोक, प्रार्थना, ध्यान श्लोक, नमस्कार, स्तुति, स्तोत्रम्, दैनिक प्रार्थना / common prayer — and the same in Tamil, Telugu, Kannada, Malayalam, Hindi, Marathi, Bengali, etc.
3. **Prefer prayer collections** (bāla-pāṭha, nitya-prārthanā, school readers, temple books) over long deity stotras.
4. **List several candidates.** Do not crown the first hit. If nothing short and standalone turns up, say **cannot find one**.
5. **Hindu sources only.** Purāṇa, Upaniṣad, āgama / paddhati, well-known bhāṣya, temple sites, Indian-language prayer books, pāṭhaśālā / sampradāya / guru-paramparā materials. Not Western philology, not academic Indology, not Wikipedia-as-authority. If the only hits are academic, **say so and stop** — do not substitute them. 2–3 independent Hindu sources for the same verse is good; 5 is strong. Twenty copies of one blog are one source.
6. **Popularity is not provenance.** Do not invent a Purāṇa citation because the web is full of the verse.
7. **Variants.** Record them. Do not splice pādas from two readings.

Keep three claims separate. (c) needs more than (a) or (b):

- **(a) exists** — the Sanskrit is attested somewhere
- **(b) traditionally used** — paddhati, temple, pāṭhaśālā, sampradāya
- **(c) standard short prayer** — independently memorized / the common hello for this deity

---

## Stage 1 output (the package)

One file per deity so parallel agents do not collide: `docs/devata-stuti/findings/<deity-id>.md`. Write that file and paste the same block in chat. Do not encode. Do not edit `INVENTORY.md`.

Lead with the proposed verse (full package). Other candidates can be shorter, underneath.

```
# <Deity>

## Proposal

Devanagari:

<verse>

IAST:

<verse>

Padaccheda: <if a traditional source splits it; else “not attested, proposed: …”>

Word gloss:
- <pada> — <meaning>
- …

Translation: “…”

Function: prārthanā / dhyānaśloka / namaskāra / stuti / …

## Claims

(a) exists: yes/no — one-liner
(b) traditionally used: yes/no — one-liner
(c) standard short prayer: yes/no/unclear — one-liner
Confidence in (c): low / medium / high

## Sources

Hindu sources only. Count: N (2–3 good, 5 strong)

1. <what> — <url or book> — same verse / variant / (a) only
2. …

## Variants

…

## Other candidates

- <incipit or 4 pādas> — why not lead
OR: none worth listing
OR: Could not find a short standalone greeting.

## Uncertainties

…
```

The human audits this. Then a later chat encodes.

---

## Parallel find jobs

One deity per agent. Each writes only `findings/<id>.md`.

```
Work in /Users/max/Desktop/projects/prakasa.
Follow docs/devata-stuti/WORKFLOW.md stage 1 only.
Deity: <name> (file: docs/devata-stuti/findings/<id>.md)
Hindu sources only. Do not use Western philology; if that is all you find, say so.
Drop the full package (Devanagari, IAST, padaccheda, word gloss, translation, claims a/b/c, sources, variants).
Do not encode. Do not edit any other file.
```

---

## Stage 2: encode (after the package is approved)

Follow `docs/ENCODE_CHAPTER.md`. Wire the approved recension and glosses; do not silently rewrite them.

- Files: `src/content/nitya-mangala-slokas/`
- One deity = one chapter in the `devata-namaskara` book
- Split on how the verse is recited and understood, not on dictionary convenience
```
Work in /Users/max/Desktop/projects/prakasa.
Follow docs/ENCODE_CHAPTER.md and docs/devata-stuti/WORKFLOW.md stage 2.
Encode <deity> — <first pāda>
Book: devata-namaskara
Use the approved package in docs/devata-stuti/findings/<id>.md
```
