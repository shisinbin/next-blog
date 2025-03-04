import React from 'react';
import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';

import { BLOG_TITLE } from '@/constants';

import RespectMotionPreferences from '@/components/RespectMotionPreferences';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './styles.css';
import ThemedBody from '@/components/ThemedBody';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  title: BLOG_TITLE,
  description: 'A wonderful blog about JavaScript',
};

function RootLayout({ children }) {
  // TODO: Dynamic theme depending on user preference
  const theme = 'light';

  return (
    <RespectMotionPreferences>
      <html
        lang='en'
        className={clsx(mainFont.variable, monoFont.variable)}
        // data-color-theme={theme}
        // style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
        suppressHydrationWarning // to circumvent console warning for data-google-analytics-opt-out
      >
        <ThemedBody>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemedBody>
      </html>
    </RespectMotionPreferences>
  );
}

export default RootLayout;
