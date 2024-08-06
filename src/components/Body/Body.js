'use client';
import React from 'react';

import { useTheme } from '../ThemeProvider';
import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

function Body({ children }) {
  const { theme } = useTheme();
  const themeColors = theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

  return (
    <body data-color-theme={theme} style={{ ...themeColors }}>
      {children}
    </body>
  );
}

export default Body;
