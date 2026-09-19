import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv14: Chapter = {
  id: 'ddv-14',
  titleDev: 'सृष्टिर्नाम ब्रह्मरूपे सच्चिदानन्दवस्तुनि',
  titleIast: 'sṛṣṭirnāma brahmarūpe saccidānandavastuni',
  titleEn: 'Verse 14',
  status: 'ready',
  translation: 'Creation is the spreading of all names and forms in the Reality that is Existence-Consciousness-Bliss, which is Brahman — like foam and the rest in the ocean.',
  glossary: [
    { term: 'sṛṣṭiḥ', meaning: 'creation' },
    { term: 'nāma', meaning: 'is called' },
    { term: 'brahmarūpe', meaning: 'in that which has the nature of Brahman' },
    { term: 'saccidānandavastuni', meaning: 'in the entity that is Existence-Consciousness-Bliss' },
    { term: 'abdhau', meaning: 'in the ocean' },
    { term: 'phenādivat', meaning: 'like foam and so on' },
    { term: 'sarvanāmarūpaprasāraṇā', meaning: 'the spreading of all names and forms' },
  ],
  root: group('ddv-14-verse', 'verse', 'Creation is the spreading of all names and forms in the Reality that is Existence-Consciousness-Bliss, which is Brahman — like foam and the rest in the ocean.', [
    group('ddv-14-p1', 'phrase', 'Creation is (said to be) in the Brahman-reality that is Existence-Consciousness-Bliss.', [
    word('ddv-14-w1', 'creation', [
      ['सृ', 'sṛ'],
      ['ष्टि', 'ṣṭi'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-14-w2', 'is called', [
      ['ना', 'nā'],
      ['म', 'ma'],
    ]),
    word('ddv-14-w3', 'in that which has the nature of Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['रू', 'rū'],
      ['पे', 'pe'],
    ]),
    word('ddv-14-w4', 'in the entity that is Existence-Consciousness-Bliss', [
      ['स', 'sa'],
      ['च्चि', 'cci'],
      ['दा', 'dā'],
      ['न', 'na'],
      ['न्द', 'nda'],
      ['व', 'va'],
      ['स्तु', 'stu'],
      ['नि', 'ni'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-14-p2', 'phrase', 'Like foam etc. in the ocean: the spreading of all names and forms.', [
    word('ddv-14-w5', 'in the ocean', [
      ['अ', 'a'],
      ['ब्धौ', 'bdhau'],
    ]),
    word('ddv-14-w6', 'like foam and so on', [
      ['फे', 'phe'],
      ['ना', 'nā'],
      ['दि', 'di'],
      ['व', 'va'],
      ['त्', 't'],
    ]),
    word('ddv-14-w7', 'the spreading of all names and forms', [
      ['स', 'sa'],
      ['र्व', 'rva'],
      ['ना', 'nā'],
      ['म', 'ma'],
      ['रू', 'rū'],
      ['प', 'pa'],
      ['प्र', 'pra'],
      ['सा', 'sā'],
      ['र', 'ra'],
      ['णा', 'ṇā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
