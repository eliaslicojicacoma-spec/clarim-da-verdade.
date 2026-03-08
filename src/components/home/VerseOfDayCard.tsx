import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function VerseOfDayCard() {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="md:col-span-4 min-h-[250px] md:h-[350px] bg-secondary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-primary"
    >
      <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase tracking-tighter">Versículo do Dia</h3>
      <Quote size={24} className="mb-4 md:mb-6 opacity-40" />
      <p className="text-lg md:text-xl font-serif italic font-bold leading-snug mb-4 md:mb-6">
        "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho."
      </p>
      <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Salmos 119:105</span>
    </motion.div>
  );
}
