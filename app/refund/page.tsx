import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5">
        <h1>Cancellation & Refund Policy</h1>
        <p>Thank you for shopping at IBC Spoken English.</p>
        <h3>Digital Products</h3>
        <p>Since we issue digital products (PDFs, eBooks, Zip files) that are downloadable immediately after purchase, <b>we generally do not offer refunds</b> once the order is confirmed and the product is sent.</p>
        <p>However, if you face any technical issue and could not download the file, please contact us at <b>ibcspokenenglish@gmail.com</b> or call <b>8121659619</b> within 7 days. We will ensure you receive your product.</p>
      </div>
      <Footer />
    </>
  );
}