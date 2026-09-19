import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv03: Chapter = {
  id: 'ddv-03',
  titleDev: 'आन्ध्यमान्द्यपटुत्वेषु नेत्रधर्मेषु चैकधा',
  titleIast: 'āndhyamāndyapaṭutveṣu netradharmeṣu caikadhā',
  titleEn: 'Verse 3',
  status: 'ready',
  translation: 'Blindness, dullness, and sharpness — properties of the eye — the mind cognizes as a unity. This also applies to the ear, the skin, and the rest.',
  glossary: [
    { term: 'āndhyamāndyapaṭutveṣu', meaning: 'in blindness, dullness, and sharpness' },
    { term: 'netradharmeṣu', meaning: 'in the properties of the eye' },
    { term: 'ca', meaning: 'and' },
    { term: 'ekadhā', meaning: 'as one' },
    { term: 'saṅkalpayet', meaning: 'cognizes' },
    { term: 'manaḥ', meaning: 'the mind' },
    { term: 'śrotratvagādau', meaning: 'in ear, skin, etc.' },
    { term: 'yojyatām', meaning: 'let it be applied' },
    { term: 'idam', meaning: 'this' },
  ],
  root: group('ddv-03-verse', 'verse', 'Blindness, dullness, and sharpness — properties of the eye — the mind cognizes as a unity. This also applies to the ear, the skin, and the rest.', [
    group('ddv-03-p1', 'phrase', 'In the eye’s changing states — blindness, dullness, sharpness — the mind cognizes them as one.', [
    word('ddv-03-w1', 'in blindness, dullness, and sharpness', [
      ['आ', 'ā'],
      ['न्ध्य', 'ndhya'],
      ['मा', 'mā'],
      ['न्द्य', 'ndya'],
      ['प', 'pa'],
      ['टु', 'ṭu'],
      ['त्वे', 'tve'],
      ['षु', 'ṣu'],
    ]),
    word('ddv-03-w2', 'in the properties of the eye', [
      ['ने', 'ne'],
      ['त्र', 'tra'],
      ['ध', 'dha'],
      ['र्मे', 'rme'],
      ['षु', 'ṣu'],
    ]),
    word('ddv-03-w3', 'and', [
      ['चै', 'cai'],
    ], { trailing: '' }),
    word('ddv-03-w4', 'as one', [
      ['क', 'ka'],
      ['धा', 'dhā'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-03-p2', 'phrase', 'The same holds for ear, skin, and the other senses.', [
    word('ddv-03-w5', 'cognizes', [
      ['स', 'sa'],
      ['ङ्क', 'ṅka'],
      ['ल्प', 'lpa'],
      ['ये', 'ye'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-03-w6', 'the mind', [
      ['म', 'ma'],
      ['नः', 'naḥ'],
    ]),
    word('ddv-03-w7', 'in ear, skin, etc.', [
      ['श्रो', 'śro'],
      ['त्र', 'tra'],
      ['त्व', 'tva'],
      ['गा', 'gā'],
      ['दौ', 'dau'],
    ]),
    word('ddv-03-w8', 'let it be applied', [
      ['यो', 'yo'],
      ['ज्य', 'jya'],
      ['ता', 'tā'],
      ['मि', 'mi'],
    ], { trailing: '' }),
    word('ddv-03-w9', 'this', [
      ['द', 'da'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
