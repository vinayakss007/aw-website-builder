/**
 * API Route: Generate Website
 * POST /api/generate
 * 
 * Accepts industry + content, returns generated website.
 * AI only fills missing content - does NOT generate templates.
 */

import { NextResponse } from 'next/server';
import { INDUSTRIES } from '../../../config/industries';
import { fillMissingContent } from '../../../ai/content-filler';
import { getHeroImage } from '../../../assets/hero-images';

export async function POST(request) {
  try {
    const body = await request.json();
    const { industry, content = {}, heroVariant = 0, type = 'dynamic' } = body;

    // Validate
    if (!industry || !INDUSTRIES[industry]) {
      return NextResponse.json(
        { error: `Invalid industry. Available: ${Object.keys(INDUSTRIES).join(', ')}` },
        { status: 400 }
      );
    }

    // Fill missing content (uses fallbacks if no AI key)
    const filledContent = await fillMissingContent(content, industry, null);

    // Get hero image
    const heroImage = getHeroImage(industry, heroVariant);

    return NextResponse.json({
      success: true,
      industry,
      type,
      template: INDUSTRIES[industry].name,
      heroImage: heroImage.url,
      content: filledContent,
      sections: INDUSTRIES[industry].sections,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'AW Website Builder API',
    endpoints: {
      'POST /api/generate': 'Generate website with industry template',
    },
    industries: Object.keys(INDUSTRIES).map(id => ({
      id,
      name: INDUSTRIES[id].name,
    })),
  });
}
