/** Vrai si la valeur est renseignée (différente du placeholder « A_COMPLETER »). */
export const estRempli = (valeur: string): boolean =>
  Boolean(valeur) && valeur !== 'A_COMPLETER';

/** Extrait l'identifiant « @pseudo » d'une URL de réseau social. */
export const pseudoDepuisUrl = (url: string): string => {
  try {
    const segment = new URL(url).pathname.split('/').filter(Boolean).pop() ?? '';
    return segment.startsWith('@') ? segment : `@${segment}`;
  } catch {
    return '';
  }
};
