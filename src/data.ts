// ─────────────────────────────────────────────
// data.ts — All static content lives here.
// Update this file to change portfolio content.
// ─────────────────────────────────────────────

export const NAV_ITEMS = [
  { id: 'about',     label: '關於' },
  { id: 'services',  label: '經歷' },
  { id: 'portfolio', label: '作品' },
  { id: 'contact',   label: '聯絡' },
];

export const SKILLS = [
  'SLMs / LLMs', 'RAG', 'Langgraph', 'Git / Docker', 'Langchain', 'MCP',
  'Python', 'React.js', 'PostgreSQL', 'n8n', 'Azure / AWS / GCP',
  'Data Analysis', 'Pytorch', 'NLP',
];

export const CERTIFICATES = [
  { icon: 'fa-certificate', name: 'Microsoft AI-900',    sub: 'Azure AI Fundamentals' },
  { icon: 'fa-database',    name: 'Udemy SQL Bootcamp',  sub: 'Zero to Hero Mastery'  },
];

export interface WorkItem {
  company:    string;
  location:   string;
  period:     string;
  title:      string;
  icon:       string;
  dark:       boolean;      // true = dark card (brand-950), false = white card
  present?:   boolean;
  bullets?:   { label: string; text: string }[];
  desc?:      string;
  tags:       string[];
  github?:    string;
}

export const WORK_HISTORY: WorkItem[] = [
  {
    company:  '麟數據 LNDATA',
    location: '',
    period:   '2026 - NOW',
    title:    'MLOps Engineer',
    icon:     'fa-brain',
    dark:     true,
    present:  true,
    desc:     'GenBI 系統開發與研發，建構自動化代理工作流。',
    tags:     [],
  },
  {
    company:  'DELL',
    location: 'Taipei, Taiwan',
    period:   'Jul 2024 – Apr 2025',
    title:    'GenAI 硬體自動化測試系統',
    icon:     'fa-microchip',
    dark:     false,
    bullets: [
      { label: '分散式對話系統：', text: '整合 TTS 與自訂義角色，使裝置能在多輪對話中動態切換角色，實現自動化語音互動測試。' },
      { label: '準確率驗證：',     text: '導入 Whisper 模型轉錄錄音，透過關鍵字匹配演算法自動驗證測試結果。' },
    ],
    tags: ['Python', 'PyQt5', 'Whisper', 'TTS'],
  },
  {
    company:  'Foxlink',
    location: 'Taipei, Taiwan',
    period:   'Oct 2023 – Dec 2024',
    title:    '預知保養系統',
    icon:     'fa-industry',
    dark:     false,
    bullets: [
      { label: '預測性維護：',     text: '結合 Ensemble Learning 預測耗材最佳更換時機，成功提升 90% 維護效率。' },
      { label: '全端視覺化平台：', text: '以 FastAPI + React.js 建構系統，優化操作人員工作流程與 UX。' },
    ],
    tags:   ['React.js', 'FastAPI', 'JavaScript', 'CSS'],
    github: 'https://github.com/imlacha/foxlink-second.git',
  },
];

export interface ProjectItem {
  dark:    boolean;
  label:   string;
  title:   string;
  desc:    string;
  tags:    string[];
  github:  string;
  image:   string;   // imported asset path passed in from App.tsx
  delay?:  boolean;
}
