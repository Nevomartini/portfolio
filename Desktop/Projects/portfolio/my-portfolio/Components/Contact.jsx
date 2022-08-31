import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { GiTie } from "react-icons/gi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] px-2 py-16 w-full">
        <p className="text-[#01d293] text-xl tracking-widest uppercase flex justify-center items-center text-center font-extrabold">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-800 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105 bg-blend-multiply"
                  src={"/assets/martins1.jpg"}
                  alt="martins"
                  width={600}
                  height={600}
                />
              </div>
              <div>
                <h2 className="py-2"> Wasami Martins</h2>
                <p>Front-End Developer</p>
                <p>
                  <a
                    className="flex items-center justify-center px-2 py-1 my-3 bg-[#01d293] rounded-full"
                    href="/assets/skills/Wasami Martins Resume.pdf"
                    download="Wasami Martins Resume.pdf"
                  >
                    <GiTie className="w-6 h-6" /> Download Resume
                  </a>
                </p>
                <p>
                  I am available for freelance or full-time positions. Contact
                  me lets talk.
                </p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-800 rounded-xl lg:p-4">
            <div className="p-4">
              <div className="flex flex-col py-2">
                <label className="uppercase text-[#01d293] font-semibold text-sm">
                  Phone Number
                </label>

                <h3 className="py-2 text-2xl">(+234) 7035043932</h3>
                <h3 className="text-2xl">(+234) 9166161258</h3>

                <label className="uppercase text-[#01d293] font-semibold text-sm ">
                  Email
                </label>
                <h3 className="py-2 text-2xl">wasamimartins@gmail.com</h3>
                <button
                  className="bg-gradient-to-r from-[#01d293] to-[#65a28f] text-[#fff] w-8/12 rounded-full py-2 px-5 my-2 md:w-full focus:outline-none  shadow-sm shadow-gray-900 uppercase"
                  onClick={() => window.open("mailto: wasamimartins@gmail.com")}
                >
                  Email me
                </button>
                <div>
                  <p className="uppercase pt-8 text-[#01d293]">
                    connect with me
                  </p>
                  <div className="flex items-center justify-between py-2">
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
                      onClick={() =>
                        window.open("mailto:wasamimartins@gmail.com")
                      }
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
