// ─────────────────────────────────────────────
// sections/PortfolioSection.tsx
// ─────────────────────────────────────────────
import { PROJECTS } from '../data';
import { ProjectCard, SectionHeader } from '../components';

export const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-white">
    <div className="container px-6 mx-auto max-w-7xl lg:px-8">
      <div className="mb-16 md:mb-20 reveal-up">
        <SectionHeader eyebrow="Selected Works" title="專案作品集" />
        <div className="mt-4 w-12 h-1 bg-brand-950 mx-auto rounded-full"></div>
      </div>
      {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
    </div>
  </section>
);
