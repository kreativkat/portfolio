"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  portfolioImages,
  photographyCategories,
  photographyServices,
} from "./constants";

const Photography = ({ project, projectDetails }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

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
              Professional Photography
            </h1>
            <p className="text-xl md:text-2xl text-secondary/90 max-w-3xl">
              Elevate your brand with stunning visuals that capture attention
              and drive results
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Our Photography Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographyServices.map((service, index) => (
              <div
                key={index}
                className="bg-quaternary p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-tertiary mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-tertiary"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Featured Work
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {photographyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-secondary"
                    : "bg-secondary text-primary hover:bg-primary/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages
              .filter(
                (img) =>
                  activeCategory === "all" || img.category === activeCategory,
              )
              .map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-secondary font-medium text-lg mb-1">
                          {image.alt}
                        </h3>
                        <p className="text-secondary/90 text-sm">
                          Client: {image.client}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Choose Our Photography Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">10+</div>
              <p className="text-tertiary">Years of Experience</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-tertiary">Successful Projects</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">100%</div>
              <p className="text-tertiary">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-primary/95 z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal navigation and content */}
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
                  <p className="text-secondary/80 mb-2">
                    {selectedImage.description}
                  </p>
                  <p className="text-secondary/60">
                    Impact: {selectedImage.impact}
                  </p>
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
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-secondary/90 mb-8 max-w-2xl mx-auto">
            Let's create stunning visuals that showcase your products and
            services in the best light.
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
