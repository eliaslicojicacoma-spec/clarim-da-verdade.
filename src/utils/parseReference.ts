export function parseReference(reference: string) {
  // Simple parser for "Book Chapter:Verse"
  const [book, rest] = reference.split(' ');
  const [chapter, verse] = rest.split(':');
  return { book, chapter, verse };
}
