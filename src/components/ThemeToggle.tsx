import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button 
        onClick={toggleTheme} 
        className="theme-toggle-button"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <span className="moon-icon">🌙</span>
        ) : (
          <span className="sun-icon">☀️</span>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle; 