import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";

const studies = [
  {
    id: "1",
    title: "A Soberania de Deus na Salvação",
    excerpt: "Um estudo profundo sobre como a graça de Deus opera no coração do homem para a redenção eterna.",
    author: "Elias Licoji Cacoma",
    date: "15 Mai 2024",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "A Importância da Sã Doutrina",
    excerpt: "Por que devemos nos apegar aos ensinos bíblicos em um mundo de relativismo e falsos ensinos.",
    author: "Elias Licoji Cacoma",
    date: "10 Jun 2024",
    image: "https://images.unsplash.com/photo-1490730141103-6ac277a5bf4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Oração: O Fôlego da Alma",
    excerpt: "Explorando a vida de oração dos grandes homens da Bíblia e como podemos aplicar hoje.",
    author: "Elias Licoji Cacoma",
    date: "02 Jul 2024",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800"
  }
];

export const Studies = () => {
  return (
    <section id="estudos" className="section-padding px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-secondary font-black mb-6 block">Conhecimento</span>
            <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic text-white">Estudos <br/> Bíblicos</h2>
          </div>
          <button className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-white/40 hover:text-white transition-all flex items-center gap-3">
            Ver Todos os Estudos <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 relative">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Ler Agora</span>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-4 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-white/20">
                <span className="flex items-center gap-2"><User size={12} className="text-secondary" /> {study.author}</span>
                <span className="flex items-center gap-2"><Calendar size={12} className="text-secondary" /> {study.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase group-hover:text-secondary transition-colors">{study.title}</h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed font-light line-clamp-2">
                {study.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
