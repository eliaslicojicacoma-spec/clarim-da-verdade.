import { useParams } from 'react-router-dom';

export function useLocale() {
  const { locale } = useParams();
  return locale || 'pt';
}
