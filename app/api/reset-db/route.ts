import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    // 'transactions' అనే కీ ని పూర్తిగా డిలీట్ చేస్తుంది
    await kv.del('transactions');
    return NextResponse.json({ message: "Database Cleared Successfully! 🗑️" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to clear" }, { status: 500 });
  }
}