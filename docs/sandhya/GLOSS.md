# Sandhyāvandana parse — one chapter

Work in `/Users/max/Desktop/projects/prakasa`. You own **one chapter**. Read this brief, then read the finished Mitra sūkta before you write anything:

- Chapter: `src/content/mitra-sukta.ts`
- Word gloss: `docs/sandhya/gloss/mitra-sukta.md`
- Links: `docs/sandhya/links/mitra-sukta.md`

Mitra sūkta is the standard. Match its judgment, its adjective tags, and its links. A quiz is built from these two notes. The gloss supplies the meaning check and the grammar sentence (“the root is …, the case is …”). The links supply “who is the supporter?” and “Mitra's what?”

Write both notes. Stop. Do not edit the chapter, any other mantra, `src/types.ts`, this file, or the Mitra files. Do not change meaning strings. Do not commit.

- Gloss: `docs/sandhya/gloss/<chapter-id>.md`
- Links: `docs/sandhya/links/<chapter-id>.md`

Chapter id is the `id` field on the chapter object. If an older gloss or link file exists for your chapter, replace it.

## Gloss

Every tappable word is a row, including helpers (`om`, `namaḥ`, `svāhā`). The same spelling and the same parse are one row, and the row lists every word id. A different parse is a different row (`tvā` as a real accusative, and `tvā` as the front of a compound).

The stored meaning is the sense. You add the grammar the ending carries. If the meaning and the ending disagree, mark the row **unsure** and say why.

**obvious** means every field for that kind is filled from the form. **unsure** means a Vedic ending, a sandhi join you cannot split, or two legal parses. On an unsure row, leave the grammatical fields blank. Kind stays. Do not guess. A `note` on an obvious row is for a sandhi fact or “causative of yat” or “yuṣmad has no gender.” A note does not replace the fields.

**Noun.** Stem, gender, case, number. Stem is what declines (`mitra` in `mitrasya`), not a verbal root. Name a verbal root only when the noun is built from a verb. Leave root blank when there is none.

**Adjective.** Same fields as a noun. Use it when the word describes another word and takes that word’s gender, case, and number. `dhṛtaḥ` “supporter of” is an adjective with `mitrasya`, not a noun. A participle stays a participle.

**Finite verb.** Root, and any prefix that is part of the word. Tense or mood, in the lesson names: present, command, ordinary past, potential, blessing, simple future, distant future, conditional, distant past, recent past. Voice: parasmaipada or ātmanepada, and passive or impersonal when the form is that. Person. Number. Name the class only when the stem is not the obvious one (`cakṣ` is class ad, `aś` is class su). No gender. A causative gets `note: Causative of <root>.` The tense is the one the ending shows: `yātayati` is present, and `vardhayantu` is a command.

**Participle.** Root, participle type (past, present, or the suffix), and the noun fields. No person.

**Pronoun.** Stem, case, number, and gender when it has one. `asmad` and `yuṣmad` have no gender. Say so in a note and omit gender.

**Indeclinable.** `ca`, `namaḥ`, `uta`, `oṃ`, a frozen adverb. No case. A frozen ending is not a live case.

Cases: nominative, accusative, instrumental, dative, ablative, genitive, locative, vocative. Number: singular, dual, plural. Gender: masculine, feminine, neuter.

Endings depend on the stem. `-sya` is the genitive of an `-a` stem (`mitra` → `mitrasya`). On that same stem, `-aḥ` is nominative (`mitraḥ`). A root noun or other consonant stem takes `-aḥ` for the genitive (`dhṛt` → `dhṛtaḥ`). Do not call `dhṛtaḥ` nominative because it looks like `mitraḥ`. Sandhi is not a second case: `mitraḥ` before a voiced sound is written `mitro`, and it is still nominative. Say so in a note.

A compound is one word when the chapter stores it as one word. Parse the ending on the last member. If the chapter splits the compound, the front member has no case of its own: mark that row unsure and say the ending sits on the next word. Compound type is optional. Doubt about the type does not make the row unsure.

```
# <chapter id>

## <iast>
ids: id, id
kind: adjective
judgment: obvious
stem:
gender:
case:
number:
root:
note:
meaning: <the string already on the word>

## <iast>
ids: id
kind: noun
judgment: unsure
why: <one sentence>
meaning: <the string already on the word>
```

Use only the fields that kind needs. Omit empty optional lines. Keep the meaning text unchanged, including an empty meaning.

## Links

A link is two word ids and a role. The quiz asks it only when `judgment` is obvious and `to` is filled.

- **subject** — from the finite verb to the nominative who does it.
- **object** — from the finite verb, a participle, or an absolutive (“having given”) to the accusative it is done to.
- **describes** — from the adjective or participle to the word it agrees with. For `dhṛtaḥ` “supporter of,” this is Mitra (`mitrasya`), the one who is the supporter. It is not the peoples.
- **complement** — the other relation, named by the case:
  - Genitive noun to the thing possessed: `mitrasya` → `śravo`, “Mitra's what?”
  - Adjective whose meaning is “X of …” to the one it is of: `dhṛtaḥ` → `carṣaṇī`, “Supporter of whom?” The front member can be unsure as a case and still be the obvious “of whom.”
  - Instrumental, dative, ablative, or locative noun to the verb it goes with.
  - Pronoun baked into a compound (“protected by you”) to that participle.
- **same** — `yaḥ` and `saḥ`, or `enam` and that same man.

Omit `oṃ`, `uta`, `na`, and a bare preverb. Omit a vocative. An unsure case does not grow a guessed subject or object. Two legal heads: leave `to` blank, judgment unsure, one sentence why. One obvious head is still a link, with a `note` if the form alone was nominative or accusative.

```
## describes
from: ms-dhrtah
to: ms-mitrasya
judgment: obvious

## complement
from: ms-mitrasya
to: ms-sravo
judgment: obvious
note: Genitive. The fame is what Mitra possesses.

## describes
from: ms-bahya
judgment: unsure
why: The ending sits on the next member, and the compound can describe either of two nominatives.
```

## Stop

Do not start the next chapter. Report the chapter id, gloss rows obvious and unsure, and link rows obvious and unsure.
