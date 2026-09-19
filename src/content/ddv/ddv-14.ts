import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv14: Chapter = {
  id: 'ddv-14',
  titleDev: 'Verse 14',
  titleIast: 'Verse 14',
  titleEn: 'Verse 14',
  status: 'ready',
  translation: 'Creation is the spreading of all names and forms in the Reality that is Existence-Consciousness-Bliss, which is Brahman — like foam and the rest in the ocean.',
  glossary: [
    { term: 'sṛṣṭiḥ', meaning: 'creation' },
    { term: 'nāma', meaning: 'is called' },
    { term: 'brahma', meaning: 'Brahman' },
    { term: 'rūpe', meaning: 'in that which has the nature of' },
    { term: 'sat', meaning: 'Existence' },
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'ānanda', meaning: 'Bliss' },
    { term: 'vastuni', meaning: 'in the entity' },
    { term: 'abdhau', meaning: 'in the ocean' },
    { term: 'phena', meaning: 'foam' },
    { term: 'ādivat', meaning: 'and so on, like' },
    { term: 'sarva', meaning: 'all' },
    { term: 'rūpa', meaning: 'and forms' },
    { term: 'prasāraṇā', meaning: 'the spreading' },
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
    word('ddv-14-w3', 'Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
    ], { trailing: '' }),
    word('ddv-14-w4', 'in that which has the nature of', [
      ['रू', 'rū'],
      ['पे', 'pe'],
    ]),
    word('ddv-14-w5', 'Existence', [
      ['स', 'sa'],
      ['च्', 'c'],
    ], { trailing: '' }),
    word('ddv-14-w6', 'Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
    ], { trailing: '' }),
    word('ddv-14-w7', 'Bliss', [
      ['न', 'na'],
      ['न्द', 'nda'],
    ], { trailing: '' }),
    word('ddv-14-w8', 'in the entity', [
      ['व', 'va'],
      ['स्तु', 'stu'],
      ['नि', 'ni'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-14-p2', 'phrase', 'Like foam etc. in the ocean: the spreading of all names and forms.', [
    word('ddv-14-w9', 'in the ocean', [
      ['अ', 'a'],
      ['ब्धौ', 'bdhau'],
    ]),
    word('ddv-14-w10', 'foam', [
      ['फे', 'phe'],
      ['ना', 'nā'],
    ], { trailing: '' }),
    word('ddv-14-w11', 'and so on, like', [
      ['दि', 'di'],
      ['व', 'va'],
      ['त्', 't'],
    ]),
    word('ddv-14-w12', 'all', [
      ['स', 'sa'],
      ['र्व', 'rva'],
    ], { trailing: '' }),
    word('ddv-14-w13', 'names', [
      ['ना', 'nā'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-14-w14', 'and forms', [
      ['रू', 'rū'],
      ['प', 'pa'],
    ], { trailing: '' }),
    word('ddv-14-w15', 'the spreading', [
      ['प्र', 'pra'],
      ['सा', 'sā'],
      ['र', 'ra'],
      ['णा', 'ṇā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
