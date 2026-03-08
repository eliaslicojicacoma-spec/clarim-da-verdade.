import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, X, MessageCircle, Bot, User, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Olá! Sou o assistente do Clarim da Verdade. Como posso ajudar você hoje com dúvidas bíblicas ou sobre nossa missão?' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "Você é o assistente virtual do 'Clarim da Verdade', uma missão cristã em Lubango, Angola, liderada por Elias Licoji Cacoma. Seu objetivo é ajudar os usuários com dúvidas bíblicas, fornecer informações sobre a missão, hinos e estudos. Seja sempre respeitoso, use uma linguagem cristã acolhedora e baseie suas respostas na sã doutrina bíblica. Se não souber algo específico sobre a missão que não esteja no contexto, direcione o usuário para entrar em contato via WhatsApp ou E-mail.",
        }
      });

      const aiText = response.text || "Desculpe, tive um problema ao processar sua resposta. Por favor, tente novamente.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Ocorreu um erro ao conectar com o assistente. Verifique sua conexão." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-[110] w-14 h-14 md:w-16 md:h-16 bg-secondary text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-2 -right-2 bg-white text-black text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">AI</div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 left-8 z-[120] w-[calc(100vw-4rem)] md:w-96 h-[500px] glass-dark rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-white">Assistente Clarim</div>
                  <div className="text-[8px] uppercase tracking-widest text-secondary font-black flex items-center gap-1">
                    <div className="w-1 h-1 bg-secondary rounded-full animate-pulse"></div> Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 glass-light rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-primary font-bold rounded-tr-none' 
                      : 'glass-light text-white/80 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass-light p-4 rounded-2xl rounded-tl-none">
                    <Loader2 size={16} className="text-secondary animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white/5 border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua dúvida bíblica..."
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white text-sm outline-none focus:border-secondary transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
