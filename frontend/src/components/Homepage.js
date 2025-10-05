import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const featuredBooks = [
    {
      id: 1,
      judul: "Belajar React JS Modern",
      penulis: "Ahmad Developer",
      penerbit: "Penerbit Informatika",
      tahun_terbit: 2024,
      jumlah_halaman: 251,
      sinopsis: "Panduan lengkap belajar React JS dengan hooks dan modern practices. Cocok untuk pemula hingga mahir yang ingin menguasai React JS terkini dengan project nyata.",
      kategori: "Pemrograman",
      rating: 4.8,
      cover: "⚛️",
      warna: "#3498db"
    },
    {
      id: 2,
      judul: "Mastering Laravel 10",
      penulis: "Budi Programmer",
      penerbit: "Code Publishing",
      tahun_terbit: 2023,
      jumlah_halaman: 350,
      sinopsis: "Buku komprehensif untuk menguasai framework Laravel 10 dengan fitur-fitur terbaru, eloquent ORM, dan best practices development web modern.",
      kategori: "Pemrograman",
      rating: 4.7,
      cover: "🚀",
      warna: "#e74c3c"
    },
    {
      id: 3,
      judul: "UI/UX Design Principles",
      penulis: "Lisa Designer",
      penerbit: "Design Press",
      tahun_terbit: 2024,
      jumlah_halaman: 220,
      sinopsis: "Prinsip-prinsip desain UI/UX modern untuk menciptakan pengalaman pengguna yang menarik dan intuitif.",
      kategori: "Desain",
      rating: 4.9,
      cover: "🎨",
      warna: "#2ecc71"
    },
    {
      id: 4,
      judul: "Machine Learning Basics",
      penulis: "Dr. Alex AI",
      penerbit: "AI Publications",
      tahun_terbit: 2023,
      jumlah_halaman: 400,
      sinopsis: "Pengenalan machine learning untuk pemula dengan Python, TensorFlow, dan studi kasus nyata implementasi AI.",
      kategori: "Kecerdasan Buatan",
      rating: 4.7,
      cover: "🤖",
      warna: "#9b59b6"
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: 'var(--text-white)' }}>
            🌿 Selamat Datang di Hutan Buku
          </h1>
          <p className="hero-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Temukan buku-buku menarik dari koleksi kami yang terus bertambah. 
            Jelajahi pengetahuan dan kembangkan wawasan Anda.
          </p>
          <div className="hero-buttons">
            <Link to="/books" className="btn-primary">
              Jelajahi Katalog
            </Link>
            <Link to="/about" className="btn-secondary">
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section style={{
        padding: '80px 20px',
        background: 'var(--bg-white)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center',
            fontSize: '2.8rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            📚 Buku Terpopuler
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: 'var(--text-medium)', 
            marginBottom: '3rem',
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Temukan buku-buku menarik dari koleksi kami yang terus bertambah
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginBottom: '3rem'
          }}>
            {featuredBooks.map(book => (
              <div key={book.id} style={{
                background: 'var(--bg-white)',
                borderRadius: '20px',
                padding: '0',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border-light)',
                overflow: 'hidden'
              }}>
                {/* Book Header */}
                <div style={{
                  background: `linear-gradient(135deg, ${book.warna}15 0%, ${book.warna}30 100%)`,
                  padding: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: book.warna,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
                  }}>
                    {book.cover}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      margin: '0 0 8px 0',
                      color: 'var(--text-dark)',
                      fontSize: '1.3rem',
                      lineHeight: '1.3',
                      fontWeight: '600'
                    }}>
                      {book.judul}
                    </h3>
                    <p style={{ 
                      margin: 0,
                      color: 'var(--text-medium)',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      oleh <span style={{ color: 'var(--forest-medium)' }}>{book.penulis}</span>
                    </p>
                  </div>
                </div>
                
                {/* Book Info */}
                <div style={{ padding: '25px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    marginBottom: '15px'
                  }}>
                    <span style={{ color: '#f39c12', fontSize: '1.1rem' }}>
                      {'⭐'.repeat(Math.floor(book.rating))}
                    </span>
                    <span style={{ 
                      color: 'var(--text-medium)', 
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}>
                      {book.rating}/5
                    </span>
                  </div>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    marginBottom: '15px',
                    fontSize: '0.95rem'
                  }}>
                    <div>
                      <p style={{ 
                        margin: '0 0 5px 0',
                        fontSize: '0.85rem',
                        color: 'var(--text-medium)',
                        fontWeight: '500'
                      }}>
                        Penerbit
                      </p>
                      <p style={{ 
                        margin: 0,
                        color: 'var(--text-dark)',
                        fontWeight: '600'
                      }}>
                        {book.penerbit}
                      </p>
                    </div>
                    <div>
                      <p style={{ 
                        margin: '0 0 5px 0',
                        fontSize: '0.85rem',
                        color: 'var(--text-medium)',
                        fontWeight: '500'
                      }}>
                        Tahun
                      </p>
                      <p style={{ 
                        margin: 0,
                        color: 'var(--text-dark)',
                        fontWeight: '600'
                      }}>
                        {book.tahun_terbit}
                      </p>
                    </div>
                    <div>
                      <p style={{ 
                        margin: '0 0 5px 0',
                        fontSize: '0.85rem',
                        color: 'var(--text-medium)',
                        fontWeight: '500'
                      }}>
                        Halaman
                      </p>
                      <p style={{ 
                        margin: 0,
                        color: 'var(--text-dark)',
                        fontWeight: '600'
                      }}>
                        {book.jumlah_halaman} hal
                      </p>
                    </div>
                    <div>
                      <p style={{ 
                        margin: '0 0 5px 0',
                        fontSize: '0.85rem',
                        color: 'var(--text-medium)',
                        fontWeight: '500'
                      }}>
                        Kategori
                      </p>
                      <p style={{ 
                        margin: 0,
                        color: 'var(--text-dark)',
                        fontWeight: '600'
                      }}>
                        {book.kategori}
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ 
                      margin: '0 0 8px 0',
                      fontSize: '0.9rem',
                      color: 'var(--text-medium)',
                      fontWeight: '600'
                    }}>
                      Sinopsis
                    </p>
                    <p style={{ 
                      margin: 0,
                      fontSize: '0.95rem',
                      color: 'var(--text-medium)',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {book.sinopsis}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Link 
                      to={`/book/${book.id}`}
                      style={{
                        flex: 1,
                        background: 'var(--forest-light)',
                        color: 'var(--text-white)',
                        padding: '12px 20px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        transition: 'all 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      📖 Baca Detail
                    </Link>
                    <button
                      style={{
                        padding: '12px 15px',
                        background: 'transparent',
                        color: 'var(--forest-medium)',
                        border: '2px solid var(--forest-medium)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        transition: 'all 0.3s'
                      }}
                    >
                      💝
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link 
              to="/books" 
              style={{
                display: 'inline-block',
                padding: '15px 35px',
                background: 'var(--forest-light)',
                color: 'var(--text-white)',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
            >
              Lihat Semua Buku →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, var(--forest-light) 0%, var(--forest-medium) 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.8rem',
            color: 'var(--text-white)',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            🌟 Mengapa Memilih Kami?
          </h2>
          <p style={{ 
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Platform terbaik untuk menemukan dan membaca buku-buku berkualitas
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              { icon: '📚', number: '500+', text: 'Buku Berkualitas' },
              { icon: '📖', number: '50+', text: 'Kategori Beragam' },
              { icon: '👥', number: '10K+', text: 'Pembaca Aktif' },
              { icon: '⚡', number: '24/7', text: 'Akses Online' }
            ].map((feature, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '40px 30px',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: '2.5rem',
                  color: 'var(--text-white)',
                  margin: '0 0 1rem 0',
                  fontWeight: '700'
                }}>
                  {feature.number}
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0,
                  fontSize: '1.2rem',
                  fontWeight: '500'
                }}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        background: 'var(--bg-white)'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            color: 'var(--text-dark)',
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}>
            🚀 Mulai Petualangan Membaca Anda
          </h2>
          <p style={{ 
            fontSize: '1.3rem',
            color: 'var(--text-medium)',
            marginBottom: '2.5rem',
            lineHeight: '1.6'
          }}>
            Bergabunglah dengan ribuan pembaca yang telah menemukan pengetahuan baru 
            dan mengembangkan wawasan mereka melalui koleksi buku kami.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/books"
              style={{
                padding: '15px 35px',
                background: 'var(--forest-light)',
                color: 'var(--text-white)',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
            >
              Jelajahi Katalog
            </Link>
            <Link 
              to="/user-login"
              style={{
                padding: '15px 35px',
                background: 'transparent',
                color: 'var(--forest-medium)',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: '2px solid var(--forest-medium)',
                transition: 'all 0.3s'
              }}
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;