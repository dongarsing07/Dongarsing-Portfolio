import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { id: 1, name: 'Home', to: 'home' },
    { id: 2, name: 'About Me', to: 'about' },
    { id: 3, name: 'Skills', to: 'skills' },
    { id: 4, name: 'Projects', to: 'projects' },
    { id: 5, name: 'Coding Profiles', to: 'coding' }, // ✅ NEW LINK ADDED
    { id: 6, name: 'Qualification', to: 'qualification' },
    { id: 7, name: 'Contact Me', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Dongarsing Patil</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:text-blue-400 font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-gray-800 px-4 pt-4 pb-6 space-y-4 shadow">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="block text-white hover:text-blue-400 font-medium"
                onClick={() => setNavOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
