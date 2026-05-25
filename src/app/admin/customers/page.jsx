'use client';

import { useState, useEffect } from 'react';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', plan: 'starter', notes: '' });

  const loadCustomers = () => {
    fetch('/api/admin/customers').then(r => r.json()).then(setCustomers);
  };

  useEffect(() => { loadCustomers(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingCustomer) {
      await fetch('/api/admin/customers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingCustomer.id, ...form }),
      });
    } else {
      await fetch('/api/admin/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setForm({ name: '', email: '', phone: '', company: '', plan: 'starter', notes: '' });
    setShowForm(false);
    setEditingCustomer(null);
    loadCustomers();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this customer and all their sites?')) return;
    await fetch(`/api/admin/customers?id=${id}`, { method: 'DELETE' });
    loadCustomers();
  };

  const handleSuspend = async (id) => {
    await fetch('/api/admin/customers', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'suspend' }),
    });
    loadCustomers();
  };

  const handleActivate = async (id) => {
    await fetch('/api/admin/customers', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'activate' }),
    });
    loadCustomers();
  };

  const startEdit = (customer) => {
    setEditingCustomer(customer);
    setForm({ name: customer.name, email: customer.email, phone: customer.phone, company: customer.company, plan: customer.plan, notes: customer.notes || '' });
    setShowForm(true);
  };

  const planColors = {
    starter: 'bg-gray-100 text-gray-700',
    business: 'bg-blue-100 text-blue-700',
    premium: 'bg-purple-100 text-purple-700',
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-500 mt-1">{customers.length} total customers</p>
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setEditingCustomer(null); setForm({ name: '', email: '', phone: '', company: '', plan: 'starter', notes: '' }); }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
        >
          {showForm ? 'Cancel' : '+ Add Customer'}
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">{editingCustomer ? 'Edit Customer' : 'New Customer'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="email" placeholder="Email *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="text" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <select value={form.plan} onChange={e => setForm({...form, plan: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="starter">Starter ($29/mo)</option>
              <option value="business">Business ($79/mo)</option>
              <option value="premium">Premium ($149/mo)</option>
            </select>
            <input type="text" placeholder="Notes" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <div className="md:col-span-2">
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
                {editingCustomer ? 'Update Customer' : 'Create Customer'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Customer List */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Company</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Plan</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Joined</th>
              <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {customers.map(customer => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{customer.name}</div>
                  <div className="text-sm text-gray-500">{customer.email}</div>
                </td>
                <td className="px-6 py-4 text-gray-600">{customer.company || '—'}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${planColors[customer.plan] || planColors.starter}`}>
                    {customer.plan}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${customer.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(customer.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button onClick={() => startEdit(customer)} className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                  {customer.status === 'active' ? (
                    <button onClick={() => handleSuspend(customer.id)} className="text-yellow-600 hover:text-yellow-800 text-sm">Suspend</button>
                  ) : (
                    <button onClick={() => handleActivate(customer.id)} className="text-green-600 hover:text-green-800 text-sm">Activate</button>
                  )}
                  <button onClick={() => handleDelete(customer.id)} className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {customers.length === 0 && (
          <div className="text-center py-12 text-gray-500">No customers yet. Add your first customer above.</div>
        )}
      </div>
    </div>
  );
}
