// ─────────────────────────────────────────────
// sections/HeroSection.tsx
// ─────────────────────────────────────────────
import { useLang } from '../LangContext';
import { HERO_CONTENT } from '../data';

export const HeroSection = () => {
  const { lang } = useLang();
  const t = HERO_CONTENT[lang];

  return (
    <header id="home" className="relative h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden bg-grid">
      <div className="text-center px-6 relative z-10 reveal-up">
        <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-brand-200 rounded-full mb-6 md:mb-8">
          {t.badge}
        </span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          <span>{t.nameJp}</span><br />
          <span className="text-brand-600">{t.line1}</span>
          <span className="block text-brand-600">{t.line2}</span>
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-lg text-brand-600 font-light mb-10 md:mb-14 px-4">
          {t.desc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 px-4">
          <a href="#portfolio" className="w-full sm:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-brand-950 text-white rounded-full font-bold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-brand-500/40 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 overflow-hidden">
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative z-10">{t.cta1}</span>
            <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform relative z-10"></i>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-950 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a href="#contact" className="w-full sm:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-white/5 border border-brand-200/50 backdrop-blur-md text-brand-950 rounded-full font-bold text-sm hover:bg-white/10 hover:border-brand-950/30 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl">
            <span>{t.cta2}</span>
            <i className="fas fa-paper-plane text-[10px] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-brand-400 to-transparent animate-bounce-slow"></div>
      </div>
    </header>
  );
};
