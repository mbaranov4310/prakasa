import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv02: Chapter = {
  id: 'ddv-02',
  titleDev: 'Verse 2',
  titleIast: 'Verse 2',
  titleEn: 'Verse 2',
  status: 'ready',
  translation: 'Forms appear as various on account of distinctions such as blue, yellow, gross, subtle, short, and long. The eye, remaining one, perceives them.',
  glossary: [
    { term: 'nīla', meaning: 'blue' },
    { term: 'pīta', meaning: 'yellow' },
    { term: 'sthūla', meaning: 'gross' },
    { term: 'sūkṣma', meaning: 'subtle' },
    { term: 'hrasva', meaning: 'short' },
    { term: 'dīrgha', meaning: 'long' },
    { term: 'ādi', meaning: 'etc.' },
    { term: 'bhedataḥ', meaning: 'on account of difference' },
    { term: 'nānā', meaning: 'various' },
    { term: 'vidhāni', meaning: 'kinds' },
    { term: 'rūpāṇi', meaning: 'forms' },
    { term: 'paśyet', meaning: 'perceives' },
    { term: 'locanam', meaning: 'the eye' },
    { term: 'ekadhā', meaning: 'as one' },
  ],
  root: group('ddv-02-verse', 'verse', 'Forms appear as various on account of distinctions such as blue, yellow, gross, subtle, short, and long. The eye, remaining one, perceives them.', [
    group('ddv-02-p1', 'phrase', 'Forms differ as blue, yellow, gross, subtle, short, long, and so on.', [
    word('ddv-02-w1', 'blue', [
      ['नी', 'nī'],
      ['ल', 'la'],
    ], { trailing: '' }),
    word('ddv-02-w2', 'yellow', [
      ['पी', 'pī'],
      ['त', 'ta'],
    ], { trailing: '' }),
    word('ddv-02-w3', 'gross', [
      ['स्थू', 'sthū'],
      ['ल', 'la'],
    ], { trailing: '' }),
    word('ddv-02-w4', 'subtle', [
      ['सू', 'sū'],
      ['क्ष्म', 'kṣma'],
    ], { trailing: '' }),
    word('ddv-02-w5', 'short', [
      ['ह्र', 'hra'],
      ['स्व', 'sva'],
    ], { trailing: '' }),
    word('ddv-02-w6', 'long', [
      ['दी', 'dī'],
      ['र्घा', 'rghā'],
    ], { trailing: '' }),
    word('ddv-02-w7', 'etc.', [
      ['दि', 'di'],
    ]),
    word('ddv-02-w8', 'on account of difference', [
      ['भे', 'bhe'],
      ['द', 'da'],
      ['तः', 'taḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-02-p2', 'phrase', 'The eye sees those many forms while remaining one.', [
    word('ddv-02-w9', 'various', [
      ['ना', 'nā'],
      ['ना', 'nā'],
    ], { trailing: '' }),
    word('ddv-02-w10', 'kinds', [
      ['वि', 'vi'],
      ['धा', 'dhā'],
      ['नि', 'ni'],
    ]),
    word('ddv-02-w11', 'forms', [
      ['रू', 'rū'],
      ['पा', 'pā'],
      ['णि', 'ṇi'],
    ]),
    word('ddv-02-w12', 'perceives', [
      ['प', 'pa'],
      ['श्ये', 'śye'],
      ['ल्', 'l'],
    ], { trailing: '' }),
    word('ddv-02-w13', 'the eye', [
      ['लो', 'lo'],
      ['च', 'ca'],
      ['न', 'na'],
      ['मे', 'me'],
    ], { trailing: '' }),
    word('ddv-02-w14', 'as one', [
      ['क', 'ka'],
      ['धा', 'dhā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
