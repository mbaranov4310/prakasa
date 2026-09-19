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
    { term: 'brahmaṇaikatām', meaning: 'identity with Brahman' },
    { term: 'tattvamasyādivākyāni', meaning: 'statements such as “thou art that”' },
    { term: 'jaguḥ', meaning: 'have declared' },
    { term: 'na', meaning: 'not' },
    { term: 'itarajīvayoḥ', meaning: 'of the other two jīvas' },
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
    word('ddv-34-w4', 'identity with Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['णै', 'ṇai'],
      ['क', 'ka'],
      ['ता', 'tā'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-34-p2', 'phrase', 'mahāvākyas such as tattvamasi declare; not of the other two jīvas.', [
    word('ddv-34-w5', 'statements such as “thou art that”', [
      ['त', 'ta'],
      ['त्त्व', 'ttva'],
      ['म', 'ma'],
      ['स्या', 'syā'],
      ['दि', 'di'],
      ['वा', 'vā'],
      ['क्या', 'kyā'],
      ['नि', 'ni'],
    ]),
    word('ddv-34-w6', 'have declared', [
      ['ज', 'ja'],
      ['गु', 'gu'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-34-w7', 'not', [
      ['ने', 'ne'],
    ], { trailing: '' }),
    word('ddv-34-w8', 'of the other two jīvas', [
      ['त', 'ta'],
      ['र', 'ra'],
      ['जी', 'jī'],
      ['व', 'va'],
      ['योः', 'yoḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
