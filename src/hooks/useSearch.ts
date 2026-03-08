import { useState } from 'react';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async (q: string) => {
    setQuery(q);
    if (!q) {
      setResults([]);
      return;
    }
    setLoading(true);
    // Simulate search
    setTimeout(() => {
      setResults([]);
      setLoading(false);
    }, 500);
  };

  return { query, results, loading, search };
}
