import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-black text-secondary mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">Página não encontrada</h2>
      <p className="text-white/60 mb-12 max-w-md">
        O conteúdo que você procura pode ter sido movido ou não existe mais.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-secondary transition-all"
      >
        Voltar ao Início
      </Link>
    </div>
  );
}
