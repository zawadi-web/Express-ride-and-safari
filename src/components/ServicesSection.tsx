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
        return <CarIcon className="w-6 h-6 text-[#1d6d68]" />;
      case 'user-check':
        return <UserCheckIcon className="w-6 h-6 text-[#1d6d68]" />;
      case 'compass':
        return <CompassIcon className="w-6 h-6 text-[#1d6d68]" />;
      case 'plane':
        return <PlaneIcon className="w-6 h-6 text-[#1d6d68]" />;
      case 'map':
      default:
        return <MapIcon className="w-6 h-6 text-[#1d6d68]" />;
    }
  };

  return (
    <section id="services" className="relative border-b border-[#0d2d30]/10 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,109,104,0.08),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="section-kicker mx-auto mb-5">Services &amp; Solutions</div>
          <h2 className="section-title mb-4">Travel your way.</h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            Flexible transport and travel services designed around the pace, comfort and route that fit your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service: Service, index: number) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <article
                key={service.id}
                className={`section-shell group flex flex-col justify-between overflow-hidden rounded-[1.8rem] ${
                  isFeatured ? 'border-[#1d6d68]/15 shadow-[0_24px_50px_rgba(10,30,33,0.08)]' : ''
                }`}
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/75 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0d2d30]/10 bg-white/80 shadow-[0_12px_25px_rgba(7,27,30,0.08)] backdrop-blur-sm">
                    {getIcon(service.iconName)}
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-[#071b1e]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8ef76] backdrop-blur-md">
                    {service.tagline}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex-1">
                    <h3 className="mb-2 text-2xl font-black tracking-[-0.04em] text-[#0d252a] group-hover:text-[#1d6d68] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-7 text-[#34545d]">{service.description}</p>

                    <ul className="space-y-2.5 text-xs leading-6 text-[#1b3e46]">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1d6d68]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-[#0d2d30]/10 pt-4">
                    <button
                      onClick={() => (onSelectService ? onSelectService(service.title) : window.location.assign('#contact'))}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#0d252a] transition-colors hover:text-[#1d6d68]"
                    >
                      <span>Inquire Now</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Hello Express Ride & Safaris Kenya, I would like to inquire about your ${service.title} service.`)}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
