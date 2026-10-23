'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { PhoneIcon, WhatsAppIcon, CheckIcon } from './Icons';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 border-b border-[#071b1e]/10 bg-[#fbf8f2] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,155,60,0.08),_transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with authentic badge */}
          <div className="lg:col-span-6 relative">
            <div className="editorial-card rounded-[2.5rem] overflow-hidden border border-[#071b1e]/10 p-3 shadow-2xl bg-white/90">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/cars/land-cruiser-tour.jpg"
                  alt="Express Ride and Safaris Kenya vehicle exploring nature"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/85 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="p-4 rounded-2xl bg-[#071b1e]/85 backdrop-blur-md border border-white/20 flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-white font-bold block text-sm font-editorial">Kenyan Operations</span>
                      <span className="text-xs text-[#a4bcc0]">Dedicated fleets in Mombasa &amp; Nairobi</span>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-[#c89b3c] text-[#071b1e] font-black flex items-center justify-center text-xs shadow-xs">
                      ER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual, professional company copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="section-kicker w-fit">
              <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
              About Our Company
            </div>

            <h2 className="section-title font-editorial">
              About Express Ride &amp; <br />
              <span className="editorial-gold-text">Safaris Kenya</span>
            </h2>

            {/* Factual copy */}
            <div className="space-y-4 text-base text-[#2d4549] leading-relaxed font-normal">
              <p>
                Express Ride &amp; Safaris Kenya provides car-hire, travel and safari services for customers exploring Kenya. Headquartered at Bamburi Fisheries, Mombasa with operational coverage in Nairobi and upcountry, the company aims to make travel convenient, comfortable and accessible.
              </p>
              <p>
                Whether you need a compact car for daily errands, an executive saloon for corporate functions, a rugged 4x4 SUV for cross-country routes, or a dedicated safari vehicle to witness Kenya&apos;s celebrated wildlife parks, we focus on vehicle dependability and straightforward customer support.
              </p>
            </div>

            {/* Key Service Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#133935] font-semibold">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 border border-[#071b1e]/08 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#c89b3c] shrink-0" />
                <span>Bamburi Fisheries HQ &amp; Coast Coverage</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 border border-[#071b1e]/08 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#c89b3c] shrink-0" />
                <span>Nairobi &amp; Upcountry Routes</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 border border-[#071b1e]/08 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#c89b3c] shrink-0" />
                <span>Self-Drive &amp; Chauffeur Driven</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 border border-[#071b1e]/08 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#c89b3c] shrink-0" />
                <span>Punctual Airport Pickups</span>
              </div>
            </div>

            {/* Direct contact line */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-gold"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#071b1e]" />
                <span>WhatsApp: {COMPANY_INFO.whatsappPhone}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="btn-editorial-outline"
              >
                <PhoneIcon className="w-4 h-4 text-[#c89b3c]" />
                <span>Call {COMPANY_INFO.phones[0]}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
