'use client';

import { useState } from 'react';

/**
 * Contact Form Component - Captures leads from customer sites
 * Submissions are stored in the admin database and forwarded to customer email.
 */
export default function ContactForm({
  siteId = '',
  businessName = 'Business',
  industry = 'general',
  accentColor = '#2563EB',
  fields = ['name', 'email', 'phone', 'message'],
  submitText = 'Send Message',
  successMessage = 'Thank you! We will get back to you soon.',
  className = '',
}) {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteId,
          industry,
          businessName,
          ...formData,
          submittedAt: new Date().toISOString(),
          source: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({});
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${className}`}>
        <div className="text-4xl mb-3">✓</div>
        <p className="text-green-700 font-medium text-lg">{successMessage}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-green-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldConfig = {
    name: { label: 'Full Name', type: 'text', placeholder: 'John Smith', required: true },
    email: { label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
    phone: { label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567', required: false },
    company: { label: 'Company', type: 'text', placeholder: 'Your Company', required: false },
    subject: { label: 'Subject', type: 'text', placeholder: 'How can we help?', required: false },
    message: { label: 'Message', type: 'textarea', placeholder: 'Tell us more about your needs...', required: true },
    budget: { label: 'Budget Range', type: 'select', options: ['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000+'], required: false },
    service: { label: 'Service Interested In', type: 'select', options: ['Web Design', 'Marketing', 'Consulting', 'Other'], required: false },
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.map((fieldName) => {
        const config = fieldConfig[fieldName];
        if (!config) return null;

        if (config.type === 'textarea') {
          return (
            <div key={fieldName}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{config.label}</label>
              <textarea
                placeholder={config.placeholder}
                required={config.required}
                rows={4}
                value={formData[fieldName] || ''}
                onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none resize-none"
                style={{ '--tw-ring-color': accentColor }}
              />
            </div>
          );
        }

        if (config.type === 'select') {
          return (
            <div key={fieldName}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{config.label}</label>
              <select
                value={formData[fieldName] || ''}
                onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
              >
                <option value="">Select...</option>
                {config.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div key={fieldName}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{config.label}</label>
            <input
              type={config.type}
              placeholder={config.placeholder}
              required={config.required}
              value={formData[fieldName] || ''}
              onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
            />
          </div>
        );
      })}

      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: accentColor }}
      >
        {status === 'submitting' ? 'Sending...' : submitText}
      </button>
    </form>
  );
}
