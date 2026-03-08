import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Music, ChevronRight, X } from "lucide-react";

const hymns = [
  { id: "1", number: 1, title: "Santo, Santo, Santo", content: "Santo! Santo! Santo! Deus Onipotente!\nCedo de manhã cantaremos Teu louvor.\nSanto! Santo! Santo! Justo e compassivo!\nÉs Deus triuno, excelso Criador." },
  { id: "2", number: 2, title: "Castelo Forte", content: "Castelo forte é nosso Deus,\nEspada e bom escudo;\nCom Seu poder defende os Seus,\nEm todo transe agudo." },
  { id: "3", number: 3, title: "Grandioso és Tu", content: "Senhor meu Deus, quando eu maravilhado,\nFico a pensar nas obras de Tuas mãos,\nNo céu azul de estrelas pontilhado,\nO Teu poder mostrando a criação." },
  // Add more hymns as needed
];

export const Hymnal = () => {
  const [search, setSearch] = useState("");
  const [selectedHymn, setSelectedHymn] = useState<typeof hymns[0] | null>(null);

  const filteredHymns = useMemo(() => {
    return hymns.filter(h => 
      h.title.toLowerCase().includes(search.toLowerCase()) || 
      h.number.toString().includes(search)
    );
  }, [search]);

  return (
    <section id="hinario" className="section-padding px-4 md:px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-secondary font-black mb-6 block">Adoração</span>
            <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic text-white">Hinário <br/> Digital</h2>
          </div>
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por número ou título..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-secondary transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredHymns.map((hymn) => (
            <motion.div
              key={hymn.id}
              layoutId={hymn.id}
              onClick={() => setSelectedHymn(hymn)}
              className="glass-dark p-6 rounded-3xl cursor-pointer hover:border-secondary/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary font-black">
                  {hymn.number}
                </div>
                <Music size={16} className="text-white/20 group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{hymn.title}</h3>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-white/40 group-hover:text-white transition-colors">
                Ler Letra <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedHymn && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedHymn(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              />
              <motion.div 
                layoutId={selectedHymn.id}
                className="relative w-full max-w-2xl glass-dark rounded-[2.5rem] overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-black mb-2 block">Hino {selectedHymn.number}</span>
                      <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{selectedHymn.title}</h3>
                    </div>
                    <button 
                      onClick={() => setSelectedHymn(null)}
                      className="w-12 h-12 glass-light rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="text-lg md:text-2xl text-white/80 font-serif leading-relaxed whitespace-pre-line text-center italic">
                    {selectedHymn.content}
                  </div>
                </div>
                <div className="bg-secondary p-6 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Clarim da Verdade — Adoração</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
