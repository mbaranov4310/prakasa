import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv27: Chapter = {
  id: 'ddv-27',
  titleDev: 'Verse 27',
  titleIast: 'Verse 27',
  titleEn: 'Verse 27',
  status: 'ready',
  translation: 'The first samādhi, even toward some outer thing, is separating name and form from sheer Existence.',
  glossary: [
    { term: 'hṛdi', meaning: 'in the heart' },
    { term: 'iva', meaning: 'as' },
    { term: 'bāhya', meaning: 'outer' },
    { term: 'deśe', meaning: 'place' },
    { term: 'api', meaning: 'even' },
    { term: 'yasmin', meaning: 'in whichever' },
    { term: 'kasmiṃśca', meaning: 'and in whatever' },
    { term: 'vastuni', meaning: 'thing' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'ādyaḥ', meaning: 'the first' },
    { term: 'sat', meaning: 'Existence' },
    { term: 'mātrāt', meaning: 'from … alone' },
    { term: 'nāma', meaning: 'name' },
    { term: 'rūpa', meaning: 'and form' },
    { term: 'pṛthak', meaning: 'separating' },
    { term: 'kṛtiḥ', meaning: 'the act of' },
  ],
  root: group('ddv-27-verse', 'verse', 'The first samādhi, even toward some outer thing, is separating name and form from sheer Existence.', [
    group('ddv-27-p1', 'phrase', 'In the heart or even in an outer place, toward whatever object —', [
    word('ddv-27-w1', 'in the heart', [
      ['हृ', 'hṛ'],
      ['दी', 'dī'],
    ], { trailing: '' }),
    word('ddv-27-w2', 'as', [
      ['व', 'va'],
    ]),
    word('ddv-27-w3', 'outer', [
      ['बा', 'bā'],
      ['ह्य', 'hya'],
    ], { trailing: '' }),
    word('ddv-27-w4', 'place', [
      ['दे', 'de'],
      ['शेऽ', 'śe\''],
    ], { trailing: '' }),
    word('ddv-27-w5', 'even', [
      ['पि', 'pi'],
    ]),
    word('ddv-27-w6', 'in whichever', [
      ['य', 'ya'],
      ['स्मि', 'smi'],
      ['न्', 'n'],
    ]),
    word('ddv-27-w7', 'and in whatever', [
      ['क', 'ka'],
      ['स्मिं', 'smiṃ'],
      ['श्च', 'śca'],
    ]),
    word('ddv-27-w8', 'thing', [
      ['व', 'va'],
      ['स्तु', 'stu'],
      ['नि', 'ni'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-27-p2', 'phrase', 'the first samādhi is separating name and form from Existence alone.', [
    word('ddv-27-w9', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धि', 'dhi'],
      ['रा', 'rā'],
    ], { trailing: '' }),
    word('ddv-27-w10', 'the first', [
      ['द्यः', 'dyaḥ'],
    ]),
    word('ddv-27-w11', 'Existence', [
      ['स', 'sa'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-27-w12', 'from … alone', [
      ['मा', 'mā'],
      ['त्रा', 'trā'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-27-w13', 'name', [
      ['ना', 'nā'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-27-w14', 'and form', [
      ['रू', 'rū'],
      ['प', 'pa'],
    ], { trailing: '' }),
    word('ddv-27-w15', 'separating', [
      ['पृ', 'pṛ'],
      ['थ', 'tha'],
      ['क्', 'k'],
    ], { trailing: '' }),
    word('ddv-27-w16', 'the act of', [
      ['कृ', 'kṛ'],
      ['तिः', 'tiḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
