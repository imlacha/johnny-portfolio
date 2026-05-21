// ─────────────────────────────────────────────
// App.tsx — Layout shell: Nav bar + page sections.
// To edit content, see data.ts.
// To edit sections, see src/sections/.
// To edit reusable UI, see components.tsx.
// ─────────────────────────────────────────────
import { useScrollSpy } from './hooks/useScrollSpy';
import { NAV_ITEMS } from './data';
import { useLang } from './LangContext';
import { HeroSection }     from './sections/HeroSection';
import { AboutSection }    from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ContactSection }  from './sections/ContactSection';

const App = () => {
  const activeSection = useScrollSpy();
  const { lang, toggle } = useLang();
  const navItems = NAV_ITEMS[lang];

  return (
    <div className="bg-white text-brand-950 selection:bg-brand-200 overflow-x-hidden">

      {/* ── Nav ─────────────────────────────────────── */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div id="scroll-progress" className="absolute bottom-0 left-0 h-[2px] bg-brand-950 w-0 transition-all"></div>
        <div className="container px-6 py-4 mx-auto max-w-7xl flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter">JOHNNY CHEN</a>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? 'bg-brand-950 text-white shadow-lg scale-105'
                    : 'text-brand-600 hover:text-brand-950 hover:bg-brand-50'
                }`}>
                {item.label}
              </a>
            ))}

            {/* ── Language Toggle ─────────────────────── */}
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="ml-3 relative flex items-center gap-0 rounded-full border border-brand-200 bg-brand-50 overflow-hidden text-[10px] font-black tracking-widest uppercase shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              <span className={`px-3 py-2 transition-all duration-300 ${lang === 'zh' ? 'bg-brand-950 text-white' : 'text-brand-400 hover:text-brand-700'}`}>
                ZH
              </span>
              <span className={`px-3 py-2 transition-all duration-300 ${lang === 'en' ? 'bg-brand-950 text-white' : 'text-brand-400 hover:text-brand-700'}`}>
                EN
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <span className="text-[10px] font-bold text-brand-400 tracking-widest uppercase">Portfolio 2026</span>
            {/* Mobile lang toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="flex items-center rounded-full border border-brand-200 bg-brand-50 overflow-hidden text-[9px] font-black tracking-widest uppercase"
            >
              <span className={`px-2 py-1 transition-all duration-300 ${lang === 'zh' ? 'bg-brand-950 text-white' : 'text-brand-400'}`}>ZH</span>
              <span className={`px-2 py-1 transition-all duration-300 ${lang === 'en' ? 'bg-brand-950 text-white' : 'text-brand-400'}`}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Sections ────────────────────────────────── */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />

      <footer className="py-10 bg-brand-950 border-t border-white/5 text-center text-white/20 text-[9px] tracking-widest uppercase">
        © {new Date().getFullYear()} Johnny Chen.
      </footer>
    </div>
  );
};

export default App;
