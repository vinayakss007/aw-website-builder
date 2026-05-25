'use client';

import React from 'react';

const defaultServices = [
  { title: 'Residential Sales', description: 'Expert guidance buying or selling your dream home', icon: '🏡' },
  { title: 'Commercial Properties', description: 'Office spaces, retail locations, and investment properties', icon: '🏢' },
  { title: 'Property Management', description: 'Full-service management for landlords and investors', icon: '🔑' },
  { title: 'Market Analysis', description: 'Data-driven valuations and market trend reports', icon: '📊' },
];

const defaultTestimonials = [
  { quote: 'They found us our dream home in just two weeks. The process was seamless from start to finish.', author: 'David & Karen Miller', role: 'Home Buyers' },
  { quote: 'Sold our property 15% above asking price. Their market knowledge is unmatched.', author: 'Thomas Wright', role: 'Property Seller' },
  { quote: 'As a first-time buyer, I was nervous. They made everything easy to understand and stress-free.', author: 'Amanda Foster', role: 'First-Time Buyer' },
];

const defaultTeam = [
  { name: 'Michael Sterling', role: 'Lead Agent', bio: '$50M+ in sales, 12 years of experience' },
  { name: 'Jessica Hawkins', role: 'Buyer Specialist', bio: 'Helping families find their perfect home since 2015' },
  { name: 'Daniel Park', role: 'Commercial Division', bio: 'Expert in commercial real estate and investment properties' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600', alt: 'Luxury home exterior' },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', alt: 'Modern house' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', alt: 'Beautiful property' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600', alt: 'Waterfront home' },
];

export default function RealEstateTemplate({
  businessName = 'Sterling Real Estate Group',
  heroTitle = 'Find Your Dream Home',
  heroSubtitle = 'Premium properties and expert guidance to help you find the perfect place to call home.',
  aboutText = 'Sterling Real Estate Group has been helping families and investors find the perfect properties for over a decade. With deep local market knowledge and a commitment to personalized service, we turn your real estate dreams into reality.',
  phone = '(555) 456-7890',
  email = 'hello@sterlingrealestate.com',
  address = '250 Oak Avenue, Suite 400',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const marketStats = [
    { number: '$2.4M', label: 'Avg. Sale Price' },
    { number: '340+', label: 'Homes Sold' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '12', label: 'Days Avg. on Market' },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-green-800">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#listings" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Listings</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Services</a>
              <a href="#agents" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Agents</a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Contact</a>
            </div>
            <a href="#contact" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Luxury property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#listings" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg transition-colors">
              Browse Properties
            </a>
            <a href="#contact" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg transition-colors">
              Free Consultation
            </a>
          </div>
        </div>
      </section>


      {/* Property Listings */}
      <section id="listings" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our handpicked selection of premium properties</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((property, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img src={property.src} alt={property.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">Featured</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{property.alt}</h3>
                  <p className="text-green-700 font-bold">Contact for Price</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Full-service real estate solutions for buyers, sellers, and investors</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors">
                <div className="text-4xl mb-4">{service.icon || '🏠'}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Agents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((agent, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                  {agent.image ? (
                    <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl">👤</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                <p className="text-green-600 text-sm mb-2">{agent.role}</p>
                {agent.bio && <p className="text-gray-500 text-xs">{agent.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Performance</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-green-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">{businessName}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="text-gray-400 text-sm space-y-2">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 5:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-gray-400 text-sm space-y-2">
                <p>📍 {address}</p>
                <p>📞 {phone}</p>
                <p>✉️ {email}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
