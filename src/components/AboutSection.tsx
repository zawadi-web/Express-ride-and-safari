import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { PhoneIcon, WhatsAppIcon, CheckIcon } from './Icons';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with authentic badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl ring-1 ring-slate-900/5 group">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/cars/land-cruiser-tour.jpg"
                  alt="Express Ride and Safaris Kenya vehicle exploring nature"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-white font-bold block text-sm">Kenyan Operations</span>
                      <span className="text-xs text-slate-200">Dedicated fleets in Mombasa &amp; Nairobi</span>
                    </div>
                    <span className="w-10 h-10 rounded-lg bg-[#F59E0B] text-black font-black flex items-center justify-center text-sm shadow">
                      ER
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient gold glow */}
            <div className="absolute -inset-2 bg-[#F59E0B]/15 rounded-2xl -z-10 blur-xl opacity-60" />
          </div>

          {/* Right Column: Factual, professional company copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] shadow-xs">
              About Our Company
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              About Express Ride &amp; <br />
              <span className="text-[#D97706]">Safaris Kenya</span>
            </h2>

            {/* Factual copy directly as instructed */}
            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
              <p>
                Express Ride &amp; Safaris Kenya provides car-hire, travel and safari services for customers exploring Kenya. With services available in Mombasa and Nairobi, the company aims to make travel convenient, comfortable and accessible.
              </p>
              <p>
                Whether you need a compact car for daily errands, an executive saloon for corporate functions, a rugged 4x4 SUV for cross-country routes, or a dedicated safari vehicle to witness Kenya&apos;s celebrated wildlife parks, we focus on vehicle dependability and straightforward customer support.
              </p>
            </div>

            {/* Key Service Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-800 font-semibold">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Mombasa &amp; Coast Coverage</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Nairobi &amp; Upcountry Routes</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Self-Drive &amp; Chauffeur Driven</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-xs">
                <CheckIcon className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Punctual Airport Pickups</span>
              </div>
            </div>

            {/* Direct contact line */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.whatsappPhone}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-xs transition-colors shadow-xs"
              >
                <PhoneIcon className="w-4 h-4 text-[#D97706]" />
                <span>Call {COMPANY_INFO.phones[0]}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
