import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('sinopsis');
  const [relatedBooks, setRelatedBooks] = useState([]);

  const sampleBooks = [
    {
      id: 1,
      judul: "Belajar React JS Modern",
      penulis: "Ahmad Developer",
      penerbit: "Penerbit Informatika",
      tahun_terbit: 2024,
      jumlah_halaman: 251,
      isbn: "9781234567891",
      sinopsis: "Panduan lengkap belajar React JS dengan hooks dan modern practices. Buku ini cocok untuk pemula hingga mahir yang ingin menguasai React JS terkini dengan project nyata. Dibahas secara mendalam konsep-konsep fundamental seperti components, state management dengan hooks, context API, dan routing dengan React Router.\n\nBuku ini juga mencakup best practices dalam pengembangan aplikasi React modern, testing dengan Jest, deployment, dan optimasi performa. Setiap bab dilengkapi dengan contoh kode yang dapat dijalankan dan studi kasus nyata.",
      kategori: "Pemrograman",
      subkategori: "Frontend Development",
      rating: 4.8,
      total_rating: 124,
      stok: 15,
      cover: "📚",
      warna: "#3498db",
      bahasa: "Indonesia",
      berat: 500,
      dimensi: "15x23 cm",
      halaman_berwarna: true,
      fitur: ["Full Color", "Source Code", "Video Tutorial", "Project Based"],
      bab: [
        { judul: "Pengenalan React JS", halaman: 1 },
        { judul: "Components dan Props", halaman: 25 },
        { judul: "State dan Lifecycle", halaman: 50 },
        { judul: "Hooks Modern", halaman: 85 },
        { judul: "Routing dengan React Router", halaman: 120 },
        { judul: "State Management", halaman: 155 },
        { judul: "Testing dan Deployment", halaman: 200 }
      ]
    },
    {
      id: 2,
      judul: "Mastering Laravel 10",
      penulis: "Budi Programmer",
      penerbit: "Code Publishing",
      tahun_terbit: 2023,
      jumlah_halaman: 350,
      isbn: "9781234567892",
      sinopsis: "Buku komprehensif untuk menguasai framework Laravel 10 dengan fitur-fitur terbaru, eloquent ORM, dan best practices development web modern.",
      kategori: "Pemrograman",
      subkategori: "Backend Development",
      rating: 4.7,
      total_rating: 89,
      stok: 8,
      cover: "🚀",
      warna: "#e74c3c"
    },
    {
      id: 3,
      judul: "JavaScript Modern ES6+",
      penulis: "Siti Web Developer",
      penerbit: "Tech Books",
      tahun_terbit: 2023,
      jumlah_halaman: 300,
      isbn: "9781234567893",
      sinopsis: "Belajar JavaScript modern dengan ES6+ dan konsep pemrograman terbaru untuk pengembangan web yang efisien dan scalable.",
      kategori: "Pemrograman",
      subkategori: "Web Development",
      rating: 4.6,
      total_rating: 67,
      stok: 12,
      cover: "⚡",
      warna: "#f39c12"
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      const foundBook = sampleBooks.find(b => b.id === parseInt(id));
      setBook(foundBook);
      
      const related = sampleBooks.filter(b => b.id !== parseInt(id) && b.kategori === foundBook?.kategori);
      setRelatedBooks(related);
      setLoading(false);
    }, 800);
  }, [id]);

  const getRatingStars = (rating) => {
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const halfStar = rating % 1 >= 0.5 ? '⭐' : '';
    const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
    return fullStars + halfStar + emptyStars;
  };

  const getStokInfo = (stok) => {
    if (stok > 10) return { status: "Tersedia", color: "#27ae60", bgColor: "#d5f4e6" };
    if (stok > 5) return { status: "Terbatas", color: "#f39c12", bgColor: "#fef5e7" };
    if (stok > 0) return { status: "Hampir Habis", color: "#e74c3c", bgColor: "#fdedec" };
    return { status: "Kosong", color: "#95a5a6", bgColor: "#ecf0f1" };
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '4rem', 
            marginBottom: '1rem',
            animation: 'pulse 1.5s infinite'
          }}>
            📚
          </div>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Memuat Detail Buku...
          </h3>
          <p style={{ color: 'var(--text-medium)' }}>Sedang mengambil informasi buku</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>😕</div>
          <h2 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Buku Tidak Ditemukan
          </h2>
          <p style={{ color: 'var(--text-medium)', marginBottom: '2rem' }}>
            Maaf, buku yang Anda cari tidak tersedia.
          </p>
          <Link 
            to="/books" 
            style={{
              padding: '12px 30px',
              background: 'var(--forest-light)',
              color: 'var(--text-white)',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: '600',
              display: 'inline-block'
            }}
          >
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  const stokInfo = getStokInfo(book.stok);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%)',
      padding: '20px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Breadcrumb */}
        <nav style={{ 
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.9rem'
        }}>
          <Link 
            to="/" 
            style={{ 
              color: 'var(--forest-medium)', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            🏠 Beranda
          </Link>
          <span style={{ color: 'var(--text-medium)' }}>›</span>
          <Link 
            to="/books" 
            style={{ 
              color: 'var(--forest-medium)', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            📚 Katalog Buku
          </Link>
          <span style={{ color: 'var(--text-medium)' }}>›</span>
          <span style={{ color: 'var(--text-dark)' }}>{book.judul}</span>
        </nav>

        {/* Main Book Detail */}
        <div style={{
          background: 'var(--bg-white)',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(27, 67, 50, 0.1)',
          overflow: 'hidden',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '0'
          }}>
            
            {/* Book Cover Section */}
            <div style={{
              background: `linear-gradient(135deg, ${book.warna}20 0%, ${book.warna}40 100%)`,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: '1px solid var(--border-light)'
            }}>
              <div style={{
                width: '200px',
                height: '280px',
                background: book.warna,
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: 'var(--text-white)',
                fontWeight: 'bold',
                marginBottom: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}>
                {book.cover}
              </div>
              
              {/* Quick Actions */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
                <button style={{
                  padding: '10px 20px',
                  background: 'var(--bg-white)',
                  color: 'var(--text-dark)',
                  border: '2px solid var(--forest-light)',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.3s'
                }}>
                  💝 Favorite
                </button>
                <button style={{
                  padding: '10px 20px',
                  background: 'var(--bg-white)',
                  color: 'var(--text-dark)',
                  border: '2px solid var(--forest-light)',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.3s'
                }}>
                  📤 Share
                </button>
              </div>

              {/* Stock Status */}
              <div style={{
                background: stokInfo.bgColor,
                color: stokInfo.color,
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: stokInfo.color,
                  borderRadius: '50%'
                }}></div>
                {stokInfo.status} • {book.stok} buku tersedia
              </div>
            </div>

            {/* Book Info Section */}
            <div style={{ padding: '40px' }}>
              {/* Header */}
              <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ 
                  fontSize: '2.2rem',
                  color: 'var(--text-dark)',
                  margin: '0 0 1rem 0',
                  lineHeight: '1.2',
                  fontWeight: '700'
                }}>
                  {book.judul}
                </h1>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                  <span style={{ 
                    color: 'var(--text-medium)',
                    fontSize: '1.1rem',
                    fontWeight: '500'
                  }}>
                    oleh <strong style={{ color: 'var(--forest-medium)' }}>{book.penulis}</strong>
                  </span>
                  <div style={{ 
                    background: 'var(--bg-light)',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    color: 'var(--forest-medium)',
                    fontWeight: '600'
                  }}>
                    {book.kategori}
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2rem', color: '#f39c12' }}>
                    {getRatingStars(book.rating)}
                  </span>
                  <span style={{ 
                    color: 'var(--text-medium)',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {book.rating} • {book.total_rating} ulasan
                  </span>
                </div>
              </div>

              {/* Book Status Info */}
              <div style={{
                background: 'var(--bg-light)',
                padding: '20px',
                borderRadius: '15px',
                marginBottom: '2rem',
                border: '1px solid var(--border-light)'
              }}>
                <h3 style={{ 
                  color: 'var(--text-dark)',
                  marginBottom: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  📋 Status Buku
                </h3>
                <p style={{ 
                  color: 'var(--text-medium)',
                  margin: 0,
                  fontSize: '0.95rem'
                }}>
                  Buku ini tersedia dalam koleksi perpustakaan kami. Kunjungi perpustakaan untuk meminjam atau membaca di tempat.
                </p>
              </div>

              {/* Book Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    background: '#e8f5e8',
                    padding: '10px',
                    borderRadius: '10px',
                    color: 'var(--forest-medium)'
                  }}>
                    📖
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '500' }}>Halaman</div>
                    <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                      {book.jumlah_halaman} halaman
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    background: '#e8f5e8',
                    padding: '10px',
                    borderRadius: '10px',
                    color: 'var(--forest-medium)'
                  }}>
                    🏷️
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '500' }}>ISBN</div>
                    <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                      {book.isbn}
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    background: '#e8f5e8',
                    padding: '10px',
                    borderRadius: '10px',
                    color: 'var(--forest-medium)'
                  }}>
                    🏢
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '500' }}>Penerbit</div>
                    <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                      {book.penerbit}
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    background: '#e8f5e8',
                    padding: '10px',
                    borderRadius: '10px',
                    color: 'var(--forest-medium)'
                  }}>
                    📅
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '500' }}>Tahun Terbit</div>
                    <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                      {book.tahun_terbit}
                    </div>
                  </div>
                </div>

                {book.bahasa && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      background: '#e8f5e8',
                      padding: '10px',
                      borderRadius: '10px',
                      color: 'var(--forest-medium)'
                    }}>
                      🗣️
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '500' }}>Bahasa</div>
                      <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                        {book.bahasa}
                      </div>
                    </div>
                  </div>
                )}

                {book.dimensi && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      background: '#e8f5e8',
                      padding: '10px',
                      borderRadius: '10px',
                      color: 'var(--forest-medium)'
                    }}>
                      📐
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '500' }}>Dimensi</div>
                      <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                        {book.dimensi}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs Navigation */}
              <div style={{
                display: 'flex',
                borderBottom: '2px solid var(--border-light)',
                marginBottom: '2rem'
              }}>
                {['sinopsis', 'detail', 'ulasan', 'preview'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '15px 25px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: activeTab === tab ? 'var(--forest-medium)' : 'var(--text-medium)',
                      borderBottom: activeTab === tab ? '3px solid var(--forest-medium)' : '3px solid transparent',
                      transition: 'all 0.3s'
                    }}
                  >
                    {tab === 'sinopsis' && '📝 Sinopsis'}
                    {tab === 'detail' && '📋 Detail'}
                    {tab === 'ulasan' && '⭐ Ulasan'}
                    {tab === 'preview' && '👀 Preview'}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div style={{ minHeight: '200px' }}>
                {activeTab === 'sinopsis' && (
                  <div>
                    <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '600' }}>
                      Tentang Buku Ini
                    </h3>
                    <div style={{ 
                      lineHeight: '1.8',
                      color: 'var(--text-medium)',
                      whiteSpace: 'pre-line',
                      fontSize: '1rem'
                    }}>
                      {book.sinopsis}
                    </div>
                    
                    {book.bab && (
                      <div style={{ marginTop: '2rem' }}>
                        <h4 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '600' }}>
                          📑 Daftar Isi
                        </h4>
                        <div style={{
                          background: 'var(--bg-light)',
                          padding: '20px',
                          borderRadius: '10px',
                          border: '1px solid var(--border-light)'
                        }}>
                          {book.bab.map((bab, index) => (
                            <div key={index} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '10px 0',
                              borderBottom: index < book.bab.length - 1 ? '1px solid var(--border-light)' : 'none'
                            }}>
                              <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>
                                {index + 1}. {bab.judul}
                              </span>
                              <span style={{ color: 'var(--text-medium)', fontSize: '0.9rem', fontWeight: '500' }}>
                                Hal. {bab.halaman}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'detail' && (
                  <div>
                    <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '600' }}>
                      📋 Informasi Detail
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '20px'
                    }}>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>Judul</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.judul}</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>Penulis</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.penulis}</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>Penerbit</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.penerbit}</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>Kategori</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.kategori}</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>ISBN</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.isbn}</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>Bahasa</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.bahasa || 'Indonesia'}</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>Halaman</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.jumlah_halaman} halaman</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-dark)' }}>Tahun Terbit</strong>
                        <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.tahun_terbit}</p>
                      </div>
                      {book.dimensi && (
                        <div>
                          <strong style={{ color: 'var(--text-dark)' }}>Dimensi</strong>
                          <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.dimensi}</p>
                        </div>
                      )}
                      {book.berat && (
                        <div>
                          <strong style={{ color: 'var(--text-dark)' }}>Berat</strong>
                          <p style={{ margin: '5px 0', color: 'var(--text-medium)', fontWeight: '500' }}>{book.berat} gram</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'ulasan' && (
                  <div>
                    <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '600' }}>
                      💬 Ulasan Pembaca
                    </h3>
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                      <p style={{ color: 'var(--text-medium)', fontWeight: '500' }}>
                        Belum ada ulasan untuk buku ini. Jadilah yang pertama memberikan ulasan!
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'preview' && (
                  <div>
                    <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '600' }}>
                      👀 Preview Buku
                    </h3>
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                      <p style={{ color: 'var(--text-medium)', fontWeight: '500' }}>
                        Preview buku akan segera tersedia. Kunjungi perpustakaan untuk melihat buku fisik.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              color: 'var(--text-dark)',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              📚 Buku Terkait Lainnya
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {relatedBooks.map(relatedBook => (
                <div 
                  key={relatedBook.id}
                  style={{
                    background: 'var(--bg-white)',
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    border: '1px solid var(--border-light)'
                  }}
                  onClick={() => navigate(`/book/${relatedBook.id}`)}
                >
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '60px',
                      height: '80px',
                      background: relatedBook.warna,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'var(--text-white)',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      {relatedBook.cover}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: '0 0 5px 0',
                        color: 'var(--text-dark)',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        {relatedBook.judul}
                      </h4>
                      <p style={{ 
                        margin: '0 0 8px 0',
                        color: 'var(--text-medium)',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {relatedBook.penulis}
                      </p>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '5px',
                        fontSize: '0.8rem'
                      }}>
                        <span style={{ color: '#f39c12' }}>
                          {getRatingStars(relatedBook.rating)}
                        </span>
                        <span style={{ color: 'var(--text-medium)', fontWeight: '500' }}>
                          {relatedBook.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetail;