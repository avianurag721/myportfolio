import React from "react";
import ecomUI from "./projects/ecomUI.jpg";
import ecom from "./projects/ecom.jpg"
import login from "./projects/login.jpg";
import passwrd from "./projects/password.jpg";
import EDTech from "./projects/stdyhub.jpg";
import ecom_2 from "./projects/ECOM 2.jpg";

const Projects = () => {
  return (
    <div id="projects" className=" w-[100%]  my-10 flex flex-col lg:flex-row justify-center items-center">
      <div className=" w- flex flex-col justify-center items-center">
        <h1 className="text-[2rem] my-4 font-bold font-serif italic  text-red-500">Projects</h1>
        <div className=" flex flex-wrap justify-center items-center gap-2 ">
          <div className=" bg-slate-400 min-h-[18rem] p-4 rounded-md 1stproject flex-col justify-around flex ">
            <h1 className="text-black">ED-Tech Platform</h1>
            <img src={EDTech} width="300" alt="password" />
            <button className="button mt-4 text-red-600 bg-slate-800 mx-20 rounded-md">
              <a href="https://studinotion.netlify.app/" rel="noreferrer" target='_blank'>Live Link</a>
            </button>
          </div>
          <div className=" bg-slate-400 min-h-[18rem] p-4 rounded-md 1stproject flex-col justify-around flex ">
            <h1 className="text-black">Password Generator</h1>
            <img src={passwrd} width="300" alt="password" />
            <button className="button mt-4 text-red-600 bg-slate-800 mx-20 rounded-md">
              <a href="https://avipassgeneratior.netlify.app/" rel="noreferrer" target='_blank'>Live Link</a>
            </button>
          </div>
          <div className=" bg-slate-400 min-h-[18rem] p-4 rounded-md 1stproject flex-col justify-around flex ">
            <h1 className="text-black">Login & SignUp Form</h1>
            <img src={login} width="300" alt="password" />
            <button className="button mt-4 text-red-600 bg-slate-800 mx-20 rounded-md">
              <a href="https://logins-form.netlify.app/" rel="noreferrer" target='_blank'>Live Link</a>
            </button>
          </div>
          <div className=" bg-slate-400 min-h-[18rem] p-4 rounded-md 1stproject flex-col justify-around flex ">
            <h1 className="text-black">Ui of a E-comemrce Using Tailwind</h1>
            <img src={ecomUI} width="300" alt="password" />
            <button className="button mt-4 text-red-600 bg-slate-800 mx-20 rounded-md">
              <a href="https://lucknow-furniture.netlify.app/" rel="noreferrer" target='_blank'>Live Link</a>
            </button>
          </div>
          <div className=" bg-slate-400 min-h-[18rem] p-4 rounded-md 1stproject flex-col justify-around flex ">
            <h1 className="text-black">E-commerce FrontEnd using react.js & <br /> Tailwind</h1>
            <img src={ecom_2} width="300" alt="password" />
            <button className="button my-auto text-red-600 bg-slate-800 mx-20 rounded-md">
              <a href="https://rablosite.netlify.app/" rel="noreferrer" target='_blank'>Live Link</a>
            </button>
          </div>
          <div className=" bg-slate-400 min-h-[18rem] p-4 rounded-md 1stproject flex-col justify-around flex ">
            <h1 className="text-black">E-commerce FrontEnd using react.js & <br /> Tailwind</h1>
            <img src={ecom} width="300" alt="password" />
            <button className="button my-auto text-red-600 bg-slate-800 mx-20 rounded-md">
              <a href="https://rablosite.netlify.app/" rel="noreferrer" target='_blank'>Live Link</a>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
