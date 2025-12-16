
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { kv } from '@vercel/kv';

// Google Drive Links Map (నువ్వు అడిగిన లింక్స్ ఇక్కడ పెట్టు)

const FILE_LINKS: Record<string, string> = {
  "1": "https://drive.google.com/file/d/1EDkYQgOfj1jU7o73P1OsU_y-Lp9ihLf6/view?usp=drive_link", // 1. 1000 Verb Forms
  "2": "https://drive.google.com/file/d/19UBC6swSWfqSqKsdZZKcXI-TJWA_2n0f/view?usp=drive_link", // 2. Essential Vocabulary
  "3": "https://drive.google.com/file/d/13FPCP5ipTMhj8qVLcCbhVNFcmnMWLWbj/view?usp=drive_link", // 3. Intermediate Grammar
  "4": "https://drive.google.com/file/d/12S8NLSYiUTOx6RXZa1g2f_R7DVxoX6NG/view?usp=drive_link", // 4. Advanced Grammar
  "5": "https://drive.google.com/file/d/1HYO0R4akM9GG-nvt3Fy_BvDHgE8uMtTI/view?usp=drive_link", // 5. IELTS Kit (ZIP)
  "6": "https://drive.google.com/file/d/1GxoR9Iq6gK_-Ea7u-ZVsfqw9DrIkBklP/view?usp=drive_link", // 6. Tell Me About Yourself
  "7": "https://drive.google.com/file/d/1T9S28Wr6Dvl3Q4TDKdRZt2PLoYyBRVZ2/view?usp=drive_link", // 7. 64 Tough Questions
  "8": "https://drive.google.com/file/d/1QlZEh_aQAOV_XIZKxSVvjWHRKg7z-BXD/view?usp=drive_link", // 8. Body Language
  "9": "https://drive.google.com/file/d/1XY-jM8Kr53hWoztwS3dSRuCk7_D_ixgZ/view?usp=drive_link", // 9. Personality Development (Rs 49)
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

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      
      // ✅ 1. Payment Data Object Create Cheyyi
      const transactionData = {
        razorpay_payment_id,
        product_id,
        amount: 9900, // Default or dynamic
        status: 'Success',
        date: new Date().toISOString(),
        contact: user_details?.contact || 'N/A', // Frontend nundi pass cheyyali
        email: user_details?.email || 'N/A'
      };

      // ✅ 2. Vercel KV Database lo Save Cheyyi
      // (Note: Vercel Dashboard lo KV Database create chesi undali)
      try {
        await kv.lpush('transactions', transactionData);
      } catch (dbError) {
        console.error("DB Save Failed:", dbError);
        // DB fail ayina user ki success chupinchali, so ignore error here
      }

      // ✅ 3. Return Success
      return NextResponse.json({
        success: true,
        downloadLink: FILE_LINKS[String(product_id)] || "https://drive.google.com/..."
      });
      
    } else {
      return NextResponse.json({ success: false, error: "Invalid Signature" }, { status: 400 });
    }
  } catch (error) {
    console.error("Verify Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}

