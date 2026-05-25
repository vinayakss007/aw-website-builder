'use client';

import React from 'react';

const defaultServices = [
  { title: 'Haircut & Styling', description: 'Expert cuts and blowouts for all hair types', price: '$65-$120', icon: '✂️' },
  { title: 'Color & Highlights', description: 'Balayage, ombre, and full color transformations', price: '$150-$350', icon: '🎨' },
  { title: 'Spa Facials', description: 'Rejuvenating facials tailored to your skin type', price: '$95-$200', icon: '✨' },
  { title: 'Massage Therapy', description: 'Swedish, deep tissue, and hot stone massages', price: '$85-$180', icon: '💆' },
  { title: 'Manicure & Pedicure', description: 'Classic, gel, and luxury nail treatments', price: '$45-$90', icon: '💅' },
  { title: 'Body Treatments', description: 'Wraps, scrubs, and detox treatments', price: '$120-$250', icon: '🧖' },
];

const defaultTestimonials = [
  { quote: 'The most relaxing spa experience I have ever had. The facial left my skin glowing for weeks.', author: 'Rachel Kim', role: 'Monthly Spa Member' },
  { quote: 'Finally found a stylist who gets my vision. My hair has never looked better!', author: 'Amanda Foster', role: 'Hair Client since 2021' },
  { quote: 'This place is my sanctuary. The atmosphere and service are absolutely world-class.', author: 'Nicole Patel', role: 'Wellness Member' },
];

const defaultTeam = [
  { name: 'Sophia Laurent', role: 'Creative Director', bio: 'Award-winning stylist with 15 years in luxury salons' },
  { name: 'Maria Santos', role: 'Senior Colorist', bio: 'Balayage specialist trained in Paris and Milan' },
  { name: 'James Chen', role: 'Spa Director', bio: 'Licensed esthetician and massage therapist' },
  { name: 'Aisha Williams', role: 'Nail Artist', bio: 'Certified nail technician specializing in nail art' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600', alt: 'Salon interior' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600', alt: 'Hair styling' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600', alt: 'Spa treatment' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600', alt: 'Beauty treatment' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600', alt: 'Facial treatment' },
  { src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600', alt: 'Nail art' },
];

export default function SalonSpaTemplate({
  businessName = 'Luxe Beauty & Spa',
  heroTitle = 'Indulge in Pure Luxury',
  heroSubtitle = 'A sanctuary of beauty and relaxation where every detail is crafted for your well-being.',
  aboutText = 'Luxe Beauty & Spa is a premier destination for those who appreciate the finer things in self-care. Our team of expert stylists, colorists, and spa therapists combine artistry with science to deliver transformative results in an atmosphere of pure tranquility.',
  phone = '(555) 567-8901',
  email = 'hello@luxebeautyspa.com',
  address = '75 Serenity Lane, Wellness Quarter',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-light tracking-widest text-pink-800 uppercase">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Services</a>
              <a href="#gallery" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Gallery</a>
              <a href="#team" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Team</a>
              <a href="#menu" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wide">Contact</a>
            </div>
            <a href="#booking" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Salon interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/50 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-2xl mx-auto font-light">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg transition-colors">
              Book Appointment
            </a>
            <a href="#services" className="border border-white text-white hover:bg-white hover:text-pink-800 px-8 py-3 rounded-full text-lg transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services with Prices */}
      <section id="services" className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">Discover our range of beauty and wellness treatments</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{service.icon || '💫'}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                {service.price && <p className="text-pink-600 font-medium">{service.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-pink-900/0 group-hover:bg-pink-900/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">💇‍♀️</span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-pink-600 text-sm mb-2">{member.role}</p>
                {member.bio && <p className="text-gray-500 text-xs">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Menu / Pricing List */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">Service Menu</h2>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b border-pink-100">
                <div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
                <p className="text-pink-600 font-medium whitespace-nowrap ml-4">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
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

      {/* Booking CTA */}
      <section id="booking" className="py-20 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">Ready to Be Pampered?</h2>
          <p className="text-pink-100 mb-8 text-lg font-light">Book your appointment today and experience the ultimate in beauty and relaxation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`} className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-medium transition-colors">
              Call {phone}
            </a>
            <a href={`mailto:${email}`} className="border border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full font-medium transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-light tracking-widest uppercase mb-4">{businessName}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Hours</h3>
              <div className="text-gray-400 text-sm space-y-2">
                <p>Tuesday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday - Monday: Closed</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
              <div className="text-gray-400 text-sm space-y-2">
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
