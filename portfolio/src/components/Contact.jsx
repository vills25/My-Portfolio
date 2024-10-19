import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex justify-center items-center bg-white">
      <footer className="footer">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Call on: +91 9033478159</p>
          <p>Email: vishalsohaliya25@gmail.com</p>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/vishal-sohaliya-a177b2277/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/vills25"><i className="fab fa-github"></i></a>
          <a href="https://app.daily.dev/vishalsohaliya"><i className="fab fa-twitter"></i></a>
        </div>

        <p>&copy; 2024 Vishal Sohaliya. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
