'use client';

import { useState, useEffect } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState(null);
  const [domain, setDomain] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/stats').then(r => r.json()).then(data => {
      setSettings(data);
      setDomain(data.baseDomain || '');
    });
  }, []);

  const handleSave = () => {
    // In production, this would call an API to update settings
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!settings) return <div className="animate-pulse text-gray-500">Loading...</div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Configure your website builder platform</p>
      </div>

      {/* Domain Settings */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Domain Configuration</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Base Domain</label>
            <input
              type="text"
              value={domain}
              onChange={e => setDomain(e.target.value)}
              placeholder="yourdomain.com"
              className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <p className="text-sm text-gray-500 mt-1">Customer sites will be: customer.{domain}</p>
          </div>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
            Save Domain
          </button>
          {saved && <span className="text-green-600 text-sm ml-3">✓ Saved!</span>}
        </div>
      </div>

      {/* Deployment Info */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Deployment Setup</h2>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2">
          <p className="text-gray-600"># Nginx wildcard subdomain config:</p>
          <p className="text-gray-900">server {'{'}</p>
          <p className="text-gray-900 pl-4">server_name *.{domain};</p>
          <p className="text-gray-900 pl-4">root /var/www/sites/$subdomain;</p>
          <p className="text-gray-900 pl-4">index index.html;</p>
          <p className="text-gray-900">{'}'}</p>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Set up a wildcard DNS record (*.{domain} → your server IP) and configure Nginx to serve each subdomain from its own directory.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">How This Works</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">1</span>
            <div>
              <p className="font-medium">Customer pays you</p>
              <p className="text-sm text-gray-500">They choose a plan. You collect payment (bank transfer, UPI, Stripe, etc.)</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">2</span>
            <div>
              <p className="font-medium">You create their site</p>
              <p className="text-sm text-gray-500">Pick industry template, enter their business info, choose subdomain</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">3</span>
            <div>
              <p className="font-medium">Deploy to your subdomain</p>
              <p className="text-sm text-gray-500">Site goes live at customer.{domain} — YOU control everything</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">4</span>
            <div>
              <p className="font-medium">Full admin control</p>
              <p className="text-sm text-gray-500">Suspend, take down, update, or delete any site anytime. They pay, they stay. They don't? Take it down.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Password */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
        <p className="text-sm text-gray-600 mb-2">Admin password is set in <code className="bg-gray-100 px-2 py-1 rounded">src/app/admin/layout.jsx</code></p>
        <p className="text-sm text-gray-500">Default: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code> — <span className="text-red-600 font-medium">Change this before deploying!</span></p>
      </div>
    </div>
  );
}
