import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from './Button';
import { useNavigate, useParams } from 'react-router-dom';

export function LanguageSwitcher() {
  const navigate = useNavigate();
  const { locale } = useParams();

  const toggleLanguage = () => {
    const nextLocale = locale === 'pt' ? 'en' : 'pt';
    navigate(`/${nextLocale}`);
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2 uppercase tracking-widest font-black text-[10px]">
      <Globe size={16} />
      {locale}
    </Button>
  );
}
