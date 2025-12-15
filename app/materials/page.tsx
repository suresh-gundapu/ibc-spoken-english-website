'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { useState } from 'react';
import { Download, Check, Award, Star, Zap, BookOpen, Users } from 'lucide-react';
import Swal from 'sweetalert2';

// ========== PRODUCT DATA (Total 9 Books) ==========
const products = [
  // --- OLD BOOKS (1 to 4) ---
  {
    id: 1,
    title: "1000 Verb Forms & Sentences",
    description: "Complete list of 1000+ verb forms with Telugu meanings. Essential for framing correct sentences.",
    price: "₹99",
    rawPrice: 99,
    type: "PDF E-Book",
    // BLUE COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#004e92', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#000428', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="320" fill="url(#grad1)" />
        <rect x="20" y="20" width="260" height="280" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <text x="150" y="60" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold" letterSpacing="2">IBC ENGLISH</text>
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="60" fontWeight="900">1000</text>
        <text x="150" y="180" fill="#4facfe" textAnchor="middle" fontSize="28" fontWeight="bold">VERB FORMS</text>
        <text x="150" y="210" fill="white" textAnchor="middle" fontSize="16">& Sentences</text>
        <rect x="80" y="260" width="140" height="30" fill="white" rx="15" />
        <text x="150" y="280" fill="#004e92" textAnchor="middle" fontSize="12" fontWeight="bold">WITH TELUGU</text>
      </svg>
    ),
    features: ["Telugu Meanings", "V1 V2 V3 Forms", "Daily Usage Examples"],
    isPopular: false,
    colorClass: "btn-primary"
  },
  {
    id: 2,
    title: "Advanced Grammar in Use",
    description: "Master complex grammar rules. A self-study reference and practice book for advanced learners.",
    price: "₹149",
    rawPrice: 149,
    type: "PDF E-Book",
    // GREEN COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#11998e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38ef7d', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="320" fill="url(#grad2)" />
        <text x="20" y="40" fill="white" fontSize="12" fontWeight="bold">ADVANCED SERIES</text>
        <text x="20" y="120" fill="white" fontSize="38" fontWeight="900">English</text>
        <text x="20" y="160" fill="#1a2a6c" fontSize="38" fontWeight="900">Grammar</text>
        <text x="20" y="200" fill="white" fontSize="38" fontWeight="900">in Use</text>
        <line x1="20" y1="230" x2="150" y2="230" stroke="white" strokeWidth="4" />
      </svg>
    ),
    features: ["Advanced Concepts", "Practice Exercises", "Self-study Guide"],
    isPopular: false,
    colorClass: "btn-success"
  },
  {
    id: 3,
    title: "Easy Essential Vocabulary",
    description: "Boost your word power with this carefully curated list of 3000+ essential English words.",
    price: "₹129",
    rawPrice: 129,
    type: "PDF E-Book",
    // ORANGE COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f12711', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f5af19', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="320" fill="url(#grad3)" />
        <circle cx="150" cy="120" r="50" fill="white" opacity="0.2" />
        <text x="150" y="160" fill="white" textAnchor="middle" fontSize="36" fontWeight="900">VOCAB</text>
        <text x="150" y="200" fill="#333" textAnchor="middle" fontSize="24" fontWeight="bold">BOOSTER</text>
        <text x="150" y="280" fill="white" textAnchor="middle" fontSize="14">3000+ Words</text>
      </svg>
    ),
    features: ["Daily Vocabulary", "Synonyms & Antonyms", "Easy to Remember"],
    isPopular: false,
    colorClass: "btn-warning text-dark"
  },
  {
    id: 4,
    title: "IELTS Success 100% Kit",
    description: "Complete IELTS preparation kit. Includes 7GB of Audio, Video, and comprehensive Speaking Modules.",
    price: "₹499",
    rawPrice: 499,
    type: "ZIP Bundle (7GB)",
    // PREMIUM RED COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8E0E00', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1F1C18', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="320" fill="url(#grad4)" />
        <rect x="0" y="30" width="300" height="40" fill="#FFD700" />
        <text x="150" y="55" fill="black" textAnchor="middle" fontSize="18" fontWeight="bold">★ PREMIUM KIT ★</text>
        <text x="150" y="150" fill="white" textAnchor="middle" fontSize="48" fontWeight="900">IELTS</text>
        <text x="150" y="190" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold">SUCCESS FORMULA</text>
        <rect x="100" y="240" width="100" height="30" fill="white" rx="15" />
        <text x="150" y="260" fill="#8E0E00" textAnchor="middle" fontSize="14" fontWeight="bold">7GB DATA</text>
      </svg>
    ),
    features: ["7GB Content", "Audio & Video", "Band 9.0 Tips"],
    isPopular: true,
    colorClass: "btn-danger"
  },

  // --- NEW BOOKS (5 to 9) ---
  {
    id: 5,
    title: "64 Toughest Interview Qs",
    description: "Expert answers to the 64 most difficult interview questions. Prepared by HR professionals.",
    price: "₹129",
    rawPrice: 129,
    type: "PDF Guide",
    // DARK THEME COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="320" fill="#2d3436" />
        <rect x="20" y="20" width="260" height="280" fill="none" stroke="#00cec9" strokeWidth="2" />
        <text x="150" y="100" fill="#00cec9" textAnchor="middle" fontSize="80" fontWeight="900">64</text>
        <text x="150" y="150" fill="white" textAnchor="middle" fontSize="22" fontWeight="bold">TOUGHEST</text>
        <text x="150" y="180" fill="white" textAnchor="middle" fontSize="22" fontWeight="bold">QUESTIONS</text>
        <text x="150" y="250" fill="#dfe6e9" textAnchor="middle" fontSize="14">Interview Guide</text>
      </svg>
    ),
    features: ["HR Secrets", "Winning Answers", "Crack Any Interview"],
    isPopular: true,
    colorClass: "btn-dark"
  },
  {
    id: 6,
    title: "Tell Me About Yourself",
    description: "The ultimate guide to answering the #1 interview question with confidence. Includes script templates.",
    price: "₹99",
    rawPrice: 99,
    type: "PDF E-Book",
    // MINIMALIST GRAY COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="320" fill="#636e72" />
        <path d="M100 100 L200 100 L150 180 Z" fill="#fab1a0" />
        <text x="150" y="80" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold">THE GUIDE TO</text>
        <text x="150" y="230" fill="white" textAnchor="middle" fontSize="28" fontWeight="bold">TELL ME</text>
        <text x="150" y="265" fill="#fab1a0" textAnchor="middle" fontSize="24" fontWeight="bold">ABOUT YOURSELF</text>
      </svg>
    ),
    features: ["Script Templates", "Mistakes to Avoid", "First Impressions"],
    isPopular: false,
    colorClass: "btn-secondary"
  },
  {
    id: 7,
    title: "Vyaktitva Vikasam",
    description: "Personality Development by Swami Vivekananda (Telugu). Build character, confidence, and leadership.",
    price: "₹99",
    rawPrice: 99,
    type: "Telugu Book",
    // VINTAGE PAPER COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="320" fill="#fff5d7" />
        <rect x="15" y="15" width="270" height="290" fill="none" stroke="#8b4513" strokeWidth="3" />
        <text x="150" y="120" fill="#8b4513" textAnchor="middle" fontSize="34" fontFamily="serif" fontWeight="900">వ్యక్తిత్వ</text>
        <text x="150" y="170" fill="#8b4513" textAnchor="middle" fontSize="34" fontFamily="serif" fontWeight="900">వికాసం</text>
        <text x="150" y="250" fill="#555" textAnchor="middle" fontSize="16" fontFamily="serif">స్వామి వివేకానంద</text>
      </svg>
    ),
    features: ["Pure Telugu", "Self Confidence", "Life Lessons"],
    isPopular: false,
    colorClass: "btn-warning text-dark"
  },
  {
    id: 8,
    title: "Intermediate Grammar",
    description: "English Grammar in Use (Intermediate). Perfect for bridging the gap between basic and advanced English.",
    price: "₹149",
    rawPrice: 149,
    type: "PDF E-Book",
    // CYAN/BLUE COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="gradInter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00c6ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0072ff', stopOpacity: 1 }} />
        </linearGradient>
        <rect width="300" height="320" fill="url(#gradInter)" />
        <rect x="50" y="0" width="200" height="320" fill="rgba(255,255,255,0.1)" />
        <text x="150" y="100" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold">ENGLISH</text>
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="32" fontWeight="900">GRAMMAR</text>
        <text x="150" y="180" fill="#ffd700" textAnchor="middle" fontSize="24" fontWeight="bold">INTERMEDIATE</text>
        <text x="150" y="280" fill="white" textAnchor="middle" fontSize="14">Self-Study Reference</text>
      </svg>
    ),
    features: ["Intermediate Level", "Clear Explanations", "Exercises"],
    isPopular: false,
    colorClass: "btn-info text-white"
  },
  {
    id: 9,
    title: "Body Language Mastery",
    description: "Learn suggested body language tips to project confidence and ace your interviews.",
    price: "₹89",
    rawPrice: 89,
    type: "PDF Guide",
    // PURPLE COVER
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8e44ad', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="320" fill="url(#gradBody)" />
        <circle cx="150" cy="110" r="40" fill="none" stroke="white" strokeWidth="4" />
        <path d="M150 150 L150 220 M120 180 L180 180" stroke="white" strokeWidth="4" />
        <text x="150" y="260" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold">BODY LANGUAGE</text>
        <text x="150" y="290" fill="#fab1a0" textAnchor="middle" fontSize="14">Secrets of Success</text>
      </svg>
    ),
    features: ["Non-verbal Skills", "Interview Posture", "Confidence Hacks"],
    isPopular: false,
    colorClass: "btn-dark"
  }
];

export default function MaterialsPage() {
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handlePayment = async (product: any) => {
    setLoadingId(product.id);

    try {
      // 1. Create Order
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: product.rawPrice }),
      });

      if (!res.ok) {
        throw new Error('Server Error');
      }

      const order = await res.json();

      // 2. Open Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: order.amount,
        currency: "INR",
        name: "IBC Spoken English",
        description: `Download: ${product.title}`,
        order_id: order.id,
        handler: async function (response: any) {
          // 3. Verify Payment
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              product_id: product.id,
              user_details: { status: "Guest User" }
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            Swal.fire({
              title: 'Payment Successful! 🎉',
              html: `
                <div style="text-align: left;">
                  <p>Your payment is verified.</p>
                  <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <h5 style="color: #1e40af; font-weight: bold; margin-bottom: 8px;">⚠️ Important:</h5>
                    <p style="font-size: 14px; margin-bottom: 5px;">File opens in Google Drive.</p>
                    <p style="font-size: 14px; font-weight: 500;">
                      👉 Click <span style="font-size: 18px">⬇️</span> <b>Download Icon</b> at top right.
                    </p>
                  </div>
                </div>
              `,
              icon: 'success',
              confirmButtonText: 'Open File Now 📂',
              confirmButtonColor: '#2563eb',
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                window.open(verifyData.downloadLink, '_blank');
              }
            });
          } else {
            Swal.fire({
              title: 'Failed!',
              text: 'Payment Verification Failed.',
              icon: 'error',
              confirmButtonColor: '#d33'
            });
          }
          setLoadingId(null);
        },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#2563eb" },
        modal: { ondismiss: function() { setLoadingId(null); } }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'Could not create order. Check your internet.',
        icon: 'error',
        confirmButtonColor: '#d33'
      });
      setLoadingId(null);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Navbar />
      
      <section className="py-5 bg-light" style={{ marginTop: '70px' }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Premium Study Materials</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Instant access to expert-curated E-Books and Study Kits.
            <br/><span className="badge bg-success mt-2">Total 9 Resources Available</span>
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {products.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100 border-0 shadow-sm hover-scale-effect position-relative overflow-hidden rounded-4" style={{ transition: 'all 0.3s ease' }}>
                  
                  {product.isPopular && (
                    <div className="position-absolute top-0 end-0 z-3">
                      <div className="bg-danger text-white px-3 py-1 fw-bold small rounded-bottom-start shadow-sm d-flex align-items-center">
                        <Award size={14} className="me-1" /> Best Seller
                      </div>
                    </div>
                  )}
                  
                  {/* Poster Image Area */}
                  <div className="position-relative bg-light d-flex align-items-center justify-content-center" style={{ height: '300px', overflow: 'hidden' }}>
                    <div className="shadow-lg" style={{ width: '80%', height: '90%', borderRadius: '8px', transform: 'perspective(1000px) rotateY(5deg)' }}>
                      {product.coverImage}
                    </div>
                  </div>

                  <div className="card-body p-4 d-flex flex-column bg-white">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-light text-dark border">
                        {product.type}
                      </span>
                      <h4 className="fw-bold text-primary mb-0">{product.price}</h4>
                    </div>
                    
                    <h5 className="card-title fw-bold mb-2">{product.title}</h5>
                    <p className="card-text text-muted small mb-3 flex-grow-1">
                      {product.description}
                    </p>

                    <div className="border-top pt-3 mt-2">
                      <ul className="list-unstyled small text-muted mb-3">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="mb-2 d-flex align-items-center">
                            <Check size={16} className="text-success me-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button 
                        onClick={() => handlePayment(product)}
                        disabled={loadingId === product.id}
                        className={`btn w-100 py-2 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center ${product.colorClass}`}
                      >
                        {loadingId === product.id ? 'Processing...' : (
                          <>
                            <Download size={18} className="me-2" />
                            Buy Now
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}