import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('terbaru');
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');

  const sampleBooks = [
    {
      id: 1,
      judul: "Belajar React JS Modern",
      penulis: "Ahmad Developer",
      penerbit: "Penerbit Informatika",
      tahun_terbit: 2024,
      jumlah_halaman: 251,
      isbn: "9781234567891",
      sinopsis: "Panduan lengkap belajar React JS dengan hooks dan modern practices. Cocok untuk pemula hingga mahir yang ingin menguasai React JS terkini dengan project nyata.",
      kategori: "Pemrograman",
      rating: 4.8,
      total_rating: 124,
      stok: 15,
      cover: "⚛️",
      warna: "#3498db",
      tags: ["React", "JavaScript", "Frontend", "Web Development"],
      featured: true
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
      rating: 4.7,
      total_rating: 89,
      stok: 8,
      cover: "🚀",
      warna: "#e74c3c",
      tags: ["Laravel", "PHP", "Backend", "Framework"],
      featured: true
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
      rating: 4.6,
      total_rating: 67,
      stok: 12,
      cover: "⚡",
      warna: "#f39c12",
      tags: ["JavaScript", "ES6", "Web Development"],
      featured: false
    },
    {
      id: 4,
      judul: "UI/UX Design Principles",
      penulis: "Lisa Designer",
      penerbit: "Design Press",
      tahun_terbit: 2024,
      jumlah_halaman: 220,
      isbn: "9781234567894",
      sinopsis: "Prinsip-prinsip desain UI/UX modern untuk menciptakan pengalaman pengguna yang menarik dan intuitif.",
      kategori: "Desain",
      rating: 4.9,
      total_rating: 156,
      stok: 18,
      cover: "🎨",
      warna: "#2ecc71",
      tags: ["UI/UX", "Design", "User Experience"],
      featured: true
    },
    {
      id: 5,
      judul: "Machine Learning Basics",
      penulis: "Dr. Alex AI",
      penerbit: "AI Publications",
      tahun_terbit: 2023,
      jumlah_halaman: 400,
      isbn: "9781234567895",
      sinopsis: "Pengenalan machine learning untuk pemula dengan Python, TensorFlow, dan studi kasus nyata implementasi AI.",
      kategori: "Kecerdasan Buatan",
      rating: 4.7,
      total_rating: 92,
      stok: 6,
      cover: "🤖",
      warna: "#9b59b6",
      tags: ["Machine Learning", "AI", "Python", "Data Science"],
      featured: false
    },
    {
      id: 6,
      judul: "Mobile App Development",
      penulis: "Mobile Dev Team",
      penerbit: "App Press",
      tahun_terbit: 2023,
      jumlah_halaman: 380,
      isbn: "9781234567896",
      sinopsis: "Pengembangan aplikasi mobile cross-platform dengan React Native dan Flutter untuk iOS dan Android.",
      kategori: "Mobile",
      rating: 4.6,
      total_rating: 78,
      stok: 11,
      cover: "📱",
      warna: "#e67e22",
      tags: ["Mobile", "React Native", "Flutter", "Cross-platform"],
      featured: false
    }
  ];

  const categories = ["Semua", "Pemrograman", "Desain", "Kecerdasan Buatan", "Mobile"];

  useEffect(() => {
    setTimeout(() => {
      setBooks(sampleBooks);
      setFilteredBooks(sampleBooks);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterAndSortBooks();
  }, [searchTerm, selectedCategory, sortBy, books]);

  const filterAndSortBooks = () => {
    let filtered = books.filter(book => {
      const matchesSearch = book.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.penulis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.penerbit.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Semua' || book.kategori === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'terbaru':
          return b.tahun_terbit - a.tahun_terbit;
        case 'terlama':
          return a.tahun_terbit - b.tahun_terbit;
        case 'rating':
          return b.rating - a.rating;
        case 'judul':
          return a.judul.localeCompare(b.judul);
        case 'popular':
          return b.total_rating - a.total_rating;
        default:
          return 0;
      }
    });

    setFilteredBooks(filtered);
  };

  const getRatingStars = (rating) => {
    return '⭐'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  const getStokBadge = (stok) => {
    if (stok > 10) return { text: 'Tersedia', color: '#27ae60', bgColor: '#d5f4e6' };
    if (stok > 5) return { text: 'Terbatas', color: '#f39c12', bgColor: '#fef5e7' };
    return { text: 'Habis', color: '#e74c3c', bgColor: '#fdedec' };
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem',
            animation: 'pulse 1.5s infinite'
          }}>
            🌿
          </div>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Memuat Katalog Buku...
          </h3>
          <p style={{ color: 'var(--text-medium)' }}>Sedang mengambil data buku terbaru</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%)',
      padding: '20px 0'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          padding: '40px 0'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, var(--forest-dark), var(--forest-medium))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '700'
          }}>
            📚 Katalog Buku
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'var(--text-medium)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            Jelajahi koleksi buku kami yang lengkap. Temukan pengetahuan baru dan kembangkan wawasan Anda dengan berbagai topik menarik.
          </p>
        </div>

        {/* Control Bar */}
        <div style={{
          background: 'var(--bg-white)',
          padding: '25px',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(27, 67, 50, 0.08)',
          marginBottom: '2rem',
          border: '1px solid var(--border-light)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr auto auto',
            gap: '15px',
            alignItems: 'center'
          }}>
            {/* Search Input */}
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                background: 'var(--bg-light)',
                borderRadius: '12px',
                padding: '5px',
                border: '2px solid var(--border-light)',
                transition: 'all 0.3s'
              }}>
                <span style={{ 
                  padding: '0 12px', 
                  color: 'var(--text-medium)',
                  fontSize: '1.1rem'
                }}>
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Cari judul, penulis, penerbit, atau tag..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '12px 5px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '1rem',
                    color: 'var(--text-dark)',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'var(--bg-white)',
                  cursor: 'pointer',
                  color: 'var(--text-dark)',
                  fontWeight: '500'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'Semua' ? '📂 Semua Kategori' : `📁 ${category}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'var(--bg-white)',
                  cursor: 'pointer',
                  color: 'var(--text-dark)',
                  fontWeight: '500'
                }}
              >
                <option value="terbaru">🆕 Terbaru</option>
                <option value="terlama">📅 Terlama</option>
                <option value="rating">⭐ Rating Tertinggi</option>
                <option value="popular">🔥 Populer</option>
                <option value="judul">🔤 A-Z Judul</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div style={{ display: 'flex', gap: '5px', background: 'var(--bg-light)', padding: '5px', borderRadius: '10px' }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '10px 15px',
                  background: viewMode === 'grid' ? 'var(--forest-medium)' : 'transparent',
                  color: viewMode === 'grid' ? 'white' : 'var(--text-medium)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s'
                }}
              >
                ⬜
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '10px 15px',
                  background: viewMode === 'list' ? 'var(--forest-medium)' : 'transparent',
                  color: viewMode === 'list' ? 'white' : 'var(--text-medium)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s'
                }}
              >
                ☰
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Semua');
                setSortBy('terbaru');
              }}
              style={{
                padding: '12px 20px',
                background: 'var(--forest-light)',
                color: 'var(--text-white)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s'
              }}
            >
              🔄 Reset
            </button>
          </div>

          {/* Results Info */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-light)'
          }}>
            <p style={{ 
              color: 'var(--text-medium)', 
              margin: 0,
              fontSize: '1rem',
              fontWeight: '500'
            }}>
              Menampilkan <strong style={{ color: 'var(--text-dark)' }}>{filteredBooks.length}</strong> dari <strong style={{ color: 'var(--text-dark)' }}>{books.length}</strong> buku
            </p>
            {searchTerm && (
              <p style={{ 
                color: 'var(--forest-medium)', 
                margin: 0,
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                Hasil pencarian: "<strong style={{ color: 'var(--forest-dark)' }}>{searchTerm}</strong>"
              </p>
            )}
          </div>
        </div>

        {/* Books Grid View */}
        {viewMode === 'grid' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '30px',
            marginBottom: '3rem'
          }}>
            {filteredBooks.map(book => {
              const stokInfo = getStokBadge(book.stok);
              return (
                <div 
                  key={book.id} 
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--border-light)',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                  }}
                >
                  {book.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                      color: 'white',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      zIndex: 2
                    }}>
                      🔥 Featured
                    </div>
                  )}

                  {/* Book Header */}
                  <div style={{
                    background: `linear-gradient(135deg, ${book.warna}15 0%, ${book.warna}30 100%)`,
                    padding: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${book.warna} 0%, ${book.warna}dd 100%)`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'white',
                      fontWeight: 'bold',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      flexShrink: 0
                    }}>
                      {book.cover}
                    </div>
                    <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
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
                        oleh <strong style={{ color: 'var(--forest-medium)' }}>{book.penulis}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div style={{ padding: '25px' }}>
                    {/* Rating and Meta */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      marginBottom: '15px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#f39c12', fontSize: '1rem' }}>
                          {getRatingStars(book.rating)}
                        </span>
                        <span style={{ 
                          color: 'var(--text-medium)', 
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}>
                          {book.rating}
                        </span>
                        <span style={{ 
                          color: 'var(--text-medium)', 
                          fontSize: '0.85rem'
                        }}>
                          ({book.total_rating})
                        </span>
                      </div>
                      <span style={{
                        background: stokInfo.bgColor,
                        color: stokInfo.color,
                        padding: '6px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {stokInfo.text}
                      </span>
                    </div>

                    {/* Synopsis */}
                    <div style={{ marginBottom: '20px' }}>
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

                    {/* Tags */}
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '8px',
                      marginBottom: '20px'
                    }}>
                      {book.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} style={{
                          background: 'var(--bg-light)',
                          color: 'var(--text-medium)',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Book Meta */}
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '20px',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-medium)' }}>
                        <span>🏢</span>
                        <span>{book.penerbit}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-medium)' }}>
                        <span>📅</span>
                        <span>{book.tahun_terbit}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-medium)' }}>
                        <span>📖</span>
                        <span>{book.jumlah_halaman} hal</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-medium)' }}>
                        <span>📁</span>
                        <span>{book.kategori}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ 
                      display: 'flex', 
                      gap: '12px'
                    }}>
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
                          transition: 'all 0.3s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        💝
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '3rem'
          }}>
            {filteredBooks.map(book => {
              const stokInfo = getStokBadge(book.stok);
              return (
                <div 
                  key={book.id}
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: '16px',
                    padding: '25px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    border: '1px solid var(--border-light)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(5px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                    {/* Book Cover */}
                    <div style={{
                      width: '80px',
                      height: '100px',
                      background: `linear-gradient(135deg, ${book.warna} 0%, ${book.warna}dd 100%)`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'white',
                      fontWeight: 'bold',
                      flexShrink: 0,
                      boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
                    }}>
                      {book.cover}
                    </div>

                    {/* Book Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <div>
                          <h3 style={{ 
                            margin: '0 0 8px 0',
                            color: 'var(--text-dark)',
                            fontSize: '1.4rem',
                            fontWeight: '600'
                          }}>
                            {book.judul}
                          </h3>
                          <p style={{ 
                            margin: '0 0 12px 0',
                            color: 'var(--text-medium)',
                            fontSize: '1.1rem',
                            fontWeight: '500'
                          }}>
                            oleh <strong style={{ color: 'var(--forest-medium)' }}>{book.penulis}</strong>
                          </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: '#f39c12', fontSize: '1rem' }}>
                              {getRatingStars(book.rating)}
                            </span>
                            <span style={{ 
                              color: 'var(--text-medium)', 
                              fontSize: '0.9rem',
                              fontWeight: '600'
                            }}>
                              {book.rating}
                            </span>
                          </div>
                          <span style={{
                            background: stokInfo.bgColor,
                            color: stokInfo.color,
                            padding: '6px 12px',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                          }}>
                            {stokInfo.text}
                          </span>
                        </div>
                      </div>

                      <p style={{ 
                        margin: '0 0 15px 0',
                        fontSize: '1rem',
                        color: 'var(--text-medium)',
                        lineHeight: '1.6'
                      }}>
                        {book.sinopsis}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px', fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                        <span>🏢 {book.penerbit}</span>
                        <span>📅 {book.tahun_terbit}</span>
                        <span>📖 {book.jumlah_halaman} halaman</span>
                        <span>📁 {book.kategori}</span>
                      </div>

                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Link 
                          to={`/book/${book.id}`}
                          style={{
                            background: 'var(--forest-light)',
                            color: 'var(--text-white)',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            transition: 'all 0.3s'
                          }}
                        >
                          📖 Baca Detail
                        </Link>
                        <button
                          style={{
                            padding: '10px 15px',
                            background: 'transparent',
                            color: 'var(--forest-medium)',
                            border: '2px solid var(--forest-medium)',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            transition: 'all 0.3s'
                          }}
                        >
                          💝 Favorite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '80px 20px',
            background: 'var(--bg-white)',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>🔍</div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.8rem' }}>
              Buku Tidak Ditemukan
            </h3>
            <p style={{ 
              color: 'var(--text-medium)', 
              marginBottom: '2rem',
              maxWidth: '400px',
              margin: '0 auto 2rem',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Maaf, tidak ada buku yang sesuai dengan pencarian Anda. Coba ubah kata kunci atau filter yang digunakan.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Semua');
                setSortBy('terbaru');
              }}
              style={{
                padding: '15px 35px',
                background: 'var(--forest-light)',
                color: 'var(--text-white)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
            >
              Tampilkan Semua Buku
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;