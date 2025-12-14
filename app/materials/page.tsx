'use client'; // 👈 ఇది ఖచ్చితంగా మొదటి లైన్ అయి ఉండాలి
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { useState } from 'react';
import { Download, Check, Award, Star } from 'lucide-react';

// export const metadata = {
//   title: 'Study Materials - IBC Spoken English',
//   description: 'Download premium English learning materials, PDFs, and IELTS kits.',
// };

// ========== PRODUCT DATA (WITH SVG COVERS) ==========
const products = [
  {
    id: 1,
    title: "1000 Verb Forms & Sentences",
    description: "Complete list of verb forms with Telugu meaning and example sentences. Essential for beginners.",
    price: "₹99",
    type: "PDF E-Book",
    // BLUE COVER DESIGN (Telugu & English)
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#004e92', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#000428', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad1)" rx="10" ry="10" />
        {/* Top Logo & Title */}
        <text x="150" y="40" fill="white" textAnchor="middle" fontSize="12" fontFamily="Poppins, sans-serif" fontWeight="bold">ibc spoken english</text>
        <line x1="50" y1="50" x2="250" y2="50" stroke="white" strokeWidth="1" opacity="0.5" />
        
        {/* Main Title */}
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="36" fontFamily="Poppins, sans-serif" fontWeight="900">1000</text>
        <text x="150" y="180" fill="#4facfe" textAnchor="middle" fontSize="28" fontFamily="Poppins, sans-serif" fontWeight="bold">Verb Forms</text>
        <text x="150" y="210" fill="white" textAnchor="middle" fontSize="20" fontFamily="Poppins, sans-serif">& Sentences</text>
        
        {/* Subtitle */}
        <text x="150" y="250" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontSize="12" fontFamily="Poppins, sans-serif">with Telugu Meanings</text>
        
        {/* Author Info */}
        <text x="150" y="360" fill="white" textAnchor="middle" fontSize="14" fontFamily="Poppins, sans-serif" fontWeight="bold">K SRTV Prasad</text>
        <text x="150" y="375" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontSize="10" fontFamily="Poppins, sans-serif">ibc spoken english</text>
      </svg>
    ),
    features: ["Telugu Meanings", "Daily Usage Sentences", "Instant Download"],
  },
  {
    id: 2,
    title: "Advanced Grammar in Use",
    description: "Self-study reference and practice book for advanced learners to master English grammar.",
    price: "₹149",
    type: "PDF E-Book",
    // GREEN COVER DESIGN (Matching your reference image)
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#11998e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38ef7d', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad2)" rx="10" ry="10" />
        {/* Top Logo & New Edition Badge */}
        <text x="20" y="40" fill="white" fontSize="12" fontFamily="Poppins, sans-serif" fontWeight="bold">ibc spoken english</text>
        <polygon points="220,0 300,0 300,80" fill="#ff416c" />
        <text x="275" y="30" fill="white" textAnchor="end" fontSize="14" fontFamily="Poppins, sans-serif" fontWeight="bold" transform="rotate(45, 260, 40)">New Edition</text>

        {/* Main Title */}
        <text x="20" y="150" fill="#f9f9f9" fontSize="34" fontFamily="Poppins, sans-serif" fontWeight="900">Advanced</text>
        <text x="20" y="190" fill="yellow" fontSize="34" fontFamily="Poppins, sans-serif" fontWeight="900">Grammar</text>
        <text x="20" y="230" fill="#f9f9f9" fontSize="34" fontFamily="Poppins, sans-serif" fontWeight="900">in Use</text>

        {/* Subtitle */}
        <text x="20" y="270" fill="white" fontSize="12" fontFamily="Poppins, sans-serif">A self-study reference and practice book</text>
        <text x="20" y="285" fill="white" fontSize="12" fontFamily="Poppins, sans-serif">for advanced learners of English</text>
        
        {/* Edition & Author */}
        <text x="20" y="330" fill="yellow" fontSize="14" fontFamily="Poppins, sans-serif" fontWeight="bold">Third Edition</text>
        <text x="150" y="365" fill="white" textAnchor="middle" fontSize="16" fontFamily="Poppins, sans-serif" fontWeight="900">K SRTV Prasad,</text>
        <text x="150" y="380" fill="rgba(255,255,255,0.9)" textAnchor="middle" fontSize="12" fontFamily="Poppins, sans-serif">ibc spoken english.</text>
      </svg>
    ),
    features: ["Advanced Concepts", "Practice Exercises", "Self-study Guide"],
  },
  {
    id: 3,
    title: "Easy Essential Vocabulary",
    description: "Boost your word power with this carefully curated list of essential English vocabulary.",
    price: "₹129",
    type: "PDF E-Book",
    // ORANGE COVER DESIGN (Vocabulary Focus)
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f12711', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f5af19', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad3)" rx="10" ry="10" />
        <text x="150" y="40" fill="white" textAnchor="middle" fontSize="12" fontFamily="Poppins, sans-serif" fontWeight="bold">ibc spoken english</text>
        
        {/* Decorative Star */}
        <polygon points="150,60 160,90 190,90 165,110 175,140 150,120 125,140 135,110 110,90 140,90" fill="yellow" opacity="0.3"/>

        {/* Main Title */}
        <text x="150" y="180" fill="white" textAnchor="middle" fontSize="32" fontFamily="Poppins, sans-serif" fontWeight="900">Easy</text>
        <text x="150" y="220" fill="white" textAnchor="middle" fontSize="32" fontFamily="Poppins, sans-serif" fontWeight="900">Essential</text>
        <text x="150" y="260" fill="yellow" textAnchor="middle" fontSize="28" fontFamily="Poppins, sans-serif" fontWeight="bold">Vocabulary</text>
        
        {/* Author Info */}
        <text x="150" y="360" fill="white" textAnchor="middle" fontSize="14" fontFamily="Poppins, sans-serif" fontWeight="bold">K SRTV Prasad</text>
        <text x="150" y="375" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontSize="10" fontFamily="Poppins, sans-serif">ibc spoken english</text>
      </svg>
    ),
    features: ["Daily Vocabulary", "Easy Memorization", "Visual Examples"],
  },
  {
    id: 4,
    title: "IELTS Success 100% Kit",
    description: "Complete IELTS Speaking preparation kit. Includes audio, video, and comprehensive guides.",
    price: "₹499",
    type: "ZIP Bundle (7GB)",
    // RED COVER DESIGN (Premium/Hot)
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#960000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad4)" rx="10" ry="10" />
        
        {/* Top Badge */}
        <rect x="0" y="20" width="300" height="40" fill="rgba(0,0,0,0.3)" />
        <text x="150" y="48" fill="#FFD700" textAnchor="middle" fontSize="18" fontFamily="Poppins, sans-serif" fontWeight="bold">★ PREMIUM KIT ★</text>

        {/* Main Title */}
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="38" fontFamily="Poppins, sans-serif" fontWeight="900">IELTS</text>
        <text x="150" y="185" fill="white" textAnchor="middle" fontSize="38" fontFamily="Poppins, sans-serif" fontWeight="900">Success</text>
        <text x="150" y="235" fill="#FFD700" textAnchor="middle" fontSize="48" fontFamily="Poppins, sans-serif" fontWeight="900">100%</text>
        
        {/* 7GB Highlight */}
        <rect x="100" y="260" width="100" height="30" fill="white" rx="15" ry="15" />
        <text x="150" y="282" fill="#960000" textAnchor="middle" fontSize="16" fontFamily="Poppins, sans-serif" fontWeight="bold">7GB Data</text>

        {/* Author Info */}
        <text x="150" y="360" fill="white" textAnchor="middle" fontSize="14" fontFamily="Poppins, sans-serif" fontWeight="bold">K SRTV Prasad</text>
        <text x="150" y="375" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontSize="10" fontFamily="Poppins, sans-serif">ibc spoken english</text>
      </svg>
    ),
    features: ["7GB Huge Content", "Audio & Video", "Speaking Modules", "Band 9 Tips"],
    isPopular: true,
  },
];

export default function MaterialsPage() {
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handlePayment = async (product: any) => {
    alert("Payment Gateway Integration is Pending. Please wait for Razorpay Keys.");
    // (Razorpay కీస్ వచ్చాక పాత పేమెంట్ కోడ్ ఇక్కడ పెట్టాలి)
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Navbar />
      
      <section className="py-5 bg-light" style={{ marginTop: '80px' }}>
        <div className="container text-center">
          <h1 className="display-6 fw-bold mb-3">Premium Study Materials</h1>
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
                <div className={`card h-100 border-0 shadow-lg hover-scale-effect position-relative overflow-hidden rounded-4`} style={{ transition: 'all 0.3s ease' }}>
                  {/* Popular Badge */}
                  {product.isPopular && (
                    <div className="position-absolute top-0 end-0 z-10">
                      <div className="bg-danger text-white px-3 py-1 fw-bold small rounded-bl-lg d-flex align-items-center shadow-sm">
                        <Award size={14} className="me-1" /> Best Seller
                      </div>
                    </div>
                  )}
                  
                  {/* BOOK COVER IMAGE (SVG) */}
                  <div className="position-relative" style={{ height: '380px', overflow: 'hidden' }}>
                    {product.coverImage}
                    {/* Price Tag on Cover */}
                    <div className="position-absolute bottom-0 end-0 m-3 bg-white text-dark px-3 py-2 rounded-pill fw-bold shadow">
                      {product.price}
                    </div>
                  </div>

                  <div className="card-body p-4 d-flex flex-column bg-white">
                    <div className="mb-2">
                      <span className={`badge ${product.isPopular ? 'bg-danger' : 'bg-primary'} bg-opacity-10 ${product.isPopular ? 'text-danger' : 'text-primary'} border-0`}>
                        {product.type}
                      </span>
                    </div>
                    
                    <h4 className="card-title fw-bold mb-2">{product.title}</h4>
                    <p className="card-text text-muted small mb-4 flex-grow-1">
                      {product.description}
                    </p>

                    <ul className="list-unstyled small text-muted mb-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center">
                          <Check size={16} className="text-success me-2" flex-shrink-0 />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => handlePayment(product)}
                      disabled={loadingId === product.id}
                      className={`btn w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center ${product.isPopular ? 'btn-danger' : 'btn-primary'} ${loadingId === product.id ? 'opacity-75' : ''}`}
                    >
                      {loadingId === product.id ? (
                        <>Processing...</>
                      ) : (
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