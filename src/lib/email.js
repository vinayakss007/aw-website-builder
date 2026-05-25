/**
 * Email Notification System
 * Sends emails for: welcome, invoice, payment reminder,
 * suspension warning, deployment success.
 * 
 * Uses nodemailer-compatible config.
 * In production, use SMTP or services like SendGrid, AWS SES.
 */

const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || 'admin@yourdomain.com',
  smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
  smtpPort: parseInt(process.env.SMTP_PORT || '587'),
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
};

/**
 * Send email (mock in dev, real in production)
 */
async function sendEmail({ to, subject, html, text }) {
  // In production, use nodemailer or API-based email service
  // For now, log the email (replace with real sending)
  const email = {
    from: EMAIL_CONFIG.from,
    to,
    subject,
    html,
    text,
    sentAt: new Date().toISOString(),
  };

  console.log(`📧 Email sent to ${to}: ${subject}`);
  
  // Store in email log (for admin to view)
  if (global.__emailLog) {
    global.__emailLog.push(email);
  } else {
    global.__emailLog = [email];
  }

  return { success: true, email };
}

// ============ EMAIL TEMPLATES ============

function welcomeEmail(customer) {
  return sendEmail({
    to: customer.email,
    subject: `Welcome to our platform, ${customer.name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563EB; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Welcome!</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <p>Hi <strong>${customer.name}</strong>,</p>
          <p>Your account has been created. We're building your website now.</p>
          <p><strong>Plan:</strong> ${customer.plan}<br>
          <strong>Company:</strong> ${customer.company || 'N/A'}</p>
          <p>We'll notify you once your site is live.</p>
          <p>Thank you for choosing us!</p>
        </div>
      </div>
    `,
  });
}

function invoiceEmail(customer, billing) {
  return sendEmail({
    to: customer.email,
    subject: `Invoice #${billing.id} - $${billing.amount} due`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1F2937; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Invoice</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <p>Hi <strong>${customer.name}</strong>,</p>
          <p>Your invoice is ready:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px;">Plan</td>
              <td style="padding: 10px; text-align: right;">${billing.plan}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px;">Amount</td>
              <td style="padding: 10px; text-align: right; font-weight: bold;">$${billing.amount}</td>
            </tr>
            <tr>
              <td style="padding: 10px;">Due Date</td>
              <td style="padding: 10px; text-align: right;">${new Date(billing.dueDate).toLocaleDateString()}</td>
            </tr>
          </table>
          <p>Please make payment to keep your site active.</p>
        </div>
      </div>
    `,
  });
}

function paymentReminderEmail(customer, billing, daysOverdue) {
  return sendEmail({
    to: customer.email,
    subject: `⚠️ Payment overdue by ${daysOverdue} days`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #DC2626; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Payment Overdue</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <p>Hi <strong>${customer.name}</strong>,</p>
          <p>Your payment of <strong>$${billing.amount}</strong> is overdue by <strong>${daysOverdue} days</strong>.</p>
          <p style="color: #DC2626; font-weight: bold;">Your site will be suspended if payment is not received within 7 days.</p>
          <p>Please make payment immediately to avoid service interruption.</p>
        </div>
      </div>
    `,
  });
}

function suspensionWarningEmail(customer, site) {
  return sendEmail({
    to: customer.email,
    subject: `🚨 Site suspension notice - ${site.subdomain}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #B91C1C; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Site Suspended</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <p>Hi <strong>${customer.name}</strong>,</p>
          <p>Your website <strong>${site.subdomain}.yourdomain.com</strong> has been suspended due to non-payment.</p>
          <p>To reactivate your site, please clear your pending balance.</p>
          <p>If you believe this is an error, please contact us immediately.</p>
        </div>
      </div>
    `,
  });
}

function deploymentSuccessEmail(customer, site, url) {
  return sendEmail({
    to: customer.email,
    subject: `🎉 Your site is live! - ${url}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #059669; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Your Site is Live!</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <p>Hi <strong>${customer.name}</strong>,</p>
          <p>Great news! Your website is now live:</p>
          <p style="text-align: center; margin: 20px 0;">
            <a href="${url}" style="background: #059669; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold;">${url}</a>
          </p>
          <p><strong>Business:</strong> ${site.businessName}<br>
          <strong>Template:</strong> ${site.industry}</p>
          <p>Share it with your customers!</p>
        </div>
      </div>
    `,
  });
}

function leadNotificationEmail(customerEmail, lead) {
  return sendEmail({
    to: customerEmail,
    subject: `New lead from your website: ${lead.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #7C3AED; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Lead!</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <p>You received a new inquiry from your website:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Name</td>
              <td style="padding: 10px;">${lead.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Email</td>
              <td style="padding: 10px;">${lead.email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Phone</td>
              <td style="padding: 10px;">${lead.phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Message</td>
              <td style="padding: 10px;">${lead.message || 'N/A'}</td>
            </tr>
          </table>
          <p>Reply to this lead ASAP for best conversion!</p>
        </div>
      </div>
    `,
  });
}

module.exports = {
  sendEmail,
  welcomeEmail,
  invoiceEmail,
  paymentReminderEmail,
  suspensionWarningEmail,
  deploymentSuccessEmail,
  leadNotificationEmail,
  EMAIL_CONFIG,
};
