"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/hero-bg.jpg" // Make sure to add your image to the public folder
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <div className="space-y-8">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-secondary font-hostGrotesk">
            Crafting Digital Experiences
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-secondary/90 max-w-2xl mx-auto font-hostGrotesk">
            Transforming ideas into seamless digital solutions that drive growth
            and innovation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="/pages/projects"
              className="px-8 py-3 bg-secondary text-primary font-medium rounded-md hover:bg-tertiary hover:text-secondary transition-all duration-300 min-w-[160px] font-hostGrotesk"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3 bg-transparent border-2 border-secondary text-secondary font-medium rounded-md hover:bg-secondary/10 transition-all duration-300 min-w-[160px] font-hostGrotesk"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-secondary flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-secondary rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
