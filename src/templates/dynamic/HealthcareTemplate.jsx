'use client';

import React from 'react';

const defaultServices = [
  { title: 'Primary Care', description: 'Comprehensive health assessments and preventive care for the whole family', icon: '🩺' },
  { title: 'Cardiology', description: 'Advanced cardiac diagnostics and treatment plans', icon: '❤️' },
  { title: 'Orthopedics', description: 'Joint, bone, and muscle care with minimally invasive procedures', icon: '🦴' },
  { title: 'Pediatrics', description: 'Compassionate care for infants, children, and adolescents', icon: '👶' },
  { title: 'Neurology', description: 'Expert diagnosis and treatment of neurological conditions', icon: '🧠' },
  { title: 'Dermatology', description: 'Skin health, cosmetic treatments, and dermatological surgery', icon: '🔬' },
];

const defaultTestimonials = [
  { quote: 'The doctors here truly listen. I finally feel like my health is in good hands.', author: 'Margaret Thompson', role: 'Patient since 2019' },
  { quote: 'State-of-the-art facility with a warm, caring staff. Highly recommended for families.', author: 'Robert Kim', role: 'Patient since 2020' },
  { quote: 'After years of searching, I found a healthcare provider that treats me like a person, not a number.', author: 'Lisa Morales', role: 'Patient since 2021' },
];

const defaultTeam = [
  { name: 'Dr. Sarah Mitchell', role: 'Chief of Medicine', bio: 'Board-certified with 15+ years in internal medicine' },
  { name: 'Dr. James Park', role: 'Cardiologist', bio: 'Harvard Medical School graduate specializing in preventive cardiology' },
  { name: 'Dr. Rachel Green', role: 'Pediatrician', bio: 'Dedicated to providing compassionate care for children of all ages' },
  { name: 'Dr. Michael Torres', role: 'Orthopedic Surgeon', bio: 'Pioneer in minimally invasive joint replacement surgery' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600', alt: 'Modern medical facility' },
  { src: 'https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=600', alt: 'Patient consultation' },
];

export default function HealthcareTemplate({
  businessName = 'MedCare Health Center',
  heroTitle = 'Your Health, Our Priority',
  heroSubtitle = 'Providing compassionate, comprehensive healthcare with cutting-edge technology and a patient-first approach.',
  aboutText = 'At MedCare Health Center, we believe everyone deserves access to exceptional healthcare. Our team of board-certified physicians combines decades of experience with the latest medical advancements to deliver personalized care that makes a difference.',
  phone = '(555) 890-1234',
  email = 'info@medcarehealth.com',
  address = '100 Wellness Boulevard, Medical District',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const stats = [
    { number: '25,000+', label: 'Patients Served' },
    { number: '50+', label: 'Physicians' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '15+', label: 'Years of Excellence' },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-teal-700">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Services</a>
              <a href="#doctors" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Doctors</a>
              <a href="#stats" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Contact</a>
            </div>
            <a href="#appointment" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
            alt="Healthcare facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-blue-900/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#appointment" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg transition-colors">
              Schedule Appointment
            </a>
            <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 px-8 py-3 rounded-lg text-lg transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare services tailored to your needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-3xl mb-4">{service.icon || '🏥'}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Cards */}
      <section id="doctors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Physicians</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Expert care from board-certified specialists</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((doctor, index) => (
              <div key={index} className="text-center group">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden group-hover:ring-4 ring-teal-200 transition-all">
                  {doctor.image ? (
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl">👨‍⚕️</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-teal-600 text-sm mb-2">{doctor.role}</p>
                {doctor.bio && <p className="text-gray-500 text-xs">{doctor.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counters */}
      <section id="stats" className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-teal-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section id="appointment" className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-teal-100 mb-8 text-lg">Schedule your appointment today. New patients welcome.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`} className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call {phone}
            </a>
            <a href={`mailto:${email}`} className="border-2 border-white hover:bg-white hover:text-teal-700 px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <h3 className="text-xl font-bold mb-4">{businessName}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="text-gray-400 text-sm space-y-2">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed (Emergency on-call)</p>
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
