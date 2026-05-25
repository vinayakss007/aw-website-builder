'use client';

import { useState, useEffect } from 'react';

export default function DeploymentsPage() {
  const [deployments, setDeployments] = useState([]);

  const loadData = () => {
    fetch('/api/admin/deployments').then(r => r.json()).then(setDeployments);
  };

  useEffect(() => { loadData(); }, []);

  const handleTakeDown = async (id) => {
    if (!confirm('Take down this deployment? The site will become inaccessible.')) return;
    await fetch('/api/admin/deployments', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'takedown' }),
    });
    loadData();
  };

  const handleReactivate = async (id) => {
    await fetch('/api/admin/deployments', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'reactivate' }),
    });
    loadData();
  };

  const statusColors = {
    live: 'bg-green-100 text-green-700',
    deploying: 'bg-yellow-100 text-yellow-700',
    failed: 'bg-red-100 text-red-700',
    taken_down: 'bg-gray-100 text-gray-700',
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Deployments</h1>
        <p className="text-gray-500 mt-1">Manage all live and past deployments on your domain</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Subdomain</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Full URL</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Deployed</th>
              <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {deployments.map(dep => (
              <tr key={dep.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-sm font-medium">{dep.subdomain}</td>
                <td className="px-6 py-4 text-sm text-blue-600">{dep.fullUrl}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[dep.status]}`}>
                    {dep.status === 'live' ? '● Live' : dep.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(dep.deployedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  {dep.status === 'live' && (
                    <button onClick={() => handleTakeDown(dep.id)} className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200">
                      Take Down
                    </button>
                  )}
                  {dep.status === 'taken_down' && (
                    <button onClick={() => handleReactivate(dep.id)} className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200">
                      Reactivate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deployments.length === 0 && (
          <div className="text-center py-12 text-gray-500">No deployments yet. Deploy a site from the Sites page.</div>
        )}
      </div>
    </div>
  );
}
