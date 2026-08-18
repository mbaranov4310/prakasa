import { useNavLang } from "../lib/nav-lang";
import type { NavLang } from "../lib/prefs";

const OPTIONS: { id: NavLang; label: string }[] = [
  { id: "sanskrit", label: "Sanskrit" },
  { id: "english", label: "English" },
];

export function LangToggle() {
  const { navLang, setNavLang } = useNavLang();

  return (
    <div className="script-toggle" role="radiogroup" aria-label="Language">
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          role="radio"
          aria-checked={navLang === option.id}
          className={navLang === option.id ? "active" : ""}
          onClick={() => setNavLang(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
