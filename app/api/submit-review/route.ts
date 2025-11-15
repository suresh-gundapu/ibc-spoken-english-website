import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ఇది చాలా ముఖ్యం!

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // డేటాను సురక్షితంగా ఉంచడానికి
    const review = {
      name: data.name.toString().slice(0, 50),
      rating: parseInt(data.rating, 10),
      message: data.message.toString().slice(0, 300),
      createdAt: new Date().toISOString(),
    };

    // 'reviews' అనే లిస్ట్‌లో ఈ రివ్యూను సేవ్ చేస్తున్నాం
    await kv.lpush('reviews', review);

    return NextResponse.json({ success: true, review });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error submitting review' }, { status: 500 });
  }
}