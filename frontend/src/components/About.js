import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const teamMembers = [
    {
      name: "Ahmad Wijaya",
      role: "Founder & CEO",
      bio: "Pendiri Hutan Buku dengan visi menciptakan ekosistem membaca digital yang accessible untuk semua kalangan. Berpengalaman 8+ tahun di industri teknologi dan pendidikan.",
      avatar: "👨‍💼",
      color: "#3498db",
      expertise: ["Strategic Planning", "Tech Innovation", "Education"]
    },
    {
      name: "Sarah Permata",
      role: "Head of Product",
      bio: "Mengawasi pengembangan produk dan pengalaman pengguna. Berpengalaman dalam desain UX/UX dan product management di berbagai startup teknologi.",
      avatar: "👩‍💻",
      color: "#e74c3c",
      expertise: ["Product Management", "UX Research", "Agile Development"]
    },
    {
      name: "Budi Santoso",
      role: "Lead Developer",
      bio: "Memimpin tim pengembangan teknis dengan fokus pada scalable architecture dan best practices. Spesialis dalam React, Node.js, dan cloud technologies.",
      avatar: "👨‍💻",
      color: "#2ecc71",
      expertise: ["Full Stack Development", "System Architecture", "DevOps"]
    },
    {
      name: "Maya Sari",
      role: "Content Curator",
      bio: "Ahli literasi dengan latar belakang ilmu perpustakaan. Bertanggung jawab dalam kurasi dan kualitas konten buku yang tersedia di platform.",
      avatar: "📚",
      color: "#9b59b6",
      expertise: ["Content Strategy", "Digital Library", "Quality Assurance"]
    },
    {
      name: "Rizky Pratama",
      role: "Community Manager",
      bio: "Membangun dan mengelola komunitas pembaca yang aktif dan engaged. Expert dalam social media management dan community engagement.",
      avatar: "🌟",
      color: "#f39c12",
      expertise: ["Community Building", "Social Media", "User Engagement"]
    },
    {
      name: "Dewi Anggraeni",
      role: "Marketing Manager",
      bio: "Mengembangkan strategi pemasaran dan partnership untuk memperluas jangkauan Hutan Buku ke seluruh Indonesia.",
      avatar: "📈",
      color: "#1abc9c",
      expertise: ["Digital Marketing", "Partnership", "Brand Strategy"]
    }
  ];

  const features = [
    {
      icon: "🔍",
      title: "Katalog Terlengkap",
      description: "Lebih dari 10,000 buku dari berbagai genre dan penerbit terkemuka di Indonesia dan internasional"
    },
    {
      icon: "📱",
      title: "Akses Multi-Platform",
      description: "Dapat diakses melalui website responsive, mobile app, dan tablet dengan sinkronisasi real-time"
    },
    {
      icon: "🎯",
      title: "Rekomendasi Cerdas",
      description: "Sistem AI yang mempelajari preferensi membaca Anda untuk memberikan rekomendasi yang personal"
    },
    {
      icon: "🚀",
      title: "Update Real-time",
      description: "Koleksi buku terus diperbarui dengan rilisan terbaru dan bestseller dari berbagai penerbit"
    },
    {
      icon: "💫",
      title: "Reading Experience",
      description: "Interface yang dirancang khusus untuk kenyamanan membaca dengan dark mode dan adjustable text size"
    },
    {
      icon: "🌱",
      title: "Eco-Initiative",
      description: "Berkontribusi pada gerakan ramah lingkungan dengan mengurangi penggunaan kertas secara signifikan"
    }
  ];

  const milestones = [
    { 
      year: "2020", 
      event: "Hutan Buku Didirikan", 
      description: "Diluncurkan dengan visi menciptakan platform digital untuk revolusi literasi Indonesia",
      achievement: "100+ buku awal"
    },
    { 
      year: "2021", 
      event: "Ekspansi Katalog", 
      description: "Menjalin partnership dengan 50+ penerbit nasional dan internasional",
      achievement: "5,000+ buku"
    },
    { 
      year: "2022", 
      event: "Komunitas Tumbuh", 
      description: "Mencapai 50,000 anggota komunitas pembaca aktif di seluruh Indonesia",
      achievement: "50,000+ users"
    },
    { 
      year: "2023", 
      event: "Mobile App Launch", 
      description: "Meluncurkan aplikasi mobile native untuk iOS dan Android dengan fitur lengkap",
      achievement: "100,000+ downloads"
    },
    { 
      year: "2024", 
      event: "AI Integration", 
      description: "Mengimplementasikan sistem rekomendasi berbasis machine learning dan personalisasi",
      achievement: "10,000+ buku"
    }
  ];

  const values = [
    {
      icon: "💡",
      title: "Inovasi",
      description: "Terus berinovasi dalam teknologi dan pengalaman pengguna untuk memajukan literasi digital"
    },
    {
      icon: "🤝",
      title: "Kolaborasi",
      description: "Bekerja sama dengan penerbit, penulis, dan komunitas untuk menciptakan ekosistem yang sehat"
    },
    {
      icon: "🌏",
      title: "Aksesibilitas",
      description: "Memastikan akses membaca yang mudah dan terjangkau untuk semua kalangan masyarakat"
    },
    {
      icon: "📖",
      title: "Kualitas",
      description: "Menjaga kualitas konten dan pengalaman pengguna sebagai prioritas utama"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Buku Tersedia", icon: "📚" },
    { number: "200,000+", label: "Pembaca Aktif", icon: "👥" },
    { number: "500+", label: "Penerbit Partner", icon: "🏢" },
    { number: "98%", label: "Kepuasan Pengguna", icon: "⭐" }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--forest-medium) 100%)',
        color: 'var(--text-white)',
        padding: '100px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(116, 198, 157, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(82, 183, 136, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            fontWeight: '700',
            background: 'linear-gradient(45deg, var(--forest-lightest), white)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🌿 Tentang Hutan Buku
          </h1>
          <p style={{ 
            fontSize: '1.4rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            color: 'var(--text-white)',
            fontWeight: '500'
          }}>
            Platform digital terdepan yang menghubungkan pecinta buku dengan dunia literasi yang tak terbatas. 
            Berkomitmen menciptakan revolusi membaca di Indonesia melalui teknologi inovatif.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/books"
              style={{
                padding: '15px 30px',
                background: 'var(--forest-lightest)',
                color: 'var(--forest-dark)',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              📚 Jelajahi Katalog
            </Link>
            <Link 
              to="/contact"
              style={{
                padding: '15px 30px',
                background: 'transparent',
                color: 'var(--text-white)',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid var(--forest-lightest)',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              📞 Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--bg-white)',
                  padding: '30px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem'
                }}>
                  {stat.icon}
                </div>
                <h3 style={{ 
                  color: 'var(--text-dark)',
                  margin: '0 0 0.5rem 0',
                  fontSize: '2.2rem',
                  fontWeight: '700'
                }}>
                  {stat.number}
                </h3>
                <p style={{ 
                  color: 'var(--text-dark)',
                  margin: 0,
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            <div style={{
              background: 'var(--bg-white)',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(27, 67, 50, 0.1)',
              border: '1px solid var(--border-light)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem'
              }}>
                🎯
              </div>
              <h2 style={{ 
                color: 'var(--text-dark)',
                marginBottom: '1rem',
                fontSize: '1.8rem',
                fontWeight: '700'
              }}>
                Misi Kami
              </h2>
              <p style={{ 
                color: 'var(--text-dark)',
                lineHeight: '1.7',
                fontSize: '1.1rem',
                margin: 0
              }}>
                Menyediakan platform digital yang accessible dan engaging untuk memajukan budaya membaca di Indonesia. 
                Kami berkomitmen menghadirkan pengalaman membaca yang modern, interaktif, dan menginspirasi melalui 
                teknologi terkini, menjangkau semua kalangan dari berbagai latar belakang.
              </p>
            </div>

            <div style={{
              background: 'var(--bg-white)',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(27, 67, 50, 0.1)',
              border: '1px solid var(--border-light)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem'
              }}>
                🌟
              </div>
              <h2 style={{ 
                color: 'var(--text-dark)',
                marginBottom: '1rem',
                fontSize: '1.8rem',
                fontWeight: '700'
              }}>
                Visi Kami
              </h2>
              <p style={{ 
                color: 'var(--text-dark)',
                lineHeight: '1.7',
                fontSize: '1.1rem',
                margin: 0
              }}>
                Menjadi ecosystem digital literasi terdepan di Asia Tenggara yang menciptakan generasi pembaca 
                cerdas, kritis, dan berwawasan global. Melalui inovasi teknologi yang berkelanjutan, kami 
                bercita-cita mentransformasi cara masyarakat Indonesia dalam mengakses dan berinteraksi dengan pengetahuan.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              color: 'var(--text-dark)',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              💫 Nilai-Nilai Kami
            </h2>
            <p style={{ 
              color: 'var(--text-dark)',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              Prinsip-prinsip yang menjadi fondasi dalam setiap langkah dan keputusan kami
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px'
            }}>
              {values.map((value, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'var(--bg-white)',
                    padding: '30px 25px',
                    borderRadius: '16px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    border: '1px solid var(--border-light)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1.5rem'
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{ 
                    color: 'var(--text-dark)',
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-dark)',
                    lineHeight: '1.6',
                    margin: 0,
                    fontSize: '1rem'
                  }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              color: 'var(--text-dark)',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              ✨ Keunggulan Platform
            </h2>
            <p style={{ 
              color: 'var(--text-dark)',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              Inovasi teknologi yang membuat pengalaman membaca menjadi lebih menyenangkan dan engaging
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'var(--bg-white)',
                    padding: '30px 25px',
                    borderRadius: '16px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    border: '1px solid var(--border-light)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(27, 67, 50, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1.5rem'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ 
                    color: 'var(--text-dark)',
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-dark)',
                    lineHeight: '1.6',
                    margin: 0,
                    fontSize: '1rem'
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest-light) 0%, var(--forest-medium) 100%)',
        padding: '80px 20px',
        color: 'var(--text-white)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            marginBottom: '1rem',
            fontSize: '2.5rem',
            fontWeight: '700'
          }}>
            👥 Tim Kami
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '3rem',
            color: 'var(--text-white)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Dikenal oleh tim profesional yang passionate tentang literasi dan teknologi
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '30px 25px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: member.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }}>
                  {member.avatar}
                </div>
                <h3 style={{ 
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  {member.name}
                </h3>
                <p style={{ 
                  margin: '0 0 1rem 0',
                  color: 'var(--forest-lightest)',
                  fontWeight: '500',
                  fontSize: '1rem'
                }}>
                  {member.role}
                </p>
                <p style={{ 
                  margin: '0 0 1.5rem 0',
                  color: 'var(--text-white)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {member.bio}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px',
                  justifyContent: 'center'
                }}>
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'var(--text-white)',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              color: 'var(--text-dark)',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              📅 Perjalanan Kami
            </h2>
            <p style={{ 
              color: 'var(--text-dark)',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Cerita perkembangan Hutan Buku dari startup kecil hingga platform literasi digital terkemuka
            </p>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(to bottom, var(--forest-light), var(--forest-medium))',
              transform: 'translateX(-50%)',
              borderRadius: '2px'
            }}></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '50px',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                <div style={{
                  flex: '1',
                  padding: index % 2 === 0 ? '0 40px 0 0' : '0 0 0 40px',
                  textAlign: index % 2 === 0 ? 'right' : 'left'
                }}>
                  <div style={{
                    background: 'var(--bg-white)',
                    padding: '25px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <h3 style={{ 
                      color: 'var(--text-dark)',
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>
                      {milestone.event}
                    </h3>
                    <p style={{ 
                      color: 'var(--text-dark)',
                      margin: '0 0 1rem 0',
                      lineHeight: '1.6'
                    }}>
                      {milestone.description}
                    </p>
                    <div style={{
                      background: 'var(--forest-light)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '15px',
                      display: 'inline-block',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}>
                      {milestone.achievement}
                    </div>
                  </div>
                </div>
                
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'var(--forest-medium)',
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: '0 0 0 3px var(--forest-light)',
                  zIndex: 2,
                  flexShrink: 0
                }}></div>
                
                <div style={{
                  flex: '1',
                  padding: index % 2 === 0 ? '0 0 0 40px' : '0 40px 0 0',
                  textAlign: index % 2 === 0 ? 'left' : 'right'
                }}>
                  <div style={{
                    background: 'var(--forest-light)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '25px',
                    display: 'inline-block',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>
                    {milestone.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--forest-medium) 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'var(--text-white)'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            marginBottom: '1.5rem',
            fontSize: '2.5rem',
            fontWeight: '700'
          }}>
            🚀 Bergabunglah Dengan Komunitas Kami
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '2.5rem',
            color: 'var(--text-white)',
            lineHeight: '1.6'
          }}>
            Jadilah bagian dari revolusi literasi digital Indonesia. Temukan dunia pengetahuan yang menakjubkan 
            dan bergabung dengan ribuan pembaca lainnya dalam petualangan membaca yang tak terlupakan.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/books"
              style={{
                padding: '15px 35px',
                background: 'var(--forest-lightest)',
                color: 'var(--forest-dark)',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s'
              }}
            >
              📖 Mulai Membaca Sekarang
            </Link>
            <Link 
              to="/contact"
              style={{
                padding: '15px 35px',
                background: 'transparent',
                color: 'var(--text-white)',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid var(--forest-lightest)',
                transition: 'all 0.3s'
              }}
            >
              💬 Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;