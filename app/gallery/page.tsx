import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Presentation, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Gallery - IBC Spoken English',
  description: 'View our training sessions and success stories.',
};

export default function GalleryPage() {
  const galleryItems = [
    { icon: Users, title: 'Group Training Sessions', color: '#1a73e8' },
    { icon: Presentation, title: 'Corporate Workshops', color: '#34a853' },
    { icon: Award, title: 'Student Achievements', color: '#fbbc04' },
    { icon: BookOpen, title: 'Classroom Learning', color: '#ea4335' },
    { icon: Briefcase, title: 'Interview Prep Sessions', color: '#4285f4' },
    { icon: GraduationCap, title: 'Online Classes', color: '#9334e6' },
  ];

  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ minHeight: '400px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1>Our Gallery</h1>
              <p className="lead">A glimpse into our training sessions</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item" style={{ backgroundColor: `${item.color}15` }}>
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4">
                  <item.icon size={80} style={{ color: item.color }} />
                  <h4 className="mt-3 mb-2 text-center" style={{ color: item.color }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
