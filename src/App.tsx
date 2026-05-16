import { useEffect, useState } from 'react';
import ragImage from './assets/pii_rag_workflow.png';
import qrImage from './assets/qr_shortener_mockup.png';
import { NAV_ITEMS, SKILLS, CERTIFICATES, WORK_HISTORY } from './data';
import { WorkCard, ProjectCard, SectionHeader } from './components';

// ── Static project data (image paths need to be defined here after import) ──
const PROJECTS = [
  {
    dark: true,
    label: 'AI Security Architecture',
    title: '雙流隱私保護 RAG 系統',
    desc: '透過「去識別化中介層」實現「零真實個資」的外部 LLM 檢索，確保企業級資料安全性。',
    tags: ['Python', 'Langchain', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/imlacha/PII-Mocking-RAG/',
    image: ragImage,
    delay: false,
  },
  {
    dark: false,
    label: 'Backend Infrastructure',
    title: 'QR Code 縮網址系統',
    desc: '基於 FastAPI 的高效能縮網址與動態 QR Code 生成系統，支援點擊分析與 Docker 快速部署。',
    tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Segno'],
    github: 'https://github.com/imlacha/qrcode-sys',
    image: qrImage,
    delay: true,
  },
];

const App = () => {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ── Side-effects: scroll progress + scroll-spy + reveal animations ──
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.width = `${(winScroll / height) * 100}%`;
    };

    // ScrollSpy
    const spy = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    ['home', 'about', 'services', 'portfolio', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    // Reveal on scroll
    const reveal = new IntersectionObserver(
      (entries, obs) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('reveal-active'); obs.unobserve(e.target); } }),
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-up').forEach(el => reveal.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      spy.disconnect();
      reveal.disconnect();
    };
  }, []);

  const copyEmail = () => {
    if (copied) return;
    navigator.clipboard.writeText('johnny50327@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${activeSection === item.id
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

      {/* ── Hero ─────────────────────────────────────── */}
      <header id="home" className="relative h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden bg-grid">
        <div className="text-center px-6 relative z-10 reveal-up">
          <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-brand-200 rounded-full mb-6 md:mb-8">
            Machine Learning &amp; Software Engineer
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            <span>陳世宗</span><br />
            <span className="text-brand-600">一個對 AI 有研究熱忱</span>
            <span className="block text-brand-600">的工程師</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-brand-600 font-light mb-10 md:mb-14 px-4">
            專精於將大型語言模型（LLM）轉化為實際解決解決方案，扮演連結「AI應用」與「企業實務」的橋樑。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 px-4">
            <a href="#portfolio" className="w-full sm:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-brand-950 text-white rounded-full font-bold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-brand-500/40 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10">探索作品集</span>
              <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform relative z-10"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-950 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#contact" className="w-full sm:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-white/5 border border-brand-200/50 backdrop-blur-md text-brand-950 rounded-full font-bold text-sm hover:bg-white/10 hover:border-brand-950/30 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl">
              <span>聯絡資訊</span>
              <i className="fas fa-paper-plane text-[10px] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all"></i>
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-[1.5px] h-10 bg-gradient-to-b from-brand-400 to-transparent animate-bounce-slow"></div>
        </div>
      </header>

      {/* ── About ─────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

            {/* Left: Education + Certificates */}
            <div className="space-y-10 reveal-up">
              <div>
                <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-8">Education</h2>
                <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-100">
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-4 border-brand-950 rounded-full z-10"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-1">
                      <h4 className="text-xl md:text-2xl font-bold text-brand-950">國立臺灣科技大學</h4>
                      <span className="text-[10px] md:text-xs font-bold text-brand-500 uppercase tracking-wider">2023 - 2025</span>
                    </div>
                    <p className="text-sm md:text-brand-600 font-medium mb-4">工業管理研究所</p>
                    <div className="p-4 md:p-5 bg-brand-50 rounded-2xl border border-brand-100 hover:shadow-lg transition-shadow">
                      <p className="text-xs md:text-sm font-bold text-brand-950 flex items-center gap-2 mb-2">
                        <i className="fas fa-file-alt text-brand-400"></i> 碩士論文
                      </p>
                      <p className="text-xs md:text-sm text-brand-800 italic leading-relaxed">「基於 SLM 小型語言模型 Agent 機制之 ANOVA 統計推論架構與探索」</p>
                      <div className="mt-3 pt-3 border-t border-brand-200/50 text-[10px] font-bold">
                        <span className="text-brand-400 uppercase tracking-widest">GPA: 4.15 / 4.3</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-4 border-brand-200 rounded-full z-10"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-1">
                      <h4 className="text-lg md:text-xl font-bold text-brand-950">逢甲大學</h4>
                      <span className="text-[10px] md:text-xs font-bold text-brand-400 uppercase tracking-wider">2019 - 2022</span>
                    </div>
                    <p className="text-sm md:text-brand-600 font-medium">工業工程與系統管理學系</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">Certificates</h2>
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
                <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">Teaching Experience</h2>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-950">學術助教 | 2023 - 2025</h3>
                <p className="text-base md:text-lg leading-relaxed text-brand-600 font-light">
                  負責模擬學演算法、計算機程式實習、華泰電子-預知保養、機器學習等課程。包含教材編撰、管理個案教材，並協助機器學習的課堂實踐。
                </p>
              </div>

              <div className="pt-8 border-t border-brand-100">
                <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">Core Skills</h2>
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

      {/* ── Work History (Marquee) ────────────────────── */}
      <section id="services" className="py-24 md:py-32 bg-brand-50 overflow-hidden relative">
        <div className="container px-6 mx-auto max-w-7xl lg:px-8 relative z-10 mb-12 md:mb-16 reveal-up">
          <SectionHeader eyebrow="Work History" title="實戰專案背景" divider />
        </div>

        {/* 4 copies = gapless loop on any screen up to ~4K */}
        <div className="flex overflow-hidden marquee-container reveal-up delay-200">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="flex gap-6 md:gap-8 pr-6 md:pr-8 flex-shrink-0 animate-marquee">
              {WORK_HISTORY.map(item => <WorkCard key={item.company} item={item} />)}
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────── */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container px-6 mx-auto max-w-7xl lg:px-8">
          <div className="mb-16 md:mb-20 reveal-up">
            <SectionHeader eyebrow="Selected Works" title="專案作品集" />
            <div className="mt-4 w-12 h-1 bg-brand-950 mx-auto rounded-full"></div>
          </div>
          {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────── */}
      <section id="contact" className="py-24 bg-brand-950 relative overflow-hidden dark-grid">
        <div className="container px-6 mx-auto max-w-7xl relative z-10 text-center reveal-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 md:mb-12 uppercase tracking-tighter">LET'S CONNECT</h2>

          <button onClick={copyEmail}
            className={`group px-8 md:px-10 py-4 md:py-5 rounded-full font-bold shadow-2xl transition-all duration-500 text-sm md:text-base ${copied ? 'bg-green-500 text-white scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]' : 'bg-white text-brand-950 hover:-translate-y-2'
              }`}>
            {copied
              ? <span className="flex items-center gap-3"><i className="fas fa-check-circle text-lg md:text-xl"></i> EMAIL COPIED!</span>
              : 'johnny50327@gmail.com'
            }
          </button>

          <div className="mt-12 md:mt-16 flex justify-center gap-6 md:gap-8 text-white/40 text-xl md:text-2xl">
            <a href="https://github.com/imlacha" target="_blank" className="hover:text-white hover:scale-110 hover:-translate-y-1 transition-all"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/shi-zong-chen-950486311/" target="_blank" className="hover:text-white hover:scale-110 hover:-translate-y-1 transition-all"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-brand-950 border-t border-white/5 text-center text-white/20 text-[9px] tracking-widest uppercase">
        © {new Date().getFullYear()} Johnny Chen.
      </footer>
    </div>
  );
};

export default App;
