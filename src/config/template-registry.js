/**
 * Template Registry - Maps industries to their static and dynamic templates.
 * Templates are PRE-BUILT. AI does NOT generate templates.
 */

const { INDUSTRIES } = require('./industries');

const TEMPLATE_TYPES = {
  STATIC: 'static',   // Pure HTML templates - served as-is
  DYNAMIC: 'dynamic', // React component templates - interactive
};

const TEMPLATE_REGISTRY = {};

// Register all industries with both static and dynamic templates
Object.keys(INDUSTRIES).forEach((industryId) => {
  TEMPLATE_REGISTRY[industryId] = {
    static: {
      type: TEMPLATE_TYPES.STATIC,
      path: `../templates/static/${industryId}.html`,
      industry: INDUSTRIES[industryId],
    },
    dynamic: {
      type: TEMPLATE_TYPES.DYNAMIC,
      path: `../templates/dynamic/${industryId}`,
      component: `${industryId.charAt(0).toUpperCase() + industryId.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Template`,
      industry: INDUSTRIES[industryId],
    },
  };
});

function getTemplate(industryId, type = 'dynamic') {
  if (!TEMPLATE_REGISTRY[industryId]) {
    throw new Error(`No template found for industry: ${industryId}`);
  }
  if (!TEMPLATE_REGISTRY[industryId][type]) {
    throw new Error(`No ${type} template found for industry: ${industryId}`);
  }
  return TEMPLATE_REGISTRY[industryId][type];
}

function listIndustries() {
  return Object.keys(INDUSTRIES).map((id) => ({
    id,
    name: INDUSTRIES[id].name,
    description: INDUSTRIES[id].description,
  }));
}

function listTemplates(industryId) {
  if (industryId) {
    return TEMPLATE_REGISTRY[industryId] || null;
  }
  return TEMPLATE_REGISTRY;
}

module.exports = { TEMPLATE_REGISTRY, TEMPLATE_TYPES, getTemplate, listIndustries, listTemplates };
