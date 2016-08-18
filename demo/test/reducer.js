
import { fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../js/reducer';

describe('reducer', () => {
    it('should handle INIT action', () => {
        const state = reducer(null, {
            type: 'INIT',
        });

        expect(state.get('loading')).to.equal(false);
        expect(state.get('products').size).to.equal(0);
    });

    it('should handle PRODUCTS_LOADING action', () => {
        const initState = reducer(null, {
            type: 'INIT',
        });
        const state = reducer(initState, {
            type: 'PRODUCTS_LOADING',
        });

        expect(state.get('loading')).to.equal(true);
    });

    it('should handle NEW_PRODUCTS action', () => {
        const initState = reducer(null, {
            type: 'INIT',
        }).set('loading', true);

        const PRODUCTS = [{
            id: 1234,
        }];

        const state = reducer(initState, {
            type:        'NEW_PRODUCTS',
            newProducts: PRODUCTS,
        });

        expect(state.get('loading')).to.equal(false);
        expect(state.get('products').equals(fromJS(PRODUCTS))).to.equal(true);
    });
});
