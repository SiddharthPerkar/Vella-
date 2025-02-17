import React, { useState } from 'react';
import { Code2, Rocket, Palette, MessageSquare, ArrowRight, Globe, Zap, Users, Mail, Phone, MapPin, Check } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch(currentPage) {
      case 'contact':
        return <ContactPage />;
      case 'pricing':
        return <PricingPage />;
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
            <div className="text-xl font-bold text-purple-600">DigitalCraft</div>
            <div className="flex gap-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`${currentPage === 'home' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('pricing')}
                className={`${currentPage === 'pricing' ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
              >
                Pricing
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
              <h3 className="text-xl font-bold mb-4">DigitalCraft</h3>
              <p className="text-gray-400">
                Fresh perspectives, innovative solutions.
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
            <p>&copy; 2024 DigitalCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PricingPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {/* Basic Plan */}
          <div className="transform-style-3d hover:rotate-y-5 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-gray-600">/project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>5-page Website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Mobile Responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Basic SEO Setup</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="transform-style-3d hover:rotate-y-5 transition-transform duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8 text-white">
                <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$2,499</span>
                  <span className="opacity-80">/project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>10-page Custom Website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Advanced Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>CMS Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Advanced SEO Package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Social Media Integration</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="transform-style-3d hover:rotate-y-5 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-gray-600">/project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Unlimited Pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom Functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>E-commerce Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-16">All Plans Include</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group perspective-1000">
              <div className="relative transform-style-3d group-hover:rotate-y-180 transition-transform duration-1000 h-64">
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6">
                  <div className="text-purple-600 mb-4">
                    <Globe className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Domain & Hosting</h3>
                  <p className="text-gray-600">Free domain and hosting setup for the first year</p>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Includes:</h3>
                  <ul className="space-y-2">
                    <li>• Domain Registration</li>
                    <li>• SSL Certificate</li>
                    <li>• Cloud Hosting</li>
                    <li>• 24/7 Support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative transform-style-3d group-hover:rotate-y-180 transition-transform duration-1000 h-64">
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6">
                  <div className="text-purple-600 mb-4">
                    <Rocket className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                  <p className="text-gray-600">Basic SEO setup to help your site rank better</p>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Includes:</h3>
                  <ul className="space-y-2">
                    <li>• Keyword Research</li>
                    <li>• Meta Tags</li>
                    <li>• Site Structure</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative transform-style-3d group-hover:rotate-y-180 transition-transform duration-1000 h-64">
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6">
                  <div className="text-purple-600 mb-4">
                    <MessageSquare className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Support</h3>
                  <p className="text-gray-600">Dedicated support to help you succeed</p>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Includes:</h3>
                  <ul className="space-y-2">
                    <li>• Email Support</li>
                    <li>• Video Tutorials</li>
                    <li>• Documentation</li>
                    <li>• Monthly Check-ins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              Fresh Ideas for the Digital Age
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              We're a young, dynamic team bringing innovative web design and digital marketing solutions to help your business stand out.
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
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring fresh perspectives and innovative solutions to every project, combining creativity with technical expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              number="2+"
              title="Years Experience"
              description="Young, passionate, and dedicated to excellence"
            />
            <FeatureCard
              number="25+"
              title="Projects Completed"
              description="Growing portfolio of successful projects"
            />
            <FeatureCard
              number="100%"
              title="Client Focus"
              description="Your success is our priority"
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
              <p className="text-gray-600">hello@digitalcraft.com</p>
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

function FeatureCard({ number, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;