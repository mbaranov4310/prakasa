import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv06: Chapter = {
  id: 'ddv-06',
  titleDev: 'चिच्छायाऽऽवेशतो बुद्धौ भानं धीस्तु द्विधा स्थिता',
  titleIast: 'cicchāyā\'\'veśato buddhau bhānaṃ dhīstu dvidhā sthitā',
  titleEn: 'Verse 6',
  status: 'ready',
  translation: 'Buddhi appears to shine by the entry of the reflection of Consciousness. Intelligence is of two kinds: one is egoity, the other is the inner organ.',
  glossary: [
    { term: 'cicchāyā\'\'veśataḥ', meaning: 'by the entry of the reflection of Consciousness' },
    { term: 'buddhau', meaning: 'in the intellect' },
    { term: 'bhānam', meaning: 'appearing / shining' },
    { term: 'dhīḥ', meaning: 'intelligence' },
    { term: 'tu', meaning: 'but' },
    { term: 'dvidhā', meaning: 'in two ways' },
    { term: 'sthitā', meaning: 'stands' },
    { term: 'ekā', meaning: 'one' },
    { term: 'ahaṅkṛtiḥ', meaning: 'egoity' },
    { term: 'anyā', meaning: 'the other' },
    { term: 'syāt', meaning: 'is' },
    { term: 'antaḥkaraṇarūpiṇī', meaning: 'of the nature of the inner organ' },
  ],
  root: group('ddv-06-verse', 'verse', 'Buddhi appears to shine by the entry of the reflection of Consciousness. Intelligence is of two kinds: one is egoity, the other is the inner organ.', [
    group('ddv-06-p1', 'phrase', 'By the entry of the reflection of Consciousness, Buddhi appears luminous; that intelligence stands in two ways.', [
    word('ddv-06-w1', 'by the entry of the reflection of Consciousness', [
      ['चि', 'ci'],
      ['च्छा', 'cchā'],
      ['याऽऽ', 'yā\'\''],
      ['वे', 've'],
      ['श', 'śa'],
      ['तो', 'to'],
    ]),
    word('ddv-06-w2', 'in the intellect', [
      ['बु', 'bu'],
      ['द्धौ', 'ddhau'],
    ]),
    word('ddv-06-w3', 'appearing / shining', [
      ['भा', 'bhā'],
      ['नं', 'naṃ'],
    ]),
    word('ddv-06-w4', 'intelligence', [
      ['धी', 'dhī'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-06-w5', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-06-w6', 'in two ways', [
      ['द्वि', 'dvi'],
      ['धा', 'dhā'],
    ]),
    word('ddv-06-w7', 'stands', [
      ['स्थि', 'sthi'],
      ['ता', 'tā'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-06-p2', 'phrase', 'One is egoity; the other is the inner organ (mind).', [
    word('ddv-06-w8', 'one', [
      ['ए', 'e'],
      ['का', 'kā'],
    ], { trailing: '' }),
    word('ddv-06-w9', 'egoity', [
      ['ह', 'ha'],
      ['ङ्कृ', 'ṅkṛ'],
      ['ति', 'ti'],
      ['र', 'ra'],
    ], { trailing: '' }),
    word('ddv-06-w10', 'the other', [
      ['न्या', 'nyā'],
    ]),
    word('ddv-06-w11', 'is', [
      ['स्या', 'syā'],
      ['द', 'da'],
    ], { trailing: '' }),
    word('ddv-06-w12', 'of the nature of the inner organ', [
      ['न्तः', 'ntaḥ'],
      ['क', 'ka'],
      ['र', 'ra'],
      ['ण', 'ṇa'],
      ['रू', 'rū'],
      ['पि', 'pi'],
      ['णी', 'ṇī'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
