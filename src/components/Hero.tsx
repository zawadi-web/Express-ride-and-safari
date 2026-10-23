'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { WhatsAppIcon, MapPinIcon, PhoneIcon, ArrowRightIcon, ShieldCheckIcon, ClockIcon } from './Icons';

interface HeroProps {
  onOpenInquiry?: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden border-b border-[#071b1e]/10 pt-8 pb-16 md:pt-14 md:pb-24 bg-[#fbf8f2]">
      {/* Editorial ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(200,155,60,0.12),_transparent_40%),radial-gradient(ellipse_at_bottom_right,_rgba(19,57,53,0.1),_transparent_45%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Editorial Masthead & Action Suite */}
          <div className="space-y-7 lg:col-span-6">
            
            {/* Kicker Tag */}
            <div className="section-kicker w-fit">
              <span className="h-2 w-2 rounded-full bg-[#c89b3c]" />
              <span>{COMPANY_INFO.name}</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-4">
              <h1 className="section-title font-editorial text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] text-[#071b1e] tracking-tight">
                Drive. Explore.{' '}
                <span className="italic block mt-1 font-normal editorial-gold-text">
                  Experience Kenya.
                </span>
              </h1>

              <p className="section-copy max-w-xl text-base sm:text-lg text-[#1e444b] font-normal leading-relaxed">
                {COMPANY_INFO.heroSubheadline} Headquartered at Bamburi Fisheries, Mombasa with active dispatch across Nairobi and premier safari circuits.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-gold"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#071b1e]" />
                <span>WhatsApp Desk ({COMPANY_INFO.whatsappPhone})</span>
              </a>

              <button
                type="button"
                onClick={() => (onOpenInquiry ? onOpenInquiry('Car Hire (Self-Drive)') : window.location.assign('#contact'))}
                className="btn-editorial-dark cursor-pointer"
              >
                <span>Reserve a Trip</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#e0b75a]" />
              </button>
            </div>

            {/* Verified Head Office & Hub Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#071b1e]/10 pt-5 text-xs text-[#2a4d52] font-semibold">
              <div className="inline-flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-[#c89b3c]" />
                <span>Mombasa Head Office &bull; Nairobi Hub</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <PhoneIcon className="w-3.5 h-3.5 text-[#1b4d47]" />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#c89b3c] transition-colors">
                  {COMPANY_INFO.phones[0]}
                </a>
              </div>
            </div>

            {/* Operational Commitments */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#133935] font-bold">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#071b1e]/10 bg-white/80 px-3.5 py-1.5 shadow-xs">
                <ShieldCheckIcon className="w-4 h-4 text-[#c89b3c]" />
                13 Verified Fleet Models
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#071b1e]/10 bg-white/80 px-3.5 py-1.5 shadow-xs">
                <ClockIcon className="w-4 h-4 text-[#1b4d47]" />
                24/7 Airport &amp; Safari Dispatch
              </div>
            </div>
          </div>

          {/* Right Column: Art-Directed Editorial Photographic Composition */}
          <div className="relative lg:col-span-6">
            
            {/* Primary Hero Stage: Prado TX on Kenyan Corridor */}
            <div className="editorial-card rounded-[2.5rem] p-3 shadow-2xl overflow-hidden border border-[#071b1e]/10 bg-white/90">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#dfd6c6]">
                <Image
                  src="/images/cars/toyota-prado.jpg"
                  alt="Toyota Prado TX / J150 Executive 4WD rental vehicle stationed in Mombasa and Nairobi"
                  fill
                  priority
                  className="animate-kenburns object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/85 via-[#071b1e]/15 to-transparent" />

                {/* Editorial Caption Bar */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 rounded-2xl border border-white/20 bg-black/45 p-4 backdrop-blur-md">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e0b75a] block">
                      Executive &amp; Safari Fleet
                    </span>
                    <span className="mt-0.5 text-lg font-black text-white font-editorial block">
                      Toyota Prado TX &amp; Safari 4x4
                    </span>
                  </div>
                  <span className="rounded-full bg-[#c89b3c] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#071b1e] shrink-0">
                    Mombasa · Nairobi
                  </span>
                </div>
              </div>
            </div>

            {/* Inset Layer: Safari Custom 4x4 Land Cruiser Badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 rounded-2xl border border-[#c89b3c]/40 bg-[#071b1e]/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-md text-[#fbf8f2] max-w-[280px]">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20">
                  <Image
                    src="/images/cars/land-cruiser-tour.jpg"
                    alt="Custom Safari 4x4 Land Cruiser with pop-up roof"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e0b75a] block">
                    Custom 4x4 Safari Cruiser
                  </span>
                  <span className="text-xs font-semibold text-[#cedee0] block">
                    Pop-up roof &amp; heavy suspension
                  </span>
                </div>
              </div>
            </div>

            {/* Verified Location Badge */}
            <div className="hidden sm:block absolute -top-4 -right-3 rounded-xl border border-[#071b1e]/10 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#133935] block">
                Head Office
              </span>
              <span className="text-xs font-bold text-[#071b1e]">
                Bamburi Fisheries, Mombasa
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
