import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export function SiteFooter() {
  const contact = {
    email: "eliaslicojicacoma@gmail.com",
    whatsapp: "+244933522616",
    facebook: "https://www.facebook.com/share/1DeT9sjHyp/",
    instagram: "https://www.instagram.com/eliascacoma?igsh=bmM3MHg3NXp2Z3h3",
  };

  return (
    <footer id="contato" className="pt-20 md:pt-32 pb-12 bg-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-20 md:mb-32">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-black mb-8 md:mb-12 tracking-tighter uppercase italic text-white">Vamos <br className="hidden md:block" /> Conversar?</h2>
            <div className="space-y-8 md:space-y-12">
              <div className="group cursor-pointer">
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-2">E-mail</div>
                <div className="text-lg md:text-2xl font-bold text-white group-hover:text-secondary transition-colors break-all">{contact.email}</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-2">WhatsApp</div>
                <div className="text-lg md:text-2xl font-bold text-white group-hover:text-secondary transition-colors">{contact.whatsapp}</div>
              </div>
              <div className="flex gap-6 md:gap-8">
                <a href={contact.facebook} className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Facebook size={20} />
                </a>
                <a href={contact.instagram} className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 font-black">Nome</label>
                <input type="text" className="bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-secondary transition-colors text-white text-sm md:text-base" placeholder="Seu nome" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 font-black">Assunto</label>
                <input type="text" className="bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-secondary transition-colors text-white text-sm md:text-base" placeholder="Como podemos ajudar?" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-3 md:gap-4">
                <label className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 font-black">Mensagem</label>
                <textarea rows={4} className="bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-secondary transition-colors resize-none text-white text-sm md:text-base" placeholder="Sua mensagem..."></textarea>
              </div>
              <div className="md:col-span-2 pt-6 md:pt-8">
                <button className="w-full py-5 md:py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] md:text-xs rounded-2xl hover:bg-secondary transition-all">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 md:pt-12 border-t border-white/5 gap-6 md:gap-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.4em] text-white/20">© {new Date().getFullYear()} Clarim da Verdade-</span>
            <div className="w-1 h-1 bg-white/10 rounded-full hidden md:block"></div>
            <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.4em] text-white/20">Lubango, Angola</span>
          </div>
          <div className="flex gap-8 md:gap-12">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white cursor-pointer transition-colors">Privacidade</span>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white cursor-pointer transition-colors">Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
