import React from "react";
import Image from "next/image";
import { projects } from "../data";

import Link from "next/link";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-[#01d293] text-xl tracking-widest uppercase ">
          Projects
        </p>
        <h2 className="py-4">Thing I Have Built </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectItems key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
