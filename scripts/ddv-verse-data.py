#!/usr/bin/env python3
"""Pada rows + glosses for Dṛg-dṛśya-viveka.

Each row: (pada_dev, slice_dev, after, meaning)
IAST is filled by ddv-fill-stage2.py.
"""

from __future__ import annotations

# after: join / space / danda / ddanda
Verse = dict

VERSES: dict[int, Verse] = {
    1: {
        "h1": "Form is seen; the eye is its seer. That (eye) is seen; the mind is its seer.",
        "h2": "The mind’s modifications are seen; the Witness alone is the seer — and it is not seen.",
        "tr": "Form is perceived and the eye is its perceiver. The eye is perceived and the mind is its perceiver. The mind with its modifications is perceived, and the Witness is the perceiver. But the Witness is not perceived.",
        "rows": [
            ("रूपं", "रूपं", "space", "form / object of seeing"),
            ("दृश्यं", "दृश्यं", "space", "seen / perceived"),
            ("लोचनं", "लोचनं", "space", "the eye"),
            ("दृक्", "दृक्", "space", "the seer"),
            ("तत्", "तद्", "join", "that"),
            ("दृश्यं", "दृश्यं", "space", "seen"),
            ("दृक्", "दृक्", "join", "the seer"),
            ("तु", "तु", "space", "but / and"),
            ("मानसम्", "मानसम्", "danda", "the mind"),
            ("दृश्याः", "दृश्या", "space", "the seen (pl.)"),
            ("धीवृत्तयः", "धीवृत्तयः", "space", "modifications of the intellect"),
            ("साक्षी", "साक्षी", "space", "the Witness"),
            ("दृगेव", "दृगेव", "space", "the seer alone (दृक् + एव)"),
            ("न", "न", "space", "not"),
            ("तु", "तु", "space", "but"),
            ("दृश्यते", "दृश्यते", "ddanda", "is seen"),
        ],
    },
    2: {
        "h1": "Forms differ as blue, yellow, gross, subtle, short, long, and so on.",
        "h2": "The eye sees those many forms while remaining one.",
        "tr": "Forms appear as various on account of distinctions such as blue, yellow, gross, subtle, short, and long. The eye, remaining one, perceives them.",
        "rows": [
            ("नीलपीतस्थूलसूक्ष्मह्रस्वदीर्घादि", "नीलपीतस्थूलसूक्ष्मह्रस्वदीर्घादि", "space", "blue, yellow, gross, subtle, short, long, etc."),
            ("भेदतः", "भेदतः", "danda", "on account of difference"),
            ("नानाविधानि", "नानाविधानि", "space", "of various kinds"),
            ("रूपाणि", "रूपाणि", "space", "forms"),
            ("पश्येत्", "पश्येल्", "join", "perceives"),
            ("लोचनम्", "लोचनमे", "join", "the eye"),
            ("एकधा", "कधा", "ddanda", "as one"),
        ],
    },
    3: {
        "h1": "In the eye’s changing states — blindness, dullness, sharpness — the mind cognizes them as one.",
        "h2": "The same holds for ear, skin, and the other senses.",
        "tr": "Blindness, dullness, and sharpness — properties of the eye — the mind cognizes as a unity. This also applies to the ear, the skin, and the rest.",
        "rows": [
            ("आन्ध्यमान्द्यपटुत्वेषु", "आन्ध्यमान्द्यपटुत्वेषु", "space", "in blindness, dullness, and sharpness"),
            ("नेत्रधर्मेषु", "नेत्रधर्मेषु", "space", "in the properties of the eye"),
            ("च", "चै", "join", "and"),
            ("एकधा", "कधा", "danda", "as one"),
            ("सङ्कल्पयेत्", "सङ्कल्पयेन्", "join", "cognizes"),
            ("मनः", "मनः", "space", "the mind"),
            ("श्रोत्रत्वगादौ", "श्रोत्रत्वगादौ", "space", "in ear, skin, etc."),
            ("योज्यताम्", "योज्यतामि", "join", "let it be applied"),
            ("इदम्", "दम्", "ddanda", "this"),
        ],
    },
    4: {
        "h1": "Desire, resolve and doubt, faith and lack of faith, steadiness and its opposite —",
        "h2": "modesty, understanding, fear, and the rest: Consciousness illumines them all as one.",
        "tr": "Consciousness illumines, as a unity, desire, determination and doubt, faith and want of faith, steadiness and its opposite, modesty, understanding, fear, and such other mental states.",
        "rows": [
            ("कामः", "कामः", "space", "desire"),
            ("सङ्कल्पसन्देहौ", "सङ्कल्पसन्देहौ", "space", "determination and doubt"),
            ("श्रद्धा", "श्रद्धाऽ", "join", "faith"),
            ("अश्रद्धे", "श्रद्धे", "space", "and lack of faith"),
            ("धृतीतरे", "धृतीतरे", "danda", "steadiness and its opposite"),
            ("ह्रीः", "ह्रीर्", "join", "modesty"),
            ("धीः", "धीर्", "join", "understanding"),
            ("भीः", "भीरि", "join", "fear"),
            ("इत्येवमादीन्", "त्येवमादीन्", "space", "thus, and so on"),
            ("भासयति", "भासयत्ये", "join", "illumines"),
            ("एकधा", "कधा", "space", "as one"),
            ("चितिः", "चितिः", "ddanda", "Consciousness"),
        ],
    },
    5: {
        "h1": "This (Consciousness) does not rise or set, grow or decay.",
        "h2": "It shines of itself, and lights up everything else without any other means.",
        "tr": "This Consciousness neither rises nor sets; it does not increase or decay. Shining of itself, it illumines all else without any other aid.",
        "rows": [
            ("न", "नो", "join", "not"),
            ("उदेति", "देति", "space", "rises"),
            ("न", "ना", "join", "not"),
            ("अस्तम्", "स्तमे", "join", "setting"),
            ("एति", "त्ये", "join", "goes"),
            ("एषा", "षा", "space", "this (Consciousness)"),
            ("न", "न", "space", "not"),
            ("वृद्धिम्", "वृद्धिं", "space", "increase"),
            ("याति", "याति", "space", "goes to / undergoes"),
            ("न", "न", "space", "not"),
            ("क्षयम्", "क्षयम्", "danda", "decay"),
            ("स्वयम्", "स्वयं", "space", "of itself"),
            ("विभाति", "विभात्य", "join", "shines"),
            ("अथ", "था", "join", "and / moreover"),
            ("अन्यानि", "न्यानि", "space", "other things"),
            ("भासयेत्", "भासयेत्", "join", "illumines"),
            ("साधनम्", "साधनं", "space", "means / aid"),
            ("विना", "विना", "ddanda", "without"),
        ],
    },
    6: {
        "h1": "By the entry of the reflection of Consciousness, Buddhi appears luminous; that intelligence stands in two ways.",
        "h2": "One is egoity; the other is the inner organ (mind).",
        "tr": "Buddhi appears to shine by the entry of the reflection of Consciousness. Intelligence is of two kinds: one is egoity, the other is the inner organ.",
        "rows": [
            ("चिच्छायाऽऽवेशतः", "चिच्छायाऽऽवेशतो", "space", "by the entry of the reflection of Consciousness"),
            ("बुद्धौ", "बुद्धौ", "space", "in the intellect"),
            ("भानम्", "भानं", "space", "appearing / shining"),
            ("धीः", "धीस्", "join", "intelligence"),
            ("तु", "तु", "space", "but"),
            ("द्विधा", "द्विधा", "space", "in two ways"),
            ("स्थिता", "स्थिता", "danda", "stands"),
            ("एका", "एका", "join", "one"),
            ("अहङ्कृतिः", "हङ्कृतिर", "join", "egoity"),
            ("अन्या", "न्या", "space", "the other"),
            ("स्यात्", "स्याद", "join", "is"),
            ("अन्तःकरणरूपिणी", "न्तःकरणरूपिणी", "ddanda", "of the nature of the inner organ"),
        ],
    },
}
