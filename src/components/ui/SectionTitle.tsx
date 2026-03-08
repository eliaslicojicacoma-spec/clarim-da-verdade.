import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ title, subtitle, className, align = 'center' }: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-20",
      align === 'center' && "text-center",
      align === 'right' && "text-right",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-secondary font-black mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
}
