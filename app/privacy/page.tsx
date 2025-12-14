import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5">
        <h1>Privacy Policy</h1>
        <p>Last updated: December 14, 2025</p>
        <p>At IBC Spoken English, accessible from www.ibcspokenenglish.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by IBC Spoken English and how we use it.</p>
        <h3>Information we collect</h3>
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information (e.g., Name, Email, Phone number during purchase).</p>
        <h3>How we use your information</h3>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Process your transactions</li>
          <li>Send you emails regarding your order</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}