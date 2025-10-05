import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

function AdminDashboard() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    judul: '',
    isbn: '',
    penerbit: '',
    penulis: '',
    tahun_terbit: '',
    jumlah_halaman: '',
    sinopsis: '',
    kategori: '',
    cover: '📚',
    warna: '#3498db',
    stok: 0
  });

  // Sample data awal
  const initialBooks = [
    {
      id: 1,
      judul: "Belajar React JS Modern",
      penulis: "Ahmad Developer",
      penerbit: "Penerbit Informatika",
      tahun_terbit: 2024,
      jumlah_halaman: 251,
      isbn: "9781234567891",
      sinopsis: "Panduan lengkap belajar React JS dengan hooks dan modern practices.",
      kategori: "Pemrograman",
      stok: 15,
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
      isbn: "9781234567892",
      sinopsis: "Buku komprehensif untuk menguasai framework Laravel 10.",
      kategori: "Pemrograman",
      stok: 8,
      cover: "🚀",
      warna: "#e74c3c"
    }
  ];

  const categories = ["Semua", "Pemrograman", "Desain", "Kecerdasan Buatan", "Mobile", "Keamanan", "Database", "Bisnis", "Sains"];
  const coverIcons = ["📚", "⚛️", "🚀", "⚡", "🎨", "🤖", "🔒", "📱", "🗃️", "💼", "🔬"];
  const colorOptions = [
    "#3498db", "#e74c3c", "#f39c12", "#2ecc71", "#9b59b6", 
    "#1abc9c", "#d35400", "#c0392b", "#8e44ad", "#27ae60"
  ];

  useEffect(() => {
    // Load books from localStorage or use initial data
    const savedBooks = localStorage.getItem('adminBooks');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      setBooks(initialBooks);
      localStorage.setItem('adminBooks', JSON.stringify(initialBooks));
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever books change
    if (books.length > 0) {
      localStorage.setItem('adminBooks', JSON.stringify(books));
    }
  }, [books]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi API call
    setTimeout(() => {
      if (editingBook) {
        // Update existing book
        const updatedBooks = books.map(book =>
          book.id === editingBook.id 
            ? { ...formData, id: editingBook.id }
            : book
        );
        setBooks(updatedBooks);
        setSuccessMessage('Buku berhasil diperbarui!');
      } else {
        // Add new book
        const newBook = {
          ...formData,
          id: Date.now(), // Simple ID generation
          tahun_terbit: parseInt(formData.tahun_terbit),
          jumlah_halaman: parseInt(formData.jumlah_halaman),
          stok: parseInt(formData.stok)
        };
        setBooks(prev => [...prev, newBook]);
        setSuccessMessage('Buku berhasil ditambahkan!');
      }

      setLoading(false);
      setShowForm(false);
      resetForm();
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      judul: '',
      isbn: '',
      penerbit: '',
      penulis: '',
      tahun_terbit: '',
      jumlah_halaman: '',
      sinopsis: '',
      kategori: '',
      cover: '📚',
      warna: '#3498db',
      stok: 0
    });
    setEditingBook(null);
  };

  const handleEdit = (book) => {
    setFormData(book);
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
      setSuccessMessage('Buku berhasil dihapus!');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.penulis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || book.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStokInfo = (stok) => {
    if (stok > 10) return { status: "Tersedia", color: "#27ae60", bgColor: "#d5f4e6" };
    if (stok > 5) return { status: "Terbatas", color: "#f39c12", bgColor: "#fef5e7" };
    if (stok > 0) return { status: "Hampir Habis", color: "#e74c3c", bgColor: "#fdedec" };
    return { status: "Kosong", color: "#95a5a6", bgColor: "#ecf0f1" };
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-lighter) 100%)',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Success Message */}
        {successMessage && (
          <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: '#27ae60',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '10px',
            boxShadow: '0 5px 20px rgba(39, 174, 96, 0.3)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            ✅ {successMessage}
          </div>
        )}

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          padding: '25px',
          background: 'var(--bg-white)',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(27, 67, 50, 0.08)'
        }}>
          <div>
            <h1 style={{ 
              color: 'var(--text-dark)',
              marginBottom: '0.5rem',
              fontSize: '2.2rem',
              fontWeight: '700'
            }}>
              🌿 Dashboard Admin
            </h1>
            <p style={{ 
              color: 'var(--text-medium)', 
              margin: 0,
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              Selamat datang, <strong style={{ color: 'var(--forest-medium)' }}>{user?.name || 'Administrator'}!</strong>
            </p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            style={{
              padding: '15px 30px',
              background: 'var(--forest-light)',
              color: 'var(--text-white)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s'
            }}
          >
            ➕ Tambah Buku Baru
          </button>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '2rem'
        }}>
          {[
            { 
              title: 'Total Buku', 
              value: books.length, 
              icon: '📚', 
              color: '#3498db',
              description: 'Buku dalam koleksi'
            },
            { 
              title: 'Kategori', 
              value: categories.length - 1, 
              icon: '📂', 
              color: '#e74c3c',
              description: 'Jumlah kategori'
            },
            { 
              title: 'Stok Tersedia', 
              value: books.reduce((sum, book) => sum + book.stok, 0), 
              icon: '📦', 
              color: '#27ae60',
              description: 'Total stok buku'
            },
            { 
              title: 'Buku Baru', 
              value: books.filter(book => book.tahun_terbit >= 2023).length, 
              icon: '🆕', 
              color: '#9b59b6',
              description: 'Terbitan ≥ 2023'
            }
          ].map((stat, index) => (
            <div 
              key={index}
              style={{
                background: 'var(--bg-white)',
                padding: '30px 25px',
                borderRadius: '16px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: `2px solid ${stat.color}20`,
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                background: `${stat.color}20`,
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                {stat.icon}
              </div>
              <h3 style={{ 
                fontSize: '2.2rem', 
                color: 'var(--text-dark)', 
                margin: '0 0 8px 0',
                fontWeight: '700'
              }}>
                {stat.value}
              </h3>
              <p style={{ 
                color: 'var(--text-medium)', 
                margin: '0 0 5px 0',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                {stat.title}
              </p>
              <p style={{ 
                color: 'var(--text-light)', 
                margin: 0,
                fontSize: '0.85rem'
              }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div style={{
          background: 'var(--bg-white)',
          padding: '25px',
          borderRadius: '16px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr auto',
            gap: '15px',
            alignItems: 'end'
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                🔍 Cari Buku
              </label>
              <input
                type="text"
                placeholder="Cari judul atau penulis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  color: 'var(--text-dark)'
                }}
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                📂 Filter Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid var(--border-light)',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  background: 'var(--bg-white)',
                  cursor: 'pointer',
                  color: 'var(--text-dark)'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                📊 Total Buku
              </label>
              <div style={{
                padding: '12px 15px',
                background: 'var(--bg-light)',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                textAlign: 'center'
              }}>
                {filteredBooks.length} buku
              </div>
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Semua');
              }}
              style={{
                padding: '12px 20px',
                background: 'var(--forest-light)',
                color: 'var(--text-white)',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Books Table */}
        <div style={{
          background: 'var(--bg-white)',
          borderRadius: '16px',
          padding: '25px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
          marginBottom: '3rem'
        }}>
          <h2 style={{ 
            color: 'var(--text-dark)', 
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}>
            📖 Kelola Buku ({filteredBooks.length})
          </h2>
          
          {filteredBooks.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 20px',
              color: 'var(--text-medium)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📚</div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Tidak ada buku ditemukan
              </h3>
              <p style={{ marginBottom: '2rem' }}>
                {searchTerm || selectedCategory !== 'Semua' 
                  ? 'Coba ubah kata kunci pencarian atau filter kategori' 
                  : 'Mulai dengan menambahkan buku pertama Anda'
                }
              </p>
              {!searchTerm && selectedCategory === 'Semua' && (
                <button 
                  onClick={() => setShowForm(true)}
                  style={{
                    padding: '12px 25px',
                    background: 'var(--forest-light)',
                    color: 'var(--text-white)',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  ➕ Tambah Buku Pertama
                </button>
              )}
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                minWidth: '800px'
              }}>
                <thead>
                  <tr style={{ 
                    background: 'linear-gradient(135deg, var(--forest-light) 0%, var(--forest-medium) 100%)',
                    color: 'var(--text-white)'
                  }}>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Buku</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Penulis</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Kategori</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Tahun</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Stok</th>
                    <th style={{ padding: '15px', textAlign: 'center', fontWeight: '600' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map(book => {
                    const stokInfo = getStokInfo(book.stok);
                    return (
                      <tr key={book.id} style={{ 
                        borderBottom: '1px solid var(--border-light)',
                        transition: 'background 0.3s'
                      }}>
                        <td style={{ padding: '15px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                              width: '40px',
                              height: '40px',
                              background: book.warna,
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1.2rem',
                              color: 'white',
                              fontWeight: 'bold'
                            }}>
                              {book.cover}
                            </div>
                            <div>
                              <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                                {book.judul}
                              </div>
                              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                                {book.penerbit}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '15px', color: 'var(--text-medium)', fontWeight: '500' }}>
                          {book.penulis}
                        </td>
                        <td style={{ padding: '15px' }}>
                          <span style={{
                            background: 'var(--bg-light)',
                            color: 'var(--forest-medium)',
                            padding: '5px 12px',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {book.kategori}
                          </span>
                        </td>
                        <td style={{ padding: '15px', color: 'var(--text-medium)', fontWeight: '500' }}>
                          {book.tahun_terbit}
                        </td>
                        <td style={{ padding: '15px' }}>
                          <span style={{
                            background: stokInfo.bgColor,
                            color: stokInfo.color,
                            padding: '6px 12px',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                          }}>
                            {book.stok} {stokInfo.status}
                          </span>
                        </td>
                        <td style={{ padding: '15px', textAlign: 'center' }}>
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <button 
                              onClick={() => handleEdit(book)}
                              style={{
                                background: '#f39c12',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                transition: 'all 0.3s'
                              }}
                            >
                              ✏️ Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(book.id)}
                              style={{
                                background: '#e74c3c',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                transition: 'all 0.3s'
                              }}
                            >
                              🗑️ Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Book Form Modal */}
        {showForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }}>
            <div style={{
              background: 'var(--bg-white)',
              padding: '30px',
              borderRadius: '20px',
              width: '90%',
              maxWidth: '700px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid var(--border-light)'
              }}>
                <h2 style={{ 
                  color: 'var(--text-dark)',
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>
                  {editingBook ? '✏️ Edit Buku' : '➕ Tambah Buku Baru'}
                </h2>
                <button 
                  onClick={() => {
                    setShowForm(false);
                    resetForm();
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: 'var(--text-light)',
                    padding: '5px'
                  }}
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Cover & Color Selection */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Ikon Cover
                    </label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {coverIcons.map(icon => (
                        <button
                          key={icon}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, cover: icon }))}
                          style={{
                            width: '40px',
                            height: '40px',
                            background: formData.cover === icon ? formData.warna : 'var(--bg-light)',
                            border: formData.cover === icon ? `2px solid ${formData.warna}` : '2px solid var(--border-light)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s'
                          }}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Warna Buku
                    </label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {colorOptions.map(color => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, warna: color }))}
                          style={{
                            width: '30px',
                            height: '30px',
                            background: color,
                            border: formData.warna === color ? '2px solid var(--text-dark)' : '2px solid transparent',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Judul Buku *
                    </label>
                    <input
                      type="text"
                      name="judul"
                      value={formData.judul}
                      onChange={handleInputChange}
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
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      ISBN *
                    </label>
                    <input
                      type="text"
                      name="isbn"
                      value={formData.isbn}
                      onChange={handleInputChange}
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
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Penulis *
                    </label>
                    <input
                      type="text"
                      name="penulis"
                      value={formData.penulis}
                      onChange={handleInputChange}
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
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Penerbit *
                    </label>
                    <input
                      type="text"
                      name="penerbit"
                      value={formData.penerbit}
                      onChange={handleInputChange}
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
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Tahun Terbit *
                    </label>
                    <input
                      type="number"
                      name="tahun_terbit"
                      value={formData.tahun_terbit}
                      onChange={handleInputChange}
                      required
                      min="1900"
                      max="2030"
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
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Jumlah Halaman *
                    </label>
                    <input
                      type="number"
                      name="jumlah_halaman"
                      value={formData.jumlah_halaman}
                      onChange={handleInputChange}
                      required
                      min="1"
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
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      Stok Buku *
                    </label>
                    <input
                      type="number"
                      name="stok"
                      value={formData.stok}
                      onChange={handleInputChange}
                      required
                      min="0"
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
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                    Kategori *
                  </label>
                  <select
                    name="kategori"
                    value={formData.kategori}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      background: 'var(--bg-white)',
                      cursor: 'pointer',
                      color: 'var(--text-dark)'
                    }}
                  >
                    <option value="">Pilih Kategori</option>
                    {categories.filter(cat => cat !== 'Semua').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                    Sinopsis
                  </label>
                  <textarea
                    name="sinopsis"
                    value={formData.sinopsis}
                    onChange={handleInputChange}
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      color: 'var(--text-dark)',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button 
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      resetForm();
                    }}
                    style={{
                      padding: '12px 25px',
                      background: 'var(--bg-light)',
                      color: 'var(--text-medium)',
                      border: '2px solid var(--border-light)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                      transition: 'all 0.3s'
                    }}
                  >
                    Batal
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                      padding: '12px 25px',
                      background: loading ? 'var(--text-light)' : 'var(--forest-light)',
                      color: 'var(--text-white)',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {loading ? '⏳ Memproses...' : (editingBook ? '💾 Update Buku' : '➕ Tambah Buku')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;