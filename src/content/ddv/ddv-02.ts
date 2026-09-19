import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv02: Chapter = {
  id: 'ddv-02',
  titleDev: 'नीलपीतस्थूलसूक्ष्मह्रस्वदीर्घादि भेदतः',
  titleIast: 'nīlapītasthūlasūkṣmahrasvadīrghādi bhedataḥ',
  titleEn: 'Verse 2',
  status: 'ready',
  translation: 'Forms appear as various on account of distinctions such as blue, yellow, gross, subtle, short, and long. The eye, remaining one, perceives them.',
  glossary: [
    { term: 'nīlapītasthūlasūkṣmahrasvadīrghādi', meaning: 'blue, yellow, gross, subtle, short, long, etc.' },
    { term: 'bhedataḥ', meaning: 'on account of difference' },
    { term: 'nānāvidhāni', meaning: 'of various kinds' },
    { term: 'rūpāṇi', meaning: 'forms' },
    { term: 'paśyet', meaning: 'perceives' },
    { term: 'locanam', meaning: 'the eye' },
    { term: 'ekadhā', meaning: 'as one' },
  ],
  root: group('ddv-02-verse', 'verse', 'Forms appear as various on account of distinctions such as blue, yellow, gross, subtle, short, and long. The eye, remaining one, perceives them.', [
    group('ddv-02-p1', 'phrase', 'Forms differ as blue, yellow, gross, subtle, short, long, and so on.', [
    word('ddv-02-w1', 'blue, yellow, gross, subtle, short, long, etc.', [
      ['नी', 'nī'],
      ['ल', 'la'],
      ['पी', 'pī'],
      ['त', 'ta'],
      ['स्थू', 'sthū'],
      ['ल', 'la'],
      ['सू', 'sū'],
      ['क्ष्म', 'kṣma'],
      ['ह्र', 'hra'],
      ['स्व', 'sva'],
      ['दी', 'dī'],
      ['र्घा', 'rghā'],
      ['दि', 'di'],
    ]),
    word('ddv-02-w2', 'on account of difference', [
      ['भे', 'bhe'],
      ['द', 'da'],
      ['तः', 'taḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-02-p2', 'phrase', 'The eye sees those many forms while remaining one.', [
    word('ddv-02-w3', 'of various kinds', [
      ['ना', 'nā'],
      ['ना', 'nā'],
      ['वि', 'vi'],
      ['धा', 'dhā'],
      ['नि', 'ni'],
    ]),
    word('ddv-02-w4', 'forms', [
      ['रू', 'rū'],
      ['पा', 'pā'],
      ['णि', 'ṇi'],
    ]),
    word('ddv-02-w5', 'perceives', [
      ['प', 'pa'],
      ['श्ये', 'śye'],
      ['ल्', 'l'],
    ], { trailing: '' }),
    word('ddv-02-w6', 'the eye', [
      ['लो', 'lo'],
      ['च', 'ca'],
      ['न', 'na'],
      ['मे', 'me'],
    ], { trailing: '' }),
    word('ddv-02-w7', 'as one', [
      ['क', 'ka'],
      ['धा', 'dhā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
