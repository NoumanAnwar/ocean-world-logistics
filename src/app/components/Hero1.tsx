'use client';
import Image from 'next/image';
import React from 'react';
import Pic19 from '@/app/image/19.webp';
import Pic20 from '@/app/image/20.webp';
import Pic21 from '@/app/image/21.webp';
import Pic22 from '@/app/image/22.webp';
import Pic23 from '@/app/image/23.webp';

const partners = [
  { name: 'Karachi Chamber of Commerce', image: Pic19 },
  { name: 'Rice Exporters Association', image: Pic20 },
  { name: 'Wheat Traders', image: Pic21 },
  { name: 'World Food Programme', image: Pic22 },
  { name: 'ISO Certified', image: Pic23 },
];

const PartnersSlider = () => {
  return (
    <section  aria-label="Organizations and business partners of Ocean World Logistics" className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        Trusted by Leading Organizations Across Pakistan
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-10">
  Ocean World Logistics proudly serves chambers of commerce, exporters,
  humanitarian organizations and businesses with reliable customs clearance,
  freight forwarding and logistics solutions.
</p>
      <div className="relative overflow-hidden" aria-label="Partner organizations slider">
        <div className="flex animate-slide whitespace-nowrap gap-12">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={`${partner.name}-${idx}`} className="inline-block">
              <div className="relative w-40 h-24 grayscale hover:grayscale-0 transition-all duration-300 mx-4">
                <Image
  src={partner.image}
  alt={partner.name}
  fill
  className="object-contain"
  sizes="(max-width: 640px) 120px, 160px"
  loading="lazy"
/>
              </div>
              <p className="text-xs text-gray-600 mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 35s linear infinite;
will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default PartnersSlider;
