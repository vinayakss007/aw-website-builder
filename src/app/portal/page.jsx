'use client';

import { useState } from 'react';

/**
 * Customer Portal - Read-only dashboard for customers.
 * They can view: site status, invoices, lead count.
 * They CANNOT edit anything - only YOU (admin) can.
 */
export default function CustomerPortal() {
  const [email, setEmail] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch(`/api/portal?email=${encodeURIComponent(email)}`);
    const result = await res.json();

    if (res.ok) {
      setData(result);
    } else {
      setError(result.error || 'Account not found');
    }
    setLoading(false);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Customer Portal</h1>
            <p className="text-gray-500 mt-2">View your site status & invoices</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'View My Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const { customer, sites, billing, leads } = data;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {customer.name}</h1>
            <p className="text-gray-500">{customer.company} &bull; {customer.plan} plan</p>
          </div>
          <button onClick={() => setData(null)} className="text-sm text-gray-500 hover:text-gray-700">
            Logout
          </button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border p-6">
            <p className="text-sm text-gray-500">Account Status</p>
            <p className={`text-lg font-bold mt-1 ${customer.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
              {customer.status === 'active' ? '● Active' : '● Suspended'}
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <p className="text-sm text-gray-500">Sites</p>
            <p className="text-lg font-bold mt-1 text-blue-600">{sites.length} site(s)</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <p className="text-sm text-gray-500">Leads Received</p>
            <p className="text-lg font-bold mt-1 text-purple-600">{leads.length}</p>
          </div>
        </div>

        {/* Sites */}
        <div className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Your Website(s)</h2>
          {sites.length === 0 ? (
            <p className="text-gray-500">Your site is being set up. We'll notify you when it's live.</p>
          ) : (
            <div className="space-y-4">
              {sites.map(site => (
                <div key={site.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{site.businessName}</p>
                    <p className="text-sm text-blue-600">{site.subdomain}.yourdomain.com</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    site.status === 'deployed' ? 'bg-green-100 text-green-700' :
                    site.status === 'suspended' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {site.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Billing */}
        <div className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Invoices</h2>
          {billing.length === 0 ? (
            <p className="text-gray-500">No invoices yet.</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500 uppercase border-b">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {billing.map(b => (
                  <tr key={b.id} className="border-b last:border-0">
                    <td className="py-3 text-sm">{new Date(b.invoiceDate).toLocaleDateString()}</td>
                    <td className="py-3 font-medium">${b.amount}</td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        b.status === 'paid' ? 'bg-green-100 text-green-700' :
                        b.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>{b.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Leads</h2>
          {leads.length === 0 ? (
            <p className="text-gray-500">No leads yet. They'll show up here once your site gets inquiries.</p>
          ) : (
            <div className="space-y-3">
              {leads.slice(0, 10).map(lead => (
                <div key={lead.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.email}</p>
                  </div>
                  <span className="text-xs text-gray-400">{new Date(lead.createdAt).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Need changes? Contact your admin. This is a read-only portal.
        </p>
      </div>
    </div>
  );
}
