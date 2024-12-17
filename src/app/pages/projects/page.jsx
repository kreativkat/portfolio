"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "branding"];

  const projects = [
    {
      id: 1,
      title: "Creators Value Platform",
      category: "web",
      image: "/projects/creators-value.jpg",
      description:
        "A comprehensive platform for content creators to monetize their work",
      clientName: "Creators Value Inc.",
      testimonial:
        "The team delivered beyond our expectations. The platform has helped thousands of creators.",
      deliverables: [
        "Custom CMS",
        "Payment Integration",
        "Analytics Dashboard",
      ],
      year: "2023",
    },
    {
      id: 2,
      title: "Feat Books Mobile App",
      category: "mobile",
      image: "/projects/feat-books.jpg",
      description: "Revolutionary reading experience for digital book lovers",
      clientName: "Feat Books",
      testimonial:
        "The app has transformed how our users interact with digital books.",
      deliverables: ["iOS App", "Android App", "Cloud Sync"],
      year: "2023",
    },
    {
      id: 3,
      title: "WellTalk Healthcare Platform",
      category: "web",
      image: "/projects/welltalk.jpg",
      description: "Connecting patients with healthcare providers seamlessly",
      clientName: "WellTalk",
      testimonial:
        "Patient engagement increased by 200% after launching the new platform.",
      deliverables: [
        "Telemedicine Features",
        "Appointment System",
        "Patient Portal",
      ],
      year: "2022",
    },
    // Add more projects...
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="pt-16">
      <section className="w-full min-h-screen bg-secondary py-20 font-hostGrotesk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Success Stories
            </h1>
            <p className="text-tertiary text-lg md:text-xl max-w-2xl mx-auto">
              Discover how we've helped our clients achieve their digital goals
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <span className="text-tertiary text-sm">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-tertiary">{project.description}</p>

                  {/* Deliverables */}
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Client Testimonial */}
                  <div className="border-t border-primary/10 pt-4 mt-4">
                    <blockquote className="text-tertiary italic">
                      "{project.testimonial}"
                    </blockquote>
                    <p className="text-primary font-medium mt-2">
                      - {project.clientName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
