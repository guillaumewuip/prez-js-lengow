
import Catalog from './services/Catalog';

/**
 * On expose le nom des actions pour les utiliser facilement dans d'autres
 * fichiers
 */

export const INIT              = 'INIT';
export const PRODUCTS_LOADING  = 'PRODUCTS_LOADING';
export const NEW_PRODUCTS      = 'NEW_PRODUCTS';
// TODO when fetch error
export const PRODUCTS_ERROR    = 'PRODUCTS_ERROR';

/**
 * Nos actions
 */

/**
 * On vient de récupérer de nouveaux produits
 *
 * N'est pas exposé car appelée uniquement ici
 */
const newProductsSuccess = (newProducts) => ({
    newProducts,
    receiveAt: Date.now(),
    type:      NEW_PRODUCTS,
});

/**
 * On vient de lancer un fetch de produits
 *
 * N'est pas exposé car appelée uniquement ici
 */
const loading = () => ({
    type: PRODUCTS_LOADING,
});

/**
 * On veut charge de nouveaux produits
 *
 * C'est une action asynchone qui retourne donc une fonction recevant le
 * `dispatch` nécessaire pour appeler d'autres actions
 */
export const fetchProducts = (catalog) => (dispatch) => {
    dispatch(loading()); // dispatch the loading state

    // on utilise notre service
    return Catalog(SERVER_ROOT) // eslint-disable-line no-undef
        .getProducts(catalog)
        // on dispatch le résultat
        .then((res) => dispatch(newProductsSuccess(res.products)))
        .catch((err) => {
            throw new Error(err); // TODO dispatch error here
        });
};

