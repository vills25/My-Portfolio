import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex justify-center items-center bg-white">
      <footer className="footer">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Call on: <a href="tel:+919033478159" className="contact-link">+91 9033478159</a>
          </p>
          <p>
            Email: <a href="mailto:vishalsohaliya25@gmail.com" className="contact-link">vishalsohaliya25@gmail.com</a>
          </p>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/vishal-sohaliya-a177b2277/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/vills25" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://app.daily.dev/vishalsohaliya" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <p>&copy; 2024 Vishal Sohaliya. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
