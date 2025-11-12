import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MessageCircle, Briefcase, Target, Users, TrendingUp, Award } from 'lucide-react';

export const metadata = {
  title: 'Our Services - IBC Spoken English',
  description: 'Comprehensive English training services.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ minHeight: '400px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className='text-white'>Our Services</h1>
              <p className="lead text-white">Comprehensive English training solutions</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Professional Training Programs</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card service-card">
                <div className="card-body text-center">
                  <MessageCircle size={48} className="text-primary mb-3" />
                  <h4>Spoken English</h4>
                  <p className="text-muted">Master conversational English from basic to advanced levels.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card">
                <div className="card-body text-center">
                  <Briefcase size={48} className="text-primary mb-3" />
                  <h4>Business Communication</h4>
                  <p className="text-muted">Enhance your professional communication skills.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card">
                <div className="card-body text-center">
                  <Target size={48} className="text-primary mb-3" />
                  <h4>Interview Preparation</h4>
                  <p className="text-muted">Get job-ready with comprehensive interview coaching.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card">
                <div className="card-body text-center">
                  <Users size={48} className="text-primary mb-3" />
                  <h4>Corporate Training</h4>
                  <p className="text-muted">Customized programs for organizations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card">
                <div className="card-body text-center">
                  <TrendingUp size={48} className="text-primary mb-3" />
                  <h4>Soft Skills Training</h4>
                  <p className="text-muted">Develop essential skills for career advancement.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card">
                <div className="card-body text-center">
                  <Award size={48} className="text-primary mb-3" />
                  <h4>Public Speaking</h4>
                  <p className="text-muted">Become a confident, engaging speaker.</p>
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
