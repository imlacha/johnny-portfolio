import { useState } from 'react';
import { useLang } from '../LangContext';
import { PAPERS } from '../data';
import { PaperCard, PaperModal, SectionHeader } from '../components';

const PAPERS_HEADER = {
  zh: { eyebrow: 'Publications', title: '學術論文與著作' },
  en: { eyebrow: 'Publications', title: 'Publications' },
};

export const PapersSection = () => {
  const { lang } = useLang();
  const papers = PAPERS[lang];
  const t = PAPERS_HEADER[lang];

  const [selectedPaper, setSelectedPaper] = useState<any | null>(null);

  return (
    <section id="papers" className="py-24 bg-brand-50/50">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center card-fade-in">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} />
          <div className="mt-4 w-12 h-1 bg-brand-950 mx-auto rounded-full"></div>
        </div>

        {/* Papers List */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {papers.map((paper, index) => (
            <PaperCard 
              key={`${lang}-${index}`} 
              paper={paper} 
              onOpen={() => setSelectedPaper(paper)} 
            />
          ))}
        </div>

        {/* Render Modal */}
        {selectedPaper && (
          <PaperModal 
            paper={selectedPaper} 
            onClose={() => setSelectedPaper(null)} 
          />
        )}

      </div>
    </section>
  );
};
