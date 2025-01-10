"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projectsData";
import { filters } from "../constants";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState([]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const filteredProjects =
      activeFilter === "all"
        ? projects
        : projects.filter((project) => {
            if (Array.isArray(project.category)) {
              return project.category.includes(activeFilter);
            }
            return project.category === activeFilter;
          });

    const projectsToDisplay =
      activeFilter === "all"
        ? filteredProjects.slice(0, 15)
        : filteredProjects.slice(0, 10);

    setDisplayedProjects(shuffleArray(projectsToDisplay));
  }, [activeFilter]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {displayedProjects.map((project) => (
            <div key={project.id}>
              {project.websiteLink ? (
                <Link
                  href={project.websiteLink}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-[400px] w-full rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 rounded-lg"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300  rounded-lg">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-secondary/90">
                          {project.description}
                        </p>
                        <span className="inline-block mt-4 text-sm uppercase tracking-wider border-b border-secondary/30">
                          Visit Website
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-[400px] w-full rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/pages/projects"
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
