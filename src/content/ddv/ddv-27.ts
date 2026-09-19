import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv27: Chapter = {
  id: 'ddv-27',
  titleDev: 'हृदीव बाह्यदेशेऽपि यस्मिन् कस्मिंश्च वस्तुनि',
  titleIast: 'hṛdīva bāhyadeśe\'pi yasmin kasmiṃśca vastuni',
  titleEn: 'Verse 27',
  status: 'ready',
  translation: 'The first samādhi, even toward some outer thing, is separating name and form from sheer Existence.',
  glossary: [
    { term: 'hṛdi', meaning: 'in the heart' },
    { term: 'iva', meaning: 'as' },
    { term: 'bāhyadeśe', meaning: 'in an outer place' },
    { term: 'api', meaning: 'even' },
    { term: 'yasmin', meaning: 'in whichever' },
    { term: 'kasmiṃśca', meaning: 'and in whatever' },
    { term: 'vastuni', meaning: 'thing' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'ādyaḥ', meaning: 'the first' },
    { term: 'sanmātrāt', meaning: 'from Existence alone' },
    { term: 'nāmarūpapṛthakkṛtiḥ', meaning: 'is the separating of name and form' },
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
    word('ddv-27-w3', 'in an outer place', [
      ['बा', 'bā'],
      ['ह्य', 'hya'],
      ['दे', 'de'],
      ['शेऽ', 'śe\''],
    ], { trailing: '' }),
    word('ddv-27-w4', 'even', [
      ['पि', 'pi'],
    ]),
    word('ddv-27-w5', 'in whichever', [
      ['य', 'ya'],
      ['स्मि', 'smi'],
      ['न्', 'n'],
    ]),
    word('ddv-27-w6', 'and in whatever', [
      ['क', 'ka'],
      ['स्मिं', 'smiṃ'],
      ['श्च', 'śca'],
    ]),
    word('ddv-27-w7', 'thing', [
      ['व', 'va'],
      ['स्तु', 'stu'],
      ['नि', 'ni'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-27-p2', 'phrase', 'the first samādhi is separating name and form from Existence alone.', [
    word('ddv-27-w8', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धि', 'dhi'],
      ['रा', 'rā'],
    ], { trailing: '' }),
    word('ddv-27-w9', 'the first', [
      ['द्यः', 'dyaḥ'],
    ]),
    word('ddv-27-w10', 'from Existence alone', [
      ['स', 'sa'],
      ['न्मा', 'nmā'],
      ['त्रा', 'trā'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-27-w11', 'is the separating of name and form', [
      ['ना', 'nā'],
      ['म', 'ma'],
      ['रू', 'rū'],
      ['प', 'pa'],
      ['पृ', 'pṛ'],
      ['थ', 'tha'],
      ['क्कृ', 'kkṛ'],
      ['तिः', 'tiḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
