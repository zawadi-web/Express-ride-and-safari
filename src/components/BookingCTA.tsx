import React from 'react';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from './Icons';

export const BookingCTA: React.FC = () => {
  return (
    <section className="py-20 text-slate-900 border-b border-slate-200/60 relative overflow-hidden">
      {/* Subtle gold glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#F59E0B]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          Quick Inquiries &amp; Instant Responses
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-6">
          Ready to Start Your Journey?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us where you&apos;re going and what you need. Our team will help you choose the right service.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-black text-sm uppercase tracking-wider shadow-lg shadow-[#25D366]/25 transition-all duration-200"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>WhatsApp Us ({COMPANY_INFO.whatsappPhone})</span>
          </a>

          <div className="flex w-full sm:w-auto items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-black text-sm uppercase tracking-wider shadow-lg shadow-[#F59E0B]/25 transition-all duration-200"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.phones[0]}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phones[1]}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm shadow-sm transition-all duration-200"
            >
              <PhoneIcon className="w-4 h-4 text-[#D97706]" />
              <span>Call: {COMPANY_INFO.phones[1]}</span>
            </a>
          </div>
        </div>

        {/* Location footnote */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-600 font-medium">
          <MapPinIcon className="w-4 h-4 text-[#D97706]" />
          <span>Serving Clients Across <strong className="text-slate-900 font-bold">Mombasa</strong> &amp; <strong className="text-slate-900 font-bold">Nairobi</strong></span>
        </div>

      </div>
    </section>
  );
};
