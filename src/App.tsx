import React, { useState } from 'react';
import { Code2, Rocket, Palette, MessageSquare, ArrowRight, Globe, Zap, Users, Mail, Phone, MapPin, Check, User, BookOpen, ThumbsUp } from 'lucide-react';

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
      default:
        return <HomePage />;
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

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              The loom
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe className="w-8 h-8" />}
              title="Web Design"
              description="Modern, responsive websites that make a lasting impression."
              bulletPoints={[
                "Custom designs tailored to your brand.",
                "Mobile-friendly and responsive layouts.",
                "User  experience focused design."
              ]}
            />
            <ServiceCard
              icon={<Code2 className="w-8 h-8" />}
              title="Web Development"
              description="Custom websites built with the latest technologies."
              bulletPoints={[
                "Robust and scalable web applications.",
                "Integration with various APIs.",
                "Ongoing support and maintenance."
              ]}
            />
            <ServiceCard
              icon={<Rocket className="w-8 h-8" />}
              title="SEO Optimization"
              description="Improve your visibility in search results."
              bulletPoints={[
                "Keyword research and analysis.",
                "On-page and off-page SEO strategies.",
                "Performance tracking and reporting."
              ]}
            />
            <ServiceCard
              icon={<Palette className="w-8 h-8" />}
              title="Brand Strategy"
              description="Build a brand that connects with your audience."
              bulletPoints={[
                "Comprehensive brand audits.",
                "Target audience identification.",
                "Creative brand messaging."
              ]}
            />
            <ServiceCard
              icon={<Zap className="w-8 h-8" />}
              title="Digital Marketing"
              description="Smart marketing strategies for the digital world."
              bulletPoints={[
                "Social media marketing campaigns.",
                "Email marketing strategies.",
                "Content marketing and strategy."
              ]}
            />
            <ServiceCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="Social Media"
              description="Engage and grow your social media presence."
              bulletPoints={[
                "Content creation and curation.",
                "Community management.",
                "Analytics and performance tracking."
              ]}
            />
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
            />
            <TestimonialCard
              name="Priya Patel"
              role="Founder, Green Earth"
              testimonial="We saw a significant increase in our website traffic after working with The Webloom. Highly recommend their SEO services."
            />
            <TestimonialCard
              name="Vikram Singh"
              role="Marketing Head, Urban Fit"
              testimonial="Their digital marketing strategies helped us reach a wider audience and boost our sales."
            />
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
function ServiceCard({ icon, title, description, bulletPoints }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-600">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
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
          />
          <TestimonialCard
            name="Priya Patel"
            role="Founder, Green Earth"
            testimonial="We saw a significant increase in our website traffic after working with The Webloom. Highly recommend their SEO services."
          />
          <TestimonialCard
            name="Vikram Singh"
            role="Marketing Head, Urban Fit"
            testimonial="Their digital marketing strategies helped us reach a wider audience and boost our sales."
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
            icon={<User className="w-8 h-8" />}
          />
          <TeamMemberCard
            name="Abhishek Pawar"
            role="CTO & Cofounder"
            icon={<User className="w-8 h-8" />}
          />
          <TeamMemberCard
            name="Darshan Mali"
            role="CMO & Cofounder"
            icon={<User className="w-8 h-8" />}
          />
          <TeamMemberCard
            name="Samarth Kuwar"
            role="CIO & Cofounder"
            icon={<User className="w-8 h-8" />}
          />
        </div>
      </div>
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
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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

function TestimonialCard({ name, role, testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-purple-600 mb-4">
        <ThumbsUp className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 font-semibold mb-2">{role}</p>
      <p className="text-gray-600">{testimonial}</p>
    </div>
  );
}

function TeamMemberCard({ name, role, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

export default App;
