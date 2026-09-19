import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv30: Chapter = {
  id: 'ddv-30',
  titleDev: 'देहाभिमाने गलिते विज्ञाते परमात्मनि',
  titleIast: 'dehābhimāne galite vijñāte paramātmani',
  titleEn: 'Verse 30',
  status: 'ready',
  translation: 'When attachment to the body has fallen away and the supreme Self is known, wherever the mind goes, there is samādhi.',
  glossary: [
    { term: 'dehābhimāne', meaning: 'when identification with the body' },
    { term: 'galite', meaning: 'has melted' },
    { term: 'vijñāte', meaning: 'when known' },
    { term: 'paramātmani', meaning: 'the supreme Self' },
    { term: 'yatra', meaning: 'wherever' },
    { term: 'manaḥ', meaning: 'the mind' },
    { term: 'yāti', meaning: 'goes' },
    { term: 'tatra', meaning: 'there' },
    { term: 'samādhayaḥ', meaning: 'samādhis' },
  ],
  root: group('ddv-30-verse', 'verse', 'When attachment to the body has fallen away and the supreme Self is known, wherever the mind goes, there is samādhi.', [
    group('ddv-30-p1', 'phrase', 'When body-identification has melted and the supreme Self is known,', [
    word('ddv-30-w1', 'when identification with the body', [
      ['दे', 'de'],
      ['हा', 'hā'],
      ['भि', 'bhi'],
      ['मा', 'mā'],
      ['ने', 'ne'],
    ]),
    word('ddv-30-w2', 'has melted', [
      ['ग', 'ga'],
      ['लि', 'li'],
      ['ते', 'te'],
    ]),
    word('ddv-30-w3', 'when known', [
      ['वि', 'vi'],
      ['ज्ञा', 'jñā'],
      ['ते', 'te'],
    ]),
    word('ddv-30-w4', 'the supreme Self', [
      ['प', 'pa'],
      ['र', 'ra'],
      ['मा', 'mā'],
      ['त्म', 'tma'],
      ['नि', 'ni'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-30-p2', 'phrase', 'wherever the mind goes, there samādhis are.', [
    word('ddv-30-w5', 'wherever', [
      ['य', 'ya'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w6', 'wherever', [
      ['य', 'ya'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w7', 'the mind', [
      ['म', 'ma'],
      ['नो', 'no'],
    ]),
    word('ddv-30-w8', 'goes', [
      ['या', 'yā'],
      ['ति', 'ti'],
    ]),
    word('ddv-30-w9', 'there', [
      ['त', 'ta'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w10', 'there', [
      ['त', 'ta'],
      ['त्र', 'tra'],
    ]),
    word('ddv-30-w11', 'samādhis', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['ध', 'dha'],
      ['यः', 'yaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
