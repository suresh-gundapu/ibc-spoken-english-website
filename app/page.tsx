'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  Users,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Briefcase,
  Star,
  Download,
  ArrowRight,
  Quote
} from 'lucide-react';
import { useEffect, useState } from 'react';

// ========== CSS STYLES FOR ANIMATIONS ==========
const animationStyles = `
  /* Keyframes for Fade In Up */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Base Animation Class */
  .animate-fade-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0; /* Start hidden */
  }

  /* Hover Lift Effect */
  .hover-lift {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .hover-lift:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
    z-index: 10;
  }

  /* --- NEW: About Us Hover Reveal Animation --- */
  .about-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
  }

  .about-hover-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(30, 64, 175, 0.8)); /* Primary color gradient */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    opacity: 0;
    transform: translateX(-100%); /* Start off-screen left */
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth sliding transition */
  }

  /* Trigger animation on hover of the container */
  .about-image-container:hover .about-hover-content {
    opacity: 1;
    transform: translateX(0); /* Slide in to center */
  }

  .about-hover-content h4 {
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  .about-hover-content p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-style: italic;
  }
`;

// ========== PRODUCT DATA (SAME AS MATERIALS PAGE) ==========
const products = [
  // 1. ALL ABOUT ENGLISH (NEW BOOK) - ₹299
  {
    id: 10,
    title: "SPOKEN ENGLISH BOOK WITH VIDEOS",
    price: "₹299",
    type: "PDF E-Book (Premium)",
    coverImage: (
    <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradEng" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#0F2027', stopOpacity: 1 }} />
      <stop offset="50%" style={{ stopColor: '#203A43', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#2C5364', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <rect width="300" height="340" fill="url(#gradEng)" rx="8" />
  <rect x="15" y="15" width="270" height="310" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="4" />
  
  {/* Top Banner */}
  <rect x="0" y="40" width="300" height="35" fill="#FFD700" />
  <text x="150" y="62" fill="#000" textAnchor="middle" fontSize="14" fontWeight="bold" letterSpacing="1">THE ULTIMATE GUIDE</text>
  
  {/* --- FIXED TITLE (Font Size Reduced to fit) --- */}
  <text x="150" y="140" fill="white" textAnchor="middle" fontSize="28" fontWeight="900" fontFamily="serif">SPOKEN ENGLISH</text>
  <text x="150" y="180" fill="#FFD700" textAnchor="middle" fontSize="22" fontWeight="bold" fontFamily="serif" letterSpacing="1">BOOK WITH VIDEOS</text>
  {/* ---------------------------------------------- */}

  {/* Subtitle/Features */}
  <text x="150" y="230" fill="rgba(255,255,255,0.9)" textAnchor="middle" fontSize="14">Grammar • Vocabulary • Communication</text>
  <line x1="100" y1="250" x2="200" y2="250" stroke="#FFD700" strokeWidth="2" />
  
  {/* Author Name */}
  <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">By K SRTV Prasad</text>
</svg>
    ),
    isPopular: true,
    colorClass: "text-dark" // Kept dark text for contrast on home page card
  },
  // 2. 1000 Verbs
  {
    id: 1,
    title: "1000 Verb Forms",
    price: "₹99",
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#004e92', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#000428', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="340" fill="url(#grad1)" rx="8" />
        <rect x="20" y="40" width="260" height="260" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <text x="150" y="30" fill="#4facfe" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="60" fontWeight="900">1000</text>
        <text x="150" y="180" fill="#4facfe" textAnchor="middle" fontSize="28" fontWeight="bold">VERB FORMS</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: false,
    colorClass: "text-primary"
  },
  // 3. Vocabulary
  {
    id: 2,
    title: "Essential Vocabulary",
    price: "₹129",
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradVocab" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f12711', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f5af19', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="340" fill="url(#gradVocab)" rx="8" />
        <text x="150" y="30" fill="white" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <circle cx="150" cy="140" r="50" fill="white" opacity="0.2" />
        <text x="150" y="180" fill="white" textAnchor="middle" fontSize="36" fontWeight="900">VOCAB</text>
        <text x="150" y="220" fill="#333" textAnchor="middle" fontSize="24" fontWeight="bold">BOOSTER</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: false,
    colorClass: "text-warning"
  },
  // 4. Intermediate Grammar
  {
    id: 3,
    title: "Intermediate Grammar",
    price: "₹149",
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="gradInter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00c6ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0072ff', stopOpacity: 1 }} />
        </linearGradient>
        <rect width="300" height="340" fill="url(#gradInter)" rx="8" />
        <rect x="50" y="0" width="200" height="340" fill="rgba(255,255,255,0.1)" />
        <text x="150" y="30" fill="white" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold">ENGLISH</text>
        <text x="150" y="180" fill="white" textAnchor="middle" fontSize="32" fontWeight="900">GRAMMAR</text>
        <text x="150" y="220" fill="#ffd700" textAnchor="middle" fontSize="24" fontWeight="bold">INTERMEDIATE</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: false,
    colorClass: "text-info"
  },
  // 5. Advanced Grammar
  {
    id: 4,
    title: "Advanced Grammar",
    price: "₹149",
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradAdv" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#11998e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38ef7d', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="340" fill="url(#gradAdv)" rx="8" />
        <text x="150" y="30" fill="white" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <text x="150" y="140" fill="white" textAnchor="middle" fontSize="38" fontWeight="900">English</text>
        <text x="150" y="180" fill="#1a2a6c" textAnchor="middle" fontSize="38" fontWeight="900">Grammar</text>
        <text x="150" y="220" fill="white" textAnchor="middle" fontSize="38" fontWeight="900">in Use</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: false,
    colorClass: "text-success"
  },
  // 6. IELTS Kit
  {
    id: 5,
    title: "IELTS Success Kit",
    price: "₹499",
    type: "ZIP Bundle (7GB)",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradIelts" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8E0E00', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1F1C18', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="340" fill="url(#gradIelts)" rx="8" />
        <text x="150" y="30" fill="#FFD700" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <rect x="0" y="50" width="300" height="40" fill="#FFD700" />
        <text x="150" y="75" fill="black" textAnchor="middle" fontSize="18" fontWeight="bold">★ PREMIUM KIT ★</text>
        <text x="150" y="150" fill="white" textAnchor="middle" fontSize="48" fontWeight="900">IELTS</text>
        <text x="150" y="190" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold">SUCCESS FORMULA</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: true,
    colorClass: "text-danger"
  },
  // 7. Tell Me About Yourself
  {
    id: 6,
    title: "Tell Me About Yourself",
    price: "₹99",
    type: "PDF E-Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="340" fill="#636e72" rx="8" />
        <text x="150" y="30" fill="white" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <path d="M100 100 L200 100 L150 180 Z" fill="#fab1a0" />
        <text x="150" y="80" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold">THE GUIDE TO</text>
        <text x="150" y="230" fill="white" textAnchor="middle" fontSize="28" fontWeight="bold">TELL ME</text>
        <text x="150" y="265" fill="#fab1a0" textAnchor="middle" fontSize="24" fontWeight="bold">ABOUT YOURSELF</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: false,
    colorClass: "text-secondary"
  },
  // 8. 64 Tough Questions
  {
    id: 7,
    title: "64 Tough Interview Qs",
    price: "₹129",
    type: "PDF Guide",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="340" fill="#2d3436" rx="8" />
        <text x="150" y="30" fill="#00cec9" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <text x="150" y="100" fill="#00cec9" textAnchor="middle" fontSize="80" fontWeight="900">64</text>
        <text x="150" y="150" fill="white" textAnchor="middle" fontSize="22" fontWeight="bold">TOUGHEST</text>
        <text x="150" y="180" fill="white" textAnchor="middle" fontSize="22" fontWeight="bold">QUESTIONS</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: true,
    colorClass: "text-info"
  },
  // 9. Body Language
  {
    id: 8,
    title: "Body Language",
    price: "₹89",
    type: "PDF Guide",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8e44ad', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="300" height="340" fill="url(#gradBody)" rx="8" />
        <text x="150" y="30" fill="white" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <circle cx="150" cy="110" r="40" fill="none" stroke="white" strokeWidth="4" />
        <path d="M150 150 L150 220 M120 180 L180 180" stroke="white" strokeWidth="4" />
        <text x="150" y="260" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold">BODY LANGUAGE</text>
        <text x="150" y="310" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: false,
    colorClass: "text-primary"
  },
  // 10. Personality Development
  {
    id: 9,
    title: "Vyaktitva Vikasam (Personality Development)",
    price: "₹49",
    type: "Telugu Book",
    coverImage: (
      <svg width="100%" height="100%" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="340" fill="#fff5d7" rx="8" />
        <text x="150" y="30" fill="#8b4513" textAnchor="middle" fontSize="12" fontWeight="bold" letterSpacing="1">IBC SPOKEN ENGLISH</text>
        <text x="150" y="120" fill="#8b4513" textAnchor="middle" fontSize="34" fontFamily="serif" fontWeight="900">వ్యక్తిత్వ</text>
        <text x="150" y="170" fill="#8b4513" textAnchor="middle" fontSize="34" fontFamily="serif" fontWeight="900">వికాసం</text>
        <text x="150" y="250" fill="#555" textAnchor="middle" fontSize="16" fontFamily="serif">స్వామి వివేకానంద</text>
        <text x="150" y="310" fill="#8b4513" textAnchor="middle" fontSize="14" fontWeight="bold">K SRTV Prasad</text>
      </svg>
    ),
    isPopular: false,
    colorClass: "text-warning"
  }
];

interface Review {
  name: string;
  rating: number;
  message: string;
  createdAt: string;
}

export default function Home() {
  const [latestReviews, setLatestReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  useEffect(() => {
    const carouselElement = document.getElementById('testimonialsCarousel');
    if (carouselElement) {
      new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 5000,
        wrap: true,
      });
    }

    const fetchLatestReviews = async () => {
      try {
        setReviewsLoading(true);
        const res = await fetch('/api/get-reviews?page=1');
        const data = await res.json();
        setLatestReviews(data.reviews);
      } catch (error) {
        console.error('Failed to fetch latest reviews', error);
      } finally {
        setReviewsLoading(false);
      }
    };

    fetchLatestReviews();
  }, []);

  return (
    <>
      <style jsx global>{animationStyles}</style>
      <Navbar />

     
      {/* === 1. HERO SECTION (Buttons with Animation) === */}
      <section className="hero-section text-center text-white position-relative animate-fade-up" style={{marginTop: '70px'}}>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-2 h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="hero-title mb-3">
            Gain Confidence in Mastering Spoken English
          </h1>
          <p className="hero-subtitle mb-4">
            Transform your communication skills with 25+ years of expert guidance.
          </p>
          
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            {/* Button 1: Hover Lift Effect */}
            <Link href="/about" className="btn btn-success btn-lg rounded-pill shadow-lg px-4 hover-lift">
             About Us
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-primary btn-lg rounded-pill shadow-lg px-4 hover-lift"
            >
              Book Demo Class
            </Link>

            {/* Button 2: Hover Lift Effect */}
            <Link 
              href="/materials" 
              className="btn btn-warning btn-lg rounded-pill shadow-lg px-4 fw-bold text-dark d-flex align-items-center hover-lift"
            >
              <Download size={20} className="me-2" /> Easy Study Materials
            </Link>
          </div>
        </div>
      </section>

      {/* === 2. STATS SECTION === */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6 animate-fade-up delay-100">
              <div className="stat-card text-center p-4 hover-lift">
                <h3 className="text-primary mb-2">25+</h3>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 animate-fade-up delay-200">
              <div className="stat-card text-center p-4 hover-lift">
                <h3 className="text-primary mb-2">15000+</h3>
                <p className="text-muted">Students Trained</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 animate-fade-up delay-300">
              <div className="stat-card text-center p-4 hover-lift">
                <h3 className="text-primary mb-2">100%</h3>
                <p className="text-muted">Satisfaction Rate</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 animate-fade-up delay-100">
              <div className="stat-card text-center p-4 hover-lift">
                <h3 className="text-primary mb-2">50+</h3>
                <p className="text-muted">Corporate Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 3. ABOUT US SECTION (UPDATED WITH HOVER REVEAL ANIMATION) === */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              {/* Image Container with Hover Effect */}
              <div className="about-image-container hover-lift animate-fade-up shadow-lg">
                <Image
                  src="/about-home-image_old.jpg"
                  alt="About IBC Spoken English"
                  width={350}
                  height={250}
                  className="img-fluid"
                  style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} 
                />
                {/* Sliding Content on Hover */}
                <div className="about-hover-content">
                  <h4>
                    <Quote size={24} className="me-2" />
                    Words from the Master
                  </h4>
                  <p>
                    "Language is not just about words; it's about confidence and connection. My mission is to help you break the barriers of hesitation and speak English fluently, opening doors to endless opportunities."
                  </p>
                  <p className="mt-3 mb-0 fw-bold">
                    - K SRTV Prasad
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-up">
              <h6 className="text-primary fw-bold text-uppercase">About Us</h6>
              <h2 className="display-6 fw-bold mb-3">
                Welcome to IBC Spoken English
              </h2>
              <p className="lead text-muted mb-4">
                My name is <b>Konakanchi SRTV Prasad</b>, and I am a tutor
                specializing in Spoken English. With 25 years of
                experience, I have helped thousands of students overcome their fear of English.
              </p>
              <div className="row g-3 mb-4">
                 <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                       <CheckCircle className="text-success me-2"/> <span>Expert Faculty</span>
                    </div>
                 </div>
                 <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                       <CheckCircle className="text-success me-2"/> <span>Practical Training</span>
                    </div>
                 </div>
              </div>
              <Link
                href="/about"
                className="btn btn-primary rounded-pill px-4 hover-lift"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === 4. REVIEWS SECTION === */}
      <section
        id="testimonialsCarousel"
        className="carousel slide py-5"
        data-bs-ride="carousel"
      >
        <div className="container text-center mb-4">
          <h6 className="text-primary fw-bold text-uppercase">Testimonials</h6>
          <h2 className="section-heading">Latest Student Reviews</h2>
        </div>
        <div className="carousel-inner">
          {reviewsLoading && (
            <div className="carousel-item active">
              <p className="text-center text-muted">Loading reviews...</p>
            </div>
          )}
          {!reviewsLoading && latestReviews.length === 0 && (
            <div className="carousel-item active">
              <p className="text-center text-muted">No reviews available yet.</p>
            </div>
          )}
          {!reviewsLoading &&
            latestReviews.map((review, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="testimonial-card text-center p-5 bg-white shadow-sm rounded-4 hover-lift">
                        <div className="mb-3 text-warning">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={20} fill="#ffc107" stroke="#ffc107" />
                          ))}
                        </div>
                        <p className="lead mb-4 fst-italic">"{review.message}"</p>
                        <p className="mb-0 fw-bold text-primary">
                          - {review.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {latestReviews.length > 1 && (
          <>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
            </button>
          </>
        )}
      </section>

      {/* === 5. NEW RESOURCE BOOKS SECTION (Animated) === */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5 animate-fade-up">
            <h6 className="text-primary fw-bold text-uppercase">Study Resources</h6>
            <h2 className="fw-bold">Our Premium Study Materials</h2>
            <p className="text-muted">Start your learning journey with our expert-curated books</p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {products.map((product, index) => (
              <div key={product.id} className={`col animate-fade-up delay-${(index % 3 + 1) * 100}`}>
                <Link href="/materials" style={{textDecoration: 'none'}}>
                    <div className="card h-100 border-0 shadow-sm hover-lift position-relative overflow-hidden rounded-4" style={{ transition: 'all 0.3s ease' }}>
                    
                    {product.isPopular && (
                        <div className="position-absolute top-0 end-0 z-3">
                        <div className="bg-danger text-white px-3 py-1 fw-bold small rounded-bottom-start shadow-sm d-flex align-items-center">
                            <Award size={14} className="me-1" /> Best Seller
                        </div>
                        </div>
                    )}
                    
                    <div className="position-relative d-flex align-items-center justify-content-center pt-3" style={{ height: '340px', overflow: 'hidden' }}>
                        <div style={{ width: '85%', height: '100%', borderRadius: '4px', transform: 'perspective(1000px) rotateY(5deg)' }}>
                           {product.coverImage}
                        </div>
                    </div>

                    <div className="card-body p-3 text-center bg-white">
                        <h6 className="fw-bold text-dark mb-1">{product.title}</h6>
                        <h5 className={`fw-bold mb-2 ${product.colorClass}`}>{product.price}</h5>
                        <span className="btn btn-sm btn-outline-dark rounded-pill px-3">View Details</span>
                    </div>
                    </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link href="/materials" className="btn btn-primary btn-lg rounded-pill px-5 shadow hover-lift">
              Go to Materials Page <ArrowRight size={18} className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* === 6. SERVICES SECTION === */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5 animate-fade-up">
            <h2 className="section-heading">Our Services</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 animate-fade-up delay-100">
              <div className="service-card text-center p-4 bg-white rounded-4 shadow-sm h-100 hover-lift">
                <MessageSquare size={48} className="text-primary mb-3" />
                <h5>Spoken English</h5>
                <p className="text-muted">Master conversation at all levels</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 animate-fade-up delay-200">
              <div className="service-card text-center p-4 bg-white rounded-4 shadow-sm h-100 hover-lift">
                <Briefcase size={48} className="text-primary mb-3" />
                <h5>Business Communication</h5>
                <p className="text-muted">Professional communication excellence</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 animate-fade-up delay-300">
              <div className="service-card text-center p-4 bg-white rounded-4 shadow-sm h-100 hover-lift">
                <TrendingUp size={48} className="text-primary mb-3" />
                <h5>Interview Preparation</h5>
                <p className="text-muted">Land your dream job with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 7. WHY CHOOSE US === */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5 animate-fade-up">
            <h2 className="section-heading">Why Choose Us?</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4 animate-fade-up delay-100">
              <div className="why-card text-center p-4 hover-lift">
                <Award size={40} className="text-primary mb-3" />
                <h5>Expert Instructor</h5>
                <p className="text-muted">25+ years of teaching experience</p>
              </div>
            </div>
            <div className="col-md-4 animate-fade-up delay-200">
              <div className="why-card text-center p-4 hover-lift">
                <Users size={40} className="text-primary mb-3" />
                <h5>Personalized Approach</h5>
                <p className="text-muted">Small batches for individual attention</p>
              </div>
            </div>
            <div className="col-md-4 animate-fade-up delay-300">
              <div className="why-card text-center p-4 hover-lift">
                <CheckCircle size={40} className="text-primary mb-3" />
                <h5>Guaranteed Results</h5>
                <p className="text-muted">Proven track record of success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 8. CTA SECTION === */}
      <section className="py-5 cta-section bg-primary text-white animate-fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Ready to Transform Your English?</h2>
              <p className="lead mb-5">
                Join thousands of successful learners. Book your free demo class today!
              </p>
              <Link href="/contact" className="btn btn-light btn-lg rounded-pill shadow text-primary fw-bold hover-lift">
                Schedule Your Demo Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}