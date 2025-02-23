import React from 'react';
import { Twitter, Github } from 'lucide-react';
import Link from 'next/link'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-xl font-semibold text-gray-700">Md Atiquzzaman Soikat</div>
        <div className="flex gap-6 hidden">
          <Link className="text-gray-700 hover:text-gray-600" href="/about">About</Link>
          <Link className="text-gray-700 hover:text-gray-600" href="/blog">Blog</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto text-center px-4 py-12">
        {/* Profile Image */}
        <div className="mb-8">
          <img 
            src="https://avatars.githubusercontent.com/u/1593663?v=4"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
        </div>

        {/* Profile Info */}
        <h1 className="text-3xl font-semibold mb-2 text-gray-700">Md. Atiquzzaman Soikat</h1>
        <h2 className="text-xl text-gray-600 mb-2">Senior Software Engineer</h2>
        <p className="text-gray-600 mb-4">Lifelong learner, Tech Enthusiast, Geek for life</p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['JavaScript', 'TypeScript', 'React', 'Svelte', 'Vue', 'Jamstack', 'Node.js'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Bio Sections */}
        <div className="space-y-6 text-gray-700">
          <div className="mb-6">
            <p className="text-xl mb-4">Hi! 👋</p>
            <p className="mb-4">
              I am currently working as a Lead Developer(Frontend) at Skipper 
              Hospitality. I am also a co-founder of ReformedTech and currently 
              serving as the CTO of the company.
            </p>
          </div>

          <p className="mb-4">
            I have been dabbling on the web for more than a decade. JavaScript is 
            the language of the web, also my primary language of choice for 
            programming. I also have experience in PHP, Python, Ruby, and Java.
            My primary choice of frontend frameworks are React and Vue.js, 
            although I have recently fallen in love with Svelte.
          </p>

          <p className="mb-4">
            Now a days my focus is on Frontend Infrastructure, tooling and 
            developing tools to make development experience smoother. I am a 
            huge fan of the Jamstack architecture. Developing performant, user 
            friendly and scaleable websites is a passion of mine.
          </p>

          <p>
            While not programming I enjoy video games, cooking and spending 
            time with my friends and family.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-2xl mx-auto flex justify-center gap-8">
          <a href="#" className="hover:text-gray-300 flex items-center gap-2">
            <Twitter size={20} />
            Twitter
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center gap-2">
            <Github size={20} />
            Github
          </a>
          <a href="#" className="hover:text-gray-300">
            StackOverflow
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;