import React from 'react';
import { ShieldCheck, Lock, Armchair, MapPin, Sparkles, Calendar } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { IMAGES } from '../data/content';

interface StudioProps {
  currentLang: Language;
}

export const Studio: React.FC<StudioProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const benefitIcons = [
    <ShieldCheck key="safety" className="w-5 h-5 text-[#C9A24D]" />,
    <Lock key="private" className="w-5 h-5 text-[#C9A24D]" />,
    <Armchair key="comfort" className="w-5 h-5 text-[#C9A24D]" />,
    <MapPin key="location" className="w-5 h-5 text-[#C9A24D]" />,
    <Sparkles key="custom" className="w-5 h-5 text-[#C9A24D]" />,
  ];

  return (
    <section id="studio" className="py-20 sm:py-28 bg-[#FFFBF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
            <span>✦</span>
            <span>Espaço Exclusivo</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B4636] leading-tight mb-4">
            {t.studio.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal">
            {t.studio.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-6" />
        </div>

        {/* Studio Photo Showcase with Fine Golden Border */}
        <div className="mb-14">
          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-r from-[#C9A24D] via-[#E3C77E] to-[#B8903A] shadow-md max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-[14px] bg-[#5B4636] aspect-[16/9] max-h-[480px]">
              <img
                src={IMAGES.studio}
                alt={t.studio.photoAlt}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                width={1200}
                height={675}
              />
            </div>
          </div>
        </div>

        {/* 5 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {t.studio.benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-[#F6EFE6] border border-[#EADCCB] hover:border-[#C9A24D] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFFBF5] border border-[#C9A24D]/30 flex items-center justify-center mb-3.5 shadow-xs">
                {benefitIcons[idx]}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5B4636] mb-1.5">
                {b.title}
              </h3>
              <p className="text-xs text-[#5B4636]/75 leading-relaxed font-normal">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Approximate Location & Google Maps Embed */}
        <div className="max-w-4xl mx-auto bg-[#F6EFE6] border border-[#C9A24D]/50 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-[#5B4636]">
            <MapPin className="w-5 h-5 text-[#C9A24D]" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              {t.studio.mapTitle}
            </h3>
          </div>

          {/* Map Frame */}
          <div className="rounded-xl overflow-hidden border border-[#EADCCB] shadow-inner aspect-[21/9] sm:aspect-[16/7] w-full bg-[#EADCCB]">
            <iframe
              src="https://www.google.com/maps?q=London+UK&output=embed"
              title={t.studio.mapTitle}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-90"
            />
          </div>

          {/* Subtle Note below the map */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs sm:text-sm font-medium text-[#5B4636] text-center sm:text-left">
              {t.studio.mapNote}
            </p>

            <a
              href="#agendar"
              data-cta="studio-agendar"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-xs hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all border border-[#B8903A]/30 whitespace-nowrap min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-[#5B4636]" />
              <span>{t.studio.ctaButton}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
