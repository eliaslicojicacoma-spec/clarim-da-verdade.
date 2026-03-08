import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionShell } from '../shared/SectionShell';

export function FeaturedArticles() {
  return (
    <SectionShell id="blog">
      <SectionTitle 
        title="Últimos Artigos" 
        subtitle="Blog & Notícias" 
        align="left"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-dark rounded-3xl overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/article${i}/800/600`} 
                alt="Article" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <span className="text-[8px] uppercase tracking-widest text-secondary font-black mb-4 block">Teologia</span>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">A Importância da Sã Doutrina nos Dias Atuais</h3>
              <p className="text-white/40 text-sm mb-6 line-clamp-2">Explorando os fundamentos da fé cristã e como permanecer firme diante das heresias modernas.</p>
              <button className="text-[10px] uppercase tracking-widest font-black text-white hover:text-secondary transition-colors">Ler Mais</button>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
