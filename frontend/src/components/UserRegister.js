import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      setLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      setError('Anda harus menyetujui syarat dan ketentuan');
      setLoading(false);
      return;
    }

    // Simulasi registrasi berhasil
    setTimeout(() => {
      alert('Registrasi berhasil! Selamat bergabung di Hutan Buku.');
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="page-container">
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <div className="auth-icon">🌱</div>
              <h1>Bergabung dengan Hutan Buku</h1>
              <p>Mulai perjalanan literasi Anda bersama kami</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {error && (
                <div className="error-message">
                  🐾 {error}
                </div>
              )}

              <div className="form-group">
                <label>👤 Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div className="form-group">
                <label>📧 Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@anda.com"
                />
              </div>

              <div className="form-group">
                <label>🔒 Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Minimal 8 karakter"
                />
              </div>

              <div className="form-group">
                <label>🔒 Konfirmasi Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Ketik ulang password"
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  Saya menyetujui{' '}
                  <Link to="/terms" className="inline-link">
                    Syarat & Ketentuan
                  </Link>{' '}
                  dan{' '}
                  <Link to="/privacy" className="inline-link">
                    Kebijakan Privasi
                  </Link>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="auth-button"
              >
                {loading ? '🦉 Mendaftarkan...' : '🌳 Daftar Sekarang'}
              </button>
            </form>

            <div className="auth-divider">
              <span>atau</span>
            </div>

            <div className="auth-footer">
              <p>
                Sudah punya akun?{' '}
                <Link to="/login" className="auth-link">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
