"use client";
import React from "react";

const HowWeWork = () => {
  return (
    <section className="w-full py-16 bg-secondary font-hostGrotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">How We Work</h2>
          <p className="text-tertiary text-lg max-w-2xl mx-auto">
            Our proven process ensures successful project delivery and exceeds
            client expectations.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Video Section - Takes 40% width on desktop */}
          <div className="lg:w-2/5 w-full sticky top-24">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/video-thumbnail.jpg"
                autoPlay
                muted
                loop
              >
                <source src="/how-we-work.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Steps Section - Takes 60% width on desktop */}
          <div className="lg:w-3/5 w-full">
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/10 hidden sm:block" />

              {/* Process Steps */}
              {[
                {
                  number: "01",
                  title: "Discovery & Planning",
                  description:
                    "We begin by understanding your goals, target audience, and project requirements through in-depth consultations.",
                },
                {
                  number: "02",
                  title: "Design & Development",
                  description:
                    "Our team creates innovative solutions while keeping you involved in every step of the creative process.",
                },
                {
                  number: "03",
                  title: "Testing & Refinement",
                  description:
                    "Rigorous testing and refinement ensure your project meets the highest quality standards.",
                },
                {
                  number: "04",
                  title: "Launch & Support",
                  description:
                    "We ensure a smooth launch and provide ongoing support to help you achieve long-term success.",
                },
              ].map((step, index) => (
                <div
                  key={step.number}
                  className="relative pl-16 pr-4 py-4 hover:bg-primary/5 rounded-lg transition-colors duration-300"
                >
                  {/* Number Circle */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center text-sm font-medium z-10">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-tertiary">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pl-16">
              <button className="px-8 py-3 bg-primary text-secondary font-medium rounded-md hover:bg-tertiary transition-colors duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
