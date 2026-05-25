'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(r => r.json())
      .then(data => { setStats(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="animate-pulse text-gray-500">Loading dashboard...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of your website builder business</p>
        </div>
        <Link href="/admin/customers" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
          + New Customer
        </Link>
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard label="Monthly Recurring" value={`$${stats?.monthlyRecurring || 0}`} icon="💰" color="green" />
        <StatCard label="Total Revenue" value={`$${stats?.totalRevenue || 0}`} icon="📈" color="blue" />
        <StatCard label="Pending Payments" value={`$${stats?.pendingRevenue || 0}`} icon="⏳" color="yellow" />
        <StatCard label="Active Customers" value={stats?.activeCustomers || 0} icon="👥" color="purple" />
      </div>

      {/* Site Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard label="Live Sites" value={stats?.liveSites || 0} icon="🌐" color="green" />
        <StatCard label="Draft Sites" value={stats?.draftSites || 0} icon="📝" color="gray" />
        <StatCard label="Total Deployments" value={stats?.totalDeployments || 0} icon="🚀" color="blue" />
      </div>

      {/* Domain Info */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Domain</h2>
        <p className="text-gray-600">Customer sites deploy to: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-blue-600">*.{stats?.baseDomain}</span></p>
        <p className="text-gray-500 text-sm mt-2">Example: marios-bistro.{stats?.baseDomain}</p>
      </div>

      {/* Pricing Plans */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats?.plans?.map(plan => (
            <div key={plan.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">{plan.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mt-1">${plan.price}<span className="text-sm text-gray-400">/mo</span></p>
              <ul className="mt-3 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-600">✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }) {
  const colorMap = {
    green: 'bg-green-50 border-green-200',
    blue: 'bg-blue-50 border-blue-200',
    yellow: 'bg-yellow-50 border-yellow-200',
    purple: 'bg-purple-50 border-purple-200',
    gray: 'bg-gray-50 border-gray-200',
  };

  return (
    <div className={`rounded-xl border p-6 ${colorMap[color] || colorMap.gray}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  );
}
