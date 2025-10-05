import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo" onClick={() => setIsMenuOpen(false)}>
          <span className="logo-icon">🌿</span>
          <h1>Hutan Buku</h1>
        </Link>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            🏠 Beranda
          </Link>
          <Link to="/books" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            📚 Katalog Buku
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            ℹ️ Tentang
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            📞 Kontak
          </Link>
          
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  ⚙️ Dashboard Admin
                </Link>
              )}
              <button onClick={handleLogout} className="nav-button logout-btn">
                🚪 Logout ({user.name})
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link login-btn" onClick={() => setIsMenuOpen(false)}>
                🔐 Login Admin
              </Link>
              <Link to="/user-login" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                👤 Login User
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;