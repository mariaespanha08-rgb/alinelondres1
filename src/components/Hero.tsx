import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { IMAGES, WHATSAPP_URL } from '../data/content';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section
      id="inicio"
      className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#F6EFE6]"
    >
      {/* Subtle organic gold/beige backdrop glow */}
      <div
        className="absolute top-10 right-0 w-96 h-96 bg-[#EADCCB]/40 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#E3C77E]/15 rounded-full blur-2xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Professional Photo in ARCH format (First on mobile and desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[380px] mx-auto">
              {/* Delicate thin golden arched container (fine 1.5px border) */}
              <div className="relative p-[1.5px] bg-gradient-to-b from-[#C9A24D] via-[#E3C77E] to-[#B8903A] rounded-t-full rounded-b-3xl shadow-md">
                <div className="overflow-hidden rounded-t-full rounded-b-[22px] bg-[#5B4636] aspect-[4/5] relative">
                  <img
                    src={IMAGES.hero}
                    alt={t.hero.photoAlt}
                    referrerPolicy="no-referrer"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-103"
                    width={380}
                    height={475}
                  />
                  {/* Subtle inner shadow scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B4636]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Trust Badge with fine golden border */}
              <div className="absolute -bottom-3 right-1 sm:-right-3 bg-[#FFFBF5] border border-[#C9A24D]/50 rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A24D] shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] sm:text-[11px] font-bold text-[#5B4636] leading-tight">
                    Fiber Glass VIP
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#A68262] leading-tight">
                    Técnica & Biossegurança
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Copy & Actions (Second) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 text-center lg:text-left mt-4 lg:mt-0">
            {/* Elegant Kicker */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
              <span>✦</span>
              <span>Aline Ferreira · Nail Designer & Formadora UK</span>
              <span>✦</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-[#5B4636] leading-[1.1] tracking-tight text-balance mb-4 sm:mb-6">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm sm:text-base font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-xs hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all border border-[#B8903A]/30 min-h-[46px]"
              >
                <Calendar className="w-4 h-4 text-[#5B4636]" />
                <span>{t.hero.ctaPrimary}</span>
              </a>

              <a
                href="#servicos"
                data-cta="hero-servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-[#5B4636] bg-[#FFFBF5]/90 hover:bg-[#EADCCB]/50 border border-[#C9A24D]/60 rounded-full transition-all min-h-[46px]"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24D]" />
              </a>
            </div>

            {/* Highlights Card (Frosted beige glass with fine golden border) */}
            <div className="bg-[#FFFBF5]/80 backdrop-blur-md border border-[#C9A24D]/30 rounded-2xl p-4 sm:p-5 shadow-xs max-w-2xl mx-auto lg:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EADCCB]">
                <div className="flex items-center gap-2.5 pt-1 sm:pt-0 justify-center sm:justify-start text-left">
                  <div className="w-8 h-8 rounded-full bg-[#EADCCB]/60 flex items-center justify-center shrink-0 border border-[#C9A24D]/30">
                    <Award className="w-3.5 h-3.5 text-[#5B4636]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#5B4636]">
                    {t.hero.badges[0]}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-4 justify-center sm:justify-start text-left">
                  <div className="w-8 h-8 rounded-full bg-[#EADCCB]/60 flex items-center justify-center shrink-0 border border-[#C9A24D]/30">
                    <Sparkles className="w-3.5 h-3.5 text-[#5B4636]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#5B4636]">
                    {t.hero.badges[1]}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-4 justify-center sm:justify-start text-left">
                  <div className="w-8 h-8 rounded-full bg-[#EADCCB]/60 flex items-center justify-center shrink-0 border border-[#C9A24D]/30">
                    <Clock className="w-3.5 h-3.5 text-[#5B4636]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#5B4636]">
                    {t.hero.badges[2]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
