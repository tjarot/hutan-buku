import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan terkirim! Terima kasih telah menghubungi kami.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ 
      minHeight: '60vh',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto' 
      }}>
        <h1 style={{ 
          color: 'var(--forest-dark)',
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem'
        }}>
          📞 Hubungi Kami
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px'
        }}>
          {/* Contact Form */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(27, 67, 50, 0.1)'
          }}>
            <h2 style={{ color: 'var(--forest-medium)', marginBottom: '2rem' }}>
              Kirim Pesan
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
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
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
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
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Subjek
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button type="submit" style={{
                width: '100%',
                padding: '15px',
                background: 'linear-gradient(45deg, var(--forest-light), var(--forest-lighter))',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}>
                Kirim Pesan
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div style={{
            background: 'linear-gradient(135deg, var(--forest-medium) 0%, var(--forest-dark) 100%)',
            padding: '40px',
            borderRadius: '15px',
            color: 'white'
          }}>
            <h2 style={{ marginBottom: '2rem' }}>Informasi Kontak</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--forest-lightest)' }}>Alamat</h3>
              <p>Jl. Hutan Buku No. 123<br />Kota Hijau, Indonesia 12345</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--forest-lightest)' }}>Telepon</h3>
              <p>+62 21 1234 5678</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--forest-lightest)' }}>Email</h3>
              <p>info@hutanbuku.com</p>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--forest-lightest)' }}>Jam Operasional</h3>
              <p>Senin - Jumat: 08:00 - 17:00<br />Sabtu - Minggu: 09:00 - 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;