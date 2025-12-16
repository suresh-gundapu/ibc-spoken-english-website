'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  LogOut, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Search, 
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// టైప్స్ నిర్వచనం
interface Transaction {
  razorpay_payment_id?: string; // Optional గా మార్చాం (Safe)
  amount: number;
  product_id: number;
  status: string;
  date?: string;
  email?: string;
  contact?: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination & Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 1. సెక్యూరిటీ చెక్
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/admin/login');
    } else {
      fetchTransactions();
    }
  }, []);

  // 2. డేటా తెచ్చుకోవడం
  const fetchTransactions = async () => {
    try {
      const res = await fetch('/api/admin/transactions');
      const data = await res.json();
      // రివర్స్ చేస్తే లేటెస్ట్ పైన వస్తాయి
      setTransactions(Array.isArray(data) ? data.reverse() : []); 
    } catch (error) {
      console.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/admin/login');
  };

  // --- CALCULATION LOGIC ---
  const totalRevenue = transactions.reduce((acc, curr) => acc + (curr.amount ? curr.amount / 100 : 0), 0);
  const totalOrders = transactions.length;

  // --- FILTER & PAGINATION LOGIC (FIXED ERROR HERE) ---
  const filteredData = transactions.filter(t => {
    const searchLower = searchTerm.toLowerCase();
    
    // Safety Checks added using ?. and ||
    const paymentIdMatch = t.razorpay_payment_id?.toLowerCase().includes(searchLower);
    const contactMatch = t.contact?.toLowerCase().includes(searchLower);
    const emailMatch = t.email?.toLowerCase().includes(searchLower);

    return paymentIdMatch || contactMatch || emailMatch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar />
      
      <div className="bg-light min-vh-100 pb-5" style={{ marginTop: '70px' }}>
        {/* === HEADER === */}
        <div className="bg-white shadow-sm py-3 mb-4">
          <div className="container d-flex justify-content-between align-items-center">
            <h4 className="fw-bold text-primary mb-0">Admin Dashboard</h4>
            <button onClick={handleLogout} className="btn btn-outline-danger btn-sm rounded-pill d-flex align-items-center">
              <LogOut size={16} className="me-1"/> Logout
            </button>
          </div>
        </div>

        <div className="container">
          
          {/* === STATS CARDS === */}
          <div className="row g-4 mb-4">
            {/* Total Revenue */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 bg-primary text-white h-100">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-1 opacity-75">Total Revenue</p>
                    <h2 className="fw-bold mb-0">₹{totalRevenue.toLocaleString()}</h2>
                  </div>
                  <div className="bg-white bg-opacity-25 p-3 rounded-circle">
                    <TrendingUp size={32} />
                  </div>
                </div>
              </div>
            </div>

            {/* Total Orders */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 bg-success text-white h-100">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-1 opacity-75">Total Orders Sold</p>
                    <h2 className="fw-bold mb-0">{totalOrders}</h2>
                  </div>
                  <div className="bg-white bg-opacity-25 p-3 rounded-circle">
                    <ShoppingCart size={32} />
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Registration Link */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 bg-warning text-dark h-100">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <h6 className="fw-bold mb-2 d-flex align-items-center">
                    <Users size={20} className="me-2"/> Demo Registrations
                  </h6>
                  <p className="small mb-3">View list of students registered for demo.</p>
                  <a 
                    href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit" // 👈 నీ గూగుల్ షీట్ లింక్ ఇక్కడ పెట్టు
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-dark btn-sm rounded-pill w-100 d-flex align-items-center justify-content-center"
                  >
                    Open Google Sheet <ExternalLink size={14} className="ms-2"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* === TRANSACTIONS TABLE === */}
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="card-header bg-white py-3 border-0 d-flex flex-wrap justify-content-between align-items-center gap-3">
              <h5 className="fw-bold mb-0">Recent Transactions</h5>
              
              {/* Search Bar */}
              <div className="input-group" style={{ maxWidth: '300px' }}>
                <span className="input-group-text bg-light border-end-0"><Search size={18} className="text-muted"/></span>
                <input 
                  type="text" 
                  className="form-control border-start-0 bg-light" 
                  placeholder="Search ID, Email, Phone..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="py-3 ps-4">Payment ID</th>
                    <th className="py-3">Product ID</th>
                    <th className="py-3">Details (Ph/Email)</th>
                    <th className="py-3">Amount</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="text-center py-5 text-muted">Loading data...</td>
                    </tr>
                  ) : paginatedData.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-5 text-muted">No transactions found.</td>
                    </tr>
                  ) : (
                    paginatedData.map((t, index) => (
                      <tr key={index}>
                        <td className="ps-4 fw-bold text-primary small">
                          {t.razorpay_payment_id || 'N/A'}
                        </td>
                        <td>
                          <span className="badge bg-light text-dark border">ID: {t.product_id}</span>
                        </td>
                        <td>
                           <div className="small text-muted">{t.contact || '-'}</div>
                           <div className="small text-muted">{t.email || '-'}</div>
                        </td>
                        <td className="fw-bold text-success">
                          ₹{t.amount ? t.amount / 100 : 0}
                        </td>
                        <td>
                          <span className="badge bg-success bg-opacity-10 text-success px-3 rounded-pill">
                            Success
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* === PAGINATION === */}
            <div className="card-footer bg-white py-3 d-flex justify-content-between align-items-center">
              <small className="text-muted">
                Showing {paginatedData.length} of {filteredData.length} entries
              </small>
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                >
                  <ChevronLeft size={16}/>
                </button>
                <button 
                  className="btn btn-outline-primary btn-sm active"
                >
                  {currentPage}
                </button>
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                >
                  <ChevronRight size={16}/>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}