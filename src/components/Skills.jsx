import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava } from 'react-icons/fa';
import { SiC, SiMysql } from 'react-icons/si';
import { IoClose } from 'react-icons/io5';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      icon: <FaReact size={40} className="text-cyan-400" />,
      name: 'React',
      description:
        'React is a modern JavaScript library used for building fast and interactive user interfaces with a component-based architecture.',
    },
    {
      icon: <FaJsSquare size={40} className="text-yellow-400" />,
      name: 'JavaScript',
      description:
        'JavaScript adds interactivity to websites, enabling features like sliders, forms, animations, and logic handling.',
    },
    {
      icon: <FaHtml5 size={40} className="text-orange-500" />,
      name: 'HTML',
      description:
        'HTML is the structure of a webpage. It defines headings, paragraphs, images, and other essential elements.',
    },
    {
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
      name: 'CSS',
      description:
        'CSS styles your web content. It handles layout, colors, spacing, fonts, animations, and responsiveness.',
    },
    {
      icon: <FaPython size={40} className="text-yellow-300" />,
      name: 'Python',
      description:
        'Python is a versatile language known for simplicity and use in AI, data science, automation, and backend development.',
    },
    {
      icon: <SiC size={40} className="text-blue-300" />,
      name: 'C',
      description:
        'C is a foundational programming language known for low-level memory access and system-level development.',
    },
    {
      icon: <FaJava size={40} className="text-red-400" />,
      name: 'Java',
      description:
        'Java is a powerful, platform-independent language often used in enterprise applications and Android development.',
    },
    {
      icon: <SiMysql size={40} className="text-sky-400" />,
      name: 'MySQL',
      description:
        'MySQL is a widely-used relational database that allows storing and managing structured data efficiently.',
    },
  ];

  return (
    <section
      id="skills"
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

      {/* Skills Grid */}
      <div className="relative z-10 max-w-6xl w-full text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 leading-tight md:leading-[1.2] tracking-wide"
          style={{ paddingBottom: '0.2rem', overflow: 'visible' }}
          data-aos="fade-down"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className="cursor-pointer flex flex-col items-center text-center bg-[#101827] p-6 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/40 hover:border hover:border-sky-400"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold text-sky-400">{skill.name}</h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#111827] p-8 rounded-xl max-w-md w-full relative text-center shadow-xl border border-blue-500">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-2xl"
            >
              <IoClose />
            </button>

            <div className="text-4xl mb-4">{selectedSkill.icon}</div>
            <h3 className="text-2xl font-bold text-sky-400">{selectedSkill.name}</h3>
            <p className="mt-4 text-gray-300 text-sm">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
