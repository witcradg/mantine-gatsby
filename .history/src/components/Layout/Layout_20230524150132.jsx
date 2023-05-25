import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, AppShell } from '@mantine/core';

// interface LayoutProps {
//   children: React.ReactNode;
// }

export function Layout({ children }) {

  const [colorScheme, setColorScheme] = useState('light');
  
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      {/* skipping withCSSVariables for now. Use this if I want to style my own components with 
      regular css like this:
        .my-button {
        background-color: var(--mantine-color-blue-6);
        font-family: var(--mantine-font-family);
        line-height: var(--mantine-line-height);
        }
        For more details see https://mantine.dev/theming/mantine-provider/

        */}

      {/* Add your theme here */}
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
