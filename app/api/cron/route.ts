import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // డేటాబేస్‌లో ఒక చిన్న పని చేయడం ద్వారా అది Active గా ఉంటుంది
    // 'keepalive' అనే కీ ని అప్‌డేట్ చేస్తున్నాం
    const timestamp = new Date().toISOString();
    await kv.set('keepalive', timestamp);
    
    console.log('Database pinged to keep active: ' + timestamp);
    return NextResponse.json({ message: 'Database pinged successfully' });
  } catch (error) {
    console.error('Cron job failed:', error);
    return NextResponse.json({ message: 'Cron job failed' }, { status: 500 });
  }
}