import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, isAdmin = false) => {
    // Simulasi login
    if (isAdmin) {
      if (email === "admin@hutanbuku.com" && password === "admin123") {
        const userData = { 
          name: "Administrator", 
          email: email, 
          role: "admin" 
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true };
      }
    } else {
      // Simulasi login user biasa
      const userData = { 
        name: "User Demo", 
        email: email, 
        role: "user" 
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    }
    
    return { 
      success: false, 
      error: "Email atau password salah" 
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (userData) => {
    // Simulasi registrasi
    const newUser = {
      name: userData.name,
      email: userData.email,
      role: "user"
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return { success: true };
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}