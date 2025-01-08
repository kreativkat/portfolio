"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Photography = ({ project, projectDetails }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "product",
    "portrait",
    "event",
    "commercial",
    "food",
  ];

  const photographyImages = [
    {
      id: 1,
      src: "/projects/photography/product1.jpg",
      alt: "Product Photography - Geisha",
      category: "product",
      description: "Professional product photography for luxury items",
      details: {
        client: "Geisha Beauty",
        equipment: "Sony A7III, 90mm Macro",
        lighting: "Studio Setup with Softboxes",
      },
    },
    // Add more images with their categories and details
  ];

  const filteredImages =
    activeCategory === "all"
      ? photographyImages
      : photographyImages.filter((img) => img.category === activeCategory);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-primary">
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
              Photography Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-secondary/90 max-w-3xl">
              Capturing moments and products with precision and artistry
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-secondary py-8 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-secondary"
                    : "bg-quaternary text-primary hover:bg-primary/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-secondary font-medium text-lg mb-2">
                        {image.alt}
                      </h3>
                      <p className="text-secondary/80 text-sm">
                        {image.description}
                      </p>
                    </div>
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
                const currentIndex = photographyImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                const prevImage = photographyImages[currentIndex - 1];
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
                const currentIndex = photographyImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                const nextImage = photographyImages[currentIndex + 1];
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
            <div className="relative w-full max-w-6xl max-h-[90vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                <div className="max-w-7xl mx-auto">
                  <h3 className="text-secondary font-medium text-xl mb-2">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-secondary/80 mb-4">
                    {selectedImage.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-secondary/60">Client:</span>
                      <span className="text-secondary ml-2">
                        {selectedImage.details.client}
                      </span>
                    </div>
                    <div>
                      <span className="text-secondary/60">Equipment:</span>
                      <span className="text-secondary ml-2">
                        {selectedImage.details.equipment}
                      </span>
                    </div>
                    <div>
                      <span className="text-secondary/60">Lighting:</span>
                      <span className="text-secondary ml-2">
                        {selectedImage.details.lighting}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Capture Your Vision?
          </h2>
          <p className="text-xl text-secondary/90 mb-8 max-w-2xl mx-auto">
            Let's create stunning visuals that tell your story and elevate your
            brand.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-tertiary hover:text-secondary transition-colors duration-300"
          >
            Start Your Photography Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Photography;
