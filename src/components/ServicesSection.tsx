'use client';

import React from 'react';
import Image from 'next/image';
import { SERVICES } from '@/data/content';
import { Service } from '@/types';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { CarIcon, UserCheckIcon, CompassIcon, PlaneIcon, MapIcon, CheckIcon, ArrowRightIcon, WhatsAppIcon } from './Icons';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'car':
        return <CarIcon className="w-5 h-5 text-[#c89b3c]" />;
      case 'user-check':
        return <UserCheckIcon className="w-5 h-5 text-[#c89b3c]" />;
      case 'compass':
        return <CompassIcon className="w-5 h-5 text-[#c89b3c]" />;
      case 'plane':
        return <PlaneIcon className="w-5 h-5 text-[#c89b3c]" />;
      case 'map':
      default:
        return <MapIcon className="w-5 h-5 text-[#c89b3c]" />;
    }
  };

  return (
    <section id="services" className="relative border-b border-[#071b1e]/10 py-24 bg-[#fbf8f2]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,155,60,0.06),_transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="section-kicker mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            Verified Travel Services
          </div>
          <h2 className="section-title mb-4 font-editorial">
            Tailored Journeys Across Kenya.
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            Flexible private transport, executive chauffeur services, airport transfers, and tailor-made safari tours configured around your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service: Service, index: number) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <article
                key={service.id}
                className={`editorial-card group flex flex-col justify-between overflow-hidden rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isFeatured ? 'border-[#c89b3c]/35' : ''
                }`}
              >
                <div className="relative h-56 overflow-hidden bg-[#dfd6c6]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/85 via-[#071b1e]/20 to-transparent" />

                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-[#071b1e]/85 shadow-md backdrop-blur-md">
                    {getIcon(service.iconName)}
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-[#071b1e]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e0b75a] backdrop-blur-md">
                    {service.tagline}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex-1">
                    <h3 className="mb-2 text-2xl font-bold font-editorial tracking-tight text-[#071b1e] group-hover:text-[#1b4d47] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#2d4549]">{service.description}</p>

                    <ul className="space-y-2 text-xs leading-relaxed text-[#1e444b]">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c89b3c]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-[#071b1e]/10 pt-4">
                    <button
                      onClick={() => (onSelectService ? onSelectService(service.title) : window.location.assign('#contact'))}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#071b1e] transition-colors hover:text-[#c89b3c] cursor-pointer"
                    >
                      <span>Inquire Service</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Hello Edoya Express Ride & Safaris Kenya, I would like to inquire about your ${service.title} service.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#071b1e] hover:bg-[#25D366]/25 transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#1ebd5b]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
