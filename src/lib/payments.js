/**
 * Payment Integration Module
 * Supports Razorpay (India) and Stripe (Global).
 * 
 * YOU (admin) collect payments. Customer pays → site stays live.
 * Customer doesn't pay → auto-suspend after grace period.
 */

// ============ RAZORPAY ============
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || '';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || '';

/**
 * Create a Razorpay order (for Indian customers)
 */
async function createRazorpayOrder(amount, currency = 'INR', customerId, plan) {
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return { error: 'Razorpay not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env' };
  }

  const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

  try {
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: amount * 100, // Razorpay uses paise
        currency,
        receipt: `rcpt_${customerId}_${Date.now()}`,
        notes: { customerId, plan },
      }),
    });

    const data = await response.json();
    return { success: true, order: data };
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Verify Razorpay payment signature
 */
function verifyRazorpayPayment(orderId, paymentId, signature) {
  const crypto = require('crypto');
  const expectedSignature = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return expectedSignature === signature;
}

// ============ STRIPE ============
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';

/**
 * Create a Stripe checkout session (for global customers)
 */
async function createStripeSession(amount, currency = 'usd', customerId, plan, successUrl, cancelUrl) {
  if (!STRIPE_SECRET_KEY) {
    return { error: 'Stripe not configured. Set STRIPE_SECRET_KEY in .env' };
  }

  try {
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'payment_method_types[]': 'card',
        'line_items[0][price_data][currency]': currency,
        'line_items[0][price_data][product_data][name]': `Website Hosting - ${plan} Plan`,
        'line_items[0][price_data][unit_amount]': (amount * 100).toString(),
        'line_items[0][quantity]': '1',
        'mode': 'payment',
        'success_url': successUrl || 'https://yourdomain.com/payment/success',
        'cancel_url': cancelUrl || 'https://yourdomain.com/payment/cancel',
        'metadata[customerId]': customerId,
        'metadata[plan]': plan,
      }),
    });

    const data = await response.json();
    return { success: true, session: data };
  } catch (error) {
    return { error: error.message };
  }
}

// ============ AUTO-SUSPENSION ============
/**
 * Check for overdue payments and auto-suspend sites
 * Run this as a cron job daily
 */
function checkOverduePayments(db) {
  const now = new Date();
  const gracePeriodDays = 7; // Days after due date before suspension

  const overdueRecords = db.billing.filter(b => {
    if (b.status !== 'pending') return false;
    const dueDate = new Date(b.dueDate);
    const diffDays = (now - dueDate) / (1000 * 60 * 60 * 24);
    return diffDays > gracePeriodDays;
  });

  const suspended = [];
  overdueRecords.forEach(record => {
    // Mark billing as overdue
    record.status = 'overdue';

    // Suspend customer's sites
    const customerSites = db.sites.filter(s => s.customerId === record.customerId);
    customerSites.forEach(site => {
      if (site.status === 'deployed') {
        site.status = 'suspended';
        suspended.push({ siteId: site.id, subdomain: site.subdomain, customerId: record.customerId });
      }
    });
  });

  return { overdue: overdueRecords.length, suspended };
}

// ============ PLAN PRICING ============
const PLAN_PRICES = {
  starter: { inr: 999, usd: 29 },
  business: { inr: 2999, usd: 79 },
  premium: { inr: 4999, usd: 149 },
};

function getPlanPrice(plan, currency = 'usd') {
  const prices = PLAN_PRICES[plan];
  if (!prices) return 0;
  return prices[currency] || prices.usd;
}

module.exports = {
  createRazorpayOrder,
  verifyRazorpayPayment,
  createStripeSession,
  checkOverduePayments,
  getPlanPrice,
  PLAN_PRICES,
};
