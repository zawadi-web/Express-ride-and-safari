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

  const categories: VehicleCategory[] = ['All', 'Economy', 'Saloon', 'SUV', 'Safari Vehicle'];

  const filteredVehicles = selectedCategory === 'All'
    ? VEHICLES
    : VEHICLES.filter((v) => v.category === selectedCategory);

  return (
    <section id="cars" className="py-20 text-slate-900 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-3 shadow-xs">
              Fleet &amp; Rentals
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-3">
              Find the Right Ride
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Comfortable and reliable vehicles for everyday travel, business trips and adventures.
            </p>
          </div>

          {/* Location note */}
          <div className="text-xs text-slate-600 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2.5 rounded-xl self-start md:self-auto shadow-xs">
            Available in: <span className="text-[#D97706] font-bold">Mombasa &amp; Nairobi</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#F59E0B] text-black shadow-md shadow-[#F59E0B]/25'
                    : 'bg-white/90 text-slate-700 hover:text-black hover:bg-slate-50 border border-slate-200 shadow-xs'
                }`}
              >
                {cat === 'All' ? 'All Vehicles' : cat}
              </button>
            );
          })}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle: Vehicle) => {
            return (
              <div
                key={vehicle.id}
                className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group shadow-sm"
              >
                {/* Vehicle Image Container */}
                <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20">
                      {vehicle.category}
                    </span>
                  </div>

                  {vehicle.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-[#F59E0B] text-black shadow">
                        Popular Choice
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#D97706] transition-colors">
                      {vehicle.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {vehicle.description}
                    </p>

                    {/* Specifications Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <UsersIcon className="w-4 h-4 text-[#D97706]" />
                        <span className="text-[11px] text-slate-500 font-medium">Seats</span>
                        <span className="text-xs font-bold text-slate-900">{vehicle.seats}</span>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1 border-x border-slate-200">
                        <Settings2Icon className="w-4 h-4 text-[#D97706]" />
                        <span className="text-[11px] text-slate-500 font-medium">Gearbox</span>
                        <span className="text-xs font-bold text-slate-900">{vehicle.transmission}</span>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1">
                        <FuelIcon className="w-4 h-4 text-[#D97706]" />
                        <span className="text-[11px] text-slate-500 font-medium">Fuel</span>
                        <span className="text-xs font-bold text-slate-900">{vehicle.fuelType}</span>
                      </div>
                    </div>

                    {/* Key features chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {vehicle.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch gap-2.5">
                    <button
                      onClick={() => onSelectVehicle ? onSelectVehicle(vehicle) : window.location.assign('#contact')}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Request This Vehicle</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getVehicleWhatsAppUrl(vehicle.name, vehicle.category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
                      title="Quick inquiry via WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span className="sm:hidden">WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Fleet Footnote */}
        <div className="mt-12 text-center text-xs text-slate-500 font-medium">
          Looking for a specific model not listed here? Call{' '}
          <a href="tel:0793612412" className="text-slate-900 hover:text-[#D97706] underline font-bold">0793612412</a>
          {' '}or{' '}
          <a href="tel:0748769876" className="text-slate-900 hover:text-[#D97706] underline font-bold">0748769876</a>
          {' '}for custom fleet bookings and availability.
        </div>

      </div>
    </section>
  );
};
