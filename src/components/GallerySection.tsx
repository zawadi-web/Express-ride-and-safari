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
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'safaris', label: 'Wildlife & Safaris' },
    { id: 'coast', label: 'Coast & Beaches' },
    { id: 'landscapes', label: 'Kenyan Landscapes' },
  ];

  return (
    <section id="gallery" className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-4 shadow-xs">
            Visual Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
            Travel Through Our Lens
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real snapshots of our fleet, scenic destinations, wildlife reserves and coastal corridors across Kenya.
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#F59E0B] text-black shadow-md shadow-[#F59E0B]/25'
                    : 'bg-white/90 text-slate-700 hover:text-black hover:bg-slate-50 border border-slate-200 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="flex items-center gap-1.5 text-[11px] text-[#F59E0B] font-extrabold uppercase tracking-wider mb-1 drop-shadow-sm">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  {item.location}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
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
