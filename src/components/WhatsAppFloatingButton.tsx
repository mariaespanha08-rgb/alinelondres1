import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { WHATSAPP_URL } from '../data/content';

interface WhatsAppFloatingButtonProps {
  currentLang: Language;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentLang }) => {
  const [isHovered, setIsHovered] = useState(false);
  const t = translations[currentLang];

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Hover */}
      <div
        className={`hidden sm:block bg-[#5B4636] text-[#FFFBF5] text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg border border-[#C9A24D]/50 transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>{t.floating.tooltip}</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={t.floating.ariaLabel}
        data-cta="floating-whatsapp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-gradient text-[#5B4636] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 border-2 border-[#FFFBF5] relative group focus:outline-none focus:ring-4 focus:ring-[#C9A24D]/50"
      >
        {/* Subtle breathing ripple glow */}
        <span
          className="absolute inset-0 rounded-full bg-[#E3C77E]/40 animate-ping -z-10 opacity-75"
          aria-hidden="true"
        />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#5B4636] drop-shadow-xs transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </aside>
  );
};
