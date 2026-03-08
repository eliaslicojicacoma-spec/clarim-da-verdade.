import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Mission = () => {
  return (
    <section id="missao" className="section-padding relative overflow-hidden px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050335456-1d07307a211f?auto=format&fit=crop&q=80&w=1000" 
                alt="Angola Mission" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-6 md:-top-12 -left-6 md:-left-12 w-32 md:w-64 h-32 md:h-64 bg-secondary/20 blur-[40px] md:blur-[80px] rounded-full z-0"></div>
            <div className="absolute -bottom-6 md:-bottom-12 -right-4 md:-right-12 glass-dark p-4 md:p-8 rounded-2xl md:rounded-3xl z-20 animate-float">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-white/40">Sede</div>
                  <div className="text-sm md:text-base font-bold text-white">{siteConfig.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-secondary font-black mb-6 md:mb-8 block">Nossa Origem</span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 md:mb-12 leading-[0.9] tracking-tighter uppercase italic text-white">{siteConfig.author}</h2>
            <div className="space-y-6 md:space-y-8 text-white/60 text-base md:text-lg leading-relaxed font-light">
              <p>
                No coração de Angola, em meio às paisagens majestosas da Huíla, ecoa uma voz que não se cala. {siteConfig.author} não apenas prega; ele vive a missão que Jesus Cristo confiou a cada um de nós.
              </p>
              <p>
                O Clarim da Verdade é mais que um site; é um farol digital. Nascido da necessidade de levar a luz do evangelho a cada canto do Lubango e além, rompendo as barreiras do tempo e do espaço.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">100%</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 font-black">Compromisso Bíblico</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">ANG</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 font-black">Raízes Africanas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
