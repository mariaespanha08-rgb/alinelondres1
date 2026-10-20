import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFBF5]/95 backdrop-blur-md shadow-sm border-b border-[#C9A24D]/30 py-3'
          : 'bg-[#F6EFE6]/90 backdrop-blur-xs py-4 sm:py-5 border-b border-[#EADCCB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark (clean typography without sparkles icon) */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex flex-col group whitespace-nowrap shrink-0"
            aria-label="Aline Ferreira – Cursos e Unhas"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#5B4636] leading-none group-hover:text-[#C9A24D] transition-colors">
              Aline Ferreira
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#A68262] font-medium font-montserrat mt-0.5">
              {t.brandTagline}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[#5B4636]/90 font-montserrat"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[#C9A24D] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A24D] after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Selector + Primary CTA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Language Switcher */}
            <div
              className="inline-flex items-center bg-[#EADCCB]/60 rounded-full p-0.5 border border-[#C9A24D]/40 text-xs font-semibold"
              role="group"
              aria-label="Select Language"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('pt')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currentLang === 'pt'
                    ? 'bg-[#5B4636] text-[#FFFBF5] shadow-xs'
                    : 'text-[#5B4636] hover:text-[#C9A24D]'
                }`}
                aria-pressed={currentLang === 'pt'}
                aria-label="Português"
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#5B4636] text-[#FFFBF5] shadow-xs'
                    : 'text-[#5B4636] hover:text-[#C9A24D]'
                }`}
                aria-pressed={currentLang === 'en'}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Desktop CTA Button */}
            <a
              href="#agendar"
              onClick={(e) => handleNavClick(e, '#agendar')}
              data-cta="header"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 border border-[#B8903A]/40 min-h-[44px]"
            >
              {t.nav.agendar}
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#5B4636] hover:text-[#C9A24D] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A24D] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-full bg-[#FFFBF5] border-b border-[#C9A24D]/30 shadow-xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#5B4636] hover:text-[#C9A24D] py-2 border-b border-[#EADCCB]/50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C9A24D]">✦</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#agendar"
                onClick={(e) => handleNavClick(e, '#agendar')}
                className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#5B4636] bg-gold-gradient rounded-full shadow-md text-center min-h-[44px]"
              >
                {t.nav.agendar}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
