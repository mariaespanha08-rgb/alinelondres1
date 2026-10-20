import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { InstagramSection } from './components/InstagramSection';
import { Studio } from './components/Studio';
import { BookingForm } from './components/BookingForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('af_lang');
    return saved === 'en' || saved === 'pt' ? (saved as Language) : 'pt';
  });

  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Aplicação de Unhas de Fibra');

  const handleLanguageChange = (newLang: Language) => {
    setCurrentLang(newLang);
    localStorage.setItem('af_lang', newLang);
    document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : 'en-GB';
  };

  useEffect(() => {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en-GB';
  }, [currentLang]);

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalModalState({
      isOpen: true,
      type,
    });
  };

  const handleCloseLegal = () => {
    setLegalModalState({
      isOpen: false,
      type: null,
    });
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedServicePreset(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6EFE6] text-[#5B4636] font-montserrat selection:bg-[#C9A24D]/30 selection:text-[#5B4636]">
      {/* Sticky Top Navigation Header */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Main One-Page Content with all 8 Sections in Exact PRD Order */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero currentLang={currentLang} />

        {/* Section 2: Services */}
        <Services
          currentLang={currentLang}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Section 3: Gallery with Lightbox */}
        <Gallery currentLang={currentLang} />

        {/* Section 4: About Aline Ferreira & VIP Mentorship */}
        <About currentLang={currentLang} />

        {/* Section 5: Instagram Reel Embed & Follow */}
        <InstagramSection currentLang={currentLang} />

        {/* Section 6: The Studio & Map */}
        <Studio currentLang={currentLang} />

        {/* Section 7: Booking Form & WhatsApp Direct Link */}
        <BookingForm
          currentLang={currentLang}
          selectedServicePreset={selectedServicePreset}
        />

        {/* Section 8: FAQ Accordion */}
        <FAQ currentLang={currentLang} />
      </main>

      {/* Section 9: Footer with UK Compliance & Legal Modals */}
      <Footer currentLang={currentLang} onOpenLegal={handleOpenLegal} />

      {/* Persistent Floating WhatsApp CTA */}
      <WhatsAppFloatingButton currentLang={currentLang} />

      {/* Floating Accessible Legal Modals (Privacy Policy & Terms of Use) */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={handleCloseLegal}
      />
    </div>
  );
}
