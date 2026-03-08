import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

export function LocaleWrapper({ children }: { children: React.ReactNode }) {
  const { locale } = useParams();
  const supportedLocales = ['pt', 'en'];

  if (!locale || !supportedLocales.includes(locale)) {
    return <Navigate to="/pt" replace />;
  }

  return <>{children}</>;
}
