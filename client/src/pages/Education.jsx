import React from 'react'
import { useEffect } from 'react'

function Education() {
  useEffect(() => {
    document.title = "Education | ICS Computer Science"
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-indigo-600">ICS Computer Science</span>
            Curriculum Overview
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive study of core computer science concepts with hands-on programming experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Data Structures Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src="/images/Assets/BackgroundEraser_20250126_075310598.png" 
                alt="Data Structures"
                className="h-12 w-12 mr-3"
              />
              <h2 className="text-2xl font-bold text-gray-800">Data Structures</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Arrays and Linked Lists</li>
              <li>• Stacks and Queues</li>
              <li>• Trees and Binary Search Trees</li>
              <li>• Graphs and Hash Tables</li>
              <li>• Sorting and Searching Algorithms</li>
            </ul>
          </div>

          {/* OOP Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src="/images/Assets/BackgroundEraser_20250126_075330517.png" 
                alt="OOP"
                className="h-12 w-12 mr-3"
              />
              <h2 className="text-2xl font-bold text-gray-800">OOP Programming</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Classes and Objects</li>
              <li>• Inheritance and Polymorphism</li>
              <li>• Encapsulation and Abstraction</li>
              <li>• Design Patterns</li>
              <li>• Exception Handling</li>
            </ul>
          </div>

          {/* Operating Systems Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src="/images/Assets/BackgroundEraser_20250126_075356406.png" 
                alt="OS"
                className="h-12 w-12 mr-3"
              />
              <h2 className="text-2xl font-bold text-gray-800">Operating Systems</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Process Management</li>
              <li>• Memory Management</li>
              <li>• File Systems</li>
              <li>• Concurrency</li>
              <li>• Security Fundamentals</li>
            </ul>
          </div>

          {/* C++ Programming Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-indigo-600 font-bold">C++</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">C++ Programming</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• STL Containers</li>
              <li>• Pointers and Memory Management</li>
              <li>• Object-Oriented Features</li>
              <li>• Template Metaprogramming</li>
              <li>• File I/O Operations</li>
            </ul>
          </div>

          {/* Algorithms Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src="/images/Assets/8f20d736786e405284ad2112edebf3a6.jpg" 
                alt="Algorithms"
                className="h-12 w-12 mr-3 rounded-full"
              />
              <h2 className="text-2xl font-bold text-gray-800">Algorithms</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Complexity Analysis</li>
              <li>• Divide and Conquer</li>
              <li>• Dynamic Programming</li>
              <li>• Greedy Algorithms</li>
              <li>• Graph Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
