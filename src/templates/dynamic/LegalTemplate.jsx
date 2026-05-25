'use client';

import React from 'react';

const defaultServices = [
  { title: 'Personal Injury', description: 'Aggressive representation for accident and injury victims', icon: '⚖️' },
  { title: 'Family Law', description: 'Compassionate guidance through divorce, custody, and adoption', icon: '👨‍👩‍👧' },
  { title: 'Criminal Defense', description: 'Protecting your rights with experienced defense strategies', icon: '🛡️' },
  { title: 'Business Law', description: 'Corporate formation, contracts, and commercial litigation', icon: '📋' },
  { title: 'Estate Planning', description: 'Wills, trusts, and comprehensive estate strategies', icon: '🏛️' },
  { title: 'Real Estate Law', description: 'Property transactions, disputes, and zoning matters', icon: '🏠' },
];

const defaultTestimonials = [
  { quote: 'They fought for me when no one else would. Won my case and got me the settlement I deserved.', author: 'Robert Martinez', role: 'Personal Injury Client' },
  { quote: 'Professional, thorough, and genuinely caring. Made a difficult divorce process bearable.', author: 'Jennifer Adams', role: 'Family Law Client' },
  { quote: 'Their business expertise saved my company from a potentially devastating lawsuit.', author: 'Thomas Chen', role: 'Business Client' },
];

const defaultTeam = [
  { name: 'Richard Blackwell', role: 'Managing Partner', bio: '30 years trial experience, former federal prosecutor' },
  { name: 'Catherine Moore', role: 'Senior Partner', bio: 'Harvard Law, specializing in complex litigation' },
  { name: 'James Washington', role: 'Partner', bio: 'Award-winning criminal defense attorney' },
  { name: 'Elizabeth Torres', role: 'Associate', bio: 'Rising star in family and estate law' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600', alt: 'Law library' },
  { src: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600', alt: 'Courtroom' },
];

export default function LegalTemplate({
  businessName = 'Blackwell & Moore Law Firm',
  heroTitle = 'Justice You Can Trust',
  heroSubtitle = 'Experienced attorneys fighting for your rights with integrity, dedication, and proven results.',
  aboutText = 'For over three decades, Blackwell & Moore has been a pillar of legal excellence in our community. Our team of accomplished attorneys combines aggressive advocacy with compassionate counsel, ensuring every client receives the representation they deserve.',
  phone = '(555) 234-8901',
  email = 'contact@blackwellmoore.com',
  address = '800 Justice Plaza, Suite 1200',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const caseResults = [
    { number: '$50M+', label: 'Won for Clients' },
    { number: '2,500+', label: 'Cases Handled' },
    { number: '95%', label: 'Success Rate' },
    { number: '30+', label: 'Years of Experience' },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-serif text-yellow-500">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#practice-areas" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Practice Areas</a>
              <a href="#attorneys" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Attorneys</a>
              <a href="#results" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Results</a>
              <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Contact</a>
            </div>
            <a href="#consultation" className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm transition-colors">
              Free Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
            alt="Legal office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#consultation" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded text-lg transition-colors">
              Free Case Review
            </a>
            <a href="#practice-areas" className="border-2 border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-white px-8 py-3 rounded text-lg transition-colors">
              Our Practice Areas
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Practice Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive legal services for individuals and businesses</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
                <div className="text-2xl mb-3">{area.icon || '⚖️'}</div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Attorney Profiles */}
      <section id="attorneys" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Attorneys</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Seasoned legal professionals committed to your success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((attorney, index) => (
              <div key={index} className="text-center">
                <div className="w-36 h-36 mx-auto mb-4 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                  {attorney.image ? (
                    <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">👔</span>
                  )}
                </div>
                <h3 className="text-lg font-serif text-gray-900">{attorney.name}</h3>
                <p className="text-yellow-700 text-sm mb-2">{attorney.role}</p>
                {attorney.bio && <p className="text-gray-500 text-xs">{attorney.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results Numbers */}
      <section id="results" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Proven Results</h2>
            <p className="text-gray-400">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {caseResults.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">{stat.number}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Client Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="text-yellow-500 text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Schedule Your Free Consultation</h2>
          <p className="text-gray-400 mb-8 text-lg">Take the first step. Our attorneys are ready to review your case at no cost or obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`} className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded font-semibold transition-colors">
              Call {phone}
            </a>
            <a href={`mailto:${email}`} className="border-2 border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-white px-8 py-3 rounded font-semibold transition-colors">
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
              <h3 className="text-xl font-serif text-yellow-500 mb-4">{businessName}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="text-gray-500 text-sm space-y-2">
                <p>Monday - Friday: 8:30 AM - 6:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>24/7 Emergency Line Available</p>
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
