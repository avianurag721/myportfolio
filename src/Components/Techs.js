import React from "react";
import recaat from "./techs/react.png";
import tail from "./techs/tail.jpg";
import git from "./techs/git.png";
import css from "./techs/css.png";
import htm from "./techs/html.png";
import js from "./techs/js.png";
import mng from "./techs/mng.png";
import redux from "./techs/redux.jpg";
import express from "./techs/express.png";
import mongo from "./techs//mongo.png";


const Techs = () => {
  const techs=[express,recaat,tail,git,css,htm,js,mng,redux,mongo]
  return (
    <div id="projects" className="flex my-20 flex-col justify-center items-center">
      <h1 className="text-[2rem] my-4 font-bold font-serif italic  text-red-500">My Tech Stack</h1>
      <div className="techs gap-4 m-10 w-full lg:max-w-[80%] flex flex-wrap justify-center items-center">
        {
          techs.map((item,index)=><img key={index}  className=" w-[60px] lg:w-[110px]" src={item} alt="tech" />)
        }
      </div>
    </div>
  );
};

export default Techs;
