
const
    fs      = require('fs'),
    path    = require('path'),
    uuid    = require('uuid'),
    express = require('express'),
    app     = express();

const
    PORT        = process.env.PORT || 8080,
    IMAGE_DIR   = process.env.IMAGE_DIR || 'img/products',
    NB_PRODUCTS = 200,
    MAX_PRICE   = 300,
    TIMEOUT     = 1000; // fake response timeout

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
    const nbWords = random(1, 4); // random number of words

    const words = Array.from(Array(nbWords)).map(() => {
        const index = random(0, names.length); // random word

        return names[index];
    });

    return words.join(' ');
};

const buildProduct = (images, names, maxPrice) => {
    const index = random(0, images.length);
    return {
        id:    uuid.v4(),
        title: buildProductName(names),
        img:   images[index], // random image
        price: `${random(0, maxPrice)} €`, // random price
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
        setTimeout(() => res.json(
            buildProducts(NB_PRODUCTS, images, NAMES_PARTS, MAX_PRICE)
        ), TIMEOUT);
    });

    app.use(express.static(path.join(__dirname, './')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './index.html'));
    });

    app.listen(PORT, () => {
        console.log(`Listenning on port ${PORT}`);
    });
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

readImages(IMAGE_DIR)
    .then(start)
    .catch((err) => {
        throw new Error(err);
    });

