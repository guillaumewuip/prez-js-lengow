
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { fromJS, List } from 'immutable';

import Grid from '../../js/components/Grid.jsx';
import Search from '../../js/components/Search.jsx';
import Product from '../../js/components/Product.jsx';
import Button from '../../js/components/Button.jsx';
import Loader from '../../js/components/Loader.jsx';

const product = fromJS({
    title: 'title',
    img:   'img',
    price: '10 €',
});

describe('Grid', () => {
    it('should have a filer bar', () => {
        const wrapper = shallow(
            <Grid products={List()} />
        );

        expect(wrapper.find('.filters-box')).to.have.length(1);
        expect(wrapper.find('.filters-box .filters-selects')).to.have.length(1);
        expect(wrapper.find('.filters-selects').children().get(0).type)
            .to.have.equal(Search);
    });

    it('should have a products container', () => {
        const wrapper = shallow(
            <Grid products={List()} />
        );

        expect(wrapper.find('.catalog-products')).to.have.length(1);
    });

    it('should have the good number of catalogs', () => {
        const NB = 3;
        const
            wrapper1 = shallow(
                <Grid products={List()} />
            ),
            wrapper2 = shallow(
                <Grid products={Array(NB).fill(product)} />
            );

        expect(wrapper1.find('.catalog-products').children())
            .to.have.length(0);

        expect(wrapper2.find('.catalog-products').children())
            .to.have.length(3);

        expect(wrapper2.find('.catalog-products')
                .children().first().type()).to.equal(Product);
    });

    it('should display message when no catalogs', () => {
        const wrapper = shallow(
            <Grid products={List()} />
        );

        expect(wrapper.find('.no-content')).to.have.length(1);
    });

    it('should display Show more button when there are catalogs', () => {
        const wrapper = shallow(
            <Grid products={List([product])} />
        );

        expect(wrapper.find(Button)).to.have.length(1);
    });

    it('should display Loader when fetching is true', () => {
        const wrapper = shallow(
            <Grid fetching products={List([product])} />
        );

        expect(wrapper.find(Loader)).to.have.length(1);
    });
});
