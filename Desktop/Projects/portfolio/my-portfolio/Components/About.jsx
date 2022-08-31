import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="text-[#01d293] text-xl tracking-widest uppercase ">
            About
          </p>
          <h2 className="py-4">Who I Am </h2>
          <p className="py-2">
            Hello! My name is Martins and I enjoy creating things that live on
            the internet, i am creatve, design-conscious, meticulous and highly
            productive. i started self-teaching how to code barely a year ago
            and since then, i have tremendously improved my skillsets.
          </p>
          <p className="py-2">
            I am passionate about using technology to create elegant solutions
            for businesses and individuals in form of web application while also
            ensuring that user-experience and functionality are prioritized.
          </p>
          <p className="py-2">
            My goal is to become a senior frontend engineer whose experience
            would be utilized in helping aspiring developers who are looking to
            build a career in tech.
          </p>
          <p className="py-2 underline cursor-pointer">
            Check out some of my projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl  shadow-[#01d293] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={"/assets/about.jpg"}
            width={600}
            height={600}
            alt='about'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
