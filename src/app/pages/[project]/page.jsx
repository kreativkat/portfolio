"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projects } from "../../components/home/projectsData";
import { projectDetails } from "./projectDetailsData";
import Link from "next/link";
import Websites from "./components/Websites";
import DigitalMarketing from "./components/DigitalMarketing";
import Branding from "./components/Branding";
import Murals from "./components/Murals";
import Photography from "./components/Photography";

const ProjectDetail = () => {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.project);
  const projectData = JSON.parse(sessionStorage.getItem("project"));
  console.log(projectData);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen bg-quaternary">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary">Project not found</h1>
          <Link
            href="/pages/projects"
            className="mt-4 inline-block text-tertiary hover:text-primary"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  switch (projectData.category) {
    case "Web Development":
      return <Websites project={project} projectDetails={projectDetails} />;
    case "Digital Marketing":
      return (
        <DigitalMarketing project={project} projectDetails={projectDetails} />
      );
    case "Branding":
      return <Branding project={project} projectDetails={projectDetails} />;
    case "Murals":
      return <Murals project={project} projectDetails={projectDetails} />;
    case "Photography":
      return <Photography project={project} projectDetails={projectDetails} />;
    default:
      return <div>Project not found</div>;
  }
};

export default ProjectDetail;
