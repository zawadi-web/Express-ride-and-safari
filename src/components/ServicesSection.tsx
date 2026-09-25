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
        return <CarIcon className="w-6 h-6 text-[#D97706]" />;
      case 'user-check':
        return <UserCheckIcon className="w-6 h-6 text-[#D97706]" />;
      case 'compass':
        return <CompassIcon className="w-6 h-6 text-[#D97706]" />;
      case 'plane':
        return <PlaneIcon className="w-6 h-6 text-[#D97706]" />;
      case 'map':
      default:
        return <MapIcon className="w-6 h-6 text-[#D97706]" />;
    }
  };

  return (
    <section id="services" className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4 shadow-xs">
            Services &amp; Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
            Travel Your Way
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Flexible transport and travel services designed around your journey.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service: Service, index: number) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-2xl bg-white/95 backdrop-blur-md border transition-all duration-300 overflow-hidden group hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
                  isFeatured ? 'border-amber-200/80 ring-1 ring-amber-100' : 'border-slate-200/80'
                } hover:border-amber-400`}
              >
                {/* Photo banner */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 flex items-center justify-center shadow-md">
                    {getIcon(service.iconName)}
                  </div>

                  <div className="absolute bottom-3 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/65 text-white backdrop-blur-sm border border-white/20">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#D97706] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckIcon className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService ? onSelectService(service.title) : window.location.assign('#contact')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#D97706] transition-colors cursor-pointer"
                    >
                      <span>Inquire Now</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Hello Express Ride & Safaris Kenya, I would like to inquire about your ${service.title} service.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition-all"
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
