import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItems = ({ project }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl p-4 group hover:bg-gradient-to-r from-[#01d293] to-[#65a28f] ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={project.image_path}
        alt="/"
        width={600}
        height={400}
      />
      <div className="hidden group-hover:block absolute 10-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center text-white">
          {project.name}
        </h3>
        <p className="pt-2 pb-4 font-bold text-center text-white">
          {project.key_techs}
        </p>
        <Link href={project.projectUrl}>
          <p className="px-2 py-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
