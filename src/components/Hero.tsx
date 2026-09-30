import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { WhatsAppIcon, MapPinIcon, PhoneIcon, ArrowRightIcon, ShieldCheckIcon, ClockIcon, MailIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full text-slate-900 pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean, confident typography and actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-slate-800">
                {COMPANY_INFO.name}
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Drive. Explore. <br />
              <span className="text-[#D97706]">Experience Kenya.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
              {COMPANY_INFO.heroSubheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#cars"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/35 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Cars</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/90 hover:bg-white text-slate-900 hover:text-[#25D366] border border-slate-200 shadow-sm font-bold text-sm transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Subtle Contact and Location Line */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-[#D97706]" />
                <span className="font-bold text-slate-900">{COMPANY_INFO.locations}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MailIcon className="w-3.5 h-3.5 text-[#D97706]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-black font-semibold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#D97706]" />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-black font-semibold transition-colors">
                  {COMPANY_INFO.phones[0]}
                </a>
                <span className="text-slate-400">|</span>
                <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-black font-semibold transition-colors">
                  {COMPANY_INFO.phones[1]}
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-1 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-[#D97706]" />
                <span>Insured &amp; Inspected Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-[#D97706]" />
                <span>24/7 Dispatch Available</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ONE high-quality realistic professional photograph of a rental vehicle */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-2xl ring-1 ring-slate-900/5 group">
              {/* High-quality realistic automotive photograph */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/cars/toyota-prado.jpg"
                  alt="Premium Toyota Land Cruiser Prado TX / J150 rental vehicle in Kenya"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle vignette gradient for photo depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtle badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-black/65 border border-white/20 px-4 py-2.5 rounded-xl shadow-lg">
                  <div>
                    <span className="text-white font-bold block text-sm">Premium 4WD &amp; City Fleet</span>
                    <span className="text-gray-200 text-xs">Self-drive &amp; chauffeur available</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#F59E0B] text-black font-extrabold text-[11px] shadow">
                    Mombasa &bull; Nairobi
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative subtle ambient card backing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#F59E0B]/20 to-transparent rounded-2xl -z-10 blur-xl opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
};
