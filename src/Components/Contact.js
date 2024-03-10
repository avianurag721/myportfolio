import React from "react";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="  flex justify-evenly my-20 items-center flex-row"
    >
      <div className="social flex flex-col gap-4">
        <div className="flex gap-4 text-white">
          <AiOutlineWhatsApp className="text-green-600 text-2xl" />
          Whatsapp
        </div>
        <div className="flex gap-4 text-white">
          <AiFillLinkedin className="text-blue-600 text-2xl" />
          LinkedIn
        </div>
       
        <a href="https://github.com/avianurag721" rel="noreferrer" target="_blank" className="flex gap-4 text-white">
          <AiFillGithub className="text-white text-2xl" />
          Github
        </a>
      </div>
      <div className="contacts">
        <h1 className="text-white">Contact :-</h1>
        <div className="flex gap-4 text-white mt-4">
          <SiGmail className="text-red-400 text-2xl " />
          <a href="mailto:avianurag.721@gmail.com">-Mail US</a>
        </div>
        <div className="flex gap-4 text-white mt-2">
          <FiPhoneCall className="text-blue-400  text-2xl " />
          <a href="tel:+919140931309">-Call Us</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
