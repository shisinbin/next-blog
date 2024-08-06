'use client';
import React from 'react';
import { Sun, Moon } from 'react-feather';

import VisuallyHidden from '@/components/VisuallyHidden';
import { useTheme } from '../ThemeProvider';

import styles from './DarkLightToggle.module.css';

function DarkLightToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.wrapper} onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun size='1.5rem' />
      ) : (
        <Moon size='1.5rem' />
      )}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
