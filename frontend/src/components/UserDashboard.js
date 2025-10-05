import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

function UserDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [recentBooks, setRecentBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load sample data
  useEffect(() => {
    setTimeout(() => {
      const sampleBooks = [
        {
          id: 1,
          title: "Belajar React JS Modern",
          author: "Ahmad Developer",
          progress: 75,
          lastRead: "2 jam lalu",
          cover: "📘",
          category: "Teknologi"
        },
        {
          id: 2,
          title: "Mastering JavaScript", 
          author: "Siti Programmer",
          progress: 45,
          lastRead: "1 hari lalu",
          cover: "📗",
          category: "Teknologi"
        },
        {
          id: 3,
          title: "Seni Desain Web",
          author: "Budi Designer",
          progress: 20,
          lastRead: "3 hari lalu", 
          cover: "📕",
          category: "Desain"
        }
      ];
      setRecentBooks(sampleBooks);
      setLoading(false);
    }, 1500);
  }, []);

  const userStats = {
    booksRead: 24,
    readingTime: '45h 30m',
    favoriteGenre: 'Teknologi',
    readingStreak: 12,
    pagesRead: 3240
  };

  const recommendedBooks = [
    {
      id: 4,
      title: "Python untuk Pemula",
      author: "David Coder",
      rating: 4.8,
      cover: "📙",
      category: "Programming"
    },
    {
      id: 5,
      title: "Database Fundamentals",
      author: "Maria Expert", 
      rating: 4.6,
      cover: "📓",
      category: "Database"
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      author: "Lisa Designer",
      rating: 4.9,
      cover: "📔",
      category: "Design"
    }
  ];

  const readingGoals = {
    yearly: { target: 50, completed: 24, progress: 48 },
    monthly: { target: 5, completed: 3, progress: 60 },
    weekly: { target: 2, completed: 1, progress: 50 }
  };

  const ProgressBar = ({ progress, color = 'var(--forest-light)' }) => (
    <div className="progress-bar-container">
      <div 
        className="progress-bar-fill"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );

  return (
    <div className="user-dashboard-enhanced">
      {/* Header */}
      <header className="user-header-enhanced">
        <div className="header-content">
          <div className="user-welcome">
            <h1>Selamat Datang, {user?.name}!
              <span className="welcome-emoji">👋</span>
            </h1>
            <p>Lanjutkan perjalanan membaca Anda di Hutan Buku</p>
          </div>
          <div className="user-actions">
            <button className="notification-btn">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
            <div className="user-profile">
              <div className="profile-avatar">
                {user?.avatar || '👤'}
              </div>
              <div className="profile-info">
                <span className="profile-name">{user?.name}</span>
                <span className="profile-role">Pembaca Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="user-nav-enhanced">
        <div className="nav-container">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <span className="nav-icon">📊</span>
            Dashboard
          </button>
          <button 
            className={`nav-item ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            <span className="nav-icon">📚</span>
            Perpustakaan
          </button>
          <button 
            className={`nav-item ${activeTab === 'reading' ? 'active' : ''}`}
            onClick={() => setActiveTab('reading')}
          >
            <span className="nav-icon">📖</span>
            Sedang Dibaca
          </button>
          <button 
            className={`nav-item ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <span className="nav-icon">❤️</span>
            Favorit
          </button>
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <span className="nav-icon">👤</span>
            Profile
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="user-main-enhanced">
        {activeTab === 'dashboard' && (
          <div className="dashboard-content">
            {/* Stats Overview */}
            <div className="stats-overview-enhanced">
              <div className="stat-card-enhanced reading-stats">
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <h3>{userStats.booksRead}</h3>
                  <p>Buku Telah Dibaca</p>
                </div>
                <div className="stat-trend">↑ 12%</div>
              </div>
              <div className="stat-card-enhanced time-stats">
                <div className="stat-icon">⏱️</div>
                <div className="stat-content">
                  <h3>{userStats.readingTime}</h3>
                  <p>Total Waktu Baca</p>
                </div>
                <div className="stat-trend">↑ 8%</div>
              </div>
              <div className="stat-card-enhanced genre-stats">
                <div className="stat-icon">🏷️</div>
                <div className="stat-content">
                  <h3>{userStats.favoriteGenre}</h3>
                  <p>Genre Favorit</p>
                </div>
              </div>
              <div className="stat-card-enhanced streak-stats">
                <div className="stat-icon">🔥</div>
                <div className="stat-content">
                  <h3>{userStats.readingStreak} hari</h3>
                  <p>Reading Streak</p>
                </div>
                <div className="stat-trend">🔥</div>
              </div>
            </div>

            {/* Reading Goals */}
            <div className="goals-section">
              <h2>🎯 Target Membaca</h2>
              <div className="goals-grid">
                <div className="goal-card">
                  <h4>Tahunan</h4>
                  <div className="goal-progress">
                    <span className="goal-numbers">
                      {readingGoals.yearly.completed}/{readingGoals.yearly.target}
                    </span>
                    <ProgressBar progress={readingGoals.yearly.progress} />
                  </div>
                </div>
                <div className="goal-card">
                  <h4>Bulanan</h4>
                  <div className="goal-progress">
                    <span className="goal-numbers">
                      {readingGoals.monthly.completed}/{readingGoals.monthly.target}
                    </span>
                    <ProgressBar progress={readingGoals.monthly.progress} />
                  </div>
                </div>
                <div className="goal-card">
                  <h4>Mingguan</h4>
                  <div className="goal-progress">
                    <span className="goal-numbers">
                      {readingGoals.weekly.completed}/{readingGoals.weekly.target}
                    </span>
                    <ProgressBar progress={readingGoals.weekly.progress} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Books & Recommendations */}
            <div className="content-grid">
              {/* Recent Books */}
              <div className="content-section">
                <div className="section-header">
                  <h3>📖 Terakhir Dibaca</h3>
                  <button className="see-all-btn">Lihat Semua →</button>
                </div>
                <div className="books-list">
                  {loading ? (
                    <div className="loading-books">
                      <div className="loading-spinner"></div>
                      <p>Memuat buku...</p>
                    </div>
                  ) : (
                    recentBooks.map(book => (
                      <div key={book.id} className="recent-book-card">
                        <div className="book-cover-small">{book.cover}</div>
                        <div className="book-info">
                          <h4 className="book-title">{book.title}</h4>
                          <p className="book-author">{book.author}</p>
                          <div className="reading-progress">
                            <ProgressBar progress={book.progress} />
                            <span className="progress-text">{book.progress}%</span>
                          </div>
                          <span className="last-read">{book.lastRead}</span>
                        </div>
                        <button className="continue-btn">
                          Lanjutkan →
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Recommended Books */}
              <div className="content-section">
                <div className="section-header">
                  <h3>🌟 Rekomendasi untuk Anda</h3>
                  <button className="see-all-btn">Lihat Semua →</button>
                </div>
                <div className="recommended-list">
                  {recommendedBooks.map(book => (
                    <div key={book.id} className="recommended-book-card">
                      <div className="book-cover">{book.cover}</div>
                      <div className="book-details">
                        <h4 className="book-title">{book.title}</h4>
                        <p className="book-author">{book.author}</p>
                        <div className="book-rating">
                          <span className="rating-stars">★★★★★</span>
                          <span className="rating-value">{book.rating}</span>
                        </div>
                        <span className="book-category">{book.category}</span>
                      </div>
                      <button className="read-btn">
                        Mulai Baca
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-section">
              <h2>⚡ Aksi Cepat</h2>
              <div className="actions-grid">
                <button className="action-card">
                  <span className="action-icon">🔍</span>
                  <span>Cari Buku</span>
                </button>
                <button className="action-card">
                  <span className="action-icon">📖</span>
                  <span>Lanjut Baca</span>
                </button>
                <button className="action-card">
                  <span className="action-icon">❤️</span>
                  <span>Favorit Saya</span>
                </button>
                <button className="action-card">
                  <span className="action-icon">📚</span>
                  <span>Koleksi</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Tabs */}
        {activeTab === 'library' && (
          <div className="tab-content">
            <div className="page-header">
              <h1>📚 Perpustakaan Saya</h1>
              <p>Kelola semua buku yang Anda miliki dan akses</p>
            </div>
            <div className="coming-soon">
              <div className="coming-soon-icon">🚧</div>
              <h3>Fitur Segera Hadir</h3>
              <p>Kami sedang menyiapkan pengelolaan perpustakaan yang lebih baik untuk Anda.</p>
            </div>
          </div>
        )}

        {activeTab === 'reading' && (
          <div className="tab-content">
            <div className="page-header">
              <h1>📖 Sedang Dibaca</h1>
              <p>Lanjutkan membaca buku yang sedang Anda baca</p>
            </div>
            <div className="coming-soon">
              <div className="coming-soon-icon">📖</div>
              <h3>Fitur Baca Online</h3>
              <p>Fitur membaca buku online akan segera hadir dengan experience terbaik.</p>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="tab-content">
            <div className="page-header">
              <h1>❤️ Buku Favorit</h1>
              <p>Koleksi buku yang Anda tandai sebagai favorit</p>
            </div>
            <div className="coming-soon">
              <div className="coming-soon-icon">❤️</div>
              <h3>Fitur Favorit</h3>
              <p>Simpan dan kelola buku favorit Anda dalam satu tempat.</p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="tab-content">
            <div className="page-header">
              <h1>👤 Profile Saya</h1>
              <p>Kelola informasi akun dan preferensi membaca</p>
            </div>
            <div className="coming-soon">
              <div className="coming-soon-icon">👤</div>
              <h3>Profile Management</h3>
              <p>Fitur lengkap untuk mengelola profile dan preferensi akan segera hadir.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default UserDashboard;