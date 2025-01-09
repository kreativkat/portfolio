import React from "react";
import Image from "next/image";
import Link from "next/link";

const Websites = ({ project, projectDetails }) => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/90" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-secondary">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary/90 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <div className="bg-quaternary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Project Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Project Overview
              </h2>
              <p className="text-tertiary text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">
                Project Details
              </h3>
              <dl className="space-y-4">
                {Object.entries(projectDetails.overview).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm text-tertiary capitalize">{key}</dt>
                    <dd className="mt-1 text-primary">
                      {Array.isArray(value) ? (
                        <ul className="list-disc list-inside">
                          {value.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Design Process
            </h2>
            <div className="space-y-20">
              {projectDetails.process.map((phase, index) => (
                <div
                  key={phase.phase}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src={phase.image}
                      alt={phase.phase}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {index + 1}. {phase.phase}
                    </h3>
                    <p className="text-tertiary text-lg">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Project Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectDetails.results.map((result) => (
                <div
                  key={result.label}
                  className="bg-secondary p-8 rounded-xl text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <div className="text-tertiary">{result.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-tertiary text-lg mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss
              your project.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-secondary rounded-lg hover:bg-tertiary transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Websites;
