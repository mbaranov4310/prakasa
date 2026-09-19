import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv36: Chapter = {
  id: 'ddv-36',
  titleDev: 'जीवो धीस्थचिदाभासो भवेद्भोक्ता हि कर्मकृत्',
  titleIast: 'jīvo dhīsthacidābhāso bhavedbhoktā hi karmakṛt',
  titleEn: 'Verse 36',
  status: 'ready',
  translation: 'The jīva is the reflection of Consciousness in the intellect; he is the enjoyer and the doer of karma. All this world of elements and elementals is the enjoyed.',
  glossary: [
    { term: 'jīvaḥ', meaning: 'the jīva' },
    { term: 'dhīsthacidābhāsaḥ', meaning: 'is the reflection of Consciousness standing in the intellect' },
    { term: 'bhavet', meaning: 'would be' },
    { term: 'bhoktā', meaning: 'the enjoyer' },
    { term: 'hi', meaning: 'for' },
    { term: 'karmakṛt', meaning: 'the doer of karma' },
    { term: 'bhogyarūpam', meaning: 'of the nature of the enjoyed' },
    { term: 'idaṃ', meaning: 'this' },
    { term: 'sarvaṃ', meaning: 'all' },
    { term: 'jagat', meaning: 'the world' },
    { term: 'syāt', meaning: 'would be' },
    { term: 'bhūtabhautikam', meaning: 'elemental and made of elements' },
  ],
  root: group('ddv-36-verse', 'verse', 'The jīva is the reflection of Consciousness in the intellect; he is the enjoyer and the doer of karma. All this world of elements and elementals is the enjoyed.', [
    group('ddv-36-p1', 'phrase', 'The jīva, a reflection in the intellect, is enjoyer and agent.', [
    word('ddv-36-w1', 'the jīva', [
      ['जी', 'jī'],
      ['वो', 'vo'],
    ]),
    word('ddv-36-w2', 'is the reflection of Consciousness standing in the intellect', [
      ['धी', 'dhī'],
      ['स्थ', 'stha'],
      ['चि', 'ci'],
      ['दा', 'dā'],
      ['भा', 'bhā'],
      ['सो', 'so'],
    ]),
    word('ddv-36-w3', 'would be', [
      ['भ', 'bha'],
      ['वे', 've'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-36-w4', 'the enjoyer', [
      ['भो', 'bho'],
      ['क्ता', 'ktā'],
    ]),
    word('ddv-36-w5', 'for', [
      ['हि', 'hi'],
    ]),
    word('ddv-36-w6', 'the doer of karma', [
      ['क', 'ka'],
      ['र्म', 'rma'],
      ['कृ', 'kṛ'],
      ['त्', 't'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-36-p2', 'phrase', 'All this world of elements and their products is what is enjoyed.', [
    word('ddv-36-w7', 'of the nature of the enjoyed', [
      ['भो', 'bho'],
      ['ग्य', 'gya'],
      ['रू', 'rū'],
      ['प', 'pa'],
      ['मि', 'mi'],
    ], { trailing: '' }),
    word('ddv-36-w8', 'this', [
      ['दं', 'daṃ'],
    ]),
    word('ddv-36-w9', 'all', [
      ['स', 'sa'],
      ['र्वं', 'rvaṃ'],
    ]),
    word('ddv-36-w10', 'the world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['त्', 't'],
    ]),
    word('ddv-36-w11', 'would be', [
      ['स्या', 'syā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-36-w12', 'elemental and made of elements', [
      ['भू', 'bhū'],
      ['त', 'ta'],
      ['भौ', 'bhau'],
      ['ति', 'ti'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
