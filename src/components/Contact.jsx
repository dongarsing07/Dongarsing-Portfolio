import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0a0f1c] text-white px-6 py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 text-center">
          Get In Touch
        </h2>

        {/* Container for Left Text and Right Form */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          
          {/* Left Section with Message */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-6 text-gray-300">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <p className="text-lg mb-10 text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you.
            </p>

            {/* Contact Info */}
            <div className="text-gray-300 space-y-2 text-sm sm:text-base">
              <p><FaEnvelope className="inline-block mr-2 text-blue-400" /> dongarsingpatil07@gmail.com</p>
              <p><FaPhoneAlt className="inline-block mr-2 text-blue-400" /> +91 9370855273</p>
              <div className="flex justify-center gap-6 pt-4 text-xl">
                <a href="https://www.linkedin.com/in/dongarsing-patil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/dongarsingpatil_07" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="md:w-1/2">
            {submitted ? (
              <div className="bg-green-700 p-6 rounded-lg shadow-lg max-w-lg mx-auto text-white font-semibold">
                ✅ Thank you for reaching out! I'll get back to you soon.
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xanevpgz"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="bg-[#101827] p-8 rounded-xl shadow-md border border-blue-500/20 space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Send me a message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
