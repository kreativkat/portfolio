"use client";
import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { project } = params;

  console.log(project);
  return (
    <div className="h-screen bg-quaternary flex items-center justify-center">
      <h1>{project}</h1>
    </div>
  );
};

export default Page;
