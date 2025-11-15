import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/ibc-logo.png"
            alt="IBC Spoken English Logo"
            width={300}
            height={70}
            priority
            className="me-2"
          />
        </Link>         
        <p className="text-light">
              Professional English training with 25+ years of experience in Spoken English,
              Business Communication, and Corporate Training.
            </p>
            <div className="social-icons mt-3">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/">Home</Link></li>
              <li className="mb-2"><Link href="/about">About Us</Link></li>
              <li className="mb-2"><Link href="/services">Services</Link></li>
              <li className="mb-2"><Link href="/gallery">Gallery</Link></li>
              <li className="mb-2"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Spoken English</li>
              <li className="mb-2">Business Communication</li>
              <li className="mb-2">Interview Preparation</li>
              <li className="mb-2">Corporate Training</li>
              <li className="mb-2">Soft Skills</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <MapPin size={20} className="me-2 mt-1 flex-shrink-0" />
                <span>Opposite Sree Bakery, Temple Alwal, Secunderabad 500010</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Phone size={20} className="me-2" />
                <a href="tel:8121659619">8121659619</a>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Mail size={20} className="me-2" />
                <a href="ibcspokenenglish@gmail.com">ibcspokenenglish@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 bg-light opacity-25" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} IBC Spoken English. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
