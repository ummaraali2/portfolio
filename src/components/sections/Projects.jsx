import React, { useState } from 'react';
import { Github, Play, ExternalLink, Image as ImageIcon } from 'lucide-react';

const Projects = () => {
  const [showModal, setShowModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Credit for Prior Learning AI Assistant',
      description: 'Comprehensive CPL system integrating Watson Assistant, watsonx.ai, Milvus vector database, and watsonx.data to automate CPL request processing through dual portals for students and advisors.',
      skills: ['Watsonx Services', 'Python', 'JavaScript', 'HTML', 'CSS', 'Langchain', 'Milvus', 'RAG', 'Vector DB'],
      github: 'https://github.com/ummaraali2/Credit-for-Prior-Learning-AI-Assistant',
      organization: 'Northeastern University & IBM Cloud',
      videos: [
        'https://github.com/user-attachments/assets/d19141b0-c3c5-4775-a6d3-87533f9654f3',
        'https://github.com/user-attachments/assets/fcfc93b7-9039-4644-b029-4cb7c437f819',
        'https://github.com/user-attachments/assets/28345918-b92f-4ec1-947c-86aeb0a44f01',
        'https://github.com/user-attachments/assets/00af5f6f-eae7-4cba-afed-b9a98125de3d'
      ],
      images: []
    },
    {
      id: 2,
      title: 'Meeting Scheduler',
      description: 'Modern meeting scheduling application with intuitive UI for seamless appointment management and calendar integration.',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js'],
      github: 'https://github.com/ummaraali2/meeting-scheduler',
      videos: [
        'https://private-user-images.githubusercontent.com/81986592/522508625-3dc41137-35c9-4692-acbd-e4507b1b0505.mov?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ4ODc4MjAsIm5iZiI6MTc2NDg4NzUyMCwicGF0aCI6Ii84MTk4NjU5Mi81MjI1MDg2MjUtM2RjNDExMzctMzVjOS00NjkyLWFjYmQtZTQ1MDdiMWIwNTA1Lm1vdj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjA0VDIyMzIwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBkYWM5NWRhMGRjYmY0NzI4NTdhYjFmZmNmZTA2MjcxNDBjOTRjNDY1NGZjZjRlM2NiOWFhMTM3ZGUzNzY1YjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.O3fJATTdKd1JmkLrnq2lqlMjmq4ri7VHY7RPnfD0t9Y',
        'https://private-user-images.githubusercontent.com/81986592/522508699-568d4fe7-d2da-4369-9c71-da8e22e16ee7.mov?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ4ODc4MjAsIm5iZiI6MTc2NDg4NzUyMCwicGF0aCI6Ii84MTk4NjU5Mi81MjI1MDg2OTktNTY4ZDRmZTctZDJkYS00MzY5LTljNzEtZGE4ZTIyZTE2ZWU3Lm1vdj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjA0VDIyMzIwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZhZmVhYjUxZWUyNWZhYmU5ODg1MTNkYzY1Njg3MjljMmEwNTBmNmUwOGViNDU3MjhjZjMwZGMyOTk1NTcwNzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.QQ4pgYlwScM2c_qIcho-5EX2DMrCOvM_XdQOnoqv9l0'
      ],
      images: []
    },
    {
      id: 3,
      title: 'MP3 Converter Microservices',
      description: 'Scalable video-to-audio conversion system using microservices architecture.',
      skills: ['Python', 'Kubernetes', 'Docker', 'RabbitMQ', 'MongoDB', 'PostgreSQL', 'Flask', 'JWT'],
      github: 'https://github.com/ummaraali2/mp3-converter-microservices',
      videos: [],
      images: [
        'https://github.com/user-attachments/assets/792314a0-88e2-49ac-b3f3-2ef81b44e4ed',
        'https://github.com/user-attachments/assets/1440a663-b05a-44b5-9333-3493c76cc680',
        'https://github.com/user-attachments/assets/6980c77f-873f-44bd-906d-b859e76034a2'
      ]
    },
    {
      id: 4,
      title: 'Crypto Web App',
      description: 'Blockchain-based web application for creating transactions.',
      skills: ['Blockchain', 'Web3', 'JavaScript', 'Node.js'],
      github: 'https://github.com/ummaraali2/CryptoWebApp',
      videos: [],
      images: []
    },
    {
      id: 5,
      title: 'Pedestrian Flow Simulator',
      description: 'Real-time simulation system visualizing pedestrian movement patterns.',
      skills: ['JavaScript', 'Node.js', 'Express.js', 'HTML5 Canvas', 'Leaflet.js'],
      github: 'https://github.com/ummaraali2/pedestrial-flow',
      videos: [],
      images: []
    },
    {
      id: 6,
      title: 'Private Recommendation System',
      description: 'Privacy-focused recommendation engine.',
      skills: ['JavaScript', 'MySQL', 'Node.js', 'Machine Learning'],
      github: 'https://github.com/ummaraali2/Private-Rec',
      videos: [],
      images: []
    },
    {
      id: 7,
      title: 'Online Bookstore',
      description: 'E-commerce platform for buying second-hand school books.',
      skills: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/ummaraali2/onlinebookstore',
      videos: [],
      images: [
        'https://user-images.githubusercontent.com/81986592/168843480-c85cfe16-80a3-4ee7-8763-8f21ae360908.PNG',
        'https://user-images.githubusercontent.com/81986592/168843494-0d1ed87c-1ddb-4f3b-9a0d-a65e8ed210c3.PNG',
        'https://user-images.githubusercontent.com/81986592/168843503-08e03f8d-9815-45ea-8a08-ec1e13952ac7.PNG'
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A collection of projects showcasing full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                    <Github size={20} />
                  </a>
                  {project.videos.length > 0 && (
                    <button onClick={() => setShowModal({ type: 'videos', project })} className="text-gray-400 hover:text-blue-400">
                      <Play size={20} />
                    </button>
                  )}
                  {project.images.length > 0 && (
                    <button onClick={() => setShowModal({ type: 'images', project })} className="text-gray-400 hover:text-blue-400">
                      <ImageIcon size={20} />
                    </button>
                  )}
                </div>
              </div>

              {project.organization && (
                <div className="text-sm text-blue-400 mb-3">{project.organization}</div>
              )}

              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-3">More Projects Available</h3>
            <p className="text-gray-400 mb-6">Explore my complete portfolio on GitHub</p>
            <a href="https://github.com/ummaraali2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg">
              <Github size={20} />
              Visit GitHub
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(null)}>
            <div className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-screen overflow-auto p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{showModal.project.title}</h3>
                <button onClick={() => setShowModal(null)} className="text-white text-3xl hover:text-gray-400">×</button>
              </div>

              {showModal.type === 'videos' && (
                <div className="space-y-6">
                  {showModal.project.videos.map((video, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Demo Video {idx + 1}</h4>
                      <div className="relative" style={{ maxHeight: '400px' }}>
                        <video 
                          controls 
                          className="w-full rounded-lg"
                          style={{ maxHeight: '400px', objectFit: 'contain' }}
                          preload="metadata"
                        >
                          <source src={video} type="video/mp4" />
                          <source src={video} type="video/quicktime" />
                          Your browser does not support video playback.
                        </video>
                      </div>
                      <a 
                        href={video} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Open in new tab
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {showModal.type === 'images' && (
                <div className="space-y-6">
                  {showModal.project.images.map((image, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Screenshot {idx + 1}</h4>
                      <img 
                        src={image} 
                        alt={`${showModal.project.title} screenshot ${idx + 1}`}
                        className="w-full rounded-lg"
                        style={{ maxHeight: '600px', objectFit: 'contain' }}
                      />
                      <a 
                        href={image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 text-sm"
                      >
                        View full size
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;