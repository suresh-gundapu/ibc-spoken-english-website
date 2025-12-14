import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5">
        <h1>Terms and Conditions</h1>
        <p>Welcome to IBC Spoken English!</p>
        <p>These terms and conditions outline the rules and regulations for the use of IBC Spoken English's Website.</p>
        <h3>1. License</h3>
        <p>Unless otherwise stated, IBC Spoken English and/or its licensors own the intellectual property rights for all material on IBC Spoken English. All intellectual property rights are reserved.</p>
        <h3>2. Purchases</h3>
        <p>When you buy a digital product (PDF/Course) from us, you agree not to redistribute or resell the content. It is for your personal use only.</p>
      </div>
      <Footer />
    </>
  );
}