import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink, MessageCircle, Maximize2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { GALLERY_PHOTOS, INSTAGRAM_URL, WHATSAPP_URL } from '../data/content';

interface GalleryProps {
  currentLang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const t = translations[currentLang];

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) =>
      prev === null ? null : prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) =>
      prev === null ? null : prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhotoIndex, handlePrev, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#F6EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
            <span>✦</span>
            <span>Portfólio Real</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B4636] leading-tight mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal">
            {t.gallery.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-6" />
        </div>

        {/* Gallery Grid (2 col mobile, 3-4 col desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#5B4636] border border-[#EADCCB] hover:border-[#C9A24D] transition-all duration-300 shadow-xs hover:shadow-xl aspect-square"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
              aria-label={`Ver foto ${index + 1} em tamanho ampliado: ${photo.caption[currentLang]}`}
            >
              <img
                src={photo.url}
                alt={photo.alt[currentLang]}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                width={360}
                height={360}
              />

              {/* Hover overlay with fine golden border highlight and minimal zoom icon (no title text) */}
              <div className="absolute inset-0 bg-[#5B4636]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#FFFBF5]">
                <div className="w-10 h-10 rounded-full bg-[#FFFBF5]/90 text-[#5B4636] flex items-center justify-center shadow-md border border-[#C9A24D]/40 transition-transform duration-300 group-hover:scale-105">
                  <Maximize2 className="w-4 h-4 text-[#5B4636]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTAs */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${WHATSAPP_URL}&text=${encodeURIComponent(
              currentLang === 'pt'
                ? 'Olá, Aline! Vi os resultados na sua galeria e quero um resultado assim para as minhas unhas!'
                : 'Hello Aline! I loved your gallery portfolio and would love to achieve a similar result for my nails!'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="gallery-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all border border-[#B8903A]/30 min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 text-[#5B4636]" />
            <span>{t.gallery.ctaPrimary}</span>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="gallery-instagram"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-medium text-[#5B4636] bg-[#FFFBF5] hover:bg-[#EADCCB]/40 border border-[#C9A24D] rounded-full transition-all min-h-[48px]"
          >
            <span>{t.gallery.ctaSecondary}</span>
            <ExternalLink className="w-4 h-4 text-[#C9A24D]" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#5B4636]/90 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseLightbox();
          }}
        >
          {/* Top Bar with Counter and Close button */}
          <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between text-[#FFFBF5] z-10">
            <span className="text-xs sm:text-sm tracking-widest font-mono bg-[#5B4636]/60 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#C9A24D]/40">
              {activePhotoIndex + 1} {t.gallery.photoCounter} {GALLERY_PHOTOS.length}
            </span>

            <button
              onClick={handleCloseLightbox}
              className="p-2 sm:p-2.5 bg-[#5B4636]/70 hover:bg-[#C9A24D] text-[#FFFBF5] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A24D] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={t.gallery.closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-4 sm:left-6 p-3 bg-[#5B4636]/70 hover:bg-[#C9A24D] text-[#FFFBF5] rounded-full transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] min-h-[44px] min-w-[44px] items-center justify-center"
            aria-label={t.gallery.prevPhoto}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Photo in Lightbox (Clean presentation without title text) */}
          <div className="max-w-4xl max-h-[80vh] sm:max-h-[85vh] flex flex-col items-center justify-center">
            <div className="relative border border-[#C9A24D]/50 rounded-2xl overflow-hidden shadow-2xl bg-black">
              <img
                src={GALLERY_PHOTOS[activePhotoIndex].url}
                alt={GALLERY_PHOTOS[activePhotoIndex].alt[currentLang]}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] sm:max-h-[80vh] max-w-full object-contain"
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-4 sm:right-6 p-3 bg-[#5B4636]/70 hover:bg-[#C9A24D] text-[#FFFBF5] rounded-full transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] min-h-[44px] min-w-[44px] items-center justify-center"
            aria-label={t.gallery.nextPhoto}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
