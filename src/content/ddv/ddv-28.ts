import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv28: Chapter = {
  id: 'ddv-28',
  titleDev: 'अखण्डैकरसं वस्तु सच्चिदानन्दलक्षणम्',
  titleIast: 'akhaṇḍaikarasaṃ vastu saccidānandalakṣaṇam',
  titleEn: 'Verse 28',
  status: 'ready',
  translation: 'Unbroken thought “this is the undivided Reality whose mark is Existence-Consciousness-Bliss” is the middle samādhi.',
  glossary: [
    { term: 'akhaṇḍa', meaning: 'undivided' },
    { term: 'ekarasam', meaning: 'of one taste' },
    { term: 'vastu', meaning: 'the Reality' },
    { term: 'sat', meaning: 'Existence' },
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'ānanda', meaning: 'Bliss' },
    { term: 'lakṣaṇam', meaning: 'whose mark is' },
    { term: 'iti', meaning: 'thus' },
    { term: 'avicchinna', meaning: 'uninterrupted' },
    { term: 'cintā', meaning: 'thought' },
    { term: 'iyaṃ', meaning: 'this' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'madhyamaḥ', meaning: 'the middle' },
    { term: 'bhavet', meaning: 'would be' },
  ],
  root: group('ddv-28-verse', 'verse', 'Unbroken thought “this is the undivided Reality whose mark is Existence-Consciousness-Bliss” is the middle samādhi.', [
    group('ddv-28-p1', 'phrase', 'The undivided Reality marked as Existence-Consciousness-Bliss —', [
    word('ddv-28-w1', 'undivided', [
      ['अ', 'a'],
      ['ख', 'kha'],
      ['ण्डै', 'ṇḍai'],
    ], { trailing: '' }),
    word('ddv-28-w2', 'of one taste', [
      ['क', 'ka'],
      ['र', 'ra'],
      ['सं', 'saṃ'],
    ]),
    word('ddv-28-w3', 'the Reality', [
      ['व', 'va'],
      ['स्तु', 'stu'],
    ]),
    word('ddv-28-w4', 'Existence', [
      ['स', 'sa'],
      ['च्', 'c'],
    ], { trailing: '' }),
    word('ddv-28-w5', 'Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
    ], { trailing: '' }),
    word('ddv-28-w6', 'Bliss', [
      ['न', 'na'],
      ['न्द', 'nda'],
    ], { trailing: '' }),
    word('ddv-28-w7', 'whose mark is', [
      ['ल', 'la'],
      ['क्ष', 'kṣa'],
      ['ण', 'ṇa'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-28-p2', 'phrase', 'this uninterrupted reflection is the middle samādhi.', [
    word('ddv-28-w8', 'thus', [
      ['इ', 'i'],
      ['त्य', 'tya'],
    ], { trailing: '' }),
    word('ddv-28-w9', 'uninterrupted', [
      ['वि', 'vi'],
      ['च्छि', 'cchi'],
      ['न्न', 'nna'],
    ], { trailing: '' }),
    word('ddv-28-w10', 'thought', [
      ['चि', 'ci'],
      ['न्ते', 'nte'],
    ], { trailing: '' }),
    word('ddv-28-w11', 'this', [
      ['यं', 'yaṃ'],
    ]),
    word('ddv-28-w12', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धि', 'dhi'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-28-w13', 'the middle', [
      ['म', 'ma'],
      ['ध्य', 'dhya'],
      ['मो', 'mo'],
    ]),
    word('ddv-28-w14', 'would be', [
      ['भ', 'bha'],
      ['वे', 've'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
