import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Graduate Tutor',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: 'Oct 2024 - Dec 2025',
      description: 'Helping students with cloud computing, web development, and data visualization.',
      achievements: [
        'Guided students in designing and deploying cloud-based applications using AWS services (EC2, S3, RDS, IAM), ensuring reliability, scalability, and cost-efficiency',
        'Assisted in setting up secure network environments with Amazon VPC, subnets, route tables, security groups, and Network ACLs',
        'Mentored teams through building backend systems, including database schema design and RESTful APIs, promoting clean architecture and coding standards',
        'Tutored students in web development using JavaScript, REST APIs, and building full-stack web applications',
        'Created lab exercises and tutorials on front-end (HTML, CSS, JavaScript) and back-end development',
        'Helped students build interactive dashboards and visual reports using Excel, Tableau, and Power BI'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      role: 'Software Development Intern',
      company: 'Tech Robots Inc.',
      location: 'Cary, NC',
      period: 'Jan 2025 - July 2025',
      description: 'Developing geospatial data solutions for real estate analysis and urban planning.',
      achievements: [
        'Processed and analyzed geospatial datasets across multiple formats including GeoParquet, Shapefiles, and GeoJSON for real estate and urban planning applications',
        'Wrote and optimized spatial SQL queries to support property reporting, site selection, and zoning analysis use cases',
        'Executed data transformation pipelines converting complex spatial formats to enable seamless integration across systems',
        'Analyzed geospatial datasets examining zoning regulations, accessibility patterns, and infrastructure distributions to inform urban planning decisions',
        'Built spatial analysis workflows processing property boundaries, transportation networks, and demographic data',
        'Collaborated with stakeholders to translate real-world planning questions into spatial queries and analytical workflows'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      role: 'Research Assistant (Geospatial)',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: 'Feb 2024 - May 2024',
      description: 'Conducted geospatial analysis on highway patrol activities and racial disparities.',
      achievements: [
        'Collected, processed, and analyzed geospatial datasets including Massachusetts and Texas shapefiles, county boundaries, and highway data',
        'Utilized data from government and open-source repositories (MassGIS, MassDOT, TxDOT Open Data Portal)',
        'Conducted spatial analysis using GIS tools and Python libraries (GeoPandas, Shapely, Folium)',
        'Analyzed highway patrol activities focusing on racial disparities in police stops'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-20">
                <div className={`absolute left-6 top-2 w-5 h-5 bg-gradient-to-br ${exp.color} rounded-full border-4 border-gray-950`} />

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                  <div className="flex flex-wrap items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 mt-1">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                        <span className="text-gray-600">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 text-sm mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;