'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, SERVICES } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { MapPinIcon, PhoneIcon, WhatsAppIcon, MailIcon, ArrowRightIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#071b1e]/15 bg-[#071b1e] text-[#cedee0]">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 md:pb-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="#home" className="inline-block group">
              <div className="relative flex items-center bg-[#071b1e] px-3 py-1.5 rounded-xl border border-[#c89b3c]/35 shadow-md shadow-black/15 group-hover:border-[#c89b3c] transition-all w-fit">
                <Image
                  src="/logo.png"
                  alt="Edoya Express Ride & Safaris Kenya"
                  width={200}
                  height={80}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89b3c]">
              Car Hire &bull; Safaris &bull; Airport Transfers
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-[#a4bcc0]">
              Reliable journeys across Kenya, from private airport transfers and executive chauffeur travel to curated coastal escapes and safari expeditions.
            </p>

            <div className="pt-2">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#6f8285]">Connect with us</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0c262a] text-[#54f08c] transition-colors hover:border-[#25D366]/40"
                  aria-label="Official WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0c262a] text-[#e0b75a] transition-colors hover:border-[#c89b3c]/40"
                  aria-label="Direct phone line"
                >
                  <PhoneIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0c262a] text-[#fbf8f2] transition-colors hover:border-[#c89b3c]/40"
                  aria-label="Email us"
                >
                  <MailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89b3c]">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#cedee0]">
              <li><a href="#home" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="#cars" className="transition-colors hover:text-white">Fleet &amp; Cars</a></li>
              <li><a href="#safaris" className="transition-colors hover:text-white">Safari Circuits</a></li>
              <li><a href="#transfers" className="transition-colors hover:text-white">Airport Transfers</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Travel Services</a></li>
              <li><a href="#about" className="transition-colors hover:text-white">About Us</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact &amp; Book</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89b3c]">Our Services</h4>
            <ul className="space-y-2 text-sm text-[#cedee0]">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="flex items-center gap-2 transition-colors hover:text-white">
                    <span className="text-[#c89b3c]">›</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89b3c]">Headquarters &amp; Dispatch</h4>

            <div className="space-y-3 text-sm text-[#cedee0]">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c89b3c]" />
                <div>
                  <span className="block font-semibold text-white">Head Office</span>
                  <span>Bamburi Fisheries, Mombasa</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c89b3c]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="break-all text-[#cedee0] transition-colors hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c89b3c]" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${COMPANY_INFO.phones[0]}`} className="transition-colors hover:text-white">{COMPANY_INFO.phones[0]}</a>
                  <a href={`tel:${COMPANY_INFO.phones[1]}`} className="transition-colors hover:text-white">{COMPANY_INFO.phones[1]}</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-[#54f08c] transition-colors hover:underline">
                  {COMPANY_INFO.whatsappPhone}
                </a>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c262a] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#fbf8f2] transition-colors hover:border-[#c89b3c]"
            >
              <span>Direct Reservation Form</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#8fabae]">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Bamburi Fisheries, Mombasa &bull; Nairobi Hub</span>
            <span className="opacity-30">•</span>
            <a
              href="https://giftmukhwana.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c89b3c] transition-colors underline decoration-white/20"
            >
              Engineered by Gift Mukhwana
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
