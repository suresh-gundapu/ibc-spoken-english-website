import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Download, FileText, Package, Star, Check } from 'lucide-react';

export const metadata = {
  title: 'Study Materials - IBC Spoken English',
  description: 'Download premium English learning materials, PDFs, and IELTS kits.',
};

// ప్రొడక్ట్స్ డేటా (Razorpay లింక్స్ వచ్చాక href మార్చాలి)
const products = [
  {
    id: 1,
    title: "1000 Verb Forms & Sentences",
    description: "Complete list of verb forms with Telugu meaning and example sentences. Essential for beginners.",
    price: "₹99",
    type: "PDF E-Book",
    icon: <FileText size={40} className="text-white" />,
    color: "bg-primary",
    features: ["Telugu Meanings", "Daily Usage Sentences", "Instant Download"],
    link: "#", // Razorpay Link Here
  },
  {
    id: 2,
    title: "Advanced Grammar in Use",
    description: "Self-study reference and practice book for advanced learners to master English grammar.",
    price: "₹149",
    type: "PDF E-Book",
    icon: <BookOpen size={40} className="text-white" />,
    color: "bg-success",
    features: ["Advanced Concepts", "Practice Exercises", "Self-study Guide"],
    link: "#",
  },
  {
    id: 3,
    title: "Easy Essential Vocabulary",
    description: "Boost your word power with this carefully curated list of essential English vocabulary.",
    price: "₹129",
    type: "PDF E-Book",
    icon: <Star size={40} className="text-white" />,
    color: "bg-warning",
    features: ["Daily Vocabulary", "Easy Memorization", "Visual Examples"],
    link: "#",
  },
  {
    id: 4,
    title: "IELTS Success 100% Kit",
    description: "Complete IELTS Speaking preparation kit. Includes audio, video, and comprehensive guides.",
    price: "₹499",
    type: "ZIP Bundle (7GB)", // హైలైట్ చేస్తున్నాం
    icon: <Package size={40} className="text-white" />,
    color: "bg-danger",
    features: ["7GB Huge Content", "Audio & Video", "Speaking Modules", "Band 9 Tips"],
    isPopular: true, // స్పెషల్ బ్యాడ్జ్ కోసం
    link: "#",
  },
];

export default function MaterialsPage() {
  return (
    <>
      <Navbar />
      
      {/* Header Section */}
      <section className="py-5 bg-light" style={{ marginTop: '80px' }}>
        <div className="container text-center">
          <h1 className=" fw-bold mb-3">Premium Study Materials</h1>
          <p className="lead text-muted max-w-2xl mx-auto">
            Accelerate your learning with our expertly crafted e-books and study kits. 
            Download instantly and start learning today.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-lg-6 col-xl-3">
                <div className={`card h-100 border-0 shadow-sm hover-scale-effect position-relative overflow-hidden`}>
                  {product.isPopular && (
                    <div className="position-absolute top-0 end-0 bg-warning text-dark px-3 py-1 fw-bold small rounded-bottom-start">
                      Best Seller
                    </div>
                  )}
                  
                  {/* Card Image / Icon Placeholder */}
                  <div className={`card-header border-0 py-5 ${product.color} d-flex justify-content-center align-items-center`}>
                    {product.icon}
                  </div>

                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-light text-dark border">{product.type}</span>
                      <h4 className="fw-bold text-primary mb-0">{product.price}</h4>
                    </div>
                    
                    <h5 className="card-title fw-bold mb-2">{product.title}</h5>
                    <p className="card-text text-muted small mb-4 flex-grow-1">
                      {product.description}
                    </p>

                    <ul className="list-unstyled small text-muted mb-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center">
                          <Check size={16} className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a href={product.link} className={`btn w-100 rounded-pill fw-semibold ${product.isPopular ? 'btn-primary' : 'btn-outline-primary'}`}>
                      <Download size={18} className="me-2" />
                      Buy & Download
                    </a>
                  </div>
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