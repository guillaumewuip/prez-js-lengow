
# Petite Démo

Mise en place de la stack ES6, React, Redux & Cie pour afficher par exemple
la liste des produits d'un catalogue.

Testé uniquement avec node 6.4.0.

# Lancer la démo

- Installer les dépendences `npm install`
- Lancer le mini serveur `node server.js`
- Lancer gulp `gulp`
- Aller sur [localhost:3000](http://localhost:3000)

# Ce qu'il faut savoir

## Archi

```
├── css                 # juste les styles qu'il faut
├── img
│   └── products        # quelques images random
├── js
│   ├── components/     # les vues React
│   ├── services/
│   │   └── Catalog.js  # le service
│   ├── utils
│   │   └── filter.js   # un helper pour filter les produits
│   ├── actions.js      # les actions Redux
│   ├── constants.json  # quelques constantes (pas forcément idéalement placées)
│   ├── reducer.js      # le reducer
│   └── index.js        # entrypoint, création du store et attachement du
│                       # composant au DOM
├── test                # les tests de tout
│   ├── components
│   ├── services
│   └── utils
├── .eslintrc.json      # la config ESLint (basé sur les règles Airbnb)
├── package.json
├── gulpfile.js         # la config de gulp
├── server.js           # le mini server pour retourner les produits
└── index.html
```

## Gulp

Ce bon vieux `gulp` fait pas mal de choses :

- lint à chaque changement d'un fichier `.js`  ou `.jsx`
- lancement des tests à chaque changement d'un fichier `.js`  ou `.jsx`
- build du JS via webpack à chaque changement d'un fichier `.js`  ou `.jsx`
- live reload de la page à chaque changement d'un fichier `.js`  ou `.jsx`

Dans un environnement de prod, bien sûr, on laisserai gulp de côté pour servir
directement le résultat de webpack.

## Tests & Coverage

Pour lancer les tests à la main et/ou le coverage :
- `npm run test`
- `npm run coverage`

```
=============================== Coverage summary ===============================
Statements   : 96.2% ( 152/158 ), 4 ignored
Branches     : 97.26% ( 71/73 ), 18 ignored
Functions    : 89.47% ( 34/38 ), 1 ignored
Lines        : 92.31% ( 60/65 )
================================================================================
```
(sans se forcer, pas mal non ?)

## Commentaires

Les éléments clés de la démo sont commentés 💪

