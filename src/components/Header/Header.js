import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import DarkLightToggle from '../DarkLightToggle';

import styles from './Header.module.css';

function Header({ className, ...delegated }) {
  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size='1.5rem'
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <DarkLightToggle />
      </div>
    </header>
  );
}

export default Header;

/* <button className={styles.action}>
          <Sun size='1.5rem' />
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button> */
