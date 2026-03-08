import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

interface ContentHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

export function ContentHero({ title, subtitle, description, image }: ContentHeroProps) {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        </div>
      )}
      <Container className="relative z-10 text-center">
        {subtitle && (
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] text-secondary font-black mb-6 block"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic text-white mb-8"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
