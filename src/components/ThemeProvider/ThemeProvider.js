'use client';
import React from 'react';
import Cookies from 'js-cookie';

const ThemeContext = React.createContext();

function ThemeProvider({ initialTheme = 'light', children }) {
  const [theme, setTheme] = React.useState(initialTheme);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);

    Cookies.set('color-theme', nextTheme, {
      expires: 1000,
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;
