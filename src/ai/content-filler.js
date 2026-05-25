/**
 * AI Content Filler Module
 * 
 * IMPORTANT: AI is ONLY used to fill content gaps when the template
 * doesn't have the needed content. Templates are PRE-BUILT - AI does NOT
 * generate or modify template structure.
 * 
 * This module:
 * 1. Checks what content the user provided
 * 2. Identifies missing fields that the template needs
 * 3. Uses AI ONLY to generate the missing text content
 * 4. Returns the filled content to be injected into the template
 */

const { INDUSTRIES } = require('../config/industries');

/**
 * Content fields that each template expects
 */
const REQUIRED_FIELDS = {
  businessName: { type: 'string', description: 'Business name' },
  heroTitle: { type: 'string', description: 'Main hero headline' },
  heroSubtitle: { type: 'string', description: 'Hero subtitle/tagline' },
  aboutText: { type: 'string', description: 'About us paragraph' },
  phone: { type: 'string', description: 'Contact phone number' },
  email: { type: 'string', description: 'Contact email' },
  address: { type: 'string', description: 'Business address' },
};

/**
 * Generate content for missing fields using AI
 * Only fills what's NOT provided by the user
 */
async function fillMissingContent(userContent, industryId, openaiClient) {
  const industry = INDUSTRIES[industryId];
  if (!industry) {
    throw new Error(`Unknown industry: ${industryId}`);
  }

  // Identify what's missing
  const missingFields = {};
  const providedFields = {};

  Object.keys(REQUIRED_FIELDS).forEach((field) => {
    if (!userContent[field] || userContent[field].trim() === '') {
      missingFields[field] = REQUIRED_FIELDS[field];
    } else {
      providedFields[field] = userContent[field];
    }
  });

  // If nothing is missing, return user content as-is
  if (Object.keys(missingFields).length === 0) {
    return userContent;
  }

  // If no AI client provided, use fallback defaults
  if (!openaiClient) {
    return {
      ...userContent,
      ...generateFallbackContent(industryId, missingFields, providedFields),
    };
  }

  // Use AI to fill ONLY the missing fields
  try {
    const filledContent = await generateWithAI(
      openaiClient,
      industryId,
      industry,
      missingFields,
      providedFields
    );
    return { ...userContent, ...filledContent };
  } catch (error) {
    console.error('AI content generation failed, using fallbacks:', error.message);
    return {
      ...userContent,
      ...generateFallbackContent(industryId, missingFields, providedFields),
    };
  }
}

/**
 * Use OpenAI to generate content for missing fields
 */
async function generateWithAI(openaiClient, industryId, industry, missingFields, providedFields) {
  const fieldsList = Object.entries(missingFields)
    .map(([key, info]) => `- ${key}: ${info.description}`)
    .join('\n');

  const contextInfo = Object.entries(providedFields)
    .map(([key, value]) => `- ${key}: ${value}`)
    .join('\n');

  const prompt = `You are a professional copywriter. Generate website content for a ${industry.name} business.

${contextInfo ? `Known information about this business:\n${contextInfo}\n` : ''}

Generate ONLY the following missing fields (return as JSON object):
${fieldsList}

Rules:
- Keep heroTitle under 8 words, impactful and industry-appropriate
- Keep heroSubtitle under 20 words
- aboutText should be 2-3 sentences, professional tone
- If businessName is missing, create a believable one for the ${industry.name} industry
- phone should be format: (555) XXX-XXXX
- email should match the business name
- address should be a realistic-sounding address

Return ONLY valid JSON, no markdown.`;

  const response = await openaiClient.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 500,
  });

  const content = response.choices[0].message.content.trim();
  
  // Parse AI response
  try {
    // Remove potential markdown code blocks
    const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  } catch (parseError) {
    console.error('Failed to parse AI response:', content);
    return generateFallbackContent(industryId, missingFields, {});
  }
}

/**
 * Generate fallback content without AI (deterministic defaults)
 * Used when AI is unavailable or fails
 */
function generateFallbackContent(industryId, missingFields, providedFields) {
  const industry = INDUSTRIES[industryId];
  const businessName = providedFields.businessName || FALLBACK_NAMES[industryId];
  const result = {};

  Object.keys(missingFields).forEach((field) => {
    switch (field) {
      case 'businessName':
        result.businessName = FALLBACK_NAMES[industryId];
        break;
      case 'heroTitle':
        result.heroTitle = FALLBACK_HERO_TITLES[industryId];
        break;
      case 'heroSubtitle':
        result.heroSubtitle = FALLBACK_HERO_SUBTITLES[industryId];
        break;
      case 'aboutText':
        result.aboutText = FALLBACK_ABOUT[industryId];
        break;
      case 'phone':
        result.phone = '(555) 123-4567';
        break;
      case 'email':
        result.email = `info@${businessName.toLowerCase().replace(/[^a-z]/g, '')}.com`;
        break;
      case 'address':
        result.address = '123 Main Street, Suite 100, City, State 12345';
        break;
      default:
        result[field] = '';
    }
  });

  return result;
}

// Fallback content per industry (used when AI is unavailable)
const FALLBACK_NAMES = {
  restaurant: 'La Bella Cucina',
  healthcare: 'MedCare Health Center',
  'real-estate': 'Premier Properties Group',
  education: 'Westfield Academy',
  fitness: 'Iron Peak Fitness',
  technology: 'NexaTech Solutions',
  legal: 'Crawford & Sterling Law',
  photography: 'Aperture Studios',
  'salon-spa': 'Serenity Beauty & Spa',
  construction: 'Titan Construction Co.',
};

const FALLBACK_HERO_TITLES = {
  restaurant: 'A Culinary Journey Awaits',
  healthcare: 'Your Health, Our Priority',
  'real-estate': 'Find Your Dream Home',
  education: 'Shape Your Future Today',
  fitness: 'Transform Your Body & Mind',
  technology: 'Build the Future, Today',
  legal: 'Justice. Integrity. Results.',
  photography: 'Capturing Life\'s Moments',
  'salon-spa': 'Indulge in Pure Luxury',
  construction: 'Building Excellence Since Day One',
};

const FALLBACK_HERO_SUBTITLES = {
  restaurant: 'Experience authentic cuisine crafted with passion and the finest seasonal ingredients.',
  healthcare: 'Comprehensive, compassionate care with cutting-edge technology for you and your family.',
  'real-estate': 'Discover exceptional properties with expert guidance through every step of your journey.',
  education: 'World-class programs designed to prepare tomorrow\'s leaders for success.',
  fitness: 'Expert trainers, state-of-the-art equipment, and a community that motivates.',
  technology: 'Cutting-edge solutions that transform businesses and drive innovation at scale.',
  legal: 'Experienced attorneys fighting for your rights with unwavering dedication.',
  photography: 'Professional photography that tells your story through breathtaking imagery.',
  'salon-spa': 'Premium beauty and wellness treatments in a sanctuary designed for relaxation.',
  construction: 'Quality craftsmanship, on-time delivery, and decades of trusted expertise.',
};

const FALLBACK_ABOUT = {
  restaurant: 'We have been serving unforgettable cuisine since 1998. Our recipes have been passed down through generations, bringing authentic flavors to your table with locally sourced ingredients and a passion for culinary excellence.',
  healthcare: 'Our team of board-certified physicians combines decades of experience with the latest medical advancements. We believe everyone deserves access to exceptional healthcare delivered with compassion and integrity.',
  'real-estate': 'With over 15 years of experience, our team of dedicated professionals has helped hundreds of families find their perfect home. We combine market expertise with personalized service to make your real estate dreams a reality.',
  education: 'For over five decades, we have been shaping minds and nurturing talent. Our distinguished faculty and innovative programs produce graduates who lead in their respective fields across the globe.',
  fitness: 'Founded on the belief that fitness should be accessible and enjoyable for everyone, we combine cutting-edge equipment with expert coaching to help you achieve results that last a lifetime.',
  technology: 'We partner with forward-thinking companies to build transformative technology. From AI-powered automation to cloud infrastructure, we turn complex challenges into elegant solutions that drive measurable results.',
  legal: 'For over three decades, our firm has been a pillar of legal excellence. We combine aggressive advocacy with compassionate client service, recovering over $500 million for our clients.',
  photography: 'With an eye for the extraordinary in the ordinary, we capture emotions and tell stories through our lens. Our work has been featured in numerous international publications and has won multiple industry awards.',
  'salon-spa': 'Our sanctuary of beauty and wellness combines world-class treatments with a warm, inviting atmosphere. Every visit is designed to rejuvenate your body, refresh your mind, and elevate your spirit.',
  construction: 'For over 25 years, we have been building landmarks, homes, and infrastructure that stand the test of time. Our commitment to quality, safety, and innovation drives every project we undertake.',
};

module.exports = { fillMissingContent, generateFallbackContent, REQUIRED_FIELDS };
