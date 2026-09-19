import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv39: Chapter = {
  id: 'ddv-39',
  titleDev: 'प्रतीतिकाल एवैते स्थितत्वात् प्रातिभासिके',
  titleIast: 'pratītikāla evaite sthitatvāt prātibhāsike',
  titleEn: 'Verse 39',
  status: 'ready',
  translation: 'These two are apparent because they existed only during the time of appearing. One awakened from a dream has no standing of those two again in dream.',
  glossary: [
    { term: 'pratīti', meaning: 'appearing' },
    { term: 'kāla', meaning: 'the time of' },
    { term: 'eva', meaning: 'only' },
    { term: 'ete', meaning: 'these two' },
    { term: 'sthitatvāt', meaning: 'because they stood (then)' },
    { term: 'prātibhāsike', meaning: 'in the apparent (order)' },
    { term: 'na', meaning: 'not' },
    { term: 'hi', meaning: 'indeed' },
    { term: 'svapna', meaning: 'from dream' },
    { term: 'prabuddhasya', meaning: 'of one awakened' },
    { term: 'punaḥ', meaning: 'again' },
    { term: 'svapne', meaning: 'in dream' },
    { term: 'sthitiḥ', meaning: 'is the standing' },
    { term: 'tayoḥ', meaning: 'of those two' },
  ],
  root: group('ddv-39-verse', 'verse', 'These two are apparent because they existed only during the time of appearing. One awakened from a dream has no standing of those two again in dream.', [
    group('ddv-39-p1', 'phrase', 'They stand only while appearing, so they are apparent.', [
    word('ddv-39-w1', 'appearing', [
      ['प्र', 'pra'],
      ['ती', 'tī'],
      ['ति', 'ti'],
    ], { trailing: '' }),
    word('ddv-39-w2', 'the time of', [
      ['का', 'kā'],
      ['ल', 'la'],
    ]),
    word('ddv-39-w3', 'only', [
      ['ए', 'e'],
      ['वै', 'vai'],
    ], { trailing: '' }),
    word('ddv-39-w4', 'these two', [
      ['ते', 'te'],
    ]),
    word('ddv-39-w5', 'because they stood (then)', [
      ['स्थि', 'sthi'],
      ['त', 'ta'],
      ['त्वा', 'tvā'],
      ['त्', 't'],
    ]),
    word('ddv-39-w6', 'in the apparent (order)', [
      ['प्रा', 'prā'],
      ['ति', 'ti'],
      ['भा', 'bhā'],
      ['सि', 'si'],
      ['के', 'ke'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-39-p2', 'phrase', 'For one woken from dream, those two have no status again in dream.', [
    word('ddv-39-w7', 'not', [
      ['न', 'na'],
    ]),
    word('ddv-39-w8', 'indeed', [
      ['हि', 'hi'],
    ]),
    word('ddv-39-w9', 'from dream', [
      ['स्व', 'sva'],
      ['प्न', 'pna'],
    ], { trailing: '' }),
    word('ddv-39-w10', 'of one awakened', [
      ['प्र', 'pra'],
      ['बु', 'bu'],
      ['द्ध', 'ddha'],
      ['स्य', 'sya'],
    ]),
    word('ddv-39-w11', 'again', [
      ['पु', 'pu'],
      ['नः', 'naḥ'],
    ]),
    word('ddv-39-w12', 'in dream', [
      ['स्व', 'sva'],
      ['प्ने', 'pne'],
    ]),
    word('ddv-39-w13', 'is the standing', [
      ['स्थि', 'sthi'],
      ['ति', 'ti'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-39-w14', 'of those two', [
      ['त', 'ta'],
      ['योः', 'yoḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
