import React from 'react';
import { Clock } from 'lucide-react';

const BlogDetailsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
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

      {/* Blog Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="text-4xl mb-2">A</div>
        </div>

        {/* Article Header */}
        <article>
          <h1 className="text-4xl font-bold text-center mb-8">
            How to learn PHP in an effective way...
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-8 text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <span>TRAVEL</span>
            </div>
            <div className="flex items-center gap-2">
              <span>March 18, 2021</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>5 MIN TO READ</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              If 2020 has taught me anything—and God help us all if it hasn't imprinted 
              a laundry list of lessons onto our nervous systems—it's a sense of 
              impermanence.
            </p>

            <p className="text-gray-700 mb-12 leading-relaxed">
              Entire industries can implode. Two of them I worked in did. So can relationships. In mine, 
              on a Tuesday we were planning details for a road trip to Montana—car ride snacks, an 
              isolated wood cabin in the Crazy Mountains, days to do nothing but be together—and by 
              Friday my future of promises and plans with my partner was gone. Most importantly 
              though, the concept of life itself is proving itself, now more than ever, fragile. It's easy, too 
              easy, how quickly everything can be taken away. This awareness of impermanence has 
              me desperate for something, anything I can cling to for comfort. So, perhaps like many 
              of you, Ive sought out refuge at home, my safe haven where I've been riding out these 
              uncertain times.
            </p>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-gray-300 pl-6 my-12">
              <p className="text-xl text-gray-600 italic mb-4">
                This awareness of impermanence has me desperate for something, anything I can 
                cling to for comfort. So, perhaps like many of you, I've sought out refuge at home, my safe 
                haven where Ive been riding out these uncertain times.
              </p>
              <footer className="text-gray-500">
                Melany Rose
              </footer>
            </blockquote>

            <h2 className="text-2xl font-bold mb-6">The Benefits of Experimenting</h2>

            <p className="text-gray-700 leading-relaxed">
              Entire industries can implode. Two of them I worked in did. So can relationships. In mine, 
              on a Tuesday we were planning details for a road trip to Montana—car ride snacks, an 
              isolated wood cabin in the Crazy Mountains, days to do nothing but be together—and by 
              Friday my future of promises and plans with my partner was gone. Most importantly 
              though, the concept of life itself is proving itself, now more than ever, fragile. It's easy, too 
              easy, how quickly everything can be taken away. This awareness of impermanence has 
              me desperate for something, anything I can cling to for comfort. So, perhaps like many 
              of you, Ive sought out refuge at home, my safe haven where I've been riding out these 
              uncertain times.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetailsPage;