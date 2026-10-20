import React from 'react';
import { Instagram, ExternalLink, Calendar, Play } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { INSTAGRAM_URL, REEL_URL, REEL_EMBED_URL } from '../data/content';

interface InstagramSectionProps {
  currentLang: Language;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="instagram" className="py-20 sm:py-28 bg-[#F6EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
            <span>✦</span>
            <span>Comunidade & Novidades</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B4636] leading-tight mb-4">
            {t.instagram.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal">
            {t.instagram.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-6" />
        </div>

        {/* 2-Column Layout: Reel embed on left/center, Follow Card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left/Center: Instagram Reel Embed with Fine Golden Frame */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              <div className="p-[1.5px] bg-gradient-to-b from-[#C9A24D] via-[#E3C77E] to-[#B8903A] rounded-2xl shadow-md">
                <div className="w-full bg-[#5B4636] rounded-[14px] overflow-hidden relative min-h-[520px] sm:min-h-[560px] flex flex-col items-center justify-center">
                  {/* Embedded Iframe */}
                  <iframe
                    src={REEL_EMBED_URL}
                    title={t.instagram.reelTitle}
                    loading="lazy"
                    className="w-full h-[520px] sm:h-[560px] rounded-[14px] border-0 overflow-hidden"
                    allowFullScreen
                  />

                  {/* Accessible Fallback Banner under the frame */}
                  <div className="p-3 bg-[#FFFBF5] w-full text-center border-t border-[#EADCCB] flex items-center justify-between px-4">
                    <div className="flex items-center gap-2 text-xs text-[#5B4636]">
                      <Instagram className="w-4 h-4 text-[#C9A24D]" />
                      <span className="font-medium">@alineferreira_uk</span>
                    </div>
                    <a
                      href={REEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A24D] hover:text-[#5B4636] transition-colors"
                      title={t.instagram.reelHint}
                    >
                      <span>{t.instagram.watchOnInstagram}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card, Invitation & Booking CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#FFFBF5] border border-[#C9A24D]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center mb-6 shadow-xs border border-[#B8903A]/30">
                <Instagram className="w-7 h-7 text-[#5B4636]" />
              </div>

              <div className="inline-block bg-[#F6EFE6] px-3 py-1 rounded-full text-xs font-semibold text-[#5B4636] border border-[#EADCCB] mb-3">
                {t.instagram.cardHandle}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B4636] mb-4">
                {t.instagram.title}
              </h3>

              <p className="text-sm text-[#5B4636]/80 leading-relaxed mb-8">
                {t.instagram.cardText}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="instagram-follow"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-xs hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all border border-[#B8903A]/30 min-h-[44px]"
                >
                  <Instagram className="w-4 h-4 text-[#5B4636]" />
                  <span>{t.instagram.followButton}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#agendar"
                  data-cta="instagram-book"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#5B4636] bg-[#FFFBF5] hover:bg-[#EADCCB]/40 border border-[#C9A24D] rounded-full transition-all min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 text-[#C9A24D]" />
                  <span>{t.instagram.ctaSecondary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
