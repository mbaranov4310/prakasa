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
    { term: 'akhaṇḍaikarasaṃ', meaning: 'undivided, of one taste' },
    { term: 'vastu', meaning: 'the Reality' },
    { term: 'saccidānandalakṣaṇam', meaning: 'whose mark is Existence-Consciousness-Bliss' },
    { term: 'iti', meaning: 'thus' },
    { term: 'avicchinnacintā', meaning: 'uninterrupted thought' },
    { term: 'iyaṃ', meaning: 'this' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'madhyamaḥ', meaning: 'the middle' },
    { term: 'bhavet', meaning: 'would be' },
  ],
  root: group('ddv-28-verse', 'verse', 'Unbroken thought “this is the undivided Reality whose mark is Existence-Consciousness-Bliss” is the middle samādhi.', [
    group('ddv-28-p1', 'phrase', 'The undivided Reality marked as Existence-Consciousness-Bliss —', [
    word('ddv-28-w1', 'undivided, of one taste', [
      ['अ', 'a'],
      ['ख', 'kha'],
      ['ण्डै', 'ṇḍai'],
      ['क', 'ka'],
      ['र', 'ra'],
      ['सं', 'saṃ'],
    ]),
    word('ddv-28-w2', 'the Reality', [
      ['व', 'va'],
      ['स्तु', 'stu'],
    ]),
    word('ddv-28-w3', 'whose mark is Existence-Consciousness-Bliss', [
      ['स', 'sa'],
      ['च्चि', 'cci'],
      ['दा', 'dā'],
      ['न', 'na'],
      ['न्द', 'nda'],
      ['ल', 'la'],
      ['क्ष', 'kṣa'],
      ['ण', 'ṇa'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-28-p2', 'phrase', 'this uninterrupted reflection is the middle samādhi.', [
    word('ddv-28-w4', 'thus', [
      ['इ', 'i'],
      ['त्य', 'tya'],
    ], { trailing: '' }),
    word('ddv-28-w5', 'uninterrupted thought', [
      ['वि', 'vi'],
      ['च्छि', 'cchi'],
      ['न्न', 'nna'],
      ['चि', 'ci'],
      ['न्ते', 'nte'],
    ], { trailing: '' }),
    word('ddv-28-w6', 'this', [
      ['यं', 'yaṃ'],
    ]),
    word('ddv-28-w7', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धि', 'dhi'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-28-w8', 'the middle', [
      ['म', 'ma'],
      ['ध्य', 'dhya'],
      ['मो', 'mo'],
    ]),
    word('ddv-28-w9', 'would be', [
      ['भ', 'bha'],
      ['वे', 've'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
