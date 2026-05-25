/**
 * In-memory database for the admin panel.
 * In production, replace with a real database (PostgreSQL, MongoDB, etc.)
 * 
 * This stores: customers, sites, deployments, billing records.
 * YOU (admin) have full control over everything.
 */

// ============ DATABASE STORE ============
let db = {
  customers: [],
  sites: [],
  deployments: [],
  billing: [],
  settings: {
    baseDomain: 'yourdomain.com', // Your domain - customers get subdomains
    plans: [
      { id: 'starter', name: 'Starter', price: 29, features: ['1 Page', 'Basic Template', 'Subdomain'] },
      { id: 'business', name: 'Business', price: 79, features: ['Multi-page', 'Dynamic Template', 'Custom Domain', 'Priority Support'] },
      { id: 'premium', name: 'Premium', price: 149, features: ['Everything in Business', 'AI Content', 'SEO Optimization', 'Analytics', 'Monthly Updates'] },
    ],
  },
  nextId: { customer: 1, site: 1, deployment: 1, billing: 1 },
};

// ============ CUSTOMERS ============
function createCustomer(data) {
  const customer = {
    id: `cust_${db.nextId.customer++}`,
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    company: data.company || '',
    plan: data.plan || 'starter',
    status: 'active', // active, suspended, cancelled
    createdAt: new Date().toISOString(),
    notes: data.notes || '',
  };
  db.customers.push(customer);
  return customer;
}

function getCustomers() {
  return db.customers;
}

function getCustomer(id) {
  return db.customers.find(c => c.id === id) || null;
}

function updateCustomer(id, data) {
  const idx = db.customers.findIndex(c => c.id === id);
  if (idx === -1) return null;
  db.customers[idx] = { ...db.customers[idx], ...data, updatedAt: new Date().toISOString() };
  return db.customers[idx];
}

function deleteCustomer(id) {
  const idx = db.customers.findIndex(c => c.id === id);
  if (idx === -1) return false;
  db.customers.splice(idx, 1);
  // Also remove their sites and deployments
  db.sites = db.sites.filter(s => s.customerId !== id);
  db.deployments = db.deployments.filter(d => d.customerId !== id);
  return true;
}

function suspendCustomer(id) {
  return updateCustomer(id, { status: 'suspended' });
}

function activateCustomer(id) {
  return updateCustomer(id, { status: 'active' });
}

// ============ SITES ============
function createSite(data) {
  const site = {
    id: `site_${db.nextId.site++}`,
    customerId: data.customerId,
    industry: data.industry,
    subdomain: data.subdomain, // e.g., "marios-bistro" → marios-bistro.yourdomain.com
    businessName: data.businessName,
    content: data.content || {},
    templateType: data.templateType || 'dynamic', // static or dynamic
    heroVariant: data.heroVariant || 0,
    status: 'draft', // draft, deployed, suspended
    customDomain: data.customDomain || null,
    createdAt: new Date().toISOString(),
    deployedAt: null,
    lastUpdated: new Date().toISOString(),
  };
  db.sites.push(site);
  return site;
}

function getSites() {
  return db.sites;
}

function getSite(id) {
  return db.sites.find(s => s.id === id) || null;
}

function getSitesByCustomer(customerId) {
  return db.sites.filter(s => s.customerId === customerId);
}

function updateSite(id, data) {
  const idx = db.sites.findIndex(s => s.id === id);
  if (idx === -1) return null;
  db.sites[idx] = { ...db.sites[idx], ...data, lastUpdated: new Date().toISOString() };
  return db.sites[idx];
}

function deleteSite(id) {
  const idx = db.sites.findIndex(s => s.id === id);
  if (idx === -1) return false;
  db.sites.splice(idx, 1);
  return true;
}

// ============ DEPLOYMENTS ============
function createDeployment(data) {
  const deployment = {
    id: `deploy_${db.nextId.deployment++}`,
    siteId: data.siteId,
    customerId: data.customerId,
    subdomain: data.subdomain,
    fullUrl: `https://${data.subdomain}.${db.settings.baseDomain}`,
    status: 'deploying', // deploying, live, failed, taken_down
    deployedAt: new Date().toISOString(),
    deployedBy: 'admin',
    notes: data.notes || '',
  };
  db.deployments.push(deployment);
  
  // Update site status
  updateSite(data.siteId, { status: 'deployed', deployedAt: deployment.deployedAt });
  
  return deployment;
}

function getDeployments() {
  return db.deployments;
}

function getDeployment(id) {
  return db.deployments.find(d => d.id === id) || null;
}

function updateDeployment(id, data) {
  const idx = db.deployments.findIndex(d => d.id === id);
  if (idx === -1) return null;
  db.deployments[idx] = { ...db.deployments[idx], ...data };
  return db.deployments[idx];
}

function takeDownDeployment(id) {
  const deployment = updateDeployment(id, { status: 'taken_down' });
  if (deployment) {
    updateSite(deployment.siteId, { status: 'suspended' });
  }
  return deployment;
}

// ============ BILLING ============
function createBillingRecord(data) {
  const record = {
    id: `bill_${db.nextId.billing++}`,
    customerId: data.customerId,
    amount: data.amount,
    plan: data.plan,
    status: data.status || 'pending', // pending, paid, overdue, refunded
    invoiceDate: data.invoiceDate || new Date().toISOString(),
    dueDate: data.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    paidAt: null,
    method: data.method || '',
    notes: data.notes || '',
  };
  db.billing.push(record);
  return record;
}

function getBillingRecords() {
  return db.billing;
}

function getBillingByCustomer(customerId) {
  return db.billing.filter(b => b.customerId === customerId);
}

function updateBillingRecord(id, data) {
  const idx = db.billing.findIndex(b => b.id === id);
  if (idx === -1) return null;
  db.billing[idx] = { ...db.billing[idx], ...data };
  return db.billing[idx];
}

function markAsPaid(id, method) {
  return updateBillingRecord(id, { status: 'paid', paidAt: new Date().toISOString(), method });
}

// ============ SETTINGS ============
function getSettings() {
  return db.settings;
}

function updateSettings(data) {
  db.settings = { ...db.settings, ...data };
  return db.settings;
}

// ============ STATS ============
function getStats() {
  const totalCustomers = db.customers.length;
  const activeCustomers = db.customers.filter(c => c.status === 'active').length;
  const totalSites = db.sites.length;
  const liveSites = db.sites.filter(s => s.status === 'deployed').length;
  const totalRevenue = db.billing.filter(b => b.status === 'paid').reduce((sum, b) => sum + b.amount, 0);
  const pendingRevenue = db.billing.filter(b => b.status === 'pending').reduce((sum, b) => sum + b.amount, 0);
  const monthlyRecurring = db.customers
    .filter(c => c.status === 'active')
    .reduce((sum, c) => {
      const plan = db.settings.plans.find(p => p.id === c.plan);
      return sum + (plan ? plan.price : 0);
    }, 0);

  return {
    totalCustomers,
    activeCustomers,
    suspendedCustomers: totalCustomers - activeCustomers,
    totalSites,
    liveSites,
    draftSites: totalSites - liveSites,
    totalRevenue,
    pendingRevenue,
    monthlyRecurring,
    totalDeployments: db.deployments.length,
  };
}

// ============ LEADS ============
function createLead(data) {
  const lead = {
    id: `lead_${db.nextId.billing++}`,
    siteId: data.siteId,
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    message: data.message || '',
    businessName: data.businessName || '',
    industry: data.industry || '',
    source: data.source || '',
    status: 'new', // new, contacted, converted, spam
    extra: data.extra || {},
    createdAt: new Date().toISOString(),
  };
  db.leads = db.leads || [];
  db.leads.push(lead);
  return lead;
}

function getLeads() {
  return db.leads || [];
}

function getLeadsBySite(siteId) {
  return (db.leads || []).filter(l => l.siteId === siteId);
}

function updateLead(id, data) {
  db.leads = db.leads || [];
  const idx = db.leads.findIndex(l => l.id === id);
  if (idx === -1) return null;
  db.leads[idx] = { ...db.leads[idx], ...data };
  return db.leads[idx];
}

// ============ SEED DATA (for demo) ============
function seedDatabase() {
  if (db.customers.length > 0) return; // Already seeded

  // Sample customers
  const c1 = createCustomer({ name: 'John Smith', email: 'john@mariosbistro.com', company: "Mario's Bistro", plan: 'business', phone: '(555) 123-4567' });
  const c2 = createCustomer({ name: 'Dr. Sarah Johnson', email: 'sarah@medcare.com', company: 'MedCare Clinic', plan: 'premium', phone: '(555) 890-1234' });
  const c3 = createCustomer({ name: 'Mike Chen', email: 'mike@ironpeak.com', company: 'Iron Peak Fitness', plan: 'starter', phone: '(555) 456-7890' });
  const c4 = createCustomer({ name: 'Lisa Park', email: 'lisa@nexatech.io', company: 'NexaTech', plan: 'premium', phone: '(555) 234-5678' });
  const c5 = createCustomer({ name: 'Amanda Rivera', email: 'amanda@serenity.com', company: 'Serenity Spa', plan: 'business', phone: '(555) 345-6789' });

  // Sample sites
  const s1 = createSite({ customerId: c1.id, industry: 'restaurant', subdomain: 'marios-bistro', businessName: "Mario's Bistro", templateType: 'dynamic' });
  const s2 = createSite({ customerId: c2.id, industry: 'healthcare', subdomain: 'medcare-clinic', businessName: 'MedCare Clinic', templateType: 'dynamic' });
  const s3 = createSite({ customerId: c3.id, industry: 'fitness', subdomain: 'iron-peak', businessName: 'Iron Peak Fitness', templateType: 'static' });
  const s4 = createSite({ customerId: c4.id, industry: 'technology', subdomain: 'nexatech', businessName: 'NexaTech Solutions', templateType: 'dynamic' });
  const s5 = createSite({ customerId: c5.id, industry: 'salon-spa', subdomain: 'serenity-spa', businessName: 'Serenity Beauty & Spa', templateType: 'dynamic' });

  // Sample deployments
  const d1 = createDeployment({ siteId: s1.id, customerId: c1.id, subdomain: 'marios-bistro' });
  updateDeployment(d1.id, { status: 'live' });
  const d2 = createDeployment({ siteId: s2.id, customerId: c2.id, subdomain: 'medcare-clinic' });
  updateDeployment(d2.id, { status: 'live' });
  const d4 = createDeployment({ siteId: s4.id, customerId: c4.id, subdomain: 'nexatech' });
  updateDeployment(d4.id, { status: 'live' });

  // Sample billing
  createBillingRecord({ customerId: c1.id, amount: 79, plan: 'business', status: 'paid' });
  createBillingRecord({ customerId: c2.id, amount: 149, plan: 'premium', status: 'paid' });
  createBillingRecord({ customerId: c3.id, amount: 29, plan: 'starter', status: 'pending' });
  createBillingRecord({ customerId: c4.id, amount: 149, plan: 'premium', status: 'paid' });
  createBillingRecord({ customerId: c5.id, amount: 79, plan: 'business', status: 'pending' });
}

// Auto-seed on first load
seedDatabase();

module.exports = {
  // Customers
  createCustomer, getCustomers, getCustomer, updateCustomer, deleteCustomer, suspendCustomer, activateCustomer,
  // Sites
  createSite, getSites, getSite, getSitesByCustomer, updateSite, deleteSite,
  // Deployments
  createDeployment, getDeployments, getDeployment, updateDeployment, takeDownDeployment,
  // Billing
  createBillingRecord, getBillingRecords, getBillingByCustomer, updateBillingRecord, markAsPaid,
  // Leads
  createLead, getLeads, getLeadsBySite, updateLead,
  // Settings & Stats
  getSettings, updateSettings, getStats,
  // Utils
  seedDatabase,
};
