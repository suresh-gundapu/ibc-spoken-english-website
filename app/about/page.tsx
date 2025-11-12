import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image'; // Next.js ఇమేజ్ కాంపోనెంట్‌ను ఇంపోర్ట్ చేయండి
import Link from 'next/link'; // Link కాంపోనర్‌ను ఇంపోర్ట్ చేయండి
import { CheckCircle } from 'lucide-react'; // క్వాలిఫికేషన్స్ కోసం ఐకాన్

export const metadata = {
  title: 'About Us - IBC Spoken English',
  description:
    'Learn about K. SRTV Prasad and IBC Spoken English. 25+ years of experience.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* === మెయిన్ ఇంట్రడక్షన్ సెక్షన్ === */}
      <section className="py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* ఇమేజ్ కాలమ్ */}
            <div className="col-lg-5 col-md-6">
              <Image
                src="/about-home-image.jpg" // 'public' ఫోల్డర్‌లోని ఇమేజ్
                alt="Konakanchi SRTV Prasad, Tutor"
                width={400}
                height={500}
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>

            {/* కంటెంట్ కాలమ్ */}
            <div className="col-lg-7 col-md-6">
              <h1 className="display-5 fw-bold mb-3">
                Welcome to IBC Spoken English
              </h1>
              <p className="lead text-muted mb-4">
                My name is <strong>Konakanchi SRTV Prasad</strong>, and I am
                delighted to introduce myself as a tutor specializing in Spoken
                Hindi and English at various levels—basic, intermediate, and
                advanced.
              </p>
              <p className="mb-4">
                I also provide training in business communication, soft skills,
                interview preparation, and corporate training. With{' '}
                <strong>25 years</strong> of teaching and training experience, I
                have had the privilege of working with students, employees,
                business professionals, and homemakers.
              </p>
              <p className="mb-4">
                My goal is to support you in achieving fluency and confidence
                in English. I am here to assist you in enhancing your body
                language, tone, and gestures to boost your personality and
                confidence, all of which are crucial for attaining your dream
                job.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
              >
                Book Your Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === క్వాలిఫికేషన్స్ సెక్షన్ === */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-center section-heading mb-5">
                My Qualifications & Approach
              </h2>
              {/* ఐకాన్స్‌తో కూడిన లిస్ట్ */}
              <ul className="list-unstyled mb-0">
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    <strong>Over 25 years of experience</strong> as a Spoken English
                    faculty member, successfully training professionals from
                    various sectors.
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    Strong presentation skills and the ability to conduct
                    <strong> large-scale training sessions</strong> effectively.
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    A record of mentoring and coaching students from{' '}
                    <strong>diverse age groups</strong> (middle school to
                    postgraduate).
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    <strong>Result-oriented approach</strong> paired with excellent
                    communication and interpersonal skills.
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    Well-equipped to teach English from{' '}
                    <strong>Telugu and Hindi</strong> with a strong emphasis on
                    achieving results.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === గ్యారెంటీ సెక్షన్ === */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="card border-0 shadow-lg"
                style={{ backgroundColor: 'var(--primary-blue)' }}
              >
                <div className="card-body p-5 text-white">
                  <h3 className="text-white fw-bold mb-3">
                    Our Satisfaction Guarantee
                  </h3>
                  <p className="lead mb-0">
                    To demonstrate my confidence in the quality of my
                    instruction, I offer a satisfaction guarantee: if my class
                    does not meet your expectations, I will gladly{' '}
                    <strong>refund your fee</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}