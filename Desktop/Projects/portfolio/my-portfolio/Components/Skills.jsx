import Image from "next/image";
import React from "react";
import { skills } from "../data";
const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="mx-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-[#01d293] text-xl tracking-widest uppercase ">
          Skills
        </p>
        <h2 className="py-4">What I Can Do </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const { title, image } = skill;
            return (
              <div key={index} className="w-full gap-8 ">
                <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
                  <div className="grid items-center justify-center grid-cols-2 gap-4">
                    <div className="m-auto">
                      <Image
                        src={image}
                        alt={title}
                        width="40px"
                        height="40px"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                      <h3 className="text-[#01d293] font-bold">{title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
