import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { TRANSLATIONS } from "./translations";

export type Lang = "en" | "ar" | "am";

export const LANGUAGES = [
  { code: "en", short: "EN", label: "English" },
  { code: "ar", short: "ع", label: "العربية" },
  { code: "am", short: "አ", label: "አማርኛ" },
] as const satisfies ReadonlyArray<{ code: Lang; short: string; label: string }>;

const STORAGE_KEY = "site-lang";

type I18nValue = { lang: Lang; setLang: (lang: Lang) => void; t: (text: string) => string };

const I18nContext = createContext<I18nValue>({ lang: "en", setLang: () => {}, t: (text) => text });

/** English source text is the key; missing entries fall back to English. */
export function translate(text: string, lang: Lang): string {
  if (lang === "en") return text;
  const entry = TRANSLATIONS[text];
  return entry ? entry[lang === "ar" ? 0 : 1] : text;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "ar" || saved === "am") setLangState(saved);
    } catch {
      // storage unavailable
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: (text: string) => translate(text, lang) }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
