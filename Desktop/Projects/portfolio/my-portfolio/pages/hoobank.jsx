// @ts-nocheck

import React from "react";
import bankImg from "../public/assets/projects/bank.png";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const hoobank = () => (
  <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0  left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
        <Image
          className="absolute z-1 "
          src={bankImg}
          alt="bank"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
        <p className="text-[#01d293]">project</p>
        <h2>Overview </h2>
        <p>
          A responsive React JS application consisting of a stunning hero
          section, high-quality assets and gradients, business stats, reusable
          feature sections with call-to-action buttons, testimonials, and more!
        </p>
        <a
          href="http://hoobank2.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
        </a>
        <a
          href="http://github.com/Nevomartini/bank_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-2 mt-4">Code</button>
        </a>
      </div>
      <div className="col-span-4 md:col-span-1 rounded-xl p-4 shadow-xl shadow-[#01d293]">
        <div className="p-2">
          <p className="pb-2 font-bold text-center">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="flex items-center ">
              <RiRadioButtonFill color={"#01d293"} className="pr-1" /> Next Js
            </p>
            <p className="flex items-center">
              <RiRadioButtonFill color={"#01d293"} className="pr-1" /> Tailwind
            </p>
            <p className="flex items-center">
              <RiRadioButtonFill color={"#01d293"} className="pr-1" />{" "}
              Javascript
            </p>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  </div>
);

export default hoobank;
