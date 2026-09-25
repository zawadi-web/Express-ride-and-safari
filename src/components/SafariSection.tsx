'use client';

import React from 'react';
import Image from 'next/image';
import { SAFARI_DESTINATIONS } from '@/data/content';
import { SafariDestination } from '@/types';
import { getSafariWhatsAppUrl } from '@/utils/whatsapp';
import { MapPinIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

interface SafariSectionProps {
  onPlanTrip?: (destinationName: string) => void;
}

export const SafariSection: React.FC<SafariSectionProps> = ({ onPlanTrip }) => {
  return (
    <section id="safaris" className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4 shadow-xs">
            Safari &amp; Travel Expeditions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
            Explore Kenya
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From the coast to the savannah, discover some of Kenya&apos;s most memorable destinations.
          </p>
        </div>

        {/* 6 Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAFARI_DESTINATIONS.map((dest: SafariDestination) => {
            return (
              <div
                key={dest.id}
                className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group shadow-sm"
              >
                {/* Image */}
                <div className="relative w-full h-60 overflow-hidden bg-slate-100">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Region badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs text-white">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span className="font-medium">{dest.region}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-extrabold text-[#F59E0B] tracking-wide uppercase drop-shadow-sm">
                      {dest.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#D97706] transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {dest.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase text-slate-500 block mb-2 tracking-wider">
                        Key Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                        {dest.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onPlanTrip ? onPlanTrip(dest.name) : window.location.assign('#contact')}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900 hover:text-[#D97706] transition-colors cursor-pointer"
                    >
                      <span>Plan Your Trip</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getSafariWhatsAppUrl(dest.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
