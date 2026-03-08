import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SearchInput({ 
  placeholder = "Pesquisar...", 
  className 
}: { 
  placeholder?: string; 
  className?: string; 
}) {
  return (
    <div className={cn("relative group", className)}>
      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-secondary transition-colors" size={18} />
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-8 py-4 outline-none focus:border-secondary transition-all text-white"
      />
    </div>
  );
}
