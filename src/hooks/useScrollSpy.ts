// ─────────────────────────────────────────────
// hooks/useScrollSpy.ts — Scroll progress bar +
// section-aware active nav tracking.
// ─────────────────────────────────────────────
import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'about', 'services', 'portfolio', 'contact'];

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // ── Scroll progress bar ──
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar)
        progressBar.style.width = `${(winScroll / height) * 100}%`;

      // ── ScrollSpy ──
      const atBottom = height > 0 && winScroll >= height - 4;
      if (atBottom) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }

      const trigger = window.innerHeight * 0.3;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= trigger) current = id;
      }
      setActiveSection(current);
    };

    // ── Reveal-on-scroll ──
    const reveal = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-active');
            obs.unobserve(e.target);
          }
        }),
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );

    // Observe existing + future reveal-up nodes (handles language switch re-renders)
    const observeAll = () =>
      document.querySelectorAll('.reveal-up:not(.reveal-active)').forEach(el => reveal.observe(el));

    observeAll();

    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    handleScroll(); // set correct state on mount
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveal.disconnect();
      mutation.disconnect();
    };
  }, []);

  return activeSection;
}

