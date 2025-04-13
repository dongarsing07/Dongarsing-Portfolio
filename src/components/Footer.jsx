import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-gray-300 pt-12">

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
        
        {/* Column 1 - Info */}
        <div>
          <h3 className="text-2xl font-semibold text-sky-400 mb-4">Dongarsing Patil</h3>
          <p className="text-gray-400 text-sm">
            I'm a passionate Computer Engineering student crafting modern websites with React and Tailwind CSS.
            Let's build something awesome together!
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h4 className="text-xl font-semibold text-sky-300 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-400">Home</Link></li>
            <li><Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-400">About Me</Link></li>
            <li><Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-400">Skills</Link></li>
            <li><Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-400">Projects</Link></li>
            <li><Link to="qualification" smooth duration={500} className="cursor-pointer hover:text-blue-400">Qualification</Link></li>
            <li><Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Socials */}
        <div>
          <h4 className="text-xl font-semibold text-sky-300 mb-4">Connect With Me</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              dongarsingpatil07@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-white" />
              <a href="https://github.com/dongarsing07" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-blue-600" />
              <a href="https://www.linkedin.com/in/dongarsing-patil/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-500" />
              <a href="https://www.instagram.com/_.dongarsing._/" target="_blank" rel="noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Go to Top */}
      <div className="text-center mt-10">
        <Link
          to="home"
          smooth
          duration={500}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition cursor-pointer"
        >
          <FaArrowUp /> Go to Top
        </Link>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-8 pb-6">
        © {new Date().getFullYear()} Dongarsing Patil | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
