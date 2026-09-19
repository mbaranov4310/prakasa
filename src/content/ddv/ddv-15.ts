import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv15: Chapter = {
  id: 'ddv-15',
  titleDev: 'अन्तर्दृग्दृश्ययोर्भेदं बहिश्च ब्रह्मसर्गयोः',
  titleIast: 'antardṛgdṛśyayorbhedaṃ bahiśca brahmasargayoḥ',
  titleEn: 'Verse 15',
  status: 'ready',
  translation: 'The other power conceals the distinction of seer and seen within, and of Brahman and creation without. That is the cause of saṃsāra.',
  glossary: [
    { term: 'antar', meaning: 'within' },
    { term: 'dṛgdṛśyayoḥ', meaning: 'of seer and seen' },
    { term: 'bhedaṃ', meaning: 'the distinction' },
    { term: 'bahiḥ', meaning: 'outwardly' },
    { term: 'ca', meaning: 'and' },
    { term: 'brahmasargayoḥ', meaning: 'of Brahman and creation' },
    { term: 'āvṛṇoti', meaning: 'conceals' },
    { term: 'aparā', meaning: 'the other' },
    { term: 'śaktiḥ', meaning: 'power' },
    { term: 'sā', meaning: 'that' },
    { term: 'saṃsārasya', meaning: 'of saṃsāra' },
    { term: 'kāraṇam', meaning: 'the cause' },
  ],
  root: group('ddv-15-verse', 'verse', 'The other power conceals the distinction of seer and seen within, and of Brahman and creation without. That is the cause of saṃsāra.', [
    group('ddv-15-p1', 'phrase', 'It conceals the inner distinction of seer and seen, and the outer of Brahman and creation.', [
    word('ddv-15-w1', 'within', [
      ['अ', 'a'],
      ['न्त', 'nta'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-15-w2', 'of seer and seen', [
      ['दृ', 'dṛ'],
      ['ग्दृ', 'gdṛ'],
      ['श्य', 'śya'],
      ['यो', 'yo'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-15-w3', 'the distinction', [
      ['भे', 'bhe'],
      ['दं', 'daṃ'],
    ]),
    word('ddv-15-w4', 'outwardly', [
      ['ब', 'ba'],
      ['हि', 'hi'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-15-w5', 'and', [
      ['च', 'ca'],
    ]),
    word('ddv-15-w6', 'of Brahman and creation', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['स', 'sa'],
      ['र्ग', 'rga'],
      ['योः', 'yoḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-15-p2', 'phrase', 'That other power is the cause of saṃsāra.', [
    word('ddv-15-w7', 'conceals', [
      ['आ', 'ā'],
      ['वृ', 'vṛ'],
      ['णो', 'ṇo'],
      ['त्य', 'tya'],
    ], { trailing: '' }),
    word('ddv-15-w8', 'the other', [
      ['प', 'pa'],
      ['रा', 'rā'],
    ]),
    word('ddv-15-w9', 'power', [
      ['श', 'śa'],
      ['क्तिः', 'ktiḥ'],
    ]),
    word('ddv-15-w10', 'that', [
      ['सा', 'sā'],
    ]),
    word('ddv-15-w11', 'of saṃsāra', [
      ['सं', 'saṃ'],
      ['सा', 'sā'],
      ['र', 'ra'],
      ['स्य', 'sya'],
    ]),
    word('ddv-15-w12', 'the cause', [
      ['का', 'kā'],
      ['र', 'ra'],
      ['ण', 'ṇa'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
