#!/usr/bin/env node
/**
 * Website Generator Engine
 * 
 * This is the main build engine that:
 * 1. Selects the correct pre-built template based on industry
 * 2. Fills in user-provided content
 * 3. Uses AI ONLY to fill content gaps (not to generate templates)
 * 4. Outputs the final website files
 */

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { INDUSTRIES } = require('../config/industries');
const { getTemplate, listIndustries } = require('../config/template-registry');
const { fillMissingContent } = require('../ai/content-filler');
const { getHeroImage } = require('../assets/hero-images');


/**
 * Generate a static website from a template
 * @param {object} config - Build configuration
 * @param {string} config.industry - Industry ID
 * @param {string} config.type - 'static' or 'dynamic'
 * @param {object} config.content - User-provided content
 * @param {number} config.heroVariant - Hero image variant (0-3)
 * @param {string} config.outputDir - Output directory
 * @param {object} config.openaiClient - Optional OpenAI client
 */
async function generateWebsite(config) {
  const {
    industry,
    type = 'static',
    content = {},
    heroVariant = 0,
    outputDir = './output',
    openaiClient = null,
  } = config;

  // Validate industry
  if (!INDUSTRIES[industry]) {
    const available = listIndustries().map(i => i.id).join(', ');
    throw new Error(
      `Invalid industry "${industry}". Available: ${available}`
    );
  }

  console.log(`\n🏗️  Building ${type} website for: ${INDUSTRIES[industry].name}`);
  console.log(`   Industry: ${industry}`);
  console.log(`   Template type: ${type}`);


  // Step 1: Fill missing content (AI only fills gaps)
  console.log('\n📝 Filling content...');
  const filledContent = await fillMissingContent(
    content, industry, openaiClient
  );
  console.log('   ✓ Content ready');

  // Step 2: Get hero image
  const heroImage = getHeroImage(industry, heroVariant);
  filledContent.heroImageUrl = heroImage.url;
  console.log(`   ✓ Hero image: variant ${heroVariant}`);

  // Step 3: Generate based on type
  if (type === 'static') {
    return generateStatic(industry, filledContent, outputDir);
  } else {
    return generateDynamic(industry, filledContent, outputDir);
  }
}

/**
 * Generate static HTML website
 */
function generateStatic(industry, content, outputDir) {
  const templatePath = path.resolve(
    __dirname, '..', 'templates', 'static', `${industry}.html`
  );

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Static template not found: ${templatePath}`);
  }

  // Read and compile template with Handlebars
  const templateSource = fs.readFileSync(templatePath, 'utf-8');
  const template = Handlebars.compile(templateSource);
  const html = template(content);


  // Ensure output directory exists
  const outDir = path.resolve(outputDir);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Write output
  const outputFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outputFile, html, 'utf-8');

  console.log(`\n✅ Static website generated!`);
  console.log(`   Output: ${outputFile}`);
  return { type: 'static', output: outputFile, content };
}

/**
 * Generate dynamic React/Next.js project config
 */
function generateDynamic(industry, content, outputDir) {
  const outDir = path.resolve(outputDir);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Write props file for the dynamic template
  const propsFile = path.join(outDir, 'site-content.json');
  fs.writeFileSync(propsFile, JSON.stringify(content, null, 2), 'utf-8');

  // Write page component that imports the template
  const componentName = industry
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('') + 'Template';


  const pageContent = `import { ${componentName} } from '@/templates/dynamic';
import siteContent from './site-content.json';

export default function Page() {
  return <${componentName} {...siteContent} />;
}
`;

  const pageFile = path.join(outDir, 'page.jsx');
  fs.writeFileSync(pageFile, pageContent, 'utf-8');

  console.log(`\n✅ Dynamic website generated!`);
  console.log(`   Props: ${propsFile}`);
  console.log(`   Page: ${pageFile}`);
  return { type: 'dynamic', output: outDir, content, component: componentName };
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help')) {
    console.log(`
AW Website Builder - Generate Engine

Usage:
  node generate.js <industry> [options]

Industries:
${listIndustries().map(i => `  ${i.id.padEnd(16)} ${i.name}`).join('\n')}

Options:
  --type <static|dynamic>   Template type (default: static)
  --name <business-name>    Business name
  --output <dir>            Output directory (default: ./output)
  --variant <0-3>           Hero image variant

Examples:
  node generate.js restaurant --name "Mario's Bistro"
  node generate.js technology --type dynamic --name "CloudCo"
  node generate.js healthcare --variant 2
`);
    process.exit(0);
  }


  // Parse CLI args
  const industry = args[0];
  const getArg = (flag) => {
    const idx = args.indexOf(flag);
    return idx !== -1 ? args[idx + 1] : null;
  };

  const config = {
    industry,
    type: getArg('--type') || 'static',
    heroVariant: parseInt(getArg('--variant') || '0', 10),
    outputDir: getArg('--output') || `./output/${industry}`,
    content: {},
  };

  if (getArg('--name')) config.content.businessName = getArg('--name');
  if (getArg('--phone')) config.content.phone = getArg('--phone');
  if (getArg('--email')) config.content.email = getArg('--email');

  generateWebsite(config)
    .then(() => console.log('\n🎉 Done!'))
    .catch((err) => {
      console.error('\n❌ Error:', err.message);
      process.exit(1);
    });
}

module.exports = { generateWebsite };
