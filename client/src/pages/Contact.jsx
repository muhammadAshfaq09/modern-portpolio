import React from 'react'
import { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title = "Contact | Professional Portfolio"
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Let's connect and discuss opportunities in software development and computer science
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Methods */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Direct Contact</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:your-email@example.com" className="text-indigo-600 hover:text-indigo-500">
                  ashfaqvishu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-indigo-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-500">
                  
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Social Profiles</h2>
            
            <div className="space-y-4">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="h-6 w-6 text-gray-800 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-600 hover:text-gray-900">GitHub Profile</span>
              </a>

              <a href="https://linkedin.com/in/muhammad-ashfaq-vishu" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="h-6 w-6 text-blue-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-gray-600 hover:text-gray-900">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
