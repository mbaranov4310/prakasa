# Bhagavad Gītā grammar and links — one chapter

Work in `/Users/max/Desktop/projects/prakasa`. You own **one chapter**. Its verses are already locked in `docs/gita/text/<NN>/gita-<NN>-<VV>.md`: the words, their order, and the meaning of each word. You add two notes for every verse.

- Grammar of each word: `docs/gita/gloss/<NN>/gita-<NN>-<VV>.md`
- Who goes with whom: `docs/gita/links/<NN>/gita-<NN>-<VV>.md`

Read this brief, then read the standard before you write anything:

- `docs/gita/text/12/gita-12-01.md`, `docs/gita/gloss/12/gita-12-01.md`, `docs/gita/links/12/gita-12-01.md`
- `docs/gita/text/12/gita-12-05.md`, `docs/gita/gloss/12/gita-12-05.md`, `docs/gita/links/12/gita-12-05.md`

Match their judgment, their notes, and their links. The site shows the gloss when a word is tapped. The practice quiz is built from both notes: the gloss supplies the grammar sentence (“the root is …, the case is …”), and the links supply “it is the subject of which word?”

Write the two notes for every verse of your chapter. Do not edit the verse files, the checker, this brief, another chapter, or anything under `src/`. Do not change a meaning. Do not commit. If a word split or a meaning in a verse file looks wrong to you, leave it and list it in your report.

## How the sentence is read

The sentence is read the way Śaṅkara reads it. His commentary restates each verse in prose order and says which word goes with which. Read it for every verse before you link anything.

- Chapters 1–17, IAST: `data/gita/gretil/bhg-sankara-1-17.txt`. Search `bhg_12.5` for the verse and read down to the next verse.
- Chapter 18, Devanagari: `data/gita/sringeri/sr_18.html`. Reading only.
- English of the commentary (Sastri): `data/gita/english/sastri-1977-ocr.txt`.

These files are for reading. Do not paste their sentences into a note. A note is one or two plain sentences of your own.

Where Śaṅkara is silent on a word (all of chapter 1 and the first ten verses of chapter 2), read the plain sense of the verse.

## Gloss

Every word of the verse is a row, in verse order. The heading is the word exactly as the `pada` column has it, in IAST, hyphens kept (`python3 scripts/ddv-iast.py to-iast 'अव्यक्त-आसक्त-चेतसाम्'`). The `meaning` line repeats the word's meaning from the verse file, unchanged. Two words of one verse share a row only when the word, the parse, and the meaning are all the same; the row then lists both ids.

The word id is the verse id, `-w`, and the row number in the padas table: the third row of `gita-12-05` is `gita-12-05-w3`.

**obvious** means every field for that kind is filled. **unsure** means the sentence itself is open: two legal parses that Śaṅkara does not settle, or a form the grammar books dispute. On an unsure row give `kind`, `why` (one sentence), and no grammar fields.

A form that could be two cases by itself is **not** unsure when the sentence settles it. Neuter `-am` is nominative or accusative; if the word is what the verb acts on, it is accusative. Fill the fields and say so in the note: “The neuter -am is nominative or accusative. It is what they worship, so it is accusative.”

**Noun.** `stem`, `gender`, `case`, `number`. Stem is what declines (`kleśa` in `kleśaḥ`). Add `root` only when the noun is built from a verb (`gati` from `gam`).

**Adjective.** Same fields as a noun. Use it when the word describes another word and takes that word's gender, case, and number. An adjective standing alone as a noun (“the embodied”) is a noun, with a note.

**Compound.** One word, one row. The stem is the whole compound with its hyphens (`avyakta-āsakta-cetas`). Gender, case, and number are read from the ending on the last member. `compound` names the type: tatpuruṣa, karmadhāraya, bahuvrīhi, dvandva, avyayībhāva. A bahuvrīhi is an adjective. A compound that ends in a participle (`satata-yuktāḥ`) is an adjective with `root`. If you are not sure of the type, leave `compound` out; that does not make the row unsure. A note that unpacks the compound in a few words is welcome.

**Finite verb.** `root`, `prefix` when there is one (two prefixes as `pari-upa`), `tense`, `voice`, `person`, `number`. Tense is one of: present, command, ordinary past, potential, blessing, simple future, distant future, conditional, distant past, recent past. Voice is one of: parasmaipada, ātmanepada, passive, impersonal. Person is 1st, 2nd, or 3rd. Name the `class` for every verb outside the first class: ad (2nd), hu (3rd), div (4th), su (5th), tud (6th), tan (8th). No gender. A causative gets `note: Causative of <root>.` Give `root` to a primary verbal noun (`jñāna` from `jñā`), an agent noun, and a negated participle. Leave it off a bahuvrīhi and off a word in `-mat` or `-in`, apart from `yogin` and `kṣamin`. `śrad` in `śraddhā` is not a prefix; say it in the note.

**Participle.** `root`, `participle` (past, present, future, `potential (-ya)`, `potential (-tavya)`, `potential (-anīya)`, `perfect`), `gender`, `case`, `number`, and `prefix` when there is one. No person.

**Pronoun.** `stem` (`tad`, `yad`, `kim`, `idam`, `etad`, `asmad`, `yuṣmad`, `sarva`), `case`, `number`, and `gender` when it has one. `asmad` and `yuṣmad` have no gender; say so in a note and leave gender out.

**Indeclinable.** `ca`, `na`, `eva`, `hi`, `tu`, an adverb, an absolutive (“having restrained”), an infinitive. No case. Give `root` and `prefix` for an absolutive or infinitive, with a note that names it. A neuter accusative used as an adverb (`duḥkham`, “with difficulty”) is an indeclinable with a note.

Cases: nominative, accusative, instrumental, dative, ablative, genitive, locative, vocative. Number: singular, dual, plural. Gender: masculine, feminine, neuter.

Sandhi is not grammar. `kleśo'` is still nominative `kleśaḥ`. When the verse writes the word differently from its heading, a short note says how (“Written gatir before duḥkham.”).

```
# gita-12-05

## kleśaḥ
ids: gita-12-05-w1
kind: noun
judgment: obvious
stem: kleśa
gender: masculine
case: nominative
number: singular
root: kliś
note: Written kleśo before the a of adhikataraḥ, and that a is dropped.
meaning: the trouble

## <word>
ids: gita-12-05-w7
kind: noun
judgment: unsure
why: <one sentence>
meaning: <the meaning from the verse file>
```

Use only the fields that kind needs. Leave out empty lines.

## Links

A link is two word ids and a role. The quiz asks it only when `judgment` is obvious and `to` is filled.

- **subject** — from the finite verb to the nominative that does it. With a passive verb the nominative is what the action is done to; it is still the `subject` link, with a note.
- **object** — from the finite verb, a participle, an absolutive, or an infinitive to the accusative it acts on.
- **describes** — from the adjective, the participle, or a noun used as the predicate (`yogī`, `samuddhartā`) to the word it agrees with. In a sentence with no verb (“the trouble is greater”), the predicate describes its subject. `sarva` is a pronoun in its row and still describes the noun it agrees with.
- **complement** — the other relations, named by the case. The head may be a verb, a participle, an adjective, an agent noun, or an adverb, whichever the case actually goes with (`abhyāsāt` → `śreyaḥ`, a locative → `samaḥ`):
  - Genitive to the thing it belongs to: `teṣām` → `kleśaḥ`, “their trouble.”
  - Instrumental, dative, ablative, or locative to what it goes with. The instrumental doer of a passive verb is this link, with the note “With a passive verb the instrumental is the doer.”
  - An adverb to its verb (`evam` → `paryupāsate`).
  - An infinitive or absolutive to the main verb it leans on.
  - A clause whose verb is only understood still gets the link, with a note that the verb is supplied (`tyāgāt` → `śāntiḥ`).
- **same** — a relative and its answer (`ye` … `teṣām`), a pronoun and the noun beside it in the same case (`ye bhaktāḥ`), two names of one thing. The quiz asks one question per word, so a word that answers several others gets one link: to the first relative, or, for a nominative that is the subject of several verbs or an accusative shared by two verbs, from the first or the nearer verb. Name the others in the note. Chapter 12 does this for `saḥ` in 12.15 and 12.17, for `yaḥ` as the subject of the four verbs in 12.17, and for `mām` shared by `dhyāyantaḥ` and `upāsate` in 12.6.

A predicate whose subject is the unstated “you” (`asamarthaḥ asi`, `bhava`) has no link. `atha` and `tathā` have none either. Leave out `ca`, `na`, `eva`, `api`, `tu`, `hi`, and a vocative. `uvāca` takes its speaker as subject and nothing else.

A link may reach into another verse of the same chapter when the sentence does (12.3–4, 12.13–14). Put it in the file of its `from` word. When a verb is carried over from an earlier line, link to that verb and say so in a note.

One obvious head is a link. Two legal heads that Śaṅkara does not choose between: leave `to` out, `judgment: unsure`, and one sentence of `why`. Do not grow a link to fill a quota; a word with nothing to say has no link.

```
# gita-12-05

## describes
from: gita-12-05-w2
to: gita-12-05-w1
judgment: obvious
note: There is no verb. “Is” is understood.

## complement
from: gita-12-05-w8
judgment: unsure
why: <one sentence>
```

## Check, then stop

```
python3 scripts/check-gita-gloss.py docs/gita/text/<NN>
```

Every verse must PASS. The checker knows the format, not the grammar: it cannot tell a wrong case from a right one. Read your own rows against the verse once more before you stop.

Do not start another chapter. Report the chapter, the number of gloss rows obvious and unsure, the number of links obvious and unsure, and any word split or meaning in a verse file you think is wrong, with the verse number and one sentence each.
