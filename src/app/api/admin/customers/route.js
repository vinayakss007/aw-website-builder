import { NextResponse } from 'next/server';
import { createCustomer, getCustomers, getCustomer, updateCustomer, deleteCustomer, suspendCustomer, activateCustomer } from '../../../../lib/database';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    const customer = getCustomer(id);
    if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    return NextResponse.json(customer);
  }
  
  return NextResponse.json(getCustomers());
}

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, company, plan, notes } = body;
  
  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
  }
  
  const customer = createCustomer({ name, email, phone, company, plan, notes });
  return NextResponse.json(customer, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  const { id, action, ...data } = body;
  
  if (!id) return NextResponse.json({ error: 'Customer ID required' }, { status: 400 });
  
  let result;
  if (action === 'suspend') {
    result = suspendCustomer(id);
  } else if (action === 'activate') {
    result = activateCustomer(id);
  } else {
    result = updateCustomer(id, data);
  }
  
  if (!result) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
  return NextResponse.json(result);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) return NextResponse.json({ error: 'Customer ID required' }, { status: 400 });
  
  const deleted = deleteCustomer(id);
  if (!deleted) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Customer deleted' });
}
