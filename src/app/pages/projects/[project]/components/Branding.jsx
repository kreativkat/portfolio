"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Branding = ({ project, projectDetails }) => {
  const brandElements = [
    {
      title: "Logo Design",
      description: "Creating a distinctive and memorable brand mark",
      image: "/branding/logo-design.jpg",
    },
    {
      title: "Color Palette",
      description: "Defining brand colors that evoke the right emotions",
      image: "/branding/color-palette.jpg",
    },
    {
      title: "Typography",
      description: "Selecting fonts that reflect brand personality",
      image: "/branding/typography.jpg",
    },
    {
      title: "Brand Guidelines",
      description: "Establishing rules for consistent brand application",
      image: "/branding/guidelines.jpg",
    },
  ];

  const brandApplications = [
    {
      title: "Business Cards",
      image: "/branding/business-cards.jpg",
    },
    {
      title: "Stationery",
      image: "/branding/stationery.jpg",
    },
    {
      title: "Social Media",
      image: "/branding/social-media.jpg",
    },
    {
      title: "Signage",
      image: "/branding/signage.jpg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding brand values, target audience, and market position",
    },
    {
      number: "02",
      title: "Research",
      description: "Analyzing competitors and industry trends",
    },
    {
      number: "03",
      title: "Concept Development",
      description: "Creating initial design concepts and iterations",
    },
    {
      number: "04",
      title: "Refinement",
      description: "Perfecting the chosen direction and preparing deliverables",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-primary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/90" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-secondary">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary/90 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Elements */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Brand Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandElements.map((element, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-secondary"
              >
                <div className="relative h-64">
                  <Image
                    src={element.image}
                    alt={element.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {element.title}
                  </h3>
                  <p className="text-tertiary">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative p-6 bg-quaternary rounded-xl"
              >
                <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-tertiary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Brand Applications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandApplications.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-secondary">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Brand Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Before</h3>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/branding/before.jpg"
                  alt="Before Rebranding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">After</h3>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/branding/after.jpg"
                  alt="After Rebranding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-secondary/90 mb-8 max-w-2xl mx-auto">
            Let's create a distinctive brand identity that sets you apart from
            the competition.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-tertiary hover:text-secondary transition-colors duration-300"
          >
            Start Your Branding Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Branding;
