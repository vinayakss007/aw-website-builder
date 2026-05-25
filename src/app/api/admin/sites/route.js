import { NextResponse } from 'next/server';
import { createSite, getSites, getSite, getSitesByCustomer, updateSite, deleteSite } from '../../../../lib/database';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const customerId = searchParams.get('customerId');
  
  if (id) {
    const site = getSite(id);
    if (!site) return NextResponse.json({ error: 'Site not found' }, { status: 404 });
    return NextResponse.json(site);
  }
  
  if (customerId) {
    return NextResponse.json(getSitesByCustomer(customerId));
  }
  
  return NextResponse.json(getSites());
}

export async function POST(request) {
  const body = await request.json();
  const { customerId, industry, subdomain, businessName, templateType, heroVariant, content } = body;
  
  if (!customerId || !industry || !subdomain || !businessName) {
    return NextResponse.json({ error: 'customerId, industry, subdomain, and businessName required' }, { status: 400 });
  }
  
  // Check subdomain uniqueness
  const existing = getSites().find(s => s.subdomain === subdomain);
  if (existing) {
    return NextResponse.json({ error: 'Subdomain already taken' }, { status: 409 });
  }
  
  const site = createSite({ customerId, industry, subdomain, businessName, templateType, heroVariant, content });
  return NextResponse.json(site, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  const { id, ...data } = body;
  
  if (!id) return NextResponse.json({ error: 'Site ID required' }, { status: 400 });
  
  const result = updateSite(id, data);
  if (!result) return NextResponse.json({ error: 'Site not found' }, { status: 404 });
  return NextResponse.json(result);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) return NextResponse.json({ error: 'Site ID required' }, { status: 400 });
  
  const deleted = deleteSite(id);
  if (!deleted) return NextResponse.json({ error: 'Site not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Site deleted' });
}
