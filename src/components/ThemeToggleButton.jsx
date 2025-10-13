import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none" aria-label={`Activar tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}>
      {theme === 'dark' ? (
        <box-icon name='sun' color='#fefefe'></box-icon>
      ) : (
        <box-icon name='moon' color='#1a1a1a'></box-icon>
      )}
    </button>
  );
};

export default ThemeToggleButton;
