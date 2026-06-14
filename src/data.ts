// ─────────────────────────────────────────────
// data.ts — All static content lives here.
// Update this file to change portfolio content.
// ─────────────────────────────────────────────
import ragImage from './assets/pii_rag_workflow.png';
import qrImage from './assets/qr_shortener_mockup.png';
import datasheetImage from './assets/Dataextract.png';
import anovaAgentImage from '../asset/anova_agent.png';

// ── Nav ────────────────────────────────────────
export const NAV_ITEMS = {
  zh: [
    { id: 'about', label: '關於' },
    { id: 'services', label: '經歷' },
    { id: 'portfolio', label: '作品' },
    { id: 'papers', label: '論文' },
    { id: 'contact', label: '聯絡' },
  ],
  en: [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Experience' },
    { id: 'portfolio', label: 'Work' },
    { id: 'papers', label: 'Papers' },
    { id: 'contact', label: 'Contact' },
  ],
};

// ── Skills ─────────────────────────────────────
export const SKILLS = [
  'SLMs / LLMs', 'RAG', 'Langgraph', 'Git / Docker', 'Langchain', 'MCP',
  'Python', 'React.js', 'PostgreSQL', 'n8n', 'Azure / AWS / GCP',
  'Data Analysis', 'Pytorch', 'NLP',
];

// ── Certificates ───────────────────────────────
export const CERTIFICATES = [
  { icon: 'fa-certificate', name: 'Microsoft AI-900', sub: 'Azure AI Fundamentals' },
  { icon: 'fa-database', name: 'Udemy SQL Bootcamp', sub: 'Zero to Hero Mastery' },
];

// ── Hero ───────────────────────────────────────
export const HERO_CONTENT = {
  zh: {
    badge: 'Machine Learning & Software Engineer',
    nameJp: '陳世宗',
    line1: '專注在研發',
    line2: 'AI自動化流程的工程師',
    desc: '專精於將大型語言模型（LLM）轉化為實際解決方案，扮演連結「AI應用」與「企業實務」的橋樑。',
    cta1: '探索作品集',
    cta2: '聯絡資訊',
  },
  en: {
    badge: 'Machine Learning & Software Engineer',
    nameJp: 'Johnny Chen',
    line1: 'Building intelligent',
    line2: 'AI-driven automation systems',
    desc: 'Specializing in transforming Large Language Models into real-world solutions — bridging the gap between AI research and enterprise practice.',
    cta1: 'View Portfolio',
    cta2: 'Get in Touch',
  },
};

// ── About ──────────────────────────────────────
export const ABOUT_CONTENT = {
  zh: {
    edu: {
      eyebrow: 'Education',
      school1: { name: '國立臺灣科技大學', dept: '工業管理研究所', period: '2023 - 2025' },
      thesis: { label: '碩士論文', text: '「基於 SLM 小型語言模型 Agent 機制之 ANOVA 統計推論架構與探索」' },
      school2: { name: '逢甲大學', dept: '工業工程與系統管理學系', period: '2019 - 2022' },
    },
    certs: { eyebrow: 'Certificates' },
    teach: {
      eyebrow: 'Teaching Experience',
      title: '學術助教 | 2023 - 2025',
      desc: '負責模擬學演算法、計算機程式實習、華泰電子-預知保養、機器學習等課程。包含教材編撰、管理個案教材，並協助機器學習的課堂實踐。',
    },
    skills: { eyebrow: 'Core Skills' },
  },
  en: {
    edu: {
      eyebrow: 'Education',
      school1: { name: 'National Taiwan University of Science and Technology', dept: 'Institute of Industrial Management', period: '2023 - 2025' },
      thesis: { label: "Master's Thesis", text: '"ANOVA Statistical Inference Framework and Exploration Based on SLM Small Language Model Agent Mechanism"' },
      school2: { name: 'Feng Chia University', dept: 'Dept. of Industrial Engineering & Systems Management', period: '2019 - 2022' },
    },
    certs: { eyebrow: 'Certificates' },
    teach: {
      eyebrow: 'Teaching Experience',
      title: 'Teaching Assistant | 2023 - 2025',
      desc: 'Courses covered: Simulation Algorithms, Computer Programming Lab, Predictive Maintenance (Huatai Electronics), and Machine Learning. Responsible for curriculum design, case material management, and hands-on ML class facilitation.',
    },
    skills: { eyebrow: 'Core Skills' },
  },
};

// ── Work History ───────────────────────────────
export interface WorkItem {
  company: string;
  location: string;
  period: string;
  title: string;
  icon: string;
  dark: boolean;
  present?: boolean;
  bullets?: { label: string; text: string }[];
  desc?: string;
  tags: string[];
  github?: string;
}

export const WORK_HISTORY: Record<'zh' | 'en', WorkItem[]> = {
  zh: [
    {
      company: '麟數據 LNDATA',
      location: '',
      period: '2026 - NOW',
      title: 'MLOps Engineer',
      icon: 'fa-brain',
      dark: true,
      present: true,
      desc: 'GenBI 系統開發與研發，建構自動化代理工作流。',
      tags: [],
    },
    {
      company: 'DELL',
      location: 'Taipei, Taiwan',
      period: 'Jul 2024 – Apr 2025',
      title: 'GenAI 硬體自動化測試系統',
      icon: 'fa-microchip',
      dark: false,
      bullets: [
        { label: '分散式對話系統：', text: '整合 TTS 與自訂義角色，使裝置能在多輪對話中動態切換角色，實現自動化語音互動測試。' },
        { label: '準確率驗證：', text: '導入 Whisper 模型轉錄錄音，透過關鍵字匹配演算法自動驗證測試結果。' },
      ],
      tags: ['Python', 'PyQt5', 'Whisper', 'TTS'],
    },
    {
      company: 'Foxlink',
      location: 'Taipei, Taiwan',
      period: 'Oct 2023 – Dec 2024',
      title: '預知保養系統',
      icon: 'fa-industry',
      dark: false,
      bullets: [
        { label: '預測性維護：', text: '結合 Ensemble Learning 預測耗材最佳更換時機，成功提升 90% 維護效率。' },
        { label: '全端視覺化平台：', text: '以 FastAPI + React.js 建構系統，優化操作人員工作流程與 UX。' },
      ],
      tags: ['React.js', 'FastAPI', 'JavaScript', 'CSS'],
      github: 'https://github.com/imlacha/foxlink-second.git',
    },
  ],
  en: [
    {
      company: 'LNDATA',
      location: '',
      period: '2026 - NOW',
      title: 'MLOps Engineer',
      icon: 'fa-brain',
      dark: true,
      present: true,
      desc: 'Leading GenBI system development and building automated agentic workflows.',
      tags: [],
    },
    {
      company: 'DELL',
      location: 'Taipei, Taiwan',
      period: 'Jul 2024 – Apr 2025',
      title: 'GenAI Hardware Automation Testing System',
      icon: 'fa-microchip',
      dark: false,
      bullets: [
        { label: 'Multi-Agent Dialogue System: ', text: 'Integrated TTS with custom personas, enabling dynamic role-switching across multi-turn conversations for automated voice interaction testing.' },
        { label: 'Accuracy Validation: ', text: 'Deployed Whisper for audio transcription, combined with keyword-matching algorithms to automatically verify test outcomes.' },
      ],
      tags: ['Python', 'PyQt5', 'Whisper', 'TTS'],
    },
    {
      company: 'Foxlink',
      location: 'Taipei, Taiwan',
      period: 'Oct 2023 – Dec 2024',
      title: 'Predictive Maintenance System',
      icon: 'fa-industry',
      dark: false,
      bullets: [
        { label: 'Predictive Maintenance: ', text: 'Applied Ensemble Learning to predict optimal spare-part replacement timing, achieving a 90% improvement in maintenance efficiency.' },
        { label: 'Full-Stack Dashboard: ', text: 'Built with FastAPI + React.js to optimize operator workflows and UX.' },
      ],
      tags: ['React.js', 'FastAPI', 'JavaScript', 'CSS'],
      github: 'https://github.com/imlacha/foxlink-second.git',
    },
  ],
};

// ── Projects ───────────────────────────────────
export interface ProjectItem {
  dark: boolean;
  label: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  image: string;
  delay?: boolean;
}

export const PROJECTS: Record<'zh' | 'en', ProjectItem[]> = {
  zh: [
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
    {
      dark: false,
      label: 'Datasheet Extractor',
      title: '電子元件規格 Datasheet 萃取系統',
      desc: '基於 LangGraph 狀態機與 MCP 微服務架構，結合多模態視覺與雙代理（Dual-Agent）自適應校正，精準解析複雜晶片圖紙與電氣表格，準確率達 95-97%。',
      tags: ['LLM', 'LangGraph', 'MCP', 'FastAPI', 'Python', 'Pydantic'],
      github: 'https://github.com/imlacha/elec-spec-extract-agent/',
      image: datasheetImage,
      delay: true,
    },
  ],
  en: [
    {
      dark: true,
      label: 'AI Security Architecture',
      title: 'Dual-Stream Privacy-Preserving RAG',
      desc: 'A "de-identification middleware" ensures zero real PII is ever sent to external LLMs, delivering enterprise-grade data security in retrieval-augmented generation.',
      tags: ['Python', 'Langchain', 'Redis', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/imlacha/PII-Mocking-RAG/',
      image: ragImage,
      delay: false,
    },
    {
      dark: false,
      label: 'Backend Infrastructure',
      title: 'QR Code URL Shortener',
      desc: 'High-performance URL shortening and dynamic QR Code generation built on FastAPI, with click analytics and one-command Docker deployment.',
      tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Segno'],
      github: 'https://github.com/imlacha/qrcode-sys',
      image: qrImage,
      delay: true,
    },
    {
      dark: false,
      label: 'Datasheet Extractor',
      title: 'Electronic Component Datasheet Extraction System',
      desc: 'An enterprise-grade parser built on LangGraph StateGraph and MCP microservices, leveraging multimodal vision and a dual-agent self-correction mechanism to extract component specs with 95-97% accuracy.',
      tags: ['LLM-Based', 'LangGraph', 'MCP', 'FastAPI', 'Python'],
      github: 'https://github.com/imlacha/elec-spec-extract-agent/',
      image: datasheetImage,
      delay: true,
    },
  ],
};

// ── Services Section headings ──────────────────
export const SERVICES_CONTENT = {
  zh: { eyebrow: 'Work History', title: '實戰專案背景' },
  en: { eyebrow: 'Work History', title: 'Professional Background' },
};

// ── Portfolio Section headings ─────────────────
export const PORTFOLIO_CONTENT = {
  zh: { eyebrow: 'Selected Works', title: '專案作品集' },
  en: { eyebrow: 'Selected Works', title: 'Portfolio' },
};

// ── Papers Section ─────────────────────────────
export interface PaperItem {
  title: string;
  conference: string;
  year: string;
  author: string;
  abstract: string;
  arxivUrl: string;
  image?: string;
}

export const PAPERS: Record<'zh' | 'en', PaperItem[]> = {
  zh: [
    {
      title: '基於 SLM 小型語言模型 Agent 機制之 ANOVA 統計推論架構與探索',
      conference: '國立臺灣科技大學碩士學位論文',
      year: '2025',
      author: '陳世宗',
      abstract: '隨著大型語言模型（Large Language Models, LLMs）於各領域的蓬勃發展，其在自然語言處理、數學與統計推論等專業任務中展現高度潛力。然而，LLM 的龐大運算資源需求與部署成本，對一般企業與研究者造成不小挑戰。為此，本研究聚焦於小型語言模型（Small Language Models, SLMs），結合代理（Agent）與思維練（Chain-of-Thought, CoT）推理機制，設計一套具備自動化推論與反思能力的 ANOVA 統計推論架構。研究方法包括建立以 SLM 為核心的多代理工作流程，涵蓋假設設定、統計分析、結論生成三大模組，並導入反思提示詞提升推論準確率。實驗以自行收集與生成式 AI 合成之 One-Way ANOVA 資料共 50 筆為測試基礎，系統性比較多種 SLM（Phi-4、Qwen2.5 Coder、Qwen3、DeepseekR1）於不同提示策略下的表現。結果顯示，推理型 SLM 配合結構化提示與反思機制，在複雜題型下能顯著提升正確率；而非推理模型則對提示設計敏感度較高，部分情境下反而以簡化提示表現最佳。本研究證明，整合 SLM、Agent 機制與反思流程，可有效促進統計推論流程自動化，並為專業領域知識應用提供高效、低資源消耗的新方案。',
      arxivUrl: 'https://etheses.lib.ntust.edu.tw/detail/3aff4fc719d1e940099950cc8f0dae93/',
      image: anovaAgentImage,
    },
  ],
  en: [
    {
      title: 'Framework and Exploration of ANOVA Statistical Inference Based on the Agent Mechanism of Small Language Models (SLM)',
      conference: 'NTUST Master Thesis',
      year: '2025',
      author: 'Shi-Zong Chen',
      abstract: 'With the rapid development of Large Language Models (LLMs) across various fields, their potential in specialized tasks such as natural language processing, mathematics, and statistical inference has become increasingly apparent. However, the substantial computational resource requirements and deployment costs of LLMs present significant challenges for general enterprises and researchers. To address this, our research focuses on Small Language Models (SLMs), integrating Agent and Chain-of-Thought (CoT) reasoning mechanisms to design an ANOVA statistical inference framework capable of automated reasoning and self-correction. The study methodology involves establishing a multi-agent workflow centered on SLMs, encompassing hypothesis formulation, statistical analysis, and conclusion generation modules, while incorporating reflective prompting to enhance inference accuracy. Experiments were conducted using a dataset of 50 One-Way ANOVA samples, comprising self-collected data and data synthesized via generative AI, to systematically compare the performance of various SLMs (Phi-4, Qwen2.5 Coder, Qwen3, DeepseekR1) under different prompting strategies. Results indicate that reasoning-type SLMs, when paired with structured prompts and reflection mechanisms, achieve significant accuracy improvements on complex problems; conversely, non-reasoning models demonstrate higher sensitivity to prompt design, with simplified prompts sometimes yielding optimal performance in specific scenarios. This research demonstrates that the integration of SLMs, Agent mechanisms, and reflective processes can effectively automate statistical inference workflows, offering an efficient, low-resource alternative for applying domain-specific knowledge.',
      arxivUrl: 'https://etheses.lib.ntust.edu.tw/detail/3aff4fc719d1e940099950cc8f0dae93/',
      image: anovaAgentImage,
    },
  ],
};

