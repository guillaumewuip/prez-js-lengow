
import { expect } from 'chai';

import { fetchProducts, PRODUCTS_LOADING } from '../js/actions';

describe('actions', () => {
    it('fetchProducts should dispach loading action first', function () {
        let ok = false;
        const dispatch = (action) => {
            console.log(action);
            ok = ok || (action.type === PRODUCTS_LOADING);
        };

        fetchProducts(1)(dispatch)
            .then(() => {
                expect(ok).to.equal(true);
            });
    });
});

