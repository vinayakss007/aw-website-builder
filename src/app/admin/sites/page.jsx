'use client';

import { useState, useEffect } from 'react';

const INDUSTRIES = ['restaurant', 'healthcare', 'real-estate', 'education', 'fitness', 'technology', 'legal', 'photography', 'salon-spa', 'construction'];

export default function SitesPage() {
  const [sites, setSites] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ customerId: '', industry: 'restaurant', subdomain: '', businessName: '', templateType: 'dynamic', heroVariant: 0 });

  const loadData = () => {
    fetch('/api/admin/sites').then(r => r.json()).then(setSites);
    fetch('/api/admin/customers').then(r => r.json()).then(setCustomers);
  };

  useEffect(() => { loadData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/sites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error);
      return;
    }
    setForm({ customerId: '', industry: 'restaurant', subdomain: '', businessName: '', templateType: 'dynamic', heroVariant: 0 });
    setShowForm(false);
    loadData();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this site?')) return;
    await fetch(`/api/admin/sites?id=${id}`, { method: 'DELETE' });
    loadData();
  };

  const handleDeploy = async (siteId) => {
    const res = await fetch('/api/admin/deployments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ siteId }),
    });
    const data = await res.json();
    if (res.ok) {
      alert(`Deployed! URL: ${data.url}`);
      loadData();
    } else {
      alert(data.error);
    }
  };

  const getCustomerName = (id) => {
    const c = customers.find(c => c.id === id);
    return c ? c.name : 'Unknown';
  };

  const statusColors = {
    draft: 'bg-gray-100 text-gray-700',
    deployed: 'bg-green-100 text-green-700',
    suspended: 'bg-red-100 text-red-700',
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sites</h1>
          <p className="text-gray-500 mt-1">{sites.length} total sites</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
        >
          {showForm ? 'Cancel' : '+ Create Site'}
        </button>
      </div>

      {/* Create Site Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Create New Site</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select value={form.customerId} onChange={e => setForm({...form, customerId: e.target.value})} required className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="">Select Customer *</option>
              {customers.map(c => <option key={c.id} value={c.id}>{c.name} ({c.company})</option>)}
            </select>
            <select value={form.industry} onChange={e => setForm({...form, industry: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <input type="text" placeholder="Subdomain * (e.g., marios-bistro)" value={form.subdomain} onChange={e => setForm({...form, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')})} required className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="text" placeholder="Business Name *" value={form.businessName} onChange={e => setForm({...form, businessName: e.target.value})} required className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <select value={form.templateType} onChange={e => setForm({...form, templateType: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="dynamic">Dynamic (React)</option>
              <option value="static">Static (HTML)</option>
            </select>
            <select value={form.heroVariant} onChange={e => setForm({...form, heroVariant: parseInt(e.target.value)})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option value={0}>Hero Image: Default</option>
              <option value={1}>Hero Image: Variant 1</option>
              <option value={2}>Hero Image: Variant 2</option>
              <option value={3}>Hero Image: Variant 3</option>
            </select>
            <div className="md:col-span-2 flex items-center gap-2">
              <span className="text-sm text-gray-500">Preview:</span>
              <span className="font-mono text-sm bg-gray-100 px-3 py-1 rounded text-blue-600">{form.subdomain || '___'}.yourdomain.com</span>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">Create Site</button>
            </div>
          </form>
        </div>
      )}

      {/* Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map(site => (
          <div key={site.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <h3 className="font-bold text-lg">{site.businessName}</h3>
              <p className="text-sm opacity-80">{site.subdomain}.yourdomain.com</p>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Industry:</span>
                <span className="font-medium capitalize">{site.industry}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Template:</span>
                <span className="font-medium">{site.templateType}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Customer:</span>
                <span className="font-medium">{getCustomerName(site.customerId)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Status:</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[site.status]}`}>{site.status}</span>
              </div>
              <div className="pt-3 border-t flex gap-2">
                {site.status === 'draft' && (
                  <button onClick={() => handleDeploy(site.id)} className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 font-medium">
                    🚀 Deploy
                  </button>
                )}
                {site.status === 'deployed' && (
                  <a href={`/preview/${site.industry}`} target="_blank" className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 font-medium text-center">
                    👁 Preview
                  </a>
                )}
                <button onClick={() => handleDelete(site.id)} className="px-3 py-2 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200">
                  🗑
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {sites.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-white rounded-xl border">No sites yet. Create one above.</div>
      )}
    </div>
  );
}
