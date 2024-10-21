import React from 'react';
import './Home.css';

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
            React Developer<br />
          </div>
        </b>
      </div>

      <p className="description font-mono text-2xl text-white p-4">
        A Fullstack-focused Web Developer building the Frontend and Backend of Websites and Web Applications.
      </p>

      <div className="flex space-x-4 mt-5">
        <a href="https://www.linkedin.com/in/vishalsohalia-a177b2277/" className="block p-2 bg-gray-800 text-white">LinkedIn</a>
        <a href="https://github.com/vills25" className="block p-2 bg-gray-800 text-white">GitHub</a>
        <a href="https://app.daily.dev/vishalsohaliya" className="block p-2 bg-gray-800 text-white">DevApp</a>
      </div>
    </section>
  );
};

export default Home;