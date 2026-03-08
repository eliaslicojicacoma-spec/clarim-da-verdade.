import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </HelmetProvider>
  );
}
