import React from 'react';
import { cookies } from 'next/headers';

import ThemeProvider from '../ThemeProvider';
import Body from '../Body';

function ThemedBody({ children }) {
  const savedTheme = cookies().get('color-theme');
  const initialTheme = savedTheme?.value || 'light';

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <Body>{children}</Body>
    </ThemeProvider>
  );
}

export default ThemedBody;
