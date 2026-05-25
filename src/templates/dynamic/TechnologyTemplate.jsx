'use client';

import React from 'react';

const defaultServices = [
  { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure that grows with your business', icon: '☁️' },
  { title: 'AI & Machine Learning', description: 'Intelligent automation and predictive analytics', icon: '🤖' },
  { title: 'Cybersecurity', description: 'Enterprise-grade security to protect your digital assets', icon: '🔒' },
  { title: 'Custom Development', description: 'Bespoke software solutions tailored to your needs', icon: '💻' },
  { title: 'Data Analytics', description: 'Turn raw data into actionable business intelligence', icon: '📊' },
  { title: 'DevOps & Automation', description: 'Streamline deployment and accelerate delivery', icon: '⚡' },
];

const defaultTestimonials = [
  { quote: 'They transformed our legacy systems into a modern cloud platform. Revenue up 200% in one year.', author: 'Sarah Chen', role: 'CTO, FinanceHub' },
  { quote: 'The AI solution they built saves us 500+ hours per month in manual processing.', author: 'Marcus Williams', role: 'VP Engineering, LogiTech Co' },
  { quote: 'Best tech partner we have worked with. They deliver on time, every time.', author: 'Emily Rodriguez', role: 'CEO, StartupXYZ' },
];

const defaultTeam = [
  { name: 'David Park', role: 'CEO & Founder', bio: 'Former Google engineer with 15 years in tech leadership' },
  { name: 'Priya Sharma', role: 'CTO', bio: 'MIT PhD, expert in distributed systems and AI' },
  { name: 'Alex Mitchell', role: 'VP Engineering', bio: 'Built teams at 3 unicorn startups' },
];

const defaultGallery = [
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600', alt: 'Technology hardware' },
  { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600', alt: 'Data center' },
];

export default function TechnologyTemplate({
  businessName = 'NexaTech Solutions',
  heroTitle = 'Build the Future, Today',
  heroSubtitle = 'Cutting-edge technology solutions that transform businesses and drive innovation at scale.',
  aboutText = 'NexaTech Solutions partners with forward-thinking companies to build transformative technology. From AI-powered automation to cloud infrastructure, we turn complex challenges into elegant solutions that drive measurable results.',
  phone = '(555) 789-0123',
  email = 'hello@nexatech.io',
  address = '1 Innovation Way, Tech Park',
  services = defaultServices,
  testimonials = defaultTestimonials,
  team = defaultTeam,
  gallery = defaultGallery,
  ...props
} = {}) {
  const howItWorks = [
    { step: '01', title: 'Discovery', description: 'We analyze your challenges and define clear objectives' },
    { step: '02', title: 'Design', description: 'Our architects create a scalable, future-proof solution' },
    { step: '03', title: 'Develop', description: 'Agile development with continuous feedback loops' },
    { step: '04', title: 'Deploy', description: 'Launch with confidence and ongoing optimization' },
  ];

  const pricing = [
    { name: 'Starter', price: '$2,999', period: '/month', features: ['Up to 5 users', 'Basic analytics', 'Email support', '99.5% uptime SLA'] },
    { name: 'Business', price: '$7,999', period: '/month', features: ['Up to 50 users', 'Advanced analytics', 'Priority support', '99.9% uptime SLA', 'Custom integrations'] },
    { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited users', 'Full platform access', '24/7 dedicated support', '99.99% uptime SLA', 'Custom development', 'On-premise option'] },
  ];

  const integrations = ['AWS', 'Google Cloud', 'Azure', 'Salesforce', 'Slack', 'GitHub', 'Jira', 'Stripe'];

  return (
    <div className="min-h-screen bg-gray-950 scroll-smooth">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-white">{businessName}</span>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-400 hover:text-violet-400 transition-colors text-sm">Features</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-violet-400 transition-colors text-sm">How It Works</a>
              <a href="#pricing" className="text-gray-400 hover:text-violet-400 transition-colors text-sm">Pricing</a>
              <a href="#testimonials" className="text-gray-400 hover:text-violet-400 transition-colors text-sm">Testimonials</a>
              <a href="#contact" className="text-gray-400 hover:text-violet-400 transition-colors text-sm">Contact</a>
            </div>
            <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt="Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/90 via-gray-950/80 to-purple-950/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block bg-violet-500/20 text-violet-300 text-sm px-4 py-1 rounded-full mb-6 border border-violet-500/30">
            Next-Generation Technology Solutions
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg text-lg transition-colors">
              Schedule a Demo
            </a>
            <a href="#features" className="border border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400 px-8 py-3 rounded-lg text-lg transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>


      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to build, scale, and secure your digital infrastructure</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-violet-500/50 transition-colors group">
                <div className="text-3xl mb-4">{feature.icon || '⚙️'}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our proven process delivers results</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="text-5xl font-bold text-violet-600/30 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-violet-600/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`rounded-xl p-8 ${index === 1 ? 'bg-violet-600 text-white ring-2 ring-violet-400 scale-105' : 'bg-gray-800 text-white border border-gray-700'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${index === 1 ? 'text-violet-200' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <ul className={`text-sm space-y-3 mb-8 ${index === 1 ? 'text-violet-100' : 'text-gray-400'}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-violet-400">✓</span> {feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-3 rounded-lg font-semibold text-center text-sm transition-colors ${index === 1 ? 'bg-white text-violet-600 hover:bg-violet-50' : 'bg-violet-600 text-white hover:bg-violet-700'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted integrations with leading platforms</p>
          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((name, index) => (
              <div key={index} className="bg-gray-800 px-6 py-3 rounded-lg text-gray-400 text-sm font-medium border border-gray-700">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700">
                <p className="text-gray-300 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-violet-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-violet-700 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-violet-200 mb-8 text-lg">Let&apos;s build something extraordinary together.</p>
          <a href="#contact" className="inline-block bg-white text-violet-700 hover:bg-violet-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">{businessName}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{aboutText.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <div className="text-gray-500 text-sm space-y-2">
                <p>Cloud Infrastructure</p>
                <p>AI & Analytics</p>
                <p>Cybersecurity</p>
                <p>Custom Development</p>
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
