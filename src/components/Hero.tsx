import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            alt="Atmospheric Bible" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black mb-8 md:mb-12 text-secondary animate-pulse">
            <Sparkles size={12} /> Proclamando a Verdade
          </span>
          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter mb-8 md:mb-12 text-gradient italic">
            CLARIM DA <br/> VERDADE
          </h1>
          <p className="text-base md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 md:mb-16">
            {siteConfig.description} <br className="hidden md:block" />
            <span className="text-white/40 italic text-sm md:text-base">{siteConfig.location} — Angola</span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <a href="#missao" className="w-full md:w-auto group relative px-10 md:px-12 py-4 md:py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-full overflow-hidden transition-all hover:scale-105 text-center">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Explorar Missão <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <button className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-white/40 hover:text-white transition-all">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all">
                <Play size={14} fill="currentColor" />
              </div>
              Assista o Vídeo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
