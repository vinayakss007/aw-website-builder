import { NextResponse } from 'next/server';
import { createBillingRecord, getBillingRecords, getBillingByCustomer, updateBillingRecord, markAsPaid } from '../../../../lib/database';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get('customerId');
  
  if (customerId) {
    return NextResponse.json(getBillingByCustomer(customerId));
  }
  
  return NextResponse.json(getBillingRecords());
}

export async function POST(request) {
  const body = await request.json();
  const { customerId, amount, plan, status, dueDate, notes } = body;
  
  if (!customerId || !amount) {
    return NextResponse.json({ error: 'customerId and amount required' }, { status: 400 });
  }
  
  const record = createBillingRecord({ customerId, amount, plan, status, dueDate, notes });
  return NextResponse.json(record, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  const { id, action, method, ...data } = body;
  
  if (!id) return NextResponse.json({ error: 'Billing record ID required' }, { status: 400 });
  
  let result;
  if (action === 'markPaid') {
    result = markAsPaid(id, method || 'manual');
  } else {
    result = updateBillingRecord(id, data);
  }
  
  if (!result) return NextResponse.json({ error: 'Record not found' }, { status: 404 });
  return NextResponse.json(result);
}
