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
  // Track front vs rear photo view per vehicle ID
  const [activeAngles, setActiveAngles] = useState<Record<string, 'front' | 'rear'>>({});

  const categories: VehicleCategory[] = [
    'All',
    'SUV',
    'Luxury Van',
    'Saloon',
    'Economy',
    'Safari Vehicle',
    'Commercial',
  ];

  const filteredVehicles =
    selectedCategory === 'All'
      ? VEHICLES
      : VEHICLES.filter((v) => v.category === selectedCategory);

  const setVehicleAngle = (vehicleId: string, angle: 'front' | 'rear') => {
    setActiveAngles((prev) => ({
      ...prev,
      [vehicleId]: angle,
    }));
  };

  return (
    <section id="cars" className="relative border-b border-[#071b1e]/10 py-24 bg-[#fbf8f2]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,155,60,0.08),_transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="section-kicker mb-3">
              <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
              Authentic Kenyan Fleet
            </div>
            <h2 className="section-title mb-3 font-editorial">
              Genuine Vehicles. Transparent Details.
            </h2>
            <p className="section-copy text-base sm:text-lg">
              Every photograph below depicts our actual fleet stationed in Mombasa and Nairobi — maintained to exacting standards for private hire, executive delegations, and safari exploration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="rounded-2xl border border-[#071b1e]/10 bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#133935] shadow-xs">
              Stationed in <span className="font-black text-[#071b1e]">Mombasa &amp; Nairobi</span>
            </div>
            <div className="rounded-2xl border border-[#c89b3c]/30 bg-[#c89b3c]/15 px-3.5 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-[#9d7322]">
              23 Verified Photos
            </div>
          </div>
        </div>

        {/* Category Filter Pills with counts */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === 'All'
                ? VEHICLES.length
                : VEHICLES.filter((v) => v.category === cat).length;

            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#071b1e] text-[#fbf8f2] border border-[#c89b3c] shadow-md shadow-black/15'
                    : 'border border-[#071b1e]/10 bg-white/80 text-[#071b1e] hover:border-[#c89b3c]/40 hover:bg-white'
                }`}
              >
                <span>{cat === 'All' ? 'All Fleet' : cat}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive ? 'bg-[#c89b3c] text-[#071b1e]' : 'bg-[#071b1e]/06 text-[#5b7579]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Fleet Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredVehicles.map((vehicle: Vehicle) => {
            const currentAngle = activeAngles[vehicle.id] || 'front';
            const displayImage =
              currentAngle === 'rear' && vehicle.rearImage ? vehicle.rearImage : vehicle.image;
            const orientation = vehicle.imageOrientation || 'landscape';

            return (
              <article
                key={vehicle.id}
                className="section-shell group flex flex-col overflow-hidden rounded-[2rem] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(7,27,30,0.08)] hover:-translate-y-1"
              >
                {/* Visual Stage Container: Tailored for orientation */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-[#f4f7f6] via-[#ebf2f0] to-[#e4ecea]">
                  {/* Subtle ambient blur of vehicle */}
                  <Image
                    src={displayImage}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover blur-2xl opacity-25 scale-110"
                    sizes="100px"
                  />

                  {/* Sharp, fully-visible foreground car image */}
                  <Image
                    src={displayImage}
                    alt={`${vehicle.name} (${currentAngle} view) - Express Ride Fleet`}
                    fill
                    className={`transition-all duration-500 ease-out ${
                      orientation === 'portrait'
                        ? 'object-contain p-4 drop-shadow-[0_12px_22px_rgba(7,27,30,0.16)] group-hover:scale-[1.02]'
                        : orientation === 'panoramic'
                        ? 'object-contain p-5 drop-shadow-[0_10px_20px_rgba(7,27,30,0.14)]'
                        : 'object-cover group-hover:scale-105'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Top Badges */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                    <span className="rounded-full border border-white/25 bg-[#071b1e]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fbf8f2] backdrop-blur-md">
                      {vehicle.category}
                    </span>
                    {vehicle.popular && (
                      <span className="rounded-full bg-[#c89b3c] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#071b1e] shadow-xs">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Front / Rear Angle Switcher: ONLY for verified pairs */}
                  {vehicle.rearImage && (
                    <div
                      role="group"
                      aria-label={`${vehicle.name} view angle`}
                      className="absolute bottom-3.5 right-3.5 z-10 inline-flex items-center rounded-full bg-[#071b1e]/90 p-1 backdrop-blur-md border border-white/20 shadow-lg"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setVehicleAngle(vehicle.id, 'front');
                        }}
                        className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] transition-all cursor-pointer ${
                          currentAngle === 'front'
                            ? 'bg-[#c89b3c] text-[#071b1e] shadow-xs'
                            : 'text-white/75 hover:text-white'
                        }`}
                      >
                        Front
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setVehicleAngle(vehicle.id, 'rear');
                        }}
                        className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] transition-all cursor-pointer ${
                          currentAngle === 'rear'
                            ? 'bg-[#c89b3c] text-[#071b1e] shadow-xs'
                            : 'text-white/75 hover:text-white'
                        }`}
                      >
                        Rear
                      </button>
                    </div>
                  )}

                  {/* Verified Angle Indicator Badge */}
                  {vehicle.rearImage && (
                    <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0d252a] border border-[#0d2d30]/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                      Dual Angle Verified
                    </div>
                  )}
                </div>

                {/* Vehicle Details Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex-1">
                    <h3 className="mb-2 text-2xl font-black tracking-[-0.04em] text-[#0d252a] group-hover:text-[#1d6d68] transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="mb-5 text-sm leading-7 text-[#34545d]">{vehicle.description}</p>

                    {/* Specification Badges */}
                    <div className="mb-5 grid grid-cols-3 gap-2 rounded-2xl border border-[#0d2d30]/10 bg-[#f4f9f8] p-3 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <UsersIcon className="w-4 h-4 text-[#1d6d68]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#547e82]">
                          Seats
                        </span>
                        <span className="text-sm font-black text-[#0d252a]">{vehicle.seats}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 border-x border-[#0d2d30]/10">
                        <Settings2Icon className="w-4 h-4 text-[#1d6d68]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#547e82]">
                          Gear
                        </span>
                        <span className="text-sm font-black text-[#0d252a]">{vehicle.transmission}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <FuelIcon className="w-4 h-4 text-[#1d6d68]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#547e82]">
                          Fuel
                        </span>
                        <span className="text-sm font-black text-[#0d252a]">{vehicle.fuelType}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-1.5">
                      {vehicle.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-[#0d2d30]/10 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#1a3a40]"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Request Modal & Direct WhatsApp */}
                  <div className="flex items-stretch gap-2.5 border-t border-[#071b1e]/10 pt-4">
                    <button
                      onClick={() =>
                        onSelectVehicle ? onSelectVehicle(vehicle) : window.location.assign('#contact')
                      }
                      className="btn-editorial-gold flex-1 !py-3 !text-xs cursor-pointer"
                    >
                      <span>Request Vehicle</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getVehicleWhatsAppUrl(vehicle.name, vehicle.category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 px-3.5 text-[#071b1e] hover:bg-[#25D366]/25 transition-colors"
                      title={`Quick inquiry for ${vehicle.name} via WhatsApp`}
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#1ebd5b]" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Fleet Hotline Footer */}
        <div className="mt-14 editorial-card rounded-2xl p-6 text-center shadow-xs">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#527178] mb-2">
            Looking for a specific model or tailored long-term fleet arrangement?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-black text-[#071b1e]">
            <span>Mombasa Office: <a href="tel:0748769876" className="text-[#133935] hover:text-[#c89b3c] transition-colors">0748 769 876</a></span>
            <span className="text-[#c89b3c]">•</span>
            <span>Nairobi Dispatch: <a href="tel:0793612412" className="text-[#133935] hover:text-[#c89b3c] transition-colors">0793 612 412</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

