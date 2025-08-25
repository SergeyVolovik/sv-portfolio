import { useDarkMode } from '@/hooks';
import { createContext, ReactNode, useContext } from 'react';

type DarkModeContextType = ReturnType<typeof useDarkMode>;

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const darkMode = useDarkMode(); // single shared instance
  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => {
  const ctx = useContext(DarkModeContext);
  if (!ctx)
    throw new Error('useDarkModeContext must be used within DarkModeProvider');
  return ctx;
};
