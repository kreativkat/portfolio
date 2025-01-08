"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DigitalMarketing = ({ project, projectDetails }) => {
  const marketingStats = [
    {
      stat: "250%",
      label: "Increase in Social Media Engagement",
      icon: "/marketing/engagement.svg",
    },
    {
      stat: "180%",
      label: "Growth in Organic Traffic",
      icon: "/marketing/traffic.svg",
    },
    {
      stat: "3.5x",
      label: "Return on Ad Spend",
      icon: "/marketing/roi.svg",
    },
  ];

  const marketingServices = [
    {
      title: "Social Media Marketing",
      description:
        "Strategic content creation and community management across platforms",
      image: "/marketing/social-media.jpg",
    },
    {
      title: "Content Marketing",
      description: "Engaging blog posts, articles, and multimedia content",
      image: "/marketing/content.jpg",
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns with high conversion rates",
      image: "/marketing/email.jpg",
    },
    {
      title: "SEO Optimization",
      description: "Improving search visibility and organic traffic",
      image: "/marketing/seo.jpg",
    },
  ];

  const campaignResults = [
    {
      image: "/marketing/analytics1.jpg",
      title: "Campaign Performance",
      description: "Detailed analytics showing campaign success metrics",
    },
    {
      image: "/marketing/analytics2.jpg",
      title: "Audience Growth",
      description: "Steady increase in follower count and engagement",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-primary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80"
          priority
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

      {/* Marketing Stats */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingStats.map((stat, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.stat}
                </div>
                <div className="text-tertiary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Our Marketing Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {marketingServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary/90">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Results */}
      <section className="bg-quaternary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Campaign Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignResults.map((result, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {result.title}
                  </h3>
                  <p className="text-tertiary">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Digital Presence?
          </h2>
          <p className="text-xl text-secondary/90 mb-8 max-w-2xl mx-auto">
            Let's create a tailored digital marketing strategy that drives
            results for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-tertiary hover:text-secondary transition-colors duration-300"
          >
            Start Your Campaign
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DigitalMarketing;
