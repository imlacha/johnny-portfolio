// ─────────────────────────────────────────────
// sections/AboutSection.tsx
// ─────────────────────────────────────────────
import { useLang } from '../LangContext';
import { SKILLS, CERTIFICATES, ABOUT_CONTENT } from '../data';

export const AboutSection = () => {
  const { lang } = useLang();
  const t = ABOUT_CONTENT[lang];

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

          {/* Left: Education + Certificates */}
          <div className="space-y-10 reveal-up">
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-8">{t.edu.eyebrow}</h2>
              <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-100">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-4 border-brand-950 rounded-full z-10"></div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-xl md:text-2xl font-bold text-brand-950 leading-snug min-w-0">{t.edu.school1.name}</h4>
                    <span className="text-[10px] md:text-xs font-bold text-brand-500 uppercase tracking-wider whitespace-nowrap flex-shrink-0 mt-1.5">{t.edu.school1.period}</span>
                  </div>
                  <p className="text-sm md:text-brand-600 font-medium mb-4">{t.edu.school1.dept}</p>
                  <div className="p-4 md:p-5 bg-brand-50 rounded-2xl border border-brand-100 hover:shadow-lg transition-shadow">
                    <p className="text-xs md:text-sm font-bold text-brand-950 flex items-center gap-2 mb-2">
                      <i className="fas fa-file-alt text-brand-400"></i> {t.edu.thesis.label}
                    </p>
                    <p className="text-xs md:text-sm text-brand-800 italic leading-relaxed">{t.edu.thesis.text}</p>
                    <div className="mt-3 pt-3 border-t border-brand-200/50 text-[10px] font-bold">
                      <span className="text-brand-400 uppercase tracking-widest">GPA: 4.15 / 4.3</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-4 border-brand-200 rounded-full z-10"></div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-lg md:text-xl font-bold text-brand-950 leading-snug min-w-0">{t.edu.school2.name}</h4>
                    <span className="text-[10px] md:text-xs font-bold text-brand-400 uppercase tracking-wider whitespace-nowrap flex-shrink-0 mt-1.5">{t.edu.school2.period}</span>
                  </div>
                  <p className="text-sm md:text-brand-600 font-medium">{t.edu.school2.dept}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">{t.certs.eyebrow}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATES.map(cert => (
                  <div key={cert.name} className="p-4 border border-brand-100 rounded-2xl flex items-center gap-4 bg-white hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="text-brand-950"><i className={`fas ${cert.icon} text-xl`}></i></div>
                    <div>
                      <p className="text-sm font-bold text-brand-950">{cert.name}</p>
                      <p className="text-[10px] text-brand-500">{cert.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Teaching + Skills */}
          <div className="space-y-8 reveal-up delay-200">
            <div className="space-y-4">
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">{t.teach.eyebrow}</h2>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-950">{t.teach.title}</h3>
              <p className="text-base md:text-lg leading-relaxed text-brand-600 font-light">
                {t.teach.desc}
              </p>
            </div>

            <div className="pt-8 border-t border-brand-100">
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">{t.skills.eyebrow}</h2>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-brand-950 text-white rounded-full text-[10px] md:text-xs font-medium cursor-default transition-all duration-300 hover:bg-brand-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:-translate-y-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
