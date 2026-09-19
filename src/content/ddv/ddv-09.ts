import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv09: Chapter = {
  id: 'ddv-09',
  titleDev: 'Verse 9',
  titleIast: 'Verse 9',
  titleEn: 'Verse 9',
  status: 'ready',
  translation: 'Of the two that are taken as real and mutually related, the natural identification never ceases. The other two cease, in order, when karma is exhausted and when awakening comes.',
  glossary: [
    { term: 'sambandhinoḥ', meaning: 'of the two that are related' },
    { term: 'satoḥ', meaning: 'of those taken as real' },
    { term: 'na', meaning: 'not' },
    { term: 'asti', meaning: 'there is' },
    { term: 'nivṛttiḥ', meaning: 'cessation' },
    { term: 'sahajasya', meaning: 'of the natural (identification)' },
    { term: 'tu', meaning: 'but' },
    { term: 'karma', meaning: 'of karma' },
    { term: 'kṣayāt', meaning: 'from the wearing-out' },
    { term: 'prabodhāt', meaning: 'from awakening' },
    { term: 'ca', meaning: 'and' },
    { term: 'nivartete', meaning: 'the two cease' },
    { term: 'kramāt', meaning: 'in order' },
    { term: 'ubhe', meaning: 'both' },
  ],
  root: group('ddv-09-verse', 'verse', 'Of the two that are taken as real and mutually related, the natural identification never ceases. The other two cease, in order, when karma is exhausted and when awakening comes.', [
    group('ddv-09-p1', 'phrase', 'The natural identification of the two that are real does not cease.', [
    word('ddv-09-w1', 'of the two that are related', [
      ['स', 'sa'],
      ['म्ब', 'mba'],
      ['न्धि', 'ndhi'],
      ['नोः', 'noḥ'],
    ]),
    word('ddv-09-w2', 'of those taken as real', [
      ['स', 'sa'],
      ['तो', 'to'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-09-w3', 'not', [
      ['ना', 'nā'],
    ], { trailing: '' }),
    word('ddv-09-w4', 'there is', [
      ['स्ति', 'sti'],
    ]),
    word('ddv-09-w5', 'cessation', [
      ['नि', 'ni'],
      ['वृ', 'vṛ'],
      ['त्तिः', 'ttiḥ'],
    ]),
    word('ddv-09-w6', 'of the natural (identification)', [
      ['स', 'sa'],
      ['ह', 'ha'],
      ['ज', 'ja'],
      ['स्य', 'sya'],
    ]),
    word('ddv-09-w7', 'but', [
      ['तु', 'tu'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-09-p2', 'phrase', 'The other two cease with the wearing-out of karma and with awakening.', [
    word('ddv-09-w8', 'of karma', [
      ['क', 'ka'],
      ['र्म', 'rma'],
    ], { trailing: '' }),
    word('ddv-09-w9', 'from the wearing-out', [
      ['क्ष', 'kṣa'],
      ['या', 'yā'],
      ['त्', 't'],
    ]),
    word('ddv-09-w10', 'from awakening', [
      ['प्र', 'pra'],
      ['बो', 'bo'],
      ['धा', 'dhā'],
      ['च्', 'c'],
    ], { trailing: '' }),
    word('ddv-09-w11', 'and', [
      ['च', 'ca'],
    ]),
    word('ddv-09-w12', 'the two cease', [
      ['नि', 'ni'],
      ['व', 'va'],
      ['र्ते', 'rte'],
      ['ते', 'te'],
    ]),
    word('ddv-09-w13', 'in order', [
      ['क्र', 'kra'],
      ['मा', 'mā'],
      ['दु', 'du'],
    ], { trailing: '' }),
    word('ddv-09-w14', 'both', [
      ['भे', 'bhe'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
