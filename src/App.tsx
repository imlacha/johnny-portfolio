// ─────────────────────────────────────────────
// App.tsx — Layout shell: Nav bar + page sections.
// To edit content, see data.ts.
// To edit sections, see src/sections/.
// To edit reusable UI, see components.tsx.
// ─────────────────────────────────────────────
import { useScrollSpy } from './hooks/useScrollSpy';
import { NAV_ITEMS } from './data';
import { HeroSection }     from './sections/HeroSection';
import { AboutSection }    from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ContactSection }  from './sections/ContactSection';

const App = () => {
  const activeSection = useScrollSpy();

  return (
    <div className="bg-white text-brand-950 selection:bg-brand-200 overflow-x-hidden">

      {/* ── Nav ─────────────────────────────────────── */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div id="scroll-progress" className="absolute bottom-0 left-0 h-[2px] bg-brand-950 w-0 transition-all"></div>
        <div className="container px-6 py-4 mx-auto max-w-7xl flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter">JOHNNY CHEN</a>
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map(item => (
              <a key={item.id} href={`#${item.id}`}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? 'bg-brand-950 text-white shadow-lg scale-105'
                    : 'text-brand-600 hover:text-brand-950 hover:bg-brand-50'
                }`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden text-[10px] font-bold text-brand-400 tracking-widest uppercase">Portfolio 2026</div>
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
