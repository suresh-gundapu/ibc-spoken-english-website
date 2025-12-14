'use client'; // 👈 ఇది చాలా ముఖ్యం (Error Fix)

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { useState } from 'react';
import { Download, Check, Award } from 'lucide-react';
import Swal from 'sweetalert2'; // 👈 SweetAlert Import

// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    title: "1000 Verb Forms & Sentences",
    description: "Complete list of verb forms with Telugu meaning and example sentences. Essential for beginners.",
    price: "₹99",
    rawPrice: 99,
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#004e92', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#000428', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad1)" />
        <text x="150" y="40" fill="white" textAnchor="middle" fontSize="12" fontFamily="sans-serif" fontWeight="bold">IBC SPOKEN ENGLISH</text>
        <line x1="50" y1="50" x2="250" y2="50" stroke="white" strokeWidth="1" opacity="0.5" />
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="42" fontFamily="sans-serif" fontWeight="900">1000</text>
        <text x="150" y="180" fill="#4facfe" textAnchor="middle" fontSize="28" fontFamily="sans-serif" fontWeight="bold">VERB FORMS</text>
        <text x="150" y="210" fill="white" textAnchor="middle" fontSize="20" fontFamily="sans-serif">& Sentences</text>
        <text x="150" y="360" fill="white" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    features: ["Telugu Meanings", "Daily Usage Sentences", "Instant Download"],
    isPopular: false,
    colorClass: "btn-primary"
  },
  {
    id: 2,
    title: "Advanced Grammar in Use",
    description: "Self-study reference and practice book for advanced learners to master English grammar.",
    price: "₹149",
    rawPrice: 149,
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#11998e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38ef7d', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad2)" />
        <text x="20" y="40" fill="white" fontSize="12" fontFamily="sans-serif" fontWeight="bold">IBC SPOKEN ENGLISH</text>
        <polygon points="220,0 300,0 300,80" fill="#ff416c" />
        <text x="275" y="30" fill="white" textAnchor="end" fontSize="14" fontFamily="sans-serif" fontWeight="bold" transform="rotate(45, 260, 40)">New Edition</text>
        <text x="20" y="150" fill="#f9f9f9" fontSize="34" fontFamily="sans-serif" fontWeight="900">Advanced</text>
        <text x="20" y="190" fill="yellow" fontSize="34" fontFamily="sans-serif" fontWeight="900">Grammar</text>
        <text x="20" y="230" fill="#f9f9f9" fontSize="34" fontFamily="sans-serif" fontWeight="900">in Use</text>
        <text x="150" y="360" fill="white" textAnchor="middle" fontSize="16" fontFamily="sans-serif" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    features: ["Advanced Concepts", "Practice Exercises", "Self-study Guide"],
    isPopular: false,
    colorClass: "btn-success"
  },
  {
    id: 3,
    title: "Easy Essential Vocabulary",
    description: "Boost your word power with this carefully curated list of essential English vocabulary.",
    price: "₹129",
    rawPrice: 129,
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f12711', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f5af19', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad3)" />
        <text x="150" y="40" fill="white" textAnchor="middle" fontSize="12" fontFamily="sans-serif" fontWeight="bold">IBC SPOKEN ENGLISH</text>
        <text x="150" y="180" fill="white" textAnchor="middle" fontSize="32" fontFamily="sans-serif" fontWeight="900">Easy</text>
        <text x="150" y="220" fill="white" textAnchor="middle" fontSize="32" fontFamily="sans-serif" fontWeight="900">Essential</text>
        <text x="150" y="260" fill="yellow" textAnchor="middle" fontSize="28" fontFamily="sans-serif" fontWeight="bold">Vocabulary</text>
        <text x="150" y="360" fill="white" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    features: ["Daily Vocabulary", "Easy Memorization", "Visual Examples"],
    isPopular: false,
    colorClass: "btn-warning text-dark"
  },
  {
    id: 4,
    title: "IELTS Success 100% Kit",
    description: "Complete IELTS Speaking preparation kit. Includes audio, video, and comprehensive guides.",
    price: "₹499",
    rawPrice: 499,
    type: "ZIP Bundle (7GB)",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#960000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad4)" />
        <rect x="0" y="30" width="300" height="40" fill="rgba(0,0,0,0.3)" />
        <text x="150" y="55" fill="#FFD700" textAnchor="middle" fontSize="18" fontFamily="sans-serif" fontWeight="bold">★ PREMIUM KIT ★</text>
        <text x="150" y="150" fill="white" textAnchor="middle" fontSize="38" fontFamily="sans-serif" fontWeight="900">IELTS</text>
        <text x="150" y="195" fill="white" textAnchor="middle" fontSize="38" fontFamily="sans-serif" fontWeight="900">Success</text>
        <text x="150" y="250" fill="#FFD700" textAnchor="middle" fontSize="48" fontFamily="sans-serif" fontWeight="900">100%</text>
        <rect x="100" y="280" width="100" height="30" fill="white" rx="15" ry="15" />
        <text x="150" y="300" fill="#960000" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fontWeight="bold">7GB DATA</text>
        <text x="150" y="370" fill="white" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    features: ["7GB Huge Content", "Audio & Video", "Speaking Modules", "Band 9 Tips"],
    isPopular: true,
    colorClass: "btn-danger"
  },
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
            // Success Alert
         Swal.fire({
              title: 'Payment Successful! 🎉',
              html: `
                <div style="text-align: left;">
                  <p>Your payment is verified.</p>
                  <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <h5 style="color: #1e40af; font-weight: bold; margin-bottom: 8px;">⚠️ Important Instruction:</h5>
                    <p style="font-size: 14px; margin-bottom: 5px;">
                      The file will open in a new tab (Google Drive).
                    </p>
                    <p style="font-size: 14px; font-weight: 500;">
                      👉 Please click the <span style="font-size: 18px">⬇️</span> <b>File </b> then <b>Download Icon</b> or <b>Print Icon</b> at the top right corner to save it immediately.
                    </p>
                  </div>
                </div>
              `,
              icon: 'success',
              confirmButtonText: 'Open File Now 📂',
              confirmButtonColor: '#2563eb',
              allowOutsideClick: false // యూజర్ బటన్ నొకేదాకా ఇది పోదు
            }).then(() => {
              window.open(verifyData.downloadLink, '_blank');
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
        modal: {
            ondismiss: function() { setLoadingId(null); }
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error(error);
      // Error Alert
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong while creating the order. Please try again.',
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
      
      <section className="py-5 bg-light" style={{ marginTop: '80px' }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Premium Study Materials</h1>
          <p className="lead text-muted max-w-2xl mx-auto">
            Accelerate your learning with our expertly crafted e-books and study kits. 
            Download instantly and start learning today.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5 justify-content-center">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-lg hover-scale-effect position-relative overflow-hidden rounded-4" style={{ transition: 'all 0.3s ease' }}>
                  
                  {product.isPopular && (
                    <div className="position-absolute top-0 end-0 z-3">
                      <div className="bg-danger text-white px-3 py-1 fw-bold small rounded-bottom-start shadow-sm d-flex align-items-center">
                        <Award size={14} className="me-1" /> Best Seller
                      </div>
                    </div>
                  )}
                  
                  <div className="position-relative" style={{ height: '380px', overflow: 'hidden' }}>
                    {product.coverImage}
                    <div className="position-absolute bottom-0 end-0 m-3 bg-white text-dark px-3 py-2 rounded-pill fw-bold shadow">
                      {product.price}
                    </div>
                  </div>

                  <div className="card-body p-4 d-flex flex-column bg-white">
                    <div className="mb-2">
                      <span className="badge bg-light text-dark border">
                        {product.type}
                      </span>
                    </div>
                    
                    <h5 className="card-title fw-bold mb-2">{product.title}</h5>
                    <p className="card-text text-muted small mb-4 flex-grow-1">
                      {product.description}
                    </p>

                    <ul className="list-unstyled small text-muted mb-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center">
                          <Check size={16} className="text-success me-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => handlePayment(product)}
                      disabled={loadingId === product.id}
                      className={`btn w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center ${product.colorClass}`}
                    >
                      {loadingId === product.id ? 'Processing...' : (
                        <>
                          <Download size={20} className="me-2" />
                          Buy & Download
                        </>
                      )}
                    </button>
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