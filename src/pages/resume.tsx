import React from 'react';
import { Download, Github, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Resume = () => {
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

      {/* Resume Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Download Button */}
        <div className="flex justify-end mb-8">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Md Atiquzzaman Soikat</h1>
          <h2 className="text-xl text-gray-600 mb-4">Senior Software Engineer / Frontend Technology Lead</h2>
          
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <a href="mailto:atiq@soikat.dev" className="flex items-center gap-2">
              <Mail size={16} />
              atiq@soikat.dev
            </a>
            <a href="tel:8801726207822" className="flex items-center gap-2">
              <Phone size={16} />
              8801726207822
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Dhaka, Bangladesh
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Globe size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed">
            Senior Software Engineer with 10+ years of experience specializing in frontend architecture and full-stack development. 
            Proven track record of leading teams in building scalable web applications for the hospitality industry. 
            Expert in modern JavaScript frameworks with a focus on performance optimization and accessibility. 
            Open source contributor with multiple published packages.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
          
          {/* Skipper Hospitality */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Skipper Hospitality</h3>
                <p className="text-gray-600">Senior Software Engineer/Lead Frontend Developer</p>
              </div>
              <div className="text-gray-600">Sep. 2021 – Present</div>
            </div>
            <p className="text-gray-600 mb-4">NY, USA</p>
            <p className="mb-4">Led frontend development for a leading hospitality technology company, focusing on booking engine solutions and client websites. Managed multiple cross-functional teams and architected scalable solutions.</p>
            <div className="pl-4">
              <h4 className="font-semibold mb-2">Key Projects:</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Led frontend development for scalable booking engine solutions and client websites.</li>
                <li>Architected and enhanced the custom 11ty framework for client website development.</li>
                <li>Implemented an SEO audit tool to preemptively resolve on-page SEO issues.</li>
                <li>Delivered an MVP for a booking widget leveraging Svelte and XState, optimizing routing and accessibility.</li>
                <li>Developed a CLI application to streamline the creation of client pages.</li>
                <li>Introduced unit and E2E testing frameworks to enhance product reliability.</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Technologies: Node.js, Svelte, TypeScript, React.js, Tailwind, XState, Vitest
              </p>
            </div>
          </div>

          {/* Butler Hospitality */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Butler Hospitality</h3>
                <p className="text-gray-600">Senior Frontend Engineer</p>
              </div>
              <div className="text-gray-600">Aug, 2018 – July, 2021</div>
            </div>
            <p className="text-gray-600 mb-4">NY, USA</p>
            <p className="mb-4">Led frontend development initiatives for a hotel foodservice and hospitality platform, serving as the principal frontend architect for multiple business-critical applications.</p>
            <div className="pl-4">
              <h4 className="font-semibold mb-2">Key Projects:</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Designed and implemented ButlerMenu.com, a static website enabling efficient product data handling via JSON.</li>
                <li>Developed the Butler Mobile App with React Native, streamlining order delivery processes.</li>
                <li>Delivered an Expeditor App for hotel kitchens with advanced drag-and-drop UX improvements.</li>
                <li>Maintained and enhanced OMS, the core order management system, introducing city, hub, and menu management features.</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Technologies: React, React Native, Node.js, Styled Components, Java Spring Boot, Angular.js
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Frontend Technologies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Languages: JavaScript (Expert), TypeScript (Expert), HTML5/CSS3</li>
                  <li>Frameworks: React, Svelte, Vue.js, Angular, Ember.js</li>
                  <li>Mobile: React Native</li>
                  <li>Testing Tools: Jest, Vitest, Cypress</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Backend and Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Languages: Node.js, Python, PHP</li>
                  <li>Frameworks: Express, FastAPI, Laravel</li>
                  <li>Databases: PostgreSQL, MongoDB, MySQL</li>
                  <li>Cloud/DevOps: AWS, GCP, Docker</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">American International University Bangladesh</h3>
                  <p className="text-gray-600">Bachelor in Computer Science and Engineering</p>
                </div>
                <div className="text-gray-600">March, 2012</div>
              </div>
              <p className="text-gray-600">Dhaka, BD</p>
            </div>
          </section>

          {/* Certification */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Certification</h2>
            <div>
              <a 
                href="https://www.freecodecamp.org/certification/azs06/back-end-development-and-apis"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freecodecamp Backend and APIs
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Resume;