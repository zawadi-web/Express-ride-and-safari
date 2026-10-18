import React from 'react';
import Image from 'next/image';

export function MaintenancePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-x-hidden bg-[#0A0A0B] text-[#F5F2EB] selection:bg-amber-500/30 selection:text-amber-100">
      {/* 1. Atmospheric Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Cinematic Kenyan landscape (road stretching toward the horizon) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 motion-safe:animate-kenburns"
          style={{ backgroundImage: `url('/images/maintenance-bg.jpg')` }}
        />

        {/* Ambient Warm Sunset Lighting / Center Radial Glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 42%, rgba(217, 119, 6, 0.12) 0%, rgba(197, 168, 128, 0.05) 35%, transparent 70%)',
          }}
        />

        {/* Deep Charcoal Vignette Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/85 to-[#0A0A0B]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/90 via-transparent to-[#0A0A0B]" />

        {/* Fine atmospheric dust / warm golden top hairline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/35 to-transparent" />
      </div>

      {/* 2. Top Header — Brand Identity */}
      <header className="relative z-10 w-full pt-8 sm:pt-12 px-6 flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-sm">
          {/* Logo badge */}
          <div className="relative group mb-3">
            <div className="absolute -inset-1 rounded-2xl bg-amber-500/15 blur-lg opacity-60 group-hover:opacity-100 transition duration-700" />
            <div className="relative flex items-center justify-center bg-[#070708]/90 border border-amber-500/25 rounded-2xl px-5 py-2.5 shadow-2xl shadow-black/80">
              <Image
                src="/logo.png"
                alt="Express Ride & Safari Kenya"
                width={190}
                height={75}
                priority
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]"
              />
            </div>
          </div>

          {/* Subtitle tag */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#A69E8F] font-medium">
            Car Hire · Airport Transfers · Safaris &amp; Tours
          </p>
        </div>
      </header>

      {/* 3. Center Hero — Maintenance Message */}
      <main className="relative z-10 w-full max-w-3xl px-6 py-8 sm:py-12 my-auto flex flex-col items-center text-center">
        {/* Refined Status Indicator */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-950/30 border border-amber-500/30 shadow-inner shadow-amber-900/20 mb-6 sm:mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-amber-200/90">
            Temporarily Offline
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#F7F4EE] leading-[1.15] mb-5 sm:mb-6 font-serif">
          Something Better{' '}
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#D4AF37]">
            Is On The Way.
          </span>
        </h1>

        {/* Supporting Message */}
        <p className="text-sm sm:text-base md:text-lg text-[#AEA89C] leading-relaxed max-w-xl font-normal mb-8 sm:mb-10">
          We&apos;re taking a little time to improve your experience. Express Ride &amp; Safari will be back soon, ready to get you where you need to go.
        </p>

        {/* Subtle decorative divider */}
        <div className="flex items-center gap-3 w-40 my-2 opacity-50" aria-hidden="true">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#4A4337]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/60 bg-amber-950/40" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#4A4337]" />
        </div>

        {/* Contact / Inquiries Section */}
        <section className="mt-8 flex flex-col items-center w-full max-w-md" aria-label="Contact">
          <p className="text-xs sm:text-sm text-[#968F81] mb-3.5 font-medium">
            Need a ride or planning your next safari? Get in touch.
          </p>

          {/* Prominent & Tasteful Developer CTA */}
          <a
            href="https://giftmukhwana.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#141416] hover:bg-[#1C1C1F] border border-[#3E382E] hover:border-amber-400/60 text-[#F5F2EB] text-xs sm:text-sm font-medium transition-all duration-300 shadow-xl shadow-black/60 hover:shadow-amber-950/30 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
          >
            <span>Contact the Developer</span>
            <span
              className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          {/* Discreet Domain Display */}
          <a
            href="https://giftmukhwana.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-[11px] sm:text-xs text-[#7A7468] hover:text-amber-300/80 transition-colors tracking-wider font-mono"
            aria-label="Developer official website: giftmukhwana.co.ke"
          >
            giftmukhwana.co.ke
          </a>

          <p className="mt-2 text-[10px] text-[#635E54] tracking-wide">
            For website engineering &amp; technical assistance
          </p>
        </section>
      </main>

      {/* 4. Bottom Footer */}
      <footer className="relative z-10 w-full py-6 px-6 border-t border-white/[0.04] bg-[#070708]/60 backdrop-blur-sm text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-[#6F695E]">
          <div>
            © {currentYear} <span className="text-[#8E8678]">Express Ride &amp; Safari Kenya</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[#7F786C]">
            <span>Nairobi</span>
            <span className="opacity-40" aria-hidden="true">•</span>
            <span>Maasai Mara</span>
            <span className="opacity-40" aria-hidden="true">•</span>
            <span>Mombasa</span>
            <span className="opacity-40" aria-hidden="true">•</span>
            <span>Amboseli</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
