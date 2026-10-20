import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { FAQ_ITEMS, WHATSAPP_URL } from '../data/content';

interface FAQProps {
  currentLang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for helpful UX
  const t = translations[currentLang];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFBF5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
            <span>✦</span>
            <span>Esclarecimentos</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B4636] leading-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal">
            {t.faq.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-6" />
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="bg-[#F6EFE6] border border-[#EADCCB] hover:border-[#C9A24D]/60 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  id={headingId}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] transition-colors min-h-[56px]"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#5B4636] pr-2">
                    {item.question[currentLang]}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#5B4636] text-[#FFFBF5] rotate-180'
                        : 'bg-[#FFFBF5] text-[#C9A24D] border border-[#C9A24D]/40'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5B4636]/85 leading-relaxed font-normal border-t border-[#EADCCB]/50 animate-fadeIn"
                  >
                    <p>{item.answer[currentLang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Final CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="faq-whatsapp"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all border border-[#B8903A]/30 min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 text-[#5B4636]" />
            <span>{t.faq.ctaButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
