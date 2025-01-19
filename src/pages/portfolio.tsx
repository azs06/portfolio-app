import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Sales Dashboard',
      image: '/api/placeholder/400/300',
      category: 'UI Design'
    },
    {
      id: 2,
      title: 'Customer Support Platform',
      image: '/api/placeholder/400/300',
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Cycling Illustration',
      image: '/api/placeholder/400/300',
      category: 'Illustration'
    },
    {
      id: 4,
      title: 'Fitness App',
      image: '/api/placeholder/400/300',
      category: 'Mobile App'
    },
    {
      id: 5,
      title: 'Treehouse Education',
      image: '/api/placeholder/400/300',
      category: 'Web Design'
    },
    {
      id: 6,
      title: 'Light Store',
      image: '/api/placeholder/400/300',
      category: 'E-commerce'
    },
    {
      id: 7,
      title: 'Money Transfer App',
      image: '/api/placeholder/400/300',
      category: 'Fintech'
    },
    {
      id: 8,
      title: 'Food Delivery',
      image: '/api/placeholder/400/300',
      category: 'Mobile App'
    },
    {
      id: 9,
      title: 'Home Interior App',
      image: '/api/placeholder/400/300',
      category: 'Mobile App'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">A</div>
          <div className="text-sm">Atiquzzaman Soikat</div>
        </div>
        <div className="flex gap-6">
          <a href="#" className="font-medium">Work</a>
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">Blog</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-3xl mx-auto text-center py-16 px-6">
        <div className="text-4xl mb-6">A</div>
        <p className="text-xl text-gray-700">
          Atiquzzaman Soikat is an elegant software engineer focused on building 
          brands and creating digital experiences — currently working at RformedTech.
        </p>
      </header>

      {/* Portfolio Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center text-white p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;