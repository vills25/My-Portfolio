import React, { useState } from 'react';
import { Link } from 'react-scroll';
import profilePic from './Pic.jpg';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="bg-white bg-opacity-60 backdrop-blur-lg fixed w-full shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="rounded-full w-10 h-10 mr-4 border-2 border-white"
          />
          <h1 className="text-2xl font-bold text-gradient">VISHAL SOHALIYA</h1>
        </div>

        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className={`navbar-button ${activeLink === 'home' ? 'active' : ''}`}
              activeClass="active"
              spy={true} 
              onSetActive={() => setActiveLink('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className={`navbar-button ${activeLink === 'about' ? 'active' : ''}`}
              activeClass="active"
              spy={true} 
              onSetActive={() => setActiveLink('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className={`navbar-button ${activeLink === 'projects' ? 'active' : ''}`}
              activeClass="active"
              spy={true} 
              onSetActive={() => setActiveLink('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className={`navbar-button ${activeLink === 'contact' ? 'active' : ''}`}
              activeClass="active"
              spy={true} 
              onSetActive={() => setActiveLink('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
