import React from 'react';
import { blogPosts } from '../data';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights and updates from The Webloom team on digital marketing,
            web development, and technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {post.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      {post.author}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{post.content}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
