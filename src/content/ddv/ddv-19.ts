import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv19: Chapter = {
  id: 'ddv-19',
  titleDev: 'अत्राप्यावृतिनाशेन विभाति ब्रह्मसर्गयोः',
  titleIast: 'atrāpyāvṛtināśena vibhāti brahmasargayoḥ',
  titleEn: 'Verse 19',
  status: 'ready',
  translation: 'Here too, when the veiling is destroyed, the distinction of Brahman and creation shines. The modification belongs to creation, never to Brahman.',
  glossary: [
    { term: 'atra', meaning: 'here' },
    { term: 'api', meaning: 'too' },
    { term: 'āvṛtināśena', meaning: 'by destruction of the veiling' },
    { term: 'vibhāti', meaning: 'shines' },
    { term: 'brahmasargayoḥ', meaning: 'of Brahman and creation' },
    { term: 'bhedaḥ', meaning: 'their distinction' },
    { term: 'tayoḥ', meaning: 'of those two' },
    { term: 'vikāraḥ', meaning: 'modification' },
    { term: 'syāt', meaning: 'would be' },
    { term: 'sarge', meaning: 'in creation' },
    { term: 'na', meaning: 'not' },
    { term: 'brahmaṇi', meaning: 'in Brahman' },
    { term: 'kvacit', meaning: 'anywhere' },
  ],
  root: group('ddv-19-verse', 'verse', 'Here too, when the veiling is destroyed, the distinction of Brahman and creation shines. The modification belongs to creation, never to Brahman.', [
    group('ddv-19-p1', 'phrase', 'Here too, with the destruction of the veil, the distinction of Brahman and creation becomes clear.', [
    word('ddv-19-w1', 'here', [
      ['अ', 'a'],
      ['त्रा', 'trā'],
    ], { trailing: '' }),
    word('ddv-19-w2', 'too', [
      ['प्या', 'pyā'],
    ], { trailing: '' }),
    word('ddv-19-w3', 'by destruction of the veiling', [
      ['वृ', 'vṛ'],
      ['ति', 'ti'],
      ['ना', 'nā'],
      ['शे', 'śe'],
      ['न', 'na'],
    ]),
    word('ddv-19-w4', 'shines', [
      ['वि', 'vi'],
      ['भा', 'bhā'],
      ['ति', 'ti'],
    ]),
    word('ddv-19-w5', 'of Brahman and creation', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['स', 'sa'],
      ['र्ग', 'rga'],
      ['योः', 'yoḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-19-p2', 'phrase', 'Change belongs to creation, never to Brahman.', [
    word('ddv-19-w6', 'their distinction', [
      ['भे', 'bhe'],
      ['द', 'da'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-19-w7', 'of those two', [
      ['त', 'ta'],
      ['यो', 'yo'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-19-w8', 'modification', [
      ['वि', 'vi'],
      ['का', 'kā'],
      ['रः', 'raḥ'],
    ]),
    word('ddv-19-w9', 'would be', [
      ['स्या', 'syā'],
      ['त्', 't'],
    ]),
    word('ddv-19-w10', 'in creation', [
      ['स', 'sa'],
      ['र्गे', 'rge'],
    ]),
    word('ddv-19-w11', 'not', [
      ['न', 'na'],
    ]),
    word('ddv-19-w12', 'in Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['णि', 'ṇi'],
    ]),
    word('ddv-19-w13', 'anywhere', [
      ['क्व', 'kva'],
      ['चि', 'ci'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
