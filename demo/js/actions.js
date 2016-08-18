
import Catalog from './services/Catalog';
import { SERVER_ROOT } from './constants.json';

export const INIT              = 'INIT';
export const PRODUCTS_LOADING  = 'PRODUCTS_LOADING';
export const NEW_PRODUCTS      = 'NEW_PRODUCTS';
// TODO when fetch error
export const PRODUCTS_ERROR    = 'PRODUCTS_ERROR';

const newProductsSuccess = (newProducts) => ({
    newProducts,
    receiveAt: Date.now(),
    type:      NEW_PRODUCTS,
});

const loading = () => ({
    type: PRODUCTS_LOADING,
});

export const fetchProducts = (catalog) => (dispatch) => {
    dispatch(loading()); // dispatch the loading state

    return Catalog(SERVER_ROOT)
        .getProducts(catalog)
        .then((res) => dispatch(newProductsSuccess(res.products)))
        .catch((err) => {
            throw new Error(err); // TODO dispatch error here
        });
};

