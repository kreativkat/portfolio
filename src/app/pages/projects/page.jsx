"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../../components/home/projectsData";
import { filters } from "../../components/constants";
import { useRouter } from "next/navigation";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPDF, setSelectedPDF] = useState(null);

  const nav = useRouter();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(activeFilter);
          }
          return project.category === activeFilter;
        });

  const handleProjectClick = (project) => {
    if (project.category === "Branding") {
      setSelectedPDF(project.pdf);
    } else if (project.websiteLink) {
      nav.push(project.websiteLink);
    }
  };

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
                onClick={() => handleProjectClick(project)}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-secondary cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-[300px] w-full rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PDF Overlay */}
          {selectedPDF && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
              <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4">
                <button
                  onClick={() => setSelectedPDF(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
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
                <iframe
                  src={selectedPDF}
                  className="w-full h-full"
                  title="PDF Viewer"
                />
              </div>
            </div>
          )}

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
