
import { expect } from 'chai';
import fetchMock from 'fetch-mock';

import Catalog from '../../js/services/Catalog';
import { SERVER_ROOT } from '../../js/constants';

const PRODUCTS = [
    'toto',
];

fetchMock
    .mock(`${SERVER_ROOT}/catalog/1/products`, {
        products: PRODUCTS,
    });

describe('Catalog service', () => {
    const catalog = Catalog(SERVER_ROOT);
    it('should return products with getProducts', () => {
        catalog.getProducts(1)
            .then((products) => {
                expect(products).to.equal('toto');
            });
    });
});
