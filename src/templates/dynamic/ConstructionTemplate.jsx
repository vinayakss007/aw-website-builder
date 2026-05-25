'use client';

import React from 'react';

const defaultServices = [
  { title: 'Residential Construction', description: 'Custom homes, renovations, and additions built to perfection', icon: '🏠' },
  { title: 'Commercial Buildings', description: 'Office complexes, retail spaces, and industrial facilities', icon: '🏢' },
  { title: 'Remodeling', description: 'Kitchen, bathroom, and whole-home renovation projects', icon: '🔨' },
  { title: 'Project Management', description: 'End-to-end coordination from permits to final inspection', icon: '📋' },
  { title: 'Concrete & Foundation', description: 'Foundations, driveways, patios, and structural concrete work', icon: '🧱' },
  { title: 'Green Building', description: 'Sustainable construction with LEED certification options', icon: '🌿' },
];

const defaultTestimonials = [
  { quote: 'They built our dream home on time and under budget. The craftsmanship is extraordinary.', author: 'Michael & Sarah Davis', role: 'Custom Home Client' },
  { quote: 'Professional crew, clean job site, and incredible attention to detail. Highly recommend.', author: 'Patricia Wong', role: 'Kitchen Renovation' },
  { quote: 'Our commercial project was complex, but they handled every challenge with expertise.', author: 'Jason Miller', role: 'Business Owner' },
];

const defaultTeam = [
  { name: 'John Hartfield', role: 'Founder & CEO', bio: '35 years in construction, master builder certified' },
  { name: 'Mike Rodriguez', role: 'Project Manager', bio: 'PMP certified with 20 years of commercial experience' },
  { name: 'Sarah Kim', role: 'Lead Architect', bio: 'Award-winning designs blending form and function' },
  { name: 'Dave Johnson', role: 'Safety Director', bio: 'OSHA certified, 10,000+ incident-free hours overseen' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', alt: 'Construction site' },
  { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600', alt: 'Building frame' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600', alt: 'Completed project' },
  { src: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=600', alt: 'Commercial building' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', alt: 'Modern architecture' },
  { src: 'https://images.unsplash.com/photo-1590644365607-1c5e64c4e0db?w=600', alt: 'Home renovation' },
];

export default function ConstructionTemplate({
  businessName = 'Hartfield Construction Co.',
  heroTitle = 'Building Excellence Since 1989',
  heroSubtitle = 'Quality craftsmanship, reliable timelines, and construction you can trust for generations.',
  aboutText = 'Hartfield Construction has been building the communities we live in for over three decades. From custom dream homes to major commercial developments, we bring integrity, expertise, and an unwavering commitment to quality to every project we undertake.',
  phone = '(555) 890-4567',
  email = 'info@hartfieldconstruction.com',
  address = '2100 Builder Avenue, Industrial Park',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const safetyStats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '35+', label: 'Years in Business' },
    { number: '0', label: 'Safety Incidents (2023)' },
    { number: '100%', label: 'Licensed & Insured' },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-amber-500">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Projects</a>
              <a href="#team" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Team</a>
              <a href="#safety" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Safety</a>
              <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Contact</a>
            </div>
            <a href="#estimate" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
              Get Estimate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-900/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#estimate" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded text-lg font-bold transition-colors">
              Free Estimate
            </a>
            <a href="#projects" className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white px-8 py-3 rounded text-lg font-bold transition-colors">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Full-service construction solutions from foundation to finish</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-amber-500">
                <div className="text-3xl mb-4">{service.icon || '🔨'}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Project Showcase */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A showcase of our craftsmanship and dedication</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-video group">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/40 transition-colors flex items-end">
                  <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">{project.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experienced professionals building your vision</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl">👷</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-amber-600 text-sm mb-2">{member.role}</p>
                {member.bio && <p className="text-gray-500 text-xs">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety First</h2>
            <p className="text-amber-100 max-w-2xl mx-auto">Our commitment to safety is unwavering. Every crew member, every site, every day.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-amber-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-amber-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate CTA */}
      <section id="estimate" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free Estimate</h2>
          <p className="text-gray-400 mb-8 text-lg">Tell us about your project and we will provide a detailed, no-obligation estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded font-bold transition-colors">
              Call {phone}
            </a>
            <a href={`mailto:${email}`} className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white px-8 py-3 rounded font-bold transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-amber-500 mb-4">{businessName}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="text-gray-500 text-sm space-y-2">
                <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-gray-500 text-sm space-y-2">
                <p>📍 {address}</p>
                <p>📞 {phone}</p>
                <p>✉️ {email}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
