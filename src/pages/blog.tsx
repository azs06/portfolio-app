import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to learn PHP in an effective way..',
      description: 'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      category: 'PHP',
      date: 'March 18, 2021',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Why I must recommedned this book..',
      description: 'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      category: 'BOOK REVIEW',
      date: 'March 18, 2021',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Hiking in Nepal with my best friend..',
      description: 'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      category: 'TRAVEL',
      date: 'March 18, 2021',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'How to reach your goal without any distractions..',
      description: 'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      category: 'MOTIVATION',
      date: 'March 18, 2021',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Best websites to find out suteable job near you..',
      description: 'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      category: 'JOB',
      date: 'March 18, 2021',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Why WordPress lead the Website industry..',
      description: 'We create native mobile apps with a focus on natural gestures and interactions with the user.',
      category: 'WORDPRESS',
      date: 'March 18, 2021',
      image: '/api/placeholder/400/300'
    }
  ];

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
          <a href="#" className="font-medium">Blog</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-12">
        <div className="text-2xl mb-2">A</div>
        <h1 className="text-3xl font-bold">Blog</h1>
      </header>

      {/* Blog Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 hover:text-gray-600">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="uppercase">{post.category}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-900 text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </main>
    </div>
  );
};

export default Blog;