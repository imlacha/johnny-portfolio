// ─────────────────────────────────────────────
// components.tsx — Reusable UI components.
// ─────────────────────────────────────────────
import { useEffect } from 'react';
import { useLang } from './LangContext';
import type { WorkItem, ProjectItem, PaperItem } from './data';

// ── Work History Card ──────────────────────────
export const WorkCard = ({ item }: { item: WorkItem }) => {
  const base = 'h-full w-[280px] md:w-[400px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex-shrink-0 flex flex-col justify-between transition-all hover:-translate-y-1';
  const theme = item.dark
    ? `${base} bg-brand-950 text-white hover:shadow-2xl`
    : `${base} bg-white border border-brand-100 hover:shadow-xl`;

  return (
    <div className={theme}>
      <div className="mb-2">
        {/* Header Row */}
        <div className="flex justify-between items-start mb-6 md:mb-8">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center ${item.dark ? 'bg-white/10' : item.icon === 'fa-industry' ? 'bg-brand-950 text-white' : 'bg-brand-50 border border-brand-100'}`}>
            <i className={`fas ${item.icon} ${!item.dark && item.icon !== 'fa-industry' ? 'text-brand-950' : ''}`}></i>
          </div>
          {item.present
            ? <span className="text-[8px] md:text-[9px] font-bold border border-brand-500/50 text-brand-400 px-2 py-1 rounded-full animate-pulse">PRESENT</span>
            : <span className={`text-[8px] font-bold border px-2 py-1 rounded-full ${item.dark ? 'border-brand-500/50 text-brand-400' : 'border-brand-200 text-brand-400'}`}>{item.period}</span>
          }
        </div>

        {/* Company & Title */}
        <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${item.dark ? 'text-brand-400' : 'text-brand-400'}`}>
          {item.company}{item.location ? ` | ${item.location}` : ''}
        </h4>
        <h5 className={`text-lg md:text-xl font-bold mb-4 ${item.dark ? '' : 'text-brand-950'}`}>{item.title}</h5>

        {/* Body: bullets or single description */}
        {item.bullets ? (
          <ul className="space-y-2.5 mb-4">
            {item.bullets.map((b, idx) => (
              <li key={idx} className={`text-xs font-light leading-relaxed pl-3 border-l-2 ${item.dark ? 'text-brand-300 border-brand-600' : 'text-brand-600 border-brand-200'}`}>
                <span className={`font-semibold ${item.dark ? 'text-white' : 'text-brand-950'}`}>{b.label}</span>{b.text}
              </li>
            ))}
          </ul>
        ) : item.desc ? (
          <p className={`text-xs md:text-sm font-light leading-relaxed ${item.dark ? 'text-brand-300' : 'text-brand-600'}`}>{item.desc}</p>
        ) : null}

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {item.tags.map(t => (
              <span key={t} className={`px-2 py-0.5 text-[9px] font-bold rounded-full border uppercase tracking-wider ${item.dark ? 'bg-white/10 text-brand-300 border-white/10' : 'bg-brand-50 text-brand-600 border-brand-100'}`}>{t}</span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={`mt-auto pt-5 border-t flex justify-between items-center h-[44px] text-[8px] md:text-[9px] font-bold uppercase ${item.dark ? 'border-white/10 text-brand-500' : 'border-brand-100 text-brand-400'}`}>
        <span>{item.period}</span>
        {item.github && (
          <a href={item.github} target="_blank" className={`hover:text-brand-950 text-lg transition-colors`}>
            <i className="fab fa-github"></i>
          </a>
        )}
      </div>
    </div>
  );
};

// ── Project Card ───────────────────────────────
export const ProjectCard = ({ project, index = 0 }: { project: ProjectItem; index?: number }) => {
  const wrapper = `group rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl relative max-w-5xl mx-auto card-fade-in ${project.delay ? 'mt-12 md:mt-16' : ''} ${project.dark ? 'bg-brand-950 border border-white/5' : 'bg-white border border-brand-100'}`;
  const tagClass = project.dark
    ? 'px-2 py-0.5 bg-white/5 text-brand-200 text-[9px] font-bold rounded-full border border-white/10 uppercase tracking-widest'
    : 'px-2 py-0.5 bg-brand-100 text-brand-800 text-[9px] font-bold rounded-full uppercase tracking-widest';

  return (
    <div className={wrapper} style={{ animationDelay: `${index * 120}ms` }}>
      {/* Image Panel */}
      <div className={`w-full lg:w-[42%] min-h-[200px] md:min-h-[260px] flex items-center justify-center overflow-hidden flex-shrink-0 ${project.dark ? 'bg-brand-900/40' : 'bg-brand-50'}`}>
        <img
          src={project.image}
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 p-6 md:p-8"
          alt={project.title}
        />
      </div>

      {/* Content Panel */}
      <div className={`w-full lg:w-[58%] p-8 md:p-10 lg:p-12 flex flex-col justify-center ${project.dark ? 'text-white' : 'text-brand-950'}`}>
        <div className={`inline-block self-start px-3 py-1 mb-5 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full ${project.dark ? 'text-brand-400 border border-brand-800' : 'text-brand-500 border border-brand-200'}`}>
          {project.label}
        </div>
        <h4 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">{project.title}</h4>
        <p className={`text-sm font-light leading-relaxed mb-6 ${project.dark ? 'text-brand-300' : 'text-brand-600'}`}>{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => <span key={tag} className={tagClass}>{tag}</span>)}
        </div>

        <a href={project.github} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 font-bold group/link text-xs self-start ${project.dark ? 'text-white' : 'text-brand-950'}`}>
          <span className={`border-b pb-0.5 transition-all uppercase tracking-widest text-[9px] ${project.dark ? 'border-white/20 group-hover/link:border-white' : 'border-brand-200 group-hover/link:border-brand-950'}`}>VIEW ON GITHUB</span>
          <i className="fab fa-github text-lg"></i>
        </a>
      </div>
    </div>
  );
};

// ── Section Header ─────────────────────────────
export const SectionHeader = ({ eyebrow, title, divider = false }: { eyebrow: string; title: string; divider?: boolean }) => (
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-2">{eyebrow}</h2>
    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-950">{title}</h3>
    {divider && <div className="mt-4 w-12 h-1 bg-brand-950 mx-auto rounded-full opacity-20"></div>}
  </div>
);

// ── Paper Card ───────────────────────────────
interface PaperCardProps {
  paper: PaperItem;
  onOpen: () => void;
}

export const PaperCard = ({ paper, onOpen }: PaperCardProps) => {
  return (
    <div className="group bg-white border border-brand-100 hover:border-brand-200 hover:shadow-xl rounded-[2rem] p-6 md:p-8 transition-all duration-500 flex items-center justify-between card-fade-in max-w-5xl mx-auto">
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h4 className="text-lg md:text-xl font-bold text-brand-950 group-hover:text-brand-800 transition-colors leading-snug">
          {paper.title}
        </h4>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-brand-50 text-brand-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-brand-100">
            {paper.conference}
          </span>
          <span className="px-3 py-1 bg-brand-50 text-brand-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-brand-100">
            {paper.year}
          </span>
          <span className="px-3 py-1 bg-brand-50 text-brand-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-brand-100">
            {paper.author}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onOpen}
        className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-950 text-white flex items-center justify-center transition-all duration-300 hover:bg-brand-800 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg ml-6 cursor-pointer"
        aria-label="View paper details"
      >
        <i className="fas fa-paper-plane text-sm"></i>
      </button>
    </div>
  );
};

// ── Paper Modal ──────────────────────────────
interface PaperModalProps {
  paper: PaperItem;
  onClose: () => void;
}

export const PaperModal = ({ paper, onClose }: PaperModalProps) => {
  const { lang } = useLang();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const labels = {
    zh: {
      arch: '架構 / 視覺化',
      abstract: '摘要',
    },
    en: {
      arch: 'Architecture / Visualization',
      abstract: 'Abstract',
    }
  };
  const t = labels[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-950/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden z-10 animate-card-fade-in border border-brand-100">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-brand-100 flex justify-between items-start">
          <div className="pr-8">
            <h3 className="text-xl md:text-2xl font-black text-brand-950 leading-snug">{paper.title}</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-brand-50 border border-brand-200 rounded-full text-brand-600">{paper.conference}</span>
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-brand-50 border border-brand-200 rounded-full text-brand-600">{paper.year}</span>
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-brand-50 border border-brand-200 rounded-full text-brand-600">{paper.author}</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-brand-50 hover:bg-brand-100 text-brand-500 hover:text-brand-950 transition-all cursor-pointer"
            aria-label="Close"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-brand-50/50">
          
          {/* Left: Architecture (Minimalist) */}
          <div className="flex flex-col bg-white border border-brand-100 rounded-2xl p-6 min-h-[300px] justify-center items-center relative overflow-hidden group">
            <div className="absolute top-4 left-4 px-3 py-1 bg-brand-950 text-white text-[10px] font-bold tracking-widest uppercase rounded-full z-10">
              {t.arch}
            </div>
            
            {paper.image ? (
              <img 
                src={paper.image} 
                alt="System Architecture" 
                className="max-h-[320px] object-contain rounded-lg shadow-sm group-hover:scale-[1.02] transition-transform duration-500 p-2"
              />
            ) : (
              <div className="w-full flex flex-col items-center justify-center p-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md">
                  {/* Step 1 */}
                  <div className="bg-brand-50 border border-brand-100 p-3 rounded-xl shadow-sm text-center flex-1 w-full">
                    <i className="fas fa-file-csv text-brand-600 text-lg mb-1"></i>
                    <p className="text-[10px] font-black text-brand-950 tracking-wider uppercase">Input Data</p>
                    <p className="text-[8px] text-brand-500">CSV / Data Sheet</p>
                  </div>
                  {/* Arrow */}
                  <div className="text-brand-300 rotate-90 md:rotate-0">
                    <i className="fas fa-arrow-right text-sm"></i>
                  </div>
                  {/* Step 2 */}
                  <div className="bg-brand-950 border border-brand-800 p-3 rounded-xl shadow-sm text-center flex-1 w-full text-white animate-pulse">
                    <i className="fas fa-robot text-brand-400 text-lg mb-1"></i>
                    <p className="text-[10px] font-black tracking-wider uppercase text-brand-300">SLM Agent</p>
                    <p className="text-[8px] text-brand-400">ANOVA Planner</p>
                  </div>
                  {/* Arrow */}
                  <div className="text-brand-300 rotate-90 md:rotate-0">
                    <i className="fas fa-arrow-right text-sm"></i>
                  </div>
                  {/* Step 3 */}
                  <div className="bg-brand-50 border border-brand-100 p-3 rounded-xl shadow-sm text-center flex-1 w-full">
                    <i className="fas fa-chart-bar text-brand-600 text-lg mb-1"></i>
                    <p className="text-[10px] font-black text-brand-950 tracking-wider uppercase">Report</p>
                    <p className="text-[8px] text-brand-500">ANOVA Output</p>
                  </div>
                </div>
                <div className="mt-6 text-[10px] font-bold text-brand-400 uppercase tracking-widest flex items-center gap-1.5">
                  <i className="fas fa-info-circle"></i>
                  <span>ANOVA Agent System Architecture</span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Abstract (Minimalist) */}
          <div className="flex flex-col justify-between bg-white border border-brand-100 rounded-2xl p-6 min-h-[300px]">
            <div className="flex flex-col flex-1 min-h-0">
              <div className="inline-block px-3 py-1 bg-brand-950 text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 self-start">
                {t.abstract}
              </div>
              <div className="overflow-y-auto max-h-[280px] lg:max-h-[340px] pr-2 custom-scrollbar">
                <p className="text-sm font-light text-brand-600 leading-relaxed whitespace-pre-wrap break-words">
                  {paper.abstract}
                </p>
              </div>
            </div>

            {/* arXiv URL */}
            <div className="mt-6 self-end">
              <a 
                href={paper.arxivUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-950 hover:bg-brand-800 text-white transition-all duration-300 rounded-xl text-[10px] font-bold tracking-widest uppercase cursor-pointer shadow-sm"
              >
                <span>url</span>
                <i className="fas fa-external-link-alt text-[9px]"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

