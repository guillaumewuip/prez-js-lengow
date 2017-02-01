
# Demo

Demo of a React & Redux stack with ES6. Let's build a list of products.

Tested for node 6.4.0.

# Start demo

```
npm install
heroku local
```

# What you need to know

## Files

```
├── css                 # styles copied from Lengow
├── img
│   └── products        # random images
├── js
│   ├── components/     # React views
│   ├── services/
│   │   └── Catalog.js  # services
│   ├── utils
│   │   └── filter.js   # products filter helper
│   ├── actions.js      # Redux actions
│   ├── reducer.js      # reducer
│   └── index.js        # entrypoint, create store et add component to DOM
├── test                # test everything !
│   ├── components
│   ├── services
│   └── utils
├── .eslintrc.json      # ESLint config (from Airbnb)
├── package.json
├── gulpfile.js         # gulp config
├── server.js           # fake API server that returns fake products
└── index.html
```

## Gulp

On dev environnement, use `gulp` to build and test the code :

- lint for each `.js` or `.jsx` change
- tests for each `.js`  or `.jsx` change
- webpack build for each `.js`  or `.jsx` change

## Tests & Coverage

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

## Comments

Key elements are commented 💪

