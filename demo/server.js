
const
    fs  = require('fs'),
    app = require('express')();

const
    PORT      = process.env.PORT || 8080,
    IMAGE_DIR = process.env.IMAGE_DIR || 'img/products';

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
            resolve(data);
        }
    });
});

const buildProductName = () => {
    const nbWords = random(1, 4);

    const words = Array(nbWords).fill(0).map(() => {
        const index = random(0, NAMES_PARTS.length);

        return NAMES_PARTS[index];
    });

    return words.join(' ');
};

console.log(buildProductName());

process.exit();

readImages(IMAGE_DIR)
    .then(console.log.bind(console))
    .catch((err) => {
        throw new Error(err);
    });


app.get('/catalog/:id/products', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Listenning on port ${PORT}`);
});

