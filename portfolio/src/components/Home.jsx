import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDailydotdev } from "react-icons/si";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#FFDAB9] to-[#008080]">
      <div className="Introparagraph text-center">
        <h2 className="text-5xl font-bold gradient-text bg-gradient-to-r from-[#003366] to-[#FF6600]">
          HEY, I'M VISHAL SOHALIYA
        </h2>
      </div>

      <div className="Iam">
        <b>
          <div className="innerIam">
            Fullstack Developer<br />
            Python Developer<br />
            ReactJS Developer<br />
          </div>
        </b>
      </div>

      <p className="description font-mono text-2xl text-white p-4">
        A Fullstack-focused Web Developer building the Frontend and Backend of Websites and Web Applications.
      </p>

      <div className="flex space-x-4 mt-5">
        <a href="https://www.linkedin.com/in/vishalsohalia-a177b2277/" className="social-button flex items-center hover:bg-cyan-500">
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <a href="https://github.com/vills25" className="social-button flex items-center">
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a href="https://app.daily.dev/vishalsohaliya" className="social-button flex items-center hover:bg-fuchsia-800">
          <SiDailydotdev className="mr-2" /> DevApp
        </a>
      </div>
      <div className="wave-svg absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#00f260" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,202.7C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Home;
