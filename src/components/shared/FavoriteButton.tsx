import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

export function FavoriteButton({ className }: { className?: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button 
      onClick={() => setIsFavorite(!isFavorite)}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center transition-all",
        isFavorite ? "bg-secondary text-primary" : "glass-dark text-white hover:bg-white hover:text-black",
        className
      )}
    >
      <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
    </button>
  );
}
