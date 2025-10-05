import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulasi login admin
    if (formData.email === 'admin@hutanbuku.com' && formData.password === 'admin123') {
      setTimeout(() => {
        login({ name: 'Administrator', role: 'admin' });
        navigate('/admin');
        setLoading(false);
      }, 1500);
    } else {
      setError('Email atau password admin salah');
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        {/* Background Decoration */}
        <div className="login-decoration">
          <div className="floating-tree">🌳</div>
          <div className="floating-leaf">🍃</div>
          <div className="floating-book">📚</div>
        </div>

        <div className="admin-login-card">
          {/* Header */}
          <div className="admin-login-header">
            <div className="admin-logo">
              <div className="logo-icon">🌲</div>
              <div className="logo-text">
                <h1>Hutan Buku</h1>
                <span>Admin Portal</span>
              </div>
            </div>
            <p className="admin-subtitle">Masuk ke Dashboard Administrator</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="email">
                <span className="label-icon">📧</span>
                Email Administrator
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="admin@hutanbuku.com"
                className="admin-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <span className="label-icon">🔐</span>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Masukkan password admin"
                className="admin-input"
              />
            </div>

            {error && (
              <div className="admin-error-message">
                <span className="error-icon">⚠️</span>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="admin-login-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Memproses...
                </>
              ) : (
                <>
                  <span className="btn-icon">🚀</span>
                  Masuk ke Dashboard
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="demo-credentials">
            <div className="demo-header">
              <span className="demo-icon">💡</span>
              <h4>Demo Admin Credentials</h4>
            </div>
            <div className="demo-content">
              <div className="credential-item">
                <span>Email:</span>
                <code>admin@hutanbuku.com</code>
              </div>
              <div className="credential-item">
                <span>Password:</span>
                <code>admin123</code>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="admin-login-footer">
            <Link to="/login" className="back-link">
              ← Kembali ke Login User
            </Link>
            <Link to="/" className="home-link">
              🏠 Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;