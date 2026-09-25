import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, SERVICES, SAFARI_DESTINATIONS } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { MapPinIcon, PhoneIcon, WhatsAppIcon, MailIcon, ArrowRightIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07090D] text-white border-t border-[#181D26] pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1F2C]">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F3A81D] to-[#B87103] flex items-center justify-center font-black text-black text-xl shadow-md shadow-[#F3A81D]/20">
                ER
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black tracking-wider text-base leading-tight">
                  EXPRESS RIDE &amp;
                </span>
                <span className="text-[#F3A81D] font-bold text-xs tracking-widest uppercase">
                  SAFARIS KENYA
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
              Car Hire &amp; Rentals | Safaris | Tours &amp; Travel
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-normal">
              Reliable car hire, self-drive rentals, chauffeur services, private airport transfers, and tailor-made safari tours across Mombasa, Nairobi and wider Kenya.
            </p>

            {/* Editable Social Links */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2 font-semibold">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#121620] border border-[#212836] flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
                  aria-label="Official WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="w-9 h-9 rounded-lg bg-[#121620] border border-[#212836] flex items-center justify-center text-gray-400 hover:text-[#F3A81D] hover:border-[#F3A81D]/40 transition-colors"
                  aria-label="Direct Phone Line"
                >
                  <PhoneIcon className="w-4 h-4" />
                </a>
                {/* Editable social channel placeholders */}
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-lg bg-[#121620] border border-[#212836] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors text-xs font-bold"
                  title="Official social channel placeholder"
                >
                  FB
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-lg bg-[#121620] border border-[#212836] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors text-xs font-bold"
                  title="Official social channel placeholder"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3A81D]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#cars" className="text-gray-400 hover:text-white transition-colors">
                  Car Hire
                </a>
              </li>
              <li>
                <a href="#safaris" className="text-gray-400 hover:text-white transition-colors">
                  Safaris
                </a>
              </li>
              <li>
                <a href="#transfers" className="text-gray-400 hover:text-white transition-colors">
                  Airport Transfers
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Tours &amp; Travel
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3A81D]">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-[#F3A81D]">&rsaquo;</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations & Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3A81D]">
              Contact Details
            </h4>
            
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-[#F3A81D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Operating Locations</span>
                  <span className="text-gray-400">{COMPANY_INFO.locations}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <PhoneIcon className="w-4 h-4 text-[#F3A81D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Phone Lines</span>
                  <div className="flex flex-col gap-0.5 text-gray-400">
                    <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.phones[0]}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">WhatsApp</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    {COMPANY_INFO.whatsappPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#181E2B] hover:bg-[#202738] border border-[#273245] text-xs font-semibold text-gray-200 transition-colors"
              >
                <span>Make a Direct Reservation</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#F3A81D]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-400">
            Mombasa &amp; Nairobi, Kenya &bull; Car Hire, Safaris &amp; Airport Transfers
          </p>
        </div>

      </div>
    </footer>
  );
};
