import React from "react";
import recaat from "./techs/react.png";
import tail from "./techs/tail.jpg";
import git from "./techs/git.png";
import css from "./techs/css.png";
import htm from "./techs/html.png";
import js from "./techs/js.png";
import mng from "./techs/mng.png";

const Techs = () => {
  return (
    <div id="projects" className="flex my-20 flex-col justify-center items-center">
      <h1 className="text-[2rem] text-white">My Tech Stack</h1>
      <div className="techs gap-4 m-10 flex flex-wrap justify-center items-center">
        <img width="60" src={recaat} alt="tech" />
        <img width="60" src={tail} alt="tech" />
        <img width="60" src={htm} alt="tech" />
        <img width="60" src={git} alt="tech" />
        <img width="60" src={js} alt="tech" />
        <img width="60" src={css} alt="tech" />
        <img width="60" src={mng} alt="tech" />
      </div>
    </div>
  );
};

export default Techs;
