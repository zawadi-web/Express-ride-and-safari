'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, MenuIcon, XIcon, ArrowRightIcon, MailIcon } from './Icons';

interface NavbarProps {
  onOpenInquiry?: (serviceOrVehicle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Car Hire', href: '#cars' },
    { label: 'Safaris', href: '#safaris' },
    { label: 'Airport Transfers', href: '#transfers' },
    { label: 'Tours & Travel', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#0B0F17] text-xs text-slate-300 py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <MapPinIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
              {COMPANY_INFO.locations}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-normal">
              Car Hire &amp; Rentals | Safaris | Tours &amp; Travel
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MailIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors font-medium">
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
              <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-white transition-colors font-medium">
                {COMPANY_INFO.phones[0]}
              </a>
              <span className="text-slate-600">|</span>
              <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-white transition-colors font-medium">
                {COMPANY_INFO.phones[1]}
              </a>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#41e47d] font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Crisp White Translucent Glass */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#home" className="flex items-center group py-0.5">
            <div className="relative flex items-center bg-black px-2.5 py-1 rounded-xl border border-amber-500/30 shadow-md shadow-black/10 group-hover:border-amber-500 transition-all">
              <Image
                src="/logo.png"
                alt="Express Ride & Safaris Kenya"
                width={190}
                height={75}
                className="h-9 sm:h-11 md:h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#D97706] hover:bg-slate-100/70 rounded-lg transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold tracking-wide transition-all"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>{COMPANY_INFO.whatsappPhone}</span>
            </a>

            <button
              onClick={() => onOpenInquiry ? onOpenInquiry('General Inquiry') : window.location.assign('#contact')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-xs tracking-wider uppercase shadow-md shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/35 transition-all cursor-pointer"
            >
              <span>Book / Inquire</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 sm:hidden"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-black hover:bg-slate-200 border border-slate-200 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6 text-[#D97706]" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-[#D97706] hover:bg-slate-100 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp: {COMPANY_INFO.whatsappPhone}
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm border border-slate-200"
              >
                <PhoneIcon className="w-4 h-4 text-[#D97706]" />
                Call {COMPANY_INFO.phones[0]}
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs border border-slate-200"
              >
                <MailIcon className="w-4 h-4 text-[#D97706]" />
                {COMPANY_INFO.email}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) {
                    onOpenInquiry('General Inquiry');
                  } else {
                    window.location.assign('#contact');
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#F59E0B] text-black font-extrabold text-sm uppercase tracking-wider shadow"
              >
                Book / Inquire Now
              </button>
            </div>

            <div className="pt-4 text-xs text-center text-slate-500 font-medium">
              Head Office: Bamburi Fisheries, Mombasa &bull; Nairobi Hub, Kenya
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
