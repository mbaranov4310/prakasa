#!/usr/bin/env python3
"""Nikh-style pada rows for verses 7–46 (Param saṃhitā, join slices).

Each row: (pada_dev, slice_dev, after, meaning)
Run: python3 scripts/ddv-nikh-padas.py          # join-test
     python3 scripts/ddv-nikh-padas.py apply    # write md + lift
"""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT = ROOT / "docs" / "ddv" / "text"

spec = importlib.util.spec_from_file_location("ddv_iast", ROOT / "scripts" / "ddv-iast.py")
iast = importlib.util.module_from_spec(spec)
spec.loader.exec_module(iast)

chk_spec = importlib.util.spec_from_file_location("check_ddv_text", ROOT / "scripts" / "check-ddv-text.py")
chk = importlib.util.module_from_spec(chk_spec)
chk_spec.loader.exec_module(chk)

AFTER = chk.AFTER

# pada_dev, slice_dev, after, meaning
PADAS: dict[int, list[tuple[str, str, str, str]]] = {
    7: [
        ("छायाऽहङ्कारयोः", "छायाऽहङ्कारयो", "join", "of the reflection and the ego"),
        ("ऐक्यं", "रैक्यं", "space", "identity"),
        ("तप्त", "तप्ता", "join", "heated"),
        ("अयःपिण्डवत्", "यःपिण्डवन्", "join", "like an iron ball"),
        ("मतम्", "मतम्", "danda", "is held (by the wise)"),
        ("तत्", "तद", "join", "that"),
        ("अहङ्कार", "हङ्कार", "join", "ego"),
        ("तादात्म्यात्", "तादात्म्याद्", "join", "from identification"),
        ("देहः", "देहश्", "join", "the body"),
        ("चेतनताम्", "चेतनताम", "join", "sentiency"),
        ("अगात्", "गात्", "ddanda", "has attained"),
    ],
    8: [
        ("अहङ्कारस्य", "अहङ्कारस्य", "space", "of the ego"),
        ("तादात्म्यं", "तादात्म्यं", "space", "identification"),
        ("चिच्छाया", "चिच्छाया", "join", "with the reflection of Consciousness"),
        ("देहसाक्षिभिः", "देहसाक्षिभिः", "danda", "the body, and the Witness"),
        ("सहजं", "सहजं", "space", "natural"),
        ("कर्मजं", "कर्मजं", "space", "born of karma"),
        ("भ्रान्तिजन्यं", "भ्रान्तिजन्यं", "space", "born of error"),
        ("च", "च", "space", "and"),
        ("त्रिविधं", "त्रिविधं", "space", "of three kinds"),
        ("क्रमात्", "क्रमात्", "ddanda", "in that order"),
    ],
    9: [
        ("सम्बन्धिनोः", "सम्बन्धिनोः", "space", "of the two that are related"),
        ("सतोः", "सतोर्", "join", "of those taken as real"),
        ("न", "ना", "join", "not"),
        ("अस्ति", "स्ति", "space", "there is"),
        ("निवृत्तिः", "निवृत्तिः", "space", "cessation"),
        ("सहजस्य", "सहजस्य", "space", "of the natural (identification)"),
        ("तु", "तु", "danda", "but"),
        ("कर्मक्षयात्", "कर्मक्षयात्", "space", "from the wearing-out of karma"),
        ("प्रबोधात्", "प्रबोधाच्", "join", "from awakening"),
        ("च", "च", "space", "and"),
        ("निवर्तेते", "निवर्तेते", "space", "the two cease"),
        ("क्रमात्", "क्रमादु", "join", "in order"),
        ("उभे", "भे", "ddanda", "both"),
    ],
    10: [
        ("अहङ्कारलये", "अहङ्कारलये", "space", "on the dissolution of the ego"),
        ("सुप्तौ", "सुप्तौ", "space", "in deep sleep"),
        ("भवेत्", "भवेद्", "join", "becomes"),
        ("देहः", "देहोऽ", "join", "the body"),
        ("अपि", "प्य", "join", "also"),
        ("अचेतनः", "चेतनः", "danda", "unconscious"),
        ("अहङ्कारविकासार्धः", "अहङ्कारविकासार्धः", "space", "half-expansion of the ego"),
        ("स्वप्नः", "स्वप्नः", "space", "dream"),
        ("सर्वः", "सर्वस्", "join", "the full (expansion)"),
        ("तु", "तु", "space", "but"),
        ("जागरः", "जागरः", "ddanda", "waking"),
    ],
    11: [
        ("अन्तःकरणवृत्तिः", "अन्तःकरणवृत्तिश्", "join", "a modification of the inner organ"),
        ("च", "च", "space", "and"),
        ("चितिच्छायैक्यम्", "चितिच्छायैक्यमा", "join", "identity with the reflection of Consciousness"),
        ("आगता", "गता", "danda", "having attained"),
        ("वासनाः", "वासनाः", "space", "impressions"),
        ("कल्पयेत्", "कल्पयेत्", "space", "it imagines"),
        ("स्वप्ने", "स्वप्ने", "space", "in dream"),
        ("बोधे", "बोधेऽ", "join", "in waking"),
        ("अक्षैः", "क्षैर्", "join", "through the senses"),
        ("विषयान्", "विषयान्", "space", "objects"),
        ("बहिः", "बहिः", "ddanda", "outside"),
    ],
    12: [
        ("मनोऽहङ्कृत्युपादानं", "मनोऽहङ्कृत्युपादानं", "space", "having mind and ego as material"),
        ("लिङ्गम्", "लिङ्गमे", "join", "the subtle body"),
        ("एकं", "कं", "space", "one"),
        ("जडात्मकम्", "जडात्मकम्", "danda", "of insentient nature"),
        ("अवस्थात्रयम्", "अवस्थात्रयम", "join", "the three states"),
        ("अन्वेति", "न्वेति", "space", "it follows"),
        ("जायते", "जायते", "space", "is born"),
        ("म्रियते", "म्रियते", "space", "dies"),
        ("तथा", "तथा", "ddanda", "likewise"),
    ],
    13: [
        ("शक्तिद्वयं", "शक्तिद्वयं", "space", "a pair of powers"),
        ("हि", "हि", "space", "indeed"),
        ("मायायाः", "मायाया", "space", "of Māyā"),
        ("विक्षेपावृतिरूपकम्", "विक्षेपावृतिरूपकम्", "danda", "of the form of projecting and veiling"),
        ("विक्षेपशक्तिः", "विक्षेपशक्तिर्", "join", "the projecting power"),
        ("लिङ्गादि", "लिङ्गादि", "space", "from the subtle body onward"),
        ("ब्रह्माण्डान्तं", "ब्रह्माण्डान्तं", "space", "up to the cosmic egg"),
        ("जगत्", "जगत्", "space", "the world"),
        ("सृजेत्", "सृजेत्", "ddanda", "creates"),
    ],
    14: [
        ("सृष्टिः", "सृष्टिर्", "join", "creation"),
        ("नाम", "नाम", "space", "is called"),
        ("ब्रह्मरूपे", "ब्रह्मरूपे", "space", "in that which has the nature of Brahman"),
        ("सच्चिदानन्दवस्तुनि", "सच्चिदानन्दवस्तुनि", "danda", "in the entity that is Existence-Consciousness-Bliss"),
        ("अब्धौ", "अब्धौ", "space", "in the ocean"),
        ("फेनादिवत्", "फेनादिवत्", "space", "like foam and so on"),
        ("सर्वनामरूपप्रसारणा", "सर्वनामरूपप्रसारणा", "ddanda", "the spreading of all names and forms"),
    ],
    15: [
        ("अन्तर्", "अन्तर्", "join", "within"),
        ("दृग्दृश्ययोः", "दृग्दृश्ययोर्", "join", "of seer and seen"),
        ("भेदं", "भेदं", "space", "the distinction"),
        ("बहिः", "बहिश्", "join", "outwardly"),
        ("च", "च", "space", "and"),
        ("ब्रह्मसर्गयोः", "ब्रह्मसर्गयोः", "danda", "of Brahman and creation"),
        ("आवृणोति", "आवृणोत्य", "join", "conceals"),
        ("अपरा", "परा", "space", "the other"),
        ("शक्तिः", "शक्तिः", "space", "power"),
        ("सा", "सा", "space", "that"),
        ("संसारस्य", "संसारस्य", "space", "of saṃsāra"),
        ("कारणम्", "कारणम्", "ddanda", "the cause"),
    ],
    16: [
        ("साक्षिणः", "साक्षिणः", "space", "of the Witness"),
        ("पुरतः", "पुरतो", "space", "in front"),
        ("भाति", "भाति", "space", "appears"),
        ("लिङ्गं", "लिङ्गं", "space", "the subtle body"),
        ("देहेन", "देहेन", "space", "with the (gross) body"),
        ("संयुतम्", "संयुतम्", "danda", "joined"),
        ("चितिच्छाया", "चितिच्छाया", "space", "the reflection of Consciousness"),
        ("समावेशात्", "समावेशाज्", "join", "from its entry"),
        ("जीवः", "जीवः", "space", "the living self"),
        ("स्यात्", "स्याद्", "join", "becomes"),
        ("व्यावहारिकः", "व्यावहारिकः", "ddanda", "empirical"),
    ],
    17: [
        ("अस्य", "अस्य", "space", "of this"),
        ("जीवत्वम्", "जीवत्वमा", "join", "jīva-hood"),
        ("आरोपात्", "रोपात्", "space", "from superimposition"),
        ("साक्षिणि", "साक्षिण्य", "join", "in the Witness"),
        ("अपि", "प्य", "join", "even"),
        ("अवभासते", "वभासते", "danda", "it appears"),
        ("आवृतौ", "आवृतौ", "space", "when the veiling"),
        ("तु", "तु", "space", "but"),
        ("विनष्टायां", "विनष्टायां", "space", "has been destroyed"),
        ("भेदे", "भेदे", "space", "when the distinction"),
        ("भाते", "भातेऽ", "join", "having shone"),
        ("अपयाति", "पयाति", "space", "goes away"),
        ("तत्", "तत्", "ddanda", "that"),
    ],
    18: [
        ("तथा", "तथा", "space", "in the same way"),
        ("सर्गब्रह्मणोः", "सर्गब्रह्मणोश्", "join", "of creation and Brahman"),
        ("च", "च", "space", "and"),
        ("भेदम्", "भेदमा", "join", "the distinction"),
        ("आवृत्य", "वृत्य", "space", "having concealed"),
        ("तिष्ठति", "तिष्ठति", "danda", "it remains"),
        ("या", "या", "space", "which"),
        ("शक्तिः", "शक्तिस्", "join", "power"),
        ("तद्वशात्", "तद्वशाद्", "join", "by its force"),
        ("ब्रह्म", "ब्रह्म", "space", "Brahman"),
        ("विकृतत्वेन", "विकृतत्वेन", "space", "as modified"),
        ("भासते", "भासते", "ddanda", "appears"),
    ],
    19: [
        ("अत्र", "अत्रा", "join", "here"),
        ("अपि", "प्या", "join", "too"),
        ("आवृतिनाशेन", "वृतिनाशेन", "space", "by destruction of the veiling"),
        ("विभाति", "विभाति", "space", "shines"),
        ("ब्रह्मसर्गयोः", "ब्रह्मसर्गयोः", "danda", "of Brahman and creation"),
        ("भेदः", "भेदस्", "join", "their distinction"),
        ("तयोः", "तयोर्", "join", "of those two"),
        ("विकारः", "विकारः", "space", "modification"),
        ("स्यात्", "स्यात्", "space", "would be"),
        ("सर्गे", "सर्गे", "space", "in creation"),
        ("न", "न", "space", "not"),
        ("ब्रह्मणि", "ब्रह्मणि", "space", "in Brahman"),
        ("क्वचित्", "क्वचित्", "ddanda", "anywhere"),
    ],
    20: [
        ("अस्ति", "अस्ति", "space", "it exists"),
        ("भाति", "भाति", "space", "it shines"),
        ("प्रियं", "प्रियं", "space", "it is dear"),
        ("रूपं", "रूपं", "space", "form"),
        ("नाम", "नाम", "space", "name"),
        ("च", "चे", "join", "and"),
        ("इति", "त्यं", "join", "thus"),
        ("अंशपञ्चकम्", "शपञ्चकम्", "danda", "a group of five aspects"),
        ("आद्यत्रयं", "आद्यत्रयं", "space", "the first three"),
        ("ब्रह्मरूपं", "ब्रह्मरूपं", "space", "are the nature of Brahman"),
        ("जगद्रूपं", "जगद्रूपं", "space", "the nature of the world"),
        ("ततः", "ततो", "space", "then"),
        ("द्वयम्", "द्वयम्", "ddanda", "the two"),
    ],
    21: [
        ("खवाय्वग्निजलोर्वीषु", "खवाय्वग्निजलोर्वीषु", "space", "in ether, air, fire, water, and earth"),
        ("देवतिर्यङ्नरादिषु", "देवतिर्यङ्नरादिषु", "danda", "in gods, animals, humans, etc."),
        ("अभिन्नाः", "अभिन्नाः", "space", "undivided"),
        ("सच्चिदानन्दाः", "सच्चिदानन्दाः", "space", "Existence-Consciousness-Bliss"),
        ("भिद्येते", "भिद्येते", "space", "the two differ"),
        ("रूपनामनी", "रूपनामनी", "ddanda", "form and name"),
    ],
    22: [
        ("उपेक्ष्य", "उपेक्ष्य", "space", "having disregarded"),
        ("नामरूपे", "नामरूपे", "space", "name and form"),
        ("द्वे", "द्वे", "space", "the two"),
        ("सच्चिदानन्दतत्परः", "सच्चिदानन्दतत्परः", "danda", "intent on Existence-Consciousness-Bliss"),
        ("समाधिं", "समाधिं", "space", "samādhi"),
        ("सर्वदा", "सर्वदा", "space", "always"),
        ("कुर्यात्", "कुर्याद्", "join", "one should practise"),
        ("हृदये", "धृदये", "space", "in the heart"),
        ("वा", "वाऽ", "join", "or"),
        ("अथवा", "थवा", "space", "or else"),
        ("बहिः", "बहिः", "ddanda", "outside"),
    ],
    23: [
        ("सविकल्पः", "सविकल्पो", "space", "with distinction"),
        ("निर्विकल्पः", "निर्विकल्पः", "space", "without distinction"),
        ("समाधिः", "समाधिर्", "join", "samādhi"),
        ("द्विविधः", "द्विविधो", "space", "is of two kinds"),
        ("हृदि", "हृदि", "danda", "in the heart"),
        ("दृश्यशब्दानुविद्धेन", "दृश्यशब्दानुविद्धेन", "space", "associated with the seen and with words"),
        ("सविकल्पः", "सविकल्पः", "space", "savikalpa"),
        ("पुनः", "पुनर्", "join", "again"),
        ("द्विधा", "द्विधा", "ddanda", "twofold"),
    ],
    24: [
        ("कामाद्याः", "कामाद्याश्", "join", "desires and the rest"),
        ("चित्तगाः", "चित्तगा", "space", "occurring in the mind"),
        ("दृश्याः", "दृश्यास्", "join", "are the seen"),
        ("तत्साक्षित्वेन", "तत्साक्षित्वेन", "space", "as their Witness"),
        ("चेतनम्", "चेतनम्", "danda", "Consciousness"),
        ("ध्यायेत्", "ध्यायेद्", "join", "one should meditate"),
        ("दृश्यानुविद्धः", "दृश्यानुविद्धोऽ", "join", "associated with the seen"),
        ("अयं", "यं", "space", "this"),
        ("समाधिः", "समाधिः", "space", "samādhi"),
        ("सविकल्पकः", "सविकल्पकः", "ddanda", "with distinction"),
    ],
    25: [
        ("असङ्गः", "असङ्गः", "space", "unattached"),
        ("सच्चिदानन्दः", "सच्चिदानन्दः", "space", "Existence-Consciousness-Bliss"),
        ("स्वप्रभः", "स्वप्रभो", "space", "self-luminous"),
        ("द्वैतवर्जितः", "द्वैतवर्जितः", "danda", "free from duality"),
        ("अस्मि", "अस्मी", "join", "I am"),
        ("इति", "ति", "space", "thus"),
        ("शब्दविद्धः", "शब्दविद्धोऽ", "join", "associated with words"),
        ("अयं", "यं", "space", "this"),
        ("समाधिः", "समाधिः", "space", "samādhi"),
        ("सविकल्पकः", "सविकल्पकः", "ddanda", "with distinction"),
    ],
    26: [
        ("स्वानुभूतिरसावेशात्", "स्वानुभूतिरसावेशाद्", "join", "from absorption in the taste of one’s own experience"),
        ("दृश्यशब्दौ", "दृश्यशब्दावु", "join", "seen and word"),
        ("उपेक्ष्य", "पेक्ष्य", "space", "having disregarded"),
        ("तु", "तु", "danda", "but"),
        ("निर्विकल्पः", "निर्विकल्पः", "space", "without distinction"),
        ("समाधिः", "समाधिः", "space", "samādhi"),
        ("स्यात्", "स्यान्", "join", "would be"),
        ("निवातस्थितदीपवत्", "निवातस्थितदीपवत्", "ddanda", "like a lamp in a windless place"),
    ],
    27: [
        ("हृदि", "हृदी", "join", "in the heart"),
        ("इव", "व", "space", "as"),
        ("बाह्यदेशे", "बाह्यदेशेऽ", "join", "in an outer place"),
        ("अपि", "पि", "space", "even"),
        ("यस्मिन्", "यस्मिन्", "space", "in whichever"),
        ("कस्मिंश्च", "कस्मिंश्च", "space", "and in whatever"),
        ("वस्तुनि", "वस्तुनि", "danda", "thing"),
        ("समाधिः", "समाधिरा", "join", "samādhi"),
        ("आद्यः", "द्यः", "space", "the first"),
        ("सन्मात्रात्", "सन्मात्रान्", "join", "from Existence alone"),
        ("नामरूपपृथक्कृतिः", "नामरूपपृथक्कृतिः", "ddanda", "is the separating of name and form"),
    ],
    28: [
        ("अखण्डैकरसं", "अखण्डैकरसं", "space", "undivided, of one taste"),
        ("वस्तु", "वस्तु", "space", "the Reality"),
        ("सच्चिदानन्दलक्षणम्", "सच्चिदानन्दलक्षणम्", "danda", "whose mark is Existence-Consciousness-Bliss"),
        ("इति", "इत्य", "join", "thus"),
        ("अविच्छिन्नचिन्ता", "विच्छिन्नचिन्ते", "join", "uninterrupted thought"),
        ("इयं", "यं", "space", "this"),
        ("समाधिः", "समाधिर्", "join", "samādhi"),
        ("मध्यमः", "मध्यमो", "space", "the middle"),
        ("भवेत्", "भवेत्", "ddanda", "would be"),
    ],
    29: [
        ("स्तब्धीभावः", "स्तब्धीभावो", "space", "a state of stillness"),
        ("रसास्वादात्", "रसास्वादात्", "join", "from tasting the rasa"),
        ("तृतीयः", "तृतीयः", "space", "the third"),
        ("पूर्ववत्", "पूर्ववन्", "join", "like the previous"),
        ("मतः", "मतः", "danda", "is held"),
        ("एतैः", "एतैः", "space", "by these"),
        ("समाधिभिः", "समाधिभिः", "space", "samādhis"),
        ("षड्भिः", "षड्भिर्", "join", "six"),
        ("नयेत्", "नयेत्", "space", "one should lead"),
        ("कालं", "कालं", "space", "time"),
        ("निरन्तरम्", "निरन्तरम्", "ddanda", "without interruption"),
    ],
    30: [
        ("देहाभिमाने", "देहाभिमाने", "space", "when identification with the body"),
        ("गलिते", "गलिते", "space", "has melted"),
        ("विज्ञाते", "विज्ञाते", "space", "when known"),
        ("परमात्मनि", "परमात्मनि", "danda", "the supreme Self"),
        ("यत्र", "यत्र", "space", "wherever"),
        ("यत्र", "यत्र", "space", "wherever"),
        ("मनः", "मनो", "space", "the mind"),
        ("याति", "याति", "space", "goes"),
        ("तत्र", "तत्र", "space", "there"),
        ("तत्र", "तत्र", "space", "there"),
        ("समाधयः", "समाधयः", "ddanda", "samādhis"),
    ],
    31: [
        ("भिद्यते", "भिद्यते", "space", "is split"),
        ("हृदयग्रन्थिः", "हृदयग्रन्थिश्", "join", "the knot of the heart"),
        ("छिद्यन्ते", "छिद्यन्ते", "space", "are cut"),
        ("सर्वसंशयाः", "सर्वसंशयाः", "danda", "all doubts"),
        ("क्षीयन्ते", "क्षीयन्ते", "space", "wear away"),
        ("च", "चा", "join", "and"),
        ("अस्य", "स्य", "space", "his"),
        ("कर्माणि", "कर्माणि", "space", "karmas"),
        ("तस्मिन्", "तस्मिन्", "space", "in that"),
        ("दृष्टे", "दृष्टे", "space", "when seen"),
        ("परावरे", "परावरे", "ddanda", "which is high and low"),
    ],
    32: [
        ("अवच्छिन्नः", "अवच्छिन्नश्", "join", "the limited one"),
        ("चिदाभासः", "चिदाभासस्", "join", "the reflection of Consciousness"),
        ("तृतीयः", "तृतीयः", "space", "a third"),
        ("स्वप्नकल्पितः", "स्वप्नकल्पितः", "danda", "imagined in dream"),
        ("विज्ञेयः", "विज्ञेयस्", "join", "is to be known"),
        ("त्रिविधः", "त्रिविधो", "space", "threefold"),
        ("जीवः", "जीवस्", "join", "the jīva"),
        ("तत्र", "तत्रा", "join", "of them"),
        ("आद्यः", "द्यः", "space", "the first"),
        ("पारमार्थिकः", "पारमार्थिकः", "ddanda", "is the absolute"),
    ],
    33: [
        ("अवच्छेदः", "अवच्छेदः", "space", "limitation"),
        ("कल्पितः", "कल्पितः", "space", "is imagined"),
        ("स्यात्", "स्याद", "join", "would be"),
        ("अवच्छेद्यं", "वच्छेद्यं", "space", "that which is limited"),
        ("तु", "तु", "space", "but"),
        ("वास्तवम्", "वास्तवम्", "danda", "is real"),
        ("तस्मिन्", "तस्मिन्", "space", "on that"),
        ("जीवत्वम्", "जीवत्वमा", "join", "jīva-hood"),
        ("आरोपात्", "रोपाद्", "join", "from superimposition"),
        ("ब्रह्मत्वं", "ब्रह्मत्वं", "space", "Brahman-hood"),
        ("तु", "तु", "space", "but"),
        ("स्वभावतः", "स्वभावतः", "ddanda", "by its own nature"),
    ],
    34: [
        ("अवच्छिन्नस्य", "अवच्छिन्नस्य", "space", "of the limited"),
        ("जीवस्य", "जीवस्य", "space", "jīva"),
        ("पूर्णेन", "पूर्णेन", "space", "with the full"),
        ("ब्रह्मणैकताम्", "ब्रह्मणैकताम्", "danda", "identity with Brahman"),
        ("तत्त्वमस्यादिवाक्यानि", "तत्त्वमस्यादिवाक्यानि", "space", "statements such as “thou art that”"),
        ("जगुः", "जगुर्", "join", "have declared"),
        ("न", "ने", "join", "not"),
        ("इतरजीवयोः", "तरजीवयोः", "ddanda", "of the other two jīvas"),
    ],
    35: [
        ("ब्रह्मणि", "ब्रह्मण्य", "join", "in Brahman"),
        ("अवस्थिता", "वस्थिता", "space", "established"),
        ("माया", "माया", "space", "Māyā"),
        ("विक्षेपावृतिरूपिणी", "विक्षेपावृतिरूपिणी", "danda", "of the nature of projecting and veiling"),
        ("आवृत्य", "आवृत्या", "join", "having covered"),
        ("अखण्डतां", "खण्डतां", "space", "undividedness"),
        ("तस्मिन्", "तस्मिन्", "space", "in that"),
        ("जगज्जीवौ", "जगज्जीवौ", "space", "world and jīva"),
        ("प्रकल्पयेत्", "प्रकल्पयेत्", "ddanda", "she imagines"),
    ],
    36: [
        ("जीवः", "जीवो", "space", "the jīva"),
        ("धीस्थचिदाभासः", "धीस्थचिदाभासो", "space", "is the reflection of Consciousness standing in the intellect"),
        ("भवेत्", "भवेद्", "join", "would be"),
        ("भोक्ता", "भोक्ता", "space", "the enjoyer"),
        ("हि", "हि", "space", "for"),
        ("कर्मकृत्", "कर्मकृत्", "danda", "the doer of karma"),
        ("भोग्यरूपम्", "भोग्यरूपमि", "join", "of the nature of the enjoyed"),
        ("इदं", "दं", "space", "this"),
        ("सर्वं", "सर्वं", "space", "all"),
        ("जगत्", "जगत्", "space", "the world"),
        ("स्यात्", "स्याद्", "join", "would be"),
        ("भूतभौतिकम्", "भूतभौतिकम्", "ddanda", "elemental and made of elements"),
    ],
    37: [
        ("अनादिकालम्", "अनादिकालमा", "join", "beginningless time"),
        ("आरभ्य", "रभ्य", "space", "beginning from"),
        ("मोक्षात्", "मोक्षात्", "space", "from liberation"),
        ("पूर्वम्", "पूर्वमि", "join", "before it"),
        ("इदं", "दं", "space", "this"),
        ("द्वयम्", "द्वयम्", "danda", "pair"),
        ("व्यवहारे", "व्यवहारे", "space", "in empirical dealing"),
        ("स्थितं", "स्थितं", "space", "stands"),
        ("तस्मात्", "तस्मादु", "join", "therefore"),
        ("उभयं", "भयं", "space", "both"),
        ("व्यावहारिकम्", "व्यावहारिकम्", "ddanda", "are empirical"),
    ],
    38: [
        ("चिदाभासस्थिता", "चिदाभासस्थिता", "space", "seated in the reflection of Consciousness"),
        ("निद्रा", "निद्रा", "space", "sleep"),
        ("विक्षेपावृतिरूपिणी", "विक्षेपावृतिरूपिणी", "danda", "of the nature of projecting and veiling"),
        ("आवृत्य", "आवृत्य", "space", "having covered"),
        ("जीवजगती", "जीवजगती", "space", "jīva and world"),
        ("पूर्वे", "पूर्वे", "space", "the previous"),
        ("नूत्ने", "नूत्ने", "space", "new ones"),
        ("तु", "तु", "space", "but"),
        ("कल्पयेत्", "कल्पयेत्", "ddanda", "it imagines"),
    ],
    39: [
        ("प्रतीतिकाल", "प्रतीतिकाल", "space", "the time of appearing"),
        ("एव", "एवै", "join", "only"),
        ("एते", "ते", "space", "these two"),
        ("स्थितत्वात्", "स्थितत्वात्", "space", "because they stood (then)"),
        ("प्रातिभासिके", "प्रातिभासिके", "danda", "in the apparent (order)"),
        ("न", "न", "space", "not"),
        ("हि", "हि", "space", "indeed"),
        ("स्वप्नप्रबुद्धस्य", "स्वप्नप्रबुद्धस्य", "space", "of one awakened from dream"),
        ("पुनः", "पुनः", "space", "again"),
        ("स्वप्ने", "स्वप्ने", "space", "in dream"),
        ("स्थितिः", "स्थितिस्", "join", "is the standing"),
        ("तयोः", "तयोः", "ddanda", "of those two"),
    ],
    40: [
        ("प्रातिभासिकजीवः", "प्रातिभासिकजीवो", "space", "the apparent jīva"),
        ("यः", "यस्", "join", "who"),
        ("तत्", "तज्", "join", "that"),
        ("जगत्", "जगत्", "space", "world"),
        ("प्रातिभासिकम्", "प्रातिभासिकम्", "danda", "is apparent"),
        ("वास्तवं", "वास्तवं", "space", "as real"),
        ("मन्यते", "मन्यतेऽ", "join", "thinks"),
        ("अन्यः", "न्यस्", "join", "another"),
        ("तु", "तु", "space", "but"),
        ("मिथ्या", "मिथ्ये", "join", "as false"),
        ("इति", "ति", "space", "thus"),
        ("व्यावहारिकः", "व्यावहारिकः", "ddanda", "the empirical (jīva)"),
    ],
    41: [
        ("व्यावहारिकजीवः", "व्यावहारिकजीवो", "space", "the empirical jīva"),
        ("यः", "यस्", "join", "who"),
        ("तत्", "तज्", "join", "that"),
        ("जगत्", "जगद्", "join", "world"),
        ("व्यावहारिकम्", "व्यावहारिकम्", "danda", "is empirical"),
        ("सत्यं", "सत्यं", "space", "as true"),
        ("प्रत्येति", "प्रत्येति", "space", "cognizes"),
        ("मिथ्या", "मिथ्ये", "join", "as false"),
        ("इति", "ति", "space", "thus"),
        ("मन्यते", "मन्यते", "space", "thinks"),
        ("पारमार्थिकः", "पारमार्थिकः", "ddanda", "the absolute (jīva)"),
    ],
    42: [
        ("पारमार्थिकजीवः", "पारमार्थिकजीवस्", "join", "the absolute jīva"),
        ("तु", "तु", "space", "but"),
        ("ब्रह्मैक्यं", "ब्रह्मैक्यं", "space", "identity with Brahman"),
        ("पारमार्थिकम्", "पारमार्थिकम्", "danda", "as absolute"),
        ("प्रत्येति", "प्रत्येति", "space", "cognizes"),
        ("वीक्षते", "वीक्षते", "space", "sees"),
        ("न", "ना", "join", "does not"),
        ("अन्यत्", "न्यद्", "join", "another"),
        ("वीक्षते", "वीक्षते", "space", "it sees"),
        ("तु", "त्व", "join", "but"),
        ("अनृतात्मना", "नृतात्मना", "ddanda", "as of the nature of untruth"),
    ],
    43: [
        ("माधुर्यद्रवशैत्यानि", "माधुर्यद्रवशैत्यानि", "space", "sweetness, fluidity, and coldness"),
        ("नीरधर्माः", "नीरधर्मास्", "join", "properties of water"),
        ("तरङ्गके", "तरङ्गके", "danda", "in the wave"),
        ("अनुगम्य", "अनुगम्या", "join", "having inhered"),
        ("अथ", "थ", "space", "then"),
        ("तन्निष्ठे", "तन्निष्ठे", "space", "in that which rests on it"),
        ("फेने", "फेनेऽ", "join", "in the foam"),
        ("अपि", "प्य", "join", "also"),
        ("अनुगता", "नुगता", "space", "inhere"),
        ("यथा", "यथा", "ddanda", "as"),
    ],
    44: [
        ("साक्षिस्थाः", "साक्षिस्थाः", "space", "standing in the Witness"),
        ("सच्चिदानन्दाः", "सच्चिदानन्दाः", "space", "Existence-Consciousness-Bliss"),
        ("सम्बन्धात्", "सम्बन्धाद्व्", "join", "from relation"),
        ("व्यावहारिके", "यावहारिके", "danda", "in the empirical"),
        ("तद्द्वारेण", "तद्द्वारेणा", "join", "through that"),
        ("अनुगच्छन्ति", "नुगच्छन्ति", "space", "they follow"),
        ("तथैव", "तथैव", "space", "in the same way"),
        ("प्रातिभासिके", "प्रातिभासिके", "ddanda", "in the apparent"),
    ],
    45: [
        ("लये", "लये", "space", "on dissolution"),
        ("फेनस्य", "फेनस्य", "space", "of the foam"),
        ("तद्धर्माः", "तद्धर्मा", "space", "those properties of it"),
        ("द्रवाद्याः", "द्रवाद्याः", "space", "fluidity and the rest"),
        ("स्युः", "स्युस्", "join", "would be"),
        ("तरङ्गके", "तरङ्गके", "danda", "in the wave"),
        ("तस्य", "तस्या", "join", "of that"),
        ("अपि", "पि", "space", "too"),
        ("विलये", "विलये", "space", "on dissolution"),
        ("नीरे", "नीरे", "space", "in the water"),
        ("तिष्ठन्ति", "तिष्ठन्त्ये", "join", "these remain"),
        ("एते", "ते", "space", "these"),
        ("यथा", "यथा", "space", "as"),
        ("पुरा", "पुरा", "ddanda", "before"),
    ],
    46: [
        ("प्रातिभासिकजीवस्य", "प्रातिभासिकजीवस्य", "space", "of the apparent jīva"),
        ("लये", "लये", "space", "on dissolution"),
        ("स्युः", "स्युर्", "join", "they would be"),
        ("व्यावहारिके", "व्यावहारिके", "danda", "in the empirical"),
        ("तल्लये", "तल्लये", "space", "on the dissolution of that"),
        ("सच्चिदानन्दाः", "सच्चिदानन्दाः", "space", "Existence-Consciousness-Bliss"),
        ("पर्यवस्यन्ति", "पर्यवस्यन्ति", "space", "come to rest"),
        ("साक्षिणि", "साक्षिणि", "ddanda", "in the Witness"),
    ],
}


def samhita_of(n: int) -> str:
    text = (TEXT / f"ddv-{n:02d}.md").read_text(encoding="utf-8")
    fences = dict(re.findall(r"```([a-z_]+)\n(.*?)```", text, flags=re.S))
    return iast.nfc(fences["samhita"].replace("\r\n", "\n").strip("\n"))


def join_dev(rows: list[tuple[str, str, str, str]]) -> str:
    return "".join(sl + AFTER[after][0] for _p, sl, after, _m in rows).strip("\n")


def test_all() -> int:
    rc = 0
    for n in sorted(PADAS):
        want = samhita_of(n)
        got = iast.nfc(join_dev(PADAS[n]))
        if got != want:
            rc = 1
            print(f"FAIL v{n}")
            print(f"  want: {want!r}")
            print(f"  got:  {got!r}")
        else:
            print(f"OK v{n} ({len(PADAS[n])} padas)")
    return rc


def apply() -> int:
    rc = test_all()
    if rc:
        return rc
    for n, rows in PADAS.items():
        path = TEXT / f"ddv-{n:02d}.md"
        text = path.read_text(encoding="utf-8")
        fences = dict(re.findall(r"```([a-z_]+)\n(.*?)```", text, flags=re.S))
        want = samhita_of(n)
        got = iast.nfc(join_dev(rows))
        if got != want:
            raise SystemExit(f"v{n}: slice join ≠ samhita")
        lines = ["pada_dev\tpada_iast\tslice_dev\tslice_iast\tafter\tmeaning"]
        for pada, sl, after, meaning in rows:
            lines.append(
                "\t".join(
                    [
                        pada,
                        iast.to_iast(pada),
                        sl,
                        iast.to_iast(sl),
                        after,
                        meaning.replace("\t", " "),
                    ]
                )
            )
        padas = "\n".join(lines) + "\n"
        meta = re.sub(r"expected_padas: \d+", f"expected_padas: {len(rows)}", fences["meta"].rstrip())
        trans = fences.get("translation", "").replace("\n", " ").strip()
        phrase = fences.get("phrase", "\n---\n")
        parts = [p.strip() for p in phrase.split("---")]
        h1 = parts[0] if parts else ""
        h2 = parts[1] if len(parts) > 1 else ""
        new = (
            f"# ddv-{n:02d}\n\n"
            f"```meta\n{meta.strip()}\n```\n\n"
            f"```samhita\n{fences['samhita'].strip(chr(10))}\n```\n\n"
            f"```samhita_iast\n{fences['samhita_iast'].strip(chr(10))}\n```\n\n"
            f"```translation\n{trans}\n```\n\n"
            f"```phrase\n{h1}\n---\n{h2}\n```\n\n"
            f"```padas\n{padas}```\n"
        )
        path.write_text(new, encoding="utf-8")
        print(f"filled ddv-{n:02d} ({len(rows)} padas)")
    return 0


def main() -> int:
    if len(sys.argv) > 1 and sys.argv[1] == "apply":
        return apply()
    return test_all()


if __name__ == "__main__":
    raise SystemExit(main())
