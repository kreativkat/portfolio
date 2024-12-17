"use client";
import React from "react";
import Image from "next/image";
import { brandsRow1, brandsRow2 } from "./brandsData";

const PartneredBrands = () => {
  return (
    <section className="w-full py-16 bg-secondary font-hostGrotesk overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-tertiary text-lg max-w-2xl mx-auto">
            We're proud to collaborate with these amazing organizations
          </p>
        </div>

        {/* Marquee Container */}
        <div className="space-y-12">
          {/* First Row - Left to Right */}
          <div className="relative">
            <div className="flex animate-marquee space-x-8">
              {[...brandsRow1, ...brandsRow1].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 relative"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <div className="flex animate-marquee-reverse space-x-8">
              {[...brandsRow2, ...brandsRow2].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 relative"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartneredBrands;
