/**
 * API Route: Lead Capture
 * POST /api/leads - Capture form submissions from customer sites
 * GET /api/leads - Admin: get all leads (with optional siteId filter)
 */

import { NextResponse } from 'next/server';
import { createLead, getLeads, getLeadsBySite, updateLead } from '../../../lib/database';

export async function POST(request) {
  try {
    const body = await request.json();
    const { siteId, name, email, phone, message, businessName, industry, source, ...extra } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const lead = createLead({
      siteId: siteId || 'unknown',
      name,
      email,
      phone: phone || '',
      message: message || '',
      businessName: businessName || '',
      industry: industry || '',
      source: source || '',
      extra,
    });

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const siteId = searchParams.get('siteId');

  if (siteId) {
    return NextResponse.json(getLeadsBySite(siteId));
  }

  return NextResponse.json(getLeads());
}

export async function PUT(request) {
  const body = await request.json();
  const { id, ...data } = body;

  if (!id) return NextResponse.json({ error: 'Lead ID required' }, { status: 400 });

  const result = updateLead(id, data);
  if (!result) return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  return NextResponse.json(result);
}
