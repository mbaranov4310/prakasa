import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { loadNavLang, saveNavLang, type NavLang } from "./prefs";

type NavLangContextValue = {
  navLang: NavLang;
  setNavLang: (lang: NavLang) => void;
};

const NavLangContext = createContext<NavLangContextValue | null>(null);

export function NavLangProvider({ children }: { children: ReactNode }) {
  const [navLang, setNavLangState] = useState<NavLang>(loadNavLang);

  const value = useMemo(
    () => ({
      navLang,
      setNavLang: (lang: NavLang) => {
        setNavLangState(lang);
        saveNavLang(lang);
      },
    }),
    [navLang],
  );

  return <NavLangContext.Provider value={value}>{children}</NavLangContext.Provider>;
}

export function useNavLang() {
  const context = useContext(NavLangContext);
  if (!context) {
    throw new Error("useNavLang must be used within NavLangProvider");
  }
  return context;
}
