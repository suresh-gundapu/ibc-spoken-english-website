'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image'; // Image కాంపోనెంట్ ఇంపోర్ట్ చేయబడింది
import {
  Award,
  Users,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Briefcase,
} from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const carouselElement = document.getElementById('testimonialsCarousel');
    if (carouselElement) {
      const carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 4000,
        wrap: true,
      });
    }
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero-section">
        {/* hero-overlay తీసివేయబడింది, ఎందుకంటే మనం దాన్ని CSS లోనే merge చేసాం */}
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

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="stat-card text-center p-4">
                <h3 className="text-primary mb-2">25+</h3>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
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

      {/* ========== కొత్తగా జోడించిన 'About Us' సెక్షన్ ========== */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <Image
                  src="/about-home-image.jpg"
                  alt="About IBC Spoken English"
                  width={350} // ఇమేజ్ వెడల్పు 500 నుండి 450కి తగ్గించబడింది
                  height={250} // ఇమేజ్ ఎత్తు 400 నుండి 350కి తగ్గించబడింది
                  className="img-fluid rounded-3 shadow-lg hover-scale-effect" // కొత్త క్లాస్ 'hover-scale-effect' జోడించబడింది
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
                experience, I've worked with students, employees,
                professionals, and homemakers to help them achieve fluency and
                confidence.
              </p>
              <p className="text-muted">
                Our goal is to enhance your communication, body language, and
                confidence for personal and professional growth. We provide demo
                classes and a satisfaction guarantee.
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
      {/* ========== కొత్త సెక్షన్ ముగిసింది ========== */}

      <section
        id="testimonialsCarousel"
        className="carousel slide py-5" /* bg-light తీసివేయబడింది, ఎందుకంటే పై సెక్షన్‌కు ఉంది */
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="testimonial-card text-center p-5">
                    <div className="mb-4">
                      <span className="text-warning">★★★★★</span>
                    </div>
                    <p className="lead mb-4">
                      "The training transformed my confidence and communication
                      skills. I got my dream job thanks to the interview
                      preparation!"
                    </p>
                    <p className="mb-0">
                      <strong>- Priya Sharma, Student</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... మిగిలిన carousel-items ... */}
          <div className="carousel-item">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="testimonial-card text-center p-5">
                    <div className="mb-4">
                      <span className="text-warning">★★★★★</span>
                    </div>
                    <p className="lead mb-4">
                      "Best investment for my English skills. The demo class
                      itself was so informative!"
                    </p>
                    <p className="mb-0">
                      <strong>- Aisha Mohamed, Learner</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
      <section className="text-center pb-5">
        <div className="container">
          <Link href="/reviews" className="btn btn-outline-primary rounded-pill px-4">
            View All Student Reviews
          </Link>
        </div>
      </section>
      {/* ... మిగిలిన Services, Why Choose Us, CTA సెక్షన్లు ... */}
      
      <section className="py-5">
        <div className="container">
         <div className="text-center mb-5">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">Comprehensive training programs designed for your success</p>
        </div>
          <div className="row g-4">
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

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
          <h2 className="section-heading">Why Choose Us?</h2>
          <p className="section-subheading">Excellence in every aspect of training</p>
        </div>
          <div className="row g-4">
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