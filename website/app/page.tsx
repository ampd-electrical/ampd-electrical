'use client';

import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Projects', 'About', 'Contact'];

  const services = [
    {
      title: 'Panel Upgrades',
      description: 'Safe, code-compliant electrical panel upgrades for increased capacity and reliability.',
      icon: '⚡',
    },
    {
      title: 'EV Charger Installation',
      description: 'Professional installation of home and commercial EV charging stations.',
      icon: '🔌',
      image: '/charger picture.png',
    },
    {
      title: 'Residential Electrical',
      description: 'Complete electrical services for homes including rewiring, repairs, and new installations.',
      icon: '🏠',
    },
    {
      title: 'Commercial & Industrial',
      description: 'Comprehensive electrical solutions for businesses and industrial facilities.',
      icon: '🏢',
    },
  ];

  const projects = [
    {
      title: '100A to 200A Panel Upgrade',
      description: 'Complete panel upgrade installation with new breakers and safety upgrades.',
      image: 'bg-blue-600',
    },
    {
      title: 'Tesla Wall Connector',
      description: 'Professional EV charger installation for home charging station.',
      image: 'bg-green-600',
    },
    {
      title: 'Commercial Lighting',
      description: 'LED lighting retrofit for commercial office building.',
      image: 'bg-purple-600',
    },
    {
      title: 'Whole Home Surge Protection',
      description: 'Complete surge protection system installation for residential home.',
      image: 'bg-yellow-600',
    },
  ];

  const features = [
    {
      title: 'Licensed C-10 Contractor',
      icon: '',
      description: 'California state licensed and fully insured.',
    },
    {
      title: 'Quality Workmanship',
      icon: '',
      description: 'Meticulous attention to detail on every project.',
    },
    {
      title: 'Honest Communication',
      icon: '',
      description: 'Transparent pricing and clear explanations.',
    },
    {
      title: 'Fast Response Times',
      icon: '',
      description: 'Quick turnaround when you need us most.',
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Homeowner',
      text: 'AMPD Electrical was professional and efficient. They completed our panel upgrade on time and explained everything clearly. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      text: 'We hired AMPD for our commercial lighting retrofit. Their team was respectful, knowledgeable, and the work exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      text: 'Outstanding service and professionalism. They handled our EV charger installation flawlessly. Will definitely use them again.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-orange-500">AMPD</span> Electrical
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="tel:+16572897012"
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded-lg transition-all duration-200"
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.05%27%3E%3Cpath%20d=%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Professional Electrical Services <span className="text-orange-500">You Can Trust</span>
          </h1>

          <div className="mb-12 space-y-3 animate-fade-in-delay-1">
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              Residential • Commercial • Industrial
            </p>
            <p className="text-lg text-gray-400">
              Licensed California C-10 Contractor
            </p>
            <p className="text-lg text-gray-400">
              Serving Orange, Los Angeles, Riverside & San Bernardino Counties
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <a
              href="mailto:info@ampd-electrical.com?subject=Free%20Estimate%20Request"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-10 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-orange-500/50 hover:scale-105"
            >
              Request a Free Estimate
            </a>
            <a
              href="tel:+16572897012"
              className="inline-block border-2 border-orange-500 hover:bg-orange-500 hover:text-black text-orange-500 font-bold py-4 px-10 rounded-lg transition-all duration-200 text-lg hover:scale-105"
            >
              Call (657) 289-7012
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
          .animate-fade-in-delay-1 {
            animation: fadeIn 0.8s ease-out 0.4s forwards;
            opacity: 0;
          }
          .animate-fade-in-delay-2 {
            animation: fadeIn 0.8s ease-out 0.6s forwards;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">
              Comprehensive electrical solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2"
              > 
                <div className="text-5xl mb-4">
                {service.image ? (
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-32 object-cover rounded-lg"
  />
) : (
  service.icon
)}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-400">
              See what we've accomplished for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <div className={`${project.image} h-48 w-full flex items-center justify-center text-white text-4xl font-bold opacity-80 group-hover:opacity-100 transition-opacity`}>
                  📸
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AMPD Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AMPD Electrical</h2>
            <p className="text-xl text-gray-400">
              Professional expertise you can depend on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-xl text-gray-400">
              What our satisfied clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-orange-500">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-black/80 mb-12">
            Contact AMPD Electrical today for a free, no-obligation estimate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ampd-electrical.com?subject=Free%20Estimate%20Request"
              className="inline-block bg-black hover:bg-gray-900 text-orange-500 font-bold py-4 px-10 rounded-lg transition-all duration-200 text-lg hover:scale-105"
            >
              Request a Free Estimate
            </a>
            <a
              href="tel:+16572897012"
              className="inline-block bg-black/20 hover:bg-black text-black font-bold py-4 px-10 rounded-lg transition-all duration-200 text-lg hover:scale-105"
            >
              Call (657) 289-7012
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-orange-500">AMPD</span> Electrical
              </h3>
              <p className="text-gray-400">License #1145080</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-500 mb-4">Service Areas</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Orange County</li>
                <li>Los Angeles County</li>
                <li>Riverside County</li>
                <li>San Bernardino County</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-orange-500 mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">
                <a href="tel:+16572897012" className="hover:text-orange-500 transition-colors">
                  (657) 289-7012
                </a>
              </p>
              <p className="text-gray-400">
                <a
                  href="mailto:info@ampd-electrical.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@ampd-electrical.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-orange-500 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2026 AMPD Electrical. All rights reserved. Licensed California C-10 Contractor.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
