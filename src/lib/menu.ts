import rawMenu from '../data/menu.json';

export interface MenuItemData {
  nom: string;
  prix: number;
  description: string | null;
  badges: string[];
}

export interface MenuGroupe {
  titre: string | null;
  items: MenuItemData[];
}

export interface MenuSection {
  id: string;
  titre: string;
  note: string | null;
  groupes: MenuGroupe[];
}

export interface MenuData {
  badges: Record<string, { emoji: string; label: string }>;
  sections: MenuSection[];
}

// menu.json contient des tableaux `badges` de formes littérales différentes
// (parfois toujours `[]`) : TypeScript en déduit un type trop étroit
// (`never[]`) par endroits. On force le type réel ici, une seule fois.
export const menu = rawMenu as MenuData;
