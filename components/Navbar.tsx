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
      setIsScrolled(window.scrollY > 20); // 50 నుండి 20 కి మార్చాం, రెస్పాన్స్ ఫాస్ట్ గా ఉండటానికి
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-transition ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          {/* Logo size responsive ga handle cheyadaniki style vadam */}
          <div style={{ maxWidth: '180px', height: 'auto' }}>
            <Image
              src="/ibc-logo.png"
              alt="IBC Spoken English Logo"
              width={200}
              height={60}
              priority
              style={{ width: '100%', height: 'auto' }} // Responsive Image
            />
          </div>
        </Link>
        
        <button
          className="navbar-toggler border-0 shadow-none"
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
          <ul className="navbar-nav ms-auto align-items-center">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Reviews', path: '/reviews' },
              { name: 'Materials', path: '/materials' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link
            href="/contact"
            className="btn btn-primary ms-lg-3 rounded-pill shadow-sm fw-bold px-4"
          >
            Book Demo Class
          </Link>
        </div>
      </div>
    </nav>
  );
}