import React from 'react';
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">A</div>
          <div className="text-sm">Atiquzzaman Soikat</div>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600">Work</a>
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">Blog</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-center items-center mb-8">
          <div className="text-center">
            <div className="text-2xl mb-2">A</div>
            <h1 className="text-3xl font-bold">About Me</h1>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Image and Social Links */}
            <div>
              <img 
                src="/api/placeholder/400/500"
                alt="Profile"
                className="w-full rounded-lg mb-4"
              />
              <div className="flex gap-4 justify-center">
                <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">Atiquzzaman Soikat</h2>
                <p className="text-gray-600">Software Engineer</p>
                <p className="mt-4 text-gray-700">
                  Hello, For over a decade, I've helped businesses to craft honest, 
                  emotional experiences through strategy, brand development, graphic 
                  design, and web design.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Job Experience (2009-Ongoing)</h3>
                <div className="space-y-4">
                  {[
                    {
                      period: '2018-Present',
                      title: 'Chief Technology Officer',
                      company: 'ReformedTech'
                    },
                    {
                      period: '2018-Present',
                      title: 'Senior Software Engineer',
                      company: 'Butler Hospitality'
                    },
                    {
                      period: '2018-Present',
                      title: 'Software Engineer',
                      company: 'Jetaport'
                    }
                  ].map((job, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm">
                        {job.period}
                      </div>
                      <div>
                        <div className="font-medium">{job.title}</div>
                        <div className="text-gray-600 text-sm">{job.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  {[
                    {
                      period: '2012-2016',
                      degree: 'BSC Engineering',
                      institution: 'American International University-AIUB'
                    },
                    {
                      period: '2010-2012',
                      degree: 'H.S.C',
                      institution: 'Sir Sreshtha Noor Mohammad Public College'
                    }
                  ].map((edu, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm">
                        {edu.period}
                      </div>
                      <div>
                        <div className="font-medium">{edu.degree}</div>
                        <div className="text-gray-600 text-sm">{edu.institution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    Websites & platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    Mobile applications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    Design conspect
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    Strategy & branding
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <div className="grid grid-cols-4 gap-4">
                  {['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT', 'REACT', 'BOOTSTRAP', 'GIT', 'FIGMA'].map((skill) => (
                    <div key={skill} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg mb-2"></div>
                      <div className="text-sm text-gray-600">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;