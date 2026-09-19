import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv10: Chapter = {
  id: 'ddv-10',
  titleDev: 'अहङ्कारलये सुप्तौ भवेद्देहोऽप्यचेतनः',
  titleIast: 'ahaṅkāralaye suptau bhaveddeho\'pyacetanaḥ',
  titleEn: 'Verse 10',
  status: 'ready',
  translation: 'In deep sleep, when the ego has dissolved, the body too is unconscious. Half-blossoming of the ego is dream; its full blossoming is waking.',
  glossary: [
    { term: 'ahaṅkāralaye', meaning: 'on the dissolution of the ego' },
    { term: 'suptau', meaning: 'in deep sleep' },
    { term: 'bhavet', meaning: 'becomes' },
    { term: 'dehaḥ', meaning: 'the body' },
    { term: 'api', meaning: 'also' },
    { term: 'acetanaḥ', meaning: 'unconscious' },
    { term: 'ahaṅkāravikāsārdhaḥ', meaning: 'half-expansion of the ego' },
    { term: 'svapnaḥ', meaning: 'dream' },
    { term: 'sarvaḥ', meaning: 'the full (expansion)' },
    { term: 'tu', meaning: 'but' },
    { term: 'jāgaraḥ', meaning: 'waking' },
  ],
  root: group('ddv-10-verse', 'verse', 'In deep sleep, when the ego has dissolved, the body too is unconscious. Half-blossoming of the ego is dream; its full blossoming is waking.', [
    group('ddv-10-p1', 'phrase', 'When the ego dissolves in sleep, the body is unconscious.', [
    word('ddv-10-w1', 'on the dissolution of the ego', [
      ['अ', 'a'],
      ['ह', 'ha'],
      ['ङ्का', 'ṅkā'],
      ['र', 'ra'],
      ['ल', 'la'],
      ['ये', 'ye'],
    ]),
    word('ddv-10-w2', 'in deep sleep', [
      ['सु', 'su'],
      ['प्तौ', 'ptau'],
    ]),
    word('ddv-10-w3', 'becomes', [
      ['भ', 'bha'],
      ['वे', 've'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-10-w4', 'the body', [
      ['दे', 'de'],
      ['होऽ', 'ho\''],
    ], { trailing: '' }),
    word('ddv-10-w5', 'also', [
      ['प्य', 'pya'],
    ], { trailing: '' }),
    word('ddv-10-w6', 'unconscious', [
      ['चे', 'ce'],
      ['त', 'ta'],
      ['नः', 'naḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-10-p2', 'phrase', 'Partial expansion of the ego is dream; complete expansion is waking.', [
    word('ddv-10-w7', 'half-expansion of the ego', [
      ['अ', 'a'],
      ['ह', 'ha'],
      ['ङ्का', 'ṅkā'],
      ['र', 'ra'],
      ['वि', 'vi'],
      ['का', 'kā'],
      ['सा', 'sā'],
      ['र्धः', 'rdhaḥ'],
    ]),
    word('ddv-10-w8', 'dream', [
      ['स्व', 'sva'],
      ['प्नः', 'pnaḥ'],
    ]),
    word('ddv-10-w9', 'the full (expansion)', [
      ['स', 'sa'],
      ['र्व', 'rva'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-10-w10', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-10-w11', 'waking', [
      ['जा', 'jā'],
      ['ग', 'ga'],
      ['रः', 'raḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
