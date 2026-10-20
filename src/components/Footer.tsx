import React from 'react';
import { Instagram, Sparkles, Mail, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_URL } from '../data/content';

interface FooterProps {
  currentLang: Language;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenLegal }) => {
  const t = translations[currentLang];

  const navLinks = [
    { href: '#inicio', label: t.nav.inicio },
    { href: '#servicos', label: t.nav.servicos },
    { href: '#galeria', label: t.nav.galeria },
    { href: '#sobre', label: t.nav.sobre },
    { href: '#instagram', label: t.nav.instagram },
    { href: '#studio', label: t.nav.studio },
    { href: '#agendar', label: t.nav.agendar },
    { href: '#faq', label: t.nav.faq },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="rodape" className="bg-[#5B4636] text-[#F6EFE6] pt-16 pb-12 border-t border-[#C9A24D]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#A68262]/30">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex flex-col mb-3">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFBF5]">
                Aline Ferreira
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A24D] font-medium font-montserrat mt-0.5">
                {t.brandTagline}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#EADCCB]/80 max-w-sm font-normal leading-relaxed mb-6">
              {t.footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFBF5]/10 hover:bg-[#C9A24D] text-[#FFFBF5] flex items-center justify-center transition-colors border border-[#C9A24D]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                aria-label="Instagram @alineferreira_uk"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFBF5]/10 hover:bg-[#C9A24D] text-[#FFFBF5] flex items-center justify-center transition-colors border border-[#C9A24D]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                aria-label="WhatsApp +44 7515 384559"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-10 h-10 rounded-full bg-[#FFFBF5]/10 hover:bg-[#C9A24D] text-[#FFFBF5] flex items-center justify-center transition-colors border border-[#C9A24D]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                aria-label={`Email ${CONTACT_EMAIL}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mini Navigation Menu */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg font-bold text-[#C9A24D] mb-4">
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs text-[#EADCCB]/90">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="hover:text-[#C9A24D] transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-[9px] text-[#C9A24D]">✦</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#C9A24D] mb-4">
              {currentLang === 'pt' ? 'Atendimento' : 'Appointments'}
            </h4>
            <p className="text-xs text-[#EADCCB]/90 leading-relaxed mb-3">
              {currentLang === 'pt'
                ? 'Exclusivo com hora marcada.'
                : 'Exclusively by prior appointment.'}
            </p>
            <p className="text-xs text-[#EADCCB]/90 leading-relaxed mb-3">
              United Kingdom
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xs text-[#C9A24D] hover:underline flex items-center gap-1.5 break-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>

        {/* 4 Compliance Elements required by PRD */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EADCCB]/70 text-center md:text-left">
          {/* Element 1: Copyright */}
          <div>
            <p>{t.footer.compliance.copyright}</p>
          </div>

          {/* Element 2: Sole trader registration in UK (always in English) */}
          <div>
            <p className="font-medium text-[#EADCCB]/90">
              {t.footer.compliance.soleTrader}
            </p>
          </div>

          {/* Element 3 & 4: Contact + Modal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span>
              {t.footer.compliance.contact}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#C9A24D] hover:underline">
                {CONTACT_EMAIL}
              </a>
            </span>
            <span aria-hidden="true" className="text-[#A68262]">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-[#EADCCB] hover:text-[#C9A24D] underline focus:outline-none focus:ring-1 focus:ring-[#C9A24D]"
            >
              {t.footer.compliance.privacy}
            </button>
            <span aria-hidden="true" className="text-[#A68262]">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="text-[#EADCCB] hover:text-[#C9A24D] underline focus:outline-none focus:ring-1 focus:ring-[#C9A24D]"
            >
              {t.footer.compliance.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
