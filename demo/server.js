
const
    fs   = require('fs'),
    path = require('path'),
    app  = require('express')();

const
    PORT        = process.env.PORT || 8080,
    IMAGE_DIR   = process.env.IMAGE_DIR || 'img/products',
    NB_PRODUCTS = 10,
    MAX_PRICE   = 300;

const NAMES_PARTS = [
    'JARDIN',
    'ZEN',
    'JAPONAIS',
    'BOITE',
    'ASTROLOGIQUE',
    'TALISMAN',
    'BIRMAN',
    'RANGEMENT',
    'CHAISE',
    'TV',
    'KAKEMONO',
    '3',
    'BOUDDHAS',
    'TASSE',
];

const random = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const readImages = (dir) => new Promise((resolve, reject) => {
    fs.readdir(dir, (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data.map((i) => path.join(dir, i)));
        }
    });
});

const buildProductName = (names) => {
    const nbWords = random(1, 4);

    const words = Array.from(Array(nbWords)).map(() => {
        const index = random(0, names.length);

        return names[index];
    });

    return words.join(' ');
};

const buildProduct = (images, names, maxPrice) => {
    const index = random(0, images.length);
    return {
        title: buildProductName(names),
        img:   images[index],
        price: `${random(0, maxPrice)} €`,
    };
};

const buildProducts = (n, images, names, maxPrice) => {
    const products = Array.from(Array(n))
        .map(() => buildProduct(images, names, maxPrice));

    return {
        products,
    };
};

const start = (images) => {
    app.get('/catalog/:id/products', (req, res) => {
        res.json(buildProducts(NB_PRODUCTS, images, NAMES_PARTS, MAX_PRICE));
    });

    app.listen(PORT, () => {
        console.log(`Listenning on port ${PORT}`);
    });
};

readImages(IMAGE_DIR)
    .then(start)
    .catch((err) => {
        throw new Error(err);
    });

