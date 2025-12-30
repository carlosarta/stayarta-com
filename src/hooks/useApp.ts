import { useState, useEffect } from 'react';

export const useApp = () => {
  // Simple theme state logic
  // In a real app, this would read from localStorage or system preference
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); 

  // Toggle functionality
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Apply theme class to documentElement
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    language: 'es-ES', // Hardcoded for now as per STAYArta requirements
    appName: 'STAYArta Command Center',
    version: '1.0.0-beta'
  };
};
