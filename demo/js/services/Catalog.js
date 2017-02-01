
import 'isomorphic-fetch';

const Catalog = (root) => ({
    getProducts(catalog) {
        return (fetch(`${root}/catalog/${catalog}/products`)
            .then((res) => res.json()));
    },
});

export default Catalog;

