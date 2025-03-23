import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-2 group"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 rounded-lg text-white text-xl font-bold shadow-lg transition-transform duration-200 group-hover:scale-105">
                AV
              </span>
              <span className="hidden sm:inline text-gray-200 font-semibold text-lg tracking-tight">
                Muhammad Ashfaq
                <span className="block text-sm text-gray-400 font-normal">Full Stack Developer</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:-translate-y-[2px]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:-translate-y-[2px]"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:-translate-y-[2px]"
            >
              Services
            </Link>
            <Link
              to="/education"
              className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:-translate-y-[2px]"
            >
              Education
            </Link>
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <Link
              to="/"
              className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/education"
              className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 text-center bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}