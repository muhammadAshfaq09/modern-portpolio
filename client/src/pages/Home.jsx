import React from 'react';
import { Link } from 'react-router-dom';
import image from '../pages/594c934e-7442-4b98-8af8-e848e53af202.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-blue-400 mb-4">Full Stack Developer</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Building Digital Experiences
            <span className="text-blue-400"> That Matter</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Transforming ideas into scalable web solutions with modern technologies
            and clean architecture.
          </p>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
            <a
              href="#projects"
              className="border border-blue-600 text-blue-400 hover:bg-blue-900/50 px-8 py-3 rounded-full transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
            <img src={image} alt="image" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React/Next.js', 'Node.js', 'Python', 'Html/CSS', 'mongodb/Mysql', 'javascript', 'deployment', 'MERN'].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                <p className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">
                  {skill === 'React/Next.js' && 'Frontend architecture & optimization'}
                  {skill === 'Node.js' && 'REST & GraphQL APIs development'}
                  {skill === 'Python' && 'Backend systems & data processing'}
                  {skill === 'Html/CSS' && 'Web design & development'}
                  {skill === 'mongodb/Mysql' && 'Database design & optimization'}
                  {skill === 'javascript' && 'Web application development'}
                  {skill === 'deployment' && ' Deployment & monitoring'}
                  {skill === 'TypeScript' && 'Type-safe application development'}
                  {skill === 'MERN' && 'Full stack development with MERN'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project) => (
            <div
              key={project}
              className="group relative bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300"
            >
              <div className="relative h-60 bg-gradient-to-br from-blue-600/20 to-blue-400/20">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="bg-blue-600 text-xs px-3 py-1 rounded-full">React</span>
                  <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Node.js</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SwiftCart{project}.0</h3>
                <p className="text-gray-400 mb-4">
                SwiftCart redefines online shopping with its ultra-fast, user-friendly interface. Featuring real-time inventory updates, custom deals, and secure payment options, SwiftCart makes sure you never miss out on the best deals. From browsing to checkout, everything is streamlined to give you the fastest shopping experience possible.
                </p>
                <div className="flex items-center space-x-4 text-blue-400">
                  <button className="hover:text-blue-300 transition-colors">
                    Live Demo
                  </button>
                  <span className="text-gray-600">|</span>
                  <button className="hover:text-blue-300 transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-xl font-bold">
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-400">CEO, Tech Corp</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Exceptional work! The delivered solution exceeded our expectations
                  and helped scale our operations exponentially."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Branding */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">Ashfaq vishu</h3>
              <p className="text-gray-400 text-sm">
                Full stack developer specializing in modern web solutions
                and scalable architectures.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-gray-300 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gray-300 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ashfaqvishu@gmail.com</li>
                
                <li>Peshawar, kpk, pakistan</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-gray-300 font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                  <button
                    key={platform}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2025 Ashfaq vishu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}