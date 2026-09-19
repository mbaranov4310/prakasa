import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv36: Chapter = {
  id: 'ddv-36',
  titleDev: 'Verse 36',
  titleIast: 'Verse 36',
  titleEn: 'Verse 36',
  status: 'ready',
  translation: 'The jīva is the reflection of Consciousness in the intellect; he is the enjoyer and the doer of karma. All this world of elements and elementals is the enjoyed.',
  glossary: [
    { term: 'jīvaḥ', meaning: 'the jīva' },
    { term: 'dhī', meaning: 'intellect' },
    { term: 'stha', meaning: 'standing in' },
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'ābhāsaḥ', meaning: 'the reflection' },
    { term: 'bhavet', meaning: 'would be' },
    { term: 'bhoktā', meaning: 'the enjoyer' },
    { term: 'hi', meaning: 'for' },
    { term: 'karma', meaning: 'karma' },
    { term: 'kṛt', meaning: 'the doer of' },
    { term: 'bhogya', meaning: 'the enjoyed' },
    { term: 'rūpam', meaning: 'of the nature of' },
    { term: 'idaṃ', meaning: 'this' },
    { term: 'sarvaṃ', meaning: 'all' },
    { term: 'jagat', meaning: 'the world' },
    { term: 'syāt', meaning: 'would be' },
    { term: 'bhūta', meaning: 'elements' },
    { term: 'bhautikam', meaning: 'and made of elements' },
  ],
  root: group('ddv-36-verse', 'verse', 'The jīva is the reflection of Consciousness in the intellect; he is the enjoyer and the doer of karma. All this world of elements and elementals is the enjoyed.', [
    group('ddv-36-p1', 'phrase', 'The jīva, a reflection in the intellect, is enjoyer and agent.', [
    word('ddv-36-w1', 'the jīva', [
      ['जी', 'jī'],
      ['वो', 'vo'],
    ]),
    word('ddv-36-w2', 'intellect', [
      ['धी', 'dhī'],
    ], { trailing: '' }),
    word('ddv-36-w3', 'standing in', [
      ['स्थ', 'stha'],
    ], { trailing: '' }),
    word('ddv-36-w4', 'Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
    ], { trailing: '' }),
    word('ddv-36-w5', 'the reflection', [
      ['भा', 'bhā'],
      ['सो', 'so'],
    ]),
    word('ddv-36-w6', 'would be', [
      ['भ', 'bha'],
      ['वे', 've'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-36-w7', 'the enjoyer', [
      ['भो', 'bho'],
      ['क्ता', 'ktā'],
    ]),
    word('ddv-36-w8', 'for', [
      ['हि', 'hi'],
    ]),
    word('ddv-36-w9', 'karma', [
      ['क', 'ka'],
      ['र्म', 'rma'],
    ], { trailing: '' }),
    word('ddv-36-w10', 'the doer of', [
      ['कृ', 'kṛ'],
      ['त्', 't'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-36-p2', 'phrase', 'All this world of elements and their products is what is enjoyed.', [
    word('ddv-36-w11', 'the enjoyed', [
      ['भो', 'bho'],
      ['ग्य', 'gya'],
    ], { trailing: '' }),
    word('ddv-36-w12', 'of the nature of', [
      ['रू', 'rū'],
      ['प', 'pa'],
      ['मि', 'mi'],
    ], { trailing: '' }),
    word('ddv-36-w13', 'this', [
      ['दं', 'daṃ'],
    ]),
    word('ddv-36-w14', 'all', [
      ['स', 'sa'],
      ['र्वं', 'rvaṃ'],
    ]),
    word('ddv-36-w15', 'the world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['त्', 't'],
    ]),
    word('ddv-36-w16', 'would be', [
      ['स्या', 'syā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-36-w17', 'elements', [
      ['भू', 'bhū'],
      ['त', 'ta'],
    ], { trailing: '' }),
    word('ddv-36-w18', 'and made of elements', [
      ['भौ', 'bhau'],
      ['ति', 'ti'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
