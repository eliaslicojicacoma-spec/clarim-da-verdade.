import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionShell } from '../shared/SectionShell';
import { Quote } from 'lucide-react';

export function TestimonySection() {
  return (
    <SectionShell id="testemunhos" className="bg-secondary/5">
      <SectionTitle 
        title="Vidas Transformadas" 
        subtitle="Testemunhos" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="glass-dark p-12 rounded-[3rem] relative">
            <Quote size={48} className="text-secondary/20 absolute top-12 right-12" />
            <p className="text-xl md:text-2xl font-serif italic text-white/80 mb-8 leading-relaxed">
              "Através dos estudos do Clarim da Verdade, minha compreensão das escrituras mudou completamente. Hoje sinto-me mais firme na fé."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10"></div>
              <div>
                <h4 className="font-bold text-white">João Manuel</h4>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Lubango, Angola</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
