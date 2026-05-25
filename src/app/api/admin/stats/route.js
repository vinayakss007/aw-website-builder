import { NextResponse } from 'next/server';
import { getStats, getSettings } from '../../../../lib/database';

export async function GET() {
  const stats = getStats();
  const settings = getSettings();
  
  return NextResponse.json({
    ...stats,
    baseDomain: settings.baseDomain,
    plans: settings.plans,
  });
}
