'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { SmartBookingForm } from './SmartBookingForm';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon, MailIcon, ShieldCheckIcon } from './Icons';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'Car Hire (Self-Drive)' }) => {
  return (
    <section id="contact" className="relative py-24 border-b border-[#071b1e]/10 bg-[#fbf8f2] overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#c89b3c]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-[#1b4d47]/08 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="section-kicker mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            Official Booking &amp; Hotline Desk
          </div>
          <h2 className="section-title mb-4 font-editorial">
            Direct Reservations &amp; Enquiries
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            Plan your Kenyan journey with our verified reservation desk. Submit your travel details below to launch a prefilled WhatsApp enquiry, or call us directly 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Business Info & Verified Operations */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="editorial-card rounded-[2rem] p-7 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#133935]/10 text-[#133935] text-[10px] font-bold uppercase tracking-wider">
                  Verified Headquarters
                </span>
                <span className="text-xs text-[#8f7547] font-semibold">Mombasa &bull; Nairobi</span>
              </div>

              <h3 className="text-2xl font-bold font-editorial text-[#071b1e] tracking-tight mb-2">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-[#c89b3c] font-bold uppercase tracking-[0.16em] mb-6">
                Car Hire &amp; Rentals · Safaris · Airport Transfers
              </p>

              <div className="space-y-5 text-sm">
                
                {/* Mombasa Head Office */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#c89b3c]/15 border border-[#c89b3c]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#9d7322]">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6f8285] font-bold block">Head Office</span>
                    <span className="text-[#071b1e] font-bold text-sm block">Bamburi Fisheries, Mombasa</span>
                    <span className="text-xs text-[#4d6669] leading-relaxed">
                      Fast dispatch to Moi Airport (MBA), Nyali, Bamburi resorts &amp; Mombasa SGR Terminus.
                    </span>
                  </div>
                </div>

                {/* Nairobi Hub */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1b4d47]/10 border border-[#1b4d47]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#1b4d47]">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6f8285] font-bold block">Nairobi Hub</span>
                    <span className="text-[#071b1e] font-bold text-sm block">Nairobi Capital Operations</span>
                    <span className="text-xs text-[#4d6669] leading-relaxed">
                      Covering JKIA, Wilson Airport, Central Business District, Westlands &amp; outbound safaris.
                    </span>
                  </div>
                </div>

                {/* Primary WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#1ebd5b]">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6f8285] font-bold block">Primary WhatsApp Line</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#133935] hover:text-[#1ebd5b] font-black text-base transition-colors block"
                    >
                      {COMPANY_INFO.whatsappPhone}
                    </a>
                    <span className="text-xs text-[#526e72]">Instant responses &amp; vehicle availability checks</span>
                  </div>
                </div>

                {/* Direct Hotline Calling */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#c89b3c]/15 border border-[#c89b3c]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#9d7322]">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6f8285] font-bold block">24/7 Calling Hotlines</span>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-[#071b1e] mt-0.5">
                      <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#c89b3c] transition-colors">
                        {COMPANY_INFO.phones[0]}
                      </a>
                      <span className="text-[#c89b3c]">&bull;</span>
                      <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-[#c89b3c] transition-colors">
                        {COMPANY_INFO.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1b4d47]/10 border border-[#1b4d47]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#1b4d47]">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6f8285] font-bold block">Official Inquiries Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#071b1e] font-semibold text-sm hover:text-[#c89b3c] transition-colors block break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#071b1e]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#6f8285]">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6f8285] font-bold block">Support &amp; Dispatch</span>
                    <span className="text-xs font-semibold text-[#071b1e] block">{COMPANY_INFO.hours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Trust Banner */}
            <div className="editorial-card-dark rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-[#c89b3c]" />
                <h4 className="text-sm font-bold tracking-wide uppercase text-[#fbf8f2]">
                  Authentic Service Guarantee
                </h4>
              </div>
              <p className="text-xs text-[#cedee0] leading-relaxed">
                All vehicles in our fleet are regularly serviced, thoroughly cleaned, and backed by experienced local drivers and support staff across Kenya.
              </p>
            </div>

          </div>

          {/* RIGHT: Smart WhatsApp Booking Suite */}
          <div className="lg:col-span-7">
            <SmartBookingForm initialService={initialService} />
          </div>

        </div>

      </div>
    </section>
  );
};
