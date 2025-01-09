"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CorporateProfiles = ({ project, projectDetails }) => {
  const [selectedSection, setSelectedSection] = useState("overview");

  console.log(project);

  const profileSections = [
    {
      id: "overview",
      title: "Company Overview",
      content: {
        title: project.title,
        description: project.description,
        image: project.image,
        highlights: [
          "30+ Years of Excellence",
          "Global Recognition",
          "Innovative Design",
          "Sustainable Practices",
        ],
      },
    },
    {
      id: "products",
      title: "Product Portfolio",
      content: {
        title: "Signature Collections",
        description:
          "Showcasing our most iconic furniture pieces that blend artistry with functionality.",
        images: [
          {
            src: "/projects/corporate/product1.jpg",
            title: "Living Room Collection",
          },
          {
            src: "/projects/corporate/product2.jpg",
            title: "Outdoor Series",
          },
          {
            src: "/projects/corporate/product3.jpg",
            title: "Lighting Fixtures",
          },
        ],
      },
    },
    {
      id: "process",
      title: "Design Process",
      content: {
        steps: [
          {
            number: "01",
            title: "Concept Development",
            description: "Initial sketches and material exploration",
          },
          {
            number: "02",
            title: "Prototyping",
            description: "Handcrafted models and refinements",
          },
          {
            number: "03",
            title: "Production",
            description: "Skilled artisans bringing designs to life",
          },
        ],
      },
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
          className="object-cover opacity-90"
          priority
          quality={100}
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

      {/* Navigation Tabs */}
      <section className="bg-secondary sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8 py-4">
            {profileSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors duration-300 ${
                  selectedSection === section.id
                    ? "bg-primary text-secondary"
                    : "text-primary hover:bg-primary/5"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedSection === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  {profileSections[0].content.title}
                </h2>
                <p className="text-tertiary text-lg leading-relaxed">
                  {profileSections[0].content.description}
                </p>
                <ul className="space-y-4">
                  {profileSections[0].content.highlights.map(
                    (highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-tertiary"
                      >
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0"
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
                        {highlight}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={profileSections[0].content.image}
                  alt="Company Overview"
                  fill
                  className="object-fit"
                />
              </div>
            </div>
          )}

          {selectedSection === "products" && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {profileSections[1].content.title}
                </h2>
                <p className="text-tertiary text-lg max-w-2xl mx-auto">
                  {profileSections[1].content.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {profileSections[1].content.images.map((product, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square rounded-xl overflow-hidden"
                  >
                    <Image
                      src={product.src}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-secondary font-bold text-xl">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedSection === "process" && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-primary text-center">
                Our Design Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {profileSections[2].content.steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative p-6 bg-secondary rounded-xl"
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Corporate Profile?
          </h2>
          <p className="text-xl text-secondary/90 mb-8 max-w-2xl mx-auto">
            Let's showcase your company's story and values with a professional
            corporate profile.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-tertiary hover:text-secondary transition-colors duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CorporateProfiles;
