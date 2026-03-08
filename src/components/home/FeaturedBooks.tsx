import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionShell } from '../shared/SectionShell';
import { Book } from 'lucide-react';

export function FeaturedBooks() {
  return (
    <SectionShell id="livros" className="bg-white/5">
      <SectionTitle 
        title="Biblioteca Digital" 
        subtitle="Livros & Materiais" 
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="aspect-[3/4] w-full glass-dark rounded-2xl mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-secondary/20">
                <Book size={64} />
              </div>
              <img 
                src={`https://picsum.photos/seed/book${i}/400/600`} 
                alt="Book" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Manual do Obreiro</h3>
            <span className="text-[10px] uppercase tracking-widest text-white/40">Elias Licoji Cacoma</span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
