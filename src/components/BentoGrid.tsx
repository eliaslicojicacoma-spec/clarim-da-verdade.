import { motion } from "motion/react";
import { Music, Users, Quote, ArrowRight } from "lucide-react";

export const BentoGrid = () => {
  return (
    <section id="recursos" className="section-padding px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 min-h-[400px] md:h-[500px] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-secondary font-black mb-3 md:mb-4 block">Destaque</span>
              <h3 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-none tracking-tighter text-white">ESTUDOS BÍBLICOS <br className="hidden md:block" /> PROFUNDOS</h3>
              <a href="#estudos" className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-white hover:text-secondary transition-colors">
                Acessar Biblioteca <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 min-h-[300px] md:h-[500px] glass-dark rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-6 md:mb-0">
              <Music className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-tighter uppercase text-white">Hinário <br className="hidden md:block" /> Digital</h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">Mais de 500 hinos catalogados para o seu momento de adoração diária.</p>
              <a href="#hinario" className="w-full py-3 md:py-4 glass-light rounded-2xl text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-white hover:bg-white hover:text-black transition-all text-center block">
                Abrir Hinário
              </a>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 min-h-[250px] md:h-[350px] glass-dark rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity text-white">
              <Users className="w-20 h-20 md:w-32 md:h-32" />
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase tracking-tighter text-white">Comunidade</h3>
            <p className="text-white/40 text-xs md:text-sm leading-relaxed">Conecte-se com irmãos do Lubango e de todo o mundo.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 min-h-[250px] md:h-[350px] bg-secondary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-primary"
          >
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase tracking-tighter">Versículo do Dia</h3>
            <Quote className="w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 opacity-40" />
            <p className="text-lg md:text-xl font-serif italic font-bold leading-snug mb-4 md:mb-6">
              "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho."
            </p>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Salmos 119:105</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 min-h-[200px] md:h-[350px] glass-dark rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center items-center text-center"
          >
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">24/7</div>
            <div className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">Disponível para você</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
