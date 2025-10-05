import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Login user berhasil!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Password tidak cocok!');
        return;
      }
      alert('Registrasi berhasil! Silakan login.');
      setIsLogin(true);
    }
  };

  return (
    <div style={{ 
      minHeight: '80vh',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'var(--bg-white)',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 15px 35px rgba(27, 67, 50, 0.1)',
        width: '100%',
        maxWidth: '450px'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: 'var(--text-dark)',
          marginBottom: '0.5rem'
        }}>
          {isLogin ? '👤 Login User' : '📝 Daftar User'}
        </h1>
        
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-medium)',
          marginBottom: '2rem'
        }}>
          {isLogin ? 'Masuk ke akun Anda' : 'Buat akun baru'}
        </p>

        {/* Toggle Login/Register */}
        <div style={{
          display: 'flex',
          background: 'var(--bg-light)',
          borderRadius: '25px',
          padding: '5px',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => setIsLogin(true)}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              background: isLogin ? 'var(--forest-medium)' : 'transparent',
              color: isLogin ? 'white' : 'var(--text-dark)',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              background: !isLogin ? 'var(--forest-medium)' : 'transparent',
              color: !isLogin ? 'white' : 'var(--text-dark)',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Daftar
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: 'var(--text-dark)'
                }}
              />
            </div>
          )}
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                fontSize: '1rem',
                color: 'var(--text-dark)'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                fontSize: '1rem',
                color: 'var(--text-dark)'
              }}
            />
          </div>
          
          {!isLogin && (
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: 'var(--text-dark)'
                }}
              />
            </div>
          )}
          
          <button type="submit" style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(45deg, var(--forest-light), var(--forest-lighter))',
            color: 'var(--text-white)',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '1.5rem',
            transition: 'transform 0.3s'
          }}>
            {isLogin ? 'Login' : 'Daftar'}
          </button>
        </form>

        <div style={{ textAlign: 'center' }}>
          <Link 
            to="/login" 
            style={{
              color: 'var(--forest-medium)',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            🔐 Login sebagai Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;