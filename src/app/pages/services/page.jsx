"use client";
import React, { useState } from "react";
import { services } from "../../components/home/servicesData";
import Link from "next/link";
import { serviceDetails } from "./serviceDetails";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="pt-16">
      <section className="w-full min-h-screen bg-quaternary py-20 font-hostGrotesk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Services
            </h1>
            <p className="text-tertiary text-lg md:text-xl max-w-2xl mx-auto">
              In-depth solutions tailored for digital success
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeService === index
                    ? "bg-primary text-secondary"
                    : "bg-secondary text-primary hover:bg-primary/5"
                }`}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Detailed Service Content */}
          <div className="bg-secondary rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {serviceDetails[activeService].title}
                  </h2>
                  <p className="text-tertiary text-lg">
                    {serviceDetails[activeService].description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceDetails[activeService].features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 bg-quaternary p-4 rounded-lg"
                        >
                          <svg
                            className="w-6 h-6 text-primary flex-shrink-0 mt-1"
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
                          <span className="text-tertiary">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Add this section after Key Features for Publishing Services */}
                {serviceDetails[activeService].title ===
                  "Publishing Services" && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      Publishing Formats & Platforms
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-quaternary p-6 rounded-lg">
                        <h4 className="font-bold text-primary mb-4">
                          Available Formats
                        </h4>
                        <ul className="space-y-2">
                          {serviceDetails[
                            activeService
                          ].additionalInfo.formats.map((format, index) => (
                            <li
                              key={index}
                              className="text-tertiary flex items-center gap-2"
                            >
                              <span className="text-primary">•</span>
                              {format}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-quaternary p-6 rounded-lg">
                        <h4 className="font-bold text-primary mb-4">
                          Publishing Platforms
                        </h4>
                        <ul className="space-y-2">
                          {serviceDetails[
                            activeService
                          ].additionalInfo.platforms.map((platform, index) => (
                            <li
                              key={index}
                              className="text-tertiary flex items-center gap-2"
                            >
                              <span className="text-primary">•</span>
                              {platform}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-quaternary p-6 rounded-lg">
                        <h4 className="font-bold text-primary mb-4">
                          Marketing Services
                        </h4>
                        <ul className="space-y-2">
                          {serviceDetails[
                            activeService
                          ].additionalInfo.marketingServices.map(
                            (service, index) => (
                              <li
                                key={index}
                                className="text-tertiary flex items-center gap-2"
                              >
                                <span className="text-primary">•</span>
                                {service}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Process */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Our Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceDetails[activeService].process.map(
                      (step, index) => (
                        <div
                          key={index}
                          className="bg-quaternary p-6 rounded-lg space-y-2"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold">
                              {index + 1}
                            </span>
                            <h4 className="text-lg font-bold text-primary">
                              {step.title}
                            </h4>
                          </div>
                          <p className="text-tertiary pl-11">
                            {step.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Case Studies */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Success Stories
                  </h3>
                  {serviceDetails[activeService].caseStudies.map(
                    (study, index) => (
                      <div
                        key={index}
                        className="bg-quaternary p-6 rounded-lg space-y-4"
                      >
                        <h4 className="text-xl font-bold text-primary">
                          {study.title}
                        </h4>
                        <p className="text-tertiary">{study.description}</p>
                        <div className="flex flex-wrap gap-4">
                          {study.metrics.map((metric, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Pricing Plans */}
                <div className="bg-quaternary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Pricing Plans
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(serviceDetails[activeService].pricing).map(
                      ([key, plan]) => (
                        <div
                          key={key}
                          className="bg-secondary p-4 rounded-lg space-y-3"
                        >
                          <h4 className="font-bold text-primary">
                            {plan.name}
                          </h4>
                          <ul className="space-y-2">
                            {plan.features.map((feature, index) => (
                              <li
                                key={index}
                                className="text-sm text-tertiary flex items-center gap-2"
                              >
                                <span className="text-primary">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-secondary/80 mb-6">
                    Let's discuss your project and create something amazing
                    together
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block w-full py-3 bg-secondary text-primary rounded-lg hover:bg-tertiary hover:text-secondary transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
