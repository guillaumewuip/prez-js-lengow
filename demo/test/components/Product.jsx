
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Product from '../../js/components/Product.jsx';

describe('Product', () => {
    const data = {
        title: 'title',
        img:   'toto.png',
        price: 'price',
    };
    const product = shallow(
        <Product
            title={data.title}
            img={data.img}
            price={data.price}
        />
    );

    it('should have a root', () => {
        const root = product.is('.catalog-product');
        expect(root).to.equal(true);
    });

    it('should have an image', () => {
        const img = product.find('img.catalog-product-image');
        expect(img).to.have.length(1);
        expect(img.prop('src')).to.equal(data.img);
        expect(img.prop('alt')).to.equal(data.title);
    });

    it('should have an title', () => {
        const title = product.find('.catalog-product-title');
        expect(title).to.have.length(1);
        expect(title.text()).to.contain(data.title);
    });
});
