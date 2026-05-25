'use client';

import React from 'react';

const defaultServices = [
  { title: 'Computer Science', description: 'From algorithms to AI - prepare for the tech industry', icon: '💻' },
  { title: 'Business Administration', description: 'Leadership, finance, and strategic management', icon: '📈' },
  { title: 'Liberal Arts', description: 'Critical thinking, communication, and cultural studies', icon: '📚' },
  { title: 'Engineering', description: 'Mechanical, civil, and electrical engineering programs', icon: '⚙️' },
  { title: 'Health Sciences', description: 'Nursing, pre-med, and public health pathways', icon: '🏥' },
  { title: 'Fine Arts', description: 'Studio art, music, theater, and creative writing', icon: '🎨' },
];

const defaultTestimonials = [
  { quote: 'The professors genuinely care about student success. I felt supported every step of the way.', author: 'Alex Chen', role: 'Class of 2023, Computer Science' },
  { quote: 'Small class sizes meant I got personalized attention that prepared me for graduate school.', author: 'Maria Santos', role: 'Class of 2022, Biology' },
  { quote: 'The internship program connected me with my dream employer before graduation.', author: 'Jordan Williams', role: 'Class of 2023, Business' },
];

const defaultTeam = [
  { name: 'Dr. Eleanor Richards', role: 'Dean of Sciences', bio: 'Published researcher with 25 years in academia' },
  { name: 'Prof. William Okafor', role: 'Computer Science Chair', bio: 'Former Google engineer, passionate educator' },
  { name: 'Dr. Susan Chang', role: 'Dean of Liberal Arts', bio: 'Award-winning author and educator' },
  { name: 'Prof. Robert Miller', role: 'Engineering Chair', bio: 'NASA consultant, patent holder in sustainable energy' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600', alt: 'Campus quad' },
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600', alt: 'Graduation ceremony' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', alt: 'Library' },
  { src: 'https://images.unsplash.com/photo-1562774053-0a60b3020a2a?w=600', alt: 'Science lab' },
  { src: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600', alt: 'Student life' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600', alt: 'Lecture hall' },
];

export default function EducationTemplate({
  businessName = 'Westbrook University',
  heroTitle = 'Shape Your Future',
  heroSubtitle = 'A premier institution dedicated to academic excellence, innovative research, and preparing leaders for tomorrow.',
  aboutText = 'Founded in 1952, Westbrook University has grown from a small liberal arts college into a comprehensive research university. With over 80 undergraduate and graduate programs, we combine rigorous academics with real-world experience to prepare students for meaningful careers.',
  phone = '(555) 321-9876',
  email = 'admissions@westbrook.edu',
  address = '1200 University Drive, Westbrook',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const admissionSteps = [
    { step: '01', title: 'Apply Online', description: 'Complete your application and submit transcripts' },
    { step: '02', title: 'Campus Visit', description: 'Tour our campus and meet with admissions counselors' },
    { step: '03', title: 'Financial Aid', description: 'Explore scholarships, grants, and aid packages' },
    { step: '04', title: 'Enroll', description: 'Accept your offer and register for classes' },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-indigo-800">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Programs</a>
              <a href="#faculty" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Faculty</a>
              <a href="#campus" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Campus</a>
              <a href="#admissions" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Admissions</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Contact</a>
            </div>
            <a href="#admissions" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
            alt="University campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-blue-900/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#admissions" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg transition-colors">
              Start Your Application
            </a>
            <a href="#programs" className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-3 rounded-lg text-lg transition-colors">
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover your passion across our diverse range of programs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="text-3xl mb-4">{program.icon || '📖'}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Faculty */}
      <section id="faculty" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distinguished Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn from leaders in their fields</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">👨‍🏫</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
                {member.bio && <p className="text-gray-500 text-xs">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section id="campus" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <p className="text-gray-600">Experience our vibrant community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-video group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/30 transition-colors flex items-end">
                  <p className="text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Steps */}
      <section id="admissions" className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto">Your journey starts here - follow these simple steps</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-indigo-400 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-indigo-200 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Voices</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-indigo-50 rounded-xl p-8 border border-indigo-100">
                <p className="text-gray-700 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-indigo-600">{testimonial.role}</p>
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
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="text-gray-400 text-sm space-y-2">
                <p><a href="#programs" className="hover:text-indigo-400 transition-colors">Academic Programs</a></p>
                <p><a href="#admissions" className="hover:text-indigo-400 transition-colors">Admissions</a></p>
                <p><a href="#campus" className="hover:text-indigo-400 transition-colors">Campus Life</a></p>
                <p><a href="#faculty" className="hover:text-indigo-400 transition-colors">Faculty</a></p>
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
