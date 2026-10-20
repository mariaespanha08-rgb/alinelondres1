import React, { useState } from 'react';
import { Send, PoundSterling, Users, RefreshCw, HeartPulse, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language, BookingFormData } from '../types';
import { translations } from '../i18n/translations';
import { WHATSAPP_NUMBER } from '../data/content';

interface BookingFormProps {
  currentLang: Language;
  selectedServicePreset?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ currentLang, selectedServicePreset }) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    service: selectedServicePreset || 'Aplicação de Unhas de Fibra',
    preferredDays: ['Seg', 'Sex'],
    preferredTime: 'Tarde (13:00 - 17:00)',
    clientType: 'new',
    finishPreference: 'shellac',
    notes: '',
    agreedToTerms: false,
  });

  const [errorName, setErrorName] = useState(false);
  const [errorTerms, setErrorTerms] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const policyIcons = [
    <PoundSterling key="deposit" className="w-5 h-5 text-[#C9A24D]" />,
    <Users key="solo" className="w-5 h-5 text-[#C9A24D]" />,
    <RefreshCw key="reschedule" className="w-5 h-5 text-[#C9A24D]" />,
    <HeartPulse key="health" className="w-5 h-5 text-[#C9A24D]" />,
  ];

  const handleDayToggle = (dayId: string) => {
    setFormData((prev) => {
      const exists = prev.preferredDays.includes(dayId);
      if (exists) {
        return { ...prev, preferredDays: prev.preferredDays.filter((d) => d !== dayId) };
      } else {
        return { ...prev, preferredDays: [...prev.preferredDays, dayId] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    if (!formData.name.trim()) {
      setErrorName(true);
      hasError = true;
    } else {
      setErrorName(false);
    }

    if (!formData.agreedToTerms) {
      setErrorTerms(true);
      hasError = true;
    } else {
      setErrorTerms(false);
    }

    if (hasError) return;

    // Build WhatsApp message according to PRD format and language
    const daysStr =
      formData.preferredDays.length > 0
        ? formData.preferredDays.join(', ')
        : currentLang === 'pt'
        ? 'A combinar'
        : 'To arrange';

    const clientTypeStr =
      currentLang === 'pt'
        ? formData.clientType === 'new'
          ? 'Primeira vez no studio'
          : 'Já sou cliente da Aline'
        : formData.clientType === 'new'
        ? 'First time visiting'
        : 'Returning client';

    const finishMapPt: Record<string, string> = {
      natural: 'Acabamento natural',
      shellac: 'Esmaltação Shellac / Gel',
      nailart: 'Nail art personalizada',
      undecided: 'Ainda vou decidir',
    };

    const finishMapEn: Record<string, string> = {
      natural: 'Natural look',
      shellac: 'Shellac / Gel polish',
      nailart: 'Bespoke nail art',
      undecided: 'Will decide on the day',
    };

    const finishStr =
      currentLang === 'pt'
        ? finishMapPt[formData.finishPreference] || 'Natural'
        : finishMapEn[formData.finishPreference] || 'Natural';

    const obsStr = formData.notes.trim() ? formData.notes.trim() : currentLang === 'pt' ? 'Nenhuma' : 'None';

    let message = '';
    if (currentLang === 'pt') {
      message = `Olá, Aline! ✨ Meu nome é ${formData.name.trim()}. Gostaria de agendar: ${formData.service}. Dias de preferência: ${daysStr}. Horário: ${formData.preferredTime}. Acabamento: ${finishStr}. ${clientTypeStr}. Observações: ${obsStr}. Li e concordo com as orientações de agendamento (sinal de £20, sem acompanhantes, remarcação com 24h).`;
    } else {
      message = `Hello Aline! ✨ My name is ${formData.name.trim()}. I would like to book: ${formData.service}. Preferred days: ${daysStr}. Preferred time: ${formData.preferredTime}. Finish: ${finishStr}. ${clientTypeStr}. Additional notes: ${obsStr}. I have read and agree to the booking policies (£20 deposit, solo appointments, 24h rescheduling).`;
    }

    setIsSuccess(true);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendar" className="py-20 sm:py-28 bg-[#F6EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A24D] font-semibold mb-3">
            <span>✦</span>
            <span>Agendamento Rápido</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B4636] leading-tight mb-4">
            {t.booking.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B4636]/80 font-normal">
            {t.booking.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-6" />
        </div>

        {/* 4 Educational Guidance Cards */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#A68262] font-semibold mb-4 text-center">
            {t.booking.policiesTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.booking.policies.map((policy, idx) => (
              <div
                key={idx}
                className="bg-[#FFFBF5] border border-[#EADCCB] rounded-2xl p-5 shadow-xs flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#C9A24D]/30 flex items-center justify-center mb-3">
                  {policyIcons[idx]}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#5B4636] mb-1.5">
                  {policy.title}
                </h3>
                <p className="text-xs text-[#5B4636]/75 leading-relaxed font-normal">
                  {policy.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Card with Fine Golden Border */}
        <div className="max-w-3xl mx-auto bg-[#FFFBF5] border border-[#C9A24D]/35 rounded-2xl p-5 sm:p-8 md:p-10 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Field 1: Name */}
            <div>
              <label htmlFor="client-name" className="block text-xs sm:text-sm font-semibold text-[#5B4636] mb-2">
                {t.booking.form.nameLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="client-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errorName) setErrorName(false);
                }}
                placeholder={t.booking.form.namePlaceholder}
                className={`w-full px-4 py-3 rounded-xl bg-[#F6EFE6]/60 border ${
                  errorName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#EADCCB] focus:border-[#C9A24D]'
                } text-[#5B4636] text-sm focus:outline-none transition-colors min-h-[46px]`}
              />
              {errorName && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {t.booking.form.errorName}
                </p>
              )}
            </div>

            {/* Field 2: Service Selection */}
            <div>
              <label htmlFor="service-select" className="block text-xs sm:text-sm font-semibold text-[#5B4636] mb-2">
                {t.booking.form.serviceLabel}
              </label>
              <select
                id="service-select"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F6EFE6]/60 border border-[#EADCCB] focus:border-[#C9A24D] text-[#5B4636] text-sm focus:outline-none transition-colors min-h-[46px]"
              >
                {t.booking.form.serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Preferred Days */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-[#5B4636] mb-2">
                {t.booking.form.daysLabel}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {t.booking.form.days.map((d) => {
                  const isChecked = formData.preferredDays.includes(d.id);
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => handleDayToggle(d.id)}
                      className={`py-2 px-1 text-xs font-semibold rounded-xl border text-center transition-all min-h-[42px] ${
                        isChecked
                          ? 'bg-[#5B4636] text-[#FFFBF5] border-[#5B4636] shadow-xs'
                          : 'bg-[#F6EFE6]/60 text-[#5B4636] border-[#EADCCB] hover:border-[#C9A24D]'
                      }`}
                      aria-pressed={isChecked}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 4: Preferred Period/Time */}
            <div>
              <label htmlFor="time-select" className="block text-xs sm:text-sm font-semibold text-[#5B4636] mb-2">
                {t.booking.form.timeLabel}
              </label>
              <select
                id="time-select"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F6EFE6]/60 border border-[#EADCCB] focus:border-[#C9A24D] text-[#5B4636] text-sm focus:outline-none transition-colors min-h-[46px]"
              >
                {t.booking.form.timeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 5: Already a client? */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-[#5B4636] mb-2">
                {t.booking.form.clientLabel}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, clientType: 'new' })}
                  className={`py-2.5 px-4 text-xs sm:text-sm rounded-xl border font-medium transition-all ${
                    formData.clientType === 'new'
                      ? 'bg-[#5B4636] text-[#FFFBF5] border-[#5B4636]'
                      : 'bg-[#F6EFE6]/60 text-[#5B4636] border-[#EADCCB] hover:border-[#C9A24D]'
                  }`}
                >
                  {t.booking.form.clientOptions.new}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, clientType: 'existing' })}
                  className={`py-2.5 px-4 text-xs sm:text-sm rounded-xl border font-medium transition-all ${
                    formData.clientType === 'existing'
                      ? 'bg-[#5B4636] text-[#FFFBF5] border-[#5B4636]'
                      : 'bg-[#F6EFE6]/60 text-[#5B4636] border-[#EADCCB] hover:border-[#C9A24D]'
                  }`}
                >
                  {t.booking.form.clientOptions.existing}
                </button>
              </div>
            </div>

            {/* Field 6: Finish / Nail Art preference */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-[#5B4636] mb-2">
                {t.booking.form.finishLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(
                  [
                    { key: 'natural', label: t.booking.form.finishOptions.natural },
                    { key: 'shellac', label: t.booking.form.finishOptions.shellac },
                    { key: 'nailart', label: t.booking.form.finishOptions.nailart },
                    { key: 'undecided', label: t.booking.form.finishOptions.undecided },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setFormData({ ...formData, finishPreference: item.key })}
                    className={`py-2 px-3 text-xs rounded-xl border text-left font-medium transition-all ${
                      formData.finishPreference === item.key
                        ? 'bg-[#EADCCB] text-[#5B4636] border-[#C9A24D] font-bold shadow-xs'
                        : 'bg-[#F6EFE6]/50 text-[#5B4636]/80 border-[#EADCCB] hover:border-[#C9A24D]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 7: Notes */}
            <div>
              <label htmlFor="booking-notes" className="block text-xs sm:text-sm font-semibold text-[#5B4636] mb-2">
                {t.booking.form.notesLabel}
              </label>
              <textarea
                id="booking-notes"
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={t.booking.form.notesPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#F6EFE6]/60 border border-[#EADCCB] focus:border-[#C9A24D] text-[#5B4636] text-sm focus:outline-none transition-colors"
              />
            </div>

            {/* Mandatory Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => {
                    setFormData({ ...formData, agreedToTerms: e.target.checked });
                    if (errorTerms) setErrorTerms(false);
                  }}
                  className="mt-1 h-4 w-4 rounded border-[#C9A24D] text-[#C9A24D] focus:ring-[#C9A24D]"
                />
                <span className="text-xs sm:text-sm text-[#5B4636] leading-snug">
                  {t.booking.form.termsCheck}
                </span>
              </label>
              {errorTerms && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {t.booking.form.errorTerms}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                data-cta="booking-submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-semibold text-[#5B4636] bg-gold-gradient hover:brightness-105 active:scale-[0.98] rounded-2xl shadow-md hover:shadow-lg transition-all border border-[#B8903A]/30 min-h-[50px]"
              >
                <Send className="w-4 h-4 text-[#5B4636]" />
                <span>{t.booking.form.submitButton}</span>
              </button>
            </div>

            {isSuccess && (
              <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center gap-2 text-xs text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {currentLang === 'pt'
                    ? 'Mensagem gerada com sucesso! Uma nova aba com o WhatsApp da Aline foi aberta.'
                    : 'Message generated successfully! WhatsApp opened in a new tab.'}
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
