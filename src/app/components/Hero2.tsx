'use client';
import Image from 'next/image';
import React from 'react';
import Pic24 from '@/app/image/24.webp';
import Pic25 from '@/app/image/25.webp';
import Pic26 from '@/app/image/26.webp';
import Pic27 from '@/app/image/27.webp';

const partners = [
  { name: 'Karachi Chamber of Commerce', image: Pic24 },
  { name: 'ISO Certification', image: Pic25 },
  { name: 'REAP Certification', image: Pic26 },
  { name: 'National Tax Certificate', image: Pic27 },
];

const PartnersSlider = () => {
  return (
    <section aria-label="Ocean World Logistics certifications and professional memberships" style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }} className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Our Certifications & Professional Memberships
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-12">
  Ocean World Logistics is committed to international logistics standards through
  recognized certifications and professional memberships, ensuring reliable
  customs clearance, freight forwarding and supply chain solutions.
</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="w-full max-w-[180px] group">
            <div className="relative w-full h-24 sm:h-28 md:h-32 mx-auto transition-transform duration-200 group-hover:scale-[1.02]">
          <Image
  src={partner.image}
  alt={partner.name}
  fill
  className="object-contain rounded-md"
  sizes="(max-width:768px) 140px, 180px"
  quality={75}
  loading="lazy"
/>
            </div>
            <p className="text-sm text-gray-700 mt-3 font-medium">{partner.name}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-500 mt-12 text-sm italic">
  Trusted by exporters, importers and international trade partners across
  Pakistan. Contact Ocean World Logistics today for reliable customs
  clearance and freight forwarding solutions.
</p>
    </section>
  );
};

export default PartnersSlider;
