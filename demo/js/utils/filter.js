
/**
 * Filter products on title, price and image
 *
 * If no seach query, return everything
 */
const filter = (search) => (product) => (
    search === ''
        || product.get('title').toLowerCase().includes(search.toLowerCase())
        || product.get('price').toLowerCase().includes(search.toLowerCase())
        || product.get('img').toLowerCase().includes(search.toLowerCase())
);

export default filter;
