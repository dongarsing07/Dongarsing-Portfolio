import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import akatsukiImg from '../images/Screenshot 2025-04-07 223357.png';

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0a0f1c] text-white px-6 pt-20 pb-28 overflow-hidden"
    >
      {/* Floating Squares Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-24 h-24 bg-blue-400/10 border border-blue-500/20 backdrop-blur-md animate-float rounded-md"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title + Toggle */}
        <div className="flex justify-between items-center mb-10 pb-2">
          <h2 className="text-4xl md:text-5xl font-extrabold font-sans antialiased leading-snug tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400">
            My Projects
          </h2>
          {/* Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-blue-500 text-white hover:bg-blue-500 transition duration-300"
          >
            {isDarkMode ? <BsSun /> : <BsMoon />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div
            className={`group rounded-xl p-6 transition-all duration-500 transform hover:scale-[1.03] shadow-lg border ${
              isDarkMode
                ? 'bg-[#101827] border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.4)]'
                : 'bg-white text-black border-blue-200 hover:shadow-md'
            }`}
            data-aos="fade-up"
          >
            {/* Image */}
            <img
              src={akatsukiImg}
              alt="Akatsuki Project Hub"
              className={`w-full h-48 object-cover rounded-lg mb-4 border ${
                isDarkMode ? 'border-blue-400' : 'border-blue-200'
              }`}
            />

            {/* Title */}
            <h3
              className={`text-2xl font-semibold mb-2 transition duration-300 ${
                isDarkMode ? 'text-sky-400 group-hover:text-blue-300' : 'text-blue-800'
              }`}
            >
              Akatsuki Project Hub
            </h3>

            {/* Description */}
            <p
              className={`text-sm mb-4 transition duration-300 ${
                isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-700'
              }`}
            >
              A modern hub showcasing amazing projects built with React.js and styled beautifully using Tailwind CSS.
            </p>

            {/* Tech Stack */}
            <div className={`flex justify-between text-xs mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <span>🚀 React JS</span>
              <span>🎨 Tailwind CSS</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/dongarsing07/Akatsuki-react-"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
                  isDarkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <FaGithub /> Code
              </a>

              <a
                href="https://akatsuki-react-code.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
                  isDarkMode
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                🌐 Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
