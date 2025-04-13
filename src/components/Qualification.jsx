import React from 'react';

const qualifications = [
  {
    title: "Bachelors in Technology – Computer Engineering",
    institution: "R. C. Patel Institute of Technology, Shirpur",
    duration: "2023 – 2027",
  },
  {
    title: "Intermediate – NDA Preparation",
    institution: "Yashotej Academy, Pune (YTA)",
    duration: "2021 – 2023",
  },
  {
    title: "Matriculation",
    institution: "Dr. V. M. Jain Madhyamik Vidyalaya, Parola",
    duration: "2016 – 2021",
  },
];

const Qualification = () => {
  return (
    <section
      id="qualification"
      className="relative bg-[#0a0f1c] text-white py-20 px-4 md:px-8"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400">
        Qualification 
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-6 md:left-7 h-full border-l-4 border-blue-500/30"></div>

        {/* Timeline Items */}
        <div className="space-y-10">
          {qualifications.map((item, index) => (
            <div key={index} className="relative pl-14 sm:pl-20 group">
              {/* Dot */}
              <div className="w-5 h-5 absolute left-2 sm:left-4 md:left-5 top-2.5 rounded-full bg-blue-500 border-4 border-blue-300 group-hover:scale-125 transition-transform duration-300 shadow-md shadow-blue-500 group-hover:shadow-blue-400"></div>

              {/* Card */}
              <div className="bg-[#101827] p-5 rounded-xl border border-blue-400/20 group-hover:border-blue-400 transition duration-300 shadow-sm hover:shadow-blue-500/30">
                <h3 className="text-xl font-semibold text-sky-400 mb-1">{item.title}</h3>
                <p className="text-gray-300">{item.institution}</p>
                <span className="text-sm text-gray-400">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
