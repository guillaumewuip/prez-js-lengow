
import { expect } from 'chai';

import { fetchProducts, PRODUCTS_LOADING } from '../js/actions';

describe('actions', () => {
    it('fetchProducts should dispach loading action first', function (done) {
        const dispatch = (action) => {
            expect(action.type).to.equal(PRODUCTS_LOADING);
            done();
        };

        expect(fetchProducts(1)(dispatch)).to.be.instanceOf(Promise);
    });
});

