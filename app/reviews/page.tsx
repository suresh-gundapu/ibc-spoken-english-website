'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, CheckCircle, Star, ArrowLeft, ArrowRight } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  message: string;
  createdAt: string;
}

const REVIEWS_PER_PAGE = 10; // ఒక పేజీకి 10

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  
  // ఫారమ్ స్టేట్
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // పేజినేషన్ స్టేట్
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]); // currentPage మారిన ప్రతిసారీ కొత్త రివ్యూలను తెస్తుంది

  const fetchReviews = async (page: number) => {
    try {
      setLoading(true);
      // API కి ఏ పేజీ కావాలో పంపుతున్నాం
      const res = await fetch(`/api/get-reviews?page=${page}`);
      const data = await res.json();
      setReviews(data.reviews);
      setTotalCount(data.totalCount); // మొత్తం కౌంట్ సెట్ చేస్తున్నాం
    } catch (error) {
      console.error('Failed to fetch reviews', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a star rating.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, rating }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', message: '' });
        setRating(0);
        // సబ్మిట్ అయ్యాక, మొదటి పేజీకి వెళ్లి రివ్యూలను రిఫ్రెష్ చేస్తుంది
        setCurrentPage(1); 
        fetchReviews(1);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Failed to submit review', error);
    } finally {
      setSubmitting(false);
    }
  };

  // పేజినేషన్ కోసం లెక్కలు
  const totalPages = Math.ceil(totalCount / REVIEWS_PER_PAGE);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  return (
    <>
      <Navbar />
      <section className="py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row g-5">
            {/* 1. రివ్యూ ఫారమ్ */}
            <div className="col-lg-5">
              <div className="bg-light p-4 p-md-5 rounded-3 shadow-sm">
                <h2 className="section-heading mb-4">Leave a Review</h2>
                {/* ... (ఫారమ్ కోడ్ అంతా సేమ్, మార్పులు లేవు) ... */}
                {submitted && (
                  <div className="alert alert-success d-flex align-items-center">
                    <CheckCircle className="me-2" size={20} />
                    Thanks for your review!
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  {/* ... (Your Name ఫీల్డ్) ... */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  {/* ... (Star Rating ఫీల్డ్) ... */}
                  <div className="mb-3">
                    <label className="form-label d-block">Your Rating</label>
                    <div className="d-flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={30}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          fill={star <= (hoverRating || rating) ? '#ffc107' : 'none'}
                          stroke="#ffc107"
                          style={{ cursor: 'pointer', marginRight: '5px' }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* ... (Your Review ఫీల్డ్) ... */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Your Review</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-control"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Write your review here..."
                    ></textarea>
                  </div>
                  {/* ... (Submit Button) ... */}
                  <button type="submit" className="btn btn-primary w-100 rounded-pill" disabled={submitting}>
                    <Send size={18} className="me-2" />
                    {submitting ? 'Submitting...' : 'Submit Review'}
                  </button>
                </form>
              </div>
            </div>

            {/* 2. రివ్యూల లిస్ట్ */}
            <div className="col-lg-7">
              <h2 className="section-heading mb-4">What Our Students Say</h2>
              {loading && <p>Loading reviews...</p>}
              {!loading && reviews.length === 0 && (
                <p>No reviews yet. Be the first to leave one!</p>
              )}
              
              {/* రివ్యూలు చూపించే ఏరియా */}
              <div className="vstack gap-4">
                {reviews.map((review, index) => (
                  <div key={index} className="card shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title mb-0">{review.name}</h5>
                        <div className="text-warning">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="#ffc107" stroke="#ffc107" />
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <Star key={i} size={16} stroke="#ffc107" />
                          ))}
                        </div>
                      </div>
                      <p className="card-text text-muted">{review.message}</p>
                      <small className="text-muted">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                ))}
              </div>

              {/* ========== కొత్త పేజినేషన్ బటన్స్ ========== */}
              {totalCount > REVIEWS_PER_PAGE && (
                <div className="d-flex justify-content-between mt-5">
                  <button 
                    className="btn btn-outline-primary rounded-pill"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={!hasPrevPage} // మొదటి పేజీలో ఉంటే డిసేబుల్ అవుతుంది
                  >
                    <ArrowLeft size={16} className="me-2" />
                    Previous
                  </button>
                  <span className="align-self-center text-muted">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button 
                    className="btn btn-outline-primary rounded-pill"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={!hasNextPage} // చివరి పేజీలో ఉంటే డిసేబుల్ అవుతుంది
                  >
                    Next
                    <ArrowRight size={16} className="ms-2" />
                  </button>
                </div>
              )}
              {/* ========== పేజినేషన్ ముగిసింది ========== */}
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}