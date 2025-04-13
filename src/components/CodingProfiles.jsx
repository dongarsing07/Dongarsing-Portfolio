import React from 'react';
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

const CodingProfiles = () => {
  return (
    <section
      id="coding"
      className="relative min-h-screen bg-[#0a0f1c] text-white px-6 py-20 overflow-hidden"
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

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400">
          My Coding Profiles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LeetCode */}
          <div className="bg-[#101827] p-6 rounded-xl border border-yellow-400/20 hover:shadow-[0_0_20px_#facc15] transition-transform duration-300 hover:scale-105">
            <SiLeetcode className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
            <p className="text-sm text-gray-400 mb-4"></p>
            <a
              href="https://leetcode.com/u/dongarsing07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-semibold transition"
            >
              Visit Profile
            </a>
          </div>

          {/* CodeChef */}
          <div className="bg-[#101827] p-6 rounded-xl border border-purple-400/20 hover:shadow-[0_0_20px_#a78bfa] transition-transform duration-300 hover:scale-105">
            <SiCodechef className="text-purple-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">CodeChef</h3>
            <p className="text-sm text-gray-400 mb-4">1000+ problems</p>
            <a
              href="https://www.codechef.com/users/comrade_08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold transition"
            >
              Visit Profile
            </a>
          </div>

          {/* HackerRank */}
          <div className="bg-[#101827] p-6 rounded-xl border border-green-400/20 hover:shadow-[0_0_20px_#22c55e] transition-transform duration-300 hover:scale-105">
            <SiHackerrank className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">HackerRank</h3>
            <p className="text-sm text-gray-400 mb-4"></p>
            <a
              href="https://www.hackerrank.com/profile/dongarsingpatil1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold transition"
            >
              Visit Profile
            </a>
          </div>

          {/* GeeksforGeeks */}
          <div className="bg-[#101827] p-6 rounded-xl border border-green-300/20 hover:shadow-[0_0_20px_#86efac] transition-transform duration-300 hover:scale-105">
            <SiGeeksforgeeks className="text-green-300 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">GeeksforGeeks</h3>
            <p className="text-sm text-gray-400 mb-4"></p>
            <a
              href="https://www.geeksforgeeks.org/user/dongarsinytt8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-400 hover:bg-green-500 text-black px-4 py-2 rounded-md font-semibold transition"
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
