"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Murals = ({ project, projectDetails }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const muralImages = [
    {
      id: 1,
      src: "/projects/murals/handuraw/image1.jpg",
      alt: "Final Mural - Section 1",
      category: "final",
      description: "Completed section showing cultural elements",
    },
    {
      id: 2,
      src: "/projects/murals/handuraw/image2.png",
      alt: "Final Mural - Section 2",
      category: "final",
      description: "Main centerpiece of the mural",
    },
    {
      id: 3,
      src: "/projects/murals/handuraw/image3.jpg",
      alt: "Final Mural - Section 3",
      category: "final",
      description: "Detailed view of artistic elements",
    },
    {
      id: 4,
      src: "/projects/murals/handuraw/image4.jpg",
      alt: "Final Mural - Section 4",
      category: "final",
      description: "Completed section showing cultural elements",
    },
    {
      id: 5,
      src: "/projects/murals/handuraw/image5.jpg",
      alt: "Final Mural - Section 5",
      category: "final",
      description: "Completed section showing cultural elements",
    },
    {
      id: 6,
      src: "/projects/murals/handuraw/image6.jpg",
      alt: "Final Mural - Section 6",
      category: "final",
      description: "Completed section showing cultural elements",
    },
    {
      id: 7,
      src: "/projects/murals/handuraw/image7.jpg",
      alt: "Final Mural - Section 7",
      category: "final",
      description: "Completed section showing cultural elements",
    },
    {
      id: 8,
      src: "/projects/murals/handuraw/image8.jpg",
      alt: "Final Mural - Section 8",
      category: "final",
      description: "Completed section showing cultural elements",
    },
    {
      id: 9,
      src: "/projects/murals/handuraw/image9.jpg",
      alt: "Final Mural - Section 9",
      category: "final",
      description: "Completed section showing cultural elements",
    },
  ];

  const projectInfo = {
    location: "Cebu City, Philippines",
    size: "40ft x 15ft",
    duration: "3 weeks",
    materials: [
      "Exterior Paint",
      "Weather-resistant Coating",
      "Custom Mixed Colors",
    ],
    theme: "Cultural Heritage and Modern Vision",
  };

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
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/90" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-secondary">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              MURAL Handuraw
            </h1>
            <p className="text-xl md:text-2xl text-secondary/90 max-w-3xl">
              A vibrant celebration of Filipino culture through street art,
              blending traditional elements with contemporary design.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Project Overview
              </h2>
              <p className="text-tertiary text-lg leading-relaxed mb-6">
                MURAL Handuraw is a large-scale art installation that captures
                the essence of Filipino heritage through vibrant colors and
                symbolic imagery. The mural serves as a visual narrative,
                telling stories of tradition, progress, and community.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(projectInfo).map(([key, value]) => (
                  <div key={key} className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold text-primary capitalize mb-2">
                      {key}
                    </h3>
                    {Array.isArray(value) ? (
                      <ul className="list-disc list-inside text-tertiary">
                        {value.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-tertiary">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">
                Project Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
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
                  <span className="text-tertiary">
                    Custom-mixed colors for authentic cultural representation
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-tertiary">
                    Weather-resistant coating for longevity
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-tertiary">
                    Community engagement throughout the process
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {muralImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-secondary font-medium text-sm">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-primary/95 z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-4 right-4 z-50 flex gap-4">
            <button
              className="p-2 bg-secondary/10 rounded-full text-secondary hover:bg-secondary/20 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = muralImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                const prevImage = muralImages[currentIndex - 1];
                if (prevImage) setSelectedImage(prevImage);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="p-2 bg-secondary/10 rounded-full text-secondary hover:bg-secondary/20 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = muralImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                const nextImage = muralImages[currentIndex + 1];
                if (nextImage) setSelectedImage(nextImage);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              className="p-2 bg-secondary/10 rounded-full text-secondary hover:bg-secondary/20 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl aspect-[3/2]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                <div className="max-w-7xl mx-auto">
                  <h3 className="text-secondary font-medium">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-secondary/80 text-sm mt-1">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Sections */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Impact & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-quaternary p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-tertiary">Daily Viewers</p>
            </div>
            <div className="bg-quaternary p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-tertiary">Media Features</p>
            </div>
            <div className="bg-quaternary p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-tertiary">Community Approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-secondary/90 mb-8 max-w-2xl mx-auto">
            Let's create a stunning mural that tells your story and inspires
            your community.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-tertiary hover:text-secondary transition-colors duration-300"
          >
            Start Your Mural Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Murals;
