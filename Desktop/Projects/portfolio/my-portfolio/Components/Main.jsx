import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest uppercase">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h2 className="py-4 text-gray-400 ">
            Hi, i am <span className=" text-[#01d293]">Wasami Martins</span>
          </h2>
          <h2 className="py-2 text-gray-400 ">A Front-End Web Developer</h2>
          <p className="py-4 max-w-[70%] m-auto">
            I specialize in building beautiful and user-friendly websites that
            are highly performing and responsive
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-900 hover:scale-105">
              <a
                href="https://www.linkedin.com/in/martins-wasami-9527a0234/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={20} color={"#01d293"} />
              </a>
            </div>
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-900 hover:scale-105">
              <a
                href="https://github.com/Nevomartini"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} color={"#01d293"} />
              </a>
            </div>

            <div
              className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-900 hover:scale-105"
              onClick={() => window.open("mailto:wasamimartins@gmail.com")}
            >
              <AiOutlineMail size={25} color={"#01d293"} />
            </div>

            <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-900 hover:scale-105">
              <a
                href="https://twitter.com/nevomhartini"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={20} color={"#01d293"} />
              </a>
            </div>
            <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-900 hover:scale-105">
              <a
                href="https://wa.me/07035043932"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={20} color={"#01d293"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
