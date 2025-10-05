import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{
      background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--forest-medium) 100%)',
      color: 'var(--text-white)',
      marginTop: 'auto',
      borderTop: '3px solid var(--earth-brown)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(116, 198, 157, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(82, 183, 136, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(64, 145, 108, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>

      <div className="footer-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Main Footer Content */}
        <div className="footer-content" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '50px',
          padding: '60px 0 40px'
        }}>
          
          {/* Company Info */}
          <div className="footer-section">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, var(--forest-lightest), var(--forest-lighter))',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                🌿
              </div>
              <h3 style={{
                color: 'var(--text-white)',
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: 0,
                background: 'linear-gradient(45deg, var(--forest-lightest), white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Hutan Buku
              </h3>
            </div>
            
            <p style={{
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '25px',
              fontSize: '1rem',
              maxWidth: '300px'
            }}>
              Platform digital untuk menemukan dan menjelajahi dunia literasi. 
              Temukan pengetahuan tak terbatas dalam genggaman Anda.
            </p>
            
            {/* Social Links */}
            <div className="social-links" style={{
              display: 'flex',
              gap: '12px'
            }}>
              {[
                { icon: '📘', name: 'Facebook', url: '#' },
                { icon: '🐦', name: 'Twitter', url: '#' },
                { icon: '📷', name: 'Instagram', url: '#' },
                { icon: '💼', name: 'LinkedIn', url: '#' },
                { icon: '🎬', name: 'YouTube', url: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--forest-lightest)';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(116, 198, 157, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 style={{
              color: 'var(--forest-lightest)',
              marginBottom: '25px',
              fontSize: '1.2rem',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Navigasi
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '3px',
                background: 'var(--forest-lightest)',
                borderRadius: '2px'
              }}></div>
            </h3>
            
            <ul className="footer-links" style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { name: '🏠 Beranda', path: '/' },
                { name: '📚 Katalog Buku', path: '/books' },
                { name: '⭐ Buku Populer', path: '/books?sort=popular' },
                { name: '🆕 Buku Terbaru', path: '/books?sort=terbaru' },
                { name: '📋 Kategori', path: '/books?category=all' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link 
                    to={link.path}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.95rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--forest-lightest)';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 style={{
              color: 'var(--forest-lightest)',
              marginBottom: '25px',
              fontSize: '1.2rem',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Bantuan
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '3px',
                background: 'var(--forest-lightest)',
                borderRadius: '2px'
              }}></div>
            </h3>
            
            <ul className="footer-links" style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { name: 'ℹ️ Tentang Kami', path: '/about' },
                { name: '📞 Hubungi Kami', path: '/contact' },
                { name: '❓ Bantuan', path: '/help' },
                { name: '📝 Blog', path: '/blog' },
                { name: '🎯 Karir', path: '/careers' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link 
                    to={link.path}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.95rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--forest-lightest)';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 style={{
              color: 'var(--forest-lightest)',
              marginBottom: '25px',
              fontSize: '1.2rem',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Kontak Kami
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '3px',
                background: 'var(--forest-lightest)',
                borderRadius: '2px'
              }}></div>
            </h3>
            
            <ul className="footer-contact" style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <li style={{
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '0.95rem'
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>📧</span>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-white)' }}>Email</div>
                  <div>info@hutanbuku.com</div>
                </div>
              </li>
              <li style={{
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '0.95rem'
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>📞</span>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-white)' }}>Telepon</div>
                  <div>+62 21 1234 5678</div>
                </div>
              </li>
              <li style={{
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '0.95rem'
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>📍</span>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-white)' }}>Alamat</div>
                  <div>Jl. Hutan Buku No. 123<br />Kota Hijau, Indonesia 12345</div>
                </div>
              </li>
              <li style={{
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '0.95rem'
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>🕒</span>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-white)' }}>Jam Operasional</div>
                  <div>Senin - Jumat: 08:00 - 17:00<br />Sabtu: 09:00 - 15:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '25px 0'
        }}>
          <div className="footer-bottom-content" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.9rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <p style={{ margin: 0 }}>
                &copy; {currentYear} <strong style={{ color: 'var(--text-white)' }}>Hutan Buku</strong>. All rights reserved.
              </p>
            </div>
            
            <div className="footer-legal" style={{
              display: 'flex',
              gap: '25px',
              alignItems: 'center'
            }}>
              {[
                { name: 'Kebijakan Privasi', path: '/privacy' },
                { name: 'Syarat & Ketentuan', path: '/terms' },
                { name: 'Peta Situs', path: '/sitemap' },
                { name: 'Cookie', path: '/cookies' }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--forest-lightest)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          padding: '20px 0 0 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '0.8rem'
        }}>
          <p style={{ margin: 0 }}>
            Dibuat dengan ❤️ untuk para pecinta buku di Indonesia | 📚 500+ Buku Tersedia | 👥 5000+ Pembaca Aktif
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;