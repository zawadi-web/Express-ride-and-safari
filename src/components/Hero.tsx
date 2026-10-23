'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/content';
import { getWhatsAppUrl, getVehicleWhatsAppUrl } from '@/utils/whatsapp';
import { 
  WhatsAppIcon, 
  MapPinIcon, 
  PhoneIcon, 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon 
} from './Icons';

interface HeroProps {
  onOpenInquiry?: (serviceOrVehicle?: string) => void;
}

interface FeaturedHeroCar {
  id: string;
  name: string;
  category: string;
  kicker: string;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
  highlight: string;
  dispatch: string;
}

const FEATURED_HERO_CARS: FeaturedHeroCar[] = [
  {
    id: 'toyota-prado',
    name: 'Toyota Prado TX / J150',
    category: 'Executive 4WD & Safari',
    kicker: 'Flagship Luxury SUV',
    image: '/images/cars/toyota-prado.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel 4WD',
    highlight: 'Commanding road presence and superior comfort for city highways, rugged upcountry trails, and coastal drives.',
    dispatch: 'Mombasa HQ & Nairobi Hub',
  },
  {
    id: 'safari-cruiser',
    name: 'Custom 4x4 Safari Cruiser',
    category: 'Pop-Up Roof Safari',
    kicker: 'Iconic African Game Drive',
    image: '/images/cars/land-cruiser-tour.jpg',
    seats: 8,
    transmission: 'Manual 4x4',
    fuel: 'Diesel Heavy Duty',
    highlight: 'Purpose-built for Maasai Mara, Amboseli & Tsavo with full pop-up photographic roof, heavy suspension, and cooler box.',
    dispatch: 'Nairobi & Coast Circuits',
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard VIP Lounge',
    category: 'First-Class Executive Van',
    kicker: 'Ultra-Comfort Passenger Lounge',
    image: '/images/cars/toyota-alphard.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol Executive',
    highlight: 'First-class captain seats, twin automated sliding doors, and whisper-quiet cabin tailored for delegations & airport VIPs.',
    dispatch: 'Mombasa & Nairobi',
  },
  {
    id: 'toyota-harrier',
    name: 'Toyota Harrier Luxury Crossover',
    category: 'Luxury Highway Crossover',
    kicker: 'Sleek Highway Elegance',
    image: '/images/cars/toyota-harrier.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    highlight: 'Plush leather interior, cruise control, and smooth highway handling for executive meetings and coastal holidays.',
    dispatch: 'Mombasa Bamburi Fisheries',
  },
  {
    id: 'toyota-vellfire',
    name: 'Toyota Vellfire Executive',
    category: 'VIP Royal Lounge',
    kicker: 'Executive Chauffeur Choice',
    image: '/images/cars/toyota-vellfire.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    highlight: 'Reclining Ottoman seats, acoustic sound insulation, and expansive headroom for high-profile travel across Kenya.',
    dispatch: 'Nairobi & Mombasa Hubs',
  },
  {
    id: 'toyota-esquire',
    name: 'Toyota Esquire VIP Minivan',
    category: 'VIP Hybrid Minivan',
    kicker: 'Chrome Waterfall Grille',
    image: '/images/cars/toyota-esquire.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Hybrid Efficiency',
    highlight: 'Plush executive seating, rear climate zones, and silky-smooth glide. Perfect for family holidays & punctual airport runs.',
    dispatch: 'Mombasa, Nyali & Diani',
  },
  {
    id: 'mazda-cx5',
    name: 'Mazda CX-5 SkyActiv',
    category: 'Premium Sport Crossover',
    kicker: 'Sharp Dynamic Performance',
    image: '/images/cars/mazda-cx5.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Diesel Efficient',
    highlight: 'Modern styling, responsive handling, and outstanding fuel economy on long-distance Kenyan corridors.',
    dispatch: 'Mombasa & Nairobi',
  },
  {
    id: 'nissan-xtrail',
    name: 'Nissan X-Trail 4WD',
    category: 'Intelligent 4WD SUV',
    kicker: 'Family Expedition SUV',
    image: '/images/cars/nissan-xtrail.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    highlight: 'Adaptable seating, roof rails for safari gear, and intelligent 4WD for weekend getaways and upcountry exploration.',
    dispatch: 'Mombasa & Nairobi',
  },
  {
    id: 'toyota-noah',
    name: 'Toyota Noah (ZRR80)',
    category: '8-Seater Multi-Purpose',
    kicker: 'Spacious Group Cruiser',
    image: '/images/cars/toyota-noah.jpg',
    seats: 8,
    transmission: 'Automatic',
    fuel: 'Petrol',
    highlight: 'High headroom, fold-up third row for luggage, and dual sliding doors for comfortable group outings and SGR transfers.',
    dispatch: 'Mombasa SGR & Airport',
  },
  {
    id: 'toyota-fielder',
    name: 'Toyota Fielder Touring',
    category: 'Touring Station Wagon',
    kicker: "Kenya's Trusted Workhorse",
    image: '/images/cars/toyota-fielder.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol Economy',
    highlight: 'Massive luggage boot, fold-flat seats, and proven durability for reliable inter-city trips and budget-friendly rentals.',
    dispatch: 'Mombasa Bamburi HQ',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeCar = FEATURED_HERO_CARS[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_HERO_CARS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_HERO_CARS.length) % FEATURED_HERO_CARS.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goToNext, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) goToNext();
    if (diff < -50) goToPrev();
    setTouchStart(null);
  };

  return (
    <section
      id="home"
      aria-label="Hero Showcase and Vehicle Carousel"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#071b1e] text-[#fbf8f2]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ======================================================== */}
      {/* 1. CINEMATIC FULL-SCREEN BACKGROUND CAROUSEL STAGE       */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {FEATURED_HERO_CARS.map((car, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={car.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              aria-hidden={!isActive}
            >
              <div className={`relative w-full h-full ${isActive ? 'animate-cinematic-zoom' : ''}`}>
                <Image
                  src={car.image}
                  alt={`${car.name} - ${car.category}`}
                  fill
                  priority={index <= 1}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          );
        })}

        {/* Cinematic Multi-Layer Gradient Overlays for Maximum Contrast */}
        {/* Dark Vignette from bottom to center */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e] via-[#071b1e]/70 to-transparent" />
        {/* Left directional scrim to guarantee 100% headline legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b1e]/95 via-[#071b1e]/75 sm:via-[#071b1e]/55 to-transparent w-full md:w-3/4" />
        {/* Top bar vignette for seamless navigation blending */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#071b1e]/85 to-transparent" />
        {/* Savanna Gold atmospheric warm ambient light */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#c89b3c]/12 rounded-full blur-3xl pointer-events-none" />
        {/* Subtle radial center vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_rgba(7,27,30,0.65)_100%)]" />
      </div>

      {/* ======================================================== */}
      {/* 2. FOREGROUND EDITORIAL CONTENT & VEHICLE SPOTLIGHT      */}
      {/* ======================================================== */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-6 flex-1 flex flex-col justify-between">
        
        {/* Top Grid: Headline on Left, Active Car Spotlight HUD on Right */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Cinematic Editorial Masthead & Booking Suite */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Kicker Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#c89b3c]/40 bg-[#071b1e]/80 px-4 py-1.5 backdrop-blur-md shadow-lg">
              <span className="h-2 w-2 rounded-full bg-[#c89b3c] animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e0b75a]">
                {COMPANY_INFO.name}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.05] text-white tracking-tight drop-shadow-md">
                Drive. Explore.{' '}
                <span className="italic block mt-1 font-normal editorial-gold-shimmer">
                  Experience Kenya.
                </span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-[#d2e4e6] font-normal leading-relaxed drop-shadow-sm">
                Bespoke 4x4 safaris, executive luxury rentals, and punctual airport transfers. 
                Headquartered at <strong className="text-white font-semibold">Bamburi Fisheries, Mombasa</strong> with 
                instant dispatch across <strong className="text-white font-semibold">Nairobi</strong> and iconic national circuits.
              </p>
            </div>

            {/* Primary Action Suite */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-gold group shadow-xl shadow-amber-950/20"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#071b1e] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Desk ({COMPANY_INFO.whatsappPhone})</span>
              </a>

              <button
                type="button"
                onClick={() => (onOpenInquiry ? onOpenInquiry('Car Hire (Self-Drive)') : window.location.assign('#contact'))}
                className="btn-editorial-dark cursor-pointer border border-[#c89b3c]/40 hover:border-[#c89b3c] transition-all"
              >
                <span>Reserve a Trip</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#e0b75a]" />
              </button>
            </div>

            {/* Verified Location & Hotline Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-xs text-[#cedee0] font-medium">
              <div className="inline-flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-[#c89b3c]" />
                <span className="text-white font-semibold">Mombasa Bamburi HQ &bull; Nairobi Hub</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <PhoneIcon className="w-3.5 h-3.5 text-[#e0b75a]" />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#c89b3c] transition-colors">
                  {COMPANY_INFO.phones[0]}
                </a>
                <span className="text-white/30">|</span>
                <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-[#c89b3c] transition-colors">
                  {COMPANY_INFO.phones[1]}
                </a>
              </div>
            </div>

            {/* Trust Seals */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#fbf8f2] font-semibold">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <ShieldCheckIcon className="w-4 h-4 text-[#c89b3c]" />
                13 Verified Fleet Models
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <ClockIcon className="w-4 h-4 text-[#e0b75a]" />
                24/7 Airport &amp; Safari Dispatch
              </div>
            </div>
          </div>

          {/* Right Column: Floating Active Vehicle Spotlight HUD */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="w-full max-w-md rounded-3xl border border-[#c89b3c]/35 bg-[#071b1e]/85 p-5 sm:p-6 backdrop-blur-xl shadow-2xl text-[#fbf8f2] space-y-4">
              
              {/* Card Header: Category & Slide Index */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#c89b3c]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e0b75a]">
                    {activeCar.category}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-white/60">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(FEATURED_HERO_CARS.length).padStart(2, '0')}
                </span>
              </div>

              {/* Active Vehicle Title & Kicker */}
              <div>
                <span className="text-xs uppercase tracking-wider text-[#a8cbce] font-semibold block">
                  {activeCar.kicker}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-editorial tracking-tight mt-0.5">
                  {activeCar.name}
                </h2>
                <p className="text-xs text-[#cedee0] leading-relaxed mt-2">
                  {activeCar.highlight}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 py-2 px-1">
                  <span className="text-[10px] uppercase text-[#a8cbce] font-medium block">Seats</span>
                  <span className="text-xs font-bold text-white block mt-0.5">{activeCar.seats} Passengers</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 py-2 px-1">
                  <span className="text-[10px] uppercase text-[#a8cbce] font-medium block">Drive</span>
                  <span className="text-xs font-bold text-white block mt-0.5">{activeCar.transmission}</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 py-2 px-1">
                  <span className="text-[10px] uppercase text-[#a8cbce] font-medium block">Engine</span>
                  <span className="text-xs font-bold text-[#e0b75a] block mt-0.5 truncate">{activeCar.fuel}</span>
                </div>
              </div>

              {/* Direct Booking for this exact vehicle */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={getVehicleWhatsAppUrl(activeCar.name, activeCar.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#c89b3c] hover:bg-[#e0b75a] text-[#071b1e] py-2.5 px-3 text-xs font-black tracking-wide transition-all shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book This {activeCar.name.split(' ')[1] || 'Car'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => (onOpenInquiry ? onOpenInquiry(activeCar.name) : window.location.assign('#contact'))}
                  className="px-3.5 py-2.5 rounded-xl border border-white/20 hover:border-[#c89b3c] bg-white/5 text-white text-xs font-bold transition-all cursor-pointer"
                  title="Inquire online"
                >
                  Inquire
                </button>
              </div>

              {/* Dispatch hub note */}
              <div className="text-[11px] text-[#9fc1c5] flex items-center gap-1.5 pt-1">
                <MapPinIcon className="w-3.5 h-3.5 text-[#c89b3c] shrink-0" />
                <span>Stationed at: <strong>{activeCar.dispatch}</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 3. BOTTOM CINEMATIC CAROUSEL DOCK & THUMBNAIL SELECTOR   */}
        {/* ======================================================== */}
        <div className="mt-8 pt-4 border-t border-white/15 space-y-3">
          
          {/* Animated Slide Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              key={currentIndex}
              className={`h-full bg-gradient-to-r from-[#c89b3c] to-[#e0b75a] rounded-full ${
                !isPaused ? 'animate-progress-fill' : ''
              }`}
              style={{ width: isPaused ? '100%' : undefined }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left: Active Live Dispatch Ticker */}
            <div className="hidden lg:flex items-center gap-3 text-xs text-[#a4bcc0]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>
                <strong>Live Fleet Dispatch:</strong> Bamburi Fisheries, Mombasa &bull; JKIA &amp; Wilson, Nairobi &bull; 24/7 Available
              </span>
            </div>

            {/* Center/Right: Interactive Carousel Controls & Car Thumbnails */}
            <div className="flex items-center justify-between w-full md:w-auto gap-3">
              
              {/* Prev Button */}
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous car"
                className="p-2 sm:p-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-[#c89b3c] hover:text-[#071b1e] text-white backdrop-blur-md transition-all cursor-pointer shrink-0"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>

              {/* Horizontal Thumbnail Dock */}
              <div 
                className="flex items-center gap-2 overflow-x-auto py-1 px-1 scrollbar-none max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl"
                role="tablist"
                aria-label="Featured cars thumbnails"
              >
                {FEATURED_HERO_CARS.map((car, idx) => {
                  const isSelected = idx === currentIndex;
                  return (
                    <button
                      key={car.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      aria-label={`Select ${car.name}`}
                      onClick={() => goToSlide(idx)}
                      className={`relative flex items-center gap-2 rounded-xl px-2.5 py-1.5 transition-all text-left shrink-0 cursor-pointer ${
                        isSelected
                          ? 'border-2 border-[#c89b3c] bg-white/20 backdrop-blur-md shadow-lg shadow-amber-900/40 text-white scale-105'
                          : 'border border-white/10 bg-black/40 hover:bg-white/10 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/20">
                        <Image
                          src={car.image}
                          alt={car.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <div className="hidden sm:block">
                        <span className="text-[10px] font-bold block truncate max-w-[90px]">
                          {car.name.replace('Toyota ', '')}
                        </span>
                        <span className="text-[9px] text-[#e0b75a] block uppercase tracking-wider">
                          {car.category.split(' ')[0]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next car"
                className="p-2 sm:p-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-[#c89b3c] hover:text-[#071b1e] text-white backdrop-blur-md transition-all cursor-pointer shrink-0"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
