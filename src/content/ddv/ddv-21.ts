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
    { term: 'khavāyvagnijalorvīṣu', meaning: 'in ether, air, fire, water, and earth' },
    { term: 'devatiryaṅnarādiṣu', meaning: 'in gods, animals, humans, etc.' },
    { term: 'abhinnāḥ', meaning: 'undivided' },
    { term: 'saccidānandāḥ', meaning: 'Existence-Consciousness-Bliss' },
    { term: 'bhidyete', meaning: 'the two differ' },
    { term: 'rūpanāmanī', meaning: 'form and name' },
  ],
  root: group('ddv-21-verse', 'verse', 'In ether, air, fire, water, and earth, and in gods, animals, humans, and the rest, Existence-Consciousness-Bliss is the same; form and name differ.', [
    group('ddv-21-p1', 'phrase', 'In the five elements and in gods, animals, humans, and so on,', [
    word('ddv-21-w1', 'in ether, air, fire, water, and earth', [
      ['ख', 'kha'],
      ['वा', 'vā'],
      ['य्व', 'yva'],
      ['ग्नि', 'gni'],
      ['ज', 'ja'],
      ['लो', 'lo'],
      ['र्वी', 'rvī'],
      ['षु', 'ṣu'],
    ]),
    word('ddv-21-w2', 'in gods, animals, humans, etc.', [
      ['दे', 'de'],
      ['व', 'va'],
      ['ति', 'ti'],
      ['र्य', 'rya'],
      ['ङ्न', 'ṅna'],
      ['रा', 'rā'],
      ['दि', 'di'],
      ['षु', 'ṣu'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-21-p2', 'phrase', 'Existence-Consciousness-Bliss is undivided; form and name are what differ.', [
    word('ddv-21-w3', 'undivided', [
      ['अ', 'a'],
      ['भि', 'bhi'],
      ['न्नाः', 'nnāḥ'],
    ]),
    word('ddv-21-w4', 'Existence-Consciousness-Bliss', [
      ['स', 'sa'],
      ['च्चि', 'cci'],
      ['दा', 'dā'],
      ['न', 'na'],
      ['न्दाः', 'ndāḥ'],
    ]),
    word('ddv-21-w5', 'the two differ', [
      ['भि', 'bhi'],
      ['द्ये', 'dye'],
      ['ते', 'te'],
    ]),
    word('ddv-21-w6', 'form and name', [
      ['रू', 'rū'],
      ['प', 'pa'],
      ['ना', 'nā'],
      ['म', 'ma'],
      ['नी', 'nī'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
