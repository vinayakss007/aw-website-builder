'use client';

import React from 'react';

const defaultServices = [
  { title: 'Appetizers', description: 'Fresh bruschetta, calamari, and seasonal soups', price: '$8-$14' },
  { title: 'Main Courses', description: 'Prime steaks, fresh seafood, and handmade pasta', price: '$22-$45' },
  { title: 'Desserts', description: 'Tiramisu, crème brûlée, and artisan gelato', price: '$10-$16' },
  { title: 'Wine & Cocktails', description: 'Curated wine list and signature cocktails', price: '$12-$20' },
];

const defaultTestimonials = [
  { quote: 'An unforgettable dining experience. The flavors were extraordinary and the ambiance was perfect.', author: 'Sarah Mitchell', role: 'Food Critic' },
  { quote: 'Best Italian food outside of Italy. The homemade pasta is to die for!', author: 'James Rodriguez', role: 'Regular Guest' },
  { quote: 'We celebrated our anniversary here and it was absolutely magical. Impeccable service.', author: 'Emily & David Chen', role: 'Anniversary Celebration' },
];

const defaultTeam = [
  { name: 'Chef Marco Rossi', role: 'Executive Chef', bio: '20 years of culinary excellence across Michelin-starred restaurants' },
  { name: 'Isabella Fontaine', role: 'Pastry Chef', bio: 'Classically trained in Paris, specializing in French-Italian fusion desserts' },
  { name: 'Antonio Vega', role: 'Sommelier', bio: 'Certified sommelier with expertise in Italian and French wines' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt: 'Elegant plated dish' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600', alt: 'Fresh ingredients' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600', alt: 'Signature cocktail' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600', alt: 'Private dining' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', alt: 'Wood-fired pizza' },
];

export default function RestaurantTemplate({
  businessName = 'La Bella Cucina',
  heroTitle = 'A Culinary Journey Awaits',
  heroSubtitle = 'Experience authentic Italian cuisine crafted with passion, tradition, and the finest seasonal ingredients.',
  aboutText = 'Nestled in the heart of downtown, La Bella Cucina has been serving unforgettable Italian cuisine since 1998. Our recipes have been passed down through generations, bringing the authentic flavors of Tuscany to your table. Every dish is prepared with locally sourced ingredients and a love for the art of cooking.',
  phone = '(555) 234-5678',
  email = 'reservations@labellacucina.com',
  address = '42 Vine Street, Downtown District',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-serif text-white">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Menu</a>
              <a href="#specials" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Chef&apos;s Specials</a>
              <a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Gallery</a>
              <a href="#testimonials" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Reviews</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Contact</a>
            </div>
            <a href="#reservations" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm transition-colors">
              Reserve a Table
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg transition-colors">
              View Our Menu
            </a>
            <a href="#reservations" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg transition-colors">
              Make a Reservation
            </a>
          </div>
        </div>
      </section>

      {/* About / Chef's Special */}
      <section id="specials" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{aboutText}</p>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="text-lg font-serif italic text-gray-700">&ldquo;Cooking is an art, and patience a virtue. Great food takes time.&rdquo;</p>
                <p className="text-sm text-gray-500 mt-2">— Chef Marco Rossi</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
                alt="Chef preparing a dish"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Chef&apos;s Special Tonight</p>
                <p className="text-lg font-serif">Truffle Risotto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Each dish is crafted with love using the freshest seasonal ingredients</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <div key={index} className="bg-stone-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-stone-100">
                <div className="text-orange-600 text-3xl mb-4">{item.icon || '🍽️'}</div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                {item.price && (
                  <p className="text-orange-600 font-semibold">{item.price}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Meet Our Team</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">Passionate culinary artists dedicated to your dining experience</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-stone-700 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">👨‍🍳</span>
                  )}
                </div>
                <h3 className="text-lg font-serif">{member.name}</h3>
                <p className="text-orange-400 text-sm mb-2">{member.role}</p>
                {member.bio && <p className="text-stone-400 text-sm">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Gallery</h2>
            <p className="text-gray-600">A taste of what awaits you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                  <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-stone-100">
                <div className="text-orange-400 text-4xl mb-4">&ldquo;</div>
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

      {/* Reservations CTA */}
      <section id="reservations" className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Reserve Your Table</h2>
          <p className="text-orange-100 mb-8 text-lg">Join us for an unforgettable dining experience. Book your table today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`} className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call {phone}
            </a>
            <a href={`mailto:${email}`} className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-serif mb-4">{businessName}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <div className="text-stone-400 text-sm space-y-2">
                <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                <p>Sunday: 4:00 PM - 9:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-stone-400 text-sm space-y-2">
                <p>📍 {address}</p>
                <p>📞 {phone}</p>
                <p>✉️ {email}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
