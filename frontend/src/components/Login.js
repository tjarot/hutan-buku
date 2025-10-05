import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password, true);
    
    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--forest-medium) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg-white)',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '450px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, var(--forest-lightest), var(--forest-lighter))',
          borderRadius: '50%',
          opacity: '0.1'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, var(--forest-light), var(--forest-medium))',
          borderRadius: '50%',
          opacity: '0.1'
        }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              background: 'linear-gradient(45deg, var(--forest-medium), var(--forest-dark))',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '2rem'
            }}>
              🌿
            </div>
            <h1 style={{ 
              color: 'var(--text-dark)',
              marginBottom: '0.5rem',
              fontSize: '1.8rem'
            }}>
              Hutan Buku
            </h1>
            <p style={{ 
              color: 'var(--text-medium)',
              margin: 0,
              fontSize: '1.1rem'
            }}>
              Login Administrator
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 'bold',
                color: 'var(--text-dark)'
              }}>
                Email Administrator
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hutanbuku.com"
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s',
                  color: 'var(--text-dark)'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 'bold',
                color: 'var(--text-dark)'
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  color: 'var(--text-dark)'
                }}
              />
              <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                <a href="#" style={{
                  color: 'var(--forest-medium)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}>
                  Lupa password?
                </a>
              </div>
            </div>
            
            {error && (
              <div style={{
                background: '#ffeaa7',
                color: '#d63031',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                textAlign: 'center',
                border: '1px solid #fab1a0'
              }}>
                {error}
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={loading}
              style={{
                width: '100%',
                padding: '15px',
                background: loading ? '#bdc3c7' : 'linear-gradient(45deg, var(--forest-light), var(--forest-lighter))',
                color: 'var(--text-white)',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s'
              }}
            >
              {loading ? '🔄 Memproses...' : '🔐 Login Administrator'}
            </button>
          </form>

          <div style={{ 
            textAlign: 'center',
            padding: '20px',
            background: 'var(--bg-light)',
            borderRadius: '10px',
            marginTop: '2rem'
          }}>
            <p style={{ 
              margin: '0 0 1rem 0',
              color: 'var(--text-medium)',
              fontSize: '0.9rem'
            }}>
              <strong>Login Khusus Administrator</strong>
            </p>
            <div style={{ 
              background: 'var(--bg-white)',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid var(--border-light)'
            }}>
              <p style={{ 
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: 'var(--text-dark)'
              }}>
                Demo Credentials:
              </p>
              <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                <strong>Email:</strong> admin@hutanbuku.com
              </p>
              <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                <strong>Password:</strong> admin123
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: 'var(--text-medium)', margin: '0 0 1rem 0' }}>
              Bukan administrator?
            </p>
            <Link 
              to="/user-login" 
              style={{
                color: 'var(--forest-medium)',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              👤 Login sebagai User Biasa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;