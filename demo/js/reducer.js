
import { Map, fromJS } from 'immutable';
import { INIT, NEW_PRODUCTS, PRODUCTS_LOADING } from './actions';

const init = () => fromJS({
    products: [],
    loading:  false,
});

/**
 * Teducer
 *
 * If the reducer is too big, just split it and use `combineReducer`
 *
 * As soon as an action handler is to big, we create a function like init()
 *
 * @param  {Immutable}  state
 * @param  {Object}     action
 * @param  {Object}     action.type
 *
 * @return {Immutable}                  A new state
 */
const reducer = (state = Map(), action) => {
    switch (action.type) {
    case INIT:
        return init();
    case PRODUCTS_LOADING: // We just start loading new products
        return state.set('loading', true);
    case NEW_PRODUCTS: // We just loaded new products
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
