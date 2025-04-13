import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profile from '../images/profile-picture.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0f1c] text-white px-6 pt-20 pb-24"
    >
      {/* Profile Image */}
      <img
        src={profile}
        alt="Dongarsing Patil"
        className="w-64 h-64 rounded-full object-cover border-4 border-sky-400 mb-6 shadow-2xl hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient Name with Custom Font */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.3] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 font-poppins">
        Dongarsing Patil
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-2xl max-w-2xl text-center mb-6 text-gray-300">
        A passionate Computer Engineering student & aspiring full-stack developer 🚀
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 mb-6 text-2xl">
        <a href="https://github.com/dongarsing07" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/dongarsing-patil-358422309" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition" />
        </a>
        <a href="https://www.instagram.com/dongarsing_patil08" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-400 transition" />
        </a>
      </div>

      {/* View Projects Button */}
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        View Projects
      </Link>
    </section>
  );
};

export default Hero;
