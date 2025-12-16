import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Vercel KV నుండి ట్రాన్సాక్షన్స్ తెచ్చుకోవడం (0 నుండి -1 అంటే మొత్తం అని అర్థం)
    const transactions = await kv.lrange('transactions', 0, -1);
    return NextResponse.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json([], { status: 500 });
  }
}