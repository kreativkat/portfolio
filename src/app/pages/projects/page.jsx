"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../../components/home/projectsData";
import Link from "next/link";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    "all",
    "Web Development",
    "Digital Marketing",
    "Branding",
    "Booklet Designs",
    "Corporate Profiles",
    "Graphic Design",
    "Murals",
    "Photography",
    "Social Media",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="pt-16">
      <section className="w-full min-h-screen bg-quaternary py-20 font-hostGrotesk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Projects
            </h1>
            <p className="text-tertiary text-lg md:text-xl max-w-2xl mx-auto">
              Showcasing our creative solutions and successful collaborations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-secondary"
                    : "bg-transparent text-primary hover:bg-primary/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-secondary"
              >
                {/* Project Image */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-secondary/90">{project.description}</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-tertiary">{project.description}</p>
                  </div>

                  {/* Project Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Client Info */}
                  {project.clientName && (
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-tertiary text-sm">
                        <span className="font-medium">Client:</span>{" "}
                        {project.clientName}
                      </p>
                      {project.year && (
                        <p className="text-tertiary text-sm">
                          <span className="font-medium">Year:</span>{" "}
                          {project.year}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Project Link */}
                  {project.slug && (
                    <Link
                      href={`/pages/${project.slug}`}
                      className="inline-block mt-4 text-primary hover:text-tertiary transition-colors duration-300 text-sm font-medium"
                    >
                      View Project Details →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-tertiary mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary for your
              business
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
