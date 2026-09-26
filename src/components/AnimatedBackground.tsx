'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FeaturedItem {
  name: string;
  tag: string;
  image: string;
  type: 'car' | 'safari' | 'coast';
}

const FEATURED_SHOWCASE: FeaturedItem[] = [
  { name: 'Toyota Prado TX J150', tag: 'Premium 4WD', image: '/images/cars/toyota-prado.jpg', type: 'car' },
  { name: 'Maasai Mara Game Drive', tag: 'Big Five Safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80', type: 'safari' },
  { name: 'Mazda CX-5', tag: 'Executive Crossover', image: '/images/cars/mazda-cx5.jpg', type: 'car' },
  { name: 'Amboseli & Kilimanjaro', tag: 'Elephant Sanctuary', image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80', type: 'safari' },
  { name: 'Toyota Harrier', tag: 'Luxury Highway Crossover', image: '/images/cars/toyota-harrier.jpg', type: 'car' },
  { name: 'Diani Beach Coast', tag: 'Mombasa Coastal Drive', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', type: 'coast' },
  { name: 'Toyota Alphard VIP', tag: 'First-Class Passenger Van', image: '/images/cars/toyota-alphard.jpg', type: 'car' },
  { name: 'Safari 4x4 Land Cruiser', tag: 'Pop-Up Roof Expedition', image: '/images/cars/land-cruiser-tour.jpg', type: 'safari' },
  { name: 'Nissan Note e-POWER', tag: 'Hybrid City Efficiency', image: '/images/cars/nissan-note.jpg', type: 'car' },
  { name: 'Toyota Fielder', tag: 'Reliable Touring Wagon', image: '/images/cars/toyota-fielder.jpg', type: 'car' },
  { name: 'Tsavo National Reserve', tag: 'Kenya Wilderness', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80', type: 'safari' },
  { name: 'Toyota Vitz', tag: 'Agile City Runner', image: '/images/cars/toyota-vitz.jpg', type: 'car' },
];

// Key full-bleed scenes mapped across scroll positions
const SCROLL_SCENES = [
  { image: '/images/cars/toyota-prado.jpg', title: 'Executive Fleet' },
  { image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80', title: 'Savannah Wildlife' },
  { image: '/images/cars/mazda-cx5.jpg', title: 'Urban & Highway SUV' },
  { image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1800&q=80', title: 'Amboseli Elephants' },
  { image: '/images/cars/land-cruiser-tour.jpg', title: 'Safari Expedition 4x4' },
  { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80', title: 'Coastal Paradise' },
];

export const AnimatedBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (reqRef.current) return;
      reqRef.current = requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentY = window.scrollY;
        const progress = docHeight > 0 ? Math.min(Math.max(currentY / docHeight, 0), 1) : 0;
        setScrollProgress(progress);
        setScrollY(currentY);
        reqRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  // Compute active scene index based on scroll depth
  const sceneFraction = scrollProgress * (SCROLL_SCENES.length - 1);
  const activeSceneIndex = Math.min(Math.floor(sceneFraction), SCROLL_SCENES.length - 1);
  const nextSceneIndex = Math.min(activeSceneIndex + 1, SCROLL_SCENES.length - 1);
  const blend = sceneFraction - activeSceneIndex;

  // Split featured items into two moving columns for left and right ambient parallax
  const leftStream = FEATURED_SHOWCASE.slice(0, 6);
  const rightStream = FEATURED_SHOWCASE.slice(6, 12);

  // Parallax offsets driven smoothly by scroll
  const leftOffset = scrollY * 0.28;
  const rightOffset = scrollY * 0.38;

  return (
    <aside aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none">
      
      {/* 1. SCROLL-DRIVEN FULL-BLEED LIVING BACKDROP */}
      {SCROLL_SCENES.map((scene, idx) => {
        let opacity = 0;
        if (idx === activeSceneIndex) {
          opacity = 1 - blend;
        } else if (idx === nextSceneIndex) {
          opacity = blend;
        }

        return (
          <div
            key={scene.image}
            className="absolute inset-0 transition-opacity duration-300 ease-out"
            style={{
              opacity,
              transform: `translateY(-${(scrollProgress * 60).toFixed(1)}px) scale(1.05)`,
            }}
          >
            <div className="relative w-full h-[115vh] -top-[5vh]">
              <Image
                src={scene.image}
                alt={scene.title}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* 2. DYNAMIC FLOATING SHOWCASE STREAMS: Left & Right Gutter Parallax */}
      {/* Left Stream: glides upwards as user scrolls downwards */}
      <div 
        className="hidden xl:flex flex-col gap-8 absolute top-12 left-4 w-72 transition-transform duration-75 ease-out opacity-40 hover:opacity-70"
        style={{
          transform: `translateY(-${leftOffset % 1200}px) rotate(-1.5deg)`,
        }}
      >
        {[...leftStream, ...leftStream].map((item, idx) => (
          <div
            key={`left-${item.name}-${idx}`}
            className="rounded-2xl overflow-hidden bg-white/90 p-2 shadow-xl border border-white/60 backdrop-blur-md"
          >
            <div className="relative w-full h-36 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                  {item.tag}
                </span>
                <span className="text-xs font-black truncate block">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Stream: glides with different parallax speed */}
      <div 
        className="hidden xl:flex flex-col gap-8 absolute top-28 right-4 w-72 transition-transform duration-75 ease-out opacity-40 hover:opacity-70"
        style={{
          transform: `translateY(-${rightOffset % 1300}px) rotate(1.5deg)`,
        }}
      >
        {[...rightStream, ...rightStream].map((item, idx) => (
          <div
            key={`right-${item.name}-${idx}`}
            className="rounded-2xl overflow-hidden bg-white/90 p-2 shadow-xl border border-white/60 backdrop-blur-md"
          >
            <div className="relative w-full h-36 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                  {item.tag}
                </span>
                <span className="text-xs font-black truncate block">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. LUXURY WHITE DIFFUSION VEIL: Guarantees 100% crystal-clear readability for foreground text & cards */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/82 to-white/92 backdrop-blur-[1.5px]" />

      {/* 4. DYNAMIC AMBER & SKY AMBIENT GLOWS THAT SHIFT WITH SCROLL */}
      <div 
        className="absolute w-[600px] h-[600px] bg-[#F59E0B]/12 rounded-full blur-3xl transition-transform duration-300"
        style={{
          top: `${10 + scrollProgress * 60}%`,
          right: '5%',
        }}
      />
      <div 
        className="absolute w-[650px] h-[650px] bg-[#D97706]/8 rounded-full blur-3xl transition-transform duration-300"
        style={{
          top: `${30 + scrollProgress * 50}%`,
          left: '2%',
        }}
      />

      {/* 5. SUBTLE GEOMETRIC DEPTH GRID */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </aside>
  );
};

