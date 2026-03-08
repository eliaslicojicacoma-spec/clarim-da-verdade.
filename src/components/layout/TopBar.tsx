import React from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Container } from './Container';

export function TopBar() {
  return (
    <div className="bg-black/50 backdrop-blur-md border-b border-white/5 py-2 relative z-[110]">
      <Container className="flex justify-end items-center gap-4">
        <LanguageSwitcher />
        <div className="w-[1px] h-4 bg-white/10"></div>
        <ThemeToggle />
      </Container>
    </div>
  );
}
