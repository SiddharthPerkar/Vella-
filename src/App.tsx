import React, { useState } from 'react';
import { Code2, Rocket, Palette, MessageSquare, ArrowRight, Globe, Zap, Users, Mail, Phone, MapPin, User, BookOpen, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch(currentPage) {
      case 'contact':
        return <ContactPage />;
      case 'services':
        return <ServicesPage />;
      case 'blog':
        return <BlogPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'team':
        return <TeamPage />;
      case 'careers':
        return <CareerPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-purple-600">The Webloom</div>
            <div className="flex gap-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`${currentPage === 'home' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className={`${currentPage === 'services' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Services
              </button>
              <button 
                onClick={() => setCurrentPage('blog')}
                className={`${currentPage === 'blog' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Blog
              </button>
              <button 
                onClick={() => setCurrentPage('testimonials')}
                className={`${currentPage === 'testimonials' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => setCurrentPage('team')}
                className={`${currentPage === 'team' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Our Team
              </button>
              <button 
                onClick={() => setCurrentPage('careers')}
                className={`${currentPage === 'careers' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Careers
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`${currentPage === 'contact' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {renderContent()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The Webloom</h3>
              <p className="text-gray-400">
                Transform your digital presence with The Webloom.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>SEO Optimization</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Webloom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Transform Your Digital Presence with The Webloom
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              We specialize in creating stunning websites, optimizing for search engines, and delivering digital marketing strategies that drive results.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold">2+ Years of Experience</h3>
              <p className="text-gray-600">We have been delivering quality services for over two years.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold">20+ Projects Completed</h3>
              <p className="text-gray-600">Our portfolio includes a variety of successful projects.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold">4.9/5 Ratings</h3>
              <p className="text-gray-600">Our clients love us! Check our reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <ServiceCard
                icon={<Globe className="w-8 h-8" />}
                title="Web Design"
                description="Modern, responsive websites that make a lasting impression."
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <ServiceCard
                icon={<Code2 className="w-8 h-8" />}
                title="Web Development"
                description="Custom websites built with the latest technologies."
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <ServiceCard
                icon={<Rocket className="w-8 h-8" />}
                title="SEO Optimization"
                description="Improve your visibility in search results."
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <ServiceCard
                icon={<Palette className="w-8 h-8" />}
                title="Brand Strategy"
                description="Build a brand that connects with your audience."
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <ServiceCard
                icon={<Zap className="w-8 h-8" />}
                title="Digital Marketing"
                description="Smart marketing strategies for the digital world."
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <ServiceCard
                icon={<MessageSquare className="w-8 h-8" />}
                title="Social Media"
                description="Engage and grow your social media presence."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rahul Sharma"
              role="CEO, Tech Innovators"
              testimonial="The Webloom transformed our online presence. Their team is highly professional and delivered beyond our expectations."
              image="https://randomuser.me/api/portraits/men/1.jpg"
              projectImage="https://via.placeholder.com/300x200?text=Project+1"
            />
            <TestimonialCard
              name="Priya Patel"
              role="Founder, Green Earth"
              testimonial="We saw a significant increase in our website traffic after working with The Webloom. Highly recommend their SEO services."
              image="https://randomuser.me/api/portraits/men/2.jpg"
              projectImage="https://via.placeholder.com/300x200?text=Project+2"
            />
            <TestimonialCard
              name="Vikram Singh"
              role="Marketing Head, Urban Fit"
              testimonial="Their digital marketing strategies helped us reach a wider audience and boost our sales."
              image="https://randomuser.me/api/portraits/men/3.jpg"
              projectImage="https://via.placeholder.com/300x200?text=Project+3"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
          <p className="text-gray-600 text-center mb-12">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? We're here to help you succeed.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Globe className="w-8 h-8" />}
            title="Web Design"
            description="Modern, responsive websites that make a lasting impression."
          />
          <ServiceCard
            icon={<Code2 className="w-8 h-8" />}
            title="Web Development"
            description="Custom websites built with the latest technologies."
          />
          <ServiceCard
            icon={<Rocket className="w-8 h-8" />}
            title="SEO Optimization"
            description="Improve your visibility in search results."
          />
          <ServiceCard
            icon={<Palette className="w-8 h-8" />}
            title="Brand Strategy"
            description="Build a brand that connects with your audience."
          />
          <ServiceCard
            icon={<Zap className="w-8 h-8" />}
            title="Digital Marketing"
            description="Smart marketing strategies for the digital world."
          />
          <ServiceCard
            icon={<MessageSquare className="w-8 h-8" />}
            title="Social Media"
            description="Engage and grow your social media presence."
          />
        </div>
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BlogCard
            title="Top 5 Web Design Trends in 2024"
            description="Discover the latest trends in web design that will dominate 2024."
            icon={<BookOpen className="w-8 h-8" />}
          />
          <BlogCard
            title="How SEO Can Transform Your Business"
            description="Learn how SEO can help your business reach new heights."
            icon={<Rocket className="w-8 h-8" />}
          />
          <BlogCard
            title="The Importance of Social Media Marketing"
            description="Find out why social media marketing is crucial for your brand."
            icon={<MessageSquare className="w-8 h-8" />}
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialsPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Rahul Sharma"
            role="CEO, Tech Innovators"
            testimonial="The Webloom transformed our online presence. Their team is highly professional and delivered beyond our expectations."
            image="https://randomuser.me/api/portraits/men/1.jpg"
            projectImage="https://via.placeholder.com/300x200?text=Project+1"
          />
          <TestimonialCard
            name="Priya Patel"
            role="Founder, Green Earth"
            testimonial="We saw a significant increase in our website traffic after working with The Webloom. Highly recommend their SEO services."
            image="https://randomuser.me/api/portraits/men/2.jpg"
            projectImage="https://via.placeholder.com/300x200?text=Project+2"
          />
          <TestimonialCard
            name="Vikram Singh"
            role="Marketing Head, Urban Fit"
            testimonial="Their digital marketing strategies helped us reach a wider audience and boost our sales."
            image="https://randomuser.me/api/portraits/men/3.jpg"
            projectImage="https://via.placeholder.com/300x200?text=Project+3"
          />
        </div>
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <TeamMemberCard
            name="Siddharth Perkar"
            role="CEO & Cofounder"
            image="https://randomuser.me/api/portraits/men/4.jpg"
          />
          <TeamMemberCard
            name="Abhishek Pawar"
            role="CTO & Cofounder"
            image="https://randomuser.me/api/portraits/men/5.jpg"
          />
          <TeamMemberCard
            name="Darshan Mali"
            role="CMO & Cofounder"
            image="https://randomuser.me/api/portraits/men/6.jpg"
          />
          <TeamMemberCard
            name="Samarth Kuwar"
            role="CIO & Cofounder"
            image="https://randomuser.me/api/portraits/men/7.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function CareerPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <CareerCard title="Web Developer Intern" />
          <CareerCard title="App Developer Intern" />
          <CareerCard title="Content Creator" />
          <CareerCard title="Video Creator" />
          <CareerCard title="Graphic Designer Intern" />
        </div>
      </div>
    </div>
  );
}

function CareerCard({ title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">Join our team and help us create amazing digital experiences!</p>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
        Apply Now
      </button>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
          <p className="text-gray-600 text-center mb-12">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@thewebloom.com</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BlogCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, testimonial, image, projectImage }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600 font-semibold">{role}</p>
        </div>
      </div>
      <p className="text-gray-600">{testimonial}</p>
      <img src={projectImage} alt="Project" className="mt-4 rounded-lg" />
    </div>
  );
}

function TeamMemberCard({ name, role, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-xl" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div
