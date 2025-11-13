'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top navbar-transition ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/ibc-logo.png"
            alt="IBC Spoken English Logo"
            width={250} // లోగో వెడల్పు తగ్గించబడింది (300 నుండి 200కి)
            height={70} // లోగో ఎత్తు ఆటోమేటిక్‌గా సర్దుబాటు చేయబడింది
            priority
            className="me-2"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/services' ? 'active' : ''}`}
                href="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* బటన్‌కు 'rounded-pill' మరియు 'shadow-sm' క్లాసులు జోడించబడ్డాయి */}
          <Link
            href="/contact"
            className="btn btn-primary ms-lg-3 rounded-pill shadow-sm"
          >
            Book Demo Class
          </Link>
        </div>
      </div>
    </nav>
  );
}