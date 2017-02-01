
import { expect } from 'chai';
import fetchMock from 'fetch-mock';

import Catalog from '../../js/services/Catalog';

const PRODUCTS = [
    'toto',
];

fetchMock
    .mock(`${SERVER_ROOT}/catalog/1/products`, { // eslint-disable-line no-undef
        products: PRODUCTS,
    });

describe('Catalog service', () => {
    const catalog = Catalog(SERVER_ROOT); // eslint-disable-line no-undef
    it('should return products with getProducts', (done) => {
        catalog.getProducts(1)
            .then((request) => {
                expect(request).to.deep.equal({
                    products: PRODUCTS,
                });
                done();
            })
            .catch(done);
    });
});
