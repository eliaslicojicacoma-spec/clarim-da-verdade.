import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionShell } from '../shared/SectionShell';
import { Music } from 'lucide-react';

export function FeaturedHymns() {
  return (
    <SectionShell id="hinario">
      <SectionTitle 
        title="Hinário Digital" 
        subtitle="Louvor & Adoração" 
        align="right"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-dark p-8 rounded-3xl flex items-center gap-6 group hover:bg-white/5 transition-all">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Music size={32} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Hino #{i}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">Grandioso És Tu</h3>
              <p className="text-white/40 text-sm line-clamp-1">Senhor meu Deus, quando eu maravilhado...</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
