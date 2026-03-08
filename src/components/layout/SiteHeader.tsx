import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      const newState = !prev;
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return newState;
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-6 md:py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <span className="relative z-10 text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold tracking-tighter leading-none text-white">Clarim da Verdade-</span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/40">Missão Angola</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {['Início', 'Missão', 'Hinário', 'Estudos', 'Apoie'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-8 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-black rounded-full hover:bg-secondary transition-all"
          >
            Contato
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white glass-light rounded-full"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-10 p-6"
      >
        {['Início', 'Missão', 'Hinário', 'Estudos', 'Apoie', 'Contato'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black uppercase tracking-[0.2em] text-white hover:text-secondary transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
}
