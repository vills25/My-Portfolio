import React from 'react';
import './About.css'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 mt-16">About Me</h2>

        <p className="text-lg text-center text-gray-600 mb-8">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </p>

        {/* Main Content: Intro and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Introduction */}
          <div>
            <h3 className="text-2xl font-bold mb-3 ml-5">Get to know me!</h3>
            <p className="text-lg text-gray-700 leading-relaxed p-5  ml-10 p-10;">
              I have learned ReactJS Development and Python development with Django Framework and REST API Integration. I have a background in React Development and Python Development along with MySQL Database and Javascript. I am passionate about leveraging my skills to create innovative solutions and contribute to the I.T. industry. I took an offline course to learn more about Web Development and successfully finished the course with a good score.
            </p>
          </div>

          {/* Right Column: Skills Grid*/}
          <div className="grid grid-cols-3 gap-3 justify-items-center mt-6">
            {[
              'ReactJS', 'Python', 'HTML', 
              'CSS', 'C', 'C++', 
              'MySQL', 'Django', 'REST API'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg rounded-lg text-center font-semibold text-xl"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
