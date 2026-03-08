import { motion } from "motion/react";
import { Book as BookIcon, ShoppingCart, Star } from "lucide-react";

const books = [
  {
    id: "1",
    title: "O Caminho da Verdade",
    author: "Elias Licoji Cacoma",
    price: "KZ 5.000",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    description: "Um guia prático para a vida cristã no século XXI."
  },
  {
    id: "2",
    title: "Luz nas Trevas",
    author: "Elias Licoji Cacoma",
    price: "KZ 4.500",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    description: "Como a palavra de Deus ilumina os caminhos mais obscuros."
  },
  {
    id: "3",
    title: "Missão e Evangelismo",
    author: "Elias Licoji Cacoma",
    price: "KZ 6.000",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    description: "Estratégias bíblicas para alcançar Angola para Cristo."
  }
];

export const Books = () => {
  return (
    <section id="livros" className="section-padding px-4 md:px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-secondary font-black mb-6 block">Literatura</span>
            <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic text-white">Livraria <br/> Cristã</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-white/40">+200 Leitores satisfeitos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark rounded-[2.5rem] p-8 md:p-10 flex flex-col group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 relative shadow-2xl">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary shadow-lg">
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black text-secondary mb-3">{book.author}</div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase">{book.title}</h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-8 font-light">
                  {book.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="text-xl md:text-2xl font-black text-white">{book.price}</div>
                <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-secondary transition-all">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
