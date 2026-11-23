# Bhagavad Gītā words and meanings — one chapter

Work in `/Users/max/Desktop/projects/prakasa`. You own **one chapter**. Read `docs/gita/ENCODE.md` for the sources and conventions, then read chapter 12 before you write anything. Chapter 12 is the standard:

- `docs/gita/text/12/_chapter.md`
- `docs/gita/text/12/gita-12-01.md` (a speaker line, a carried-over verb)
- `docs/gita/text/12/gita-12-05.md` (sandhi joins, a long compound, a bracketed note)
- `docs/gita/text/12/gita-12-13.md` and `gita-12-14.md` (one sentence over two verses)

You write `docs/gita/text/<NN>/_chapter.md` and one file per verse. Do not edit scripts, briefs, another chapter, `flags.md`, or anything under `src/`. Do not commit.

## The verse

Start from the Supersite line (`data/gita/supersite/ss_<N>.txt`) and correct it against the scan page (`python3 scripts/gita-pages.py`, then open the PNG). The file says what the page says: its letters, its anusvāra or class nasal, its word spacing. Do not type a verse from memory, and do not take a reading from Sringeri or GRETIL.

When the page is hard to read at one akṣara, compare the witnesses, choose what the page supports, and list the verse in your report.

```samhita
अर्जुन उवाच
एवं सततयुक्ता ये भक्तास्त्वां पर्युपासते ।
ये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः ॥
```

No verse number in the file; the lift adds it. Lines end with ` ।` and the last with ` ॥`. A speaker line has no daṇḍa. `print_page` in `meta` is the printed page number the verse stands on.

## The words

The padas table has four tab-separated columns.

```padas
pada	slice	after	meaning
क्लेशः	क्लेशोऽ	join	the trouble
अधिकतरः	धिकतरस्	join	greater
तेषाम्	तेषाम	join	of those
अव्यक्त-आसक्त-चेतसाम्	व्यक्तासक्तचेतसाम्	danda	whose minds are set on the unmanifest
```

**pada** is the word by itself, sandhi undone, as Śaṅkara takes it up in the commentary (`क्लेशः`, not `क्लेशो`). A compound is one row, its members hyphenated in their stem form with the ending on the last (`अव्यक्त-आसक्त-चेतसाम्`). Where two splits are possible, his is the one we use; he usually quotes the word and glosses it.

**slice** is that word's share of the verse exactly as written. The slices, with what `after` stands for, must rebuild the verse letter for letter.

- A final consonant before a consonant ends in virāma: `भक्तास्` + `त्वां`.
- A final consonant fused with a following vowel keeps that akṣara: `तेषाम` + `व्यक्ता…`.
- When two vowels merge, the merged vowel stays with the first word: `चा` + `प्य` + `क्षरम` + `व्यक्तं`.
- An avagraha stays with the word before it: `क्लेशोऽ` + `धिकतरस्`.

**after** is what follows the slice: `join` (nothing; the next word is fused), `space`, `break` (end of a line with no daṇḍa: a speaker line, or the first half of a long-metre line), `danda`, `ddanda`.

**meaning** is the sense of this word here, in plain English, in the form the sentence needs (“of those”, “is reached”). Follow Śaṅkara's gloss of the word. When he makes a point the bare English would lose, add it in a bracket: `by the embodied (those who identify with the body)`. Keep brackets short and few. Where he says nothing, give the plain sense. Check yourself against Sastri and Swarupananda; when you differ from both, look again.

## The lines and the verse

`phrase` has one meaning per line of the verse, separated by `---`, in the order of the lines. A line meaning is readable English for that line, even when the sentence runs on. `translation` is the whole verse as one or two sentences, and it should read as what the line meanings add up to.

Write your own English. Do not copy a sentence from Sastri, Swarupananda, or any other translation. No “thee” and “thou”.

## Check, then stop

```
python3 scripts/check-gita-text.py --strict docs/gita/text/<NN>
python3 scripts/gita-compare.py --locked <NN>
```

The first must say every file PASSes. The second prints each place your text differs from a witness by a letter or a word. For each, look at the page again. If the page has your reading, keep it and report it. If not, fix it.

Do not start another chapter. Report the chapter, the number of verses and words, every place the compare printed and what the page has there, every akṣara you could not read with confidence, and every word where you chose between two splits or two senses.
