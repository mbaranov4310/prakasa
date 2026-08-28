import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I bow to that Dhanvantari who holds, in his four beautiful arms, the conch, the discus, a leech, and the pot of nectar; whose diadem shines with a fine, pure, lovely cloth, whose eyes are lotuses; whose body gleams like a dark rain-cloud, whose hips are adorned with a beautiful yellow garment; whose play is a raging wildfire that burns down the whole forest of diseases.";

export const dhanvantari: Chapter = {
  id: "dhanvantari",
  titleDev: "धन्वन्तरिः",
  titleIast: "dhanvantariḥ",
  titleEn: "Dhanvantari",
  status: "ready",
  translation,
  glossary: [
    { term: "śaṅkham", meaning: "conch" },
    { term: "cakram", meaning: "discus" },
    { term: "jalaukām", meaning: "leech" },
    { term: "dadhat", meaning: "holding" },
    { term: "amṛta", meaning: "nectar" },
    { term: "ghaṭam", meaning: "pot" },
    { term: "cāru", meaning: "beautiful" },
    { term: "dorbhiḥ", meaning: "with arms" },
    { term: "caturbhiḥ", meaning: "with four" },
    { term: "sūkṣma", meaning: "fine" },
    { term: "svaccha", meaning: "pure" },
    { term: "ati", meaning: "most / very" },
    { term: "hṛdya", meaning: "charming" },
    { term: "aṃśuka", meaning: "cloth" },
    { term: "pari", meaning: "all around" },
    { term: "vilasat", meaning: "shining" },
    { term: "maulim", meaning: "diadem" },
    { term: "ambhoja", meaning: "lotus" },
    { term: "netram", meaning: "eyes" },
    { term: "kāla", meaning: "dark" },
    { term: "ambhoda", meaning: "rain-cloud" },
    { term: "ujjvala", meaning: "gleaming" },
    { term: "aṅgam", meaning: "body / limbs" },
    { term: "kaṭi", meaning: "hip" },
    { term: "taṭa", meaning: "slope / region" },
    { term: "pīta", meaning: "yellow" },
    { term: "ambara", meaning: "garment" },
    { term: "āḍhyam", meaning: "adorned with" },
    { term: "vande", meaning: "I bow" },
    { term: "dhanvantarim", meaning: "to Dhanvantari" },
    { term: "tam", meaning: "that one" },
    { term: "nikhila", meaning: "entire" },
    { term: "gada", meaning: "disease" },
    { term: "vana", meaning: "forest" },
    { term: "prauḍha", meaning: "mighty" },
    { term: "dāva", meaning: "forest-fire" },
    { term: "agni", meaning: "fire" },
    { term: "līlam", meaning: "play / sport" },
  ],
  root: group("dh-verse", "verse", translation, [
    group(
      "dh-pada1",
      "phrase",
      "holding conch, discus, leech, and the nectar-pot in four beautiful arms",
      [
        word("dh-sankham", "conch", [["शङ्", "śaṅ"], ["खं", "khaṃ"]]),
        word("dh-cakram", "discus", [["च", "ca"], ["क्रं", "kraṃ"]]),
        word("dh-jalaukam", "leech", [
          ["ज", "ja"],
          ["लौ", "lau"],
          ["कां", "kāṃ"],
        ]),
        group("dh-nectar", "phrase", "holding the pot of nectar", [
          word("dh-dadhat", "holding", [["द", "da"], ["ध", "dha"], ["द", "da"]], {
            trailing: "",
          }),
          word("dh-amrta", "nectar", [["मृ", "mṛ"], ["त", "ta"]], { trailing: "" }),
          word("dh-ghatam", "pot", [["घ", "gha"], ["टं", "ṭaṃ"]]),
        ]),
        group("dh-arms", "phrase", "with beautiful arms", [
          word("dh-caru1", "beautiful", [["चा", "cā"], ["रु", "ru"]], {
            trailing: "",
          }),
          word("dh-dorbhih", "with arms", [["दो", "do"], ["र्भिश्", "rbhiś"]], {
            trailing: "",
          }),
        ]),
        word("dh-caturbhih", "with four", [
          ["च", "ca"],
          ["तु", "tu"],
          ["र्भिः", "rbhiḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "dh-pada2",
      "phrase",
      "whose diadem shines with a fine, pure, lovely cloth; lotus-eyed",
      [
        group("dh-cloth", "phrase", "a fine, pure, most charming cloth", [
          word("dh-suksma", "fine", [["सू", "sū"], ["क्ष्म", "kṣma"]], {
            trailing: "",
          }),
          word("dh-svaccha", "pure", [["स्व", "sva"], ["च्छा", "cchā"]], {
            trailing: "",
          }),
          word("dh-ati", "most / very", [["ति", "ti"]], { trailing: "" }),
          word("dh-hrdya", "charming", [["हृ", "hṛ"], ["द्यां", "dyāṃ"]], {
            trailing: "",
          }),
          word("dh-amsuka", "cloth", [["शु", "śu"], ["क", "ka"]]),
        ]),
        group("dh-diadem", "phrase", "whose diadem is shining all around", [
          word("dh-pari", "all around", [["प", "pa"], ["रि", "ri"]], {
            trailing: "",
          }),
          word("dh-vilasat1", "shining", [
            ["वि", "vi"],
            ["ल", "la"],
            ["सन्", "san"],
          ], { trailing: "" }),
          word("dh-maulim", "diadem", [["मौ", "mau"], ["लि", "li"], ["म", "ma"]], {
            trailing: "",
          }),
        ]),
        group("dh-eyes", "phrase", "lotus-eyed", [
          word("dh-ambhoja", "lotus", [["म्भो", "mbho"], ["ज", "ja"]], {
            trailing: "",
          }),
          word("dh-netram", "eyes", [["ने", "ne"], ["त्रम्", "tram"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ]),
      ],
    ),
    group(
      "dh-pada3",
      "phrase",
      "body gleaming like a dark rain-cloud; hips adorned with a yellow garment",
      [
        group("dh-cloud", "phrase", "whose body gleams like a dark rain-cloud", [
          word("dh-kala", "dark", [["का", "kā"], ["ला", "lā"]], { trailing: "" }),
          word("dh-ambhoda", "rain-cloud", [["म्भो", "mbho"], ["दो", "do"]], {
            trailing: "",
          }),
          word("dh-ujjvala", "gleaming", [["ज्ज्व", "jjva"], ["लाङ्", "lāṅ"]], {
            trailing: "",
          }),
          word("dh-angam", "body / limbs", [["गं", "gaṃ"]]),
        ]),
        group("dh-hips", "phrase", "whose hip is adorned with a beautiful yellow garment", [
          word("dh-kati", "hip", [["क", "ka"], ["टि", "ṭi"]], { trailing: "" }),
          word("dh-tata", "slope / region", [["त", "ta"], ["ट", "ṭa"]], {
            trailing: "",
          }),
          word("dh-vilasat2", "shining", [
            ["वि", "vi"],
            ["ल", "la"],
            ["सच्", "sac"],
          ], { trailing: "" }),
          word("dh-caru2", "beautiful", [["चा", "cā"], ["रु", "ru"]], {
            trailing: "",
          }),
          word("dh-pita", "yellow", [["पी", "pī"], ["ता", "tā"]], { trailing: "" }),
          word("dh-ambara", "garment", [["म्ब", "mba"], ["रा", "rā"]], {
            trailing: "",
          }),
          word("dh-adhyam", "adorned with", [["ढ्यम्", "ḍhyam"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ]),
      ],
    ),
    group(
      "dh-pada4",
      "phrase",
      "I bow to that Dhanvantari, whose play is a wildfire to the forest of diseases",
      [
        word("dh-vande", "I bow", [["व", "va"], ["न्दे", "nde"]]),
        word("dh-dhanvantarim", "to Dhanvantari", [
          ["ध", "dha"],
          ["न्व", "nva"],
          ["न्ति", "nti"],
          ["रिं", "riṃ"],
        ]),
        word("dh-tam", "that one", [["तं", "taṃ"]]),
        group("dh-fire", "phrase", "whose sport is a mighty forest-fire to the entire forest of diseases", [
          word("dh-nikhila", "entire", [
            ["नि", "ni"],
            ["खि", "khi"],
            ["ल", "la"],
          ], { trailing: "" }),
          word("dh-gada", "disease", [["ग", "ga"], ["द", "da"]], { trailing: "" }),
          word("dh-vana", "forest", [["व", "va"], ["न", "na"]], { trailing: "" }),
          word("dh-praudha", "mighty", [["प्रौ", "prau"], ["ढ", "ḍha"]], {
            trailing: "",
          }),
          word("dh-dava", "forest-fire", [["दा", "dā"], ["वा", "vā"]], {
            trailing: "",
          }),
          word("dh-agni", "fire", [["ग्नि", "gni"]], { trailing: "" }),
          word("dh-lilam", "play / sport", [["ली", "lī"], ["लम्", "lam"]], {
            trailing: " ॥",
          }),
        ]),
      ],
    ),
  ]),
};
