import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDailydotdev } from "react-icons/si";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400">
      <div className="Introparagraph text-center">
        <h2 className="text-5xl font-bold gradient-text">HEY, I'M VISHAL SOHALIYA</h2>
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
        <a href="https://www.linkedin.com/in/vishalsohalia-a177b2277/" className="social-button flex items-center">
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <a href="https://github.com/vills25" className="social-button flex items-center">
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a href="https://app.daily.dev/vishalsohaliya" className="social-button flex items-center">
          <SiDailydotdev className="mr-2" /> DevApp
        </a>
      </div>
    </section>
  );
};

export default Home;
