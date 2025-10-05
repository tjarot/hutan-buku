import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      setError('Nama lengkap harus diisi');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email harus diisi');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Format email tidak valid');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (formData.password.length < 8) {
      setError('Password minimal 8 karakter');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      return false;
    }
    if (!formData.agreeTerms) {
      setError('Anda harus menyetujui syarat dan ketentuan');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    setError('');
    if (validateStep1()) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateStep2()) return;

    setLoading(true);

    // Simulasi registrasi
    setTimeout(() => {
      alert('Registrasi berhasil! Selamat bergabung di Hutan Buku.');
      navigate('/login');
      setLoading(false);
    }, 2000);
  };

  const benefits = [
    { icon: '📚', text: 'Akses ke ribuan buku digital' },
    { icon: '🔖', text: 'Simpan buku favorit' },
    { icon: '📱', text: 'Baca di mana saja' },
    { icon: '🌱', text: 'Dukung gerakan ramah lingkungan' }
  ];

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          {/* Progress Bar */}
          <div className="progress-bar">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Informasi Dasar</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Keamanan</span>
            </div>
          </div>

          {/* Header */}
          <div className="register-header">
            <div className="register-logo">
              <div className="logo-icon">🌲</div>
              <h1>Bergabung dengan Hutan Buku</h1>
            </div>
            <p className="register-subtitle">
              Mulai perjalanan membaca Anda dalam ekosistem literasi digital
            </p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Informasi Dasar</h2>
                  <p>Isi data diri Anda untuk memulai</p>
                </div>

                <div className="form-group">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span>
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-icon">📧</span>
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="contoh@email.com"
                  />
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary btn-full"
                  onClick={nextStep}
                >
                  Lanjutkan
                  <span className="btn-icon">→</span>
                </button>
              </div>
            )}

            {/* Step 2: Security */}
            {step === 2 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Keamanan Akun</h2>
                  <p>Buat password yang kuat untuk melindungi akun Anda</p>
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <span className="label-icon">🔒</span>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Minimal 8 karakter"
                    minLength="8"
                  />
                  <div className="password-strength">
                    <div className={`strength-bar ${formData.password.length >= 8 ? 'strong' : formData.password.length >= 4 ? 'medium' : 'weak'}`}></div>
                    <span className="strength-text">
                      {formData.password.length >= 8 ? 'Kuat' : formData.password.length >= 4 ? 'Sedang' : 'Lemah'}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <span className="label-icon">✅</span>
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Ketik ulang password Anda"
                  />
                  {formData.confirmPassword && (
                    <div className={`password-match ${formData.password === formData.confirmPassword ? 'match' : 'no-match'}`}>
                      {formData.password === formData.confirmPassword ? '✓ Password cocok' : '✗ Password tidak cocok'}
                    </div>
                  )}
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                    />
                    <span className="checkmark"></span>
                    Saya menyetujui <a href="/terms" className="terms-link">Syarat & Ketentuan</a> dan <a href="/privacy" className="terms-link">Kebijakan Privasi</a>
                  </label>
                </div>

                {error && (
                  <div className="error-message">
                    <span className="error-icon">⚠️</span>
                    {error}
                  </div>
                )}

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={prevStep}
                  >
                    ← Kembali
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading-spinner"></span>
                        Membuat Akun...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">🌱</span>
                        Buat Akun
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Benefits Section */}
          <div className="benefits-section">
            <h3>Keuntungan Bergabung</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="register-footer">
            <p>
              Sudah punya akun? <Link to="/login" className="auth-link">Login di sini</Link>
            </p>
            <div className="admin-access">
              <Link to="/admin-login" className="admin-link">
                🔐 Akses Administrator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;