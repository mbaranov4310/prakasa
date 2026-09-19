import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv17: Chapter = {
  id: 'ddv-17',
  titleDev: 'अस्य जीवत्वमारोपात् साक्षिण्यप्यवभासते',
  titleIast: 'asya jīvatvamāropāt sākṣiṇyapyavabhāsate',
  titleEn: 'Verse 17',
  status: 'ready',
  translation: 'By superimposition, that jīva-hood appears even in the Witness. When the veiling is destroyed and the distinction shines, it goes away.',
  glossary: [
    { term: 'asya', meaning: 'of this' },
    { term: 'jīvatvam', meaning: 'jīva-hood' },
    { term: 'āropāt', meaning: 'from superimposition' },
    { term: 'sākṣiṇi', meaning: 'in the Witness' },
    { term: 'api', meaning: 'even' },
    { term: 'avabhāsate', meaning: 'it appears' },
    { term: 'āvṛtau', meaning: 'when the veiling' },
    { term: 'tu', meaning: 'but' },
    { term: 'vinaṣṭāyāṃ', meaning: 'has been destroyed' },
    { term: 'bhede', meaning: 'when the distinction' },
    { term: 'bhāte', meaning: 'having shone' },
    { term: 'apayāti', meaning: 'goes away' },
    { term: 'tat', meaning: 'that' },
  ],
  root: group('ddv-17-verse', 'verse', 'By superimposition, that jīva-hood appears even in the Witness. When the veiling is destroyed and the distinction shines, it goes away.', [
    group('ddv-17-p1', 'phrase', 'Jīva-hood superimposed appears even on the Witness.', [
    word('ddv-17-w1', 'of this', [
      ['अ', 'a'],
      ['स्य', 'sya'],
    ]),
    word('ddv-17-w2', 'jīva-hood', [
      ['जी', 'jī'],
      ['व', 'va'],
      ['त्व', 'tva'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-17-w3', 'from superimposition', [
      ['रो', 'ro'],
      ['पा', 'pā'],
      ['त्', 't'],
    ]),
    word('ddv-17-w4', 'in the Witness', [
      ['सा', 'sā'],
      ['क्षि', 'kṣi'],
      ['ण्य', 'ṇya'],
    ], { trailing: '' }),
    word('ddv-17-w5', 'even', [
      ['प्य', 'pya'],
    ], { trailing: '' }),
    word('ddv-17-w6', 'it appears', [
      ['व', 'va'],
      ['भा', 'bhā'],
      ['स', 'sa'],
      ['ते', 'te'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-17-p2', 'phrase', 'When the veil is gone and the distinction is clear, it disappears.', [
    word('ddv-17-w7', 'when the veiling', [
      ['आ', 'ā'],
      ['वृ', 'vṛ'],
      ['तौ', 'tau'],
    ]),
    word('ddv-17-w8', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-17-w9', 'has been destroyed', [
      ['वि', 'vi'],
      ['न', 'na'],
      ['ष्टा', 'ṣṭā'],
      ['यां', 'yāṃ'],
    ]),
    word('ddv-17-w10', 'when the distinction', [
      ['भे', 'bhe'],
      ['दे', 'de'],
    ]),
    word('ddv-17-w11', 'having shone', [
      ['भा', 'bhā'],
      ['तेऽ', 'te\''],
    ], { trailing: '' }),
    word('ddv-17-w12', 'goes away', [
      ['प', 'pa'],
      ['या', 'yā'],
      ['ति', 'ti'],
    ]),
    word('ddv-17-w13', 'that', [
      ['त', 'ta'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
