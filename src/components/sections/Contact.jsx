import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a href="mailto:ummaraali2020@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all group">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400 text-sm">ummaraali2020@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/ummaraali2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all group">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-400 text-sm">github.com/ummaraali2</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ummara-ali-syeda-157469219/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all group">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-400 text-sm">linkedin.com/in/ummara-ali-syeda</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-blue-500 focus:outline-none" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-blue-500 focus:outline-none" placeholder="your.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;