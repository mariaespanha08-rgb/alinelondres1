import React from 'react';
import { Clock, Info, Check, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { SERVICES, WHATSAPP_NUMBER } from '../data/content';

interface ServicesProps {
  currentLang: Language;
  onSelectServiceForBooking?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ currentLang, onSelectServiceForBooking }) => {
  const t = translations[currentLang];

  const handleBookService = (serviceName: string, customMsg: string) => {
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(serviceName);
    }
    const encoded = encodeURIComponent(customMsg);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#FFFBF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
            <span>✦</span>
            <span>Menu Exclusivo</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B4636] leading-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal">
            {t.services.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-6" />
        </div>

        {/* Services Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#F6EFE6] rounded-2xl overflow-hidden border border-[#EADCCB] hover:border-[#C9A24D] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#5B4636]">
                  <img
                    src={service.image}
                    alt={service.name[currentLang]}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B4636]/60 via-transparent to-transparent opacity-60" />

                  {/* Duration Pill or Badge */}
                  {service.duration && (
                    <div className="absolute bottom-3 left-3 bg-[#FFFBF5]/90 backdrop-blur-xs text-[#5B4636] text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-[#C9A24D]/30 shadow-xs">
                      <Clock className="w-3 h-3 text-[#C9A24D]" />
                      <span>{service.duration[currentLang]}</span>
                    </div>
                  )}
                </div>

                {/* Service Body */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B4636] leading-snug">
                      {service.name[currentLang]}
                    </h3>
                  </div>

                  {/* Price Highlight */}
                  <div className="mb-4">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C9A24D] tracking-tight">
                      {service.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed mb-4">
                    {service.description[currentLang]}
                  </p>

                  {/* Additional Items list if applicable (Card 4) */}
                  {service.items && (
                    <div className="mt-4 pt-4 border-t border-[#EADCCB] space-y-2.5">
                      <p className="text-[11px] uppercase font-semibold text-[#A68262] tracking-wider mb-2">
                        {t.services.otherIncluded}
                      </p>
                      {service.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-xs text-[#5B4636] bg-[#FFFBF5] px-3 py-2 rounded-lg border border-[#EADCCB]/70"
                        >
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#C9A24D]" />
                            <span>{item[currentLang]}</span>
                          </div>
                          <span className="font-bold text-[#C9A24D] whitespace-nowrap ml-2">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() =>
                    handleBookService(
                      service.name[currentLang],
                      service.whatsappMessage[currentLang]
                    )
                  }
                  data-cta={`servico-${service.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-[#5B4636] bg-gold-gradient hover:brightness-105 active:scale-[0.98] rounded-xl shadow-xs hover:shadow-md transition-all border border-[#B8903A]/30 min-h-[44px]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#5B4636]" />
                  <span>{t.services.ctaButton}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deposit Policy Notice */}
        <div className="mt-12 max-w-xl mx-auto bg-[#F6EFE6] border border-[#C9A24D]/40 rounded-xl p-4 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-[#5B4636] shadow-xs">
          <Info className="w-4 h-4 text-[#C9A24D] shrink-0" />
          <span>{t.services.depositNotice}</span>
        </div>
      </div>
    </section>
  );
};
