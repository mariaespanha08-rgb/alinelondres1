import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/content';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#5B4636]/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#FFFBF5] text-[#5B4636] rounded-2xl shadow-2xl border border-[#C9A24D]/40 max-h-[85vh] flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EADCCB] bg-[#F6EFE6]/70">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#C9A24D]" />
            ) : (
              <FileText className="w-5 h-5 text-[#C9A24D]" />
            )}
            <h2 id="legal-modal-title" className="font-serif text-2xl font-bold text-[#5B4636]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 text-[#A68262] hover:text-[#5B4636] hover:bg-[#EADCCB]/50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-sm leading-relaxed space-y-4 text-[#5B4636]/90">
          {type === 'privacy' ? (
            <>
              <p className="text-xs text-[#A68262]">Last updated: October 2026</p>
              
              <h3 className="font-serif text-lg font-bold text-[#5B4636]">1. Data Controller</h3>
              <p>
                Aline Ferreira operates as a sole trader registered in the United Kingdom. This website
                (alineferreira.uk) functions as an informational portfolio and booking gateway.
                For any data protection inquiries, you can contact the data controller directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#C9A24D] underline hover:text-[#B8903A]">
                  {CONTACT_EMAIL}
                </a>.
              </p>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">2. Information We Collect</h3>
              <p>
                We believe in minimal data footprint. This website does not require registration, does not maintain a user
                account database, and does not store appointment form submissions on our web servers. When you click to book,
                the details you supply (such as your name, preferred service, date preferences, and notes) are encoded into a
                standard WhatsApp message sent directly from your device to our official WhatsApp account.
              </p>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">3. Purpose & Legal Basis</h3>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, personal
                data communicated via WhatsApp is processed solely for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Managing appointment bookings and client consultations (Contract / Pre-contractual steps).</li>
                <li>Communicating preparation instructions, studio address, and aftercare (Contractual fulfillment).</li>
                <li>Complying with public health and salon safety standards (Legitimate interest & Legal obligations).</li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">4. Third-Party Integrations & Cookies</h3>
              <p>
                This website includes embedded components from trusted third parties:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>WhatsApp / Meta:</strong> Messages sent via WhatsApp are subject to WhatsApp's Privacy Policy and end-to-end encryption.</li>
                <li><strong>Instagram / Meta:</strong> Reel previews are embedded via Instagram. Meta may set functional cookies or identifiers in accordance with their privacy practices.</li>
                <li><strong>Google Maps:</strong> Used to display an approximate geographic area of our UK studio without disclosing exact residential coordinates before appointment confirmation.</li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">5. Data Retention & Your Rights</h3>
              <p>
                Booking chat histories on WhatsApp are retained only as long as necessary to maintain client records and provide continuous nail care service. Under UK GDPR, you have the right to request access to your personal data, rectify inaccurate details, request deletion, restrict processing, and withdraw consent at any time.
              </p>
              <p>
                To exercise any of these statutory rights, please send an email to{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#C9A24D] underline">
                  {CONTACT_EMAIL}
                </a>. You also maintain the right to lodge a complaint with the UK supervisory authority, the Information Commissioner's Office (ICO) at{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#C9A24D] underline">
                  ico.org.uk
                </a>.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs text-[#A68262]">Last updated: October 2026</p>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">1. Agreement to Terms</h3>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms of Use.
                All content, service descriptions, prices, and guidance presented here are provided by Aline Ferreira,
                a sole trader operating in the United Kingdom.
              </p>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">2. Booking & Appointment Policies</h3>
              <p>
                To maintain the highest level of bespoke care, punctuality, and hygiene, all bookings are subject to the
                following mandatory conditions:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>£20 Deposit:</strong> A non-refundable £20 deposit is required to lock in your appointment slot. This amount is deducted from the final service balance on the day.</li>
                <li><strong>Solo Appointments:</strong> We operate a private, serene 1-on-1 studio environment. Please do not bring companions, friends, or children.</li>
                <li><strong>24-Hour Rescheduling:</strong> If you must adjust your appointment, please give at least 24 hours notice. Cancellations made with less than 24 hours notice forfeit the deposit.</li>
                <li><strong>Health & Hygiene:</strong> If you feel ill, have an infectious nail condition, or display symptoms of a cold or flu, please notify us in advance to reschedule safely.</li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">3. Pricing & Services</h3>
              <p>
                Prices shown on this website are listed in GBP (£) and are subject to change without prior notice.
                The exact pricing will always be confirmed prior to treatment. Duration estimates (up to 3 hours) are guidelines
                to ensure unhurried, meticulous application.
              </p>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">4. Intellectual Property</h3>
              <p>
                All photographs, portfolio images, video clips, branding logos, design elements, and written copy displayed
                on this website are the proprietary property of Aline Ferreira and are protected by copyright and intellectual
                property laws. Unauthorized reproduction, scraping, or commercial use is strictly prohibited.
              </p>

              <h3 className="font-serif text-lg font-bold text-[#5B4636]">5. Governing Law</h3>
              <p>
                These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes
                arising in connection with this website or services shall be subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>
            </>
          )}

          <div className="mt-6 pt-4 border-t border-[#EADCCB] text-xs text-[#A68262] italic">
            Note: This legal documentation represents general terms and complies with UK standards.
            For direct inquiries, reach out to {CONTACT_EMAIL}.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#EADCCB] bg-[#F6EFE6]/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#5B4636] text-[#FFFBF5] hover:bg-[#A68262] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
