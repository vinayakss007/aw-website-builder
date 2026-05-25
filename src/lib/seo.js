/**
 * SEO Module - Auto-generates meta tags, Open Graph, schema markup per industry
 * Injected into every deployed customer site.
 */

const { INDUSTRIES } = require('../config/industries');

/**
 * Generate complete SEO head tags for a site
 */
function generateSEOHead(siteConfig) {
  const {
    businessName,
    industry,
    description,
    phone,
    email,
    address,
    subdomain,
    baseDomain,
    heroImageUrl,
  } = siteConfig;

  const industryData = INDUSTRIES[industry] || {};
  const siteUrl = `https://${subdomain}.${baseDomain}`;
  const metaDescription = description || industryData.description || `${businessName} - Professional ${industryData.name || ''} services`;

  return `
    <!-- Primary Meta Tags -->
    <title>${businessName} | ${industryData.name || 'Professional Services'}</title>
    <meta name="title" content="${businessName} | ${industryData.name || 'Professional Services'}">
    <meta name="description" content="${metaDescription}">
    <meta name="keywords" content="${businessName}, ${industryData.name || ''}, ${industry}, services, local business">
    <meta name="author" content="${businessName}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${siteUrl}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${siteUrl}">
    <meta property="og:title" content="${businessName} | ${industryData.name || 'Professional Services'}">
    <meta property="og:description" content="${metaDescription}">
    <meta property="og:image" content="${heroImageUrl || industryData.heroImage || ''}">
    <meta property="og:site_name" content="${businessName}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${siteUrl}">
    <meta property="twitter:title" content="${businessName}">
    <meta property="twitter:description" content="${metaDescription}">
    <meta property="twitter:image" content="${heroImageUrl || industryData.heroImage || ''}">

    <!-- Geo Tags (for local SEO) -->
    <meta name="geo.placename" content="${address || ''}">
  `;
}

/**
 * Generate JSON-LD schema markup based on industry
 */
function generateSchemaMarkup(siteConfig) {
  const { businessName, industry, phone, email, address, subdomain, baseDomain } = siteConfig;
  const industryData = INDUSTRIES[industry] || {};
  const siteUrl = `https://${subdomain}.${baseDomain}`;

  const schemaTypeMap = {
    restaurant: 'Restaurant',
    healthcare: 'MedicalBusiness',
    'real-estate': 'RealEstateAgent',
    education: 'EducationalOrganization',
    fitness: 'SportsActivityLocation',
    technology: 'Organization',
    legal: 'LegalService',
    photography: 'ProfessionalService',
    'salon-spa': 'BeautySalon',
    construction: 'GeneralContractor',
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': schemaTypeMap[industry] || 'LocalBusiness',
    name: businessName,
    url: siteUrl,
    telephone: phone || '',
    email: email || '',
    address: address ? {
      '@type': 'PostalAddress',
      streetAddress: address,
    } : undefined,
    image: industryData.heroImage || '',
    description: industryData.description || '',
    priceRange: '$$',
  };

  // Industry-specific additions
  if (industry === 'restaurant') {
    schema.servesCuisine = 'Various';
    schema.acceptsReservations = 'True';
  }
  if (industry === 'healthcare') {
    schema.medicalSpecialty = 'General Practice';
  }

  return `<script type="application/ld+json">${JSON.stringify(schema, null, 0)}</script>`;
}

/**
 * Generate robots.txt content
 */
function generateRobotsTxt(subdomain, baseDomain) {
  return `User-agent: *
Allow: /
Sitemap: https://${subdomain}.${baseDomain}/sitemap.xml
`;
}

/**
 * Generate sitemap.xml content
 */
function generateSitemap(siteConfig) {
  const { subdomain, baseDomain, sections } = siteConfig;
  const siteUrl = `https://${subdomain}.${baseDomain}`;
  const industryData = INDUSTRIES[siteConfig.industry] || {};
  const sectionList = sections || industryData.sections || [''];

  const urls = sectionList.map((section) => `
  <url>
    <loc>${siteUrl}${section ? `/#${section}` : ''}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${section === '' || section === 'hero' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemapindex.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

module.exports = { generateSEOHead, generateSchemaMarkup, generateRobotsTxt, generateSitemap };
