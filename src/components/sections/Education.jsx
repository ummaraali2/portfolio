import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            Academic background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
            <div className="mb-4">
              <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                Master's in Informatics
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} />
                  <span>Northeastern University, Boston</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>September 2023 - December 2025</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework:</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Informatics</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">AWS (Advanced)</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Network Protection & Security</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Cloud Analytics</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">IS Design & Development</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
            <div className="mb-4">
              <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                Bachelor of Engineering in Computer Science
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} />
                  <span>Osmania University, India</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework:</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Digital Electronics</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Design & Analysis of Algorithms</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Database Design</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Embedded Systems</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">Operating Systems</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">DBMS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700">OOP & Design Patterns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;