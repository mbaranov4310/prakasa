import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv21: Chapter = {
  id: 'ddv-21',
  titleDev: 'खवाय्वग्निजलोर्वीषु देवतिर्यङ्नरादिषु',
  titleIast: 'khavāyvagnijalorvīṣu devatiryaṅnarādiṣu',
  titleEn: 'Verse 21',
  status: 'ready',
  translation: 'In ether, air, fire, water, and earth, and in gods, animals, humans, and the rest, Existence-Consciousness-Bliss is the same; form and name differ.',
  glossary: [
    { term: 'kha', meaning: 'ether' },
    { term: 'vāyu', meaning: 'air' },
    { term: 'agni', meaning: 'fire' },
    { term: 'jalorvīṣu', meaning: 'water and earth' },
    { term: 'deva', meaning: 'gods' },
    { term: 'tiryañc', meaning: 'animals' },
    { term: 'narādiṣu', meaning: 'humans, etc.' },
    { term: 'abhinnāḥ', meaning: 'undivided' },
    { term: 'sat', meaning: 'Existence' },
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'ānandāḥ', meaning: 'Bliss' },
    { term: 'bhidyete', meaning: 'the two differ' },
    { term: 'rūpa', meaning: 'form' },
    { term: 'nāmanī', meaning: 'and name' },
  ],
  root: group('ddv-21-verse', 'verse', 'In ether, air, fire, water, and earth, and in gods, animals, humans, and the rest, Existence-Consciousness-Bliss is the same; form and name differ.', [
    group('ddv-21-p1', 'phrase', 'In the five elements and in gods, animals, humans, and so on,', [
    word('ddv-21-w1', 'ether', [
      ['ख', 'kha'],
    ], { trailing: '' }),
    word('ddv-21-w2', 'air', [
      ['वा', 'vā'],
      ['य्व', 'yva'],
    ], { trailing: '' }),
    word('ddv-21-w3', 'fire', [
      ['ग्नि', 'gni'],
    ], { trailing: '' }),
    word('ddv-21-w4', 'water and earth', [
      ['ज', 'ja'],
      ['लो', 'lo'],
      ['र्वी', 'rvī'],
      ['षु', 'ṣu'],
    ]),
    word('ddv-21-w5', 'gods', [
      ['दे', 'de'],
      ['व', 'va'],
    ], { trailing: '' }),
    word('ddv-21-w6', 'animals', [
      ['ति', 'ti'],
      ['र्य', 'rya'],
      ['ङ्', 'ṅ'],
    ], { trailing: '' }),
    word('ddv-21-w7', 'humans, etc.', [
      ['न', 'na'],
      ['रा', 'rā'],
      ['दि', 'di'],
      ['षु', 'ṣu'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-21-p2', 'phrase', 'Existence-Consciousness-Bliss is undivided; form and name are what differ.', [
    word('ddv-21-w8', 'undivided', [
      ['अ', 'a'],
      ['भि', 'bhi'],
      ['न्नाः', 'nnāḥ'],
    ]),
    word('ddv-21-w9', 'Existence', [
      ['स', 'sa'],
      ['च्', 'c'],
    ], { trailing: '' }),
    word('ddv-21-w10', 'Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
    ], { trailing: '' }),
    word('ddv-21-w11', 'Bliss', [
      ['न', 'na'],
      ['न्दाः', 'ndāḥ'],
    ]),
    word('ddv-21-w12', 'the two differ', [
      ['भि', 'bhi'],
      ['द्ये', 'dye'],
      ['ते', 'te'],
    ]),
    word('ddv-21-w13', 'form', [
      ['रू', 'rū'],
      ['प', 'pa'],
    ], { trailing: '' }),
    word('ddv-21-w14', 'and name', [
      ['ना', 'nā'],
      ['म', 'ma'],
      ['नी', 'nī'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
