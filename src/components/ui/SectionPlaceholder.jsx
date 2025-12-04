import React from 'react';

const SectionPlaceholder = ({ id, title }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="text-gray-400 text-center py-20 border border-gray-800 rounded-lg">
          Coming soon... We'll build this section next!
        </div>
      </div>
    </section>
  );
};

export default SectionPlaceholder;