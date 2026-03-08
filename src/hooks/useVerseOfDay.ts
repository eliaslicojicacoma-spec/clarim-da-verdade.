import { useState, useEffect } from 'react';

export function useVerseOfDay() {
  const [verse, setVerse] = useState({
    text: "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho.",
    reference: "Salmos 119:105"
  });

  return verse;
}
