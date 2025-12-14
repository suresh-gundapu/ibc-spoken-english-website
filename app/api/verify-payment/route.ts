import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { kv } from '@vercel/kv';

export const dynamic = 'force-dynamic';

// 👇 ఇక్కడ నీ గూగుల్ డ్రైవ్ లింక్స్ మార్చు (ID ప్రకారం)
const FILE_LINKS: Record<string, string> = {
  "1": "https://drive.google.com/file/d/1EDkYQgOfj1jU7o73P1OsU_y-Lp9ihLf6/view?usp=drive_link", // ID 1: Verb Forms
  "2": "https://drive.google.com/file/d/12S8NLSYiUTOx6RXZa1g2f_R7DVxoX6NG/view?usp=drive_link", // ID 2: Grammar
  "3": "https://drive.google.com/file/d/19UBC6swSWfqSqKsdZZKcXI-TJWA_2n0f/view?usp=drive_link", // ID 3: Vocabulary
  "4": "", // ID 4: IELTS Kit
};

export async function POST(req: Request) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature, 
      product_id,
      user_details 
    } = await req.json();

    // 1. సెక్యూరిటీ చెక్ (Signature Verification)
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ message: "Invalid Payment Signature!" }, { status: 400 });
    }

    // 2. పేమెంట్ సక్సెస్! డేటాబేస్ లో సేవ్ చేద్దాం
    const transaction = {
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      productId: product_id,
      user: user_details, // కస్టమర్ పేరు, ఈమెయిల్
      date: new Date().toISOString(),
      status: 'SUCCESS'
    };

    // Vercel KV లో సేవ్ చేస్తున్నాం
    await kv.lpush('transactions', transaction);

    // 3. కరెక్ట్ ఫైల్ లింక్ ని పంపుతున్నాం
    const downloadLink = FILE_LINKS[product_id.toString()];

    if (!downloadLink) {
       return NextResponse.json({ success: true, message: "Link not found, please contact admin." });
    }

    return NextResponse.json({ success: true, downloadLink });

  } catch (error) {
    console.error("Payment verification failed:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}