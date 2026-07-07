# Matisse — site vitrine

Site statique des restaurants **Matisse** — Paris 14e (60 avenue du Général Leclerc) et Ivry-sur-Seine (10 bis rue Barbès) — construit avec [Astro](https://astro.build) : HTML pur, zéro JavaScript, SEO complet (meta par page, JSON-LD Restaurant ×2 + Menu, sitemap, robots.txt).

## Commandes

```sh
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # génère le site statique dans dist/
npm run preview    # prévisualise le build
```

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| La carte (plats, prix, badges) | `src/data/menu.json` |
| Adresses, horaires, téléphones, liens de commande (par restaurant), réseaux sociaux | `src/data/infos.json` (tableau `restaurants`) |
| Textes des pages | `src/pages/*.astro` |
| Couleurs, typo, espacements | `src/styles/global.css` |
| Articles de blog | `src/content/blog/*.md` |

### Ajouter un article de blog

Créer un fichier `.md` dans `src/content/blog/` avec ce frontmatter :

```md
---
titre: "Titre de l'article"
description: "Résumé pour le SEO (balise meta description)"
extrait: "Phrase d'accroche affichée sur la page /blog"
date: 2026-07-01
---

Contenu de l'article en Markdown.
```

Le fichier apparaît automatiquement sur `/blog` et à l'URL `/blog/<nom-du-fichier>`.

### À vérifier dans `src/data/infos.json`

- **Horaires d'Ivry** : récupérés depuis un annuaire en ligne (lun–mer & dim 11h–1h, jeu–sam 11h–2h) — à confirmer avec le restaurant. Format d'affichage dans `horaires[].heures`, format Google dans `horairesSchema[]` (`"11:00"` / `"01:00"`).
- Les boutons Uber Eats/Deliveroo et les liens réseaux n'apparaissent que si le champ est renseigné (placeholder `A_COMPLETER` sinon).

### Photos

Les photos vivent dans `src/assets/photos/` et sont intégrées avec le composant `<Image>` d'Astro (`astro:assets`), qui les redimensionne et optimise automatiquement au build. Pour ajouter une photo : déposer le fichier dans `src/assets/photos/`, l'importer dans la page et l'afficher via `<Image src={photo} alt="…" width={700} />`. Les fichiers non importés ne sont pas inclus dans le build (ex. `*-non-utilisee.*`).

### Image de partage (réseaux sociaux)

`public/images/og.png` est générée par `node scripts/generer-og.mjs` (à relancer si les infos changent), ou remplacez-la par une vraie photo 1200×630.

## Déploiement

`npm run build` produit un dossier `dist/` 100 % statique, déployable tel quel sur Netlify, Vercel, Cloudflare Pages ou n'importe quel hébergement (upload FTP du contenu de `dist/`).

Le site est configuré pour le domaine **matissefood.fr** (`site` dans `astro.config.mjs` + `Sitemap:` dans `public/robots.txt`). Si le domaine change, mettre à jour ces deux fichiers puis rebuilder.

Déployé sur **Vercel**, connecté à ce dépôt GitHub : chaque `git push` sur `main` redéploie automatiquement le site en production.

## Après la mise en ligne (SEO)

1. Déclarer le site dans [Google Search Console](https://search.google.com/search-console) et soumettre `sitemap-index.xml`.
2. Créer/mettre à jour la fiche **Google Business Profile** avec le lien du site.
3. Vérifier les données structurées avec le [test des résultats enrichis](https://search.google.com/test/rich-results).
