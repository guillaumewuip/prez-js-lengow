
import { Map, fromJS } from 'immutable';
import { INIT, NEW_PRODUCTS, PRODUCTS_LOADING } from './actions';

const init = () => fromJS({
    products: [],
    loading:  false,
});

/**
 * Le reducer
 *
 * Si le reducer devient trop gros, on peut le découper et utiliser
 * `combineReducer`
 *
 * Dès que la gestion d'une action devient trop grande, on crée une fonction
 * comme init()
 *
 * @param  {Immutable}  state
 * @param  {Object}     action
 * @param  {Object}     action.type
 *
 * @return {Immutable}                  Un nouveau state
 */
const reducer = (state = Map(), action) => {
    switch (action.type) {
    case INIT:
        return init();
    case PRODUCTS_LOADING: // On charge des produits
        return state.set('loading', true);
    case NEW_PRODUCTS: // On a récupéré de nouveaux produits
        return state
            .set('loading', false)
            .update(
                'products',
                (products) => products.concat(fromJS(action.newProducts))
            );
    default:
        return state;
    }
};

export default reducer;
