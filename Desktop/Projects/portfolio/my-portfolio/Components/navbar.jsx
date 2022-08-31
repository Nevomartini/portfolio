import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <h2 className="cursor-pointer">
            <span className="text-[#01d293] ">W</span>asami
          </h2>
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm  text-gray-400 uppercase hover:border-b hover:text-[#01d293] ">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm  text-gray-400 uppercase hover:border-b hover:text-[#01d293]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm text-gray-400 uppercase hover:border-b hover:text-[#01d293]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm  text-gray-400 uppercase hover:border-b hover:text-[#01d293]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm text-gray-400 uppercase hover:border-b hover:text-[#01d293]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} color={"#01d293"} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? " md:hidden fixed  left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "stick left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#3f465a] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full">
            <div>
              <Link href="/">
                <h2 className="cursor-pointe">
                  <span className="text-[#01d293]">W</span>asami
                </h2>
              </Link>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg cursor-pointer shadow- shadow-gray-800"
            >
              <AiOutlineClose size={25} color={"#01d293"} />
            </div>
          </div>
          <div className="border-b border-[#01d293] my-4">
            <p className="w-[85%] md:w-[90%] my-4">
              Let&apos;s build something legendary together
            </p>
          </div>
          <div className="flex flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  text-gray-400 uppercase hover:text-[#01d293]"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  text-gray-400 uppercase hover:text-[#01d293]"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  text-gray-400 uppercase hover:text-[#01d293]"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  text-gray-400 uppercase hover:text-[#01d293]"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  text-gray-400 uppercase hover:text-[#01d293]"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-30">
              <p className="uppercase tracking-widest text-[#01d293]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-800 hover:scale-105">
                  <FaLinkedin size={25} color={"#01d293"} />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-800 hover:scale-105">
                  <FaGithub size={25} color={"#01d293"} />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-800 hover:scale-105">
                  <AiOutlineMail size={25} color={"#01d293"} />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-800 hover:scale-105">
                  <FaTwitter size={25} color={"#01d293"} />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-800 hover:scale-105">
                  <FaWhatsapp size={25} color={"#01d293"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
