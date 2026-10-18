import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { WhatsAppIcon, MapPinIcon, PhoneIcon, ArrowRightIcon, ShieldCheckIcon, ClockIcon, MailIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden border-b border-[#0d2d30]/10 pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,109,104,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(208,130,46,0.12),_transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-6">
            <div className="section-kicker w-fit">
              <span className="h-2 w-2 rounded-full bg-[#cfe85e]" />
              {COMPANY_INFO.name}
            </div>

            <div className="space-y-5">
              <h1 className="section-title max-w-xl">
                Drive. Explore. <span className="gold-gradient-text">Experience Kenya.</span>
              </h1>

              <p className="section-copy max-w-xl text-base sm:text-lg text-[#1a3a40]">
                {COMPANY_INFO.heroSubheadline}
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
              <a href="#cars" className="premium-button">
                <span>Explore Our Cars</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="premium-button-secondary">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#0d2d30]/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1a3a40]">
              <div className="inline-flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-[#1d6d68]" />
                <span>{COMPANY_INFO.locations}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <MailIcon className="w-3.5 h-3.5 text-[#1d6d68]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#071b1e] transition-colors">{COMPANY_INFO.email}</a>
              </div>
              <div className="inline-flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#1d6d68]" />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#071b1e] transition-colors">{COMPANY_INFO.phones[0]}</a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-[#1a3a40]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0d2d30]/10 bg-white/70 px-3 py-2">
                <ShieldCheckIcon className="w-4 h-4 text-[#1d6d68]" />
                Insured fleet
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0d2d30]/10 bg-white/70 px-3 py-2">
                <ClockIcon className="w-4 h-4 text-[#1d6d68]" />
                24/7 dispatch
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="section-shell relative overflow-hidden rounded-[2rem] border border-[#0d2d30]/10 bg-white/80 p-3 shadow-[0_30px_70px_rgba(7,27,30,0.15)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#dfeae9]">
                <Image
                  src="/images/cars/toyota-prado.jpg"
                  alt="Premium Toyota Land Cruiser Prado TX / J150 rental vehicle in Kenya"
                  fill
                  priority
                  className="animate-kenburns object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/80 via-[#071b1e]/8 to-transparent" />

                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d8ef76]">Premium fleet</p>
                    <p className="mt-1 text-xl font-black text-white">4WD &amp; executive travel</p>
                  </div>
                  <span className="rounded-full bg-[#cfe85e] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#071b1e]">
                    Mombasa • Nairobi
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-4 rounded-2xl border border-[#0d2d30]/10 bg-white/90 px-4 py-3 shadow-[0_18px_32px_rgba(7,27,30,0.08)] backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1d6d68]">Trusted with every trip</p>
              <p className="mt-1 text-base font-black text-[#081d20]">24/7 airport &amp; coastal support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
