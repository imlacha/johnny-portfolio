// ─────────────────────────────────────────────
// sections/ContactSection.tsx
// ─────────────────────────────────────────────
import { useState } from 'react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (copied) return;
    navigator.clipboard.writeText('johnny50327@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-brand-950 relative overflow-hidden dark-grid">
      <div className="container px-6 mx-auto max-w-7xl relative z-10 text-center reveal-up">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 md:mb-12 uppercase tracking-tighter">LET'S CONNECT</h2>

        <button
          onClick={copyEmail}
          className={`group px-8 md:px-10 py-4 md:py-5 rounded-full font-bold shadow-2xl transition-all duration-500 text-sm md:text-base ${
            copied
              ? 'bg-green-500 text-white scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]'
              : 'bg-white text-brand-950 hover:-translate-y-2'
          }`}
        >
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
  );
};
