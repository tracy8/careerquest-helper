
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'parent' | 'admin';
  school?: string;
  grade?: string;
  assessmentProgress?: number;
  completedAssessments?: string[];
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('careerquest_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('careerquest_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('careerquest_user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulating an API call for authentication
    setLoading(true);
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication logic for demo purposes
      if (email === 'student@example.com' && password === 'password') {
        setUser({
          id: '1',
          name: 'John Doe',
          email: 'student@example.com',
          role: 'student',
          school: 'Kigali Secondary School',
          grade: 'O-Level',
          assessmentProgress: 0,
          completedAssessments: []
        });
        setLoading(false);
        return true;
      }
      
      setLoading(false);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
        login,
        logout,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
