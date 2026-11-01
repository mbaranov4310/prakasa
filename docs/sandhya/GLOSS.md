# Sandhyāvandana gloss parse — one chapter

Work in `/Users/max/Desktop/projects/prakasa`. You own **one chapter file**. Read this brief and that file. Write one review note. Stop.

Do not edit the chapter, any other mantra, `src/types.ts`, or this file. Do not change the meaning strings the site already shows. Do not commit or publish.

The note is `docs/sandhya/gloss/<chapter-id>.md`. Chapter id is the `id` field on the chapter object.

## What to record

Every word the reader can tap is one row. That includes words built by helpers (`om`, `namaḥ`, `svāhā`). A helper used many times with the same spelling and the same parse is one row, and the row lists every word id.

Read the word’s IAST and Devanagari, and the meaning already stored. The meaning is a gloss of sense. You are adding the grammar the ending actually carries. If the stored meaning and the ending disagree, mark the row **unsure** and say why.

**obvious** means every field for that kind is filled from the form. **unsure** means a Vedic ending, a sandhi join you cannot split, or two legal parses. On an unsure row, leave the grammatical fields blank. Do not guess.

## Fields by kind

**Noun.** Stem, gender, case, number. “Stem” is the form that declines (`pāpa` in `pāpebhyo`), not a verbal root. If the noun is built from a verb, also name that root (`kṛta` from `kṛ`). Leave the root blank when there is none.

**Adjective.** Same fields as a noun. Use this when the word describes another word and takes that word’s gender, case, and number. A participle stays a participle.

Cases, in the names the study pages use: nominative, accusative, instrumental, dative, ablative, genitive, locative, vocative. Number is singular, dual, or plural. Gender is masculine, feminine, or neuter.

**Finite verb.** Root, and any prefix that is part of the word (`pra`, `ā`, `sam`). Tense or mood, in the lesson names: present, command, ordinary past, potential, blessing, simple future, distant future, conditional, distant past, recent past. Voice: parasmaipada or ātmanepada, and passive or impersonal when the form is that. Person. Number. Name the class only when the stem is not the obvious one. A finite verb has no gender.

**Participle.** Both sets. Root, participle type (past, present, or the suffix if that is all you can see), and the noun fields: stem, gender, case, number. No person.

**Pronoun.** Stem, case, number, and gender when the pronoun has one. `asmad` and `yuṣmad` have no gender; say so.

**Indeclinable.** `ca`, `namaḥ`, `svāhā`, `oṃ`, and the same sort of particle. Kind is indeclinable. No case. A frozen ending is not a live case.

A compound is still one word. Parse the ending on the last member. Compound type is optional. If you are not sure of the type, leave it out and do not let that flip the row to unsure.

## Note shape

```
# <chapter id>

## <iast>
ids: id, id
kind: noun
judgment: obvious
stem:
gender:
case:
number:
root:
meaning: <the string already on the word>

## <iast>
ids: id
kind: verb
judgment: unsure
why: <one sentence>
meaning: <the string already on the word>
```

Use only the fields that kind needs. Omit empty optional lines. Group identical rows. Keep the existing meaning text unchanged, including an empty meaning.

## Stop

Do not start the next chapter. Report the chapter id, how many rows are obvious, and how many are unsure.
