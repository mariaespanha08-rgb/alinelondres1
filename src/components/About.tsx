import React from 'react';
import { Sparkles, GraduationCap, Calendar, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { IMAGES, WHATSAPP_URL } from '../data/content';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const mentorshipWhatsAppMsg =
    currentLang === 'pt'
      ? 'Olá, Aline! Tenho interesse na Mentoria Curso Fiber Glass Vip.'
      : 'Hello Aline! I am interested in the VIP Fiberglass Mentorship Course.';

  const mentorshipUrl = `${WHATSAPP_URL}&text=${encodeURIComponent(mentorshipWhatsAppMsg)}`;

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#FFFBF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
            <span>✦</span>
            <span>Trajetória & Filosofia</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B4636] leading-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal">
            {t.about.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-6" />
        </div>

        {/* 2-Column Split: Photo on left/top, Biography & Mentorship on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Professional Photo in Elegant Rectangular Frame with Fine Golden Border */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="p-[1.5px] bg-gradient-to-br from-[#C9A24D] via-[#E3C77E] to-[#B8903A] rounded-2xl shadow-md">
                <div className="overflow-hidden rounded-[14px] bg-[#5B4636] aspect-[3/4] relative">
                  <img
                    src={IMAGES.hero}
                    alt={t.about.photoAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                    width={400}
                    height={533}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B4636]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Bottom Quote Sticker with fine border */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#FFFBF5] border border-[#C9A24D]/50 rounded-xl px-4 py-2.5 shadow-md text-center">
                <p className="font-serif italic text-xs sm:text-sm text-[#C9A24D] font-semibold leading-snug">
                  {t.about.quote}
                </p>
              </div>
            </div>
          </div>

          {/* Biography Text & Mentorship Callout (directly starting with Paragraph 1) */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-0">
            {/* Paragraph 1: Emotional */}
            <p className="text-sm sm:text-base text-[#5B4636]/85 leading-relaxed mb-5 font-normal">
              {t.about.p1}
            </p>

            {/* Paragraph 2: Technical & Educational */}
            <p className="text-sm sm:text-base text-[#5B4636]/85 leading-relaxed mb-8 font-normal">
              {t.about.p2}
            </p>

            {/* Mentorship Featured Card */}
            <div className="bg-gradient-to-br from-[#F6EFE6] to-[#EADCCB]/60 border border-[#C9A24D] rounded-2xl p-6 mb-8 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-xs border border-[#B8903A]/40">
                  <GraduationCap className="w-6 h-6 text-[#5B4636]" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#C9A24D] mb-1">
                    <Sparkles className="w-3 h-3 text-[#C9A24D]" />
                    <span>{t.about.mentorshipBadge}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B4636] mb-2">
                    {t.about.mentorshipTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed mb-4">
                    {t.about.mentorshipText}
                  </p>
                  <a
                    href={mentorshipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="mentoria-whatsapp"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-xs hover:shadow-md hover:brightness-105 transition-all border border-[#B8903A]/30 min-h-[44px]"
                  >
                    <span>{t.about.mentorshipCta}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#agendar"
                data-cta="about-book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm sm:text-base font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all border border-[#B8903A]/30 min-h-[46px]"
              >
                <Calendar className="w-4 h-4 text-[#5B4636]" />
                <span>{t.about.ctaBook}</span>
              </a>

              <a
                href={mentorshipUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="about-student"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-[#5B4636] bg-[#FFFBF5] hover:bg-[#EADCCB]/40 border border-[#C9A24D] rounded-full transition-all min-h-[46px]"
              >
                <HeartHandshake className="w-4 h-4 text-[#C9A24D]" />
                <span>{t.about.ctaStudent}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
