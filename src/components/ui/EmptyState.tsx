import React from 'react';
import { Search } from 'lucide-react';

export function EmptyState({ 
  title = "Nenhum resultado encontrado", 
  description = "Tente ajustar sua busca ou filtros para encontrar o que procura." 
}: { 
  title?: string; 
  description?: string; 
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/20 mb-8">
        <Search size={40} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/40 max-w-xs mx-auto">{description}</p>
    </div>
  );
}
