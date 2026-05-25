/**
 * Customer Portal API - Read-only access for customers
 * Customers can only VIEW their data, not modify anything.
 */

import { NextResponse } from 'next/server';
import { getCustomers, getSitesByCustomer, getBillingByCustomer, getLeadsBySite } from '../../../lib/database';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  // Find customer by email
  const customers = getCustomers();
  const customer = customers.find(c => c.email.toLowerCase() === email.toLowerCase());

  if (!customer) {
    return NextResponse.json({ error: 'No account found with this email' }, { status: 404 });
  }

  // Get their sites
  const sites = getSitesByCustomer(customer.id);

  // Get their billing
  const billing = getBillingByCustomer(customer.id);

  // Get leads across all their sites
  let leads = [];
  sites.forEach(site => {
    const siteLeads = getLeadsBySite(site.id);
    leads = [...leads, ...siteLeads];
  });

  // Return read-only data (no sensitive info)
  return NextResponse.json({
    customer: {
      name: customer.name,
      email: customer.email,
      company: customer.company,
      plan: customer.plan,
      status: customer.status,
      createdAt: customer.createdAt,
    },
    sites: sites.map(s => ({
      id: s.id,
      businessName: s.businessName,
      subdomain: s.subdomain,
      industry: s.industry,
      status: s.status,
      deployedAt: s.deployedAt,
    })),
    billing: billing.map(b => ({
      id: b.id,
      amount: b.amount,
      plan: b.plan,
      status: b.status,
      invoiceDate: b.invoiceDate,
      dueDate: b.dueDate,
      paidAt: b.paidAt,
    })),
    leads: leads.map(l => ({
      id: l.id,
      name: l.name,
      email: l.email,
      phone: l.phone,
      message: l.message,
      createdAt: l.createdAt,
    })),
  });
}
