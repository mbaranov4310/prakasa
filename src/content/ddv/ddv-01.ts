import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv01: Chapter = {
  id: 'ddv-01',
  titleDev: 'Verse 1',
  titleIast: 'Verse 1',
  titleEn: 'Verse 1',
  status: 'ready',
  translation: 'Form is perceived and the eye is its perceiver. The eye is perceived and the mind is its perceiver. The mind with its modifications is perceived, and the Witness is the perceiver. But the Witness is not perceived.',
  glossary: [
    { term: 'rūpaṃ', meaning: 'form / object of seeing' },
    { term: 'dṛśyaṃ', meaning: 'seen / perceived' },
    { term: 'locanaṃ', meaning: 'the eye' },
    { term: 'dṛk', meaning: 'the seer' },
    { term: 'tat', meaning: 'that' },
    { term: 'tu', meaning: 'but / and' },
    { term: 'mānasam', meaning: 'the mind' },
    { term: 'dṛśyāḥ', meaning: 'the seen (pl.)' },
    { term: 'dhī', meaning: 'of the intellect' },
    { term: 'vṛttayaḥ', meaning: 'modifications' },
    { term: 'sākṣī', meaning: 'the Witness' },
    { term: 'dṛgeva', meaning: 'the seer alone (दृक् + एव)' },
    { term: 'na', meaning: 'not' },
    { term: 'dṛśyate', meaning: 'is seen' },
  ],
  root: group('ddv-01-verse', 'verse', 'Form is perceived and the eye is its perceiver. The eye is perceived and the mind is its perceiver. The mind with its modifications is perceived, and the Witness is the perceiver. But the Witness is not perceived.', [
    group('ddv-01-p1', 'phrase', 'Form is seen; the eye is its seer. That (eye) is seen; the mind is its seer.', [
    word('ddv-01-w1', 'form / object of seeing', [
      ['रू', 'rū'],
      ['पं', 'paṃ'],
    ]),
    word('ddv-01-w2', 'seen / perceived', [
      ['दृ', 'dṛ'],
      ['श्यं', 'śyaṃ'],
    ]),
    word('ddv-01-w3', 'the eye', [
      ['लो', 'lo'],
      ['च', 'ca'],
      ['नं', 'naṃ'],
    ]),
    word('ddv-01-w4', 'the seer', [
      ['दृ', 'dṛ'],
      ['क्', 'k'],
    ]),
    word('ddv-01-w5', 'that', [
      ['त', 'ta'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-01-w6', 'seen', [
      ['दृ', 'dṛ'],
      ['श्यं', 'śyaṃ'],
    ]),
    word('ddv-01-w7', 'the seer', [
      ['दृ', 'dṛ'],
      ['क्', 'k'],
    ], { trailing: '' }),
    word('ddv-01-w8', 'but / and', [
      ['तु', 'tu'],
    ]),
    word('ddv-01-w9', 'the mind', [
      ['मा', 'mā'],
      ['न', 'na'],
      ['स', 'sa'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-01-p2', 'phrase', 'The mind’s modifications are seen; the Witness alone is the seer — and it is not seen.', [
    word('ddv-01-w10', 'the seen (pl.)', [
      ['दृ', 'dṛ'],
      ['श्या', 'śyā'],
    ]),
    word('ddv-01-w11', 'of the intellect', [
      ['धी', 'dhī'],
    ], { trailing: '' }),
    word('ddv-01-w12', 'modifications', [
      ['वृ', 'vṛ'],
      ['त्त', 'tta'],
      ['यः', 'yaḥ'],
    ]),
    word('ddv-01-w13', 'the Witness', [
      ['सा', 'sā'],
      ['क्षी', 'kṣī'],
    ]),
    word('ddv-01-w14', 'the seer alone (दृक् + एव)', [
      ['दृ', 'dṛ'],
      ['गे', 'ge'],
      ['व', 'va'],
    ]),
    word('ddv-01-w15', 'not', [
      ['न', 'na'],
    ]),
    word('ddv-01-w16', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-01-w17', 'is seen', [
      ['दृ', 'dṛ'],
      ['श्य', 'śya'],
      ['ते', 'te'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
