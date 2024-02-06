import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "./";

const Navbar = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center   justify-between h-[3rem] mx-10">
      <div className="lg:flex text-2xl text-red-600 hidden items-center">
        <h2>A</h2>
        <span>nurag</span>
      </div>
      <div className=" flex justify-evenly items-center  ">
        <div className=" flex gap-3 transition-all text-white lg:gap-6 items-center  ">
          {/* <p > */}
            <a className=" links cursor-pointer hover:text-red-600" href="#home">Home</a>
            <a className=" links cursor-pointer hover:text-red-600" href="#about">About</a>
            <a className=" links cursor-pointer hover:text-red-600" href="#contact">Contact</a>
            <a className=" links cursor-pointer hover:text-red-600" href="#projects">Projects</a>
          {/* </p> */}
        </div>
      </div>
      <div className="button flex  items-center cursor-pointer text-red-600">
        <a className=" font-bold text-blue-500" href={resume} download>
          Download CV
        </a>
        <AiOutlineDownload  className=" text-blue-500    font-large ml-2" />
      </div>
    </div>
  );
};

export default Navbar;
