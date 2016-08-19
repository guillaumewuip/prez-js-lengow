
const filter = (search) => (product) => (
    search === ''
        || product.get('title').toLowerCase().includes(search)
        || product.get('price').toLowerCase().includes(search)
        || product.get('img').toLowerCase().includes(search)
);

export default filter;
