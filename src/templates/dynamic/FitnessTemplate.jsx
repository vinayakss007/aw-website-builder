'use client';

import React from 'react';

const defaultServices = [
  { title: 'Strength Training', description: 'Build muscle and increase strength with expert programming', icon: '🏋️', price: '$59/mo' },
  { title: 'HIIT Classes', description: 'High-intensity interval training for maximum fat burn', icon: '🔥', price: '$49/mo' },
  { title: 'Yoga & Flexibility', description: 'Improve mobility, balance, and mental wellness', icon: '🧘', price: '$45/mo' },
  { title: 'Boxing & MMA', description: 'Learn combat sports while getting an intense workout', icon: '🥊', price: '$65/mo' },
  { title: 'CrossFit', description: 'Functional fitness combining cardio, strength, and agility', icon: '💪', price: '$75/mo' },
  { title: 'Personal Training', description: 'One-on-one coaching tailored to your goals', icon: '🎯', price: '$95/session' },
];

const defaultTestimonials = [
  { quote: 'Lost 40 pounds in 6 months. The trainers here changed my life and my mindset.', author: 'Mike Johnson', role: 'Member since 2022' },
  { quote: 'Best gym I have ever been to. The community keeps me motivated every single day.', author: 'Sarah Kim', role: 'CrossFit Member' },
  { quote: 'As a competitive athlete, the coaching quality here is unmatched. World-class facility.', author: 'Derek Williams', role: 'Competitive Powerlifter' },
];

const defaultTeam = [
  { name: 'Jake Morrison', role: 'Head Coach', bio: 'NASM certified, 10 years coaching elite athletes' },
  { name: 'Alexis Rivera', role: 'Yoga Instructor', bio: 'RYT-500, specializing in power yoga and meditation' },
  { name: 'Marcus Thompson', role: 'Strength Coach', bio: 'Former NFL trainer, certified strength specialist' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600', alt: 'Gym floor' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600', alt: 'Weight training' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600', alt: 'Group class' },
];

export default function FitnessTemplate({
  businessName = 'Iron Forge Fitness',
  heroTitle = 'Forge Your Strongest Self',
  heroSubtitle = 'Elite training, world-class equipment, and a community that pushes you to be your best.',
  aboutText = 'Iron Forge Fitness is more than a gym — it is a movement. Founded by athletes, for athletes of every level, we provide the tools, coaching, and community you need to break through your limits and achieve extraordinary results.',
  phone = '(555) 678-9012',
  email = 'info@ironforgefitness.com',
  address = '500 Power Street, Fitness District',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const schedule = [
    { time: '6:00 AM', mon: 'HIIT', tue: 'Strength', wed: 'HIIT', thu: 'Strength', fri: 'HIIT', sat: 'CrossFit' },
    { time: '8:00 AM', mon: 'Yoga', tue: 'Boxing', wed: 'Yoga', thu: 'Boxing', fri: 'Yoga', sat: 'Open Gym' },
    { time: '12:00 PM', mon: 'CrossFit', tue: 'HIIT', wed: 'CrossFit', thu: 'HIIT', fri: 'CrossFit', sat: '—' },
    { time: '5:30 PM', mon: 'Boxing', tue: 'CrossFit', wed: 'Boxing', thu: 'CrossFit', fri: 'Open Gym', sat: '—' },
    { time: '7:00 PM', mon: 'Strength', tue: 'Yoga', wed: 'Strength', thu: 'Yoga', fri: '—', sat: '—' },
  ];

  const pricing = [
    { name: 'Basic', price: '$29', period: '/month', features: ['Gym Access', 'Locker Room', 'Free WiFi'] },
    { name: 'Pro', price: '$59', period: '/month', features: ['All Basic Features', 'Group Classes', 'Nutrition Plan', 'Progress Tracking'] },
    { name: 'Elite', price: '$99', period: '/month', features: ['All Pro Features', '2x Personal Training', 'Recovery Suite', 'Priority Booking'] },
  ];

  return (
    <div className="min-h-screen bg-gray-950 scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-black text-white uppercase tracking-wider">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-400 hover:text-red-500 transition-colors text-sm uppercase tracking-wide">Programs</a>
              <a href="#trainers" className="text-gray-400 hover:text-red-500 transition-colors text-sm uppercase tracking-wide">Trainers</a>
              <a href="#schedule" className="text-gray-400 hover:text-red-500 transition-colors text-sm uppercase tracking-wide">Schedule</a>
              <a href="#pricing" className="text-gray-400 hover:text-red-500 transition-colors text-sm uppercase tracking-wide">Pricing</a>
              <a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm uppercase tracking-wide">Contact</a>
            </div>
            <a href="#pricing" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold uppercase transition-colors">
              Join Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Fitness gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase mb-6 tracking-tight">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded text-lg font-bold uppercase transition-colors">
              Start Free Trial
            </a>
            <a href="#programs" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-4 rounded text-lg font-bold uppercase transition-colors">
              View Programs
            </a>
          </div>
        </div>
      </section>


      {/* Programs */}
      <section id="programs" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Our Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose your path to greatness</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((program, index) => (
              <div key={index} className="relative bg-gray-800 rounded-lg overflow-hidden group hover:ring-2 ring-red-500 transition-all">
                <div className="p-6">
                  <div className="text-3xl mb-3">{program.icon || '💪'}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{program.description}</p>
                  {program.price && <p className="text-red-500 font-bold text-lg">{program.price}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Elite Trainers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Coached by the best in the business</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((trainer, index) => (
              <div key={index} className="text-center">
                <div className="w-36 h-36 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden ring-2 ring-red-600">
                  {trainer.image ? (
                    <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">🏋️</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{trainer.name}</h3>
                <p className="text-red-500 text-sm mb-2">{trainer.role}</p>
                {trainer.bio && <p className="text-gray-500 text-xs">{trainer.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section id="schedule" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Class Schedule</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 py-3 px-4">Time</th>
                  <th className="text-center text-gray-400 py-3 px-4">Mon</th>
                  <th className="text-center text-gray-400 py-3 px-4">Tue</th>
                  <th className="text-center text-gray-400 py-3 px-4">Wed</th>
                  <th className="text-center text-gray-400 py-3 px-4">Thu</th>
                  <th className="text-center text-gray-400 py-3 px-4">Fri</th>
                  <th className="text-center text-gray-400 py-3 px-4">Sat</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="text-white font-semibold py-3 px-4">{row.time}</td>
                    <td className="text-center text-gray-300 py-3 px-4">{row.mon}</td>
                    <td className="text-center text-gray-300 py-3 px-4">{row.tue}</td>
                    <td className="text-center text-gray-300 py-3 px-4">{row.wed}</td>
                    <td className="text-center text-gray-300 py-3 px-4">{row.thu}</td>
                    <td className="text-center text-gray-300 py-3 px-4">{row.fri}</td>
                    <td className="text-center text-gray-300 py-3 px-4">{row.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* Pricing Tiers */}
      <section id="pricing" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Membership Plans</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`rounded-lg p-8 text-center ${index === 1 ? 'bg-red-600 text-white ring-2 ring-red-400 scale-105' : 'bg-gray-800 text-white'}`}>
                <h3 className="text-xl font-bold uppercase mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm ${index === 1 ? 'text-red-200' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <ul className={`text-sm space-y-3 mb-8 ${index === 1 ? 'text-red-100' : 'text-gray-400'}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-3 rounded font-bold uppercase text-sm transition-colors ${index === 1 ? 'bg-white text-red-600 hover:bg-gray-100' : 'bg-red-600 text-white hover:bg-red-700'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <p className="text-gray-300 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-red-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-black uppercase mb-4">{businessName}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase mb-4">Hours</h3>
              <div className="text-gray-500 text-sm space-y-2">
                <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                <p>Saturday: 6:00 AM - 9:00 PM</p>
                <p>Sunday: 7:00 AM - 7:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase mb-4">Contact</h3>
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
