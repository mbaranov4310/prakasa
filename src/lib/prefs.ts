export type NavLang = "sanskrit" | "english";

const KEY = "prakasa-nav-lang";

export function loadNavLang(): NavLang {
  try {
    return localStorage.getItem(KEY) === "english" ? "english" : "sanskrit";
  } catch {
    return "sanskrit";
  }
}

export function saveNavLang(lang: NavLang) {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* ignore quota / private mode */
  }
}
