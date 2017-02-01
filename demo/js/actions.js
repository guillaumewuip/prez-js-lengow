
import Catalog from './services/Catalog';

/**
 * Let's expose the actions names to use them in other files
 */

export const INIT              = 'INIT';
export const PRODUCTS_LOADING  = 'PRODUCTS_LOADING';
export const NEW_PRODUCTS      = 'NEW_PRODUCTS';
// TODO when fetch error
export const PRODUCTS_ERROR    = 'PRODUCTS_ERROR';

/**
 * Actions
 */

/**
 * We just loaded new products
 *
 * Don't need to be exposed because used here only
 */
const newProductsSuccess = (newProducts) => ({
    newProducts,
    receiveAt: Date.now(),
    type:      NEW_PRODUCTS,
});

/**
 * When we just started to fetch products
 *
 * Don't need to be exposed because used here only
 */
const loading = () => ({
    type: PRODUCTS_LOADING,
});

/**
 * We want to load new products
 *
 * This is an async action that return a function using `dispatch`.
 * `dispatch` is used to call other actions.
 */
export const fetchProducts = (catalog) => (dispatch) => {
    dispatch(loading()); // dispatch the loading state

    return Catalog(SERVER_ROOT) // eslint-disable-line no-undef
        .getProducts(catalog)
        // dispatch the résultat
        .then((res) => dispatch(newProductsSuccess(res.products)))
        .catch((err) => {
            throw new Error(err); // TODO dispatch error here
        });
};

