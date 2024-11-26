import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Check stored credentials
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((u: any) => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const signup = async (name: string, email: string, password: string) => {
    // Check if user already exists
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (storedUsers.some((u: any) => u.email === email)) {
      throw new Error('Email already registered');
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password
    };

    // Store user
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));

    // Auto login after signup
    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    };

    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};