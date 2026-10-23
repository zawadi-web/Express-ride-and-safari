'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from '@/data/content';
import { MapPinIcon } from './Icons';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'vehicles', label: 'Fleet' },
    { id: 'safaris', label: 'Wildlife & Safaris' },
    { id: 'coast', label: 'Coast & Oceans' },
    { id: 'landscapes', label: 'Corridors' },
  ];

  return (
    <section id="gallery" className="relative py-24 border-b border-[#071b1e]/10 bg-[#fbf8f2] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-kicker mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
            Visual Experience
          </div>
          <h2 className="section-title mb-4 font-editorial">
            Travel Through Our Lens
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
            Real snapshots of our fleet, scenic travel corridors, national wildlife reserves, and coastal highways across Kenya.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#071b1e] text-[#fbf8f2] border border-[#c89b3c] shadow-sm'
                    : 'bg-white/80 text-[#071b1e] hover:border-[#c89b3c]/40 hover:bg-white border border-[#071b1e]/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="editorial-card group relative h-72 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/90 via-[#071b1e]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 text-left">
                <span className="flex items-center gap-1.5 text-[10px] text-[#e0b75a] font-extrabold uppercase tracking-[0.16em] mb-1 drop-shadow-sm">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  {item.location}
                </span>
                <h3 className="text-sm font-bold text-white font-editorial leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
