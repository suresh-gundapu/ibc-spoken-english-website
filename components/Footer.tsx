import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row g-4"> {/* g-4 adds gap between columns */}
          {/* Column 1: Logo & Intro */}
          <div className="col-lg-4 col-md-6">
            <Link className="d-block mb-3" href="/">
              <Image
                src="/ibc-logo.png" // గమనిక: డార్క్ బ్యాక్‌గ్రౌండ్ కాబట్టి వైట్ లోగో ఉంటే బెటర్, లేకపోతే ఇది వాడు
                alt="IBC Spoken English"
                width={160}
                height={50}
                style={{ width: 'auto', height: '40px' }}
                className="footer-logo" // కొంచెం ఎఫెక్ట్
              />
            </Link>         
            <p className="small">
              Professional English training with 25+ years of experience in Spoken English,
              Business Communication, and Corporate Training.
            </p>
            <div className="social-icons mt-4">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/">Home</Link></li>
              <li className="mb-2"><Link href="/about">About Us</Link></li>
              <li className="mb-2"><Link href="/services">Services</Link></li>
              <li className="mb-2"><Link href="/reviews">Reviews</Link></li>
              <li className="mb-2"><Link href="/contact">Contact</Link></li>
              <li className="mb-2"><Link href="/privacy">Privacy Policy</Link></li>
              <li className="mb-2"><Link href="/terms">Terms & Conditions</Link></li>
              <li className="mb-2"><Link href="/refund">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="col-lg-3 col-md-6">
            <h5>Our Programs</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Spoken English</li>
              <li className="mb-2">Business Communication</li>
              <li className="mb-2">Interview Preparation</li>
              <li className="mb-2">Corporate Training</li>
              <li className="mb-2">Soft Skills</li>
              
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-lg-3 col-md-6">
            <h5>Get in Touch</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <MapPin size={18} className="me-2 mt-1 text-primary flex-shrink-0" />
                <span>Opp. Sree Bakery, Temple Alwal, Secunderabad 500010</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Phone size={18} className="me-2 text-primary" />
                <a href="tel:8121659619">8121659619</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Mail size={18} className="me-2 text-primary" />
                <a href="mailto:ibcspokenenglish@gmail.com">ibcspokenenglish@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small">
              &copy; {currentYear} IBC Spoken English. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
             <span className="small text-muted">Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}