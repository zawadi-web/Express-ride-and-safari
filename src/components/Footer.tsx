import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, SERVICES } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { MapPinIcon, PhoneIcon, WhatsAppIcon, MailIcon, ArrowRightIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#0d2d30]/10 bg-[#071b1e] text-[#e6eff0]">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 md:pb-16">
        <div className="grid grid-cols-1 gap-10 border-b border-[#1f3a3d] pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <Link href="#home" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Express Ride & Safaris Kenya"
                width={220}
                height={90}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.02] md:h-14"
              />
            </Link>

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d8ef76]">
              Car Hire • Safaris • Tours &amp; Travel
            </p>

            <p className="max-w-sm text-sm leading-7 text-[#c3d7d7]">
              Reliable journeys across Kenya, from private airport transfers and chauffeur-led travel to curated coastal escapes and safari adventures.
            </p>

            <div className="pt-2">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ea5a5]">Connect with us</span>
              <div className="flex items-center gap-2.5">
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1f3a3d] bg-[#0d2d30] text-[#25D366] transition-colors hover:border-[#25D366]/40" aria-label="Official WhatsApp">
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1f3a3d] bg-[#0d2d30] text-[#d8ef76] transition-colors hover:border-[#d8ef76]/40" aria-label="Direct phone line">
                  <PhoneIcon className="w-4 h-4" />
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1f3a3d] bg-[#0d2d30] text-[#cfe85e] transition-colors hover:border-[#cfe85e]/40" aria-label="Email us">
                  <MailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8ef76]">Quick links</h4>
            <ul className="space-y-2 text-sm text-[#cedee0]">
              <li><a href="#home" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="#cars" className="transition-colors hover:text-white">Car Hire</a></li>
              <li><a href="#safaris" className="transition-colors hover:text-white">Safaris</a></li>
              <li><a href="#transfers" className="transition-colors hover:text-white">Airport Transfers</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Tours &amp; Travel</a></li>
              <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-3 lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8ef76]">Our services</h4>
            <ul className="space-y-2 text-sm text-[#cedee0]">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="flex items-center gap-2 transition-colors hover:text-white">
                    <span className="text-[#d8ef76]">›</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8ef76]">Contact details</h4>

            <div className="space-y-3 text-sm text-[#cedee0]">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d8ef76]" />
                <div>
                  <span className="block font-semibold text-white">Head Office</span>
                  <span>Bamburi Fisheries, Mombasa</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d8ef76]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="break-all text-[#cedee0] transition-colors hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d8ef76]" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${COMPANY_INFO.phones[0]}`} className="transition-colors hover:text-white">{COMPANY_INFO.phones[0]}</a>
                  <a href={`tel:${COMPANY_INFO.phones[1]}`} className="transition-colors hover:text-white">{COMPANY_INFO.phones[1]}</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="text-[#25D366] transition-colors hover:underline">{COMPANY_INFO.whatsappPhone}</a>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-[#1f3a3d] bg-[#0d2d30] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f7f4ee] transition-colors hover:border-[#d8ef76]/40">
              <span>Direct reservation</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#d8ef76]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-[#9cb0b1] sm:flex-row">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <p>Head Office: Bamburi Fisheries, Mombasa • Nairobi Hub • Kenya</p>
        </div>
      </div>
    </footer>
  );
};
