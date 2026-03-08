import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../providers/ThemeProvider';
import { Button } from './Button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
}
