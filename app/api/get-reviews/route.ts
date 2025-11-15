import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // 1. యూజర్ ఏ పేజీ అడుగుతున్నాడో URL నుండి తీసుకోండి
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = 10; // ఒక పేజీకి 10 రివ్యూలు

    // 2. పేజినేషన్ కోసం start మరియు end లెక్కించండి
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    // 3. మొత్తం రివ్యూల సంఖ్యను తీసుకోండి (మొత్తం పేజీల కోసం)
    const totalCount = await kv.llen('reviews');
    
    // 4. ఆ పేజీకి కావలసిన 10 రివ్యూలను మాత్రమే తీసుకోండి
    const reviews = await kv.lrange('reviews', start, end);

    // 5. రివ్యూలను మరియు మొత్తం కౌంట్‌ను ఫ్రంటెండ్‌కు పంపండి
    return NextResponse.json({
      reviews,
      totalCount,
    });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching reviews' }, { status: 500 });
  }
}