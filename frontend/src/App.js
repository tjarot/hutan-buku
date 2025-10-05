import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Login from './components/Login';
import UserLogin from './components/UserLogin';
import AdminDashboard from './components/AdminDashboard';
import About from './components/About';
import Contact from './components/Contact';
import './components/Layout.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user-login" element={<UserLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;