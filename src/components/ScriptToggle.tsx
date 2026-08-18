import type { ScriptMode } from "../types";

const OPTIONS: { id: ScriptMode; label: string }[] = [
  { id: "devanagari", label: "Devanagari" },
  { id: "iast", label: "IAST" },
  { id: "both", label: "Both" },
];

type Props = {
  value: ScriptMode;
  onChange: (mode: ScriptMode) => void;
};

export function ScriptToggle({ value, onChange }: Props) {
  return (
    <div className="script-toggle" role="radiogroup" aria-label="Script">
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          role="radio"
          aria-checked={value === option.id}
          className={value === option.id ? "active" : ""}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
