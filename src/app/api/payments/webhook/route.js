/**
 * Payment Webhook Handler
 * Receives notifications from Razorpay/Stripe when payment succeeds or fails.
 * Auto-activates or auto-suspends sites based on payment status.
 */

import { NextResponse } from 'next/server';
import { markAsPaid, getBillingRecords, getCustomer } from '../../../../lib/database';
import { verifyRazorpayPayment } from '../../../../lib/payments';

export async function POST(request) {
  const body = await request.json();
  const { provider, event, data } = body;

  try {
    if (provider === 'razorpay') {
      return handleRazorpay(event, data);
    } else if (provider === 'stripe') {
      return handleStripe(event, data);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function handleRazorpay(event, data) {
  if (event === 'payment.captured') {
    const { order_id, id: paymentId, notes } = data;
    const customerId = notes?.customerId;

    if (customerId) {
      // Find pending billing record and mark as paid
      const records = getBillingRecords();
      const pending = records.find(r =>
        r.customerId === customerId && r.status === 'pending'
      );
      if (pending) {
        markAsPaid(pending.id, 'razorpay');
      }
    }

    return NextResponse.json({ success: true, message: 'Payment processed' });
  }

  return NextResponse.json({ received: true });
}

function handleStripe(event, data) {
  if (event === 'checkout.session.completed') {
    const customerId = data.metadata?.customerId;

    if (customerId) {
      const records = getBillingRecords();
      const pending = records.find(r =>
        r.customerId === customerId && r.status === 'pending'
      );
      if (pending) {
        markAsPaid(pending.id, 'stripe');
      }
    }

    return NextResponse.json({ success: true, message: 'Payment processed' });
  }

  if (event === 'payment_intent.payment_failed') {
    // Log failed payment - admin can follow up
    console.log('Payment failed for:', data.metadata);
    return NextResponse.json({ received: true });
  }

  return NextResponse.json({ received: true });
}
