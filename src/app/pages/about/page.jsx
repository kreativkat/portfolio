"use client";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "/team/john-smith.jpg",
      bio: "15+ years of experience in digital transformation and software development.",
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/team/sarah-johnson.jpg",
      bio: "Award-winning designer with a passion for creating meaningful digital experiences.",
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "/team/michael-chen.jpg",
      bio: "Expert in full-stack development and cloud architecture.",
    },
    {
      name: "Emma Williams",
      role: "Marketing Director",
      image: "/team/emma-williams.jpg",
      bio: "Digital marketing specialist with a focus on growth strategies.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries to create cutting-edge solutions",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "Delivering outstanding quality in everything we do",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="pt-16">
      <section className="w-full bg-secondary font-hostGrotesk">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 z-10 bg-primary/60" />
          <Image
            src="/about-hero.jpg"
            alt="About Us"
            fill
            className="object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary">
              Our Story
            </h1>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-tertiary text-lg leading-relaxed">
              We are dedicated to transforming businesses through innovative
              digital solutions. Our mission is to help companies thrive in the
              digital age by providing cutting-edge technology solutions and
              exceptional service.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-tertiary">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-tertiary text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {member.name}
                </h3>
                <p className="text-tertiary font-medium mb-2">{member.role}</p>
                <p className="text-tertiary text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
