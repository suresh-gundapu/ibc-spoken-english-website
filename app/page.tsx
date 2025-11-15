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
  Star, // <-- రివ్యూ స్టార్ల కోసం ఇది యాడ్ చేయబడింది
} from 'lucide-react';
import { useEffect, useState } from 'react'; // <-- రివ్యూలను తెచ్చుకోవడానికి ఇవి యాడ్ చేయబడ్డాయి

// రివ్యూ ఆబ్జెక్ట్ టైప్ (Reviews పేజీలో వాడినట్లే)
interface Review {
  name: string;
  rating: number;
  message: string;
  createdAt: string;
}

export default function Home() {
  // రివ్యూల కోసం కొత్త స్టేట్
  const [latestReviews, setLatestReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  // పేజీ లోడ్ అయినప్పుడు లేటెస్ట్ రివ్యూలను తెస్తుంది
  useEffect(() => {
    // Bootstrap కరౌసెల్ కోసం
    const carouselElement = document.getElementById('testimonialsCarousel');
    if (carouselElement) {
      const carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 5000, // 5 సెకన్లకు ఒకసారి మారుతుంది
        wrap: true,
      });
    }

    // రివ్యూలను API నుండి తెస్తుంది
    const fetchLatestReviews = async () => {
      try {
        setReviewsLoading(true);
        // మనం రాసిన API ని వాడుతున్నాం (మొదటి 10 వస్తాయి)
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
      <Navbar />

      {/* === Hero Section === */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="hero-title">
                  Master Spoken English with Confidence
                </h1>
                <p className="hero-subtitle">
                  Transform your communication skills with 25+ years of expert
                  guidance
                </p>
                <div className="d-flex gap-3 justify-content-center mt-5 flex-wrap">
                  <Link
                    href="/contact"
                    className="btn btn-primary btn-lg rounded-pill shadow"
                  >
                    Book Demo Class
                  </Link>
                  <Link
                    href="/services"
                    className="btn btn-outline-primary btn-lg rounded-pill"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Stats Section === */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="stat-card text-center p-4">
                <h3 className="text-primary mb-2">25+</h3>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
            {/* ...ఇతర Stat Cards... */}
            <div className="col-md-3 col-sm-6">
              <div className="stat-card text-center p-4">
                <h3 className="text-primary mb-2">5000+</h3>
                <p className="text-muted">Students Trained</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat-card text-center p-4">
                <h3 className="text-primary mb-2">100%</h3>
                <p className="text-muted">Satisfaction Rate</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat-card text-center p-4">
                <h3 className="text-primary mb-2">50+</h3>
                <p className="text-muted">Corporate Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === About Us Snippet Section === */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Image
                src="/about-home-image.jpg"
                alt="About IBC Spoken English"
                width={400}
                height={300}
                className="img-fluid rounded-3 shadow-lg"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-3">
                Welcome to IBC Spoken English
              </h2>
              <p className="lead text-muted mb-4">
                My name is Konakanchi SRTV Prasad, and I am a tutor
                specializing in Spoken Hindi and English. With 25 years of
                experience...
              </p>
              <Link
                href="/about"
                className="btn btn-primary rounded-pill px-4 mt-3"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === 4. డైనమిక్ టెస్టోమోనియల్స్/రివ్యూస్ కరౌసెల్ === */}
      <section
        id="testimonialsCarousel"
        className="carousel slide py-5"
        data-bs-ride="carousel"
      >
        <div className="container text-center mb-4">
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
                // మొదటి ఐటమ్‌కు 'active' క్లాస్ యాడ్ చేస్తుంది
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="testimonial-card text-center p-5">
                        {/* డైనమిక్ స్టార్ రేటింగ్ */}
                        <div className="mb-3 text-warning">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={20} fill="#ffc107" stroke="#ffc107" />
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <Star key={i} size={20} stroke="#ffc107" />
                          ))}
                        </div>
                        <p className="lead mb-4">"{review.message}"</p>
                        <p className="mb-0">
                          <strong>- {review.name}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* కంట్రోల్స్ (రివ్యూలు 1 కంటే ఎక్కువ ఉంటేనే కనిపిస్తాయి) */}
        {latestReviews.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="next"
              aria-label="Next slide"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </>
        )}
      </section>

      {/* === 'View All Reviews' బటన్ === */}
      <section className="text-center pb-5">
        <div className="container">
          <Link href="/reviews" className="btn btn-outline-primary rounded-pill px-4">
            View All Student Reviews
          </Link>
        </div>
      </section>

      {/* === Services Section === */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              Comprehensive training programs designed for your success
            </p>
          </div>
          <div className="row g-4">
            {/* ...Service Cards... */}
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <MessageSquare size={48} className="text-primary mb-3" />
                <h5>Spoken English</h5>
                <p className="text-muted">Master conversation at all levels</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <Briefcase size={48} className="text-primary mb-3" />
                <h5>Business Communication</h5>
                <p className="text-muted">Professional communication excellence</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <TrendingUp size={48} className="text-primary mb-3" />
                <h5>Interview Preparation</h5>
                <p className="text-muted">Land your dream job with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Why Choose Us Section === */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-heading">Why Choose Us?</h2>
            <p className="section-subheading">
              Excellence in every aspect of training
            </p>
          </div>
          <div className="row g-4">
            {/* ...Why Cards... */}
            <div className="col-md-4">
              <div className="why-card">
                <Award size={40} className="text-primary mb-3" />
                <h5>Expert Instructor</h5>
                <p>25+ years of teaching and training experience with proven results</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-card">
                <Users size={40} className="text-primary mb-3" />
                <h5>Personalized Approach</h5>
                <p>Small batches ensuring individual attention and customized learning</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-card">
                <CheckCircle size={40} className="text-primary mb-3" />
                <h5>Guaranteed Results</h5>
                <p>Free demo class and 100% satisfaction guarantee with refund option</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-5 cta-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Ready to Transform Your English?</h2>
              <p className="lead mb-5">
                Join thousands of successful learners. Book your free demo class today!
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg rounded-pill shadow">
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