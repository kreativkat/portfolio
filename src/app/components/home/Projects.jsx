"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "branding"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "/projects/project1.jpg",
      description: "Modern e-commerce solution with seamless user experience",
      link: "/projects/e-commerce",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "/projects/project2.jpg",
      description: "Secure and intuitive mobile banking application",
      link: "/projects/banking-app",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "branding",
      image: "/projects/project3.jpg",
      description: "Complete brand identity system for tech startup",
      link: "/projects/brand-identity",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      image: "/projects/project4.jpg",
      description: "Responsive portfolio website with modern design",
      link: "/projects/portfolio",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="w-full min-h-screen bg-quaternary py-20 font-hostGrotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-tertiary text-lg md:text-xl max-w-2xl mx-auto">
            Explore our latest work and see how we bring ideas to life
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link
              href={project.link}
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-secondary/90">{project.description}</p>
                    <span className="inline-block mt-4 text-sm uppercase tracking-wider border-b border-secondary/30">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
