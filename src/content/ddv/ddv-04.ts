import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv04: Chapter = {
  id: 'ddv-04',
  titleDev: 'Verse 4',
  titleIast: 'Verse 4',
  titleEn: 'Verse 4',
  status: 'ready',
  translation: 'Consciousness illumines, as a unity, desire, determination and doubt, faith and want of faith, steadiness and its opposite, modesty, understanding, fear, and such other mental states.',
  glossary: [
    { term: 'kāmaḥ', meaning: 'desire' },
    { term: 'saṅkalpa', meaning: 'determination' },
    { term: 'sandehau', meaning: 'and doubt' },
    { term: 'śraddhā', meaning: 'faith' },
    { term: 'aśraddhe', meaning: 'and lack of faith' },
    { term: 'dhṛti', meaning: 'steadiness' },
    { term: 'itare', meaning: 'and its opposite' },
    { term: 'hrīḥ', meaning: 'modesty' },
    { term: 'dhīḥ', meaning: 'understanding' },
    { term: 'bhīḥ', meaning: 'fear' },
    { term: 'iti', meaning: 'thus' },
    { term: 'evamādīn', meaning: 'and so on' },
    { term: 'bhāsayati', meaning: 'illumines' },
    { term: 'ekadhā', meaning: 'as one' },
    { term: 'citiḥ', meaning: 'Consciousness' },
  ],
  root: group('ddv-04-verse', 'verse', 'Consciousness illumines, as a unity, desire, determination and doubt, faith and want of faith, steadiness and its opposite, modesty, understanding, fear, and such other mental states.', [
    group('ddv-04-p1', 'phrase', 'Desire, resolve and doubt, faith and lack of faith, steadiness and its opposite —', [
    word('ddv-04-w1', 'desire', [
      ['का', 'kā'],
      ['मः', 'maḥ'],
    ]),
    word('ddv-04-w2', 'determination', [
      ['स', 'sa'],
      ['ङ्क', 'ṅka'],
      ['ल्प', 'lpa'],
    ], { trailing: '' }),
    word('ddv-04-w3', 'and doubt', [
      ['स', 'sa'],
      ['न्दे', 'nde'],
      ['हौ', 'hau'],
    ]),
    word('ddv-04-w4', 'faith', [
      ['श्र', 'śra'],
      ['द्धाऽ', 'ddhā\''],
    ], { trailing: '' }),
    word('ddv-04-w5', 'and lack of faith', [
      ['श्र', 'śra'],
      ['द्धे', 'ddhe'],
    ]),
    word('ddv-04-w6', 'steadiness', [
      ['धृ', 'dhṛ'],
      ['ती', 'tī'],
    ], { trailing: '' }),
    word('ddv-04-w7', 'and its opposite', [
      ['त', 'ta'],
      ['रे', 're'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-04-p2', 'phrase', 'modesty, understanding, fear, and the rest: Consciousness illumines them all as one.', [
    word('ddv-04-w8', 'modesty', [
      ['ह्री', 'hrī'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-04-w9', 'understanding', [
      ['धी', 'dhī'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-04-w10', 'fear', [
      ['भी', 'bhī'],
      ['रि', 'ri'],
    ], { trailing: '' }),
    word('ddv-04-w11', 'thus', [
      ['त्ये', 'tye'],
    ], { trailing: '' }),
    word('ddv-04-w12', 'and so on', [
      ['व', 'va'],
      ['मा', 'mā'],
      ['दी', 'dī'],
      ['न्', 'n'],
    ]),
    word('ddv-04-w13', 'illumines', [
      ['भा', 'bhā'],
      ['स', 'sa'],
      ['य', 'ya'],
      ['त्ये', 'tye'],
    ], { trailing: '' }),
    word('ddv-04-w14', 'as one', [
      ['क', 'ka'],
      ['धा', 'dhā'],
    ]),
    word('ddv-04-w15', 'Consciousness', [
      ['चि', 'ci'],
      ['तिः', 'tiḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
