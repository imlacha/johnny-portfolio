// ─────────────────────────────────────────────
// sections/PortfolioSection.tsx
// ─────────────────────────────────────────────
import { useLang } from '../LangContext';
import { PROJECTS, PORTFOLIO_CONTENT } from '../data';
import { ProjectCard, SectionHeader } from '../components';

export const PortfolioSection = () => {
  const { lang } = useLang();
  const projects = PROJECTS[lang];
  const t = PORTFOLIO_CONTENT[lang];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">

        {/* Header — card-fade-in so it always shows on load, no reveal-up */}
        <div className="mb-16 md:mb-20 text-center card-fade-in">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} />
          <div className="mt-4 w-12 h-1 bg-brand-950 mx-auto rounded-full"></div>
        </div>

        {/* Cards — same spacing as before: only 2nd/3rd card has top margin */}
        {projects.map((p, i) => (
          <ProjectCard key={`${lang}-${i}`} project={p} index={i} />
        ))}

      </div>
    </section>
  );
};
