'use client';

import { useState, useEffect } from 'react';

export default function BillingPage() {
  const [records, setRecords] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ customerId: '', amount: '', plan: 'starter', notes: '' });
  const [filter, setFilter] = useState('all'); // all, paid, pending, overdue

  const loadData = () => {
    fetch('/api/admin/billing').then(r => r.json()).then(setRecords);
    fetch('/api/admin/customers').then(r => r.json()).then(setCustomers);
  };

  useEffect(() => { loadData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/admin/billing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, amount: parseFloat(form.amount) }),
    });
    setForm({ customerId: '', amount: '', plan: 'starter', notes: '' });
    setShowForm(false);
    loadData();
  };

  const handleMarkPaid = async (id) => {
    await fetch('/api/admin/billing', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'markPaid', method: 'manual' }),
    });
    loadData();
  };

  const getCustomerName = (id) => {
    const c = customers.find(c => c.id === id);
    return c ? c.name : 'Unknown';
  };

  const filteredRecords = filter === 'all' ? records : records.filter(r => r.status === filter);
  const totalPaid = records.filter(r => r.status === 'paid').reduce((s, r) => s + r.amount, 0);
  const totalPending = records.filter(r => r.status === 'pending').reduce((s, r) => s + r.amount, 0);

  const statusColors = {
    paid: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    overdue: 'bg-red-100 text-red-700',
    refunded: 'bg-gray-100 text-gray-700',
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
          <p className="text-gray-500 mt-1">Track payments and revenue</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
        >
          {showForm ? 'Cancel' : '+ Create Invoice'}
        </button>
      </div>

      {/* Revenue Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <p className="text-sm text-green-600">Total Collected</p>
          <p className="text-2xl font-bold text-green-700">${totalPaid}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
          <p className="text-sm text-yellow-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-700">${totalPending}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">Total Invoices</p>
          <p className="text-2xl font-bold text-blue-700">{records.length}</p>
        </div>
      </div>

      {/* Create Invoice Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Create Invoice</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select value={form.customerId} onChange={e => setForm({...form, customerId: e.target.value})} required className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="">Select Customer *</option>
              {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <input type="number" placeholder="Amount ($) *" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} required className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <select value={form.plan} onChange={e => setForm({...form, plan: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="starter">Starter Plan</option>
              <option value="business">Business Plan</option>
              <option value="premium">Premium Plan</option>
            </select>
            <input type="text" placeholder="Notes" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <div className="md:col-span-2">
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">Create Invoice</button>
            </div>
          </form>
        </div>
      )}

      {/* Filter */}
      <div className="flex gap-2 mb-4">
        {['all', 'paid', 'pending', 'overdue'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded-lg text-sm font-medium ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Billing Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Plan</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredRecords.map(record => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{getCustomerName(record.customerId)}</td>
                <td className="px-6 py-4 text-sm text-gray-600 capitalize">{record.plan}</td>
                <td className="px-6 py-4 font-bold text-gray-900">${record.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[record.status]}`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{new Date(record.invoiceDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right">
                  {record.status === 'pending' && (
                    <button onClick={() => handleMarkPaid(record.id)} className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200 font-medium">
                      Mark Paid
                    </button>
                  )}
                  {record.status === 'paid' && (
                    <span className="text-sm text-gray-400">✓ Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredRecords.length === 0 && (
          <div className="text-center py-12 text-gray-500">No billing records found.</div>
        )}
      </div>
    </div>
  );
}
