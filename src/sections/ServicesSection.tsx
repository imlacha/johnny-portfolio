// ─────────────────────────────────────────────
// sections/ServicesSection.tsx
// Work History marquee section.
// ─────────────────────────────────────────────
import { useLang } from '../LangContext';
import { WORK_HISTORY, SERVICES_CONTENT } from '../data';
import { WorkCard, SectionHeader } from '../components';

export const ServicesSection = () => {
  const { lang } = useLang();
  const items = WORK_HISTORY[lang];
  const t = SERVICES_CONTENT[lang];

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-50 overflow-hidden relative">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8 relative z-10 mb-12 md:mb-16 reveal-up">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} divider />
      </div>

      {/* 4 copies = gapless loop on any screen up to ~4K */}
      <div className="flex overflow-hidden marquee-container reveal-up delay-200">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="flex gap-6 md:gap-8 pr-6 md:pr-8 flex-shrink-0 animate-marquee">
            {items.map((item, i) => <WorkCard key={i} item={item} />)}
          </div>
        ))}
      </div>
    </section>
  );
};
