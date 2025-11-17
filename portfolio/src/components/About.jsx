import React from 'react';
import './About.css'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-[rgb(53,52,50)] to-[rgb(0,0,0)] py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 mt-16 text-blue-400">About Me</h2>

        <p className="text-lg text-center text-gray-400 mb-8">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          <div>
            <h3 className="text-2xl text-teal-100 font-bold mb-3 ml-5">Get to know me!</h3>
            <p className="text-lg text-red-600 leading-relaxed p-5  ml-10 p-10;">
              I have skills in Python development with Django Rest Framework and REST API Integration,
              and knowledge of MySQL databases. I am passionate about leveraging my skills to create
              innovative solutions in the IT industry. To enhance my abilities, I took Tops Technologies’
              guidance to upgrade my skills in the Python Full-stack Development Program.

            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 justify-items-center mt-6 custom-font">
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
