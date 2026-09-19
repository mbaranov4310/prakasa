#!/usr/bin/env python3
"""Fill space-token padas + translations for verses not in ddv-verse-data.VERSES."""

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

# (tr, h1, h2, meanings aligned to space-tokens)
REST: dict[int, tuple[str, str, str, list[str]]] = {
    7: (
        "The identity of the reflection (of Consciousness) and the ego is held to be like that of fire and a heated iron ball. Through identification with that ego, the body has attained sentiency.",
        "The reflection and the ego are one, like a red-hot iron ball.",
        "By identity with that ego, the body appears sentient.",
        [
            "identity of the reflection and the ego",
            "is held to be like a heated iron ball",
            "from identity with that ego the body attained sentiency",
        ],
    ),
    8: (
        "The ego’s identification with the reflection of Consciousness, the body, and the Witness is of three kinds, in order: natural, due to karma, and born of error.",
        "The ego’s identification is with the reflection, the body, and the Witness.",
        "Natural, born of karma, and born of error — three kinds, in that order.",
        [
            "of the ego",
            "identification",
            "with the reflection of Consciousness, the body, and the Witness",
            "natural",
            "born of karma",
            "born of error",
            "and",
            "of three kinds",
            "in order",
        ],
    ),
    9: (
        "Of the two that are taken as real and mutually related, the natural identification never ceases. The other two cease, in order, when karma is exhausted and when awakening comes.",
        "The natural identification of the two that are real does not cease.",
        "The other two cease with the wearing-out of karma and with awakening.",
        [
            "of the two that are related",
            "there is no (cessation) while they are taken as real",
            "cessation",
            "of the natural (identification)",
            "but",
            "from the wearing-out of karma",
            "and from awakening",
            "the two cease",
            "in order, both",
        ],
    ),
    10: (
        "In deep sleep, when the ego has dissolved, the body too is unconscious. Half-blossoming of the ego is dream; its full blossoming is waking.",
        "When the ego dissolves in sleep, the body is unconscious.",
        "Partial expansion of the ego is dream; complete expansion is waking.",
        [
            "on the dissolution of the ego",
            "in deep sleep",
            "the body too becomes unconscious",
            "half-expansion of the ego",
            "dream",
            "but the full (expansion)",
            "waking",
        ],
    ),
    11: (
        "The modification of the inner organ, identified with the reflection of Consciousness, imagines impressions in dream, and in waking imagines outer objects through the senses.",
        "A thought of the inner organ, one with the reflection of Consciousness,",
        "projects impressions in dream, and outer objects in waking through the senses.",
        [
            "and the modification of the inner organ",
            "having become one with the reflection of Consciousness",
            "impressions / latent tendencies",
            "it imagines",
            "in dream",
            "in waking, through the senses, objects",
            "outside",
        ],
    ),
    12: (
        "The subtle body — one, insentient, having mind and ego as its material — follows the three states; so it is born and it dies.",
        "Mind and ego are the material of the one insentient subtle body.",
        "It follows the three states; it is born and it dies.",
        [
            "having mind and ego as material",
            "the subtle body is one",
            "of insentient nature",
            "it follows the three states",
            "is born",
            "dies",
            "likewise",
        ],
    ),
    13: (
        "Māyā has two powers, projecting and veiling. The projecting power creates the world from the subtle body up to the cosmic egg.",
        "Māyā has two powers: projecting and veiling.",
        "The projecting power creates the world from the subtle body to the universe.",
        [
            "a pair of powers",
            "indeed",
            "of Māyā",
            "of the form of projecting and veiling",
            "the projecting power, from the subtle body onward",
            "up to the cosmic egg",
            "the world",
            "creates",
        ],
    ),
    14: (
        "Creation is the spreading of all names and forms in the Reality that is Existence-Consciousness-Bliss, which is Brahman — like foam and the rest in the ocean.",
        "Creation is (said to be) in the Brahman-reality that is Existence-Consciousness-Bliss.",
        "Like foam etc. in the ocean: the spreading of all names and forms.",
        [
            "creation, by name,",
            "in that which has the nature of Brahman",
            "in the entity that is Existence-Consciousness-Bliss",
            "in the ocean",
            "like foam and so on",
            "the spreading of all names and forms",
        ],
    ),
    15: (
        "The other power conceals the distinction of seer and seen within, and of Brahman and creation without. That is the cause of saṃsāra.",
        "It conceals the inner distinction of seer and seen, and the outer of Brahman and creation.",
        "That other power is the cause of saṃsāra.",
        [
            "the inner distinction of seer and seen",
            "and outwardly",
            "of Brahman and creation",
            "the other (power) conceals",
            "power",
            "that",
            "of saṃsāra",
            "the cause",
        ],
    ),
    16: (
        "Before the Witness appears the subtle body joined with the gross body. From the entry of the reflection of Consciousness it becomes the empirical living self.",
        "The subtle body, joined with the body, appears before the Witness.",
        "By the entry of the reflection it becomes the empirical jīva.",
        [
            "of the Witness",
            "in front",
            "appears",
            "the subtle body",
            "with the (gross) body",
            "joined",
            "the reflection of Consciousness",
            "from its entry, the living self",
            "becomes empirical",
        ],
    ),
    17: (
        "By superimposition, that jīva-hood appears even in the Witness. When the veiling is destroyed and the distinction shines, it goes away.",
        "Jīva-hood superimposed appears even on the Witness.",
        "When the veil is gone and the distinction is clear, it disappears.",
        [
            "of this",
            "from the superimposition of jīva-hood",
            "it appears even in the Witness",
            "when the veiling",
            "but",
            "has been destroyed",
            "when the distinction",
            "having shone, it goes away",
            "that",
        ],
    ),
    18: (
        "So too a power remains, concealing the distinction of creation and Brahman; under its influence Brahman appears as modified.",
        "Likewise a power stands concealing the distinction of creation and Brahman.",
        "By its force Brahman appears as if transformed.",
        [
            "in the same way",
            "of creation and Brahman",
            "having concealed the distinction",
            "it remains",
            "which",
            "power — by its force, Brahman",
            "as modified",
            "appears",
        ],
    ),
    19: (
        "Here too, when the veiling is destroyed, the distinction of Brahman and creation shines. The modification belongs to creation, never to Brahman.",
        "Here too, with the destruction of the veil, the distinction of Brahman and creation becomes clear.",
        "Change belongs to creation, never to Brahman.",
        [
            "here too, by destruction of the veiling",
            "shines",
            "of Brahman and creation",
            "their distinction; modification",
            "would be",
            "in creation",
            "not",
            "in Brahman",
            "anywhere",
        ],
    ),
    20: (
        "There are five aspects: it exists, it shines, it is dear, form, and name. The first three are the nature of Brahman; the last two are the nature of the world.",
        "Existence, shining, dearness, form, and name: five parts.",
        "The first three are Brahman’s; the last two are the world’s.",
        [
            "it exists",
            "it shines",
            "it is dear",
            "form",
            "name",
            "thus, a group of five aspects",
            "the first three",
            "are the nature of Brahman",
            "the nature of the world",
            "then",
            "the two",
        ],
    ),
    21: (
        "In ether, air, fire, water, and earth, and in gods, animals, humans, and the rest, Existence-Consciousness-Bliss is the same; form and name differ.",
        "In the five elements and in gods, animals, humans, and so on,",
        "Existence-Consciousness-Bliss is undivided; form and name are what differ.",
        [
            "in ether, air, fire, water, and earth",
            "in gods, animals, humans, etc.",
            "undivided",
            "Existence-Consciousness-Bliss",
            "the two differ",
            "form and name",
        ],
    ),
    22: (
        "Setting aside the two, name and form, and intent on Existence-Consciousness-Bliss, one should always practise samādhi — in the heart or outside.",
        "Leaving name and form aside, intent on Existence-Consciousness-Bliss,",
        "one should always do samādhi in the heart or outside.",
        [
            "having disregarded",
            "name and form",
            "the two",
            "intent on Existence-Consciousness-Bliss",
            "samādhi",
            "always",
            "one should practise in the heart",
            "or",
            "outside",
        ],
    ),
    23: (
        "Samādhi in the heart is of two kinds, with distinction and without. That with distinction is again twofold, associated with the seen and with words.",
        "With distinction and without: samādhi in the heart is twofold.",
        "The savikalpa kind, associated with the seen or with words, is again two.",
        [
            "with distinction",
            "without distinction",
            "samādhi is of two kinds",
            "in the heart",
            "associated with the seen and with words",
            "savikalpa",
            "again twofold",
        ],
    ),
    24: (
        "Desire and the other mental objects are the seen; one should meditate as the Consciousness that is their Witness. This is savikalpa samādhi associated with the seen.",
        "Desires etc. in the mind are the seen; Consciousness is their Witness.",
        "Meditating thus is savikalpa samādhi associated with the seen.",
        [
            "desires and the rest, occurring in the mind",
            "are the seen; as their Witness",
            "Consciousness",
            "one should meditate — this, associated with the seen",
            "samādhi",
            "with distinction",
        ],
    ),
    25: (
        "“I am the unattached Existence-Consciousness-Bliss, self-luminous, free from duality” — this, associated with words, is savikalpa samādhi.",
        "Unattached, Existence-Consciousness-Bliss, self-luminous, without duality —",
        "“I am (that),” associated with words, is savikalpa samādhi.",
        [
            "unattached",
            "Existence-Consciousness-Bliss",
            "self-luminous",
            "free from duality",
            "“I am”",
            "this, associated with words",
            "samādhi",
            "with distinction",
        ],
    ),
    26: (
        "But when, absorbed in the taste of one’s own being, one disregards both the seen and words, that is nirvikalpa samādhi, like a lamp in a windless place.",
        "From absorption in the rasa of one’s own experience, disregarding seen and word —",
        "nirvikalpa samādhi, like a lamp standing in still air.",
        [
            "from absorption in the taste of one’s own experience, having disregarded seen and word",
            "but",
            "without distinction",
            "samādhi",
            "would be, like a lamp in a windless place",
        ],
    ),
    27: (
        "The first samādhi, even toward some outer thing, is separating name and form from sheer Existence.",
        "In the heart or even in an outer place, toward whatever object —",
        "the first samādhi is separating name and form from Existence alone.",
        [
            "as in the heart, so",
            "even in an outer place",
            "in whichever",
            "and in whatever",
            "thing",
            "the first samādhi",
            "is the separating of name and form from Existence alone",
        ],
    ),
    28: (
        "Unbroken thought “this is the undivided Reality whose mark is Existence-Consciousness-Bliss” is the middle samādhi.",
        "The undivided Reality marked as Existence-Consciousness-Bliss —",
        "this uninterrupted reflection is the middle samādhi.",
        [
            "undivided, of one taste",
            "the Reality",
            "whose mark is Existence-Consciousness-Bliss",
            "this uninterrupted thought",
            "the middle samādhi",
            "would be",
        ],
    ),
    29: (
        "The third, a stillness from tasting that rasa, is like the previous (nirvikalpa). With these six samādhis one should spend time without a break.",
        "A freeze of mind from tasting the rasa is the third, like the earlier one.",
        "By these six samādhis one should pass the time continuously.",
        [
            "a state of stillness",
            "from tasting the rasa, the third",
            "is held to be like the previous",
            "by these",
            "samādhis",
            "six, one should lead",
            "time",
            "without interruption",
        ],
    ),
    30: (
        "When attachment to the body has fallen away and the supreme Self is known, wherever the mind goes, there is samādhi.",
        "When body-identification has melted and the supreme Self is known,",
        "wherever the mind goes, there samādhis are.",
        [
            "when identification with the body",
            "has melted",
            "when the supreme Self is known",
            "in the supreme Self",
            "wherever",
            "wherever",
            "the mind",
            "goes",
            "there",
            "there",
            "samādhis",
        ],
    ),
    31: (
        "When that high-and-low is seen, the knot of the heart is cut, all doubts are cut away, and his karmas wear out.",
        "The knot of the heart is split; all doubts are cut.",
        "His karmas wear away when that which is high and low is seen.",
        [
            "is split",
            "the knot of the heart; are cut",
            "all doubts",
            "wear away",
            "and his",
            "karmas",
            "in that",
            "when seen",
            "which is high and low",
        ],
    ),
    32: (
        "The limited (jīva), the reflection of Consciousness, and a third imagined in dream: the jīva is to be known as threefold. The first of them is the absolute.",
        "The limited one, the reflection, and a third imagined in dream —",
        "the jīva is threefold; the first is the absolute.",
        [
            "the limited one, and the reflection of Consciousness, a third",
            "imagined in dream",
            "the jīva is to be known as threefold",
            "of them the first",
            "is the absolute",
        ],
    ),
    33: (
        "Limitation is imagined; what seems limited is real. Jīva-hood is superimposed on it; Brahman-hood is its nature.",
        "Limitation is imagined; that which is limited is real.",
        "Jīva-hood is superimposed there; Brahman-hood is by nature.",
        [
            "limitation",
            "is imagined",
            "but that which is limited",
            "but",
            "is real",
            "on that",
            "from superimposition of jīva-hood, Brahman-hood",
            "but",
            "by its own nature",
        ],
    ),
    34: (
        "Statements such as “thou art that” declare the identity of the limited jīva with full Brahman — not of the other two jīvas.",
        "The identity of the limited jīva with full Brahman —",
        "mahāvākyas such as tattvamasi declare; not of the other two jīvas.",
        [
            "of the limited",
            "jīva",
            "with the full",
            "identity with Brahman",
            "statements such as “thou art that”",
            "have declared; not of the other two jīvas",
        ],
    ),
    35: (
        "Māyā, of the nature of projecting and veiling, rests in Brahman. Covering its undivided nature, she imagines world and jīva there.",
        "Māyā, projecting and veiling, is established in Brahman.",
        "Covering undividedness, she imagines world and jīva in it.",
        [
            "established in Brahman",
            "Māyā",
            "of the nature of projecting and veiling",
            "having covered undividedness",
            "in that",
            "world and jīva",
            "she imagines",
        ],
    ),
    36: (
        "The jīva is the reflection of Consciousness in the intellect; he is the enjoyer and the doer of karma. All this world of elements and elementals is the enjoyed.",
        "The jīva, a reflection in the intellect, is enjoyer and agent.",
        "All this world of elements and their products is what is enjoyed.",
        [
            "the jīva",
            "is the reflection of Consciousness standing in the intellect",
            "would be the enjoyer",
            "for",
            "the doer of karma",
            "this, of the nature of the enjoyed",
            "all",
            "the world",
            "would be elemental and made of elements",
        ],
    ),
    37: (
        "From beginningless time until liberation these two stand in empirical dealing; therefore both are empirical.",
        "From beginningless time until liberation, this pair —",
        "stands in vyavahāra; therefore both are empirical.",
        [
            "beginning from beginningless time",
            "from liberation",
            "before it, this",
            "pair",
            "in empirical dealing",
            "stands",
            "therefore both",
            "are empirical",
        ],
    ),
    38: (
        "Sleep, of the nature of projecting and veiling, rests in the reflection of Consciousness. Covering the previous jīva and world, it imagines new ones.",
        "Sleep, projecting and veiling, is seated in the reflection.",
        "Covering the former jīva and world, it imagines new ones.",
        [
            "seated in the reflection of Consciousness",
            "sleep",
            "of the nature of projecting and veiling",
            "having covered",
            "jīva and world",
            "the previous",
            "new ones",
            "but",
            "it imagines",
        ],
    ),
    39: (
        "These two are apparent because they existed only during the time of appearing. One awakened from a dream has no standing of those two again in dream.",
        "They stand only while appearing, so they are apparent.",
        "For one woken from dream, those two have no status again in dream.",
        [
            "only at the time of appearing",
            "these two",
            "because they stood (then)",
            "in the apparent (order)",
            "not",
            "indeed",
            "of one awakened from dream",
            "again",
            "in dream",
            "is the standing of those two",
        ],
    ),
    40: (
        "The apparent jīva takes that apparent world as real; another, the empirical jīva, thinks it false.",
        "The apparent jīva (takes) that apparent world",
        "as real; the other, the empirical, thinks it false.",
        [
            "the apparent jīva",
            "who — that world",
            "is apparent",
            "as real",
            "thinks; but another",
            "as false",
            "the empirical (jīva)",
        ],
    ),
    41: (
        "The empirical jīva takes that empirical world as true; the absolute thinks it false.",
        "The empirical jīva (takes) that empirical world",
        "as true; the absolute thinks it false.",
        [
            "the empirical jīva",
            "who — that world is empirical",
            "as true",
            "cognizes",
            "as false",
            "thinks",
            "the absolute (jīva)",
        ],
    ),
    42: (
        "The absolute jīva knows its identity with Brahman to be absolute. It does not see another; it sees (the other) as of the nature of untruth.",
        "The absolute jīva (knows) identity with Brahman as absolute.",
        "It does not see another; it sees it as untrue.",
        [
            "but the absolute jīva",
            "identity with Brahman",
            "as absolute",
            "cognizes",
            "sees",
            "does not see another; it sees",
            "but as of the nature of untruth",
        ],
    ),
    43: (
        "As sweetness, fluidity, and coldness — properties of water — inhere in the wave and then, resting there, inhere also in the foam,",
        "Sweetness, fluidity, and coldness, properties of water, in the wave —",
        "having inhered, inhere also in the foam that rests on it, as it were.",
        [
            "sweetness, fluidity, and coldness",
            "properties of water, in the wave",
            "having inhered, then",
            "in that which rests on it",
            "inhere also in the foam",
            "as",
        ],
    ),
    44: (
        "Existence-Consciousness-Bliss, standing in the Witness, inhere by relation in the empirical, and through that likewise in the apparent.",
        "Existence-Consciousness-Bliss standing in the Witness, by relation, in the empirical —",
        "through that they follow likewise in the apparent.",
        [
            "standing in the Witness",
            "Existence-Consciousness-Bliss",
            "from relation, in the empirical",
            "through that they follow",
            "in the same way",
            "in the apparent",
        ],
    ),
    45: (
        "When the foam disappears, those properties such as fluidity remain in the wave; when that too disappears in the water, they remain as before.",
        "On the dissolution of the foam, those properties such as fluidity are in the wave.",
        "When that too dissolves in the water, they remain as before.",
        [
            "on dissolution",
            "of the foam",
            "those properties of it",
            "fluidity and the rest",
            "would be in the wave",
            "of that too",
            "on dissolution",
            "in the water",
            "these remain",
            "as",
            "before",
        ],
    ),
    46: (
        "On the dissolution of the apparent jīva they remain in the empirical; on its dissolution, Existence-Consciousness-Bliss come to rest in the Witness.",
        "When the apparent jīva dissolves, they remain in the empirical.",
        "When that dissolves, Existence-Consciousness-Bliss come to rest in the Witness.",
        [
            "of the apparent jīva",
            "on dissolution",
            "they would be in the empirical",
            "on the dissolution of that",
            "Existence-Consciousness-Bliss",
            "come to rest",
            "in the Witness",
        ],
    ),
}


def tokens(sam: str) -> list[tuple[str, str]]:
    rows: list[tuple[str, str]] = []
    for line in sam.strip().split("\n"):
        line = line.strip()
        end = "ddanda" if line.endswith("॥") else "danda"
        line = line.replace("॥", "").replace("।", "").strip()
        words = line.split()
        for i, w in enumerate(words):
            after = end if i == len(words) - 1 else "space"
            rows.append((w, after))
    return rows


def join_dev(rows: list[tuple[str, str, str, str]]) -> str:
    parts = []
    for _pada, slice_dev, after, _m in rows:
        parts.append(slice_dev + AFTER[after][0])
    return "".join(parts).strip("\n")


def fill_one(n: int) -> None:
    path = TEXT / f"ddv-{n:02d}.md"
    text = path.read_text(encoding="utf-8")
    fences = dict(re.findall(r"```([a-z_]+)\n(.*?)```", text, flags=re.S))
    want = iast.nfc(fences["samhita"].replace("\r\n", "\n").strip("\n"))
    toks = tokens(fences["samhita"].replace("\r\n", "\n").strip("\n"))
    tr, h1, h2, meanings = REST[n]
    if len(meanings) != len(toks):
        raise SystemExit(f"v{n}: {len(meanings)} meanings for {len(toks)} tokens {[w for w,_ in toks]}")
    rows = [(w, w, after, meaning) for (w, after), meaning in zip(toks, meanings)]
    got = iast.nfc(join_dev(rows))
    if got != want:
        raise SystemExit(f"v{n}: slice join ≠ samhita\n  want: {want!r}\n  got:  {got!r}")
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
    meta = fences["meta"].rstrip() + "\n"
    meta = re.sub(r"expected_padas: \d+", f"expected_padas: {len(rows)}", meta)
    if "translation:" in meta:
        meta = re.sub(r"translation:.*", "", meta)
    trans = tr.replace("\n", " ").strip()
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


def main() -> int:
    ns = [int(x) for x in sys.argv[1:]] if len(sys.argv) > 1 else sorted(REST)
    for n in ns:
        fill_one(n)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
