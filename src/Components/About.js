import React from "react";
import img from "./img.jpg";
import resume from "./Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <div
      id="about"
      className="text-white flex  justify-center items-center flex-col lg:flex-row"
    >
      <div className="  w-[100%] lg:w-[80%] flex flex-col justify-center">
        <div className="flex p-4">
          <div className="h-16 w-1 mr-2 bg-red-800"></div>
          <div>
            <h1 className="text-2xl">About Me</h1>
            <p>A self Taught Full Stack Developer</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col p-2 lg:p-6 ">
          <div className="myImg hidden lg:block rounded-lg">
            <img width="300" src={img} alt="" />
          </div>
          <div className="myinfo ml-1 lg:ml-6">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              cum doloremque voluptas ipsam molestiae nam saepe tempora veniam!
              Voluptas placeat quia tenetur dolorem? Delectus architecto veniam
              ullam magni quaerat nobis?
            </div>
            <div className="aboutinfo text-red-600 flex flex-col justify-center items-cnter pt-5">
              <h1>Residence : Lucknow</h1>
              <h1>
                {" "}
                E-mail :
                <a href="mailto:avianurag.721@gmail.com">
                  avianurag.721@gmail.com
                </a>
              </h1>
              <h1>Education : BCA-2024</h1>
              <div className="button text-white flex  items-center cursor-pointer ">
                <a href={resume} download> 
                  Download CV
                </a>
                <AiOutlineDownload className="font-large ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
