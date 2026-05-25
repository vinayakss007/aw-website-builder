import { NextResponse } from 'next/server';
import { createDeployment, getDeployments, updateDeployment, takeDownDeployment, getSite, getSettings } from '../../../../lib/database';
import { fillMissingContent } from '../../../../ai/content-filler';
import { getHeroImage } from '../../../../assets/hero-images';

export async function GET() {
  return NextResponse.json(getDeployments());
}

/**
 * POST - Deploy a site to subdomain
 * This is where YOU (admin) deploy customer sites to YOUR domain.
 * 
 * In production, this would:
 * 1. Generate the static HTML
 * 2. Upload to your server/CDN
 * 3. Configure DNS/nginx for the subdomain
 * 4. Mark as live
 */
export async function POST(request) {
  const body = await request.json();
  const { siteId, notes } = body;
  
  if (!siteId) {
    return NextResponse.json({ error: 'siteId required' }, { status: 400 });
  }
  
  const site = getSite(siteId);
  if (!site) {
    return NextResponse.json({ error: 'Site not found' }, { status: 404 });
  }
  
  const settings = getSettings();
  
  // Generate the website content
  const filledContent = await fillMissingContent(site.content || {}, site.industry, null);
  const heroImage = getHeroImage(site.industry, site.heroVariant || 0);
  
  // Create deployment record
  const deployment = createDeployment({
    siteId: site.id,
    customerId: site.customerId,
    subdomain: site.subdomain,
    notes,
  });
  
  // Simulate deployment (in production: upload files, configure nginx/CDN)
  // Mark as live after "deployment"
  updateDeployment(deployment.id, { status: 'live' });
  
  return NextResponse.json({
    success: true,
    deployment,
    url: `https://${site.subdomain}.${settings.baseDomain}`,
    message: `Site deployed to ${site.subdomain}.${settings.baseDomain}`,
    generatedContent: filledContent,
    heroImage: heroImage.url,
  }, { status: 201 });
}

/**
 * PUT - Update deployment (take down, reactivate, etc.)
 */
export async function PUT(request) {
  const body = await request.json();
  const { id, action } = body;
  
  if (!id) return NextResponse.json({ error: 'Deployment ID required' }, { status: 400 });
  
  let result;
  if (action === 'takedown') {
    result = takeDownDeployment(id);
  } else if (action === 'reactivate') {
    result = updateDeployment(id, { status: 'live' });
  } else {
    result = updateDeployment(id, body);
  }
  
  if (!result) return NextResponse.json({ error: 'Deployment not found' }, { status: 404 });
  return NextResponse.json(result);
}
