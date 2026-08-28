import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I bow to Bhava, together with Bhavānī — camphor-white, compassion incarnate, the essence of the world, garlanded with the serpent-king — who always dwells in the lotus of the heart.";

export const siva: Chapter = {
  id: "siva",
  titleDev: "शिवः",
  titleIast: "śivaḥ",
  titleEn: "Śiva",
  status: "ready",
  translation,
  glossary: [
    { term: "karpūragauram", meaning: "camphor-white" },
    { term: "karuṇāvatāram", meaning: "the embodiment of compassion" },
    { term: "saṃsārasāram", meaning: "the essence of the world (here: worldly existence)" },
    { term: "bhujagendrahāram", meaning: "wearing the king of serpents as a garland" },
    { term: "sadā", meaning: "always" },
    { term: "vasantam", meaning: "dwelling" },
    { term: "hṛdayāravinde", meaning: "in the lotus of the heart" },
    { term: "bhavam", meaning: "Bhava (Śiva)" },
    { term: "bhavānīsahitam", meaning: "together with Bhavānī" },
    { term: "namāmi", meaning: "I bow" },
  ],
  root: group("si-verse", "verse", translation, [
    group("si-form", "phrase", "camphor-white, compassion incarnate, essence of the world, garlanded with the serpent-king", [
      group("si-white", "phrase", "camphor-white", [
        word("si-karpura", "camphor", [["कर्", "kar"], ["पू", "pū"], ["र", "ra"]], { trailing: "" }),
        word("si-gauram", "white", [["गौ", "gau"], ["रं", "raṃ"]]),
      ]),
      group("si-compassion", "phrase", "the embodiment of compassion", [
        word("si-karuna", "compassion", [["क", "ka"], ["रु", "ru"], ["णा", "ṇā"]], { trailing: "" }),
        word("si-avataram", "embodiment", [["व", "va"], ["ता", "tā"], ["रं", "raṃ"]]),
      ]),
      group("si-essence", "phrase", "the essence of the world", [
        word("si-samsara", "the world (here: worldly existence)", [["सं", "saṃ"], ["सा", "sā"], ["र", "ra"]], { trailing: "" }),
        word("si-saram", "essence", [["सा", "sā"], ["रं", "raṃ"]]),
      ]),
      group("si-garland", "phrase", "wearing the king of serpents as a garland", [
        word("si-bhujaga", "serpent", [["भु", "bhu"], ["ज", "ja"], ["गे", "ge"]], { trailing: "" }),
        word("si-indra", "king", [["न्द्र", "ndra"]], { trailing: "" }),
        word("si-haram", "garland", [["हा", "hā"], ["रम्", "ram"]], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
      ]),
    ]),
    group("si-bow", "phrase", "I bow to Bhava with Bhavānī, who always dwells in the lotus of the heart", [
      word("si-sada", "always", [["स", "sa"], ["दा", "dā"]]),
      word("si-vasantam", "dwelling", [["व", "va"], ["स", "sa"], ["न्तं", "ntaṃ"]]),
      group("si-heart", "phrase", "in the lotus of the heart", [
        word("si-hrdaya", "heart", [["हृ", "hṛ"], ["द", "da"], ["या", "yā"]], { trailing: "" }),
        word("si-aravinde", "in the lotus", [["र", "ra"], ["वि", "vi"], ["न्दे", "nde"]]),
      ]),
      word("si-bhavam", "Bhava (Śiva)", [["भ", "bha"], ["वं", "vaṃ"]]),
      group("si-with", "phrase", "together with Bhavānī", [
        word("si-bhavani", "Bhavānī", [["भ", "bha"], ["वा", "vā"], ["नी", "nī"]], { trailing: "" }),
        word("si-sahitam", "together with", [["स", "sa"], ["हि", "hi"], ["तं", "taṃ"]]),
      ]),
      word("si-namami", "I bow", [["न", "na"], ["मा", "mā"], ["मि", "mi"]], { trailing: " ॥" }),
    ]),
  ]),
};
