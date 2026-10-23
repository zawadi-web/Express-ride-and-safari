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
    { label: 'Fleet & Cars', href: '#cars' },
    { label: 'Safaris', href: '#safaris' },
    { label: 'Airport Transfers', href: '#transfers' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Editorial Utility Strip */}
      <div className="bg-[#071b1e] text-xs text-[#cedee0] py-1.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <MapPinIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
              {COMPANY_INFO.locations}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[#a4bcc0] font-normal">
              Car Hire &amp; Rentals | Safaris | Airport Transfers
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MailIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors font-medium">
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
              <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-white transition-colors font-medium">
                {COMPANY_INFO.phones[0]}
              </a>
              <span className="text-white/20">|</span>
              <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-white transition-colors font-medium">
                {COMPANY_INFO.phones[1]}
              </a>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#54f08c] hover:text-[#76f5a3] font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Obsidian Translucent Glass */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#071b1e]/95 backdrop-blur-md shadow-xl shadow-black/25 border-b border-[#c89b3c]/25 py-3'
            : 'bg-[#071b1e]/85 backdrop-blur-md border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#home" className="flex items-center group py-0.5">
            <div className="relative flex items-center bg-[#071b1e] px-3 py-1.5 rounded-xl border border-[#c89b3c]/35 shadow-md shadow-black/15 group-hover:border-[#c89b3c] transition-all">
              <Image
                src="/logo.png"
                alt="Edoya Express Ride & Safaris Kenya"
                width={200}
                height={80}
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform"
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
                className="px-3.5 py-2 text-xs uppercase tracking-[0.14em] font-bold text-white/85 hover:text-[#e0b75a] hover:bg-white/10 rounded-lg transition-all duration-150"
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
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-bold tracking-wide transition-all"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>{COMPANY_INFO.whatsappPhone}</span>
            </a>

            <button
              onClick={() => onOpenInquiry ? onOpenInquiry('Car Hire (Self-Drive)') : window.location.assign('#contact')}
              className="btn-editorial-gold !py-2 !px-4 !text-xs cursor-pointer shadow-md"
            >
              <span>Book Trip</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 sm:hidden"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6 text-[#c89b3c]" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf8f2]/98 backdrop-blur-xl border-b border-[#071b1e]/15 px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-[#071b1e] hover:text-[#c89b3c] hover:bg-white/80 border-b border-[#071b1e]/05 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#25D366] text-[#071b1e] font-black text-xs uppercase tracking-wider shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp: {COMPANY_INFO.whatsappPhone}
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white text-[#071b1e] font-bold text-xs uppercase tracking-wider border border-[#071b1e]/10"
              >
                <PhoneIcon className="w-4 h-4 text-[#c89b3c]" />
                Call {COMPANY_INFO.phones[0]}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) {
                    onOpenInquiry('Car Hire (Self-Drive)');
                  } else {
                    window.location.assign('#contact');
                  }
                }}
                className="btn-editorial-gold w-full !py-3.5"
              >
                Book / Inquire Now
              </button>
            </div>

            <div className="pt-4 text-[11px] text-center text-[#6f8285] font-medium">
              Bamburi Fisheries, Mombasa (HQ) &bull; Nairobi Hub, Kenya
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
