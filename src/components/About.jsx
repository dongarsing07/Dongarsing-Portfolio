import React from 'react';
import profile from '../images/about me.jpg';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0a0f1c] text-white px-6 py-20 flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
        {/* Profile Image (Rectangular) */}
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src={profile}
            alt="Dongarsing Patil"
            className="w-72 h-96 md:w-80 md:h-[26rem] object-cover rounded-lg shadow-xl border-4 border-sky-400 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Blue Vertical Line */}
        <div className="hidden md:flex justify-center">
          <div className="w-1 h-60 bg-blue-400 animate-pulse rounded-full shadow-lg shadow-blue-400" />
        </div>

        {/* About Text */}
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400">
            About Me
          </h2>

          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            I'm <span className="font-semibold text-white">Dongarsing Patil</span>, a 2nd-year Computer Engineering student at R C Patel Institute of Technology, Shirpur. I'm passionate about coding, leadership, and innovation. I love building projects, solving real-world problems, and leveling up through hackathons and tech events 💻🔥
          </p>

          <ul className="text-gray-400 mb-6 space-y-1">
            <li><span className="text-white font-semibold">🎓 College:</span> R C Patel Institute of Technology</li>
            <li><span className="text-white font-semibold">📍 Location:</span> Shirpur, Maharashtra</li>
            <li><span className="text-white font-semibold">💡 Skills:</span> HTML, CSS, JS, React, Tailwind, Python</li>
            <li><span className="text-white font-semibold">🚀 Passion:</span> AI, Hackathons, Web Dev, Leadership</li>
          </ul>

          <a
  
  href="/Dongarsing CV's.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
>
  📄 Dowload Resume
</a>



        </div>
      </div>
    </section>
  );
};

export default About;
