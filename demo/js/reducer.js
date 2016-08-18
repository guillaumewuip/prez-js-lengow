
import { Map, fromJS } from 'immutable';
import { INIT, NEW_PRODUCTS, PRODUCTS_LOADING } from './actions';

const init = () => fromJS({
    products: [],
    loading:  false,
});

const reducer = (state = Map(), action) => {
    switch (action.type) {
    case INIT:
        return init();
    case PRODUCTS_LOADING:
        return state.set('loading', true);
    case NEW_PRODUCTS:
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
