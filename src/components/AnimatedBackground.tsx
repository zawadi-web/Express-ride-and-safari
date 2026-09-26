'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BACKGROUND_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=85',
    title: 'Kenya Safari Wilderness',
  },
  {
    url: '/images/cars/toyota-prado.jpg',
    title: 'Executive Toyota Prado TX J150',
  },
  {
    url: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=2000&q=85',
    title: 'Amboseli & Mount Kilimanjaro',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    title: 'Diani Beach Turquoise Coastline',
  },
  {
    url: '/images/cars/land-cruiser-tour.jpg',
    title: 'Custom Safari 4x4 Land Cruiser',
  },
];

export const AnimatedBackground: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Crossfade between images every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  // Track scroll position for subtle interactive parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = (scrollY * 0.08) % 60;

  return (
    <aside aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none">
      {/* Background Slideshow Layer */}
      {BACKGROUND_IMAGES.map((img, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={img.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translateY(-${parallaxOffset}px) scale(1.04)`,
              transitionProperty: 'opacity, transform',
              transitionDuration: isActive ? '1200ms, 100ms' : '1200ms, 100ms',
            }}
          >
            <div className="relative w-full h-[115vh] -top-[5vh]">
              <Image
                src={img.url}
                alt={img.title}
                fill
                priority={index === 0}
                className="object-cover object-center animate-kenburns"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Luxury White Diffusion Veil: keeps images visible while maintaining crystal-clear text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/94 via-white/86 to-white/94 backdrop-blur-[2px]" />

      {/* Subtle warm amber/gold ambient glow spots in the background */}
      <div className="absolute -top-32 right-10 w-[550px] h-[550px] bg-[#F59E0B]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#E59516]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      {/* Fine texture dot grid for premium depth */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </aside>
  );
};
