// ─────────────────────────────────────────────
// LangContext.tsx — ZH / EN language toggle.
// Wrap <App /> with <LangProvider> in main.tsx,
// then call useLang() in any component.
// ─────────────────────────────────────────────
import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'zh' | 'en';

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangCtx>({ lang: 'zh', toggle: () => {} });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('zh');
  const toggle = () => setLang(l => (l === 'zh' ? 'en' : 'zh'));
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
