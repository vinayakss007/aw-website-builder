'use client';

import React from 'react';

const defaultServices = [
  { title: 'Wedding Photography', description: 'Capturing your love story from engagement to reception', price: 'From $3,500' },
  { title: 'Portrait Sessions', description: 'Individual, couples, and family portrait photography', price: 'From $500' },
  { title: 'Commercial & Brand', description: 'Product photography and brand campaigns that sell', price: 'From $1,200' },
  { title: 'Event Coverage', description: 'Corporate events, galas, and celebrations documented beautifully', price: 'From $2,000' },
];

const defaultTestimonials = [
  { quote: 'Our wedding photos are absolutely breathtaking. She captured moments we did not even know happened.', author: 'Jessica & Mark', role: 'Wedding Clients' },
  { quote: 'The brand photos elevated our entire business. Worth every penny and more.', author: 'Amanda Liu', role: 'Founder, Bloom Skincare' },
  { quote: 'An artist with a camera. She made me feel comfortable and the results were stunning.', author: 'David Thompson', role: 'Portrait Client' },
];

const defaultTeam = [
  { name: 'Olivia Harper', role: 'Lead Photographer', bio: '12 years capturing life\'s most beautiful moments' },
  { name: 'James Nakamura', role: 'Second Photographer', bio: 'Specializing in candid and editorial styles' },
  { name: 'Sophie Laurent', role: 'Retoucher & Editor', bio: 'Creating timeless edits with a modern sensibility' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600', alt: 'Portrait in golden light' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', alt: 'Wedding ceremony' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600', alt: 'Professional headshot' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', alt: 'Landscape photography' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600', alt: 'Wedding couple' },
  { src: 'https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?w=600', alt: 'Travel photography' },
  { src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600', alt: 'Urban portrait' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600', alt: 'Fashion editorial' },
  { src: 'https://images.unsplash.com/photo-1475738198235-4b30fc29c4ab?w=600', alt: 'Nature close-up' },
];

export default function PhotographyTemplate({
  businessName = 'Olivia Harper Photography',
  heroTitle = 'Moments Made Timeless',
  heroSubtitle = 'Fine art photography that tells your story with beauty, emotion, and authenticity.',
  aboutText = 'With a passion for light and an eye for the extraordinary in everyday moments, I create photographs that you will treasure for a lifetime. My approach combines photojournalistic spontaneity with fine art sensibility, resulting in images that are both authentic and breathtaking.',
  phone = '(555) 456-7891',
  email = 'hello@oliviaharper.com',
  address = 'Studio 7, Arts District',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const packages = [
    { name: 'Essential', price: '$1,500', features: ['2-hour session', '50 edited images', 'Online gallery', 'Print release'] },
    { name: 'Signature', price: '$3,500', features: ['Full day coverage', '300+ edited images', 'Engagement session', 'Custom album', 'Print release'] },
    { name: 'Luxury', price: '$6,000', features: ['Two-day coverage', '500+ edited images', 'Engagement session', 'Premium album', 'Canvas prints', 'Second photographer'] },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-light tracking-widest text-gray-900 uppercase">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#portfolio" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Portfolio</a>
              <a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Kind Words</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Inquire</a>
            </div>
            <a href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-sm text-sm transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80"
            alt="Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-sm text-lg transition-colors">
              View Portfolio
            </a>
            <a href="#contact" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-sm text-lg transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">About</h2>
          <p className="text-gray-600 leading-relaxed text-lg font-light">{aboutText}</p>
        </div>
      </section>


      {/* Masonry Portfolio Grid */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Portfolio</h2>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {gallery.map((image, index) => (
              <div key={index} className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
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
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-sm hover:border-pink-300 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                {service.price && <p className="text-pink-600 font-medium text-sm">{service.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Investment</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-sm p-8 text-center ${index === 1 ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200'}`}>
                <h3 className="text-xl font-light tracking-wide mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light">{pkg.price}</span>
                </div>
                <ul className={`text-sm space-y-3 mb-8 ${index === 1 ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-3 rounded-sm text-sm transition-colors ${index === 1 ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                  Inquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Kind Words</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center p-6">
                <p className="text-gray-600 italic mb-6 font-light">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-pink-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form CTA */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">Let&apos;s Create Together</h2>
          <p className="text-gray-400 mb-8 text-lg font-light">Ready to book your session? I would love to hear your story.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${email}`} className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-sm transition-colors">
              Send an Inquiry
            </a>
            <a href={`tel:${phone}`} className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-sm transition-colors">
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-light tracking-widest uppercase mb-4">{businessName}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{aboutText.substring(0, 120)}...</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Based In</h3>
              <div className="text-gray-500 text-sm space-y-2">
                <p>{address}</p>
                <p>Available for travel worldwide</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Connect</h3>
              <div className="text-gray-500 text-sm space-y-2">
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
