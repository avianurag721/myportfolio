import React from "react";
import img from "./IMG_20240101_125526.png";

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-20 m-2 lg:m-20 items-center   justify-around  ">
      <div className="info  ">
        <h3 className="flex text-red-600 justify-cente font-bold items-center">
          -Creative Website
        </h3>
        <p className="text-2xl text-white">"Empowering Your Web identity"</p>

        <h2 className="text-sm m-0 text-red-600 lg:ml-6">
          We Develope Websites That Ignite Your Bussiness
        </h2>
      </div>
      <div className="img mt-8  transition-all ease-in overflow-hidden ">
        <img className="bg-cover rounded-2xl" src={img} width="200" alt="myImage"/>
      </div>
    </div>
  );
};    

export default Home;

