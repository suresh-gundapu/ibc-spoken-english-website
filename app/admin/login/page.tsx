'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lock, User } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Static Credentials Check
    if (username === 'admin' && password === 'Saibaba,. 1') {
      // Save session inside localStorage
      localStorage.setItem('isAdminLoggedIn', 'true');
      
      Swal.fire({
        icon: 'success',
        title: 'Welcome Admin!',
        text: 'Login Successful',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        router.push('/admin/dashboard');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'Invalid Username or Password',
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '80vh', marginTop: '70px' }}>
        <div className="card shadow-lg p-4 border-0 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="text-center mb-4">
            <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
              <Lock size={30} />
            </div>
            <h3 className="fw-bold">Admin Login</h3>
            <p className="text-muted small">Only authorized personnel allowed</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-bold">Username</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><User size={18}/></span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="form-label fw-bold">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><Lock size={18}/></span>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold py-2 shadow-sm">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}