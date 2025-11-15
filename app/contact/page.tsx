'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // కొత్తగా 'phone' ఫీల్డ్ జోడించబడింది
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ఫారమ్ సబ్మిషన్ లాజిక్ (తరువాత మనం దీన్ని Google Sheets కి మారుద్దాం)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ప్రస్తుతం ఇది /api/contact కి పంపుతుంది
      // మనం దీన్ని Google Sheets కి పంపేలా తరువాత మార్చుకుందాం
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' }); // ఫారమ్ రీసెట్
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* పాత 'hero-section' (ఆ పెద్ద బ్లూ బార్) ఇక్కడ నుండి తీసివేయబడింది.
       */}

      {/* Contact Information Section */}
      <section className="py-5" style={{ marginTop: '80px' }}>
        {' '}
        {/* Navbar కింద గ్యాప్ */}
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="section-heading">Get In Touch</h1>
            <p className="section-subheading">
              Have questions? We would love to hear from you. Reach out to us today!
            </p>
          </div>

          <div className="row g-4 mb-5">
            {/* కార్డ్స్‌కు 'service-card' స్టైల్స్ (లేదా stat-card) అప్లై చేస్తున్నాం */}
            <div className="col-md-4">
              <div className="card service-card h-100 text-center p-4">
                <MapPin className="text-primary mb-3" size={48} />
                <h5>Our Address</h5>
                <p className="text-muted mb-0">
                  Opposite Sree Bakery, Temple Alwal, Secunderabad 500010
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-center p-4">
                <Phone className="text-primary mb-3" size={48} />
                <h5>Phone Number</h5>
                <a
                  href="tel:8121659619"
                  className="text-decoration-none text-muted"
                >
                  8121659619
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-center p-4">
                <Mail className="text-primary mb-3" size={48} />
                <h5>Email Address</h5>
                <a
                  href="mailto:ibcspokenenglish@gmail.com"
                  className="text-decoration-none text-muted"
                >
                  ibcspokenenglish@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Main Contact Section (Form & Map) */}
          <div className="row align-items-center mt-5 g-5">
            <div className="col-lg-6">
              <div className="contact-form bg-light p-4 p-md-5 rounded-3 shadow-sm">
                <h2 className="mb-4">Send us a Message</h2>
                {submitted && (
                  <div
                    className="alert alert-success d-flex align-items-center"
                    role="alert"
                  >
                    <CheckCircle className="me-2" size={20} />
                    Thank you! We will get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  {/* ========== కొత్తగా జోడించిన ఫోన్ నంబర్ ఫీల్డ్ ========== */}
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                    />
                  </div>
                  {/* ========== ఫీల్డ్ ముగిసింది ========== */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your interest in our services..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 rounded-pill shadow-sm"
                    disabled={loading}
                  >
                    <Send className="me-2" size={20} />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="col-lg-6">
              <div
                className="rounded-3 overflow-hidden shadow"
                style={{ height: '550px' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9828954432924!2d78.45642!3d17.36847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ba4f1d7b8f%3A0x4d6c7e8f9a1b2c3d!2sTemple%20Alwal%2C%20Secunderabad%2C%20Telangana%20500010!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IBC Spoken English Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ సెక్షన్ (ఇది ఇప్పటికే బాగుంది, కాబట్టి దీన్ని ఉంచేద్దాం) */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Quick answers to common questions.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {/* FAQ Items (మీ పాత కోడ్‌లోనివే) */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="true"
                    >
                      Is there a demo class available?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes! We offer a FREE demo class so you can experience our
                      teaching methodology firsthand.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      What are your batch sizes?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We maintain small batch sizes to ensure personalized
                      attention for each student.
                    </div>
                  </div>
                </div>
                {/* ...ఇతర FAQs... */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}