import React from 'react';
import './Project.css';
import ProjectImg1 from './ProjectsIMG1.jpg';
import ProjectImg2 from './ProjectsIMG2.jpg';
import ProjectImg3 from './ProjectsIMG3.jpg';
import ProjectImg4 from './ProjectsIMG4.jpg';

const projects = [
  {
    title: 'Medilab',
    description: 'Developed this website for a local medical laboratory by applying the various skill which resulted in the improvement of the website performance.',
    image: ProjectImg1,
    link: 'https://vishalsohaliyamedicenter.pythonanywhere.com/dashboard/dashboard_view/'
  },
  {
    title: 'Healthify Portal',
    description: 'Developed this website for a local medical by applying the various skill which resulted in the improvement of the website performance.',
    image: ProjectImg2,
    link: '#'
  },
  {
    title: 'Student Registration UI',
    description: 'This web-based application provides a user-friendly interface for efficiently managing student information. A clean and organized layout facilitates easy navigation and data entry.',
    image: ProjectImg3,
    link: 'https://github.com/vills25/React-JS/tree/main/student-data'
  },
  {
    title: 'To-Do List',
    description: 'This web-based application provides a simple and effective way to manage your daily tasks. A minimalist design ensures a focused and distraction-free experience.',
    image: ProjectImg4,
    link: 'https://github.com/vills25/tops-assignment/tree/main/Frontend/Frontend%20Assignments/React%20JS/Lists%2C%20Hooks%2C%20Local%20storages%2C%20Api/todo-list'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section bg-gray-100">
      <h2 className="section-title text-4xl font-bold mb-8">Projects</h2>
      <p className='ProjectParagraph'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      {projects.map((project, index) => (
        <div className="project-card flex flex-col lg:flex-row items-center mb-16" key={index}>

          <div className="project-image w-full lg:w-1/2 mb-4 lg:mb-0">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          <div className="project-content w-full lg:w-1/2 lg:pl-12">
            <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
            <p className="text-lg mb-6">{project.description}</p>
            <a href={project.link} className="view-insight-btn">
              View Details
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
