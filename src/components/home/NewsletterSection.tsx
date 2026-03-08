import React from 'react';
import { SectionShell } from '../shared/SectionShell';

export function NewsletterSection() {
  return (
    <SectionShell className="bg-black">
      <div className="max-w-4xl mx-auto glass-dark p-12 md:p-20 rounded-[3rem] text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white">Fique por Dentro</h2>
        <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto">Receba novos estudos, hinos e notícias da missão diretamente no seu e-mail.</p>
        <form className="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 outline-none focus:border-secondary transition-all text-white"
          />
          <button className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-secondary transition-all">
            Assinar
          </button>
        </form>
      </div>
    </SectionShell>
  );
}
