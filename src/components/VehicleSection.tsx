'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VEHICLES } from '@/data/content';
import { Vehicle, VehicleCategory } from '@/types';
import { getVehicleWhatsAppUrl } from '@/utils/whatsapp';
import { UsersIcon, Settings2Icon, FuelIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

interface VehicleSectionProps {
  onSelectVehicle?: (vehicle: Vehicle) => void;
}

export const VehicleSection: React.FC<VehicleSectionProps> = ({ onSelectVehicle }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('All');

  const categories: VehicleCategory[] = [
    'All',
    'SUV',
    'Luxury Van',
    'Saloon',
    'Economy',
    'Safari Vehicle',
    'Commercial',
  ];

  const filteredVehicles = selectedCategory === 'All' ? VEHICLES : VEHICLES.filter((v) => v.category === selectedCategory);

  return (
    <section id="cars" className="relative border-b border-[#0d2d30]/10 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,228,80,0.09),_transparent_18%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="section-kicker mb-4">Fleet &amp; Rentals</div>
            <h2 className="section-title mb-3">Find the right ride.</h2>
            <p className="section-copy text-base sm:text-lg">
              Comfortable, reliable vehicles for daily travel, business routes and unforgettable Kenyan journeys.
            </p>
          </div>

          <div className="self-start rounded-2xl border border-[#0d2d30]/10 bg-white/75 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1a3a40] shadow-[0_12px_25px_rgba(6,24,28,0.04)] md:self-auto">
            Available in <span className="font-black text-[#0d252a]">Mombasa &amp; Nairobi</span>
          </div>
        </div>

        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0d252a] text-[#f7f4ee] shadow-[0_18px_32px_rgba(13,37,42,0.15)]'
                    : 'border border-[#0d2d30]/10 bg-white/80 text-[#12363c] hover:border-[#0d2d30]/15 hover:bg-[#edf3f1]'
                }`}
              >
                {cat === 'All' ? 'All Vehicles' : cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredVehicles.map((vehicle: Vehicle) => (
            <article key={vehicle.id} className="section-shell group flex flex-col overflow-hidden rounded-[1.8rem]">
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b1e]/70 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#071b1e]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f7f4ee] backdrop-blur-md">
                  {vehicle.category}
                </div>

                {vehicle.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#cfe85e] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#071b1e]">
                    Popular
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-5 flex-1">
                  <h3 className="mb-2 text-2xl font-black tracking-[-0.04em] text-[#0d252a] group-hover:text-[#1d6d68] transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="mb-5 text-sm leading-7 text-[#34545d]">{vehicle.description}</p>

                  <div className="mb-5 grid grid-cols-3 gap-2 rounded-2xl border border-[#0d2d30]/10 bg-[#f4f9f8] p-3 text-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <UsersIcon className="w-4 h-4 text-[#1d6d68]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#547e82]">Seats</span>
                      <span className="text-sm font-black text-[#0d252a]">{vehicle.seats}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 border-x border-[#0d2d30]/10">
                      <Settings2Icon className="w-4 h-4 text-[#1d6d68]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#547e82]">Gear</span>
                      <span className="text-sm font-black text-[#0d252a]">{vehicle.transmission}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                      <FuelIcon className="w-4 h-4 text-[#1d6d68]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#547e82]">Fuel</span>
                      <span className="text-sm font-black text-[#0d252a]">{vehicle.fuelType}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {vehicle.features.map((feat, idx) => (
                      <span key={idx} className="rounded-full border border-[#0d2d30]/10 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#1a3a40]">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-stretch gap-2 border-t border-[#0d2d30]/10 pt-4">
                  <button
                    onClick={() => (onSelectVehicle ? onSelectVehicle(vehicle) : window.location.assign('#contact'))}
                    className="premium-button flex-1 px-3 py-3 text-[10px]"
                  >
                    <span>Request</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getVehicleWhatsAppUrl(vehicle.name, vehicle.category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-[#25D366]/25 bg-[#ecfbf0] px-3 text-[#0d3b31]"
                    title="Quick inquiry via WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center text-xs font-medium uppercase tracking-[0.12em] text-[#527178]">
          Need a specific model? Call{' '}
          <a href="tel:0793612412" className="text-[#0d252a] underline">0793612412</a>{' '}
          or{' '}
          <a href="tel:0748769876" className="text-[#0d252a] underline">0748769876</a>
        </div>
      </div>
    </section>
  );
};
