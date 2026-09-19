import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv30: Chapter = {
  id: 'ddv-30',
  titleDev: 'Verse 30',
  titleIast: 'Verse 30',
  titleEn: 'Verse 30',
  status: 'ready',
  translation: 'When attachment to the body has fallen away and the supreme Self is known, wherever the mind goes, there is samādhi.',
  glossary: [
    { term: 'deha', meaning: 'the body' },
    { term: 'abhimāne', meaning: 'when identification with' },
    { term: 'galite', meaning: 'has melted' },
    { term: 'vijñāte', meaning: 'when known' },
    { term: 'parama', meaning: 'supreme' },
    { term: 'ātmani', meaning: 'Self' },
    { term: 'yatra', meaning: 'wherever' },
    { term: 'manaḥ', meaning: 'the mind' },
    { term: 'yāti', meaning: 'goes' },
    { term: 'tatra', meaning: 'there' },
    { term: 'samādhayaḥ', meaning: 'samādhis' },
  ],
  root: group('ddv-30-verse', 'verse', 'When attachment to the body has fallen away and the supreme Self is known, wherever the mind goes, there is samādhi.', [
    group('ddv-30-p1', 'phrase', 'When body-identification has melted and the supreme Self is known,', [
    word('ddv-30-w1', 'the body', [
      ['दे', 'de'],
      ['हा', 'hā'],
    ], { trailing: '' }),
    word('ddv-30-w2', 'when identification with', [
      ['भि', 'bhi'],
      ['मा', 'mā'],
      ['ने', 'ne'],
    ]),
    word('ddv-30-w3', 'has melted', [
      ['ग', 'ga'],
      ['लि', 'li'],
      ['ते', 'te'],
    ]),
    word('ddv-30-w4', 'when known', [
      ['वि', 'vi'],
      ['ज्ञा', 'jñā'],
      ['ते', 'te'],
    ]),
    word('ddv-30-w5', 'supreme', [
      ['प', 'pa'],
      ['र', 'ra'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-30-w6', 'Self', [
      ['त्म', 'tma'],
      ['नि', 'ni'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-30-p2', 'phrase', 'wherever the mind goes, there samādhis are.', [
    word('ddv-30-w7', 'wherever', [
      ['य', 'ya'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w8', 'wherever', [
      ['य', 'ya'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w9', 'the mind', [
      ['म', 'ma'],
      ['नो', 'no'],
    ]),
    word('ddv-30-w10', 'goes', [
      ['या', 'yā'],
      ['ति', 'ti'],
    ]),
    word('ddv-30-w11', 'there', [
      ['त', 'ta'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w12', 'there', [
      ['त', 'ta'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w13', 'samādhis', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['ध', 'dha'],
      ['यः', 'yaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
