import { useEffect, useState } from 'react';
import ragImage from './assets/pii_rag_workflow.png';
import qrImage from './assets/qr_shortener_mockup.png';

const App = () => {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll Progress
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) progressBar.style.width = scrolled + "%";
    };

    // Intersection Observer for ScrollSpy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ['home', 'about', 'services', 'portfolio', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Intersection Observer for Reveal Animations (Fade up)
    const revealCallback = (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          obs.unobserve(entry.target);
        }
      });
    };
    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });
    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const copyEmail = () => {
    if (copied) return;
    navigator.clipboard.writeText("johnny50327@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navItems = [
    { id: 'about', label: '關於' },
    { id: 'services', label: '經歷' },
    { id: 'portfolio', label: '作品' },
    { id: 'contact', label: '聯絡' }
  ];

  return (
    <div className="bg-white text-brand-950 selection:bg-brand-200 overflow-x-hidden">
      {/* Nav */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div id="scroll-progress" className="absolute bottom-0 left-0 h-[2px] bg-brand-950 w-0 transition-all"></div>
        <div className="container px-6 py-4 mx-auto max-w-7xl flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter">JOHNNY CHEN</a>
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${activeSection === item.id
                  ? 'bg-brand-950 text-white shadow-lg scale-105'
                  : 'text-brand-600 hover:text-brand-950 hover:bg-brand-50'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden text-[10px] font-bold text-brand-400 tracking-widest uppercase">Portfolio 2026</div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="relative h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden bg-grid">
        <div className="text-center px-6 relative z-10 reveal-up">
          <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-brand-200 rounded-full mb-6 md:mb-8">Machine Learning & Software Engineer</span>
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
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              
              <span className="relative z-10">探索作品集</span>
              <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform relative z-10"></i>
              
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-950 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a href="#contact" className="w-full sm:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-white/5 border border-brand-200/50 backdrop-blur-md text-brand-950 rounded-full font-bold text-sm hover:bg-white/10 hover:border-brand-950/30 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl">
              <span>聯絡資訊</span>
              <i className="fas fa-paper-plane text-[10px] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all"></i>
            </a>
          </div>
        </div>

        {/* Optimized Scroll Indicator: Minimalist & Non-intrusive */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-[1.5px] h-10 bg-gradient-to-b from-brand-400 to-transparent animate-bounce-slow"></div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
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
                      <div className="mt-3 pt-3 border-t border-brand-200/50 flex items-center justify-between text-[10px] font-bold">
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
                  <div className="p-4 border border-brand-100 rounded-2xl flex items-center gap-4 bg-white hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="text-brand-950"><i className="fas fa-certificate text-xl"></i></div>
                    <div>
                      <p className="text-sm font-bold text-brand-950">Microsoft AI-900</p>
                      <p className="text-[10px] text-brand-500">Azure AI Fundamentals</p>
                    </div>
                  </div>
                  <div className="p-4 border border-brand-100 rounded-2xl flex items-center gap-4 bg-white hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="text-brand-950"><i className="fas fa-database text-xl"></i></div>
                    <div>
                      <p className="text-sm font-bold text-brand-950">Udemy SQL Bootcamp</p>
                      <p className="text-[10px] text-brand-500">Zero to Hero Mastery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                  {['SLMs / LLMs', 'RAG', 'Langgraph', 'Git / Docker', 'Langchain', 'MCP', 'Python', 'React.js', 'PostgreSQL', 'n8n', 'Azure / AWS / GCP', 'Data Analysis', 'Pytorch', 'NLP'].map(skill => (
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

      {/* Experience Section (Marquee - Fixed Seams) */}
      <section id="services" className="py-24 md:py-32 bg-brand-50 overflow-hidden relative">
        <div className="container px-6 mx-auto max-w-7xl lg:px-8 relative z-10 mb-12 md:mb-16 reveal-up">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-2">Work History</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-950">實戰專案背景</h3>
            <div className="mt-4 w-12 h-1 bg-brand-950 mx-auto rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Seamless Marquee: Using 4 identical copies with -100% translation for perfect looping on any screen size */}
        <div className="flex overflow-hidden marquee-container reveal-up delay-200">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-6 md:gap-8 pr-6 md:pr-8 flex-shrink-0 animate-marquee">
              <div className="w-[280px] md:w-[400px] p-8 md:p-10 bg-brand-950 text-white rounded-[2.5rem] md:rounded-[3rem] flex-shrink-0 flex flex-col justify-between hover:shadow-2xl transition-all hover:-translate-y-1">
                <div>
                  <div className="flex justify-between items-start mb-8 md:mb-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <i className="fas fa-brain"></i>
                    </div>
                    <span className="text-[8px] md:text-[9px] font-bold border border-brand-500/50 text-brand-400 px-2 py-1 rounded-full animate-pulse">PRESENT</span>
                  </div>
                  <h4 className="text-brand-400 text-[10px] font-bold uppercase tracking-widest mb-2">麟數據 LNDATA</h4>
                  <h5 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">MLOps Engineer</h5>
                  <p className="text-brand-300 text-xs md:text-sm font-light leading-relaxed">GenBI 系統開發與研發，建構自動化代理工作流。</p>
                </div>
                <div className="pt-6 border-t border-white/10 text-[8px] md:text-[9px] font-bold text-brand-500 uppercase">2026 - NOW</div>
              </div>

              <div className="w-[280px] md:w-[400px] p-8 md:p-10 bg-white border border-brand-100 rounded-[2.5rem] md:rounded-[3rem] flex-shrink-0 flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1">
                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl md:rounded-2xl flex items-center justify-center border border-brand-100">
                      <i className="fas fa-microchip text-brand-950"></i>
                    </div>
                    <span className="text-[8px] font-bold border border-brand-200 text-brand-400 px-2 py-1 rounded-full">Jul 2024 – Apr 2025</span>
                  </div>
                  <h4 className="text-brand-400 text-[10px] font-bold uppercase tracking-widest mb-1">DELL | Taipei, Taiwan</h4>
                  <h5 className="text-lg md:text-xl font-bold text-brand-950 mb-4">GenAI 硬體自動化測試系統</h5>
                  <ul className="space-y-2.5 mb-4">
                    <li className="text-brand-600 text-xs font-light leading-relaxed pl-3 border-l-2 border-brand-200"><span className="font-semibold text-brand-950">分散式對話系統：</span>整合 TTS 與自訂義角色，使裝置能在多輪對話中動態切換角色，實現自動化語音互動測試。</li>
                    <li className="text-brand-600 text-xs font-light leading-relaxed pl-3 border-l-2 border-brand-200"><span className="font-semibold text-brand-950">準確率驗證：</span>導入 Whisper 模型轉錄錄音，透過關鍵字匹配演算法自動驗證測試結果。</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'PyQt5', 'Whisper', 'TTS'].map(t => (
                      <span key={t} className="px-2 py-0.5 bg-brand-50 text-brand-600 text-[9px] font-bold rounded-full border border-brand-100 uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-5 border-t border-brand-100 text-[8px] md:text-[9px] font-bold text-brand-400 uppercase">2024 - 2025</div>
              </div>

              <div className="w-[280px] md:w-[400px] p-8 md:p-10 bg-white border border-brand-100 rounded-[2.5rem] md:rounded-[3rem] flex-shrink-0 flex flex-col justify-between relative hover:shadow-xl transition-all hover:-translate-y-1">
                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-950 text-white rounded-xl md:rounded-2xl flex items-center justify-center">
                      <i className="fas fa-industry"></i>
                    </div>
                    <span className="text-[8px] font-bold border border-brand-200 text-brand-400 px-2 py-1 rounded-full">Oct 2023 – Dec 2024</span>
                  </div>
                  <h4 className="text-brand-400 text-[10px] font-bold uppercase tracking-widest mb-1">Foxlink | Taipei, Taiwan</h4>
                  <h5 className="text-lg md:text-xl font-bold text-brand-950 mb-4">預知保養系統</h5>
                  <ul className="space-y-2.5 mb-4">
                    <li className="text-brand-600 text-xs font-light leading-relaxed pl-3 border-l-2 border-brand-200"><span className="font-semibold text-brand-950">預測性維護：</span>結合 Ensemble Learning 預測耗材最佳更換時機，成功提升 90% 維護效率。</li>
                    <li className="text-brand-600 text-xs font-light leading-relaxed pl-3 border-l-2 border-brand-200"><span className="font-semibold text-brand-950">全端視覺化平台：</span>以 FastAPI + React.js 建構系統，優化操作人員工作流程與 UX。</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {['React.js', 'FastAPI', 'JavaScript', 'CSS'].map(t => (
                      <span key={t} className="px-2 py-0.5 bg-brand-50 text-brand-600 text-[9px] font-bold rounded-full border border-brand-100 uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-5 border-t border-brand-100 flex justify-between items-center text-[8px] md:text-[9px] font-bold text-brand-400">
                  <span>2023 - 2024</span>
                  <a href="https://github.com/imlacha/foxlink-second.git" target="_blank" className="hover:text-brand-950"><i className="fab fa-github text-lg"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20 reveal-up">
            <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-2">Selected Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-950">專案作品集</h3>
            <div className="mt-4 w-12 h-1 bg-brand-950 mx-auto rounded-full"></div>
          </div>

          {/* Project 1: RAG */}
          <div className="group bg-brand-950 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center shadow-xl relative max-w-5xl mx-auto border border-white/5 reveal-up">
            <div className="w-full lg:w-[40%] h-[200px] md:h-[250px] lg:h-auto self-stretch lg:self-center bg-brand-900/30 flex items-center justify-center overflow-hidden">
              <img src={ragImage} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 p-4" />
            </div>
            <div className="w-full lg:w-[60%] p-8 md:p-10 lg:p-12 text-white relative z-10">
              <div className="inline-block px-3 py-0.5 mb-4 text-[9px] font-bold tracking-[0.2em] text-brand-400 uppercase border border-brand-800 rounded-full">
                AI Security Architecture
              </div>
              <h4 className="text-2xl font-bold mb-3">雙流隱私保護 RAG 系統</h4>
              <p className="text-brand-300 text-sm font-light leading-relaxed mb-6">
                透過「去識別化中介層」實現「零真實個資」的外部 LLM 檢索，確保企業級資料安全性。
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Langchain', 'Redis', 'PostgreSQL', 'Docker'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-white/5 text-brand-200 text-[9px] font-bold rounded-full border border-white/10 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <a href="https://github.com/imlacha/PII-Mocking-RAG/" target="_blank" className="inline-flex items-center gap-2 text-white font-bold group/link text-xs">
                <span className="border-b border-white/20 pb-0.5 group-hover/link:border-white transition-all uppercase tracking-widest text-[9px]">VIEW ON GITHUB</span>
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>

          {/* Project 2: QR Code System - Unified Layout with Project 1 */}
          <div className="group bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center shadow-xl relative max-w-5xl mx-auto border border-brand-100 mt-12 md:mt-16 reveal-up delay-200">
            <div className="w-full lg:w-[40%] h-[200px] md:h-[250px] lg:h-auto self-stretch lg:self-center bg-brand-50 flex items-center justify-center overflow-hidden">
              <img src={qrImage} className="w-full h-full object-contain group-hover:scale-105 transition-all duration-1000 p-4" />
            </div>
            
            <div className="w-full lg:w-[60%] p-8 md:p-10 lg:p-12 text-brand-950 relative z-10">
              <div className="inline-block px-3 py-0.5 mb-4 text-[9px] font-bold tracking-[0.2em] text-brand-500 uppercase border border-brand-200 rounded-full">
                Backend Infrastructure
              </div>
              <h4 className="text-2xl font-bold mb-3">QR Code 縮網址系統</h4>
              <p className="text-brand-600 text-sm font-light leading-relaxed mb-6">
                基於 FastAPI 的高效能縮網址與動態 QR Code 生成系統，支援點擊分析與 Docker 快速部署。
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Segno'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-brand-100 text-brand-800 text-[9px] font-bold rounded-full uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <a href="https://github.com/imlacha/qrcode-sys" target="_blank" className="inline-flex items-center gap-2 text-brand-950 font-bold group/link text-xs">
                <span className="border-b border-brand-200 pb-0.5 group-hover/link:border-brand-950 transition-all uppercase tracking-widest text-[9px]">VIEW ON GITHUB</span>
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-950 relative overflow-hidden dark-grid">
        <div className="container px-6 mx-auto max-w-7xl relative z-10 text-center reveal-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 md:mb-12 uppercase tracking-tighter">LET'S CONNECT</h2>

          <button
            onClick={copyEmail}
            className={`group px-8 md:px-10 py-4 md:py-5 rounded-full font-bold shadow-2xl transition-all duration-500 text-sm md:text-base ${copied
              ? 'bg-green-500 text-white scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]'
              : 'bg-white text-brand-950 hover:-translate-y-2'
              }`}
          >
            {copied ? (
              <span className="flex items-center gap-3">
                <i className="fas fa-check-circle text-lg md:text-xl"></i> EMAIL COPIED!
              </span>
            ) : (
              'johnny50327@gmail.com'
            )}
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
