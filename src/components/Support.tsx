import { motion } from "motion/react";
import { Heart, Copy, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Support = () => {
  const { monetization } = siteConfig;

  return (
    <section id="apoie" className="section-padding px-4 md:px-6">
      <div className="max-w-5xl mx-auto glass-dark rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Heart size={48} className="mx-auto mb-8 md:mb-12 text-secondary animate-pulse" />
          <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter uppercase text-white">Semeie nesta Missão</h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-12 md:mb-16 font-light">
            Sua contribuição é o combustível que mantém o Clarim da Verdade alcançando vidas. Juntos, levamos a palavra de Deus mais longe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="p-8 md:p-12 glass-light rounded-[2rem] md:rounded-[3rem] border border-white/10 hover:border-secondary/40 transition-all group">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-4 md:mb-6">PIX (Brasil)</h4>
              <div className="text-base md:text-xl font-mono font-bold text-secondary mb-6 md:mb-8 break-all">{monetization.pix}</div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(monetization.pix);
                  alert("Chave PIX copiada!");
                }}
                className="flex items-center gap-3 mx-auto text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-white/60 group-hover:text-white"
              >
                <Copy size={14} /> Copiar Chave
              </button>
            </div>
            <div className="p-8 md:p-12 glass-light rounded-[2rem] md:rounded-[3rem] border border-white/10 hover:border-secondary/40 transition-all group">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-4 md:mb-6">PayPal</h4>
              <div className="text-base md:text-xl font-mono font-bold text-secondary mb-6 md:mb-8 break-all">{monetization.paypal}</div>
              <a href={`mailto:${monetization.paypal}`} className="flex items-center gap-3 mx-auto text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-white/60 group-hover:text-white">
                <ExternalLink size={14} /> Doar Agora
              </a>
            </div>
          </div>

          <div className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white/20 font-black italic">
            "Deus ama ao que dá com alegria" — 2 Coríntios 9:7
          </div>
        </motion.div>
      </div>
    </section>
  );
};
