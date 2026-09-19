import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv34: Chapter = {
  id: 'ddv-34',
  titleDev: 'अवच्छिन्नस्य जीवस्य पूर्णेन ब्रह्मणैकताम्',
  titleIast: 'avacchinnasya jīvasya pūrṇena brahmaṇaikatām',
  titleEn: 'Verse 34',
  status: 'ready',
  translation: 'Statements such as “thou art that” declare the identity of the limited jīva with full Brahman — not of the other two jīvas.',
  glossary: [
    { term: 'avacchinnasya', meaning: 'of the limited' },
    { term: 'jīvasya', meaning: 'jīva' },
    { term: 'pūrṇena', meaning: 'with the full' },
    { term: 'brahmaṇaḥ', meaning: 'with Brahman' },
    { term: 'ekatām', meaning: 'identity' },
    { term: 'tat', meaning: 'that' },
    { term: 'tvam', meaning: 'thou' },
    { term: 'asyādi', meaning: 'art — and so on' },
    { term: 'vākyāni', meaning: 'statements' },
    { term: 'jaguḥ', meaning: 'have declared' },
    { term: 'na', meaning: 'not' },
    { term: 'itara', meaning: 'the other' },
    { term: 'jīvayoḥ', meaning: 'two jīvas' },
  ],
  root: group('ddv-34-verse', 'verse', 'Statements such as “thou art that” declare the identity of the limited jīva with full Brahman — not of the other two jīvas.', [
    group('ddv-34-p1', 'phrase', 'The identity of the limited jīva with full Brahman —', [
    word('ddv-34-w1', 'of the limited', [
      ['अ', 'a'],
      ['व', 'va'],
      ['च्छि', 'cchi'],
      ['न्न', 'nna'],
      ['स्य', 'sya'],
    ]),
    word('ddv-34-w2', 'jīva', [
      ['जी', 'jī'],
      ['व', 'va'],
      ['स्य', 'sya'],
    ]),
    word('ddv-34-w3', 'with the full', [
      ['पू', 'pū'],
      ['र्णे', 'rṇe'],
      ['न', 'na'],
    ]),
    word('ddv-34-w4', 'with Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['णै', 'ṇai'],
    ], { trailing: '' }),
    word('ddv-34-w5', 'identity', [
      ['क', 'ka'],
      ['ता', 'tā'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-34-p2', 'phrase', 'mahāvākyas such as tattvamasi declare; not of the other two jīvas.', [
    word('ddv-34-w6', 'that', [
      ['त', 'ta'],
      ['त्', 't'],
    ], { trailing: '' }),
    word('ddv-34-w7', 'thou', [
      ['त्व', 'tva'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-34-w8', 'art — and so on', [
      ['स्या', 'syā'],
      ['दि', 'di'],
    ], { trailing: '' }),
    word('ddv-34-w9', 'statements', [
      ['वा', 'vā'],
      ['क्या', 'kyā'],
      ['नि', 'ni'],
    ]),
    word('ddv-34-w10', 'have declared', [
      ['ज', 'ja'],
      ['गु', 'gu'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-34-w11', 'not', [
      ['ने', 'ne'],
    ], { trailing: '' }),
    word('ddv-34-w12', 'the other', [
      ['त', 'ta'],
      ['र', 'ra'],
    ], { trailing: '' }),
    word('ddv-34-w13', 'two jīvas', [
      ['जी', 'jī'],
      ['व', 'va'],
      ['योः', 'yoḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
