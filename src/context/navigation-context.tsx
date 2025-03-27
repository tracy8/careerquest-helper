
import React, { createContext, useContext, useState } from 'react';

interface NavigationContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  previousPage: string | null;
  setPreviousPage: (page: string | null) => void;
  transitionState: 'entering' | 'entered' | 'exiting' | 'exited';
  setTransitionState: (state: 'entering' | 'entered' | 'exiting' | 'exited') => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [transitionState, setTransitionState] = useState<'entering' | 'entered' | 'exiting' | 'exited'>('entered');

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        previousPage,
        setPreviousPage,
        transitionState,
        setTransitionState
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
