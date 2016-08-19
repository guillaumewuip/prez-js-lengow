
/**
 * Filtre des produits sur le tire, le prix et l'image
 *
 * Si pas de search query, on accèpte tout
 */
const filter = (search) => (product) => (
    search === ''
        || product.get('title').toLowerCase().includes(search)
        || product.get('price').toLowerCase().includes(search)
        || product.get('img').toLowerCase().includes(search)
);

export default filter;
