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
    <section id="safaris" className="relative border-b border-[#0d2d30]/10 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(29,109,104,0.08),_transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="section-kicker mx-auto mb-5">Safari &amp; Travel Expeditions</div>
          <h2 className="section-title mb-4">Explore Kenya.</h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            From the coast to the savannah, discover some of Kenya’s most memorable landscapes, parks and private routes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SAFARI_DESTINATIONS.map((dest: SafariDestination) => (
            <article key={dest.id} className="section-shell group flex flex-col overflow-hidden rounded-[1.8rem]">
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/70 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#071b1e]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f7f4ee] backdrop-blur-sm">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#cfe85e]" />
                  {dest.region}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#d8ef76]">
                  {dest.tagline}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-5 flex-1">
                  <h3 className="mb-2 text-2xl font-black tracking-[-0.04em] text-[#0d252a] group-hover:text-[#1d6d68] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="mb-5 text-sm leading-7 text-[#34545d]">{dest.description}</p>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#527178]">Key highlights</p>
                    <ul className="space-y-2 text-xs text-[#1b3e46]">
                      {dest.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1d6d68]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-[#0d2d30]/10 pt-4">
                  <button
                    onClick={() => (onPlanTrip ? onPlanTrip(dest.name) : window.location.assign('#contact'))}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#0d252a] transition-colors hover:text-[#1d6d68]"
                  >
                    <span>Plan trip</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getSafariWhatsAppUrl(dest.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/25 bg-[#ecfbf0] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d3b31]"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
