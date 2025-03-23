import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Muhammad Ashfaq
              <span className="text-blue-400 block mt-2">Full Stack Developer</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Building digital solutions from Peshawar, Pakistan 🇵🇰<br />
              With 5+ years of experience creating robust web applications
              and scalable architectures.
            </p>
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'GraphQL'].map((skill) => (
              <div 
                key={skill}
                className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-400">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Journey</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-blue-400">
          {[
            { year: '2022-Present', role: ' Full Stack Developer', company: 'FreeLancer' },
            { year: '2020-2022', role: 'Web Developer', company: 'FreeLancer' },
            { year: '2019-2020', role: 'Frontend Developer', company: 'FreeLancer' }
          ].map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-4">
              <div className="md:col-span-2 mb-4 md:mb-0 md:text-right">
                <p className="text-blue-400 font-semibold">{exp.year}</p>
              </div>
              <div className="md:col-span-3 pl-6 md:pl-0">
                <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-xl mb-6 hover:bg-gray-800 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Intermediate in Computer Science
              </h3>
              <p className="text-gray-300">Amin model school and college</p>
              <p className="text-sm text-gray-500 mt-2">2023 - 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}