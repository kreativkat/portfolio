"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Building2, BrickWall, Camera } from "lucide-react";
import { services } from "./servicesData";

const ServicesWeOffer = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="w-full py-20 bg-secondary font-hostGrotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Services We Offer
          </h2>
          <p className="text-tertiary text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-4 ${
                  activeService === index
                    ? "bg-primary text-secondary"
                    : "hover:bg-primary/5 text-primary"
                }`}
                onClick={() => setActiveService(index)}
              >
                <span
                  className={`${
                    activeService === index ? "text-secondary" : "text-primary"
                  }`}
                >
                  {service.icon}
                </span>
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2 bg-primary/5 rounded-2xl p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                {services[activeService].title}
              </h3>
              <p className="text-tertiary">
                {services[activeService].description}
              </p>
              <div className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-tertiary"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/pages/services"
                className="inline-block mt-6 px-6 py-3 bg-primary text-secondary rounded-lg hover:bg-tertiary transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
