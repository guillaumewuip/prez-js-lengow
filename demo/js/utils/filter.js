
/**
 * Filtre des produits sur le tire, le prix et l'image
 *
 * Si pas de search query, on accèpte tout
 */
const filter = (search) => (product) => (
    search === ''
        || product.get('title').toLowerCase().includes(search.toLowerCase())
        || product.get('price').toLowerCase().includes(search.toLowerCase())
        || product.get('img').toLowerCase().includes(search.toLowerCase())
);

export default filter;
